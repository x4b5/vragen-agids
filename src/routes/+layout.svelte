<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { initAnalytics, setupAbandonmentTracking } from "$lib/utils/analytics";
  import { getGameState } from "$lib/stores/game.svelte";

  let { children } = $props();

  onMount(() => {
    initAnalytics();
    const game = getGameState();
    setupAbandonmentTracking(() => ({
      phase: game.phase,
    }));
  });
</script>

<svelte:head>
  <title>Agent Kompas</title>
</svelte:head>

{@render children()}
