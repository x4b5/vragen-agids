export interface V7Option {
	value: string;
	label: string;
}

export interface V7Question {
	id: string;
	text: string;
	options: V7Option[];
}

export const questionsV7: V7Question[] = [
	{
		id: 'v7-1',
		text: 'Je krijgt een nieuwe klus. Wat wil je het liefst?',
		options: [
			{ value: 'Iemand legt stap voor stap uit wat ik moet doen', label: 'Stap voor stap uitleg' },
			{ value: 'Ik hoor het doel en zoek zelf uit hoe', label: 'Zelf uitzoeken' }
		]
	},
	{
		id: 'v7-2',
		text: 'Waar werk je het lekkerst?',
		options: [
			{ value: 'Op een stille plek waar ik me kan focussen', label: 'Lekker stil' },
			{ value: 'Op een plek met mensen en geluid om me heen', label: 'Tussen de mensen' },
			{ value: 'Op een plek waar ik kan rondlopen en bewegen', label: 'In beweging' }
		]
	},
	{
		id: 'v7-3',
		text: 'Je werk is af, maar je mag nog niet naar huis. Wat doe je?',
		options: [
			{ value: 'Ik vraag mijn baas wat ik nog kan doen', label: 'Baas vragen' },
			{ value: 'Ik kijk zelf of ik ergens kan helpen', label: 'Zelf rondkijken' },
			{ value: 'Ik neem het rustig aan', label: 'Rustig aan' }
		]
	},
	{
		id: 'v7-4',
		text: 'Hoe wil je weten wie er de leiding heeft?',
		options: [
			{ value: 'Ik wil duidelijk weten wie de baas is', label: 'Duidelijke baas' },
			{ value: 'Ik vind het fijn als iedereen meebeslist', label: 'Samen beslissen' }
		]
	},
	{
		id: 'v7-5',
		text: 'Wanneer denk je: dit was een goede werkdag?',
		options: [
			{ value: 'Als ik alles heb gedaan wat moest', label: 'Alles gedaan' },
			{ value: 'Als ik iets heb opgelost waar anderen niet uitkwamen', label: 'Iets opgelost' },
			{ value: 'Als ik het leuk had met mijn collega\'s', label: 'Leuk met collega\'s' }
		]
	},
	{
		id: 'v7-6',
		text: 'Je hoort dat het werk vandaag anders gaat dan gepland. Hoe voelt dat?',
		options: [
			{ value: 'Niet fijn, ik wil het liefst weten wat ik kan verwachten', label: 'Liever vast plan' },
			{ value: 'Geen probleem, ik pas me makkelijk aan', label: 'Prima, geen probleem' }
		]
	},
	{
		id: 'v7-7',
		text: 'Waarom ga jij het liefst naar je werk?',
		options: [
			{ value: 'Voor het geld op mijn rekening', label: 'Voor het geld' },
			{ value: 'Omdat ik iets nuttigs wil doen voor anderen', label: 'Iets nuttigs doen' },
			{ value: 'Omdat ik mensen om me heen wil hebben', label: 'Mensen om me heen' }
		]
	},
	{
		id: 'v7-8',
		text: 'Wat voor baas past het best bij jou?',
		options: [
			{ value: 'Een baas die regelmatig meekijkt of het goed gaat', label: 'Kijkt regelmatig mee' },
			{ value: 'Een baas die me met rust laat als het goed gaat', label: 'Laat me met rust' },
			{ value: 'Een baas die me helpt om beter te worden', label: 'Helpt me groeien' }
		]
	},
	{
		id: 'v7-9',
		text: 'Met wat voor collega\'s werk je het liefst?',
		options: [
			{ value: 'Collega\'s waarmee ik ook na het werk afspreken', label: 'Ook buiten werk' },
			{ value: 'Collega\'s die goed samenwerken maar verder hun eigen ding doen', label: 'Goed samenwerken' },
			{ value: 'Ik werk het liefst alleen', label: 'Liever alleen' }
		]
	},
	{
		id: 'v7-10',
		text: 'Wat wil je over een paar jaar?',
		options: [
			{ value: 'Een hogere functie met meer te zeggen', label: 'Hogerop komen' },
			{ value: 'Heel goed zijn in wat ik nu doe', label: 'Goed worden in mijn vak' },
			{ value: 'Af en toe iets nieuws leren, maar geen hogere functie', label: 'Af en toe bijleren' }
		]
	},
	{
		id: 'v7-11',
		text: 'Hoe wil je dat het werk geregeld is?',
		options: [
			{ value: 'Duidelijke regels waar iedereen zich aan houdt', label: 'Vaste regels' },
			{ value: 'Ruimte om het op mijn eigen manier te doen', label: 'Op mijn eigen manier' }
		]
	},
	{
		id: 'v7-12',
		text: 'Je maakt een fout op het werk. Wat doe je?',
		options: [
			{ value: 'Ik ga meteen naar mijn baas', label: 'Meteen melden' },
			{ value: 'Ik probeer het eerst zelf te fixen', label: 'Zelf oplossen' },
			{ value: 'Ik vraag een collega hoe die het zou doen', label: 'Collega vragen' }
		]
	},
	{
		id: 'v7-13',
		text: 'Hoe vind je het om met klanten of bezoekers te praten?',
		options: [
			{ value: 'Leuk, daar krijg ik energie van', label: 'Leuk, geeft energie' },
			{ value: 'Af en toe is prima', label: 'Af en toe prima' },
			{ value: 'Liever niet, ik werk liever op de achtergrond', label: 'Liever op de achtergrond' }
		]
	},
	{
		id: 'v7-14',
		text: 'Hoe druk mag je werkdag zijn?',
		options: [
			{ value: 'De hele dag door bezig op een hoog tempo', label: 'Lekker druk' },
			{ value: 'Rustig aan, met de tijd om het goed te doen', label: 'Rustig en goed' },
			{ value: 'Soms druk, soms rustig — dat wisselt', label: 'Afwisseling' }
		]
	},
	{
		id: 'v7-15',
		text: 'Je werkgever geeft je werkkleding. Wat vind je daarvan?',
		options: [
			{ value: 'Fijn, dan hoef ik er niet over na te denken', label: 'Fijn, makkelijk' },
			{ value: 'Liever mijn eigen kleren aan', label: 'Eigen kleren' }
		]
	},
	{
		id: 'v7-16',
		text: 'Maakt het je uit bij wat voor bedrijf je werkt?',
		options: [
			{ value: 'Ja, ik werk graag bij een bekend bedrijf', label: 'Ja, bekend bedrijf' },
			{ value: 'Nee, als het werk en de sfeer maar goed zijn', label: 'Nee, als het maar leuk is' }
		]
	},
	{
		id: 'v7-17',
		text: 'Je baas zegt dat iets niet goed ging. Hoe hoor je dat het liefst?',
		options: [
			{ value: 'Gewoon direct zeggen, dan weet ik het meteen', label: 'Gewoon direct zeggen' },
			{ value: 'Even apart nemen en rustig bespreken', label: 'Rustig apart bespreken' }
		]
	},
	{
		id: 'v7-18',
		text: 'Wanneer wil je het liefst werken?',
		options: [
			{ value: 'Vaste tijden, elke dag hetzelfde', label: 'Vaste tijden' },
			{ value: 'Ik wil zelf kunnen kiezen wanneer ik werk', label: 'Zelf kiezen' },
			{ value: 'Ook \'s avonds of in het weekend, voor extra geld', label: 'Avond/weekend voor extra geld' }
		]
	},
	{
		id: 'v7-19',
		text: 'Wat doe je het liefst op een werkdag?',
		options: [
			{ value: 'Met mijn handen bezig zijn, fysiek werk', label: 'Werken met mijn handen' },
			{ value: 'Dingen uitzoeken, opschrijven of regelen', label: 'Uitzoeken en regelen' },
			{ value: 'Mensen helpen of voor ze zorgen', label: 'Mensen helpen' }
		]
	},
	{
		id: 'v7-20',
		text: 'Er is gedoe op het werk. Wat doe jij?',
		options: [
			{ value: 'Ik bemoei me er niet mee en doe gewoon mijn ding', label: 'Gewoon doorwerken' },
			{ value: 'Ik probeer erover te praten zodat het beter wordt', label: 'Erover praten' },
			{ value: 'Als het te lang duurt ga ik ergens anders kijken', label: 'Ergens anders kijken' }
		]
	}
];
