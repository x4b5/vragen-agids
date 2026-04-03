<script lang="ts">
  import type { Question } from "$lib/data/questions";

  let {
    question,
    answer,
    onanswer,
    onnext,
    onprev,
    isFirst,
    isLast,
  }: {
    question: Question;
    answer: string | undefined;
    onanswer: (questionId: string, value: string) => void;
    onnext: () => void;
    onprev: () => void;
    isFirst: boolean;
    isLast: boolean;
  } = $props();

  const optionColors = [
    "bg-emerald-50 border-emerald-300 text-emerald-800",
    "bg-sky-50 border-sky-300 text-sky-800",
    "bg-amber-50 border-amber-300 text-amber-800",
    "bg-rose-50 border-rose-300 text-rose-800",
  ];

  const selectedOptionColors = [
    "bg-emerald-200 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400",
    "bg-sky-200 border-sky-500 text-sky-900 ring-2 ring-sky-400",
    "bg-amber-200 border-amber-500 text-amber-900 ring-2 ring-amber-400",
    "bg-rose-200 border-rose-500 text-rose-900 ring-2 ring-rose-400",
  ];

  let openText = $state("");

  // Reset open text when question changes
  $effect(() => {
    question.id;
    openText = answer ?? "";
  });

  function selectOption(option: string) {
    onanswer(question.id, option);
    onnext();
  }

  function submitOpen() {
    if (openText.trim()) {
      onanswer(question.id, openText.trim());
    }
    onnext();
  }
</script>

<div class="w-full max-w-lg mx-auto">
  <h2
    class="text-xl sm:text-2xl font-bold text-gray-900 mb-10 text-center leading-snug"
  >
    {question.text}
  </h2>

  {#if question.type === "open"}
    <!-- Open text input -->
    <div class="mb-8">
      <textarea
        bind:value={openText}
        placeholder="Typ hier je antwoord..."
        rows="4"
        class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base outline-none
          transition-colors focus:border-indigo-500 resize-none"
      ></textarea>
    </div>

    <button
      onclick={submitOpen}
      class="cursor-pointer w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
        transition-all active:scale-[0.97] hover:bg-indigo-700"
    >
      {isLast ? "Afronden" : "Volgende"}
    </button>
  {:else}
    <!-- Clickable single-select options -->
    <div class="flex flex-col gap-3 mb-8">
      {#each question.options ?? [] as option, i}
        <button
          type="button"
          onclick={() => selectOption(option)}
          class="rounded-xl border-2 px-5 py-3.5 text-lg font-medium transition-all cursor-pointer active:scale-[0.97] text-left
            {answer === option
            ? selectedOptionColors[i % selectedOptionColors.length]
            : optionColors[i % optionColors.length]}"
        >
          {option}
        </button>
      {/each}
    </div>
  {/if}

  <!-- Navigation -->
  <div class="mt-8 flex justify-between">
    <button
      onclick={onprev}
      disabled={isFirst}
      class="cursor-pointer text-base font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      Vorige
    </button>

    {#if question.type !== "open" && answer}
      <button
        onclick={onnext}
        class="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        {isLast ? "Afronden" : "Volgende"}
      </button>
    {/if}
  </div>
</div>
