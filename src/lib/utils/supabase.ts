import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

const supabase =
	supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function submitResponses(data: {
	answers: Record<string, { rating?: string; selectedOptions?: string[]; remark?: string; value?: string }>;
	total_important?: number;
	total_skipped?: number;
	total_remarks?: number;
	duration_ms: number;
	version?: string;
}): Promise<boolean> {
	if (!supabase) return false;

	try {
		const { error } = await supabase.from('responses').insert({
			answers: data.answers,
			total_important: data.total_important ?? 0,
			total_skipped: data.total_skipped ?? 0,
			total_remarks: data.total_remarks ?? 0,
			duration_ms: data.duration_ms,
			...(data.version ? { version: data.version } : {})
		});

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
