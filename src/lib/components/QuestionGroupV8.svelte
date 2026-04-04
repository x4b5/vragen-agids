<script lang="ts">
	import type { V8Group } from '$lib/data/questions-v8';
	import {
		toggleLikeV8,
		getGameStateV8,
		getCustomForGroup,
		updateCustomQuestionV8,
		addCustomOptionV8,
		removeCustomOptionV8
	} from '$lib/stores/game-v8.svelte';

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

	let custom = $derived(getCustomForGroup(group.id));

	function handleTextChange(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		updateCustomQuestionV8(group.id, { ...custom, text: target.value });
	}

	function handleOptionChange(index: number, e: Event) {
		const target = e.target as HTMLInputElement;
		const newOptions = [...custom.options];
		newOptions[index] = target.value;
		updateCustomQuestionV8(group.id, { ...custom, options: newOptions });
	}
</script>

<div class="w-full max-w-2xl mx-auto">
	<div class="mb-6">
		<h2 class="text-2xl font-bold text-gray-900 mb-1">{group.theme}</h2>
		<p class="text-gray-500">{group.description}</p>
	</div>

	<div class="flex flex-col gap-4 mb-6">
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

	<!-- Eigen vraag per thema -->
	<details class="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 mb-8 group">
		<summary class="flex items-center gap-2 px-4 py-3 cursor-pointer select-none text-sm font-medium text-gray-500 hover:text-teal-600 transition-colors">
			<svg class="h-4 w-4 transition-transform group-open:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
			Eigen vraag toevoegen bij dit thema
			{#if custom.text.trim()}
				<span class="ml-auto text-xs text-teal-600 font-normal">ingevuld</span>
			{/if}
		</summary>

		<div class="px-4 pb-4 pt-2">
			<label for="custom-{group.id}" class="block text-sm font-medium text-gray-700 mb-1.5">
				Jouw vraag
			</label>
			<textarea
				id="custom-{group.id}"
				value={custom.text}
				oninput={handleTextChange}
				placeholder="Schrijf hier je eigen vraag..."
				rows={2}
				class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400
					focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none resize-none"
			></textarea>

			<p class="text-xs font-medium text-gray-500 mt-3 mb-2">
				Antwoordmogelijkheden <span class="text-gray-400 font-normal">(min 2, max 4)</span>
			</p>

			<div class="flex flex-col gap-2">
				{#each custom.options as option, i (i)}
					<div class="flex items-center gap-2">
						<span class="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-[10px] font-bold text-teal-700">
							{String.fromCharCode(65 + i)}
						</span>
						<input
							type="text"
							value={option}
							oninput={(e) => handleOptionChange(i, e)}
							placeholder="Antwoord {String.fromCharCode(65 + i)}"
							class="flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400
								focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
						/>
						{#if custom.options.length > 2}
							<button
								onclick={() => removeCustomOptionV8(group.id, i)}
								class="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full
									text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
								aria-label="Verwijder antwoord {String.fromCharCode(65 + i)}"
							>
								<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						{/if}
					</div>
				{/each}
			</div>

			{#if custom.options.length < 4}
				<button
					onclick={() => addCustomOptionV8(group.id)}
					class="mt-2 flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors"
				>
					<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
					</svg>
					Antwoord toevoegen
				</button>
			{/if}
		</div>
	</details>

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
