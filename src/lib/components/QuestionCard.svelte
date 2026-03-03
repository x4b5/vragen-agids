<script lang="ts">
	import type { Question } from '$lib/data/questions';
	import type { Answer } from '$lib/stores/game.svelte';

	let {
		question,
		answer,
		onrate,
		onnext,
		onprev,
		isFirst,
		isLast
	}: {
		question: Question;
		answer: Answer | undefined;
		onrate: (questionId: string, rating: 'skip' | 'important', selectedOptions?: string[], remark?: string) => void;
		onnext: () => void;
		onprev: () => void;
		isFirst: boolean;
		isLast: boolean;
	} = $props();

	const optionColors = [
		'bg-emerald-50 border-emerald-300 text-emerald-800',
		'bg-sky-50 border-sky-300 text-sky-800',
		'bg-amber-50 border-amber-300 text-amber-800',
		'bg-rose-50 border-rose-300 text-rose-800',
		'bg-violet-50 border-violet-300 text-violet-800',
		'bg-teal-50 border-teal-300 text-teal-800',
		'bg-orange-50 border-orange-300 text-orange-800',
		'bg-indigo-50 border-indigo-300 text-indigo-800',
		'bg-lime-50 border-lime-300 text-lime-800',
		'bg-pink-50 border-pink-300 text-pink-800',
	];

	const selectedOptionColors = [
		'bg-emerald-200 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400',
		'bg-sky-200 border-sky-500 text-sky-900 ring-2 ring-sky-400',
		'bg-amber-200 border-amber-500 text-amber-900 ring-2 ring-amber-400',
		'bg-rose-200 border-rose-500 text-rose-900 ring-2 ring-rose-400',
		'bg-violet-200 border-violet-500 text-violet-900 ring-2 ring-violet-400',
		'bg-teal-200 border-teal-500 text-teal-900 ring-2 ring-teal-400',
		'bg-orange-200 border-orange-500 text-orange-900 ring-2 ring-orange-400',
		'bg-indigo-200 border-indigo-500 text-indigo-900 ring-2 ring-indigo-400',
		'bg-lime-200 border-lime-500 text-lime-900 ring-2 ring-lime-400',
		'bg-pink-200 border-pink-500 text-pink-900 ring-2 ring-pink-400',
	];

	let showRemark = $state(false);
	let remark = $state('');
	let selectedOptions = $state<string[]>([]);

	let isMultiSelect = $derived(question.type === 'multi-select');
	let hasOptions = $derived(question.type === 'options' || question.type === 'multi-select');
	let hasSelection = $derived(selectedOptions.length > 0);

	// Reset state when question changes
	$effect(() => {
		question.id;
		showRemark = !!answer?.remark;
		remark = answer?.remark ?? '';
		selectedOptions = answer?.selectedOptions ?? [];
	});

	function toggleOption(option: string) {
		if (isMultiSelect) {
			if (selectedOptions.includes(option)) {
				selectedOptions = selectedOptions.filter(o => o !== option);
			} else {
				selectedOptions = [...selectedOptions, option];
			}
		} else {
			selectedOptions = selectedOptions.includes(option) ? [] : [option];
		}
	}

	function skip() {
		onrate(question.id, 'skip', undefined, showRemark ? remark : undefined);
		onnext();
	}

	function proceed() {
		onrate(question.id, 'important', selectedOptions, showRemark ? remark : undefined);
		onnext();
	}

	function handleSkipLast() {
		onrate(question.id, 'skip', undefined, showRemark ? remark : undefined);
	}

	function handleProceedLast() {
		onrate(question.id, 'important', selectedOptions, showRemark ? remark : undefined);
	}
</script>

<div class="w-full max-w-lg mx-auto">
	<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center leading-snug">
		{question.text}
	</h2>

	<!-- Clickable options -->
	{#if hasOptions && question.options}
		<div class="flex flex-wrap justify-center gap-2 mb-6">
			{#each question.options as option, i}
				<button
					type="button"
					onclick={() => toggleOption(option)}
					class="rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all cursor-pointer active:scale-[0.97]
						{selectedOptions.includes(option) ? selectedOptionColors[i % selectedOptionColors.length] : optionColors[i % optionColors.length]}"
				>
					{option}
				</button>
			{/each}
		</div>
	{/if}

	{#if question.type === 'slider' && question.sliderLabels}
		<div class="flex items-center justify-between mb-6 px-4">
			<span class="rounded-lg border px-3 py-1.5 text-sm font-medium {optionColors[0]}">{question.sliderLabels[0]}</span>
			<div class="flex-1 mx-4 h-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100"></div>
			<span class="rounded-lg border px-3 py-1.5 text-sm font-medium {optionColors[1]}">{question.sliderLabels[1]}</span>
		</div>
	{/if}

	<!-- Remark toggle -->
	<div class="mb-6">
		<button
			type="button"
			onclick={() => (showRemark = !showRemark)}
			class="text-sm text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
		>
			{showRemark ? 'Opmerking verbergen' : 'Opmerking toevoegen'}
		</button>

		{#if showRemark}
			<textarea
				bind:value={remark}
				placeholder="Typ hier je opmerking..."
				rows="2"
				class="mt-2 w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm outline-none
					transition-colors focus:border-indigo-500 resize-none"
			></textarea>
		{/if}
	</div>

	<!-- Action buttons -->
	<div class="flex flex-col gap-3">
		{#if isLast}
			<button
				onclick={handleSkipLast}
				class="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 text-lg font-semibold
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-50 hover:border-gray-300
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-50' : ''}"
			>
				Sla over (rare vraag)
			</button>
			{#if hasSelection || !hasOptions}
				<button
					onclick={handleProceedLast}
					class="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
						transition-all active:scale-[0.97] hover:bg-indigo-700"
				>
					Ga verder
				</button>
			{/if}
		{:else}
			<button
				onclick={skip}
				class="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 text-lg font-semibold
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-50 hover:border-gray-300
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-50' : ''}"
			>
				Sla over (rare vraag)
			</button>
			{#if hasSelection || !hasOptions}
				<button
					onclick={proceed}
					class="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
						transition-all active:scale-[0.97] hover:bg-indigo-700"
				>
					Ga verder
				</button>
			{/if}
		{/if}
	</div>

	<!-- Navigation -->
	<div class="mt-4 flex justify-between">
		<button
			onclick={onprev}
			disabled={isFirst}
			class="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
		>
			Vorige
		</button>

		{#if isLast && answer}
			<button
				onclick={onnext}
				class="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
			>
				Afronden
			</button>
		{/if}
	</div>
</div>
