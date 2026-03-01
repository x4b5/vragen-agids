# [PROJECTNAAM] — Agent Kompas

## Doel
[Beschrijf het doel van je project in 2-3 zinnen. Wat doet het? Voor wie? Wat is het primaire doel?]

## Techstack
- SvelteKit 5 + Svelte 5 runes (`$state`, `$derived`, `$effect`) — geen legacy syntax
- TypeScript strict mode
- Tailwind CSS 4
- PostHog analytics (EU endpoint `eu.posthog.com`, `person_profiles: 'never'`)
- Vercel deployment via `@sveltejs/adapter-vercel`
- Vitest voor tests

## Repo Map
```
src/lib/engine/          -> Pure functies, geen side effects
src/lib/stores/          -> game.svelte.ts = enige bron van waarheid (Svelte 5 runes)
src/lib/data/            -> Statische data (beschermd, niet wijzigen zonder opdracht)
src/lib/components/      -> UI-componenten (Svelte 5, geen eigen state voor game-data)
src/lib/utils/           -> analytics.ts, a11y.ts, helpers
src/routes/              -> +layout.svelte (analytics setup), +page.svelte (phase router)
docs/                    -> Architectuur, ADRs, analytics-plan
.claude/skills/          -> Gedetailleerde instructies per taaktype
```

## Werkregels
1. **Single source of truth**: Alle game-state leeft in `game.svelte.ts`. Nooit dupliceren in components.
2. **Svelte 5 only**: Gebruik `$props()`, `$state()`, `$derived()`, `$effect()`. Nooit `export let` of `$:`.
3. **Engine = pure functies**: Engine bestanden hebben geen side effects. Lees altijd alle engine files voor je er een wijzigt.
4. **Data is heilig**: Data bestanden NIET wijzigen zonder expliciete opdracht.
5. **Analytics via wrapper**: Altijd via `src/lib/utils/analytics.ts`, nooit direct PostHog. Try/catch verplicht.
6. **Privacy first**: Geen PII loggen. `person_profiles: 'never'`.
7. **Fase-flow**: [Definieer je fase-flow, bijv: welcome -> playing -> results -> done]
8. **[Projectspecifieke regel]**: [Voeg toe wat relevant is voor jouw project]

## Commando's
```bash
npm run dev          # Development server
npm run build        # Production build
npm run check        # TypeScript check
npm run test:run     # Vitest tests
```
