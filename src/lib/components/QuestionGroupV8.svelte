<script lang="ts">
	import type { V8Group } from '$lib/data/questions-v8';
	import { toggleLikeV8, getGameStateV8 } from '$lib/stores/game-v8.svelte';

	let {
		group,
		onprev,
		onnext,
		onsubmit,
		isFirst,
		isLast
	}: {
		group: V8Group;
		onprev: () => void;
		onnext: () => void;
		onsubmit: () => void;
		isFirst: boolean;
		isLast: boolean;
	} = $props();

	const game = getGameStateV8();
</script>

<div class="w-full max-w-2xl mx-auto">
	<div class="mb-6">
		<h2 class="text-2xl font-bold text-gray-900 mb-1">{group.theme}</h2>
		<p class="text-gray-500">{group.description}</p>
	</div>

	<div class="flex flex-col gap-4 mb-8">
		{#each group.variants as variant (variant.id)}
			{@const isLiked = game.likedQuestions.has(variant.id)}
			<div
				class="rounded-xl border-2 p-4 transition-all {isLiked
					? 'border-teal-400 bg-teal-50'
					: 'border-gray-200 bg-white'}"
			>
				<div class="flex items-start gap-3">
					<button
						onclick={() => toggleLikeV8(variant.id)}
						class="mt-0.5 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all
							{isLiked
							? 'border-teal-500 bg-teal-500 text-white'
							: 'border-gray-300 bg-white text-gray-400 hover:border-teal-400 hover:text-teal-400'}"
						aria-label={isLiked ? `${variant.text} gedeselecteerd` : `${variant.text} selecteren als goede vraag`}
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
							{#if isLiked}
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
							{/if}
						</svg>
					</button>

					<div class="flex-1 min-w-0">
						<p class="text-gray-900 font-medium leading-snug">{variant.text}</p>

						{#if variant.options.length > 0}
							<div class="flex flex-wrap gap-1.5 mt-2">
								{#each variant.options as option}
									<span class="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
										{option}
									</span>
								{/each}
							</div>
						{/if}

						<p class="text-xs text-gray-400 mt-2">
							Bron: {variant.sources.join(', ')}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex items-center justify-between gap-3 pb-6">
		<button
			onclick={onprev}
			disabled={isFirst}
			class="rounded-lg px-5 py-2.5 text-sm font-medium transition-all
				{isFirst
				? 'bg-gray-100 text-gray-400 cursor-not-allowed'
				: 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:scale-[0.97]'}"
		>
			Vorige
		</button>

		<span class="text-sm text-gray-400">
			{game.totalLiked} geselecteerd
		</span>

		{#if isLast}
			<button
				onclick={onsubmit}
				class="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow
					transition-all hover:bg-teal-700 active:scale-[0.97]"
			>
				Verstuur
			</button>
		{:else}
			<button
				onclick={onnext}
				class="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow
					transition-all hover:bg-teal-700 active:scale-[0.97]"
			>
				Volgende
			</button>
		{/if}
	</div>
</div>
