# Stores — State Management

- `game.svelte.ts` is de ENIGE bron van waarheid voor alle game-data
- Svelte 5 runes: `$state` voor muteerbaar, `$derived` voor berekend
- `getGameState()` retourneert een reactive object met getters
- Fase-flow: [definieer je fases hier]
- Analytics calls zitten IN de store functies (niet in components)
- Acties via geexporteerde functies: `startGame()`, etc.
- Nooit state dupliceren in components — gebruik `getGameState()` getters
- `ui.svelte.ts` bevat UI-specifieke state (bijv. modals, cookie consent)
- Na wijziging: `npm run check`
