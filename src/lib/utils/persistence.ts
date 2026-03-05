import { submitResponses } from './supabase';

const SESSION_KEY = 'agids-session';
const PENDING_KEY = 'agids-pending';
const MAX_SESSION_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface SessionData {
	answers: Record<string, { rating: string; selectedOptions?: string[]; remark?: string }>;
	currentIndex: number;
	startedAt: number;
	savedAt: number;
}

export interface SubmissionPayload {
	answers: Record<string, { rating: string; selectedOptions?: string[]; remark?: string }>;
	total_important: number;
	total_skipped: number;
	total_remarks: number;
	duration_ms: number;
}

function isLocalStorageAvailable(): boolean {
	try {
		const test = '__storage_test__';
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch {
		return false;
	}
}

export function saveSession(data: SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked — non-critical
	}
}

export function loadSession(): SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(SESSION_KEY);
		if (!raw) return null;
		const data: SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(SESSION_KEY);
		return null;
	}
}

export function clearSession(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(SESSION_KEY);
	} catch {
		// Non-critical
	}
}

export async function submitWithRetry(payload: SubmissionPayload): Promise<'submitted' | 'queued'> {
	const success = await submitResponses(payload);
	if (success) {
		return 'submitted';
	}
	// Queue for later retry
	if (isLocalStorageAvailable()) {
		try {
			const raw = localStorage.getItem(PENDING_KEY);
			const pending: SubmissionPayload[] = raw ? JSON.parse(raw) : [];
			pending.push(payload);
			localStorage.setItem(PENDING_KEY, JSON.stringify(pending));
		} catch {
			// Storage full — we tried
		}
	}
	return 'queued';
}

export async function flushPendingQueue(): Promise<void> {
	if (!isLocalStorageAvailable()) return;
	try {
		const raw = localStorage.getItem(PENDING_KEY);
		if (!raw) return;
		const pending: SubmissionPayload[] = JSON.parse(raw);
		if (!pending.length) return;

		const remaining: SubmissionPayload[] = [];
		for (const payload of pending) {
			const success = await submitResponses(payload);
			if (!success) {
				remaining.push(payload);
			}
		}

		if (remaining.length) {
			localStorage.setItem(PENDING_KEY, JSON.stringify(remaining));
		} else {
			localStorage.removeItem(PENDING_KEY);
		}
	} catch {
		// Non-critical
	}
}
