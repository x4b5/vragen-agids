# Werklog — Vragen Agids

## Project
Een responsive vragenlijst-app waarin gebruikers vragen beantwoorden (overslaan / belangrijk) en per vraag een opmerking kunnen toevoegen. Toegang is beschermd met een wachtwoord.

---

## Fase 1 — Project opzet (1 maart 2026) — 20 min

- **SvelteKit 5 project aangemaakt** met TypeScript, Tailwind CSS 4 en Vite
- **Agentic architectuur opgezet**: mappenstructuur met scheiding van engine (pure functies), stores (state), data, components en utils
- **Vercel deployment geconfigureerd** via `@sveltejs/adapter-vercel`
- **CLAUDE.md** aangemaakt met werkregels en conventies

## Fase 2 — Vragenlijst implementatie (3 maart 2026) — 45 min

- **Login-scherm** gebouwd met wachtwoordbeveiliging
- **38 vragen verdeeld over 11 fases** geïmplementeerd als statische data
- **Vragenlijst-flow** gebouwd: navigatie door vragen, per vraag "overslaan" of "belangrijk" kiezen, optioneel een opmerking toevoegen
- **Afrondings-scherm (done)** na het invullen van alle vragen
- **State management** via Svelte 5 runes (`$state`, `$derived`) in een centrale store (`game.svelte.ts`)
- **PostHog analytics** geïntegreerd voor het bijhouden van vraag-antwoorden en sessie-data (EU endpoint, privacy-first)

## Fase 3 — Bugfixes & UI (3 maart 2026) — 15 min

- **SSR uitgeschakeld** voor de pagina om een 500-error op Vercel te verhelpen
- **Hernoemd naar "Vragen Agids"** en unieke pastelkleuren per antwoordoptie toegevoegd

## Fase 4 — PostHog vervangen door Supabase (3 maart 2026) — 40 min

- **Aanleiding**: gratis limiet van PostHog bereikt; analytics-data was niet toereikend om te zien wat gebruikers kozen
- **Supabase project aangemaakt** als gratis Postgres database
- **`posthog-js` verwijderd**, **`@supabase/supabase-js` geïnstalleerd**
- **`src/lib/utils/supabase.ts` aangemaakt**: Supabase client initialisatie + `submitResponses()` functie
- **`src/lib/utils/analytics.ts` verwijderd**: alle PostHog tracking-code
- **Store (`game.svelte.ts`) aangepast**: `submitAll()` verzamelt nu alle antwoorden als JSON en stuurt ze in één keer naar Supabase bij het afronden
- **Layout (`+layout.svelte`) opgeschoond**: analytics-initialisatie en abandonment-tracking verwijderd
- **Environment variabelen** bijgewerkt: PostHog-variabelen vervangen door `VITE_PUBLIC_SUPABASE_URL` en `VITE_PUBLIC_SUPABASE_ANON_KEY`
- **Database-tabel `responses`** aangemaakt met kolommen: `id`, `created_at`, `answers` (JSONB), `total_important`, `total_skipped`, `total_remarks`, `duration_ms`
- **Row Level Security (RLS)** ingeschakeld: alleen inserts toegestaan voor anonieme gebruikers

---

**Totaal: 2 uur**

---

## Techstack

| Technologie | Doel |
|---|---|
| SvelteKit 5 | Framework (SSR + SPA) |
| Svelte 5 runes | Reactive state management |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Supabase (Postgres) | Opslag van antwoorden |
| Vercel | Hosting & deployment |
| Vitest | Testing |
