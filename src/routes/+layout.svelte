<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { setupAbandonmentTracking } from "$lib/utils/analytics";
  import { getGameState } from "$lib/stores/game.svelte";

  let { children } = $props();

  onMount(() => {
    const game = getGameState();
    setupAbandonmentTracking(() => ({
      phase: game.phase,
    }));
  });
</script>

<svelte:head>
  <title>[APP_NAME]</title>
</svelte:head>

{@render children()}
