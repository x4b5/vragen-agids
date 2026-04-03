import { questionsV3 } from '../data/questions-v3';
import type { Question } from '../data/questions';
import { saveV3Session, loadV3Session, clearV3Session, submitWithRetry } from '../utils/persistence';
import { shuffle } from '../utils/shuffle';

export type GamePhaseV3 = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatusV3 = 'idle' | 'submitting' | 'submitted' | 'queued';

let phase = $state<GamePhaseV3>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, string>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV3>('idle');
let shuffledQuestions = $state<Question[]>(questionsV3);

export function getGameStateV3() {
	return {
		get phase() {
			return phase;
		},
		get currentQuestionIndex() {
			return currentQuestionIndex;
		},
		get currentQuestion() {
			return shuffledQuestions[currentQuestionIndex];
		},
		get totalQuestions() {
			return shuffledQuestions.length;
		},
		get answers() {
			return answers;
		},
		get currentPhase() {
			return shuffledQuestions[currentQuestionIndex]?.phase ?? '';
		},
		get progress() {
			return currentQuestionIndex / shuffledQuestions.length;
		},
		get isFirstQuestion() {
			return currentQuestionIndex === 0;
		},
		get isLastQuestion() {
			return currentQuestionIndex === shuffledQuestions.length - 1;
		},
		get submissionStatus() {
			return submissionStatus;
		}
	};
}

function persistSession(): void {
	const answersObj: Record<string, string> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = value;
	}
	saveV3Session({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaireV3(): void {
	const saved = loadV3Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers));
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
	}
	shuffledQuestions = shuffle(questionsV3);
	submissionStatus = 'idle';
	phase = 'questionnaire';
}

export function answerQuestionV3(questionId: string, value: string): void {
	answers.set(questionId, value);
	persistSession();
}

export function nextQuestionV3(): void {
	if (currentQuestionIndex < shuffledQuestions.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestionV3(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export async function submitAllV3(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = { value };
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v3'
	});

	submissionStatus = result;
	clearV3Session();
	phase = 'done';
}

export function resetGameV3(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	clearV3Session();
}
