import type { V10Question } from '../data/questions-v10';

/**
 * Een thema dat de gebruiker hoog waardeerde, samen met de stelling
 * waar hij/zij binnen dat thema het meest mee instemde. Wordt gebruikt
 * om op het eindscherm een herkenbare "spiegel" te tonen.
 */
export interface ThemeHighlightV10 {
	theme: string;
	/** Id van de hoogst gewaardeerde vraag binnen dit thema. */
	questionId: string;
	/** De letterlijke tekst van de hoogst gewaardeerde stelling binnen dit thema. */
	statement: string;
	/** Aantal sterren (1-5) dat aan die stelling is gegeven. */
	stars: number;
}

/**
 * Berekent de thema's waar de gebruiker het meeste belang aan hechtte.
 *
 * Per thema wordt de gemiddelde waardering (sterren) van de beantwoorde
 * vragen genomen. De thema's met de hoogste gemiddelde waardering komen
 * bovenaan. Per thema wordt ook de hoogst gewaardeerde stelling gekozen,
 * zodat de gebruiker concreet terugziet wat hij belangrijk vindt.
 *
 * Pure functie: geen side effects, geen state mutatie.
 *
 * @param answers   Map van vraag-id naar aantal sterren (1-5).
 * @param questions De vragenlijst (statische data).
 * @param limit     Maximaal aantal thema's om terug te geven (standaard 3).
 */
export function computeTopThemesV10(
	answers: ReadonlyMap<string, number>,
	questions: readonly V10Question[],
	limit = 3
): ThemeHighlightV10[] {
	// Groepeer beantwoorde vragen per thema, met behoud van data-volgorde.
	const byTheme = new Map<string, { question: V10Question; stars: number }[]>();
	for (const question of questions) {
		const stars = answers.get(question.id);
		if (stars === undefined || stars <= 0) continue;
		const list = byTheme.get(question.theme) ?? [];
		list.push({ question, stars });
		byTheme.set(question.theme, list);
	}

	// Bereken per thema de gemiddelde waardering + de sterkste stelling.
	const ranked = [...byTheme.entries()].map(([theme, items]) => {
		const total = items.reduce((sum, item) => sum + item.stars, 0);
		const average = total / items.length;
		// Hoogst gewaardeerde stelling; bij gelijkspel de eerste (data-volgorde).
		const top = items.reduce((best, item) => (item.stars > best.stars ? item : best));
		return {
			theme,
			average,
			questionId: top.question.id,
			statement: top.question.text,
			stars: top.stars
		};
	});

	// Stabiele sortering (ES2019+): bij gelijk gemiddelde blijft data-volgorde behouden.
	ranked.sort((a, b) => b.average - a.average);

	return ranked
		.slice(0, limit)
		.map(({ theme, questionId, statement, stars }) => ({ theme, questionId, statement, stars }));
}

/**
 * Vanaf dit aandeel (0-1) hoog- of laaggewaardeerde vragen tonen we geen
 * thema's meer, maar de boodschap dat iemand (bijna) alles of (bijna) niets
 * belangrijk vindt. Aanpasbaar wanneer de grens te streng/los blijkt.
 */
export const REFLECTION_DOMINANT_RATIO = 0.8;

/**
 * De uitkomst die het conversie-scherm toont:
 * - 'all-important'  → iemand waardeerde (bijna) alles hoog
 * - 'none-important' → iemand waardeerde (bijna) alles laag
 * - 'themes'         → normale spreiding, toon de top-thema's
 */
export type ReflectionV10 =
	| { kind: 'all-important' }
	| { kind: 'none-important' }
	| { kind: 'themes'; themes: ThemeHighlightV10[] };

/**
 * Bepaalt welke spiegel-boodschap past bij de antwoorden.
 *
 * Telt het aandeel hoog (>= 4 sterren) en laag (<= 2 sterren) gewaardeerde
 * vragen. Domineert één kant (>= REFLECTION_DOMINANT_RATIO), dan is er geen
 * herkenbare voorkeur en tonen we een passende boodschap in plaats van thema's.
 *
 * Pure functie: geen side effects.
 */
export function buildReflectionV10(
	answers: ReadonlyMap<string, number>,
	questions: readonly V10Question[],
	limit = 3
): ReflectionV10 {
	const stars: number[] = [];
	for (const question of questions) {
		const value = answers.get(question.id);
		if (value === undefined || value <= 0) continue;
		stars.push(value);
	}

	if (stars.length > 0) {
		const high = stars.filter((s) => s >= 4).length / stars.length;
		const low = stars.filter((s) => s <= 2).length / stars.length;
		if (high >= REFLECTION_DOMINANT_RATIO) return { kind: 'all-important' };
		if (low >= REFLECTION_DOMINANT_RATIO) return { kind: 'none-important' };
	}

	return { kind: 'themes', themes: computeTopThemesV10(answers, questions, limit) };
}
