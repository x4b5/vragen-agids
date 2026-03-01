# Hook Configuratie

Hooks zijn shell-commando's die automatisch draaien bij bepaalde events in Claude Code.

## Aanbevolen hooks voor dit project

### TypeScript check na engine/store wijzigingen
**Trigger**: Na wijzigingen in `src/lib/engine/` of `src/lib/stores/`
**Commando**: `npm run check`
**Doel**: Voorkom type-errors in de kernlogica

### Prettier formatter
**Trigger**: Na elke bestandswijziging
**Commando**: `npx prettier --write <gewijzigd-bestand>`
**Doel**: Consistente code formatting

## Beschermde bestanden
De volgende bestanden mogen NIET gewijzigd worden zonder expliciete opdracht:
- Data bestanden in `src/lib/data/`

## Hook formaat in `.claude/settings.local.json`
Hooks worden geconfigureerd via Claude Code settings. Zie de Claude Code documentatie voor het juiste formaat.
