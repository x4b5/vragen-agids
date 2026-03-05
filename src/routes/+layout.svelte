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
