<script lang="ts">
  import { getGameState } from "$lib/stores/game.svelte";

  const game = getGameState();
</script>

{#if game.phase === "welcome"}
  <main class="min-h-svh flex items-center justify-center px-5">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">[APP_NAME]</h1>
      <p class="text-lg text-gray-600 mb-8">[APP_DESCRIPTION]</p>
      <button
        onclick={() => import("$lib/stores/game.svelte").then(m => m.startGame())}
        class="rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg
               transition-all active:scale-[0.97] hover:bg-indigo-700"
      >
        Start
      </button>
    </div>
  </main>
{:else if game.phase === "playing"}
  <main class="min-h-svh flex items-center justify-center px-5">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Playing...</h1>
      <button
        onclick={() => import("$lib/stores/game.svelte").then(m => m.finishGame())}
        class="rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg
               transition-all active:scale-[0.97] hover:bg-indigo-700"
      >
        Finish
      </button>
    </div>
  </main>
{:else if game.phase === "results"}
  <main class="min-h-svh flex items-center justify-center px-5">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Results!</h1>
      <button
        onclick={() => import("$lib/stores/game.svelte").then(m => m.resetGame())}
        class="rounded-2xl bg-gray-600 px-8 py-4 text-lg font-bold text-white shadow-lg
               transition-all active:scale-[0.97] hover:bg-gray-700"
      >
        Restart
      </button>
    </div>
  </main>
{/if}
