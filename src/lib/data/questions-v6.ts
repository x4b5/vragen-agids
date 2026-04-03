export interface V6CardOption {
	value: string;
	title: string;
	description: string;
	image: string;
	imageType: 'photo' | 'card';
}

export interface V6Question {
	id: string;
	phase: string;
	text: string;
	options: V6CardOption[];
}

export const phasesV6 = [
	'Werkomgeving en werkvorm',
	'Soort werk',
	'Eerste stap en drempel',
	'Praktisch',
	'Doel van het platform'
] as const;

export type PhaseV6 = (typeof phasesV6)[number];

export const questionsV6: V6Question[] = [
	// === 1. Werkomgeving en werkvorm (6) ===
	{
		id: 'v6-1',
		phase: 'Werkomgeving en werkvorm',
		text: 'Waar werkt u liever?',
		options: [
			{ value: 'Binnen', title: 'Binnen', description: 'In een gebouw werken', image: '/images/v6/v6-01-a.png', imageType: 'photo' },
			{ value: 'Buiten', title: 'Buiten', description: 'In de open lucht', image: '/images/v6/v6-01-b.png', imageType: 'photo' },
			{ value: 'Binnen en buiten', title: 'Allebei', description: 'Binnen én buiten', image: '/images/v6/v6-01-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-2',
		phase: 'Werkomgeving en werkvorm',
		text: 'Hoeveel mensen om u heen?',
		options: [
			{ value: 'Liefst alleen', title: 'Alleen', description: 'Op mezelf werken', image: '/images/v6/v6-02-a.png', imageType: 'photo' },
			{ value: 'Met 1 of 2 mensen', title: 'Klein team', description: 'Met 1 of 2 mensen', image: '/images/v6/v6-02-b.png', imageType: 'photo' },
			{ value: 'Met 3 tot 5 mensen', title: 'Groepje', description: 'Met 3 tot 5 mensen', image: '/images/v6/v6-02-c.png', imageType: 'photo' },
			{ value: 'Met meer dan 5 mensen', title: 'Groot team', description: 'Meer dan 5 mensen', image: '/images/v6/v6-02-d.png', imageType: 'photo' }
		]
	},
	{
		id: 'v6-3',
		phase: 'Werkomgeving en werkvorm',
		text: 'Wat past beter bij u?',
		options: [
			{ value: 'Een rustige plek', title: 'Rustig', description: 'Stil en kalm', image: '/images/v6/v6-03-a.png', imageType: 'photo' },
			{ value: 'Een plek waar veel gebeurt', title: 'Druk', description: 'Veel actie om heen', image: '/images/v6/v6-03-b.png', imageType: 'photo' },
			{ value: 'Allebei is goed', title: 'Allebei', description: 'Maakt niet uit', image: '/images/v6/v6-03-c.png', imageType: 'photo' },
			{ value: 'Weet ik nog niet', title: 'Weet niet', description: 'Nog geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-4',
		phase: 'Werkomgeving en werkvorm',
		text: 'Hetzelfde werk of afwisseling?',
		options: [
			{ value: 'Liefst vaak hetzelfde', title: 'Hetzelfde', description: 'Vaste routine', image: '/images/v6/v6-04-a.png', imageType: 'photo' },
			{ value: 'Liefst afwisseling', title: 'Afwisseling', description: 'Steeds iets anders', image: '/images/v6/v6-04-b.png', imageType: 'photo' },
			{ value: 'Allebei is goed', title: 'Allebei', description: 'Geen voorkeur', image: '/images/v6/v6-04-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-5',
		phase: 'Werkomgeving en werkvorm',
		text: 'Met uw handen of uw hoofd?',
		options: [
			{ value: 'Met mijn handen', title: 'Handen', description: 'Fysiek aan de slag', image: '/images/v6/v6-05-a.png', imageType: 'photo' },
			{ value: 'Met mijn hoofd', title: 'Hoofd', description: 'Nadenken en plannen', image: '/images/v6/v6-05-b.png', imageType: 'photo' },
			{ value: 'Allebei', title: 'Allebei', description: 'Handen én hoofd', image: '/images/v6/v6-05-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-6',
		phase: 'Werkomgeving en werkvorm',
		text: 'Alleen of samen werken?',
		options: [
			{ value: 'Liefst alleen', title: 'Alleen', description: 'Op mezelf werken', image: '/images/v6/v6-06-a.png', imageType: 'photo' },
			{ value: 'Liefst samen', title: 'Samen', description: 'Met anderen werken', image: '/images/v6/v6-06-b.png', imageType: 'photo' },
			{ value: 'Allebei is goed', title: 'Allebei', description: 'Geen voorkeur', image: '/images/v6/v6-06-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},

	// === 2. Soort werk (5) ===
	{
		id: 'v6-7',
		phase: 'Soort werk',
		text: 'Wat lijkt u het leukst?',
		options: [
			{ value: 'Mensen helpen', title: 'Mensen helpen', description: 'Anderen bijstaan', image: '/images/v6/v6-07-a.png', imageType: 'photo' },
			{ value: 'Iets maken of repareren', title: 'Maken', description: 'Bouwen of repareren', image: '/images/v6/v6-07-b.png', imageType: 'photo' },
			{ value: 'Iets regelen', title: 'Regelen', description: 'Organiseren en plannen', image: '/images/v6/v6-07-c.png', imageType: 'photo' },
			{ value: 'Iets uitzoeken', title: 'Uitzoeken', description: 'Onderzoeken en leren', image: '/images/v6/v6-07-d.png', imageType: 'photo' }
		]
	},
	{
		id: 'v6-8',
		phase: 'Soort werk',
		text: 'Waar bent u het liefst mee bezig?',
		options: [
			{ value: 'Met mensen praten', title: 'Mensen', description: 'Praten en helpen', image: '/images/v6/v6-08-a.png', imageType: 'photo' },
			{ value: 'Met spullen, gereedschap of machines', title: 'Gereedschap', description: 'Werken met spullen', image: '/images/v6/v6-08-b.png', imageType: 'photo' },
			{ value: 'Met plannen of regelen', title: 'Plannen', description: 'Organiseren en regelen', image: '/images/v6/v6-08-c.png', imageType: 'photo' },
			{ value: 'Met denken of bedenken', title: 'Denken', description: 'Nadenken en bedenken', image: '/images/v6/v6-08-d.png', imageType: 'photo' }
		]
	},
	{
		id: 'v6-9',
		phase: 'Soort werk',
		text: 'Waar wordt u het meest blij van?',
		options: [
			{ value: 'Als ik iemand help', title: 'Helpen', description: 'Iemand blij maken', image: '/images/v6/v6-09-a.png', imageType: 'photo' },
			{ value: 'Als ik iets afmaak', title: 'Afmaken', description: 'Klaar met een taak', image: '/images/v6/v6-09-b.png', imageType: 'photo' },
			{ value: 'Als alles goed loopt', title: 'Goed loopt', description: 'Alles op zijn plek', image: '/images/v6/v6-09-c.png', imageType: 'photo' },
			{ value: 'Als ik iets nieuws snap', title: 'Leren', description: 'Iets nieuws snappen', image: '/images/v6/v6-09-d.png', imageType: 'photo' }
		]
	},
	{
		id: 'v6-10',
		phase: 'Soort werk',
		text: 'Wat past het best bij u?',
		options: [
			{ value: 'Werk waar ik direct zie wat ik heb gedaan', title: 'Zichtbaar', description: 'Resultaat direct zien', image: '/images/v6/v6-10-a.png', imageType: 'photo' },
			{ value: 'Werk met veel contact', title: 'Contact', description: 'Veel met mensen', image: '/images/v6/v6-10-b.png', imageType: 'photo' },
			{ value: 'Werk met overzicht', title: 'Overzicht', description: 'Alles in de gaten', image: '/images/v6/v6-10-c.png', imageType: 'photo' },
			{ value: 'Werk waarbij ik moet nadenken', title: 'Nadenken', description: 'Puzzelen en denken', image: '/images/v6/v6-10-d.png', imageType: 'photo' }
		]
	},
	{
		id: 'v6-11',
		phase: 'Soort werk',
		text: 'Mag werk lichamelijk zwaar zijn?',
		options: [
			{ value: 'Liever niet', title: 'Liever niet', description: 'Niet zwaar werk', image: '/images/v6/v6-11-a.png', imageType: 'photo' },
			{ value: 'Een beetje', title: 'Een beetje', description: 'Licht lichamelijk', image: '/images/v6/v6-11-b.png', imageType: 'photo' },
			{ value: 'Ja, dat is goed', title: 'Ja graag', description: 'Mag best zwaar zijn', image: '/images/v6/v6-11-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},

	// === 3. Eerste stap en drempel (4) ===
	{
		id: 'v6-12',
		phase: 'Eerste stap en drempel',
		text: 'Hoe wilt u beginnen op een nieuwe plek?',
		options: [
			{ value: 'Eerst kijken', title: 'Eerst kijken', description: 'Rustig observeren', image: '/images/v6/v6-12-a.png', imageType: 'photo' },
			{ value: 'Eerst iets kleins proberen', title: 'Klein beginnen', description: 'Iets kleins proberen', image: '/images/v6/v6-12-b.png', imageType: 'photo' },
			{ value: 'Meteen meedoen', title: 'Meteen meedoen', description: 'Direct aan de slag', image: '/images/v6/v6-12-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-13',
		phase: 'Eerste stap en drempel',
		text: 'Hoe wilt u uitleg krijgen?',
		options: [
			{ value: 'Eerst goed uitleg, dan beginnen', title: 'Uitleg eerst', description: 'Goed uitleg krijgen', image: '/images/v6/v6-13-a.png', imageType: 'photo' },
			{ value: 'Kort uitleg, dan beginnen', title: 'Kort uitleg', description: 'Snel aan de slag', image: '/images/v6/v6-13-b.png', imageType: 'photo' },
			{ value: 'Meteen proberen en dan vragen', title: 'Meteen doen', description: 'Proberen en vragen', image: '/images/v6/v6-13-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-14',
		phase: 'Eerste stap en drempel',
		text: 'Hoeveel hulp wilt u bij het meelopen?',
		options: [
			{ value: 'Veel hulp', title: 'Veel hulp', description: 'Graag begeleiding', image: '/images/v6/v6-14-a.png', imageType: 'photo' },
			{ value: 'Af en toe hulp', title: 'Soms hulp', description: 'Af en toe tips', image: '/images/v6/v6-14-b.png', imageType: 'photo' },
			{ value: 'Liefst zelf doen', title: 'Zelf doen', description: 'Liefst zelfstandig', image: '/images/v6/v6-14-c.png', imageType: 'photo' },
			{ value: 'Maakt mij niet uit', title: 'Maakt niet uit', description: 'Geen voorkeur', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-15',
		phase: 'Eerste stap en drempel',
		text: 'Wat is het belangrijkst op een nieuwe plek?',
		options: [
			{ value: 'Dat ik vriendelijk word ontvangen', title: 'Vriendelijk', description: 'Warm welkom krijgen', image: '/images/v6/v6-15-a.png', imageType: 'photo' },
			{ value: 'Dat ik snap wat ik moet doen', title: 'Duidelijkheid', description: 'Weten wat te doen', image: '/images/v6/v6-15-b.png', imageType: 'photo' },
			{ value: 'Dat het werk bij mij past', title: 'Past bij mij', description: 'Goed aansluitend werk', image: '/images/v6/v6-15-c.png', imageType: 'photo' },
			{ value: 'Dat het goed te doen is', title: 'Haalbaar', description: 'Niet te moeilijk', image: '/images/v6/v6-15-d.png', imageType: 'photo' }
		]
	},

	// === 4. Praktisch (4) — pictogram cards ===
	{
		id: 'v6-16',
		phase: 'Praktisch',
		text: 'Hoe lang mag een kennismaking duren?',
		options: [
			{ value: 'Tot 1 uur', title: '1 uur', description: 'Kort kennismaken', image: '', imageType: 'card' },
			{ value: '1 tot 2 uur', title: '2 uur', description: 'Beetje langer', image: '', imageType: 'card' },
			{ value: 'Een halve dag', title: 'Halve dag', description: 'De hele ochtend', image: '', imageType: 'card' },
			{ value: 'Een hele dag', title: 'Hele dag', description: 'Volledig meelopen', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-17',
		phase: 'Praktisch',
		text: 'Hoe gaat u naar een werkplek?',
		options: [
			{ value: 'Lopend of met de fiets', title: 'Fiets / lopen', description: 'Op eigen kracht', image: '', imageType: 'card' },
			{ value: 'Met bus of trein', title: 'OV', description: 'Bus of trein', image: '', imageType: 'card' },
			{ value: 'Met eigen vervoer', title: 'Eigen auto', description: 'Met de auto', image: '', imageType: 'card' },
			{ value: 'Dat verschilt', title: 'Verschilt', description: 'Hangt ervan af', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-18',
		phase: 'Praktisch',
		text: 'Hoe ver wilt u reizen?',
		options: [
			{ value: 'Tot 5 kilometer', title: '5 km', description: 'Dicht bij huis', image: '', imageType: 'card' },
			{ value: 'Tot 10 kilometer', title: '10 km', description: 'In de buurt', image: '', imageType: 'card' },
			{ value: 'Tot 25 kilometer', title: '25 km', description: 'Best ver weg', image: '', imageType: 'card' },
			{ value: 'Verder dan 25 kilometer', title: '25+ km', description: 'Maakt niet uit', image: '', imageType: 'card' }
		]
	},
	{
		id: 'v6-19',
		phase: 'Praktisch',
		text: 'Waar moet rekening mee worden gehouden?',
		options: [
			{ value: 'Reistijd', title: 'Reistijd', description: 'Niet te ver weg', image: '', imageType: 'card' },
			{ value: 'Tijdstip', title: 'Tijdstip', description: 'Wanneer ik kan', image: '', imageType: 'card' },
			{ value: 'Lichamelijk zwaar werk', title: 'Fysiek', description: 'Niet te zwaar', image: '', imageType: 'card' },
			{ value: 'Nergens speciaal mee', title: 'Nergens mee', description: 'Geen beperkingen', image: '', imageType: 'card' }
		]
	},

	// === 5. Doel van het platform (1) ===
	{
		id: 'v6-20',
		phase: 'Doel van het platform',
		text: 'Wat wilt u nu het liefst?',
		options: [
			{ value: 'Alleen rondkijken', title: 'Rondkijken', description: 'Vrijblijvend kijken', image: '/images/v6/v6-20-a.png', imageType: 'photo' },
			{ value: 'Een paar soorten werk vergelijken', title: 'Vergelijken', description: 'Opties bekijken', image: '/images/v6/v6-20-b.png', imageType: 'photo' },
			{ value: 'Ontdekken wat bij mij past', title: 'Ontdekken', description: 'Wat past bij mij', image: '/images/v6/v6-20-c.png', imageType: 'photo' },
			{ value: 'Een plek vinden om verder te gaan', title: 'Plek vinden', description: 'Concreet aan de slag', image: '/images/v6/v6-20-d.png', imageType: 'photo' }
		]
	}
];
