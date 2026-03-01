# Skill: Component Bouwen

## Svelte 5 Syntax (verplicht)
```svelte
<script lang="ts">
  interface Props {
    title: string;
    count?: number;
  }
  let { title, count = 0 }: Props = $props();

  let isOpen = $state(false);
  let doubled = $derived(count * 2);

  $effect(() => {
    console.log('count changed:', count);
  });
</script>
```

**NOOIT**: `export let`, `$:`, `$$props`, `$$restProps`, `createEventDispatcher`

## Game Data
- Altijd via `getGameState()` uit `$lib/stores/game.svelte`
- Nooit state dupliceren in components

## Analytics
- Via `$lib/utils/analytics.ts`, nooit direct PostHog
- Try/catch is ingebouwd in de wrapper

## Layout Patronen
- Main wrapper: `min-h-svh px-5 md:px-8 pb-16 pt-10`
- Container: `mx-auto max-w-sm md:max-w-2xl flex flex-col items-center`
- Cards: `rounded-2xl shadow-lg bg-white`
- Buttons: `rounded-2xl px-6 py-5 font-black text-white shadow-lg`

## Animaties
- Gebruik `svelte/transition` (fly, fade, scale)
- Altijd `prefersReducedMotion()` checken uit `$lib/utils/a11y.ts`

## Checklist
- [ ] Svelte 5 syntax (`$props`, `$state`, `$derived`, `$effect`)
- [ ] Game data via `getGameState()`
- [ ] Responsive (mobile-first + `md:` breakpoint)
- [ ] Animaties respecteren reduced motion
- [ ] `npm run check` → 0 errors
