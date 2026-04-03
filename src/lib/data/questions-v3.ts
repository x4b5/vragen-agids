import type { Question } from './questions';

export const phasesV3 = [
	'Werkomgeving',
	'Werkwijze',
	'Inhoud van werk',
	'Eerste stap en drempel',
	'Praktische haalbaarheid',
	'Werkplekfit en richting'
] as const;

export type PhaseV3 = (typeof phasesV3)[number];

export const questionsV3: Question[] = [
	// === 1. Werkomgeving (4) ===
	{
		id: 'v3-1',
		phase: 'Werkomgeving',
		text: 'Waar wilt u het liefst kennismaken met werk?',
		type: 'options',
		options: ['Alleen binnen', 'Alleen buiten', 'Zowel binnen als buiten', 'Maakt mij niet uit']
	},
	{
		id: 'v3-2',
		phase: 'Werkomgeving',
		text: 'In wat voor omgeving voelt u zich prettiger?',
		type: 'options',
		options: [
			'Een plek waar weinig tegelijk gebeurt',
			'Een plek waar veel tegelijk gebeurt',
			'Beide is goed',
			'Weet ik nog niet'
		]
	},
	{
		id: 'v3-3',
		phase: 'Werkomgeving',
		text: 'Met hoeveel collega\u2019s wilt u meestal direct samenwerken tijdens een werkmoment?',
		type: 'options',
		options: [
			'Meestal alleen',
			'Met 1 tot 3 collega\u2019s',
			'Met 4 tot 10 collega\u2019s',
			'Met meer dan 10 collega\u2019s'
		]
	},
	{
		id: 'v3-4',
		phase: 'Werkomgeving',
		text: 'Hoe wilt u dat het werk meestal verloopt?',
		type: 'options',
		options: [
			'Zoveel mogelijk hetzelfde per dag',
			'Regelmatig iets anders op een dag',
			'Veel verschil per uur of per taak',
			'Maakt mij niet uit'
		]
	},

	// === 2. Werkwijze (4) ===
	{
		id: 'v3-5',
		phase: 'Werkwijze',
		text: 'Hoe werkt u het liefst?',
		type: 'options',
		options: [
			'Vooral alleen',
			'Vooral samen met anderen',
			'Deels alleen, deels samen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v3-6',
		phase: 'Werkwijze',
		text: 'Wat doet u liever?',
		type: 'options',
		options: [
			'Iets uitvoeren met uw handen',
			'Iets uitzoeken of bedenken',
			'Beide',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v3-7',
		phase: 'Werkwijze',
		text: 'Hoe wilt u instructie krijgen?',
		type: 'options',
		options: [
			'Eerst precies uitleg, daarna beginnen',
			'Korte uitleg, daarna beginnen',
			'Meteen proberen en onderweg vragen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v3-8',
		phase: 'Werkwijze',
		text: 'Hoeveel lichamelijke inspanning mag het werk vragen?',
		type: 'options',
		options: [
			'Liefst weinig',
			'Mag af en toe',
			'Mag een belangrijk deel van het werk zijn',
			'Maakt mij niet uit'
		]
	},

	// === 3. Inhoud van werk (4) ===
	{
		id: 'v3-9',
		phase: 'Inhoud van werk',
		text: 'Wat spreekt u het meest aan?',
		type: 'options',
		options: [
			'Mensen helpen',
			'Iets maken of repareren',
			'Iets regelen of organiseren',
			'Iets onderzoeken of uitzoeken'
		]
	},
	{
		id: 'v3-10',
		phase: 'Inhoud van werk',
		text: 'Waarmee wilt u het liefst bezig zijn?',
		type: 'options',
		options: [
			'Gesprekken voeren of contact hebben',
			'Materialen, gereedschap of machines gebruiken',
			'Plannen, regelen of bijhouden',
			'Tekenen, ontwerpen of bedenken'
		]
	},
	{
		id: 'v3-11',
		phase: 'Inhoud van werk',
		text: 'Waar haalt u het meeste voldoening uit?',
		type: 'options',
		options: [
			'Als iemand door mij geholpen is',
			'Als ik iets af heb gemaakt',
			'Als alles goed geregeld is',
			'Als ik iets begrijp wat eerst onduidelijk was'
		]
	},
	{
		id: 'v3-12',
		phase: 'Inhoud van werk',
		text: 'Wat lijkt u prettiger?',
		type: 'options',
		options: [
			'Werk waarbij u direct ziet wat het oplevert',
			'Werk waarbij u vooral contact hebt',
			'Werk waarbij u vooral overzicht houdt',
			'Werk waarbij u vooral nadenkt'
		]
	},

	// === 4. Eerste stap en drempel (3) ===
	{
		id: 'v3-13',
		phase: 'Eerste stap en drempel',
		text: 'Hoe wilt u het liefst beginnen bij een onbekende werkplek?',
		type: 'options',
		options: [
			'Eerst alleen kijken',
			'Eerst kort iets proberen',
			'Meteen meedoen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v3-14',
		phase: 'Eerste stap en drempel',
		text: 'Hoeveel uitleg wilt u vooraf ontvangen?',
		type: 'options',
		options: [
			'Alles vooraf duidelijk',
			'Alleen de belangrijkste dingen vooraf',
			'Zo min mogelijk vooraf',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v3-15',
		phase: 'Eerste stap en drempel',
		text: 'Hoeveel begeleiding wilt u tijdens het moment zelf?',
		type: 'options',
		options: [
			'Iemand blijft grotendeels bij mij',
			'Iemand helpt af en toe',
			'Ik red mij meestal zelf',
			'Maakt mij niet uit'
		]
	},

	// === 5. Praktische haalbaarheid (3) ===
	{
		id: 'v3-16',
		phase: 'Praktische haalbaarheid',
		text: 'Hoe lang mag een eerste kennismaking voor u duren?',
		type: 'options',
		options: ['Tot 1 uur', '1 tot 2 uur', 'Een halve dag', 'Een hele dag']
	},
	{
		id: 'v3-17',
		phase: 'Praktische haalbaarheid',
		text: 'Hoe komt u het liefst op een werkplek?',
		type: 'options',
		options: [
			'Lopend of met de fiets',
			'Met openbaar vervoer',
			'Met eigen vervoer',
			'Dat verschilt'
		]
	},
	{
		id: 'v3-18',
		phase: 'Praktische haalbaarheid',
		text: 'Hoe ver wilt u maximaal reizen voor een eerste kennismaking?',
		type: 'options',
		options: ['Tot 5 km', 'Tot 10 km', 'Tot 25 km', 'Verder dan 25 km']
	},

	// === 6. Werkplekfit en richting (2) ===
	{
		id: 'v3-19',
		phase: 'Werkplekfit en richting',
		text: 'Wat maakt voor u het verschil tussen wel of niet terug willen komen?',
		type: 'options',
		options: [
			'Hoe ik ben ontvangen',
			'Of ik begrijp wat er gebeurt',
			'Of het werk mij aanspreekt',
			'Of het praktisch haalbaar voelt'
		]
	},
	{
		id: 'v3-20',
		phase: 'Werkplekfit en richting',
		text: 'Wat wilt u nu het liefst uit dit platform halen?',
		type: 'options',
		options: [
			'Alleen ori\u00EBnteren',
			'Een paar richtingen vergelijken',
			'Ontdekken wat bij mij past',
			'Een plek vinden om echt verder mee te gaan'
		]
	}
];
