export type QuestionType = 'options' | 'slider' | 'multi-select';

export interface Question {
	id: string;
	phase: string;
	text: string;
	type: QuestionType;
	options?: string[];
	sliderLabels?: [string, string];
}

export const phases = [
	'Richting',
	'Werkstijl',
	'Wat vind jij belangrijk?',
	'Praktische haalbaarheid',
	'Realistische matching',
	'Drempelverlaging',
	'Werkstijl verdieping',
	'Herkenning',
	'Ervaring & ontwikkeling',
	'Thuissituatie & randvoorwaarden',
	'Diepere cultuurfactoren'
] as const;

export type Phase = (typeof phases)[number];

export const questions: Question[] = [
	// === FASE 1 – Richting ===
	{
		id: 'richting-1',
		phase: 'Richting',
		text: 'Waar ben je nieuwsgierig naar?',
		type: 'multi-select',
		options: [
			'Werk in de regio',
			'Iets nieuws proberen',
			'Mensen of bedrijven leren kennen',
			'Gewoon rondkijken'
		]
	},
	{
		id: 'richting-2',
		phase: 'Richting',
		text: 'Hoe duidelijk is voor jou wat je zoekt?',
		type: 'options',
		options: ['Ik weet precies wat ik wil', 'Ik heb wel een idee', 'Ik wil vooral ontdekken']
	},

	// === FASE 2 – Werkstijl ===
	{
		id: 'werkstijl-1',
		phase: 'Werkstijl',
		text: 'Ik werk liever…',
		type: 'slider',
		sliderLabels: ['Binnen', 'Buiten']
	},
	{
		id: 'werkstijl-2',
		phase: 'Werkstijl',
		text: 'Ik werk liever…',
		type: 'slider',
		sliderLabels: ['Met mensen', 'Met spullen of machines']
	},
	{
		id: 'werkstijl-3',
		phase: 'Werkstijl',
		text: 'Ik ben het liefst…',
		type: 'slider',
		sliderLabels: ['Fysiek bezig', 'Rustig en geconcentreerd bezig']
	},
	{
		id: 'werkstijl-4',
		phase: 'Werkstijl',
		text: 'Ik werk liever…',
		type: 'slider',
		sliderLabels: ['Zelfstandig', 'Samen met anderen']
	},

	// === FASE 3 – Wat vind jij belangrijk? ===
	{
		id: 'belangrijk-1',
		phase: 'Wat vind jij belangrijk?',
		text: 'Wat vind jij belangrijk in werk? (maximaal 2)',
		type: 'multi-select',
		options: [
			'Goede sfeer',
			'Zekerheid',
			'Afwisseling',
			'Goed salaris',
			'Dicht bij huis',
			'Flexibele tijden',
			'Kunnen groeien',
			'Iets betekenen'
		]
	},
	{
		id: 'belangrijk-2',
		phase: 'Wat vind jij belangrijk?',
		text: 'Ik vind het belangrijk dat ik in mijn werk kan blijven leren en groeien',
		type: 'slider',
		sliderLabels: ['Niet zo belangrijk', 'Heel belangrijk']
	},
	{
		id: 'belangrijk-3',
		phase: 'Wat vind jij belangrijk?',
		text: 'Ik vind het belangrijk dat mijn werk ergens aan bijdraagt',
		type: 'slider',
		sliderLabels: ['Niet zo belangrijk', 'Heel belangrijk']
	},

	// === FASE 4 – Praktische haalbaarheid ===
	{
		id: 'praktisch-1',
		phase: 'Praktische haalbaarheid',
		text: 'Hoeveel uur past bij jouw leven?',
		type: 'options',
		options: ['Een paar uur per week', 'Parttime', 'Fulltime', 'Weet ik nog niet']
	},
	{
		id: 'praktisch-2',
		phase: 'Praktische haalbaarheid',
		text: 'Wanneer werk je liever?',
		type: 'options',
		options: ['Overdag', "'s Avonds", 'Wisselende tijden', 'Maakt niet uit']
	},
	{
		id: 'praktisch-3',
		phase: 'Praktische haalbaarheid',
		text: 'Hoe ver wil je ongeveer reizen?',
		type: 'options',
		options: ['Zo dichtbij mogelijk', 'Tot 30 minuten', 'Verder mag ook', 'Maakt niet uit']
	},

	// === FASE 5 – Realistische matching ===
	{
		id: 'matching-1',
		phase: 'Realistische matching',
		text: 'Over welke sectoren wil jij liever géén informatie zien?',
		type: 'multi-select',
		options: [
			'Bouw',
			'Zorg',
			'Horeca',
			'Transport & logistiek',
			'Techniek & industrie',
			'Detailhandel & winkels',
			'Landbouw & groen',
			'Schoonmaak & facilitair',
			'ICT & administratie',
			'Onderwijs & kinderopvang'
		]
	},
	{
		id: 'matching-2',
		phase: 'Realistische matching',
		text: 'Welke taal spreek jij goed genoeg om in te werken?',
		type: 'multi-select',
		options: ['Nederlands', 'Engels', 'Arabisch', 'Pools', 'Duits', 'Turks', 'Anders']
	},

	// === FASE 6 – Drempelverlaging ===
	{
		id: 'drempel-1',
		phase: 'Drempelverlaging',
		text: 'Wat zou helpen om iets nieuws te proberen?',
		type: 'multi-select',
		options: [
			'Eerst meekijken zonder verplichtingen',
			'Samen met iemand gaan',
			'Duidelijke uitleg vooraf',
			'Hulp bij vervoer',
			'Gewoon beginnen is genoeg'
		]
	},

	// === Werkstijl verdieping ===
	{
		id: 'werkstijl-v1',
		phase: 'Werkstijl verdieping',
		text: 'In mijn werk heb ik liever…',
		type: 'slider',
		sliderLabels: ['Elke dag ongeveer hetzelfde', 'Regelmatig iets anders']
	},
	{
		id: 'werkstijl-v2',
		phase: 'Werkstijl verdieping',
		text: 'Ik vind het prettig als…',
		type: 'slider',
		sliderLabels: ['Duidelijk is wat ik moet doen', 'Ik zelf kan bepalen hoe ik iets aanpak']
	},
	{
		id: 'werkstijl-v3',
		phase: 'Werkstijl verdieping',
		text: 'Ik kies liever voor…',
		type: 'slider',
		sliderLabels: ['Weten waar ik aan toe ben', 'Nieuwe dingen uitproberen']
	},
	{
		id: 'werkstijl-v4',
		phase: 'Werkstijl verdieping',
		text: 'Ik werk liever op een plek waar het…',
		type: 'slider',
		sliderLabels: ['Rustig is', 'Druk en levendig is']
	},

	// === Herkenning ===
	{
		id: 'herkenning-1',
		phase: 'Herkenning',
		text: 'Wat past het meest bij jou?',
		type: 'options',
		options: [
			'Jij steekt graag meteen de handen uit de mouwen',
			'Jij denkt eerst goed na voordat je begint',
			'Jij zorgt dat dingen geregeld worden',
			'Jij helpt graag anderen'
		]
	},
	{
		id: 'herkenning-2',
		phase: 'Herkenning',
		text: 'Op een goede werkdag ga jij naar huis en denk je:',
		type: 'options',
		options: [
			'Zo, lekker doorgewerkt',
			'Mooi dat ik iemand heb kunnen helpen',
			'Goed geregeld vandaag',
			'Weer iets nieuws geleerd'
		]
	},
	{
		id: 'herkenning-3',
		phase: 'Herkenning',
		text: 'Als je ergens nieuw binnenloopt, dan:',
		type: 'options',
		options: [
			'Jij begint meteen',
			'Jij kijkt eerst rustig rond',
			'Jij stelt een paar vragen',
			'Jij zoekt iemand die je helpt'
		]
	},
	{
		id: 'herkenning-4',
		phase: 'Herkenning',
		text: 'Als iets niet lukt, dan:',
		type: 'options',
		options: [
			'Jij blijft proberen',
			'Jij vraagt hulp',
			'Jij zoekt een andere manier',
			'Jij laat het even liggen'
		]
	},
	{
		id: 'herkenning-5',
		phase: 'Herkenning',
		text: 'Wat geeft jou het meeste voldoening?',
		type: 'options',
		options: [
			'Iets tastbaars maken',
			'Iemand vooruit helpen',
			'Een probleem oplossen',
			'Zien dat iets goed loopt'
		]
	},

	// === Ervaring & ontwikkeling ===
	{
		id: 'ervaring-1',
		phase: 'Ervaring & ontwikkeling',
		text: 'Heb je werkervaring?',
		type: 'options',
		options: [
			'Jij hebt al langere tijd gewerkt',
			'Jij hebt wat ervaring (bijbaan of stage)',
			'Jij hebt nog niet veel ervaring',
			'Jij hebt nog niet gewerkt'
		]
	},
	{
		id: 'ervaring-2',
		phase: 'Ervaring & ontwikkeling',
		text: 'Wat kun jij goed?',
		type: 'multi-select',
		options: [
			'Jij gaat makkelijk met mensen om',
			'Jij werkt netjes en precies',
			'Jij pakt door als het nodig is',
			'Jij houdt overzicht',
			'Jij lost problemen op'
		]
	},
	{
		id: 'ervaring-3',
		phase: 'Ervaring & ontwikkeling',
		text: 'Sta je open om iets nieuws te leren?',
		type: 'options',
		options: ['Ja, graag', 'Misschien', 'Alleen als het nodig is', 'Liever niet']
	},

	// === Thuissituatie & randvoorwaarden ===
	{
		id: 'thuis-1',
		phase: 'Thuissituatie & randvoorwaarden',
		text: 'Welke werktijden passen het beste bij jouw situatie thuis?',
		type: 'options',
		options: [
			'Werken onder schooltijden',
			'Duidelijke vaste tijden',
			'Flexibele uren',
			'Dat verschilt per week',
			'Niet van toepassing'
		]
	},
	{
		id: 'thuis-2',
		phase: 'Thuissituatie & randvoorwaarden',
		text: 'Laat aanbod zien dat ik goed kan combineren met…',
		type: 'multi-select',
		options: [
			'Schooltijden van mijn kinderen',
			'Zorg voor iemand',
			'Mijn studie',
			'Wisselende afspraken',
			'Dat speelt voor mij niet'
		]
	},
	{
		id: 'thuis-3',
		phase: 'Thuissituatie & randvoorwaarden',
		text: 'Laat aanbod zien dat past bij mijn manier van reizen',
		type: 'options',
		options: [
			'Dichtbij huis',
			'Goed bereikbaar met openbaar vervoer',
			'Met de fiets',
			'Met de auto',
			'Dat maakt mij niet uit'
		]
	},

	// === Diepere cultuurfactoren ===
	{
		id: 'cultuur-1',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik werk liever op een plek waar…',
		type: 'slider',
		sliderLabels: ['Ik gewoon mijn werk doe', 'Ik kansen krijg om stappen te maken']
	},
	{
		id: 'cultuur-2',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik vind het belangrijk dat ik invloed heb op hoe ik mijn werk doe',
		type: 'slider',
		sliderLabels: ['Niet zo belangrijk', 'Heel belangrijk']
	},
	{
		id: 'cultuur-3',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik werk het liefst op een plek waar mijn leidinggevende…',
		type: 'slider',
		sliderLabels: ['Duidelijk zegt wat moet', 'Luistert en meedenkt']
	},
	{
		id: 'cultuur-4',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik voel mij het prettigst in een team waar…',
		type: 'slider',
		sliderLabels: ['Fouten maken niet erg is', 'Alles meteen goed moet gaan']
	},
	{
		id: 'cultuur-5',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik werk het liefst op een plek waar…',
		type: 'slider',
		sliderLabels: ['Het tempo hoog ligt', 'Het tempo goed vol te houden is']
	},
	{
		id: 'cultuur-6',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik vind het belangrijk dat afspraken en regels eerlijk worden toegepast',
		type: 'slider',
		sliderLabels: ['Niet zo belangrijk', 'Heel belangrijk']
	},
	{
		id: 'cultuur-7',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik werk liever bij een bedrijf waar…',
		type: 'slider',
		sliderLabels: ['Je het zelf moet uitzoeken', 'Je hulp krijgt als dat nodig is']
	},
	{
		id: 'cultuur-8',
		phase: 'Diepere cultuurfactoren',
		text: 'Ik voel mij het meest op mijn plek als…',
		type: 'slider',
		sliderLabels: ['Ik vooral mijn eigen taken heb', 'We het echt samen doen']
	}
];
