import { filtersV5 } from '../data/filters-v5';
import { saveV5Session, loadV5Session, clearV5Session, submitWithRetry } from '../utils/persistence';

export type GamePhaseV5 = 'welcome' | 'filters' | 'processing' | 'result';
export type SubmissionStatusV5 = 'idle' | 'submitting' | 'submitted' | 'queued';

export interface Suggestion {
	title: string;
	description: string;
}

let phase = $state<GamePhaseV5>('welcome');
let currentFilterIndex = $state(0);
let filterValues = $state<Map<string, number>>(new Map());
let suggestions = $state<Suggestion[]>([]);
let submissionStatus = $state<SubmissionStatusV5>('idle');
let startedAt = $state<number>(0);

export function getGameStateV5() {
	return {
		get phase() {
			return phase;
		},
		get currentFilterIndex() {
			return currentFilterIndex;
		},
		get currentFilter() {
			return filtersV5[currentFilterIndex];
		},
		get totalFilters() {
			return filtersV5.length;
		},
		get filterValues() {
			return filterValues;
		},
		get progress() {
			return currentFilterIndex / filtersV5.length;
		},
		get isFirstFilter() {
			return currentFilterIndex === 0;
		},
		get isLastFilter() {
			return currentFilterIndex === filtersV5.length - 1;
		},
		get suggestions() {
			return suggestions;
		},
		get submissionStatus() {
			return submissionStatus;
		},
		get filters() {
			return filtersV5;
		}
	};
}

function persistSession(): void {
	const valuesObj: Record<string, number> = {};
	for (const [id, value] of filterValues.entries()) {
		valuesObj[id] = value;
	}
	saveV5Session({
		filterValues: valuesObj,
		currentIndex: currentFilterIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startV5(): void {
	const saved = loadV5Session();
	if (saved) {
		filterValues = new Map(Object.entries(saved.filterValues));
		currentFilterIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		filterValues = new Map();
		currentFilterIndex = 0;
		startedAt = Date.now();
	}
	suggestions = [];
	submissionStatus = 'idle';
	phase = 'filters';
}

export function setFilterValue(filterId: string, value: number, value2?: number): void {
	filterValues.set(filterId, value);
	if (value2 !== undefined) {
		filterValues.set(filterId + '_y', value2);
	}
	persistSession();
}

export function nextFilter(): void {
	if (currentFilterIndex < filtersV5.length - 1) {
		currentFilterIndex++;
	}
}

export function prevFilter(): void {
	if (currentFilterIndex > 0) {
		currentFilterIndex--;
	}
}

export async function submitAndSuggest(): Promise<void> {
	phase = 'processing';

	const filtersObj: Record<string, number> = {};
	for (const [id, value] of filterValues.entries()) {
		filtersObj[id] = value;
	}

	try {
		const res = await fetch('/api/v5-suggest', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ filters: filtersObj })
		});

		if (!res.ok) {
			throw new Error(`API error: ${res.status}`);
		}

		const data = await res.json();
		suggestions = data.suggestions ?? [];
	} catch (err) {
		console.error('Failed to get suggestions:', err);
		suggestions = [];
	}

	const duration = startedAt ? Date.now() - startedAt : 0;

	submissionStatus = 'submitting';
	const result = await submitWithRetry({
		answers: filtersObj as unknown as Record<string, { value?: string }>,
		duration_ms: duration,
		version: 'v5',
		suggestions: suggestions.length > 0 ? suggestions : undefined
	});
	submissionStatus = result;

	clearV5Session();
	phase = 'result';
}

export function resetGameV5(): void {
	phase = 'welcome';
	currentFilterIndex = 0;
	filterValues = new Map();
	suggestions = [];
	startedAt = 0;
	submissionStatus = 'idle';
	clearV5Session();
}
