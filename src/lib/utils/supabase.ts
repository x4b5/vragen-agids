import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

const supabase =
	supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function submitResponses(data: {
	answers: Record<string, { rating: string; remark?: string }>;
	total_important: number;
	total_skipped: number;
	total_remarks: number;
	duration_ms: number;
}): Promise<boolean> {
	if (!supabase) return false;

	try {
		const { error } = await supabase.from('responses').insert({
			answers: data.answers,
			total_important: data.total_important,
			total_skipped: data.total_skipped,
			total_remarks: data.total_remarks,
			duration_ms: data.duration_ms
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
