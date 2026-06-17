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
	intake?: { age_category: string; is_raad_van_advies: boolean; situation?: string };
	question_timings?: Record<string, number>;
	remark?: string;
}): Promise<{ ok: boolean; id: string | null }> {
	if (!supabase) return { ok: false, id: null };

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
				remark: data.remark ?? null,
				age_category: data.intake?.age_category ?? null,
				is_raad_van_advies: data.intake?.is_raad_van_advies ?? false,
				situation: data.intake?.situation ?? null
			};
		} else {
			row = {
				answers: data.answers,
				duration_ms: data.duration_ms
			};
		}

		const { data: inserted, error } = await supabase
			.from(table)
			.insert(row)
			.select('id')
			.single();

		if (error) {
			console.error('Failed to submit responses:', error.message);
			return { ok: false, id: null };
		}
		return { ok: true, id: inserted?.id ?? null };
	} catch (err) {
		console.error('Network or unexpected error while submitting:', err);
		return { ok: false, id: null };
	}
}

/**
 * Markeert dat de persoon na het invullen op de WhatsApp-knop heeft geklikt.
 * Werkt alleen de v10-tabel bij en faalt stil (analytics mag de flow nooit breken).
 */
export async function markWhatsappClicked(id: string): Promise<void> {
	if (!supabase || !id) return;
	try {
		const { error } = await supabase
			.from('responses_v10')
			.update({ clicked_whatsapp: true })
			.eq('id', id);
		if (error) {
			console.error('Failed to mark whatsapp click:', error.message);
		}
	} catch (err) {
		console.error('Network or unexpected error while marking whatsapp click:', err);
	}
}
