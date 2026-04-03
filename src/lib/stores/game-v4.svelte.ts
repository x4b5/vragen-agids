import { questionsV4 } from '../data/questions-v4';
import { saveV4Session, loadV4Session, clearV4Session, submitWithRetry } from '../utils/persistence';

export type GamePhaseV4 = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatusV4 = 'idle' | 'submitting' | 'submitted' | 'queued';

let phase = $state<GamePhaseV4>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, string>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV4>('idle');

export function getGameStateV4() {
	return {
		get phase() {
			return phase;
		},
		get currentQuestionIndex() {
			return currentQuestionIndex;
		},
		get currentQuestion() {
			return questionsV4[currentQuestionIndex];
		},
		get totalQuestions() {
			return questionsV4.length;
		},
		get answers() {
			return answers;
		},
		get currentPhase() {
			return questionsV4[currentQuestionIndex]?.phase ?? '';
		},
		get progress() {
			return currentQuestionIndex / questionsV4.length;
		},
		get isFirstQuestion() {
			return currentQuestionIndex === 0;
		},
		get isLastQuestion() {
			return currentQuestionIndex === questionsV4.length - 1;
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
	saveV4Session({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaireV4(): void {
	const saved = loadV4Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers));
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

export function answerQuestionV4(questionId: string, value: string): void {
	answers.set(questionId, value);
	persistSession();
}

export function nextQuestionV4(): void {
	if (currentQuestionIndex < questionsV4.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestionV4(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export async function submitAllV4(): Promise<void> {
	submissionStatus = 'submitting';

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = { value };
	}

	const result = await submitWithRetry({
		answers: answersObj,
		duration_ms: duration,
		version: 'v4'
	});

	submissionStatus = result;
	clearV4Session();
	phase = 'done';
}

export function resetGameV4(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	clearV4Session();
}
