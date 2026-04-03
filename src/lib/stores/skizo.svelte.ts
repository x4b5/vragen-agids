import type { Question } from '../data/questions';
import { questions } from '../data/questions';
import { questionsV2 } from '../data/questions-v2';
import { questionsV3 } from '../data/questions-v3';
import { questionsV4 } from '../data/questions-v4';
import { personalities } from '../data/personalities';

export type SkizoPhase = 'input' | 'processing' | 'result';
export type SkizoVersion = 'v1' | 'v2' | 'v3' | 'v4';
export type SkizoDisplayMode = 'live' | 'direct';

let phase = $state<SkizoPhase>('input');
let selectedVersion = $state<SkizoVersion>('v4');
let selectedPersonality = $state('standaard');
let displayMode = $state<SkizoDisplayMode>('live');
let answers = $state<Map<string, string>>(new Map());
let currentDisplayIndex = $state(0);
let error = $state<string | null>(null);

function getQuestionsForVersion(version: SkizoVersion): Question[] {
	switch (version) {
		case 'v1':
			return questions;
		case 'v2':
			return questionsV2;
		case 'v3':
			return questionsV3;
		case 'v4':
			return questionsV4;
	}
}

export function getSkizoState() {
	return {
		get phase() {
			return phase;
		},
		get selectedVersion() {
			return selectedVersion;
		},
		get selectedPersonality() {
			return selectedPersonality;
		},
		get displayMode() {
			return displayMode;
		},
		get answers() {
			return answers;
		},
		get currentDisplayIndex() {
			return currentDisplayIndex;
		},
		get error() {
			return error;
		},
		get questions() {
			return getQuestionsForVersion(selectedVersion);
		},
		get personalities() {
			return personalities;
		}
	};
}

export function setVersion(version: SkizoVersion): void {
	selectedVersion = version;
}

export function setPersonality(id: string): void {
	selectedPersonality = id;
}

export function setDisplayMode(mode: SkizoDisplayMode): void {
	displayMode = mode;
}

export async function startAgent(): Promise<void> {
	phase = 'processing';
	error = null;
	answers = new Map();
	currentDisplayIndex = 0;

	try {
		const response = await fetch('/api/skizo', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				version: selectedVersion,
				personalityId: selectedPersonality
			})
		});

		if (!response.ok) {
			const data = await response.json().catch(() => ({ error: 'Onbekende fout' }));
			throw new Error(data.error ?? `HTTP ${response.status}`);
		}

		const data = await response.json();
		answers = new Map(Object.entries(data.answers as Record<string, string>));
		phase = 'result';

		if (displayMode === 'live') {
			currentDisplayIndex = 0;
			startLiveReveal();
		}
	} catch (e) {
		error = e instanceof Error ? e.message : 'Er ging iets mis';
		phase = 'input';
	}
}

function startLiveReveal(): void {
	const totalQuestions = getQuestionsForVersion(selectedVersion).length;
	const interval = setInterval(() => {
		if (currentDisplayIndex < totalQuestions - 1) {
			currentDisplayIndex++;
		} else {
			clearInterval(interval);
		}
	}, 1500);
}

export function resetSkizo(): void {
	phase = 'input';
	answers = new Map();
	currentDisplayIndex = 0;
	error = null;
}
