export interface V10Question {
	id: string;
	text: string;
	theme: string;
	examples?: string[];
}

export const themesV10 = [
	'Overzicht en hulp',
	'Geld en zekerheid',
	'Gezondheid en situatie',
	'Meedoen',
	'Jouw volgende stap',
	'Leren en ontwikkelen',
	'Werk'
] as const;

export type ThemeV10 = (typeof themesV10)[number];

// Elke vraag wordt in de UI getoond als: "Ik vind het belangrijk dat... {text}"
// Daarom begint elke text met het onderwerp (ik / het werk / iemand), niet met "dat".
// Volgorde: eerst uitnodigende haak-vragen (rust, ontdekken, herkenning),
// daarna hulp & geld, meedoen, gezondheid, leren en als laatste werk.
export const questionsV10: V10Question[] = [
	// — Vaste openingsvraag: financieel vooruitgaan
	{
		id: 'v10-6',
		theme: 'Geld en zekerheid',
		text: 'ik er meteen financieel op vooruitga als ik ga werken'
	},

	// — Opening: spanning wegnemen + nieuwsgierig maken
	{
		id: 'v10-14',
		theme: 'Jouw volgende stap',
		text: 'ik rustig kan beginnen, zonder ergens meteen aan vast te zitten'
	},
	{
		id: 'v10-17',
		theme: 'Jouw volgende stap',
		text: 'ik kan ontdekken wat ik wil en wat bij me past'
	},
	{
		id: 'v10-11',
		theme: 'Meedoen',
		text: 'ik onder de mensen kom in plaats van veel thuis te zitten'
	},
	// — Hulp en zekerheid
	{
		id: 'v10-4',
		theme: 'Geld en zekerheid',
		text: 'werken geen problemen geeft met mijn uitkering'
	},
	{
		id: 'v10-2',
		theme: 'Overzicht en hulp',
		text: 'ik gewoon iemand kan vragen als ik iets niet snap'
	},
	{
		id: 'v10-1',
		theme: 'Overzicht en hulp',
		text: 'ik hulp kan krijgen met formulieren en brieven van de gemeente'
	},
	{
		id: 'v10-3',
		theme: 'Overzicht en hulp',
		text: 'iemand mij helpt om een begin te maken'
	},
	{
		id: 'v10-5',
		theme: 'Geld en zekerheid',
		text: 'ik hulp kan krijgen als ik niet rondkom met geld'
	},

	// — Meedoen en kleine stappen
	{
		id: 'v10-12',
		theme: 'Meedoen',
		text: 'ik overdag iets te doen heb en weer een ritme opbouw'
	},
	{
		id: 'v10-13',
		theme: 'Meedoen',
		text: 'ik iets kan doen dichtbij, in mijn eigen buurt'
	},
	{
		id: 'v10-15',
		theme: 'Jouw volgende stap',
		text: 'ik eerst iets kan proberen, zoals vrijwilligerswerk'
	},
	{
		id: 'v10-16',
		theme: 'Jouw volgende stap',
		text: 'ik eerst met iemand kan praten die met me meedenkt'
	},

	// — Gezondheid en situatie
	{
		id: 'v10-7',
		theme: 'Gezondheid en situatie',
		text: 'er rekening wordt gehouden met mijn gezondheid'
	},
	{
		id: 'v10-8',
		theme: 'Gezondheid en situatie',
		text: 'ik mijn kinderen op tijd van school kan halen'
	},
	{
		id: 'v10-32',
		theme: 'Gezondheid en situatie',
		text: 'er rekening wordt gehouden met mijn lichamelijke beperking'
	},
	{
		id: 'v10-33',
		theme: 'Gezondheid en situatie',
		text: 'ik tijd houd om voor iemand te zorgen'
	},
	{
		id: 'v10-34',
		theme: 'Gezondheid en situatie',
		text: 'ik naar mijn afspraken met instanties kan gaan'
	},
	{
		id: 'v10-9',
		theme: 'Gezondheid en situatie',
		text: 'ik op een plek kan komen, ook als ik geen vervoer heb'
	},
	{
		id: 'v10-10',
		theme: 'Gezondheid en situatie',
		text: 'ik weet wat er gebeurt als ik ziek word'
	},

	// — Leren en ontwikkelen
	{
		id: 'v10-18',
		theme: 'Leren en ontwikkelen',
		text: 'ik de Nederlandse taal kan oefenen of leren'
	},
	{
		id: 'v10-19',
		theme: 'Leren en ontwikkelen',
		text: 'ik nieuwe dingen kan leren'
	},
	{
		id: 'v10-20',
		theme: 'Leren en ontwikkelen',
		text: 'ik me verder kan ontwikkelen en kan doorgroeien'
	},

	// — Werk
	{
		id: 'v10-22',
		theme: 'Werk',
		text: 'iemand mij helpt en begeleidt als ik begin'
	},
	{
		id: 'v10-23',
		theme: 'Werk',
		text: 'ik eerst kan meelopen of een dag kan proberen'
	},
	{
		id: 'v10-24',
		theme: 'Werk',
		text: 'ik de mensen kan ontmoeten voordat ik begin'
	},
	{
		id: 'v10-25',
		theme: 'Werk',
		text: 'ik niet te veel uren hoef te werken'
	},
	{
		id: 'v10-26',
		theme: 'Werk',
		text: 'ik kan kiezen of ik binnen of buiten werk'
	},
	{
		id: 'v10-27',
		theme: 'Werk',
		text: 'het niet te druk is op de plek'
	},
	{
		id: 'v10-29',
		theme: 'Werk',
		text: 'er sportmogelijkheden worden aangeboden'
	},
	{
		id: 'v10-30',
		theme: 'Werk',
		text: 'ik weet of het werk vast of tijdelijk is'
	},
	{
		id: 'v10-31',
		theme: 'Werk',
		text: 'ik mijn werk op mijn eigen manier mag doen'
	}
];
