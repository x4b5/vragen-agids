import { questionsV10 } from '../data/questions-v10';
import type { V10Question } from '../data/questions-v10';
import { buildReflectionV10 } from '../engine/reflection-v10';
import {
	saveV10Session,
	loadV10Session,
	clearV10Session,
	submitWithRetryV10,
	markWhatsappClicked
} from '../utils/persistence';

export type GamePhaseV10 = 'welcome' | 'intake' | 'situation' | 'questionnaire' | 'remarks' | 'done' | 'conversion';
export type SubmissionStatusV10 = 'idle' | 'submitting' | 'submitted' | 'queued';

export const ageCategories = [
	'Jonger dan 25',
	'25 tot 35',
	'35 tot 45',
	'45 tot 55',
	'55 of ouder'
] as const;

export type AgeCategory = (typeof ageCategories)[number];

export const situations = [
	'Ik werk en wil misschien eens iets (heel) anders',
	'Ik werk nu niet en wil mij oriënteren',
	'Ik ga naar school',
	'Ik begeleid mensen (coach, docent, begeleider)'
] as const;

export type Situation = (typeof situations)[number];

let phase = $state<GamePhaseV10>('questionnaire');
let currentQuestionIndex = $state(0);
let answers = $state<Map<string, number>>(new Map());
let startedAt = $state<number>(0);
let submissionStatus = $state<SubmissionStatusV10>('idle');
let ageCategory = $state<AgeCategory | null>(null);
let isRaadVanAdvies = $state<boolean>(false);
let situation = $state<Situation | null>(null);
let questionTimings = $state<Map<string, number>>(new Map());
let questionStartedAt = $state<number>(0);
let remark = $state<string>('');
let lastSubmissionId = $state<string | null>(null);

export function getGameStateV10() {
	return {
		get phase() {
			return phase;
		},
		get reflection() {
			return buildReflectionV10(answers, questionsV10);
		},
		get ageCategory() {
			return ageCategory;
		},
		get situation() {
			return situation;
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
		},
		get remark() {
			return remark;
		}
	};
}

function recordCurrentQuestionTime(): void {
	if (questionStartedAt <= 0) return;
	const questionId = questionsV10[currentQuestionIndex]?.id;
	if (!questionId) return;
	const elapsed = Date.now() - questionStartedAt;
	const prev = questionTimings.get(questionId) ?? 0;
	const next = new Map(questionTimings);
	next.set(questionId, prev + elapsed);
	questionTimings = next;
	questionStartedAt = Date.now();
}

function persistSession(): void {
	const answersObj: Record<string, number> = {};
	for (const [id, value] of answers.entries()) {
		answersObj[id] = value;
	}
	const timingsObj: Record<string, number> = {};
	for (const [id, ms] of questionTimings.entries()) {
		timingsObj[id] = ms;
	}
	saveV10Session({
		answers: answersObj,
		questionTimings: timingsObj,
		currentIndex: currentQuestionIndex,
		startedAt,
		savedAt: Date.now()
	});
}

export function setAgeCategoryV10(category: AgeCategory): void {
	ageCategory = category;
}

export function setSituationV10(value: Situation): void {
	situation = value;
}

export function startQuestionnaireV10(): void {
	const saved = loadV10Session();
	if (saved) {
		answers = new Map(Object.entries(saved.answers).map(([k, v]) => [k, Number(v)]));
		currentQuestionIndex = saved.currentIndex;
		startedAt = saved.startedAt;
		questionTimings = new Map(
			Object.entries(saved.questionTimings ?? {}).map(([k, v]) => [k, Number(v)])
		);
	} else {
		answers = new Map();
		currentQuestionIndex = 0;
		startedAt = Date.now();
		questionTimings = new Map();
	}
	questionStartedAt = Date.now();
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
		recordCurrentQuestionTime();
		currentQuestionIndex++;
		questionStartedAt = Date.now();
	}
}

export function prevQuestionV10(): void {
	if (currentQuestionIndex > 0) {
		recordCurrentQuestionTime();
		currentQuestionIndex--;
		questionStartedAt = Date.now();
	}
}

export function goToSituationV10(): void {
	recordCurrentQuestionTime();
	// Stop de vraag-klok: het situatie-scherm telt niet mee als vraagtijd.
	questionStartedAt = 0;
	phase = 'situation';
}

export async function submitAllV10(): Promise<void> {
	if (submissionStatus === 'submitting' || submissionStatus === 'submitted') return;
	submissionStatus = 'submitting';

	recordCurrentQuestionTime();

	const duration = startedAt ? Date.now() - startedAt : 0;

	const answersObj: Record<string, { value: string }> = {};
	for (const [id, stars] of answers.entries()) {
		answersObj[id] = { value: String(stars) };
	}

	const timingsObj: Record<string, number> = {};
	for (const [id, ms] of questionTimings.entries()) {
		timingsObj[id] = ms;
	}

	const result = await submitWithRetryV10({
		answers: answersObj,
		duration_ms: duration,
		version: 'v10',
		intake: {
			age_category: ageCategory ?? '',
			is_raad_van_advies: isRaadVanAdvies,
			situation: situation ?? ''
		},
		question_timings: timingsObj,
		remark: remark.trim() || undefined
	});

	submissionStatus = result.status;
	lastSubmissionId = result.id;
	clearV10Session();
	phase = 'conversion';
}

/**
 * Markeert in Supabase dat de persoon op de WhatsApp-knop klikte.
 * Faalt stil: het mag de navigatie naar WhatsApp nooit ophouden of breken.
 */
export async function markWhatsappClickedV10(): Promise<void> {
	if (!lastSubmissionId) return;
	await markWhatsappClicked(lastSubmissionId);
}

export function resetGameV10(): void {
	phase = 'questionnaire';
	currentQuestionIndex = 0;
	answers = new Map();
	startedAt = 0;
	submissionStatus = 'idle';
	ageCategory = null;
	isRaadVanAdvies = false;
	situation = null;
	questionTimings = new Map();
	questionStartedAt = 0;
	remark = '';
	lastSubmissionId = null;
	clearV10Session();
}
