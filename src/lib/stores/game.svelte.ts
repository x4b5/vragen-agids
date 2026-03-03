import { questions } from '../data/questions';
import { trackLoginSuccess, trackQuestionRated, trackQuestionnaireCompleted } from '../utils/analytics';

export type GamePhase = 'login' | 'questionnaire' | 'done';

export interface Answer {
	rating: 'skip' | 'important';
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
	phase = 'questionnaire';
}

export function getGameState() {
	return {
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
		phase = 'questionnaire';
		startedAt = Date.now();
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, 'true');
		}
		trackLoginSuccess();
		return true;
	}
	return false;
}

export function rateQuestion(questionId: string, rating: 'skip' | 'important', remark?: string): void {
	const question = questions.find((q) => q.id === questionId);
	const answer: Answer = { rating };
	if (remark?.trim()) {
		answer.remark = remark.trim();
	}
	answers.set(questionId, answer);

	trackQuestionRated({
		question_id: questionId,
		phase: question?.phase ?? '',
		rating,
		has_remark: !!answer.remark
	});
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

export function submitAll(): void {
	const duration = startedAt ? Date.now() - startedAt : 0;
	let totalImportant = 0;
	let totalSkipped = 0;
	let totalRemarks = 0;

	for (const answer of answers.values()) {
		if (answer.rating === 'important') totalImportant++;
		else totalSkipped++;
		if (answer.remark) totalRemarks++;
	}

	trackQuestionnaireCompleted({
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
