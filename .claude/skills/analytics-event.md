# Skill: Analytics Event Toevoegen

## Stappen

### 1. Definieer in `src/lib/utils/analytics.ts`
```typescript
export function trackMyEvent(param1: string, param2: number): void {
    capture('my_event', { param_1: param1, param_2: param2 });
}
```

### 2. Integreer in store of component
- **Game-events** (logica-gerelateerd): integreer in `src/lib/stores/game.svelte.ts`
- **UI-events** (klik, scroll, etc.): integreer in het betreffende component
- Import altijd vanuit `$lib/utils/analytics.ts`

### 3. Naamconventies
- Event namen: `snake_case` (bijv. `game_started`, `result_viewed`)
- Properties: `snake_case` (bijv. `round_number`, `duration_ms`)

### 4. Privacy regels
- Geen PII (naam, email, IP) loggen
- Gevoelige data altijd bucketten (bijv. leeftijd per 5 jaar)
- `person_profiles: 'never'` — geen individuele profielen

### 5. Veiligheid
- Alle analytics calls via de `capture()` wrapper (try/catch ingebouwd)
- Analytics mag NOOIT de app breken
