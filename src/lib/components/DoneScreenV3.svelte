<script lang="ts">
  import { getGameStateV3 } from "$lib/stores/game-v3.svelte";

  const game = getGameStateV3();

  let totalAnswered = $derived(game.answers.size);
</script>

<main class="min-h-svh flex items-center justify-center px-5">
  <div class="w-full max-w-md text-center">
    <div class="mb-8">
      {#if game.submissionStatus === 'submitting'}
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100"
        >
          <svg
            class="h-10 w-10 text-indigo-600 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-3">Even geduld...</h1>
        <p class="text-lg text-gray-500 mb-2">Verzenden...</p>
      {:else if game.submissionStatus === 'queued'}
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100"
        >
          <svg
            class="h-10 w-10 text-amber-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-3">
          Bedankt voor je tijd!
        </h1>
        <p class="text-lg text-amber-600 mb-2">
          Je antwoorden zijn lokaal opgeslagen en worden automatisch verzonden
          zodra de verbinding hersteld is.
        </p>
      {:else}
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
        >
          <svg
            class="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-3">
          Bedankt voor je tijd!
        </h1>
        <p class="text-lg text-gray-500 mb-2">
          Je antwoorden zijn succesvol verzonden.
        </p>
      {/if}
    </div>

    <div class="rounded-2xl bg-gray-50 p-6 mb-8">
      <p class="text-3xl font-bold text-indigo-600">{totalAnswered}</p>
      <p class="text-sm text-gray-500">Vragen beantwoord</p>
    </div>

    <p class="text-sm text-gray-400">Je kunt dit venster sluiten.</p>
  </div>
</main>
