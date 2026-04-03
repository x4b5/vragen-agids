import { questions, type Question } from '../data/questions';
import { saveSession, loadSession, clearSession, submitWithRetry } from '../utils/persistence';
import { shuffle } from '../utils/shuffle';

export type GamePhase = 'welcome' | 'questionnaire' | 'done';
export type SubmissionStatus = 'idle' | 'submitting' | 'submitted' | 'queued';

export interface Answer {
	rating: 'skip' | 'important';
	selectedOptions?: string[];
	remark?: string;
}

let phase = $state<GamePhase>('welcome');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, Answer>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatus>('idle');
let shuffledQuestions = $state<Question[]>(questions);

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
	const answersObj: Record<string, { rating: string; selectedOptions?: string[]; remark?: string }> = {};
	for (const [id, answer] of answers.entries()) {
		answersObj[id] = {
			rating: answer.rating,
			...(answer.selectedOptions?.length ? { selectedOptions: answer.selectedOptions } : {}),
			...(answer.remark ? { remark: answer.remark } : {})
		};
	}
	saveSession({
		answers: answersObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function startQuestionnaire(): void {
	// Try to restore a previous session
	const saved = loadSession();
	if (saved) {
		answers = new Map(
			Object.entries(saved.answers).map(([id, a]) => [
				id,
				{ rating: a.rating as 'skip' | 'important', selectedOptions: a.selectedOptions, remark: a.remark }
			])
		);
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
	}
	shuffledQuestions = shuffle(questions);
	submissionStatus = 'idle';
	phase = 'questionnaire';
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
	persistSession();
}

export function nextQuestion(): void {
	if (currentQuestionIndex < shuffledQuestions.length - 1) {
		currentQuestionIndex++;
	}
}

export function prevQuestion(): void {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
	}
}

export function skipToEnd(): void {
	currentQuestionIndex = shuffledQuestions.length - 1;
}

export async function submitAll(): Promise<void> {
	submissionStatus = 'submitting';

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

	const result = await submitWithRetry({
		answers: answersObj,
		total_important: totalImportant,
		total_skipped: totalSkipped,
		total_remarks: totalRemarks,
		duration_ms: duration
	});

	submissionStatus = result;
	clearSession();
	phase = 'done';
}

export function resetGame(): void {
	phase = 'welcome';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	clearSession();
}
