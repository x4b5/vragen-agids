import type { Question } from './questions';

export const phasesV9 = [
	'De basis: Wat zoek je precies?',
	'De plek: Waar voel jij je goed?',
	'De inhoud: Wat ga je doen?',
	'Samenwerken: Met wie doe je het?',
	'Leren en starten: Hoe begin je?',
	'De volgende stap: De kennismaking'
] as const;

export type PhaseV9 = (typeof phasesV9)[number];

export const questionsV9: Question[] = [
	// === 1. De basis: Wat zoek je precies? (5) ===
	{
		id: 'v9-1',
		phase: 'De basis: Wat zoek je precies?',
		text: 'Welke taal spreek jij goed genoeg om in te werken?',
		type: 'options',
		options: ['Nederlands', 'Engels', 'Anders']
	},
	{
		id: 'v9-2',
		phase: 'De basis: Wat zoek je precies?',
		text: 'Over welke sectoren wil jij liever geen informatie zien?',
		type: 'multi-select',
		options: [
			'Bouw',
			'Zorg',
			'Transport & logistiek',
			'Techniek en industrie',
			'Detailhandel & winkels',
			'Landbouw & groen',
			'Schoonmaak & facilitair',
			'ICT & administratie',
			'Onderwijs & kinderopvang'
		]
	},
	{
		id: 'v9-3',
		phase: 'De basis: Wat zoek je precies?',
		text: 'Hoeveel uur wil je werken?',
		type: 'options',
		options: [
			'Veel uren (fulltime, 4 of 5 dagen)',
			'Een paar dagen per week (parttime)',
			'Alleen een paar uurtjes (bijbaan)',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v9-4',
		phase: 'De basis: Wat zoek je precies?',
		text: 'Wanneer werk je liever?',
		type: 'options',
		options: ['Overdag', "'s Avonds", 'Wisselende tijden', 'Maakt niet uit']
	},
	{
		id: 'v9-5',
		phase: 'De basis: Wat zoek je precies?',
		text: 'Hoe ver wil je ongeveer reizen?',
		type: 'options',
		options: ['Zo dicht mogelijk', 'Tot 30 minuten', 'Verder mag ook', 'Maakt niet uit']
	},

	// === 2. De plek: Waar voel jij je goed? (3) ===
	{
		id: 'v9-6',
		phase: 'De plek: Waar voel jij je goed?',
		text: 'Waar werk je liever?',
		type: 'options',
		options: ['Binnen', 'Buiten', 'Binnen en buiten', 'Maakt mij niet uit']
	},
	{
		id: 'v9-7',
		phase: 'De plek: Waar voel jij je goed?',
		text: 'Wat past beter bij je?',
		type: 'options',
		options: [
			'Een rustige en stille plek',
			'Een drukke en levendige plek',
			'Allebei goed',
			'Weet ik nog niet'
		]
	},
	{
		id: 'v9-8',
		phase: 'De plek: Waar voel jij je goed?',
		text: 'Mag het werk lichamelijk zwaar zijn?',
		type: 'options',
		options: ['Liever niet', 'Een beetje', 'Ja, graag', 'Maakt mij niet uit']
	},

	// === 3. De inhoud: Wat ga je doen? (4) ===
	{
		id: 'v9-9',
		phase: 'De inhoud: Wat ga je doen?',
		text: 'Wat spreekt je het meeste aan?',
		type: 'options',
		options: [
			'Mensen helpen',
			'Iets maken of repareren',
			'Iets regelen of organiseren',
			'Iets onderzoeken of uitzoeken'
		]
	},
	{
		id: 'v9-10',
		phase: 'De inhoud: Wat ga je doen?',
		text: 'Waar word je het meest blij van?',
		type: 'options',
		options: [
			'Als ik iemand help',
			'Als ik iets afmaak',
			'Als alles goed loopt',
			'Als ik iets nieuws snap'
		]
	},
	{
		id: 'v9-11',
		phase: 'De inhoud: Wat ga je doen?',
		text: 'Houd je meer van hetzelfde werk of van afwisseling?',
		type: 'options',
		options: [
			'Liefst vaak hetzelfde',
			'Liefst afwisseling',
			'Allebei is goed',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v9-12',
		phase: 'De inhoud: Wat ga je doen?',
		text: 'Hoe vind je het om met klanten of bezoekers te praten?',
		type: 'options',
		options: [
			'Leuk, geeft me energie',
			'Af en toe prima',
			'Liever op de achtergrond',
			'Maakt me niet uit'
		]
	},

	// === 4. Samenwerken: Met wie doe je het? (3) ===
	{
		id: 'v9-13',
		phase: 'Samenwerken: Met wie doe je het?',
		text: 'Werk je liever alleen of samen?',
		type: 'options',
		options: ['Liefst alleen', 'Liefst samen', 'Allebei is goed', 'Maakt mij niet uit']
	},
	{
		id: 'v9-14',
		phase: 'Samenwerken: Met wie doe je het?',
		text: "Met hoeveel collega\u2019s wil je direct samenwerken?",
		type: 'options',
		options: [
			'Liefst alleen',
			"Met 1 tot 3 collega\u2019s",
			"Met 4 tot 10 collega\u2019s",
			"Met meer dan 10 collega\u2019s"
		]
	},
	{
		id: 'v9-15',
		phase: 'Samenwerken: Met wie doe je het?',
		text: 'Wil je dat iemand je vertelt wat je moet doen?',
		type: 'options',
		options: [
			'Ja, ik hoor graag precies wat de taken zijn',
			'Ik wil graag zelf meedenken over het werk',
			'Ik werk het liefst helemaal zelfstandig',
			'Maakt mij niet uit'
		]
	},

	// === 5. Leren en starten: Hoe begin je? (4) ===
	{
		id: 'v9-16',
		phase: 'Leren en starten: Hoe begin je?',
		text: 'Sta je open om iets nieuws te leren?',
		type: 'options',
		options: ['Ja, graag', 'Misschien', 'Alleen als het nodig is', 'Liever niet']
	},
	{
		id: 'v9-17',
		phase: 'Leren en starten: Hoe begin je?',
		text: 'Hoe wil je uitleg krijgen?',
		type: 'options',
		options: [
			'Eerst precies uitleg, daarna beginnen',
			'Korte uitleg, daarna beginnen',
			'Meteen proberen',
			'Maakt mij niet uit'
		]
	},
	{
		id: 'v9-18',
		phase: 'Leren en starten: Hoe begin je?',
		text: 'Hoe wil je het liefst beginnen op een nieuwe plek?',
		type: 'options',
		options: [
			'Eerst kijken',
			'Eerst iets kleins proberen',
			'Meteen meedoen',
			'Maakt mij niets uit'
		]
	},
	{
		id: 'v9-19',
		phase: 'Leren en starten: Hoe begin je?',
		text: 'Hoeveel hulp wil je tijdens het meelopen?',
		type: 'options',
		options: ['Veel hulp', 'Af en toe hulp', 'Liefst zelf doen', 'Maakt mij niet uit']
	},

	// === 6. De volgende stap: De kennismaking (1) ===
	{
		id: 'v9-20',
		phase: 'De volgende stap: De kennismaking',
		text: 'Hoe lang mag een kennismaking duren?',
		type: 'options',
		options: ['Half uur', 'Uur', 'Maakt mij niet uit']
	}
];
