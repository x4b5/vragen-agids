<script lang="ts">
  /**
   * CursiveA
   * A recreated cursive "A" based on the provided image.
   * Uses an SVG path that mimics the calligraphic strokes.
   */
  let { class: className = "text-gray-900 w-16 h-16" } = $props<{
    class?: string;
  }>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 100" class={className}>
  <path
    d="
      M 22,70 
      C 30,65 38,55 35,45 
      C 32,38 22,40 18,50 
      C 14,60 22,72 32,70
      C 42,68 58,40 68,15
      C 70,10 73,12 73,18
      C 75,35 80,65 82,75
      C 84,82 92,80 90,72
      C 88,62 70,55 60,58
      C 50,61 45,68 52,73
      C 60,78 80,70 95,68
    "
    fill="none"
    stroke="currentColor"
    stroke-width="7"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
