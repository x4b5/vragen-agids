<script lang="ts">
	import {
		getGameStateV8,
		nextGroupV8,
		prevGroupV8,
		submitAllV8
	} from '$lib/stores/game-v8.svelte';
	import WelcomeScreenV8 from '$lib/components/WelcomeScreenV8.svelte';
	import QuestionGroupV8 from '$lib/components/QuestionGroupV8.svelte';
	import DoneScreenV8 from '$lib/components/DoneScreenV8.svelte';

	const game = getGameStateV8();

	function handleNext() {
		nextGroupV8();
	}

	function handlePrev() {
		prevGroupV8();
	}

	async function handleSubmit() {
		await submitAllV8();
	}
</script>

{#if game.phase === 'welcome'}
	<WelcomeScreenV8 />
{:else if game.phase === 'review'}
	<main class="min-h-svh flex flex-col px-5 py-6 sm:py-10">
		<div class="w-full max-w-2xl mx-auto mb-4">
			<div class="flex items-center justify-between mb-1.5">
				<span class="text-sm font-medium text-gray-500">
					Thema {game.currentGroupIndex + 1} van {game.totalGroups}
				</span>
				<span class="text-sm font-medium text-gray-400">
					{Math.round(game.progress * 100)}%
				</span>
			</div>
			<div class="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
				<div
					class="h-full rounded-full bg-teal-500 transition-all duration-500 ease-out"
					style="width: {game.progress * 100}%"
				></div>
			</div>
		</div>

		<div class="flex-1 py-4">
			{#key game.currentGroupIndex}
				<QuestionGroupV8
					group={game.currentGroup}
					onprev={handlePrev}
					onnext={handleNext}
					onsubmit={handleSubmit}
					isFirst={game.isFirstGroup}
					isLast={game.isLastGroup}
				/>
			{/key}
		</div>
	</main>
{:else if game.phase === 'done'}
	<DoneScreenV8 />
{/if}
