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
}): Promise<boolean> {
	if (!supabase) return false;

	const table = getTableForVersion(data.version);

	try {
		const row =
			table === 'responses'
				? {
						answers: data.answers,
						total_important: data.total_important ?? 0,
						total_skipped: data.total_skipped ?? 0,
						total_remarks: data.total_remarks ?? 0,
						duration_ms: data.duration_ms
					}
				: {
						answers: data.answers,
						duration_ms: data.duration_ms
					};

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
