<script lang="ts">
  import { getGameState } from "$lib/stores/game.svelte";

  const game = getGameState();

  let totalImportant = $derived(
    [...game.answers.values()].filter((a) => a.rating === "important").length,
  );
  let totalSkipped = $derived(
    [...game.answers.values()].filter((a) => a.rating === "skip").length,
  );
</script>

<main class="min-h-svh flex items-center justify-center px-5">
  <div class="w-full max-w-md text-center">
    <div class="mb-8">
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
      <p class="text-md font-medium text-indigo-600">
        Jouw hulp is enorm waardevol voor ons!
      </p>
    </div>

    <div class="rounded-2xl bg-gray-50 p-6 mb-8">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-3xl font-bold text-indigo-600">{totalImportant}</p>
          <p class="text-sm text-gray-500">Belangrijk</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-gray-400">{totalSkipped}</p>
          <p class="text-sm text-gray-500">Overgeslagen</p>
        </div>
      </div>
    </div>

    <p class="text-sm text-gray-400">Je kunt dit venster sluiten.</p>
  </div>
</main>
