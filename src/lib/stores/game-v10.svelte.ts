import { questionsV10 } from '../data/questions-v10';
import type { V10Question } from '../data/questions-v10';
import { saveV10Session, loadV10Session, clearV10Session, submitWithRetry } from '../utils/persistence';

export type GamePhaseV10 = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatusV10 = 'idle' | 'submitting' | 'submitted' | 'queued';

let phase = $state<GamePhaseV10>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, number>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV10>('idle');

export function getGameStateV10() {
	return {
		get phase() {
			return phase;
		},
		get currentQuestionIndex() {
			return currentQuestionIndex;
		},
		get currentQuestion(): V10Question {
			return questionsV10[currentQuestionIndex];
		},
		get totalQuestions() {
			return questionsV10.length;
		},
		get answers() {
			return answers;
		},
		get currentTheme() {
			return questionsV10[currentQuestionIndex]?.theme ?? '';
		},
		get progress() {
			return currentQuestionIndex / questionsV10.length;
		},
		get isFirstQuestion() {
			return currentQuestionIndex === 0;
		},
		get isLastQuestion() {
			return currentQuestionIndex === questionsV10.length - 1;
		},
		get submissionStatus() {
			return submissionStatus;
		}
	};
}

function persistSession(): void {
	const answersObj: Record<string, number> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = value;
	}
	saveV10Session({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaireV10(): void {
	const saved = loadV10Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers).map(([k, v]) => [k, Number(v)]));
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
	}
	submissionStatus = 'idle';
	phase = 'questionnaire';
}

export function rateQuestionV10(questionId: string, stars: number): void {
	const next = new Map(answers);
	next.set(questionId, stars);
	answers = next;
	persistSession();
}

export function nextQuestionV10(): void {
	if (currentQuestionIndex < questionsV10.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestionV10(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export async function submitAllV10(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, stars] of answers.entries()) {
		answersObj[id] = { value: String(stars) };
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v10'
	});

	submissionStatus = result;
	clearV10Session();
	phase = 'done';
}

export function resetGameV10(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	clearV10Session();
}
