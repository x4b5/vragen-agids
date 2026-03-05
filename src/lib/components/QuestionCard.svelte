<script lang="ts">
  import type { Question } from "$lib/data/questions";
  import type { Answer } from "$lib/stores/game.svelte";

  let {
    question,
    answer,
    onrate,
    onnext,
    onprev,
    isFirst,
    isLast,
  }: {
    question: Question;
    answer: Answer | undefined;
    onrate: (
      questionId: string,
      rating: "skip" | "important",
      selectedOptions?: string[],
      remark?: string,
    ) => void;
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
    "bg-violet-50 border-violet-300 text-violet-800",
    "bg-teal-50 border-teal-300 text-teal-800",
    "bg-orange-50 border-orange-300 text-orange-800",
    "bg-indigo-50 border-indigo-300 text-indigo-800",
    "bg-lime-50 border-lime-300 text-lime-800",
    "bg-pink-50 border-pink-300 text-pink-800",
  ];

  const selectedOptionColors = [
    "bg-emerald-200 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400",
    "bg-sky-200 border-sky-500 text-sky-900 ring-2 ring-sky-400",
    "bg-amber-200 border-amber-500 text-amber-900 ring-2 ring-amber-400",
    "bg-rose-200 border-rose-500 text-rose-900 ring-2 ring-rose-400",
    "bg-violet-200 border-violet-500 text-violet-900 ring-2 ring-violet-400",
    "bg-teal-200 border-teal-500 text-teal-900 ring-2 ring-teal-400",
    "bg-orange-200 border-orange-500 text-orange-900 ring-2 ring-orange-400",
    "bg-indigo-200 border-indigo-500 text-indigo-900 ring-2 ring-indigo-400",
    "bg-lime-200 border-lime-500 text-lime-900 ring-2 ring-lime-400",
    "bg-pink-200 border-pink-500 text-pink-900 ring-2 ring-pink-400",
  ];

  let showRemark = $state(false);
  let remark = $state("");
  let selectedOptions = $state<string[]>([]);

  let displayOptions = $derived(question.options?.slice(0, 4) ?? []);

  let isSlider = $derived(
    question.type === "slider" && !!question.sliderLabels,
  );
  let hasOptions = $derived(displayOptions.length > 0 || isSlider);
  let hasSelection = $derived(selectedOptions.length > 0);

  let sliderValue = $state<number | null>(null);
  let sliderLabels = $derived(
    question.sliderLabels
      ? [
          question.sliderLabels[0],
          `Meer ${question.sliderLabels[0].toLowerCase()}`,
          `Meer ${question.sliderLabels[1].toLowerCase()}`,
          question.sliderLabels[1],
        ]
      : [],
  );

  // Reset state when question changes
  $effect(() => {
    question.id;
    showRemark = !!answer?.remark;
    remark = answer?.remark ?? "";
    selectedOptions = answer?.selectedOptions ?? [];
    // Restore slider position from saved answer
    if (isSlider && answer?.selectedOptions?.[0]) {
      const idx = sliderLabels.indexOf(answer.selectedOptions[0]);
      sliderValue = idx >= 0 ? idx : null;
    } else {
      sliderValue = null;
    }
  });

  function handleSlider(value: number) {
    const roundedValue = Math.round(value);
    sliderValue = roundedValue;
    selectedOptions = [sliderLabels[roundedValue]];
  }

  function toggleOption(option: string) {
    if (selectedOptions.includes(option)) {
      selectedOptions = selectedOptions.filter((o) => o !== option);
    } else if (
      question.maxSelect &&
      selectedOptions.length >= question.maxSelect
    ) {
      // At max: replace oldest selection
      selectedOptions = [...selectedOptions.slice(1), option];
    } else {
      selectedOptions = [...selectedOptions, option];
    }
  }

  function skip() {
    onrate(question.id, "skip", undefined, showRemark ? remark : undefined);
    onnext();
  }

  function proceed() {
    onrate(
      question.id,
      "important",
      selectedOptions,
      showRemark ? remark : undefined,
    );
    onnext();
  }

  function handleSkipLast() {
    onrate(question.id, "skip", undefined, showRemark ? remark : undefined);
    onnext();
  }

  function handleProceedLast() {
    onrate(
      question.id,
      "important",
      selectedOptions,
      showRemark ? remark : undefined,
    );
    onnext();
  }
</script>

<div class="w-full max-w-lg mx-auto">
  <h2
    class="text-xl sm:text-2xl font-bold text-gray-900 mb-10 text-center leading-snug"
  >
    {question.text}
  </h2>

  <!-- Slider -->
  {#if isSlider && question.sliderLabels}
    <div class="mb-14 px-2 mt-6">
      <div
        class="flex justify-between mb-8 text-lg sm:text-xl font-bold text-gray-800"
      >
        <span class="w-1/2 text-left pr-2 leading-tight">{sliderLabels[0]}</span
        >
        <span class="w-1/2 text-right pl-2 leading-tight"
          >{sliderLabels[3]}</span
        >
      </div>
      <input
        type="range"
        min="0"
        max="3"
        step={sliderValue === null ? "any" : "1"}
        value={sliderValue ?? 1.5}
        oninput={(e) => handleSlider(Number(e.currentTarget.value))}
        class="w-full h-4 rounded-full appearance-none cursor-pointer accent-indigo-600
					[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md
					[&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:bg-indigo-600 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
        style="background: linear-gradient(to right, #34d399, #fb7185);"
      />
    </div>
  {/if}

  <!-- Clickable options -->
  {#if !isSlider && displayOptions.length > 0}
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      {#each displayOptions as option, i}
        <button
          type="button"
          onclick={() => toggleOption(option)}
          class="rounded-lg border-2 px-4 py-2 text-lg font-medium transition-all cursor-pointer active:scale-[0.97]
						{selectedOptions.includes(option)
            ? selectedOptionColors[i % selectedOptionColors.length]
            : optionColors[i % optionColors.length]}"
        >
          {option}
        </button>
      {/each}
    </div>
  {/if}

  <!-- Action buttons -->
  <div class="flex flex-col gap-4">
    {#if isLast}
      <button
        onclick={handleSkipLast}
        disabled={hasSelection && !isSlider}
        class="cursor-pointer w-full rounded-xl border border-gray-300 bg-gray-200 px-6 py-3.5 text-base font-medium
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-300 hover:text-gray-700
					disabled:opacity-30 disabled:cursor-not-allowed
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-300 text-gray-700' : ''}"
      >
        Sla over (rare vraag)
      </button>
      {#if hasSelection || !hasOptions}
        <button
          onclick={handleProceedLast}
          class="cursor-pointer w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
						transition-all active:scale-[0.97] hover:bg-indigo-700"
        >
          Ga verder
        </button>
      {/if}
    {:else}
      <button
        onclick={skip}
        disabled={hasSelection && !isSlider}
        class="cursor-pointer w-full rounded-xl border border-gray-300 bg-gray-200 px-6 py-3.5 text-base font-medium
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-300 hover:text-gray-700
					disabled:opacity-30 disabled:cursor-not-allowed
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-300 text-gray-700' : ''}"
      >
        Sla over (rare vraag)
      </button>
      {#if hasSelection || !hasOptions}
        <button
          onclick={proceed}
          class="cursor-pointer w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
						transition-all active:scale-[0.97] hover:bg-indigo-700"
        >
          Ga verder
        </button>
      {/if}
    {/if}
  </div>

  <!-- Remark toggle -->
  <div class="mt-8">
    <button
      type="button"
      onclick={() => (showRemark = !showRemark)}
      class="cursor-pointer text-base text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
    >
      {showRemark ? "Opmerking verbergen" : "Opmerking toevoegen"}
    </button>

    {#if showRemark}
      <textarea
        bind:value={remark}
        placeholder="Typ hier je opmerking..."
        rows="2"
        class="mt-2 w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base outline-none
					transition-colors focus:border-indigo-500 resize-none"
      ></textarea>
    {/if}
  </div>

  <!-- Navigation -->
  <div class="mt-8 flex justify-between">
    <button
      onclick={onprev}
      disabled={isFirst}
      class="cursor-pointer text-base font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      Vorige
    </button>

    {#if isLast && answer}
      <button
        onclick={onnext}
        class="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        Afronden
      </button>
    {/if}
  </div>
</div>
