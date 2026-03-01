# Components — UI

- Svelte 5 syntax: `$props()`, `$state()`, `$derived()`, `$effect()` — nooit `export let` of `$:`
- Alle game-data via `getGameState()` uit `game.svelte.ts`
- Analytics via `$lib/utils/analytics.ts`, nooit direct PostHog
- Layout: `min-h-svh px-5 md:px-8`, container `max-w-sm md:max-w-2xl mx-auto`
- Animaties: `svelte/transition` (fly, fade), check `prefersReducedMotion()` uit `utils/a11y.ts`
- Responsive: mobile-first, `md:` breakpoint voor desktop
- `npm run check` na wijziging
