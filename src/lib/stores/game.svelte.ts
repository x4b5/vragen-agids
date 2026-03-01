export type GamePhase = 'welcome' | 'playing' | 'results';

let phase = $state<GamePhase>('welcome');

export function getGameState() {
  return {
    get phase() {
      return phase;
    },
  };
}

export function startGame() {
  phase = 'playing';
}

export function finishGame() {
  phase = 'results';
}

export function resetGame() {
  phase = 'welcome';
}
