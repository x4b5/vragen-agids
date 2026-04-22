export interface V10Question {
	id: string;
	text: string;
	theme: string;
	examples?: string[];
}

export const themesV10 = [
	'Werkomgeving',
	'Manier van werken',
	'Inhoud van het werk',
	'Samenwerken en sfeer',
	'Leren en beginnen',
	'Motivatie en groei',
	'Praktisch'
] as const;

export type ThemeV10 = (typeof themesV10)[number];

export const questionsV10: V10Question[] = [
	// 1 — Werkomgeving
	{
		id: 'v10-1',
		theme: 'Werkomgeving',
		text: 'waar ik werk: binnen, buiten of allebei'
	},
	// 2 — Praktisch
	{
		id: 'v10-28',
		theme: 'Praktisch',
		text: 'op welke dagen en tijden ik werk'
	},
	// 3 — Samenwerken en sfeer
	{
		id: 'v10-14',
		theme: 'Samenwerken en sfeer',
		text: 'of ik het team en mijn baas kan ontmoeten voordat ik begin'
	},
	// 4 — Manier van werken
	{
		id: 'v10-8',
		theme: 'Manier van werken',
		text: 'of ik het werk op mijn eigen manier mag doen'
	},
	// 5 — Motivatie en groei
	{
		id: 'v10-23',
		theme: 'Motivatie en groei',
		text: 'of er mogelijkheden zijn om door te groeien'
	},
	// 6 — Leren en beginnen
	{
		id: 'v10-20',
		theme: 'Leren en beginnen',
		text: 'of ik nieuwe dingen kan leren'
	},
	// 7 — Werkomgeving
	{
		id: 'v10-2',
		theme: 'Werkomgeving',
		text: 'hoeveel geluid er is op de werkplek'
	},
	// 8 — Praktisch
	{
		id: 'v10-29',
		theme: 'Praktisch',
		text: 'of de werktijden vast zijn of flexibel'
	},
	// 9 — Samenwerken en sfeer
	{
		id: 'v10-19',
		theme: 'Samenwerken en sfeer',
		text: 'welke taal er gesproken wordt op het werk'
	},
	// 10 — Manier van werken
	{
		id: 'v10-9',
		theme: 'Manier van werken',
		text: 'of ik alleen werk, in een klein team of in een groot team'
	},
	// 11 — Inhoud van het werk
	{
		id: 'v10-13',
		theme: 'Inhoud van het werk',
		text: 'wat voor soort werk het is',
		examples: [
			'Mensen helpen',
			'Iets maken of repareren',
			'Dingen regelen of organiseren',
			'Dingen uitzoeken of onderzoeken'
		]
	},
	// 12 — Praktisch
	{
		id: 'v10-32',
		theme: 'Praktisch',
		text: 'hoeveel uur ik werk'
	},
	// 13 — Werkomgeving
	{
		id: 'v10-3',
		theme: 'Werkomgeving',
		text: 'wat het werk vraagt van mijn lichaam'
	},
	// 14 — Samenwerken en sfeer
	{
		id: 'v10-18',
		theme: 'Samenwerken en sfeer',
		text: 'of iemand mij helpt als ik net begin met werken'
	},
	// 15 — Motivatie en groei
	{
		id: 'v10-25',
		theme: 'Motivatie en groei',
		text: 'hoeveel geld ik ga verdienen'
	},
	// 16 — Manier van werken
	{
		id: 'v10-10',
		theme: 'Manier van werken',
		text: 'of ik elke dag hetzelfde doe of steeds iets anders'
	},
	// 17 — Leren en beginnen
	{
		id: 'v10-21',
		theme: 'Leren en beginnen',
		text: 'of ik meerdere dagen kan meelopen'
	},
	// 18 — Praktisch
	{
		id: 'v10-30',
		theme: 'Praktisch',
		text: 'of ik ook \u2019s avonds of in het weekend werk'
	},
	// 19 — Werkomgeving
	{
		id: 'v10-4',
		theme: 'Werkomgeving',
		text: 'hoe druk het is op een werkdag'
	},
	// 20 — Samenwerken en sfeer
	{
		id: 'v10-34',
		theme: 'Samenwerken en sfeer',
		text: 'hoe de sfeer is op het werk'
	},
	// 21 — Manier van werken
	{
		id: 'v10-11',
		theme: 'Manier van werken',
		text: 'of ik alles zelf mag uitzoeken of stap voor stap uitleg krijg'
	},
	// 22 — Motivatie en groei
	{
		id: 'v10-26',
		theme: 'Motivatie en groei',
		text: 'hoeveel ik met de nieuwe baan er financieel op vooruit ga'
	},
	// 23 — Praktisch
	{
		id: 'v10-24',
		theme: 'Praktisch',
		text: 'hoe de pauzes geregeld zijn'
	},
	// 24 — Werkomgeving
	{
		id: 'v10-5',
		theme: 'Werkomgeving',
		text: 'of ik werkkleding krijg of mijn eigen kleding aan mag'
	},
	// 25 — Samenwerken en sfeer
	{
		id: 'v10-15',
		theme: 'Samenwerken en sfeer',
		text: 'of ik iemand mee mag nemen naar de eerste kennismaking'
	},
	// 26 — Leren en beginnen
	{
		id: 'v10-22',
		theme: 'Leren en beginnen',
		text: 'hoe mijn eerste werkdag eruitziet'
	},
	// 27 — Praktisch
	{
		id: 'v10-31',
		theme: 'Praktisch',
		text: 'hoe ik op mijn werk kan komen (bereikbaar met OV?)'
	},
	// 28 — Manier van werken
	{
		id: 'v10-12',
		theme: 'Manier van werken',
		text: 'of ik met klanten of bezoekers te maken krijg'
	},
	// 29 — Werkomgeving
	{
		id: 'v10-6',
		theme: 'Werkomgeving',
		text: 'hoe ver ik moet reizen naar mijn werk'
	},
	// 30 — Motivatie en groei
	{
		id: 'v10-27',
		theme: 'Motivatie en groei',
		text: 'of het een vaste baan is of tijdelijk'
	},
	// 31 — Samenwerken en sfeer
	{
		id: 'v10-16',
		theme: 'Samenwerken en sfeer',
		text: "of ik kan meelopen met verschillende collega\u2019s"
	},
	// 32 — Praktisch
	{
		id: 'v10-17',
		theme: 'Praktisch',
		text: 'of er plek is om mijn fiets of auto neer te zetten'
	},
	// 33 — Werkomgeving
	{
		id: 'v10-7',
		theme: 'Werkomgeving',
		text: 'of er gevaarlijke stoffen en machines zijn of gevaarlijke situaties kunnen voorkomen'
	},
	// 34 — Praktisch
	{
		id: 'v10-33',
		theme: 'Praktisch',
		text: 'hoe rekening kan worden gehouden met mijn situatie',
		examples: [
			'Kinderen van school halen',
			'Een lichamelijke beperking',
			'Mantelzorg voor iemand',
			'Afspraken met instanties',
			'Ramadan'
		]
	},
	// 35 — Samenwerken en sfeer
	{
		id: 'v10-36',
		theme: 'Samenwerken en sfeer',
		text: 'of ik hulp kan krijgen als ik ergens mee zit'
	},
	// 36 — Praktisch
	{
		id: 'v10-35',
		theme: 'Praktisch',
		text: 'wat er gebeurt als ik ziek word'
	}
];
