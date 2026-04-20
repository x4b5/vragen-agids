import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Anthropic from '@anthropic-ai/sdk';
import { env } from '$env/dynamic/private';
import { questions } from '$lib/data/questions';
import { questionsV2 } from '$lib/data/questions-v2';
import { questionsV3 } from '$lib/data/questions-v3';
import { questionsV4 } from '$lib/data/questions-v4';
import { questionsV10 } from '$lib/data/questions-v10';
import { personalities } from '$lib/data/personalities';
import type { Question } from '$lib/data/questions';
import type { V10Question } from '$lib/data/questions-v10';

function getQuestionsForVersion(version: string): Question[] | V10Question[] {
	switch (version) {
		case 'v1':
			return questions;
		case 'v2':
			return questionsV2;
		case 'v3':
			return questionsV3;
		case 'v4':
			return questionsV4;
		case 'v10':
			return questionsV10;
		default:
			throw new Error(`Onbekende versie: ${version}`);
	}
}

function formatQuestionsForPrompt(questionList: Question[]): string {
	return questionList
		.map((q) => {
			if (q.type === 'open') {
				return `- ID: "${q.id}" | Vraag: "${q.text}" | Type: open (geef een kort antwoord in 1-2 zinnen)`;
			}
			if (q.type === 'slider') {
				return `- ID: "${q.id}" | Vraag: "${q.text}" | Type: slider | Kies een van: "${q.sliderLabels?.[0]}", "${q.sliderLabels?.[1]}"`;
			}
			if (q.type === 'multi-select') {
				return `- ID: "${q.id}" | Vraag: "${q.text}" | Type: multi-select | Kies precies 1 optie uit: ${q.options?.map((o) => `"${o}"`).join(', ')}`;
			}
			return `- ID: "${q.id}" | Vraag: "${q.text}" | Opties: ${q.options?.map((o) => `"${o}"`).join(', ')}`;
		})
		.join('\n');
}

function formatV10QuestionsForPrompt(questionList: V10Question[]): string {
	return questionList
		.map((q) => {
			const examples = q.examples ? ` (bijv. ${q.examples.join(', ')})` : '';
			return `- ID: "${q.id}" | Stelling: "Als ik werk zoek, wil ik weten ...${q.text}"${examples} | Geef een score van 1 t/m 5 (1=niet belangrijk, 5=heel belangrijk)`;
		})
		.join('\n');
}

export const POST: RequestHandler = async ({ request }) => {
	const apiKey = env.ANTHROPIC_API_KEY;
	if (!apiKey) {
		return error(500, 'ANTHROPIC_API_KEY is niet geconfigureerd');
	}

	const body = await request.json().catch(() => null);
	if (!body || !body.version || !body.personalityId) {
		return error(400, 'Missende velden: version en personalityId zijn verplicht');
	}

	const { version, personalityId } = body;

	if (!['v1', 'v2', 'v3', 'v4', 'v10'].includes(version)) {
		return error(400, `Ongeldige versie: ${version}`);
	}

	const personality = personalities.find((p) => p.id === personalityId);
	if (!personality) {
		return error(400, `Onbekende persoonlijkheid: ${personalityId}`);
	}

	const questionList = getQuestionsForVersion(version);
	const isV10 = version === 'v10';
	const formattedQuestions = isV10
		? formatV10QuestionsForPrompt(questionList as V10Question[])
		: formatQuestionsForPrompt(questionList as Question[]);

	const client = new Anthropic({ apiKey });

	try {
		const message = await client.messages.create({
			model: 'claude-sonnet-4-5-20250929',
			max_tokens: 2048,
			system: `${personality.prompt}

Je beantwoordt een vragenlijst. Geef per vraag exact één antwoord.
${isV10 ? 'Voor V10 stellingen: geef een score van 1 t/m 5 als string (bijv. "3").' : ''}
Antwoord ALLEEN met een geldig JSON object in het formaat: { "vraag-id": "gekozen antwoord" }
Geen extra tekst, uitleg of markdown. Alleen het JSON object.`,
			messages: [
				{
					role: 'user',
					content: `Beantwoord de volgende vragen. Kies per vraag precies één van de gegeven opties (of geef een kort antwoord bij open vragen).

${formattedQuestions}

Antwoord alleen met een JSON object waar de keys de vraag-IDs zijn en de values de gekozen antwoorden.`
				}
			]
		});

		const textBlock = message.content.find((block) => block.type === 'text');
		if (!textBlock || textBlock.type !== 'text') {
			return error(500, 'Geen tekst in Claude response');
		}

		const responseText = textBlock.text.trim();
		const jsonMatch = responseText.match(/\{[\s\S]*\}/);
		if (!jsonMatch) {
			return error(500, 'Kon geen JSON vinden in Claude response');
		}

		const answers: Record<string, string> = JSON.parse(jsonMatch[0]);

		return json({ answers });
	} catch (e) {
		if (e instanceof Anthropic.APIError) {
			return error(502, `Claude API fout: ${e.message}`);
		}
		throw e;
	}
};
