<script lang="ts">
  import type { V6CardOption, V6Question } from "$lib/data/questions-v6";

  let {
    question,
    answer,
    onanswer,
    onnext,
    onprev,
    isFirst,
    isLast,
  }: {
    question: V6Question;
    answer: string | undefined;
    onanswer: (questionId: string, value: string) => void;
    onnext: () => void;
    onprev: () => void;
    isFirst: boolean;
    isLast: boolean;
  } = $props();

  const cardColors = [
    { bg: 'from-emerald-400 to-emerald-600', ring: 'ring-emerald-500', text: 'text-emerald-900' },
    { bg: 'from-sky-400 to-sky-600', ring: 'ring-sky-500', text: 'text-sky-900' },
    { bg: 'from-amber-400 to-amber-600', ring: 'ring-amber-500', text: 'text-amber-900' },
    { bg: 'from-violet-400 to-violet-600', ring: 'ring-violet-500', text: 'text-violet-900' },
  ];

  const neutralColor = { bg: 'from-gray-300 to-gray-400', ring: 'ring-gray-500', text: 'text-gray-700' };

  function getColor(option: V6CardOption, index: number) {
    if (option.imageType === 'card' && option.image === '') {
      // "Maakt niet uit" / neutral options get a muted color, others get themed colors
      if (option.value.toLowerCase().includes('maakt niet uit') ||
          option.value.toLowerCase().includes('weet ik') ||
          option.value.toLowerCase().includes('nergens') ||
          option.value.toLowerCase().includes('verschilt')) {
        return neutralColor;
      }
    }
    return cardColors[index % cardColors.length];
  }

  function selectOption(option: V6CardOption) {
    onanswer(question.id, option.value);
    onnext();
  }

  let imageErrors = $state<Set<string>>(new Set());

  function handleImageError(value: string) {
    imageErrors = new Set([...imageErrors, value]);
  }

  function hasImage(option: V6CardOption): boolean {
    return option.imageType === 'photo' && option.image !== '' && !imageErrors.has(option.value);
  }
</script>

<div class="w-full max-w-lg mx-auto">
  <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center leading-snug">
    {question.text}
  </h2>

  <div class="grid grid-cols-2 gap-3">
    {#each question.options as option, i}
      {@const selected = answer === option.value}
      {@const color = getColor(option, i)}
      <button
        type="button"
        onclick={() => selectOption(option)}
        class="relative flex flex-col overflow-hidden rounded-2xl border-2 transition-all duration-200 cursor-pointer active:scale-[0.96]
          {selected
            ? `border-indigo-500 ring-3 ${color.ring} scale-[1.03] shadow-lg`
            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}"
      >
        <!-- Image or colored card -->
        <div class="aspect-square w-full overflow-hidden">
          {#if hasImage(option)}
            <img
              src={option.image}
              alt={option.title}
              class="h-full w-full object-cover"
              onerror={() => handleImageError(option.value)}
            />
          {:else}
            <!-- Colored gradient card with emoji/icon -->
            <div class="h-full w-full bg-gradient-to-br {color.bg} flex items-center justify-center">
              <span class="text-4xl sm:text-5xl text-white/90 font-bold select-none">
                {getEmoji(option, i)}
              </span>
            </div>
          {/if}
        </div>

        <!-- Text below image -->
        <div class="px-2 py-2.5 bg-white text-center">
          <p class="text-sm sm:text-base font-bold text-gray-900 leading-tight">{option.title}</p>
          <p class="text-xs sm:text-sm text-gray-500 mt-0.5 leading-tight">{option.description}</p>
        </div>

        <!-- Selection indicator -->
        {#if selected}
          <div class="absolute top-2 right-2 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center shadow">
            <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        {/if}
      </button>
    {/each}
  </div>

  <!-- Navigation -->
  <div class="mt-6 flex justify-between">
    <button
      onclick={onprev}
      disabled={isFirst}
      class="cursor-pointer text-base font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      Vorige
    </button>

    {#if answer}
      <button
        onclick={onnext}
        class="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        {isLast ? "Afronden" : "Volgende"}
      </button>
    {/if}
  </div>
</div>

<script lang="ts" module>
  function getEmoji(option: V6CardOption, index: number): string {
    const v = option.value.toLowerCase();

    // Neutral options
    if (v.includes('maakt niet uit') || v.includes('weet ik') || v.includes('nergens')) return '🤷';
    if (v.includes('verschilt')) return '🔄';

    // Practical - duration (Q16)
    if (v.includes('1 uur') && !v.includes('2')) return '⏱️';
    if (v.includes('1 tot 2 uur')) return '🕐';
    if (v.includes('halve dag')) return '🌅';
    if (v.includes('hele dag')) return '☀️';

    // Practical - transport (Q17)
    if (v.includes('fiets') || v.includes('lopend')) return '🚲';
    if (v.includes('bus') || v.includes('trein')) return '🚌';
    if (v.includes('eigen vervoer') || v.includes('auto')) return '🚗';

    // Practical - distance (Q18)
    if (v.includes('5 kilometer') && !v.includes('25')) return '📍';
    if (v.includes('10 kilometer')) return '🗺️';
    if (v.includes('25 kilometer') && !v.includes('verder')) return '🛣️';
    if (v.includes('verder dan')) return '✈️';

    // Practical - considerations (Q19)
    if (v === 'reistijd') return '⏰';
    if (v === 'tijdstip') return '📅';
    if (v.includes('lichamelijk')) return '💪';

    // Fallback based on index
    const fallbacks = ['🟢', '🔵', '🟡', '🟣'];
    return fallbacks[index % fallbacks.length];
  }
</script>
