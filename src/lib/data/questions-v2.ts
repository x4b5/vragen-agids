import type { Question } from './questions';

export const phasesV2 = [
	'Werkomgeving',
	'Manier van werken',
	'Interesse',
	'Drempel / comfort',
	'Praktisch',
	'Werkbeleving',
	'Open input'
] as const;

export type PhaseV2 = (typeof phasesV2)[number];

export const questionsV2: Question[] = [
	// === FASE 1 – Werkomgeving (6) ===
	{
		id: 'v2-werkomgeving-1',
		phase: 'Werkomgeving',
		text: 'Waar werk je het liefst?',
		type: 'options',
		options: ['Binnen', 'Buiten', 'Combinatie', 'Thuis']
	},
	{
		id: 'v2-werkomgeving-2',
		phase: 'Werkomgeving',
		text: 'Hoe wil je werken qua locatie?',
		type: 'options',
		options: ['Vaste plek', 'Afwisselende locaties', 'Beide maakt niet uit']
	},
	{
		id: 'v2-werkomgeving-3',
		phase: 'Werkomgeving',
		text: 'Wat past beter bij jou?',
		type: 'options',
		options: ['Rustige omgeving', 'Drukke omgeving', 'Afwisseling']
	},
	{
		id: 'v2-werkomgeving-4',
		phase: 'Werkomgeving',
		text: 'In wat voor team werk je het liefst?',
		type: 'options',
		options: ['Klein team', 'Groot team', 'Maakt niet uit']
	},
	{
		id: 'v2-werkomgeving-5',
		phase: 'Werkomgeving',
		text: 'Hoe werk je het liefst?',
		type: 'options',
		options: ['Veel structuur', 'Veel afwisseling', 'Combinatie']
	},
	{
		id: 'v2-werkomgeving-6',
		phase: 'Werkomgeving',
		text: 'Wanneer werk je het liefst?',
		type: 'options',
		options: ['Overdag', 'Avond', 'Maakt niet uit']
	},

	// === FASE 2 – Manier van werken (6) ===
	{
		id: 'v2-manier-1',
		phase: 'Manier van werken',
		text: 'Hoe werk je het liefst?',
		type: 'options',
		options: ['Met mensen', 'Zelfstandig', 'Combinatie']
	},
	{
		id: 'v2-manier-2',
		phase: 'Manier van werken',
		text: 'Wat past beter bij jou?',
		type: 'options',
		options: ['Werken met handen', 'Werken met hoofd', 'Combinatie']
	},
	{
		id: 'v2-manier-3',
		phase: 'Manier van werken',
		text: 'Hoe werk je het liefst?',
		type: 'options',
		options: ['Duidelijke instructies', 'Zelf initiatief nemen', 'Combinatie']
	},
	{
		id: 'v2-manier-4',
		phase: 'Manier van werken',
		text: 'Wat past beter bij jou?',
		type: 'options',
		options: ['Vaste taken', 'Afwisselende taken', 'Combinatie']
	},
	{
		id: 'v2-manier-5',
		phase: 'Manier van werken',
		text: 'Wat voor werk past bij jou?',
		type: 'options',
		options: ['Fysiek actief', 'Rustig werk', 'Combinatie']
	},
	{
		id: 'v2-manier-6',
		phase: 'Manier van werken',
		text: 'Hoe werk je het liefst?',
		type: 'options',
		options: ['Met duidelijke doelen', 'Vrij / open werk', 'Combinatie']
	},

	// === FASE 3 – Interesse (7) ===
	{
		id: 'v2-interesse-1',
		phase: 'Interesse',
		text: 'Wat lijkt je leuker?',
		type: 'options',
		options: ['Mensen helpen', 'Iets maken / bouwen', 'Beide']
	},
	{
		id: 'v2-interesse-2',
		phase: 'Interesse',
		text: 'Waar ligt je interesse?',
		type: 'options',
		options: ['Techniek', 'Mensen', 'Creatief', 'Combinatie']
	},
	{
		id: 'v2-interesse-3',
		phase: 'Interesse',
		text: 'Vind je problemen oplossen leuk?',
		type: 'options',
		options: ['Ja', 'Soms', 'Nee']
	},
	{
		id: 'v2-interesse-4',
		phase: 'Interesse',
		text: 'Vind je plannen en organiseren leuk?',
		type: 'options',
		options: ['Ja', 'Soms', 'Nee']
	},
	{
		id: 'v2-interesse-5',
		phase: 'Interesse',
		text: 'Sta je open voor nieuwe dingen?',
		type: 'options',
		options: ['Ja graag', 'Soms', 'Liever niet']
	},
	{
		id: 'v2-interesse-6',
		phase: 'Interesse',
		text: 'Waar krijg je energie van?',
		type: 'options',
		options: ['Mensen', 'Resultaat zien', 'Iets maken', 'Afwisseling']
	},
	{
		id: 'v2-interesse-7',
		phase: 'Interesse',
		text: 'Wat wil je liever vermijden?',
		type: 'options',
		options: ['Fysiek zwaar werk', 'Veel contact met mensen', 'Eentonig werk', 'Geen voorkeur']
	},

	// === FASE 4 – Drempel / comfort (6) ===
	{
		id: 'v2-drempel-1',
		phase: 'Drempel / comfort',
		text: 'Hoe wil je starten?',
		type: 'options',
		options: ['Alleen meekijken', 'Meedoen', 'Beide']
	},
	{
		id: 'v2-drempel-2',
		phase: 'Drempel / comfort',
		text: 'Hoe ervaar je nieuwe mensen?',
		type: 'options',
		options: ['Geen probleem', 'Beetje spannend', 'Liever niet']
	},
	{
		id: 'v2-drempel-3',
		phase: 'Drempel / comfort',
		text: 'Hoeveel begeleiding wil je?',
		type: 'options',
		options: ['Veel begeleiding', 'Beetje begeleiding', 'Zelfstandig']
	},
	{
		id: 'v2-drempel-4',
		phase: 'Drempel / comfort',
		text: 'Wat helpt jou het meest?',
		type: 'options',
		options: ['Uitleg stap voor stap', 'Kort uitleggen en zelf doen', 'Zelf uitzoeken']
	},
	{
		id: 'v2-drempel-5',
		phase: 'Drempel / comfort',
		text: 'Sta je open om nieuwe dingen te proberen?',
		type: 'options',
		options: ['Ja', 'Misschien', 'Nee']
	},
	{
		id: 'v2-drempel-6',
		phase: 'Drempel / comfort',
		text: 'Heb je ervaring in dit soort werk?',
		type: 'options',
		options: ['Ja', 'Een beetje', 'Nee']
	},

	// === FASE 5 – Praktisch (6) ===
	{
		id: 'v2-praktisch-1',
		phase: 'Praktisch',
		text: 'Hoe lang wil je meelopen?',
		type: 'options',
		options: ['2 uur', 'Halve dag', 'Hele dag']
	},
	{
		id: 'v2-praktisch-2',
		phase: 'Praktisch',
		text: 'Wanneer ben je beschikbaar?',
		type: 'options',
		options: ['Doordeweeks', 'Weekend', 'Beide']
	},
	{
		id: 'v2-praktisch-3',
		phase: 'Praktisch',
		text: 'Welke tijden passen?',
		type: 'options',
		options: ['Ochtend', 'Middag', 'Maakt niet uit']
	},
	{
		id: 'v2-praktisch-4',
		phase: 'Praktisch',
		text: 'Hoe reis je?',
		type: 'options',
		options: ['Eigen vervoer', 'Openbaar vervoer', 'Geen vervoer']
	},
	{
		id: 'v2-praktisch-5',
		phase: 'Praktisch',
		text: 'Hoe ver wil je reizen?',
		type: 'options',
		options: ['Tot 10 km', 'Tot 25 km', 'Verder']
	},
	{
		id: 'v2-praktisch-6',
		phase: 'Praktisch',
		text: 'Waar moeten we rekening mee houden?',
		type: 'options',
		options: ['Fysiek', 'Tijd', 'Geen bijzonderheden']
	},

	// === FASE 6 – Werkbeleving (5) ===
	{
		id: 'v2-beleving-1',
		phase: 'Werkbeleving',
		text: 'Wat vind je belangrijk?',
		type: 'options',
		options: ['Goede sfeer', 'Duidelijkheid', 'Ontwikkeling', 'Maakt niet uit']
	},
	{
		id: 'v2-beleving-2',
		phase: 'Werkbeleving',
		text: 'Waar kijk je als eerste naar?',
		type: 'options',
		options: ['Mensen', 'Werk zelf', 'Omgeving', 'Alles']
	},
	{
		id: 'v2-beleving-3',
		phase: 'Werkbeleving',
		text: 'Wanneer voelt het goed?',
		type: 'options',
		options: ['Fijne sfeer', 'Duidelijke uitleg', 'Leuke mensen']
	},
	{
		id: 'v2-beleving-4',
		phase: 'Werkbeleving',
		text: 'Wanneer haak je af?',
		type: 'options',
		options: ['Onduidelijkheid', 'Geen klik', 'Te druk', 'Te saai']
	},
	{
		id: 'v2-beleving-5',
		phase: 'Werkbeleving',
		text: 'Wat geeft een goede eerste indruk?',
		type: 'options',
		options: ['Vriendelijke mensen', 'Goede uitleg', 'Duidelijke taken']
	},

	// === FASE 7 – Open input (2) ===
	{
		id: 'v2-open-1',
		phase: 'Open input',
		text: 'Waar ben je benieuwd naar?',
		type: 'open'
	},
	{
		id: 'v2-open-2',
		phase: 'Open input',
		text: 'Wat zoek je?',
		type: 'open'
	}
];
