<script lang="ts">
	import type { V10Question } from '$lib/data/questions-v10';
	import StarRating from './StarRating.svelte';

	let {
		question,
		rating,
		onrate,
		onnext,
		onprev,
		isFirst
	}: {
		question: V10Question;
		rating: number;
		onrate: (questionId: string, stars: number) => void;
		onnext: () => void;
		onprev: () => void;
		isFirst: boolean;
	} = $props();

	function handleRate(stars: number) {
		onrate(question.id, stars);
		onnext();
	}
</script>

<div class="w-full max-w-lg mx-auto">
	<p class="text-lg sm:text-xl text-gray-500 mb-4 text-center">
		Stel je zoekt een baan. Hoe belangrijk vind je het om te weten...
	</p>

	<h2
		class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center leading-snug"
	>
		...{question.text}?
	</h2>

	{#if question.examples}
		<p class="text-base text-gray-500 mb-3 text-center">Denk hierbij aan:</p>
		<ul class="text-base text-gray-600 mb-8 space-y-1 text-center">
			{#each question.examples as example}
				<li>{example}</li>
			{/each}
		</ul>
	{/if}

	<div class="mb-10">
		<StarRating value={rating} onrate={handleRate} />
	</div>

	<div class="flex items-center justify-center">
		<button
			onclick={onprev}
			disabled={isFirst}
			class="cursor-pointer text-base font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
		>
			Vorige
		</button>
	</div>
</div>
