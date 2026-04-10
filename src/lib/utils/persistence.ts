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
	answers: Record<string, { rating?: string; selectedOptions?: string[]; remark?: string; value?: string }>;
	total_important?: number;
	total_skipped?: number;
	total_remarks?: number;
	duration_ms: number;
	version?: string;
	suggestions?: Array<{ title: string; description: string }>;
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

// === V2 persistence (separate keys to avoid conflict with v1) ===

const V2_SESSION_KEY = 'agids-v2-session';

export interface V2SessionData {
	answers: Record<string, string>;
	currentIndex: number;
	startedAt: number;
	savedAt: number;
}

export function saveV2Session(data: V2SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V2_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV2Session(): V2SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V2_SESSION_KEY);
		if (!raw) return null;
		const data: V2SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V2_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V2_SESSION_KEY);
		return null;
	}
}

export function clearV2Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V2_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V3 persistence (separate keys to avoid conflict with v1/v2) ===

const V3_SESSION_KEY = 'agids-v3-session';

export type V3SessionData = V2SessionData;

export function saveV3Session(data: V3SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V3_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV3Session(): V3SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V3_SESSION_KEY);
		if (!raw) return null;
		const data: V3SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V3_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V3_SESSION_KEY);
		return null;
	}
}

export function clearV3Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V3_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V4 persistence (separate keys to avoid conflict with v1/v2/v3) ===

const V4_SESSION_KEY = 'agids-v4-session';

export type V4SessionData = V2SessionData;

export function saveV4Session(data: V4SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V4_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV4Session(): V4SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V4_SESSION_KEY);
		if (!raw) return null;
		const data: V4SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V4_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V4_SESSION_KEY);
		return null;
	}
}

export function clearV4Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V4_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V5 persistence (separate keys to avoid conflict with v1/v2/v3/v4) ===

const V5_SESSION_KEY = 'agids-v5-session';

export interface V5SessionData {
	filterValues: Record<string, number>;
	currentIndex: number;
	startedAt: number;
	savedAt: number;
}

export function saveV5Session(data: V5SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V5_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV5Session(): V5SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V5_SESSION_KEY);
		if (!raw) return null;
		const data: V5SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V5_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V5_SESSION_KEY);
		return null;
	}
}

export function clearV5Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V5_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V6 persistence (separate keys to avoid conflict with v1/v2/v3/v4/v5) ===

const V6_SESSION_KEY = 'agids-v6-session';

export type V6SessionData = V2SessionData;

export function saveV6Session(data: V6SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V6_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV6Session(): V6SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V6_SESSION_KEY);
		if (!raw) return null;
		const data: V6SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V6_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V6_SESSION_KEY);
		return null;
	}
}

export function clearV6Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V6_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V7 persistence (separate keys to avoid conflict with v1-v6) ===

const V7_SESSION_KEY = 'agids-v7-session';

export type V7SessionData = V2SessionData;

export function saveV7Session(data: V7SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V7_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV7Session(): V7SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V7_SESSION_KEY);
		if (!raw) return null;
		const data: V7SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V7_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V7_SESSION_KEY);
		return null;
	}
}

export function clearV7Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V7_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V8 persistence (separate keys to avoid conflict with v1-v7) ===

const V8_SESSION_KEY = 'agids-v8-session';

export interface V8SessionData {
	likedQuestions: string[];
	customQuestions?: Record<string, { text: string; options: string[] }>;
	currentIndex: number;
	startedAt: number;
	savedAt: number;
}

export function saveV8Session(data: V8SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V8_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV8Session(): V8SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V8_SESSION_KEY);
		if (!raw) return null;
		const data: V8SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V8_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V8_SESSION_KEY);
		return null;
	}
}

export function clearV8Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V8_SESSION_KEY);
	} catch {
		// Non-critical
	}
}

// === V9 persistence (separate keys to avoid conflict with v1-v8) ===

const V9_SESSION_KEY = 'agids-v9-session';

export type V9SessionData = V2SessionData;

export function saveV9Session(data: V9SessionData): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.setItem(V9_SESSION_KEY, JSON.stringify(data));
	} catch {
		// Storage full or blocked
	}
}

export function loadV9Session(): V9SessionData | null {
	if (!isLocalStorageAvailable()) return null;
	try {
		const raw = localStorage.getItem(V9_SESSION_KEY);
		if (!raw) return null;
		const data: V9SessionData = JSON.parse(raw);
		if (Date.now() - data.savedAt > MAX_SESSION_AGE_MS) {
			localStorage.removeItem(V9_SESSION_KEY);
			return null;
		}
		return data;
	} catch {
		localStorage.removeItem(V9_SESSION_KEY);
		return null;
	}
}

export function clearV9Session(): void {
	if (!isLocalStorageAvailable()) return;
	try {
		localStorage.removeItem(V9_SESSION_KEY);
	} catch {
		// Non-critical
	}
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
