import { questions } from '../data/questions';
import { submitResponses } from '../utils/supabase';

export type GamePhase = 'login' | 'welcome' | 'questionnaire' | 'done';

export interface Answer {
	rating: 'skip' | 'important';
	selectedOptions?: string[];
	remark?: string;
}

let phase = $state<GamePhase>('login');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, Answer>>(new Map());
let startedAt = $state<number>(0);

const PASSWORD = import.meta.env.VITE_PUBLIC_PASSWORD || '';
const STORAGE_KEY = 'agids-logged-in';

// Restore session from localStorage
if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true') {
	phase = 'welcome';
}

export function getGameState() {
	return {
		get skipToEnd() {
			return skipToEnd;
		},
		get phase() {
			return phase;
		},
		get currentQuestionIndex() {
			return currentQuestionIndex;
		},
		get currentQuestion() {
			return questions[currentQuestionIndex];
		},
		get totalQuestions() {
			return questions.length;
		},
		get answers() {
			return answers;
		},
		get currentPhase() {
			return questions[currentQuestionIndex]?.phase ?? '';
		},
		get progress() {
			return currentQuestionIndex / questions.length;
		},
		get isFirstQuestion() {
			return currentQuestionIndex === 0;
		},
		get isLastQuestion() {
			return currentQuestionIndex === questions.length - 1;
		}
	};
}

export function login(password: string): boolean {
	if (password === PASSWORD) {
		phase = 'welcome';
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, 'true');
		}
		return true;
	}
	return false;
}

export function startQuestionnaire(): void {
	phase = 'questionnaire';
	startedAt = Date.now();
}

export function rateQuestion(questionId: string, rating: 'skip' | 'important', selectedOptions?: string[], remark?: string): void {
	const answer: Answer = { rating };
	if (selectedOptions?.length) {
		answer.selectedOptions = selectedOptions;
	}
	if (remark?.trim()) {
		answer.remark = remark.trim();
	}
	answers.set(questionId, answer);
}

export function nextQuestion(): void {
	if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestion(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export function skipToEnd(): void {
	currentQuestionIndex = questions.length - 1;
}

export function submitAll(): void {
	const duration = startedAt ? Date.now() - startedAt : 0;
	let totalImportant = 0;
	let totalSkipped = 0;
	let totalRemarks = 0;

	const answersObj: Record<string, { rating: string; selectedOptions?: string[]; remark?: string }> = {};
	for (const [id, answer] of answers.entries()) {
		if (answer.rating === 'important') totalImportant++;
		else totalSkipped++;
		if (answer.remark) totalRemarks++;
		answersObj[id] = {
			rating: answer.rating,
			...(answer.selectedOptions?.length ? { selectedOptions: answer.selectedOptions } : {}),
			...(answer.remark ? { remark: answer.remark } : {})
		};
	}

	submitResponses({
		answers: answersObj,
		total_important: totalImportant,
		total_skipped: totalSkipped,
		total_remarks: totalRemarks,
		duration_ms: duration
	});

	phase = 'done';
}

export function resetGame(): void {
	phase = 'login';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	if (typeof window !== 'undefined') {
		localStorage.removeItem(STORAGE_KEY);
	}
}
