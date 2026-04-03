import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Anthropic from '@anthropic-ai/sdk';
import { env } from '$env/dynamic/private';
import { filtersV5 } from '$lib/data/filters-v5';

export const POST: RequestHandler = async ({ request }) => {
	const apiKey = env.ANTHROPIC_API_KEY;
	if (!apiKey) {
		return error(500, 'ANTHROPIC_API_KEY is niet geconfigureerd');
	}

	const body = await request.json().catch(() => null);
	if (!body || !body.filters || typeof body.filters !== 'object') {
		return error(400, 'Missend veld: filters (object met filter waarden)');
	}

	const filters: Record<string, number> = body.filters;

	const filterDescriptions = filtersV5
		.map((f) => {
			if (f.type === 'quadrant' && f.quadrants) {
				const x = filters[f.id] ?? 0.5;
				const y = filters[f.id + '_y'] ?? 0.5;
				const scores = [
					{ label: f.quadrants[0], score: (1 - x) * (1 - y) },
					{ label: f.quadrants[1], score: x * (1 - y) },
					{ label: f.quadrants[2], score: (1 - x) * y },
					{ label: f.quadrants[3], score: x * y }
				].sort((a, b) => b.score - a.score);
				return `- ${f.label} (wat wil je voelen aan het eind van de dag?):\n${scores.map((s) => `    ${Math.round(s.score * 100)}% ${s.label}`).join('\n')}`;
			}
			const val = filters[f.id] ?? 0.5;
			const pct = Math.round(val * 100);
			return `- ${f.label}: ${pct}% richting "${f.options[1]}" (0% = "${f.options[0]}", 100% = "${f.options[1]}")`;
		})
		.join('\n');

	const client = new Anthropic({ apiKey });

	try {
		const message = await client.messages.create({
			model: 'claude-sonnet-4-5-20250929',
			max_tokens: 1024,
			system: `Je bent een loopbaanadviseur. Je krijgt werkvoorkeuren van een gebruiker en suggereert passende beroepen.
Antwoord ALLEEN met een geldig JSON array van exact 5 objecten met "title" en "description" velden.
Geen extra tekst, uitleg of markdown. Alleen het JSON array.
De beschrijvingen moeten in het Nederlands zijn, kort (1-2 zinnen) en enthousiast.`,
			messages: [
				{
					role: 'user',
					content: `Op basis van de volgende werkvoorkeuren, suggereer 5 passende beroepen:

${filterDescriptions}

Antwoord alleen met een JSON array: [{"title": "...", "description": "..."}, ...]`
				}
			]
		});

		const textBlock = message.content.find((block) => block.type === 'text');
		if (!textBlock || textBlock.type !== 'text') {
			return error(500, 'Geen tekst in Claude response');
		}

		const responseText = textBlock.text.trim();
		const jsonMatch = responseText.match(/\[[\s\S]*\]/);
		if (!jsonMatch) {
			return error(500, 'Kon geen JSON array vinden in Claude response');
		}

		const suggestions: Array<{ title: string; description: string }> = JSON.parse(jsonMatch[0]);

		return json({ suggestions });
	} catch (e) {
		if (e instanceof Anthropic.APIError) {
			return error(502, `Claude API fout: ${e.message}`);
		}
		throw e;
	}
};
