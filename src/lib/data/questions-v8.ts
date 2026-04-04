/**
 * V8 — Alle vragen uit V1-V7, gegroepeerd per thema.
 * Identieke vragen worden 1x getoond met meerdere bronnen.
 * Gebruiker kan per vraag aangeven: "goede vraag".
 */

export interface V8Variant {
	id: string;
	sources: string[];
	text: string;
	options: string[];
}

export interface V8Group {
	id: string;
	theme: string;
	description: string;
	variants: V8Variant[];
}

export const questionGroupsV8: V8Group[] = [
	// ── 1. Binnen of buiten ─────────────────────────────────
	{
		id: 'g1',
		theme: 'Binnen of buiten werken',
		description: 'Waar werk je het liefst: binnen, buiten of allebei?',
		variants: [
			{
				id: 'g1-1',
				sources: ['V4', 'V6'],
				text: 'Waar werkt u liever?',
				options: ['Binnen', 'Buiten', 'Binnen en buiten', 'Maakt mij niet uit']
			},
			{
				id: 'g1-2',
				sources: ['V2'],
				text: 'Waar werk je het liefst?',
				options: ['Binnen', 'Buiten', 'Combinatie', 'Thuis']
			},
			{
				id: 'g1-3',
				sources: ['V3'],
				text: 'Waar wilt u het liefst kennismaken met werk?',
				options: ['Alleen binnen', 'Alleen buiten', 'Zowel binnen als buiten', 'Maakt mij niet uit']
			},
			{
				id: 'g1-4',
				sources: ['V1'],
				text: 'Ik werk liever…',
				options: ['Binnen', 'Buiten']
			}
		]
	},

	// ── 2. Rustig of druk ───────────────────────────────────
	{
		id: 'g2',
		theme: 'Rustige of drukke plek',
		description: 'Werk je liever op een stille plek of juist waar het druk is?',
		variants: [
			{
				id: 'g2-1',
				sources: ['V4', 'V6'],
				text: 'Wat past beter bij u?',
				options: ['Een rustige plek', 'Een plek waar veel gebeurt', 'Allebei is goed', 'Weet ik nog niet']
			},
			{
				id: 'g2-2',
				sources: ['V7'],
				text: 'Waar werk je het lekkerst?',
				options: ['Lekker stil', 'Tussen de mensen', 'In beweging']
			},
			{
				id: 'g2-3',
				sources: ['V2'],
				text: 'Wat past beter bij jou?',
				options: ['Rustige omgeving', 'Drukke omgeving', 'Afwisseling']
			},
			{
				id: 'g2-4',
				sources: ['V3'],
				text: 'In wat voor omgeving voelt u zich prettiger?',
				options: ['Een plek waar weinig tegelijk gebeurt', 'Een plek waar veel tegelijk gebeurt', 'Beide is goed', 'Weet ik nog niet']
			},
			{
				id: 'g2-5',
				sources: ['V1'],
				text: 'Ik werk liever op een plek waar het…',
				options: ['Rustig is', 'Druk en levendig is']
			},
			{
				id: 'g2-6',
				sources: ['V5'],
				text: 'Hoe druk is het?',
				options: ['Druk en levendig', 'Rustig en stil']
			}
		]
	},

	// ── 3. Alleen of samen werken ───────────────────────────
	{
		id: 'g3',
		theme: 'Alleen of samen werken',
		description: 'Werk je liever alleen, samen of maakt het niet uit?',
		variants: [
			{
				id: 'g3-1',
				sources: ['V4', 'V6'],
				text: 'Werkt u liever alleen of samen?',
				options: ['Liefst alleen', 'Liefst samen', 'Allebei is goed', 'Maakt mij niet uit']
			},
			{
				id: 'g3-2',
				sources: ['V3'],
				text: 'Hoe werkt u het liefst?',
				options: ['Vooral alleen', 'Vooral samen met anderen', 'Deels alleen, deels samen', 'Maakt mij niet uit']
			},
			{
				id: 'g3-3',
				sources: ['V2'],
				text: 'Hoe werk je het liefst?',
				options: ['Met mensen', 'Zelfstandig', 'Combinatie']
			},
			{
				id: 'g3-4',
				sources: ['V1'],
				text: 'Ik werk liever…',
				options: ['Zelfstandig', 'Samen met anderen']
			},
			{
				id: 'g3-5',
				sources: ['V1'],
				text: 'Ik voel mij het meest op mijn plek als…',
				options: ['Ik vooral mijn eigen taken heb', 'We het echt samen doen']
			}
		]
	},

	// ── 4. Teamgrootte en collega's ─────────────────────────
	{
		id: 'g4',
		theme: 'Teamgrootte en collega\'s',
		description: 'Met hoeveel mensen werk je het liefst? Wat voor collega\'s passen bij jou?',
		variants: [
			{
				id: 'g4-1',
				sources: ['V4', 'V6'],
				text: 'Hoeveel mensen wilt u om u heen hebben?',
				options: ['Liefst alleen', 'Met 1 of 2 mensen', 'Met 3 tot 5 mensen', 'Met meer dan 5 mensen']
			},
			{
				id: 'g4-2',
				sources: ['V3'],
				text: 'Met hoeveel collega\u2019s wilt u meestal direct samenwerken?',
				options: ['Meestal alleen', 'Met 1 tot 3 collega\u2019s', 'Met 4 tot 10 collega\u2019s', 'Met meer dan 10 collega\u2019s']
			},
			{
				id: 'g4-3',
				sources: ['V2'],
				text: 'In wat voor team werk je het liefst?',
				options: ['Klein team', 'Groot team', 'Maakt niet uit']
			},
			{
				id: 'g4-4',
				sources: ['V5'],
				text: 'Met hoeveel mensen?',
				options: ['Weinig mensen', 'Heel veel mensen']
			},
			{
				id: 'g4-5',
				sources: ['V7'],
				text: 'Met wat voor collega\'s werk je het liefst?',
				options: ['Ook buiten werk afspreken', 'Goed samenwerken, verder eigen ding', 'Liever alleen']
			}
		]
	},

	// ── 5. Handen of hoofd ──────────────────────────────────
	{
		id: 'g5',
		theme: 'Handen of hoofd',
		description: 'Doe je liever fysiek werk of denkwerk?',
		variants: [
			{
				id: 'g5-1',
				sources: ['V4', 'V6'],
				text: 'Doet u liever werk met uw handen of met uw hoofd?',
				options: ['Met mijn handen', 'Met mijn hoofd', 'Allebei', 'Maakt mij niet uit']
			},
			{
				id: 'g5-2',
				sources: ['V7'],
				text: 'Wat doe je het liefst op een werkdag?',
				options: ['Werken met mijn handen', 'Uitzoeken en regelen', 'Mensen helpen']
			},
			{
				id: 'g5-3',
				sources: ['V3'],
				text: 'Wat doet u liever?',
				options: ['Iets uitvoeren met uw handen', 'Iets uitzoeken of bedenken', 'Beide', 'Maakt mij niet uit']
			},
			{
				id: 'g5-4',
				sources: ['V2'],
				text: 'Wat past beter bij jou?',
				options: ['Werken met handen', 'Werken met hoofd', 'Combinatie']
			},
			{
				id: 'g5-5',
				sources: ['V1'],
				text: 'Ik werk liever…',
				options: ['Met mensen', 'Met spullen of machines']
			},
			{
				id: 'g5-6',
				sources: ['V1'],
				text: 'Ik ben het liefst…',
				options: ['Fysiek bezig', 'Rustig en geconcentreerd bezig']
			}
		]
	},

	// ── 6. Lichamelijke inspanning ──────────────────────────
	{
		id: 'g6',
		theme: 'Lichamelijke inspanning',
		description: 'Mag het werk lichamelijk zwaar zijn?',
		variants: [
			{
				id: 'g6-1',
				sources: ['V4', 'V6'],
				text: 'Mag werk lichamelijk zwaar zijn?',
				options: ['Liever niet', 'Een beetje', 'Ja, dat is goed', 'Maakt mij niet uit']
			},
			{
				id: 'g6-2',
				sources: ['V3'],
				text: 'Hoeveel lichamelijke inspanning mag het werk vragen?',
				options: ['Liefst weinig', 'Mag af en toe', 'Mag een belangrijk deel van het werk zijn', 'Maakt mij niet uit']
			},
			{
				id: 'g6-3',
				sources: ['V2'],
				text: 'Wat voor werk past bij jou?',
				options: ['Fysiek actief', 'Rustig werk', 'Combinatie']
			}
		]
	},

	// ── 7. Afwisseling of routine ───────────────────────────
	{
		id: 'g7',
		theme: 'Afwisseling of routine',
		description: 'Wil je elke dag hetzelfde doen of juist steeds iets anders?',
		variants: [
			{
				id: 'g7-1',
				sources: ['V4', 'V6'],
				text: 'Houdt u meer van hetzelfde werk of van afwisseling?',
				options: ['Liefst vaak hetzelfde', 'Liefst afwisseling', 'Allebei is goed', 'Maakt mij niet uit']
			},
			{
				id: 'g7-2',
				sources: ['V7'],
				text: 'Je hoort dat het werk vandaag anders gaat dan gepland. Hoe voelt dat?',
				options: ['Liever vast plan', 'Prima, geen probleem']
			},
			{
				id: 'g7-3',
				sources: ['V7'],
				text: 'Hoe wil je dat het werk geregeld is?',
				options: ['Vaste regels', 'Op mijn eigen manier']
			},
			{
				id: 'g7-4',
				sources: ['V3'],
				text: 'Hoe wilt u dat het werk meestal verloopt?',
				options: ['Zoveel mogelijk hetzelfde per dag', 'Regelmatig iets anders', 'Veel verschil per uur of per taak', 'Maakt mij niet uit']
			},
			{
				id: 'g7-5',
				sources: ['V2'],
				text: 'Hoe werk je het liefst?',
				options: ['Veel structuur', 'Veel afwisseling', 'Combinatie']
			},
			{
				id: 'g7-6',
				sources: ['V2'],
				text: 'Wat past beter bij jou?',
				options: ['Vaste taken', 'Afwisselende taken', 'Combinatie']
			},
			{
				id: 'g7-7',
				sources: ['V1'],
				text: 'In mijn werk heb ik liever…',
				options: ['Elke dag ongeveer hetzelfde', 'Regelmatig iets anders']
			}
		]
	},

	// ── 8. Instructie en zelfstandigheid ────────────────────
	{
		id: 'g8',
		theme: 'Instructie en zelfstandigheid',
		description: 'Wil je duidelijke uitleg of zoek je het liever zelf uit?',
		variants: [
			{
				id: 'g8-1',
				sources: ['V7'],
				text: 'Je krijgt een nieuwe klus. Wat wil je het liefst?',
				options: ['Stap voor stap uitleg', 'Zelf uitzoeken']
			},
			{
				id: 'g8-2',
				sources: ['V4', 'V6'],
				text: 'Hoe wilt u uitleg krijgen?',
				options: ['Eerst goed uitleg, dan beginnen', 'Kort uitleg, dan beginnen', 'Meteen proberen en dan vragen', 'Maakt mij niet uit']
			},
			{
				id: 'g8-3',
				sources: ['V3'],
				text: 'Hoe wilt u instructie krijgen?',
				options: ['Eerst precies uitleg, daarna beginnen', 'Korte uitleg, daarna beginnen', 'Meteen proberen en onderweg vragen', 'Maakt mij niet uit']
			},
			{
				id: 'g8-4',
				sources: ['V2'],
				text: 'Hoe werk je het liefst?',
				options: ['Duidelijke instructies', 'Zelf initiatief nemen', 'Combinatie']
			},
			{
				id: 'g8-5',
				sources: ['V2'],
				text: 'Wat helpt jou het meest?',
				options: ['Uitleg stap voor stap', 'Kort uitleggen en zelf doen', 'Zelf uitzoeken']
			},
			{
				id: 'g8-6',
				sources: ['V2'],
				text: 'Hoe werk je het liefst?',
				options: ['Met duidelijke doelen', 'Vrij / open werk', 'Combinatie']
			},
			{
				id: 'g8-7',
				sources: ['V1'],
				text: 'Ik vind het prettig als…',
				options: ['Duidelijk is wat ik moet doen', 'Ik zelf kan bepalen hoe ik iets aanpak']
			}
		]
	},

	// ── 9. Soort werk en interesse ──────────────────────────
	{
		id: 'g9',
		theme: 'Soort werk en interesse',
		description: 'Wat voor werk spreekt je het meest aan?',
		variants: [
			{
				id: 'g9-1',
				sources: ['V4', 'V6'],
				text: 'Wat lijkt u het leukst?',
				options: ['Mensen helpen', 'Iets maken of repareren', 'Iets regelen', 'Iets uitzoeken']
			},
			{
				id: 'g9-2',
				sources: ['V4', 'V6'],
				text: 'Waar wilt u het liefst mee bezig zijn?',
				options: ['Met mensen praten', 'Met spullen, gereedschap of machines', 'Met plannen of regelen', 'Met denken of bedenken']
			},
			{
				id: 'g9-3',
				sources: ['V3'],
				text: 'Wat spreekt u het meest aan?',
				options: ['Mensen helpen', 'Iets maken of repareren', 'Iets regelen of organiseren', 'Iets onderzoeken of uitzoeken']
			},
			{
				id: 'g9-4',
				sources: ['V3'],
				text: 'Waarmee wilt u het liefst bezig zijn?',
				options: ['Gesprekken voeren of contact hebben', 'Materialen, gereedschap of machines gebruiken', 'Plannen, regelen of bijhouden', 'Tekenen, ontwerpen of bedenken']
			},
			{
				id: 'g9-5',
				sources: ['V2'],
				text: 'Wat lijkt je leuker?',
				options: ['Mensen helpen', 'Iets maken / bouwen', 'Beide']
			},
			{
				id: 'g9-6',
				sources: ['V2'],
				text: 'Waar ligt je interesse?',
				options: ['Techniek', 'Mensen', 'Creatief', 'Combinatie']
			}
		]
	},

	// ── 10. Voldoening en werkgeluk ─────────────────────────
	{
		id: 'g10',
		theme: 'Voldoening en werkgeluk',
		description: 'Wanneer heb je het gevoel: dit was een goede dag?',
		variants: [
			{
				id: 'g10-1',
				sources: ['V7'],
				text: 'Wanneer denk je: dit was een goede werkdag?',
				options: ['Alles gedaan wat moest', 'Iets opgelost waar anderen niet uitkwamen', 'Leuk met collega\'s']
			},
			{
				id: 'g10-2',
				sources: ['V4', 'V6'],
				text: 'Waar wordt u het meest blij van?',
				options: ['Als ik iemand help', 'Als ik iets afmaak', 'Als alles goed loopt', 'Als ik iets nieuws snap']
			},
			{
				id: 'g10-3',
				sources: ['V3'],
				text: 'Waar haalt u het meeste voldoening uit?',
				options: ['Als iemand door mij geholpen is', 'Als ik iets af heb gemaakt', 'Als alles goed geregeld is', 'Als ik iets begrijp wat eerst onduidelijk was']
			},
			{
				id: 'g10-4',
				sources: ['V1'],
				text: 'Op een goede werkdag ga jij naar huis en denk je:',
				options: ['Zo, lekker doorgewerkt', 'Mooi dat ik iemand heb kunnen helpen', 'Goed geregeld vandaag', 'Weer iets nieuws geleerd']
			},
			{
				id: 'g10-5',
				sources: ['V1'],
				text: 'Wat geeft jou het meeste voldoening?',
				options: ['Iets tastbaars maken', 'Iemand vooruit helpen', 'Een probleem oplossen', 'Zien dat iets goed loopt']
			},
			{
				id: 'g10-6',
				sources: ['V2'],
				text: 'Waar krijg je energie van?',
				options: ['Mensen', 'Resultaat zien', 'Iets maken', 'Afwisseling']
			},
			{
				id: 'g10-7',
				sources: ['V5'],
				text: 'Wat geeft je een goed gevoel?',
				options: ['Dat ik iets heb gemaakt', 'Dat ik mensen heb geholpen', 'Dat ik een probleem heb opgelost', 'Dat ik niet meer naar de sportschool hoef']
			}
		]
	},

	// ── 11. Wat voor werk past bij je ───────────────────────
	{
		id: 'g11',
		theme: 'Wat voor werk past bij je',
		description: 'Wil je resultaat zien, contact hebben of nadenken?',
		variants: [
			{
				id: 'g11-1',
				sources: ['V4', 'V6'],
				text: 'Wat past het best bij u?',
				options: ['Werk waar ik direct zie wat ik heb gedaan', 'Werk met veel contact', 'Werk met overzicht', 'Werk waarbij ik moet nadenken']
			},
			{
				id: 'g11-2',
				sources: ['V3'],
				text: 'Wat lijkt u prettiger?',
				options: ['Werk waarbij u direct ziet wat het oplevert', 'Werk waarbij u vooral contact hebt', 'Werk waarbij u vooral overzicht houdt', 'Werk waarbij u vooral nadenkt']
			},
			{
				id: 'g11-3',
				sources: ['V1'],
				text: 'Wat past het meest bij jou?',
				options: ['Ik steek graag de handen uit de mouwen', 'Ik denk eerst goed na voordat ik begin', 'Ik zorg dat dingen geregeld worden', 'Ik help graag anderen']
			}
		]
	},

	// ── 12. Starten op een nieuwe plek ──────────────────────
	{
		id: 'g12',
		theme: 'Starten op een nieuwe plek',
		description: 'Hoe begin je het liefst ergens nieuw?',
		variants: [
			{
				id: 'g12-1',
				sources: ['V4', 'V6'],
				text: 'Hoe wilt u het liefst beginnen op een nieuwe plek?',
				options: ['Eerst kijken', 'Eerst iets kleins proberen', 'Meteen meedoen', 'Maakt mij niet uit']
			},
			{
				id: 'g12-2',
				sources: ['V3'],
				text: 'Hoe wilt u het liefst beginnen bij een onbekende werkplek?',
				options: ['Eerst alleen kijken', 'Eerst kort iets proberen', 'Meteen meedoen', 'Maakt mij niet uit']
			},
			{
				id: 'g12-3',
				sources: ['V2'],
				text: 'Hoe wil je starten?',
				options: ['Alleen meekijken', 'Meedoen', 'Beide']
			},
			{
				id: 'g12-4',
				sources: ['V1'],
				text: 'Als je ergens nieuw binnenloopt, dan:',
				options: ['Ik begin meteen', 'Ik kijk eerst rustig rond', 'Ik stel een paar vragen', 'Ik zoek iemand die me helpt']
			},
			{
				id: 'g12-5',
				sources: ['V2'],
				text: 'Hoe ervaar je nieuwe mensen?',
				options: ['Geen probleem', 'Beetje spannend', 'Liever niet']
			}
		]
	},

	// ── 13. Begeleiding en hulp ─────────────────────────────
	{
		id: 'g13',
		theme: 'Begeleiding en hulp',
		description: 'Hoeveel hulp wil je bij het werk?',
		variants: [
			{
				id: 'g13-1',
				sources: ['V4', 'V6'],
				text: 'Hoeveel hulp wilt u tijdens het meelopen?',
				options: ['Veel hulp', 'Af en toe hulp', 'Liefst zelf doen', 'Maakt mij niet uit']
			},
			{
				id: 'g13-2',
				sources: ['V3'],
				text: 'Hoeveel begeleiding wilt u tijdens het moment zelf?',
				options: ['Iemand blijft grotendeels bij mij', 'Iemand helpt af en toe', 'Ik red mij meestal zelf', 'Maakt mij niet uit']
			},
			{
				id: 'g13-3',
				sources: ['V2'],
				text: 'Hoeveel begeleiding wil je?',
				options: ['Veel begeleiding', 'Beetje begeleiding', 'Zelfstandig']
			},
			{
				id: 'g13-4',
				sources: ['V1'],
				text: 'Ik werk liever bij een bedrijf waar…',
				options: ['Je het zelf moet uitzoeken', 'Je hulp krijgt als dat nodig is']
			}
		]
	},

	// ── 14. Eerste indruk en wat belangrijk is ───────────────
	{
		id: 'g14',
		theme: 'Eerste indruk en wat belangrijk is',
		description: 'Wat maakt het verschil als je ergens nieuw begint?',
		variants: [
			{
				id: 'g14-1',
				sources: ['V4', 'V6'],
				text: 'Wat is voor u het belangrijkst op een nieuwe plek?',
				options: ['Dat ik vriendelijk word ontvangen', 'Dat ik snap wat ik moet doen', 'Dat het werk bij mij past', 'Dat het goed te doen is']
			},
			{
				id: 'g14-2',
				sources: ['V3'],
				text: 'Wat maakt voor u het verschil tussen wel of niet terug willen komen?',
				options: ['Hoe ik ben ontvangen', 'Of ik begrijp wat er gebeurt', 'Of het werk mij aanspreekt', 'Of het praktisch haalbaar voelt']
			},
			{
				id: 'g14-3',
				sources: ['V2'],
				text: 'Wat vind je belangrijk?',
				options: ['Goede sfeer', 'Duidelijkheid', 'Ontwikkeling', 'Maakt niet uit']
			},
			{
				id: 'g14-4',
				sources: ['V2'],
				text: 'Wat geeft een goede eerste indruk?',
				options: ['Vriendelijke mensen', 'Goede uitleg', 'Duidelijke taken']
			},
			{
				id: 'g14-5',
				sources: ['V2'],
				text: 'Wanneer voelt het goed?',
				options: ['Fijne sfeer', 'Duidelijke uitleg', 'Leuke mensen']
			},
			{
				id: 'g14-6',
				sources: ['V2'],
				text: 'Wanneer haak je af?',
				options: ['Onduidelijkheid', 'Geen klik', 'Te druk', 'Te saai']
			}
		]
	},

	// ── 15. Reizen en vervoer ───────────────────────────────
	{
		id: 'g15',
		theme: 'Reizen en vervoer',
		description: 'Hoe ver en waarmee wil je reizen naar je werk?',
		variants: [
			{
				id: 'g15-1',
				sources: ['V4', 'V6'],
				text: 'Hoe ver wilt u reizen?',
				options: ['Tot 5 kilometer', 'Tot 10 kilometer', 'Tot 25 kilometer', 'Verder dan 25 kilometer']
			},
			{
				id: 'g15-2',
				sources: ['V3'],
				text: 'Hoe ver wilt u maximaal reizen voor een eerste kennismaking?',
				options: ['Tot 5 km', 'Tot 10 km', 'Tot 25 km', 'Verder dan 25 km']
			},
			{
				id: 'g15-3',
				sources: ['V2'],
				text: 'Hoe ver wil je reizen?',
				options: ['Tot 10 km', 'Tot 25 km', 'Verder']
			},
			{
				id: 'g15-4',
				sources: ['V1'],
				text: 'Hoe ver wil je ongeveer reizen?',
				options: ['Zo dichtbij mogelijk', 'Tot 30 minuten', 'Verder mag ook', 'Maakt niet uit']
			},
			{
				id: 'g15-5',
				sources: ['V4', 'V6'],
				text: 'Hoe gaat u het liefst naar een werkplek?',
				options: ['Lopend of met de fiets', 'Met bus of trein', 'Met eigen vervoer', 'Dat verschilt']
			},
			{
				id: 'g15-6',
				sources: ['V3'],
				text: 'Hoe komt u het liefst op een werkplek?',
				options: ['Lopend of met de fiets', 'Met openbaar vervoer', 'Met eigen vervoer', 'Dat verschilt']
			},
			{
				id: 'g15-7',
				sources: ['V2'],
				text: 'Hoe reis je?',
				options: ['Eigen vervoer', 'Openbaar vervoer', 'Geen vervoer']
			},
			{
				id: 'g15-8',
				sources: ['V1'],
				text: 'Laat aanbod zien dat past bij mijn manier van reizen',
				options: ['Dichtbij huis', 'Goed bereikbaar met OV', 'Met de fiets', 'Met de auto', 'Maakt mij niet uit']
			}
		]
	},

	// ── 16. Werktijden en beschikbaarheid ────────────────────
	{
		id: 'g16',
		theme: 'Werktijden en beschikbaarheid',
		description: 'Wanneer en hoeveel wil je werken?',
		variants: [
			{
				id: 'g16-1',
				sources: ['V7'],
				text: 'Wanneer wil je het liefst werken?',
				options: ['Vaste tijden', 'Zelf kiezen', 'Avond/weekend voor extra geld']
			},
			{
				id: 'g16-2',
				sources: ['V2'],
				text: 'Wanneer werk je het liefst?',
				options: ['Overdag', 'Avond', 'Maakt niet uit']
			},
			{
				id: 'g16-3',
				sources: ['V1'],
				text: 'Wanneer werk je liever?',
				options: ['Overdag', '\'s Avonds', 'Wisselende tijden', 'Maakt niet uit']
			},
			{
				id: 'g16-4',
				sources: ['V1'],
				text: 'Welke werktijden passen het beste bij jouw situatie thuis?',
				options: ['Werken onder schooltijden', 'Duidelijke vaste tijden', 'Flexibele uren', 'Dat verschilt per week', 'Niet van toepassing']
			},
			{
				id: 'g16-5',
				sources: ['V2'],
				text: 'Wanneer ben je beschikbaar?',
				options: ['Doordeweeks', 'Weekend', 'Beide']
			},
			{
				id: 'g16-6',
				sources: ['V1'],
				text: 'Hoeveel uur past bij jouw leven?',
				options: ['Een paar uur per week', 'Parttime', 'Fulltime', 'Weet ik nog niet']
			}
		]
	},

	// ── 17. Duur kennismaking en aandachtspunten ────────────
	{
		id: 'g17',
		theme: 'Duur kennismaking en aandachtspunten',
		description: 'Hoe lang mag een kennismaking duren en waar moeten we op letten?',
		variants: [
			{
				id: 'g17-1',
				sources: ['V4', 'V6'],
				text: 'Hoe lang mag een kennismaking duren?',
				options: ['Tot 1 uur', '1 tot 2 uur', 'Een halve dag', 'Een hele dag']
			},
			{
				id: 'g17-2',
				sources: ['V3'],
				text: 'Hoe lang mag een eerste kennismaking voor u duren?',
				options: ['Tot 1 uur', '1 tot 2 uur', 'Een halve dag', 'Een hele dag']
			},
			{
				id: 'g17-3',
				sources: ['V2'],
				text: 'Hoe lang wil je meelopen?',
				options: ['2 uur', 'Halve dag', 'Hele dag']
			},
			{
				id: 'g17-4',
				sources: ['V4', 'V6'],
				text: 'Waar moet rekening mee worden gehouden?',
				options: ['Reistijd', 'Tijdstip', 'Lichamelijk zwaar werk', 'Nergens speciaal mee']
			},
			{
				id: 'g17-5',
				sources: ['V2'],
				text: 'Waar moeten we rekening mee houden?',
				options: ['Fysiek', 'Tijd', 'Geen bijzonderheden']
			}
		]
	},

	// ── 18. Leidinggevende en werkcultuur ────────────────────
	{
		id: 'g18',
		theme: 'Leidinggevende en werkcultuur',
		description: 'Wat voor baas en werksfeer passen bij jou?',
		variants: [
			{
				id: 'g18-1',
				sources: ['V7'],
				text: 'Hoe wil je weten wie er de leiding heeft?',
				options: ['Duidelijke baas', 'Samen beslissen']
			},
			{
				id: 'g18-2',
				sources: ['V7'],
				text: 'Wat voor baas past het best bij jou?',
				options: ['Kijkt regelmatig mee', 'Laat me met rust', 'Helpt me groeien']
			},
			{
				id: 'g18-3',
				sources: ['V1'],
				text: 'Ik werk het liefst op een plek waar mijn leidinggevende…',
				options: ['Duidelijk zegt wat moet', 'Luistert en meedenkt']
			},
			{
				id: 'g18-4',
				sources: ['V1'],
				text: 'Ik voel mij het prettigst in een team waar…',
				options: ['Fouten maken niet erg is', 'Alles meteen goed moet gaan']
			},
			{
				id: 'g18-5',
				sources: ['V1'],
				text: 'Ik vind het belangrijk dat afspraken en regels eerlijk worden toegepast',
				options: ['Niet zo belangrijk', 'Heel belangrijk']
			},
			{
				id: 'g18-6',
				sources: ['V1'],
				text: 'Ik vind het belangrijk dat ik invloed heb op hoe ik mijn werk doe',
				options: ['Niet zo belangrijk', 'Heel belangrijk']
			}
		]
	},

	// ── 19. Motivatie, doorgroeien en werkbeleving ──────────
	{
		id: 'g19',
		theme: 'Motivatie en doorgroeien',
		description: 'Waarom werk je en wat wil je bereiken?',
		variants: [
			{
				id: 'g19-1',
				sources: ['V7'],
				text: 'Waarom ga jij het liefst naar je werk?',
				options: ['Voor het geld', 'Iets nuttigs doen', 'Mensen om me heen']
			},
			{
				id: 'g19-2',
				sources: ['V7'],
				text: 'Wat wil je over een paar jaar?',
				options: ['Hogerop komen', 'Goed worden in mijn vak', 'Af en toe bijleren']
			},
			{
				id: 'g19-3',
				sources: ['V1'],
				text: 'Ik werk liever op een plek waar…',
				options: ['Ik gewoon mijn werk doe', 'Ik kansen krijg om stappen te maken']
			},
			{
				id: 'g19-4',
				sources: ['V1'],
				text: 'Ik vind het belangrijk dat ik in mijn werk kan blijven leren en groeien',
				options: ['Niet zo belangrijk', 'Heel belangrijk']
			},
			{
				id: 'g19-5',
				sources: ['V1'],
				text: 'Ik vind het belangrijk dat mijn werk ergens aan bijdraagt',
				options: ['Niet zo belangrijk', 'Heel belangrijk']
			},
			{
				id: 'g19-6',
				sources: ['V1'],
				text: 'Wat vind jij belangrijk in werk? (maximaal 2)',
				options: ['Goede sfeer', 'Zekerheid', 'Afwisseling', 'Goed salaris', 'Dicht bij huis', 'Flexibele tijden', 'Kunnen groeien', 'Iets betekenen']
			}
		]
	},

	// ── 20. Klantcontact, tempo en werkkleding ──────────────
	{
		id: 'g20',
		theme: 'Klantcontact, tempo en werkkleding',
		description: 'Hoe druk, hoe veel contact en wat trek je aan?',
		variants: [
			{
				id: 'g20-1',
				sources: ['V7'],
				text: 'Hoe vind je het om met klanten of bezoekers te praten?',
				options: ['Leuk, geeft energie', 'Af en toe prima', 'Liever op de achtergrond']
			},
			{
				id: 'g20-2',
				sources: ['V7'],
				text: 'Hoe druk mag je werkdag zijn?',
				options: ['Lekker druk', 'Rustig en goed', 'Afwisseling']
			},
			{
				id: 'g20-3',
				sources: ['V1'],
				text: 'Ik werk het liefst op een plek waar…',
				options: ['Het tempo hoog ligt', 'Het tempo goed vol te houden is']
			},
			{
				id: 'g20-4',
				sources: ['V7'],
				text: 'Je werkgever geeft je werkkleding. Wat vind je daarvan?',
				options: ['Fijn, makkelijk', 'Eigen kleren']
			},
			{
				id: 'g20-5',
				sources: ['V5'],
				text: 'Wat trek je aan?',
				options: ['Gewone kleren', 'Nette kleren']
			}
		]
	},

	// ── 21. Fouten, kritiek en sfeer ────────────────────────
	{
		id: 'g21',
		theme: 'Fouten, kritiek en sfeer',
		description: 'Hoe ga je om met fouten, kritiek en gedoe op het werk?',
		variants: [
			{
				id: 'g21-1',
				sources: ['V7'],
				text: 'Je maakt een fout op het werk. Wat doe je?',
				options: ['Meteen melden', 'Zelf oplossen', 'Collega vragen']
			},
			{
				id: 'g21-2',
				sources: ['V7'],
				text: 'Je baas zegt dat iets niet goed ging. Hoe hoor je dat het liefst?',
				options: ['Gewoon direct zeggen', 'Rustig apart bespreken']
			},
			{
				id: 'g21-3',
				sources: ['V7'],
				text: 'Er is gedoe op het werk. Wat doe jij?',
				options: ['Gewoon doorwerken', 'Erover praten', 'Ergens anders kijken']
			},
			{
				id: 'g21-4',
				sources: ['V1'],
				text: 'Als iets niet lukt, dan:',
				options: ['Ik blijf proberen', 'Ik vraag hulp', 'Ik zoek een andere manier', 'Ik laat het even liggen']
			},
			{
				id: 'g21-5',
				sources: ['V7'],
				text: 'Je werk is af, maar je mag nog niet naar huis. Wat doe je?',
				options: ['Baas vragen', 'Zelf rondkijken', 'Rustig aan']
			},
			{
				id: 'g21-6',
				sources: ['V7'],
				text: 'Maakt het je uit bij wat voor bedrijf je werkt?',
				options: ['Ja, bekend bedrijf', 'Nee, als het maar leuk is']
			}
		]
	},

	// ── 22. Ervaring, vaardigheden en open staan ────────────
	{
		id: 'g22',
		theme: 'Ervaring en open staan',
		description: 'Hoeveel ervaring heb je en sta je open voor nieuwe dingen?',
		variants: [
			{
				id: 'g22-1',
				sources: ['V1'],
				text: 'Heb je werkervaring?',
				options: ['Ik heb al langere tijd gewerkt', 'Wat ervaring (bijbaan of stage)', 'Nog niet veel ervaring', 'Nog niet gewerkt']
			},
			{
				id: 'g22-2',
				sources: ['V1'],
				text: 'Wat kun jij goed?',
				options: ['Makkelijk met mensen omgaan', 'Netjes en precies werken', 'Doorpakken als het nodig is', 'Overzicht houden', 'Problemen oplossen']
			},
			{
				id: 'g22-3',
				sources: ['V1'],
				text: 'Sta je open om iets nieuws te leren?',
				options: ['Ja, graag', 'Misschien', 'Alleen als het nodig is', 'Liever niet']
			},
			{
				id: 'g22-4',
				sources: ['V2'],
				text: 'Sta je open voor nieuwe dingen?',
				options: ['Ja graag', 'Soms', 'Liever niet']
			},
			{
				id: 'g22-5',
				sources: ['V2'],
				text: 'Heb je ervaring in dit soort werk?',
				options: ['Ja', 'Een beetje', 'Nee']
			},
			{
				id: 'g22-6',
				sources: ['V1'],
				text: 'Ik kies liever voor…',
				options: ['Weten waar ik aan toe ben', 'Nieuwe dingen uitproberen']
			},
			{
				id: 'g22-7',
				sources: ['V2'],
				text: 'Vind je problemen oplossen leuk?',
				options: ['Ja', 'Soms', 'Nee']
			},
			{
				id: 'g22-8',
				sources: ['V2'],
				text: 'Vind je plannen en organiseren leuk?',
				options: ['Ja', 'Soms', 'Nee']
			}
		]
	},

	// ── 23. Richting, doel en drempels ──────────────────────
	{
		id: 'g23',
		theme: 'Richting, doel en drempels',
		description: 'Wat zoek je en wat heb je nodig om de eerste stap te zetten?',
		variants: [
			{
				id: 'g23-1',
				sources: ['V4', 'V6'],
				text: 'Wat wilt u nu het liefst?',
				options: ['Alleen rondkijken', 'Een paar soorten werk vergelijken', 'Ontdekken wat bij mij past', 'Een plek vinden om verder te gaan']
			},
			{
				id: 'g23-2',
				sources: ['V3'],
				text: 'Wat wilt u nu het liefst uit dit platform halen?',
				options: ['Alleen ori\u00EBnteren', 'Een paar richtingen vergelijken', 'Ontdekken wat bij mij past', 'Een plek vinden om echt verder mee te gaan']
			},
			{
				id: 'g23-3',
				sources: ['V1'],
				text: 'Hoe duidelijk is voor jou wat je zoekt?',
				options: ['Ik weet precies wat ik wil', 'Ik heb wel een idee', 'Ik wil vooral ontdekken']
			},
			{
				id: 'g23-4',
				sources: ['V1'],
				text: 'Waar ben je nieuwsgierig naar?',
				options: ['Werk in de regio', 'Iets nieuws proberen', 'Mensen of bedrijven leren kennen', 'Gewoon rondkijken']
			},
			{
				id: 'g23-5',
				sources: ['V1'],
				text: 'Wat zou helpen om iets nieuws te proberen?',
				options: ['Eerst meekijken zonder verplichtingen', 'Samen met iemand gaan', 'Duidelijke uitleg vooraf', 'Hulp bij vervoer', 'Gewoon beginnen is genoeg']
			},
			{
				id: 'g23-6',
				sources: ['V2'],
				text: 'Wat wil je liever vermijden?',
				options: ['Fysiek zwaar werk', 'Veel contact met mensen', 'Eentonig werk', 'Geen voorkeur']
			}
		]
	},

	// ── 24. Thuissituatie, taal en sectoren ──────────────────
	{
		id: 'g24',
		theme: 'Thuissituatie, taal en sectoren',
		description: 'Persoonlijke omstandigheden en voorkeuren.',
		variants: [
			{
				id: 'g24-1',
				sources: ['V1'],
				text: 'Laat aanbod zien dat ik goed kan combineren met…',
				options: ['Schooltijden van mijn kinderen', 'Zorg voor iemand', 'Mijn studie', 'Wisselende afspraken', 'Dat speelt voor mij niet']
			},
			{
				id: 'g24-2',
				sources: ['V1'],
				text: 'Welke taal spreek jij goed genoeg om in te werken?',
				options: ['Nederlands', 'Engels', 'Arabisch', 'Pools', 'Duits', 'Turks', 'Anders']
			},
			{
				id: 'g24-3',
				sources: ['V1'],
				text: 'Over welke sectoren wil jij liever g\u00E9\u00E9n informatie zien?',
				options: ['Bouw', 'Zorg', 'Horeca', 'Transport & logistiek', 'Techniek & industrie', 'Detailhandel & winkels', 'Landbouw & groen', 'Schoonmaak & facilitair', 'ICT & administratie', 'Onderwijs & kinderopvang']
			},
			{
				id: 'g24-4',
				sources: ['V2'],
				text: 'Waar ben je benieuwd naar?',
				options: ['(open vraag)']
			},
			{
				id: 'g24-5',
				sources: ['V2'],
				text: 'Wat zoek je?',
				options: ['(open vraag)']
			}
		]
	}
];
