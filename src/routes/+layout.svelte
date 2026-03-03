<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Vragen Agids</title>
</svelte:head>

{@render children()}
