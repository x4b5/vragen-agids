import type { Question } from './questions';

export const phasesV4 = [
	'Werkomgeving en werkvorm',
	'Soort werk',
	'Eerste stap en drempel',
	'Praktisch',
	'Doel van het platform'
] as const;

export type PhaseV4 = (typeof phasesV4)[number];

export const questionsV4: Question[] = [
	// === 1. Werkomgeving en werkvorm (6) ===
	{
		id: 'v4-1',
		phase: 'Werkomgeving en werkvorm',
		text: 'Waar werkt u liever?',
		type: 'options',
		options: ['Binnen', 'Buiten', 'Binnen en buiten', 'Maakt mij niet uit']
	},
	{
		id: 'v4-2',
		phase: 'Werkomgeving en werkvorm',
		text: 'Hoeveel mensen wilt u tijdens werk meestal om u heen hebben?',
		type: 'options',
		options: ['Liefst alleen', 'Met 1 of 2 mensen', 'Met 3 tot 5 mensen', 'Met meer dan 5 mensen']
	},
	{
		id: 'v4-3',
		phase: 'Werkomgeving en werkvorm',
		text: 'Wat past beter bij u?',
		type: 'options',
		options: ['Een rustige plek', 'Een plek waar veel gebeurt', 'Allebei is goed', 'Weet ik nog niet']
	},
	{
		id: 'v4-4',
		phase: 'Werkomgeving en werkvorm',
		text: 'Houdt u meer van hetzelfde werk of van afwisseling?',
		type: 'options',
		options: [
			'Liefst vaak hetzelfde',
			'Liefst afwisseling',
			'Allebei is goed',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v4-5',
		phase: 'Werkomgeving en werkvorm',
		text: 'Doet u liever werk met uw handen of met uw hoofd?',
		type: 'options',
		options: ['Met mijn handen', 'Met mijn hoofd', 'Allebei', 'Maakt mij niet uit']
	},
	{
		id: 'v4-6',
		phase: 'Werkomgeving en werkvorm',
		text: 'Werkt u liever alleen of samen?',
		type: 'options',
		options: ['Liefst alleen', 'Liefst samen', 'Allebei is goed', 'Maakt mij niet uit']
	},

	// === 2. Soort werk (5) ===
	{
		id: 'v4-7',
		phase: 'Soort werk',
		text: 'Wat lijkt u het leukst?',
		type: 'options',
		options: ['Mensen helpen', 'Iets maken of repareren', 'Iets regelen', 'Iets uitzoeken']
	},
	{
		id: 'v4-8',
		phase: 'Soort werk',
		text: 'Waar wilt u het liefst mee bezig zijn?',
		type: 'options',
		options: [
			'Met mensen praten',
			'Met spullen, gereedschap of machines',
			'Met plannen of regelen',
			'Met denken of bedenken'
		]
	},
	{
		id: 'v4-9',
		phase: 'Soort werk',
		text: 'Waar wordt u het meest blij van?',
		type: 'options',
		options: [
			'Als ik iemand help',
			'Als ik iets afmaak',
			'Als alles goed loopt',
			'Als ik iets nieuws snap'
		]
	},
	{
		id: 'v4-10',
		phase: 'Soort werk',
		text: 'Wat past het best bij u?',
		type: 'options',
		options: [
			'Werk waar ik direct zie wat ik heb gedaan',
			'Werk met veel contact',
			'Werk met overzicht',
			'Werk waarbij ik moet nadenken'
		]
	},
	{
		id: 'v4-11',
		phase: 'Soort werk',
		text: 'Mag werk lichamelijk zwaar zijn?',
		type: 'options',
		options: ['Liever niet', 'Een beetje', 'Ja, dat is goed', 'Maakt mij niet uit']
	},

	// === 3. Eerste stap en drempel (4) ===
	{
		id: 'v4-12',
		phase: 'Eerste stap en drempel',
		text: 'Hoe wilt u het liefst beginnen op een nieuwe plek?',
		type: 'options',
		options: [
			'Eerst kijken',
			'Eerst iets kleins proberen',
			'Meteen meedoen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v4-13',
		phase: 'Eerste stap en drempel',
		text: 'Hoe wilt u uitleg krijgen?',
		type: 'options',
		options: [
			'Eerst goed uitleg, dan beginnen',
			'Kort uitleg, dan beginnen',
			'Meteen proberen en dan vragen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v4-14',
		phase: 'Eerste stap en drempel',
		text: 'Hoeveel hulp wilt u tijdens het meelopen?',
		type: 'options',
		options: ['Veel hulp', 'Af en toe hulp', 'Liefst zelf doen', 'Maakt mij niet uit']
	},
	{
		id: 'v4-15',
		phase: 'Eerste stap en drempel',
		text: 'Wat is voor u het belangrijkst op een nieuwe plek?',
		type: 'options',
		options: [
			'Dat ik vriendelijk word ontvangen',
			'Dat ik snap wat ik moet doen',
			'Dat het werk bij mij past',
			'Dat het goed te doen is'
		]
	},

	// === 4. Praktisch (4) ===
	{
		id: 'v4-16',
		phase: 'Praktisch',
		text: 'Hoe lang mag een eerste kennismaking duren?',
		type: 'options',
		options: ['Tot 1 uur', '1 tot 2 uur', 'Een halve dag', 'Een hele dag']
	},
	{
		id: 'v4-17',
		phase: 'Praktisch',
		text: 'Hoe gaat u het liefst naar een werkplek?',
		type: 'options',
		options: ['Lopend of met de fiets', 'Met bus of trein', 'Met eigen vervoer', 'Dat verschilt']
	},
	{
		id: 'v4-18',
		phase: 'Praktisch',
		text: 'Hoe ver wilt u reizen?',
		type: 'options',
		options: ['Tot 5 kilometer', 'Tot 10 kilometer', 'Tot 25 kilometer', 'Verder dan 25 kilometer']
	},
	{
		id: 'v4-19',
		phase: 'Praktisch',
		text: 'Waar moet vooral rekening mee worden gehouden?',
		type: 'options',
		options: ['Reistijd', 'Tijdstip', 'Lichamelijk zwaar werk', 'Nergens speciaal mee']
	},

	// === 5. Doel van het platform (1) ===
	{
		id: 'v4-20',
		phase: 'Doel van het platform',
		text: 'Wat wilt u nu het liefst?',
		type: 'options',
		options: [
			'Alleen rondkijken',
			'Een paar soorten werk vergelijken',
			'Ontdekken wat bij mij past',
			'Een plek vinden om verder te gaan'
		]
	}
];
