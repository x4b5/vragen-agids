/**
 * Reflecties per stelling in "jij"-vorm, gebruikt op het conversie-scherm.
 *
 * De stellingen in questions-v10.ts staan in "ik"-vorm (bijv. "ik hulp kan
 * krijgen met formulieren ..."). Op het eindscherm spiegelen we ze terug naar
 * de gebruiker in "jij"-vorm.
 *
 * Key = vraag-id (v10-x). De waarde is het stuk ná "dat"; het scherm toont het
 * als: "Je vindt het belangrijk dat {waarde}". Ontbreekt een id, dan valt het
 * scherm terug op de oorspronkelijke "ik"-vorm stelling.
 */
export const reflectionsV10: Record<string, string> = {
	'v10-14': 'je rustig kunt beginnen, zonder ergens meteen aan vast te zitten',
	'v10-17': 'je kunt ontdekken wat je wilt en wat bij je past',
	'v10-11': 'je onder de mensen komt in plaats van veel thuis te zitten',
	'v10-6': 'je er meteen financieel op vooruitgaat als je gaat werken',
	'v10-4': 'werken geen problemen geeft met je uitkering',
	'v10-2': 'je gewoon iemand kunt vragen als je iets niet snapt',
	'v10-1': 'je hulp kunt krijgen met formulieren en brieven van de gemeente',
	'v10-3': 'iemand je helpt om een begin te maken',
	'v10-5': 'je hulp kunt krijgen als je niet rondkomt met geld',
	'v10-12': 'je overdag iets te doen hebt en weer een ritme opbouwt',
	'v10-13': 'je iets kunt doen dichtbij, in je eigen buurt',
	'v10-15': 'je eerst iets kunt proberen, zoals vrijwilligerswerk',
	'v10-16': 'je eerst met iemand kunt praten die met je meedenkt',
	'v10-7': 'er rekening wordt gehouden met je gezondheid',
	'v10-8': 'je je kinderen op tijd van school kunt halen',
	'v10-32': 'er rekening wordt gehouden met je lichamelijke beperking',
	'v10-33': 'je tijd houdt om voor iemand te zorgen',
	'v10-34': 'je naar je afspraken met instanties kunt gaan',
	'v10-9': 'je op een plek kunt komen, ook als je geen vervoer hebt',
	'v10-10': 'je weet wat er gebeurt als je ziek wordt',
	'v10-18': 'je de Nederlandse taal kunt oefenen of leren',
	'v10-19': 'je nieuwe dingen kunt leren',
	'v10-20': 'je je verder kunt ontwikkelen en kunt doorgroeien',
	'v10-22': 'iemand je helpt en begeleidt als je begint',
	'v10-23': 'je eerst kunt meelopen of een dag kunt proberen',
	'v10-24': 'je de mensen kunt ontmoeten voordat je begint',
	'v10-25': 'je niet te veel uren hoeft te werken',
	'v10-26': 'je kunt kiezen of je binnen of buiten werkt',
	'v10-27': 'het niet te druk is op de plek',
	'v10-29': 'er sportmogelijkheden worden aangeboden',
	'v10-30': 'je weet of het werk vast of tijdelijk is',
	'v10-31': 'je je werk op je eigen manier mag doen'
};
