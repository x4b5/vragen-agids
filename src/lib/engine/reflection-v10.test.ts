import { describe, it, expect } from 'vitest';
import { computeTopThemesV10, buildReflectionV10 } from './reflection-v10';
import type { V10Question } from '../data/questions-v10';

const questions: V10Question[] = [
	{ id: 'a1', theme: 'Werkomgeving', text: 'binnen of buiten werken' },
	{ id: 'a2', theme: 'Werkomgeving', text: 'een rustige werkplek' },
	{ id: 'b1', theme: 'Praktisch', text: 'op welke dagen ik werk' },
	{ id: 'c1', theme: 'Samenwerken en sfeer', text: 'een fijn team' },
	{ id: 'd1', theme: 'Manier van werken', text: 'mijn eigen manier van werken' }
];

describe('computeTopThemesV10', () => {
	it('rangschikt thema’s op gemiddelde waardering, hoogste eerst', () => {
		const answers = new Map<string, number>([
			['a1', 5], // Werkomgeving gem. 5
			['a2', 5],
			['b1', 4], // Praktisch gem. 4
			['c1', 3], // Samenwerken gem. 3
			['d1', 1] // Manier van werken gem. 1
		]);

		const result = computeTopThemesV10(answers, questions);

		expect(result.map((r) => r.theme)).toEqual([
			'Werkomgeving',
			'Praktisch',
			'Samenwerken en sfeer'
		]);
	});

	it('kiest per thema de hoogst gewaardeerde stelling', () => {
		const answers = new Map<string, number>([
			['a1', 2],
			['a2', 5], // hoogste binnen Werkomgeving
			['b1', 4]
		]);

		const result = computeTopThemesV10(answers, questions);

		const werkomgeving = result.find((r) => r.theme === 'Werkomgeving');
		expect(werkomgeving?.statement).toBe('een rustige werkplek');
		expect(werkomgeving?.stars).toBe(5);
	});

	it('negeert onbeantwoorde vragen (undefined of 0 sterren)', () => {
		const answers = new Map<string, number>([
			['a1', 5],
			['a2', 0] // telt niet mee
		]);

		const result = computeTopThemesV10(answers, questions);

		expect(result).toHaveLength(1);
		expect(result[0].theme).toBe('Werkomgeving');
		expect(result[0].stars).toBe(5);
	});

	it('geeft minder dan limit terug als er te weinig thema’s zijn', () => {
		const answers = new Map<string, number>([['b1', 4]]);

		const result = computeTopThemesV10(answers, questions);

		expect(result).toHaveLength(1);
		expect(result[0].theme).toBe('Praktisch');
	});

	it('geeft een lege lijst terug zonder antwoorden', () => {
		const result = computeTopThemesV10(new Map(), questions);
		expect(result).toEqual([]);
	});
});

describe('buildReflectionV10', () => {
	it('herkent dat iemand (bijna) alles belangrijk vindt', () => {
		// 4 van de 5 vragen >= 4 sterren = 80%
		const answers = new Map<string, number>([
			['a1', 5],
			['a2', 5],
			['b1', 4],
			['c1', 4],
			['d1', 1]
		]);

		expect(buildReflectionV10(answers, questions).kind).toBe('all-important');
	});

	it('herkent dat iemand (bijna) niets belangrijk vindt', () => {
		// 4 van de 5 vragen <= 2 sterren = 80%
		const answers = new Map<string, number>([
			['a1', 1],
			['a2', 2],
			['b1', 1],
			['c1', 2],
			['d1', 5]
		]);

		expect(buildReflectionV10(answers, questions).kind).toBe('none-important');
	});

	it('toont thema’s bij een normale spreiding', () => {
		const answers = new Map<string, number>([
			['a1', 5],
			['a2', 5],
			['b1', 3],
			['c1', 2],
			['d1', 1]
		]);

		const result = buildReflectionV10(answers, questions);
		expect(result.kind).toBe('themes');
		if (result.kind === 'themes') {
			expect(result.themes.length).toBeGreaterThan(0);
		}
	});

	it('toont thema’s (leeg) zonder antwoorden', () => {
		const result = buildReflectionV10(new Map(), questions);
		expect(result).toEqual({ kind: 'themes', themes: [] });
	});
});
