<script lang="ts">
  import "../app.css";
  import { flushPendingQueue } from "$lib/utils/persistence";
  import { onMount } from "svelte";
  import { page } from "$app/state";

  let { children } = $props();

  // Het welkomstscherm (/) heeft een beige patroon-achtergrond; laat de
  // footer-strook daar meekleuren. De v10-schermen blijven wit.
  const isWelcome = $derived(page.url.pathname === "/");

  onMount(() => {
    flushPendingQueue();
  });
</script>

<svelte:head>
  <title>Vragen Agids</title>
</svelte:head>

<div class="flex min-h-svh flex-col" class:bg-amg-beige={isWelcome}>
  {@render children()}

  <footer class="mt-auto flex justify-center pt-3 pb-10 pointer-events-none">
    <img src="/logo-arbeidsmarktgids.svg" alt="Arbeidsmarktgids" class="h-7 opacity-70" />
  </footer>
</div>
