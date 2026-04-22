import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

const supabase =
	supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

function getTableForVersion(version?: string): string {
	switch (version) {
		case 'v2':
			return 'responses_v2';
		case 'v3':
			return 'responses_v3';
		case 'v4':
			return 'responses_v4';
		case 'v5':
			return 'responses_v5';
		case 'v6':
			return 'responses_v6';
		case 'v7':
			return 'responses_v7';
		case 'v8':
			return 'responses_v8';
		case 'v9':
			return 'responses_v9';
		case 'v10':
			return 'responses_v10';
		default:
			return 'responses';
	}
}

export async function submitResponses(data: {
	answers: Record<string, { rating?: string; selectedOptions?: string[]; remark?: string; value?: string }>;
	total_important?: number;
	total_skipped?: number;
	total_remarks?: number;
	duration_ms: number;
	version?: string;
	suggestions?: Array<{ title: string; description: string }>;
	question_timings?: Record<string, number>;
	remark?: string;
}): Promise<boolean> {
	if (!supabase) return false;

	const table = getTableForVersion(data.version);

	try {
		let row;
		if (table === 'responses') {
			row = {
				answers: data.answers,
				total_important: data.total_important ?? 0,
				total_skipped: data.total_skipped ?? 0,
				total_remarks: data.total_remarks ?? 0,
				duration_ms: data.duration_ms
			};
		} else if (table === 'responses_v5') {
			row = {
				answers: data.answers,
				suggestions: data.suggestions ?? null,
				duration_ms: data.duration_ms
			};
		} else if (table === 'responses_v10') {
			row = {
				answers: data.answers,
				duration_ms: data.duration_ms,
				question_timings: data.question_timings ?? null,
				remark: data.remark ?? null
			};
		} else {
			row = {
				answers: data.answers,
				duration_ms: data.duration_ms
			};
		}

		const { error } = await supabase.from(table).insert(row);

		if (error) {
			console.error('Failed to submit responses:', error.message);
			return false;
		}
		return true;
	} catch (err) {
		console.error('Network or unexpected error while submitting:', err);
		return false;
	}
}
