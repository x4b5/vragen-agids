<script lang="ts">
	import {
		getGameStateV10,
		ageCategories,
		setAgeCategoryV10,
		setRaadVanAdviesV10,
		startQuestionnaireV10
	} from '$lib/stores/game-v10.svelte';

	const game = getGameStateV10();

	let canContinue = $derived(game.ageCategory !== null);
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-10">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-950 text-center mb-10">
			Voordat we beginnen
		</h2>

		<!-- Leeftijdscategorie -->
		<div class="mb-10">
			<p class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
				Wat is je leeftijd?
			</p>
			<div class="flex flex-col gap-3">
				{#each ageCategories as category}
					<button
						onclick={() => setAgeCategoryV10(category)}
						class="cursor-pointer w-full rounded-xl border-2 px-6 py-4 text-lg md:text-xl text-left
							transition-all active:scale-[0.98]
							{game.ageCategory === category
								? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
								: 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Raad van Advies checkbox -->
		<div class="mb-12">
			<label class="flex items-center gap-4 cursor-pointer">
				<input
					type="checkbox"
					checked={game.isRaadVanAdvies}
					onchange={(e) => setRaadVanAdviesV10(e.currentTarget.checked)}
					class="h-8 w-8 rounded border-gray-300 text-indigo-600 accent-indigo-600 cursor-pointer"
				/>
				<span class="text-xl md:text-2xl text-gray-800">
					Vink aan als je deelnemer bent van de <strong>Raad van Advies</strong>
				</span>
			</label>
		</div>

		<!-- Doorgaan knop -->
		<div class="text-center">
			<button
				onclick={startQuestionnaireV10}
				disabled={!canContinue}
				class="cursor-pointer rounded-xl px-12 py-4 text-xl font-semibold text-white shadow-lg
					transition-all active:scale-[0.97]
					{canContinue
						? 'bg-indigo-600 hover:bg-indigo-700'
						: 'bg-gray-300 cursor-not-allowed'}"
			>
				Doorgaan
			</button>
		</div>
	</div>
</main>
