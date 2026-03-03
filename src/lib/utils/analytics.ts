import posthog from 'posthog-js';
import type { GamePhase } from '../stores/game.svelte';

let initialized = false;

export function initAnalytics(): void {
	try {
		const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string | undefined;
		if (!key) return;

		const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com';

		posthog.init(key, {
			api_host: host,
			person_profiles: 'never',
			capture_pageview: false,
			ip: false
		});
		initialized = true;
	} catch (e) {
		// Silent fail — analytics should never break the app
	}
}

function capture(event: string, properties?: Record<string, unknown>): void {
	if (!initialized) return;
	try {
		posthog.capture(event, properties);
	} catch {
		// Silent fail
	}
}

// --- Tracking functions ---

export function trackPageViewed(page: string): void {
	capture('page_viewed', { page });
}

export function trackLoginSuccess(): void {
	capture('login_success');
}

export function trackQuestionRated(props: {
	question_id: string;
	phase: string;
	rating: 'skip' | 'important';
	has_remark: boolean;
}): void {
	capture('question_rated', props);
}

export function trackQuestionnaireCompleted(props: {
	total_important: number;
	total_skipped: number;
	total_remarks: number;
	duration_ms: number;
}): void {
	capture('questionnaire_completed', props);
}

export function setupAbandonmentTracking(
	getStateFn: () => { phase: GamePhase }
): void {
	if (typeof document === 'undefined') return;

	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState !== 'hidden') return;
		try {
			const state = getStateFn();
			capture('session_abandoned', { phase: state.phase });
		} catch {
			// Silent fail
		}
	});
}
