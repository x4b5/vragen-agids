<script lang="ts">
	import { getSkizoState, resetSkizo } from '$lib/stores/skizo.svelte';

	const state = getSkizoState();

	const optionColors = [
		'bg-emerald-50 border-emerald-200 text-emerald-800',
		'bg-sky-50 border-sky-200 text-sky-800',
		'bg-amber-50 border-amber-200 text-amber-800',
		'bg-rose-50 border-rose-200 text-rose-800'
	];

	function getVisibleQuestions() {
		if (state.displayMode === 'direct') {
			return state.questions;
		}
		return state.questions.slice(0, state.currentDisplayIndex + 1);
	}
</script>

<main class="min-h-svh px-5 py-8">
	<div class="w-full max-w-lg mx-auto">
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold text-gray-900 mb-2">Resultaten</h1>
			<p class="text-gray-500">
				{state.selectedVersion.toUpperCase()} &middot;
				{state.personalities.find((p) => p.id === state.selectedPersonality)?.name ?? ''}
			</p>
		</div>

		<div class="flex flex-col gap-4 mb-10">
			{#each getVisibleQuestions() as question, i}
				{@const answer = state.answers.get(question.id)}
				<div
					class="rounded-xl border-2 px-5 py-4 animate-fade-in {optionColors[i % optionColors.length]}"
				>
					<p class="text-sm font-medium text-gray-500 mb-1">
						Vraag {i + 1} / {state.questions.length}
					</p>
					<p class="text-base font-semibold mb-2">{question.text}</p>
					{#if answer}
						<p class="text-lg font-bold">{answer}</p>
					{:else}
						<p class="text-sm italic text-gray-400">Geen antwoord</p>
					{/if}
				</div>
			{/each}
		</div>

		{#if state.displayMode === 'live' && state.currentDisplayIndex < state.questions.length - 1}
			<p class="text-center text-sm text-gray-400 mb-6 animate-pulse">
				Antwoorden verschijnen...
			</p>
		{/if}

		<div class="text-center">
			<button
				onclick={resetSkizo}
				class="rounded-xl bg-gray-100 px-8 py-3 text-base font-semibold text-gray-700
					transition-all hover:bg-gray-200 cursor-pointer"
			>
				Opnieuw
			</button>
		</div>
	</div>
</main>
