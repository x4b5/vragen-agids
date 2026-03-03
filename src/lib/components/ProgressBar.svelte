<script lang="ts">
  import { getGameState } from "$lib/stores/game.svelte";
  let {
    progress,
    current,
    total,
  }: { progress: number; current: number; total: number } = $props();

  const game = getGameState();

  function handleDoubleClick() {
    if (game?.skipToEnd) {
      game.skipToEnd();
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="w-full" ondblclick={handleDoubleClick}>
  <div class="flex items-center justify-between mb-1.5">
    <span class="text-sm font-medium text-gray-500"
      >Vraag {current + 1} van {total}</span
    >
    <span class="text-sm font-medium text-gray-400"
      >{Math.round(progress * 100)}%</span
    >
  </div>
  <div class="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
    <div
      class="h-full rounded-full bg-indigo-500 transition-all duration-500 ease-out"
      style="width: {progress * 100}%"
    ></div>
  </div>
</div>
