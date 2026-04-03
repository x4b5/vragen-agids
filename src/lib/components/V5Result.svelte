<script lang="ts">
	import { getGameStateV5 } from '$lib/stores/game-v5.svelte';
	import { filtersV5 } from '$lib/data/filters-v5';

	const game = getGameStateV5();

	const cardColors = [
		'bg-indigo-50 border-indigo-200',
		'bg-emerald-50 border-emerald-200',
		'bg-amber-50 border-amber-200',
		'bg-sky-50 border-sky-200',
		'bg-rose-50 border-rose-200'
	];

	function getPreferenceLabel(filter: typeof filtersV5[number]): string {
		const val = game.filterValues.get(filter.id) ?? 0.5;
		if (filter.type === 'quadrant' && filter.quadrants) {
			const y = game.filterValues.get(filter.id + '_y') ?? 0.5;
			const scores = [
				{ label: 'Dat ik iets heb gemaakt', score: (1 - val) * (1 - y) },
				{ label: 'Dat ik mensen heb geholpen', score: val * (1 - y) },
				{ label: 'Dat ik een probleem heb opgelost', score: (1 - val) * y },
				{ label: 'Dat ik niet meer naar de sportschool hoef', score: val * y }
			].sort((a, b) => b.score - a.score);
			return scores[0].label;
		}
		if (val < 0.33) return filter.options[0];
		if (val > 0.66) return filter.options[1];
		return 'Mix van beide';
	}
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-10">
	<div class="w-full max-w-lg mx-auto">
		<div class="text-center mb-8">
			{#if game.submissionStatus === 'submitting'}
				<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
					<svg class="h-8 w-8 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
					</svg>
				</div>
				<p class="text-gray-500">Opslaan...</p>
			{:else if game.submissionStatus === 'queued'}
				<p class="text-sm text-amber-600 mb-4">Lokaal opgeslagen — wordt verzonden bij verbinding.</p>
			{/if}

			<h1 class="text-3xl font-bold text-gray-900 mb-2">Dit past bij jou</h1>
			<p class="text-gray-500">Op basis van wat jij leuk vindt</p>
		</div>

		<!-- Preference summary -->
		<div class="rounded-2xl bg-gray-50 p-5 mb-8">
			<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Wat jij koos</h3>
			<div class="space-y-2">
				{#each filtersV5 as filter}
					<div class="flex items-center justify-between text-sm">
						<span class="text-gray-600">{filter.label}</span>
						<span class="font-medium text-gray-900">{getPreferenceLabel(filter)}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- AI suggestions -->
		{#if game.suggestions.length > 0}
			<h3 class="text-lg font-bold text-gray-900 mb-4">Banen die bij jou passen</h3>
			<div class="space-y-4 mb-8">
				{#each game.suggestions as suggestion, i}
					<div class="rounded-xl border-2 p-5 {cardColors[i % cardColors.length]}">
						<h4 class="text-lg font-bold text-gray-900 mb-1">{suggestion.title}</h4>
						<p class="text-sm text-gray-600">{suggestion.description}</p>
					</div>
				{/each}
			</div>
		{:else}
			<div class="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-8 text-center">
				<p class="text-amber-700">Het is niet gelukt om banen te zoeken. Probeer het later nog een keer.</p>
			</div>
		{/if}

		<p class="text-sm text-gray-400 text-center">Je mag dit scherm sluiten.</p>
	</div>
</main>
