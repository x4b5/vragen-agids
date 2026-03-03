# Urenregistratie Logboek

| Datum | Starttijd | Eindtijd | Duur (uren) | Commit Hash | Omschrijving |
|-------|-----------|----------|-------------|-------------|--------------|
| 2026-03-03 | 09:50 | 09:55 | 0.1 | `b1ea78c` | Volledige vragenlijst-app gebouwd: LoginScreen, QuestionCard, DoneScreen, ProgressBar en PhaseHeader componenten; 38 vragen over 11 fases in questions.ts; game store met Svelte 5 runes; analytics-integratie; globale styling (14 bestanden, ~895 regels) |
| 2026-03-03 | 09:55 | 09:57 | 0.1 | `a9699b9` | SSR uitgeschakeld via +page.ts (`export const ssr = false`) om 500-fout op Vercel deployment te verhelpen |
| 2026-03-03 | 09:57 | 11:19 | 1.4 | `7ba68bd` | App hernoemd naar "Vragen Agids"; unieke pastelkleuren per antwoordoptie in QuestionCard; LoginScreen titel aangepast; Supabase-integratie en layout bijgewerkt; CLAUDE.md projectnaam geüpdatet (4 bestanden, 23 insertions) |
| 2026-03-03 | 11:19 | 11:50 | 0.5 | — | Automatisch urenregistratiesysteem opgezet: post-commit git hook met tijdberekening en interactieve bevestiging; LOGBOOK.md aangemaakt; start-werkdag.sh script; npm start/start-day commando's in package.json |
