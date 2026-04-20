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
	}
</script>

<div class="w-full max-w-lg mx-auto">
	<p class="text-xl sm:text-2xl text-gray-700 mb-4 text-center">
		Als ik werk zoek, wil ik weten...
	</p>

	<h2
		class="text-3xl sm:text-4xl font-bold text-gray-950 mb-8 text-center leading-snug"
	>
		...{question.text}
	</h2>

	{#if question.examples}
		<p class="text-xl sm:text-2xl text-gray-700 mb-3 text-center">Denk hierbij aan:</p>
		<ul class="text-xl sm:text-2xl text-gray-800 mb-8 space-y-2 text-center">
			{#each question.examples as example}
				<li>{example}</li>
			{/each}
		</ul>
	{/if}

	<div class="mb-10">
		<StarRating value={rating} onrate={handleRate} />
	</div>

	<div class="flex items-center justify-between max-w-xs mx-auto">
		<button
			onclick={onprev}
			disabled={isFirst}
			class="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
		>
			Vorige
		</button>

		<button
			onclick={onnext}
			disabled={!rating}
			class="cursor-pointer rounded-xl bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-md
				transition-all hover:bg-indigo-700 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed"
		>
			Volgende
		</button>
	</div>
</div>
