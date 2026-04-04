import { questionGroupsV8 } from '../data/questions-v8';
import type { V8Group } from '../data/questions-v8';
import { saveV8Session, loadV8Session, clearV8Session, submitWithRetry } from '../utils/persistence';

export type GamePhaseV8 = 'welcome' | 'review' | 'done';
export type SubmissionStatusV8 = 'idle' | 'submitting' | 'submitted' | 'queued';

let phase = $state<GamePhaseV8>('welcome');
let currentGroupIndex = $state(0);
let likedQuestions = $state<Set<string>>(new Set());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV8>('idle');

export function getGameStateV8() {
	return {
		get phase() {
			return phase;
		},
		get currentGroupIndex() {
			return currentGroupIndex;
		},
		get currentGroup(): V8Group {
			return questionGroupsV8[currentGroupIndex];
		},
		get totalGroups() {
			return questionGroupsV8.length;
		},
		get groups() {
			return questionGroupsV8;
		},
		get likedQuestions() {
			return likedQuestions;
		},
		get totalLiked() {
			return likedQuestions.size;
		},
		get progress() {
			return currentGroupIndex / questionGroupsV8.length;
		},
		get isFirstGroup() {
			return currentGroupIndex === 0;
		},
		get isLastGroup() {
			return currentGroupIndex === questionGroupsV8.length - 1;
		},
		get submissionStatus() {
			return submissionStatus;
		}
	};
}

function persistSession(): void {
	saveV8Session({
		likedQuestions: Array.from(likedQuestions),
		currentIndex: currentGroupIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startReviewV8(): void {
	const saved = loadV8Session();
	if (saved) {
		likedQuestions = new Set(saved.likedQuestions);
		currentGroupIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		likedQuestions = new Set();
		currentGroupIndex = 0;
		startedAt = Date.now();
	}
	submissionStatus = 'idle';
	phase = 'review';
}

export function toggleLikeV8(questionId: string): void {
	const next = new Set(likedQuestions);
	if (next.has(questionId)) {
		next.delete(questionId);
	} else {
		next.add(questionId);
	}
	likedQuestions = next;
	persistSession();
}

export function nextGroupV8(): void {
	if (currentGroupIndex < questionGroupsV8.length - 1) {
		currentGroupIndex++;
		persistSession();
	}
}

export function prevGroupV8(): void {
	if (currentGroupIndex > 0) {
		currentGroupIndex--;
		persistSession();
	}
}

export function goToGroupV8(index: number): void {
	if (index >= 0 && index < questionGroupsV8.length) {
		currentGroupIndex = index;
		persistSession();
	}
}

export async function submitAllV8(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const group of questionGroupsV8) {
		for (const variant of group.variants) {
			answersObj[variant.id] = {
				value: likedQuestions.has(variant.id) ? 'liked' : 'skipped'
			};
		}
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v8'
	});

	submissionStatus = result;
	clearV8Session();
	phase = 'done';
}

export function resetGameV8(): void {
	phase = 'welcome';
	currentGroupIndex = 0;
	likedQuestions = new Set();
	startedAt = 0;
	submissionStatus = 'idle';
	clearV8Session();
}
