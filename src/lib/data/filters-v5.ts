export interface FilterV5 {
	id: string;
	type: 'toggle' | 'slider' | 'quadrant';
	label: string;
	description: string;
	options: [string, string];
	/** For quadrant type: 4 labeled zones */
	quadrants?: [string, string, string, string];
}

export const filtersV5: FilterV5[] = [
	{
		id: 'geluid',
		type: 'toggle',
		label: 'Hoe druk is het?',
		description: 'Wil je dat het druk is op je werk, of juist stil?',
		options: ['Druk en levendig', 'Rustig en stil']
	},
	{
		id: 'kleding',
		type: 'toggle',
		label: 'Wat trek je aan?',
		description: 'Wat voor kleren draag je op je werk?',
		options: ['Gewone kleren', 'Nette kleren']
	},
	{
		id: 'teamgrootte',
		type: 'slider',
		label: 'Met hoeveel mensen?',
		description: 'Werk je liever met weinig of veel mensen?',
		options: ['Weinig mensen', 'Heel veel mensen']
	},
	{
		id: 'zingeving',
		type: 'quadrant',
		label: 'Wat geeft je een goed gevoel?',
		description: 'Wat wil je voelen na een dag werken?',
		options: ['Hoofd', 'Handen'],
		quadrants: [
			'Dat ik iets heb gemaakt',
			'Dat ik mensen heb geholpen',
			'Dat ik een probleem heb opgelost',
			'Dat ik niet meer naar de sportschool hoef'
		]
	}
];
