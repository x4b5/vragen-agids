<script lang="ts">
  import "../app.css";
  import { flushPendingQueue } from "$lib/utils/persistence";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    flushPendingQueue();
  });
</script>

<svelte:head>
  <title>Vragen Agids</title>
</svelte:head>

{@render children()}

<footer class="fixed bottom-0 left-0 right-0 flex justify-center pt-3 pb-10 pointer-events-none">
  <img src="/logo-arbeidsmarktgids.svg" alt="Arbeidsmarktgids" class="h-7 opacity-70" />
</footer>
