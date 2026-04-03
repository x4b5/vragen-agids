<script lang="ts">
	import {
		getGameStateV5,
		setFilterValue,
		nextFilter,
		prevFilter,
		submitAndSuggest
	} from '$lib/stores/game-v5.svelte';
	import WelcomeScreenV5 from '$lib/components/WelcomeScreenV5.svelte';
	import FilterCard from '$lib/components/FilterCard.svelte';
	import V5Result from '$lib/components/V5Result.svelte';

	const game = getGameStateV5();

	let localValue = $state(0.5);
	let localValue2 = $state(0.5);

	$effect(() => {
		const id = game.currentFilter?.id ?? '';
		localValue = game.filterValues.get(id) ?? 0.5;
		localValue2 = game.filterValues.get(id + '_y') ?? 0.5;
	});

	async function handleNext() {
		if (game.currentFilter) {
			setFilterValue(game.currentFilter.id, localValue, game.currentFilter.type === 'quadrant' ? localValue2 : undefined);
		}
		if (game.isLastFilter) {
			await submitAndSuggest();
		} else {
			nextFilter();
		}
	}

	function handlePrev() {
		if (game.currentFilter) {
			setFilterValue(game.currentFilter.id, localValue, game.currentFilter.type === 'quadrant' ? localValue2 : undefined);
		}
		prevFilter();
	}
</script>

{#if game.phase === 'welcome'}
	<WelcomeScreenV5 />
{:else if game.phase === 'filters'}
	<main class="min-h-svh flex flex-col px-5 py-6 sm:py-10">
		<!-- Progress bar -->
		<div class="w-full max-w-md mx-auto mb-2">
			<div class="flex justify-between text-sm text-gray-500 mb-2">
				<span>Filter {game.currentFilterIndex + 1} van {game.totalFilters}</span>
			</div>
			<div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
				<div
					class="h-full bg-indigo-500 rounded-full transition-all duration-300"
					style="width: {((game.currentFilterIndex + 1) / game.totalFilters) * 100}%"
				></div>
			</div>
		</div>

		<div class="flex-1 flex items-center justify-center py-8">
			{#key game.currentFilterIndex}
				<div class="w-full animate-fade-in">
					<FilterCard
						filter={game.currentFilter}
						bind:value={localValue}
						bind:value2={localValue2}
						onprev={handlePrev}
						onnext={handleNext}
						isFirst={game.isFirstFilter}
						isLast={game.isLastFilter}
					/>
				</div>
			{/key}
		</div>
	</main>
{:else if game.phase === 'processing'}
	<main class="min-h-svh flex items-center justify-center px-5">
		<div class="text-center">
			<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
				<svg class="h-10 w-10 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
				</svg>
			</div>
			<h2 class="text-2xl font-bold text-gray-900 mb-2">Even wachten...</h2>
			<p class="text-gray-500">We zoeken banen die bij jou passen</p>
		</div>
	</main>
{:else if game.phase === 'result'}
	<V5Result />
{/if}
