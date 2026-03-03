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
		onrate: (questionId: string, rating: 'skip' | 'important', remark?: string) => void;
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

	let showRemark = $state(false);
	let remark = $state('');

	// Reset remark state when question changes
	$effect(() => {
		// Access question.id to track changes
		question.id;
		showRemark = !!answer?.remark;
		remark = answer?.remark ?? '';
	});

	function rate(rating: 'skip' | 'important') {
		onrate(question.id, rating, showRemark ? remark : undefined);
		onnext();
	}

	function handleSubmitLast(rating: 'skip' | 'important') {
		onrate(question.id, rating, showRemark ? remark : undefined);
	}
</script>

<div class="w-full max-w-lg mx-auto">
	<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center leading-snug">
		{question.text}
	</h2>

	<!-- Read-only options display -->
	{#if question.type === 'options' && question.options}
		<div class="flex flex-wrap justify-center gap-2 mb-6">
			{#each question.options as option, i}
				<span class="rounded-lg border px-3 py-1.5 text-sm font-medium {optionColors[i % optionColors.length]}">
					{option}
				</span>
			{/each}
		</div>
	{/if}

	{#if question.type === 'multi-select' && question.options}
		<div class="flex flex-wrap justify-center gap-2 mb-6">
			{#each question.options as option, i}
				<span class="rounded-lg border px-3 py-1.5 text-sm font-medium {optionColors[i % optionColors.length]}">
					{option}
				</span>
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

	<!-- Rating buttons -->
	<div class="flex gap-3">
		{#if isLast}
			<button
				onclick={() => handleSubmitLast('skip')}
				class="flex-1 rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 text-lg font-semibold
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-50 hover:border-gray-300
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-50' : ''}"
			>
				Sla over
			</button>
			<button
				onclick={() => handleSubmitLast('important')}
				class="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
					transition-all active:scale-[0.97] hover:bg-indigo-700
					{answer?.rating === 'important' ? 'ring-2 ring-indigo-300' : ''}"
			>
				Belangrijk
			</button>
		{:else}
			<button
				onclick={() => rate('skip')}
				class="flex-1 rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 text-lg font-semibold
					text-gray-600 transition-all active:scale-[0.97] hover:bg-gray-50 hover:border-gray-300
					{answer?.rating === 'skip' ? 'border-gray-400 bg-gray-50' : ''}"
			>
				Sla over
			</button>
			<button
				onclick={() => rate('important')}
				class="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 text-lg font-semibold text-white shadow-lg
					transition-all active:scale-[0.97] hover:bg-indigo-700
					{answer?.rating === 'important' ? 'ring-2 ring-indigo-300' : ''}"
			>
				Belangrijk
			</button>
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
