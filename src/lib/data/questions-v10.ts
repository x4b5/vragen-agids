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
	// === Werkomgeving (7) ===
	// Filter: binnen / buiten / beide
	{
		id: 'v10-1',
		theme: 'Werkomgeving',
		text: 'waar je werkt: binnen, buiten of allebei'
	},
	// Filter: stil / gemiddeld / luid
	{
		id: 'v10-2',
		theme: 'Werkomgeving',
		text: 'hoeveel geluid er is op de werkplek'
	},
	// Filter: licht / gemiddeld / zwaar lichamelijk
	{
		id: 'v10-3',
		theme: 'Werkomgeving',
		text: 'wat het werk vraagt van je lichaam'
	},
	// Filter: rustig / gemiddeld / druk
	{
		id: 'v10-4',
		theme: 'Werkomgeving',
		text: 'hoe druk het is op een werkdag'
	},
	// Filter: werkkleding / eigen kleding
	{
		id: 'v10-5',
		theme: 'Werkomgeving',
		text: 'of je werkkleding krijgt of je eigen kleding aan mag'
	},
	// Filter: afstand in km of reistijd
	{
		id: 'v10-6',
		theme: 'Werkomgeving',
		text: 'hoe ver je moet reizen naar je werk'
	},
	// Filter: veiligheidsrisico laag / gemiddeld / hoog
	{
		id: 'v10-7',
		theme: 'Werkomgeving',
		text: 'of er gevaarlijke stoffen, machines zijn of wat gevaarlijke situaties kunnen zijn op het werk'
	},

	// === Manier van werken (5) ===
	// Filter: vaste werkwijze / eigen inbreng
	{
		id: 'v10-8',
		theme: 'Manier van werken',
		text: 'of je het werk op je eigen manier mag doen'
	},
	// Filter: alleen / klein team / groot team
	{
		id: 'v10-9',
		theme: 'Manier van werken',
		text: 'of je alleen werkt, in een klein team of in een groot team'
	},
	// Filter: vaste taken / wisselende taken
	{
		id: 'v10-10',
		theme: 'Manier van werken',
		text: 'of je elke dag hetzelfde doet of steeds iets anders'
	},
	// Filter: zelfstandig starten / stap-voor-stap uitleg
	{
		id: 'v10-11',
		theme: 'Manier van werken',
		text: 'of je alles zelf mag uitzoeken of dat je stap voor stap uitleg krijgt'
	},
	// Filter: klantcontact ja/nee
	{
		id: 'v10-12',
		theme: 'Manier van werken',
		text: 'of je met klanten of bezoekers te maken krijgt'
	},

	// === Inhoud van het werk (1) ===
	// Filter: type werk (helpen / maken / regelen / uitzoeken)
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

	// === Samenwerken en sfeer (6) ===
	// Filter: kennismaking vooraf ja/nee
	{
		id: 'v10-14',
		theme: 'Samenwerken en sfeer',
		text: 'of je het team en je baas kunt ontmoeten voordat je begint'
	},
	// Filter: iemand meenemen naar kennismaking ja/nee
	{
		id: 'v10-15',
		theme: 'Samenwerken en sfeer',
		text: 'of je iemand mee mag nemen naar de eerste kennismaking'
	},
	// Filter: foto\u2019s/video beschikbaar ja/nee
	{
		id: 'v10-16',
		theme: 'Samenwerken en sfeer',
		text: 'of je foto\u2019s of een filmpje van de werkplek kunt zien voordat je begint'
	},
	// Filter: parkeren/fietsenstalling ja/nee
	{
		id: 'v10-17',
		theme: 'Samenwerken en sfeer',
		text: 'of er plek is om je fiets of auto neer te zetten'
	},
	// Filter: inwerkperiode ja/nee
	{
		id: 'v10-18',
		theme: 'Samenwerken en sfeer',
		text: 'of iemand je helpt als je net begint met werken'
	},
	// Filter: taal Nederlands / meertalig / anders
	{
		id: 'v10-19',
		theme: 'Samenwerken en sfeer',
		text: 'welke taal er gesproken wordt op het werk'
	},

	// === Leren en beginnen (3) ===
	// Filter: opleiding/cursussen ja/nee
	{
		id: 'v10-20',
		theme: 'Leren en beginnen',
		text: 'of je nieuwe dingen kunt leren'
	},
	// Filter: meelopen/proefperiode ja/nee
	{
		id: 'v10-21',
		theme: 'Leren en beginnen',
		text: 'of je het werk eerst mag uitproberen'
	},
	// Filter: eerste-dag-programma ja/nee
	{
		id: 'v10-22',
		theme: 'Leren en beginnen',
		text: 'hoe je eerste werkdag eruitziet'
	},

	// === Motivatie en groei (4) ===
	// Filter: doorgroeimogelijkheden ja/nee
	{
		id: 'v10-23',
		theme: 'Motivatie en groei',
		text: 'of je later meer of beter werk kunt krijgen'
	},
	// Filter: vrije pauze / vaste pauzetijden
	{
		id: 'v10-24',
		theme: 'Motivatie en groei',
		text: 'hoe de pauzes geregeld zijn'
	},
	// Filter: salaris getoond ja/nee, salarisindicatie
	{
		id: 'v10-25',
		theme: 'Motivatie en groei',
		text: 'hoeveel geld je verdient'
	},
	// Filter: vast contract / tijdelijk / oproep
	{
		id: 'v10-26',
		theme: 'Motivatie en groei',
		text: 'of het een vaste baan is of tijdelijk'
	},

	// === Praktisch (6) ===
	// Filter: werktijden / rooster
	{
		id: 'v10-27',
		theme: 'Praktisch',
		text: 'op welke dagen en tijden je werkt'
	},
	// Filter: vaste werktijden / flexibele werktijden
	{
		id: 'v10-28',
		theme: 'Praktisch',
		text: 'of de werktijden vast zijn of flexibel'
	},
	// Filter: alleen doordeweeks / ook avond-weekend
	{
		id: 'v10-29',
		theme: 'Praktisch',
		text: 'of je ook \u2019s avonds of in het weekend werkt'
	},
	// Filter: bereikbaar met OV / auto / fiets
	{
		id: 'v10-30',
		theme: 'Praktisch',
		text: 'hoe je op je werk komt'
	},
	// Filter: fulltime / parttime / uren per week
	{
		id: 'v10-31',
		theme: 'Praktisch',
		text: 'hoeveel uur je werkt'
	},
	// Filter: kantine / eigen eten / geen voorziening
	{
		id: 'v10-32',
		theme: 'Praktisch',
		text: 'of er een plek is om te eten'
	}
];
