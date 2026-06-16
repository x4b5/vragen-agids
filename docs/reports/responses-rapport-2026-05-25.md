# Responses-rapport — Vragen AGids v10

**Gegenereerd op:** 2026-05-25
**Databron:** Supabase tabel `responses_v10`
**Aantal responses:** 12
**Periode:** 2026-05-20 09:20 t/m 2026-05-21 01:31 (UTC)
**Versie vragenlijst:** v10 (36 vragen, 1–5 belangrijkheidsschaal)

---

## Belangrijke kanttekeningen vooraf

- **Alleen afgeronde sessies.** De data wordt pas naar Supabase gestuurd zodra een respondent de hele vragenlijst doorloopt. Drop-off (mensen die halverwege stoppen) zit *niet* in deze tabel — daarvoor moet je PostHog raadplegen.
- **Kleine steekproef (N = 12).** De cijfers hieronder zijn indicatief, niet statistisch significant.
- **Alle responses zijn van 20–21 mei 2026** — waarschijnlijk een testronde / eerste lichting deelnemers.

---

## 1. Demografische verdeling

### Leeftijdscategorie

| Leeftijd        | Aantal | Aandeel |
|-----------------|--------|---------|
| Jonger dan 25   | 4      | 33%     |
| 25 tot 35       | 5      | 42%     |
| 35 tot 45       | 1      | 8%      |
| 55 of ouder     | 2      | 17%     |
| **Totaal**      | **12** | 100%    |

> Geen respondenten in de categorie **45 tot 55**.

### Situatie

| Situatie                                              | Aantal | Aandeel |
|-------------------------------------------------------|--------|---------|
| Ik werk nu niet en wil mij oriënteren                 | 8      | 67%     |
| Ik werk en wil misschien eens iets (heel) anders      | 2      | 17%     |
| Ik begeleid mensen (coach, docent, begeleider)        | 2      | 17%     |
| **Totaal**                                            | **12** | 100%    |

### Raad van Advies

| Raad van Advies | Aantal |
|-----------------|--------|
| Ja              | 1      |
| Nee             | 11     |

---

## 2. Sessieduur

| Statistiek | Waarde            |
|------------|-------------------|
| Gemiddeld  | 4 min 24 s        |
| Mediaan    | 3 min 51 s        |
| Minimum    | 1 min 45 s        |
| Maximum    | 12 min 49 s       |

> De uitschieter van 12 min 49 s wordt veroorzaakt door één vraag (v10-35 — "wat er gebeurt als ik ziek word") waarop de respondent 7 min 42 s bleef hangen — vermoedelijk afgeleid geraakt of pauze genomen.

---

## 3. Belangrijkste bevindingen

### Top 6 — meest belangrijke vragen (hoogste gemiddelde)

| Rank | ID      | Vraag                                                             | Gem. | Thema                |
|------|---------|-------------------------------------------------------------------|------|----------------------|
| 1    | v10-13  | wat voor soort werk het is                                        | 4,33 | Inhoud van het werk  |
| 2    | v10-7   | of er gevaarlijke stoffen, machines of situaties zijn             | 4,25 | Werkomgeving         |
| 3    | v10-20  | of ik nieuwe dingen kan leren                                     | 4,17 | Leren en beginnen    |
| 4    | v10-27  | of het een vaste baan is of tijdelijk                             | 4,08 | Motivatie en groei   |
| 5    | v10-23  | of er mogelijkheden zijn om door te groeien                       | 4,00 | Motivatie en groei   |
| 5    | v10-34  | hoe de sfeer is op het werk                                       | 4,00 | Samenwerken en sfeer |

### Bodem 6 — minst belangrijke vragen (laagste gemiddelde)

| Rank | ID      | Vraag                                                             | Gem. | Thema                |
|------|---------|-------------------------------------------------------------------|------|----------------------|
| 36   | v10-15  | of ik iemand mee mag nemen naar de eerste kennismaking            | 1,50 | Samenwerken en sfeer |
| 35   | v10-22  | hoeveel ik er financieel op vooruit ga                            | 2,42 | Motivatie en groei   |
| 34   | v10-24  | hoe de pauzes geregeld zijn                                       | 2,67 | Praktisch            |
| 33   | v10-4   | hoe druk het is op een werkdag                                    | 2,75 | Werkomgeving         |
| 32   | v10-16  | of ik elke dag hetzelfde doe of steeds iets anders                | 2,83 | Manier van werken    |
| 31   | v10-17  | of er plek is om mijn fiets of auto neer te zetten                | 2,92 | Praktisch            |

> **Opvallend:** vraag v10-15 ("iemand meenemen naar kennismaking") scoort extreem laag — 9 van de 12 respondenten gaven een 1. Overweeg of deze vraag bijgesteld of verwijderd moet worden.

> **Opvallend:** vraag v10-22 ("financieel vooruit") scoort laag terwijl v10-25 ("hoeveel geld ik ga verdienen") juist hoog scoort (3,92). De respondenten lijken absolute verdiensten belangrijker te vinden dan het verschil met hun huidige situatie.

---

## 4. Volledig overzicht per vraag

Gerangschikt op gemiddelde belangrijkheid (hoog → laag). Verdeling toont per score (1–5) het aantal respondenten.

| ID     | Vraag                                                                          | Gem. | 1 | 2 | 3 | 4 | 5 |
|--------|--------------------------------------------------------------------------------|------|---|---|---|---|---|
| v10-13 | wat voor soort werk het is                                                     | 4,33 | 0 | 0 | 3 | 3 | 6 |
| v10-7  | of er gevaarlijke stoffen, machines of situaties zijn                          | 4,25 | 0 | 1 | 2 | 2 | 7 |
| v10-20 | of ik nieuwe dingen kan leren                                                  | 4,17 | 0 | 0 | 4 | 2 | 6 |
| v10-27 | of het een vaste baan is of tijdelijk                                          | 4,08 | 0 | 0 | 4 | 3 | 5 |
| v10-23 | of er mogelijkheden zijn om door te groeien                                    | 4,00 | 0 | 1 | 3 | 3 | 5 |
| v10-34 | hoe de sfeer is op het werk                                                    | 4,00 | 0 | 1 | 2 | 6 | 3 |
| v10-3  | wat het werk vraagt van mijn lichaam                                           | 3,92 | 0 | 1 | 2 | 6 | 3 |
| v10-18 | of iemand mij helpt als ik net begin                                           | 3,92 | 0 | 0 | 5 | 2 | 5 |
| v10-25 | hoeveel geld ik ga verdienen                                                   | 3,92 | 0 | 2 | 1 | 5 | 4 |
| v10-28 | op welke dagen en tijden ik werk                                               | 3,92 | 1 | 0 | 3 | 3 | 5 |
| v10-30 | of ik ook 's avonds of in het weekend werk                                     | 3,92 | 0 | 1 | 4 | 0 | 7 |
| v10-32 | hoeveel uur ik werk                                                            | 3,83 | 0 | 0 | 5 | 3 | 4 |
| v10-1  | waar ik werk: binnen, buiten of allebei                                        | 3,67 | 0 | 2 | 3 | 4 | 3 |
| v10-8  | of ik het werk op mijn eigen manier mag doen                                   | 3,67 | 0 | 2 | 3 | 4 | 3 |
| v10-29 | of de werktijden vast zijn of flexibel                                         | 3,67 | 0 | 2 | 3 | 4 | 3 |
| v10-2  | hoeveel geluid er is op de werkplek                                            | 3,42 | 0 | 2 | 4 | 5 | 1 |
| v10-9  | welke taal er gesproken wordt op het werk                                      | 3,42 | 0 | 2 | 4 | 5 | 1 |
| v10-33 | hoe rekening kan worden gehouden met mijn situatie                             | 3,42 | 0 | 4 | 2 | 3 | 3 |
| v10-36 | of ik hulp kan krijgen als ik ergens mee zit                                   | 3,42 | 0 | 4 | 4 | 1 | 3 |
| v10-10 | of ik alleen werk, in een klein team of in een groot team                      | 3,50 | 0 | 2 | 4 | 4 | 2 |
| v10-26 | hoeveel ik er financieel op vooruit ga (vraag in oorspronkelijke set)          | 3,50 | 0 | 3 | 3 | 3 | 3 |
| v10-5  | of ik werkkleding krijg of mijn eigen kleding aan mag                          | 3,33 | 2 | 1 | 3 | 3 | 3 |
| v10-35 | wat er gebeurt als ik ziek word                                                | 3,33 | 0 | 4 | 4 | 3 | 1 |
| v10-6  | hoe ver ik moet reizen naar mijn werk                                          | 3,25 | 0 | 4 | 4 | 1 | 3 |
| v10-11 | of ik alles zelf mag uitzoeken of stap voor stap uitleg krijg                  | 3,25 | 0 | 1 | 7 | 2 | 2 |
| v10-12 | of ik met klanten of bezoekers te maken krijg                                  | 3,17 | 1 | 2 | 4 | 4 | 1 |
| v10-19 | welke taal er gesproken wordt op het werk (Samenwerken)                        | 3,17 | 1 | 1 | 7 | 0 | 3 |
| v10-21 | of ik meerdere dagen kan meelopen                                              | 3,17 | 1 | 2 | 4 | 4 | 1 |
| v10-14 | of ik het team en mijn baas kan ontmoeten voordat ik begin                     | 3,08 | 0 | 5 | 2 | 2 | 3 |
| v10-31 | hoe ik op mijn werk kan komen (bereikbaar met OV?)                             | 3,00 | 2 | 1 | 5 | 3 | 1 |
| v10-17 | of er plek is om mijn fiets of auto neer te zetten                             | 2,92 | 2 | 2 | 4 | 3 | 1 |
| v10-16 | of ik elke dag hetzelfde doe of steeds iets anders                             | 2,83 | 0 | 5 | 4 | 1 | 2 |
| v10-4  | hoe druk het is op een werkdag                                                 | 2,75 | 2 | 3 | 4 | 2 | 1 |
| v10-24 | hoe de pauzes geregeld zijn                                                    | 2,67 | 2 | 3 | 6 | 0 | 1 |
| v10-22 | hoeveel ik er financieel op vooruit ga                                         | 2,42 | 3 | 5 | 3 | 0 | 1 |
| v10-15 | of ik iemand mee mag nemen naar de eerste kennismaking                         | 1,50 | 9 | 0 | 3 | 0 | 0 |

---

## 5. Tijdsbesteding per vraag (aandachtspunten)

### Vragen met de langste gemiddelde verwerkingstijd

| ID     | Vraag                                          | Gem. tijd | Opmerking                                       |
|--------|------------------------------------------------|-----------|-------------------------------------------------|
| v10-35 | wat er gebeurt als ik ziek word                | ~54 s     | Sterk vertekend door één uitschieter van 462 s  |
| v10-1  | waar ik werk: binnen, buiten of allebei        | ~13 s     | Eerste vraag — inclusief inlees-/denktijd       |
| v10-33 | hoe rekening kan worden gehouden met situatie  | ~12 s     | Vraag heeft 5 voorbeelden, kost denktijd        |
| v10-21 | of ik meerdere dagen kan meelopen              | ~9 s      | Lange overweging                                |
| v10-26 | hoeveel ik er financieel op vooruit ga         | ~9 s      | Lange overweging                                |
| v10-13 | wat voor soort werk het is                     | ~9 s      | Vraag met voorbeelden, hoogste belangrijkheid   |

### Vragen waar mensen het snelst doorheen gaan

| ID     | Vraag                                          | Gem. tijd |
|--------|------------------------------------------------|-----------|
| v10-15 | iemand meenemen naar kennismaking              | ~5 s      |
| v10-22 | financieel vooruit                             | ~4 s      |
| v10-6  | reistijd naar werk                             | ~5 s      |

> Snelle doorklik op v10-15 en v10-22 is consistent met de lage belangrijkheidsscores — respondenten hoeven niet na te denken om "1" te kiezen.

---

## 6. Vrije opmerkingen (4 van 12)

| Datum/tijd          | Leeftijd      | Opmerking                                                                                                                                                                                       |
|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2026-05-20 09:20    | Jonger dan 25 | "Nee"                                                                                                                                                                                           |
| 2026-05-20 09:28    | Jonger dan 25 | "K heb geen vraag"                                                                                                                                                                              |
| 2026-05-20 09:39    | Jonger dan 25 | "Nee"                                                                                                                                                                                           |
| 2026-05-20 19:19    | 25 tot 35     | "Wat voor ervaring nodig is om het werk te kunnen doen. Is wel fijn om dat te weten. Of het moet een werkplek zijn waar geen scholing of ervaring voor nodig is en alle ervaring op de werkplek opgedaan wordt." |

> **Aandachtspunt:** 3 van de 4 opmerkingen zijn "Nee" of "geen vraag" — wellicht is de vraagstelling op de remark-pagina onduidelijk en denken respondenten dat ze ja/nee moeten antwoorden in plaats van een vrije opmerking te geven.

> **Inhoudelijke suggestie:** de respondent van 19:19 mist een vraag over **werkervaring / scholingseisen**. Overweeg een vraag in het thema "Leren en beginnen" of "Praktisch" toe te voegen over: "of er ervaring of een opleiding nodig is voor het werk".

---

## 7. Patroon-observaties

1. **Inhoud > Praktisch:** Wat voor werk je doet (v10-13), of je kunt leren (v10-20), of het veilig is (v10-7), en of het vast/tijdelijk is (v10-27) scoren consistent hoger dan praktische zaken zoals parkeren (v10-17) en pauzes (v10-24).

2. **Salaris-context belangrijker dan delta:** v10-25 (absolute verdienste) krijgt gem. 3,92; v10-22 (financiële vooruitgang) krijgt gem. 2,42. Mensen willen weten *wat* ze verdienen, niet zozeer *hoeveel meer* dan nu.

3. **Eén vraag scoort eenduidig als onbelangrijk:** v10-15 (iemand meenemen naar kennismaking) — score 1,50 met 75% van de respondenten op "1". Sterk signaal om deze vraag te heroverwegen.

4. **Respondent #2 (ed263ccc):** gaf op 33 van de 36 vragen een 5. Mogelijk niet serieus ingevuld, of vond echt alles belangrijk. Het kan zinvol zijn om in toekomstige analyses dergelijke "constante-antwoord" patronen eruit te filteren.

5. **Doelgroep skewt jong:** 75% van de respondenten is jonger dan 35. Voor representatieve uitspraken over 35–55-jarigen is meer data nodig.

---

## Bijlage — Methodologie

- **Belangrijkheidsschaal:** 1 = "helemaal niet belangrijk", 5 = "heel belangrijk".
- **Gemiddelden:** ongewogen rekenkundig gemiddelde over alle 12 responses.
- **Tijdsmetingen:** `question_timings` in milliseconden, per respondent gemeten van moment-van-tonen tot moment-van-antwoorden.
- **Bron:** `SELECT * FROM responses_v10 ORDER BY created_at ASC` op project `kjorxtwgcvbzyjikadab`.
