import { questionsV7 } from '../data/questions-v7';
import type { V7Question } from '../data/questions-v7';
import { saveV7Session, loadV7Session, clearV7Session, submitWithRetry } from '../utils/persistence';
import { shuffle } from '../utils/shuffle';

export type GamePhaseV7 = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatusV7 = 'idle' | 'submitting' | 'submitted' | 'queued';
export type SwipeDirection = 'none' | 'left' | 'right';

let phase = $state<GamePhaseV7>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, string>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV7>('idle');
let shuffledQuestions = $state<V7Question[]>(questionsV7);
let swipeDirection = $state<SwipeDirection>('none');

export function getGameStateV7() {
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
		},
		get swipeDirection() {
			return swipeDirection;
		}
	};
}

function persistSession(): void {
	const answersObj: Record<string, string> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = value;
	}
	saveV7Session({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaireV7(): void {
	const saved = loadV7Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers));
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
	}
	shuffledQuestions = shuffle(questionsV7);
	submissionStatus = 'idle';
	swipeDirection = 'none';
	phase = 'questionnaire';
}

export function answerAndAdvanceV7(questionId: string, value: string): void {
	answers.set(questionId, value);
	swipeDirection = 'right';
	persistSession();
}

export function onSwipeAnimationEnd(): void {
	if (swipeDirection === 'right') {
		if (currentQuestionIndex < shuffledQuestions.length - 1) {
			currentQuestionIndex++;
		}
	} else if (swipeDirection === 'left') {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
		}
	}
	swipeDirection = 'none';
}

export function goBackV7(): void {
	if (currentQuestionIndex > 0) {
		swipeDirection = 'left';
	}
}

export async function submitAllV7(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = { value };
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v7'
	});

	submissionStatus = result;
	clearV7Session();
	phase = 'done';
}

export function resetGameV7(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	swipeDirection = 'none';
	clearV7Session();
}
