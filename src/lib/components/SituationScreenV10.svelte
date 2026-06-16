<script lang="ts">
	import {
		getGameStateV10,
		ageCategories,
		setAgeCategoryV10,
		situations,
		setSituationV10,
		submitAllV10
	} from '$lib/stores/game-v10.svelte';

	const game = getGameStateV10();

	let canContinue = $derived(game.ageCategory !== null && game.situation !== null);
	let isSubmitting = $derived(game.submissionStatus === 'submitting');
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-10">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto">
		<h2 class="text-2xl md:text-3xl font-bold text-gray-950 text-center mb-10">
			Tot slot...
		</h2>

		<!-- Leeftijd -->
		<div class="mb-10">
			<p class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
				Wat is je leeftijd?
			</p>
			<div class="flex flex-col gap-3">
				{#each ageCategories as category}
					<button
						onclick={() => setAgeCategoryV10(category)}
						class="cursor-pointer w-full rounded-xl border-2 px-6 py-4 text-base md:text-lg text-left
							transition-all active:scale-[0.98]
							{game.ageCategory === category
								? 'border-[#7DC5FF] bg-blue-50 text-blue-900 font-semibold'
								: 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Situatie -->
		<div class="mb-10">
			<p class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
				Wat is je situatie?
			</p>
			<div class="flex flex-col gap-3">
				{#each situations as sit}
					<button
						onclick={() => setSituationV10(sit)}
						class="cursor-pointer w-full rounded-xl border-2 px-6 py-4 text-base md:text-lg text-left
							transition-all active:scale-[0.98]
							{game.situation === sit
								? 'border-[#7DC5FF] bg-blue-50 text-blue-900 font-semibold'
								: 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'}"
					>
						{sit}
					</button>
				{/each}
			</div>
		</div>

		<div class="text-center">
			<button
				onclick={submitAllV10}
				disabled={!canContinue || isSubmitting}
				class="cursor-pointer rounded-xl px-12 py-4 text-lg font-semibold text-white shadow-lg
					transition-all active:scale-[0.97]
					{canContinue && !isSubmitting
						? 'btn-amg'
						: 'bg-gray-300 cursor-not-allowed'}"
			>
				{isSubmitting ? 'Bezig...' : 'Bekijk wat er mogelijk is'}
			</button>
		</div>
	</div>
</main>
