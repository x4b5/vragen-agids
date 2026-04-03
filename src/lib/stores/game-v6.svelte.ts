import { questionsV6 } from '../data/questions-v6';
import type { V6Question } from '../data/questions-v6';
import { saveV6Session, loadV6Session, clearV6Session, submitWithRetry } from '../utils/persistence';
import { shuffle } from '../utils/shuffle';

export type GamePhaseV6 = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatusV6 = 'idle' | 'submitting' | 'submitted' | 'queued';

let phase = $state<GamePhaseV6>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, string>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV6>('idle');
let shuffledQuestions = $state<V6Question[]>(questionsV6);

export function getGameStateV6() {
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
	saveV6Session({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaireV6(): void {
	const saved = loadV6Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers));
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
	}
	shuffledQuestions = shuffle(questionsV6);
	submissionStatus = 'idle';
	phase = 'questionnaire';
}

export function answerQuestionV6(questionId: string, value: string): void {
	answers.set(questionId, value);
	persistSession();
}

export function nextQuestionV6(): void {
	if (currentQuestionIndex < shuffledQuestions.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestionV6(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export async function submitAllV6(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = { value };
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v6'
	});

	submissionStatus = result;
	clearV6Session();
	phase = 'done';
}

export function resetGameV6(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	clearV6Session();
}
