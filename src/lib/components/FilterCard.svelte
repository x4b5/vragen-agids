<script lang="ts">
	import type { FilterV5 } from '$lib/data/filters-v5';
	import SoundMeter from './filters/SoundMeter.svelte';
	import Wardrobe from './filters/Wardrobe.svelte';
	import TeamSize from './filters/TeamSize.svelte';
	import Purpose from './filters/Purpose.svelte';

	let {
		filter,
		value = $bindable(0.5),
		value2 = $bindable(0.5),
		onprev,
		onnext,
		isFirst,
		isLast
	}: {
		filter: FilterV5;
		value: number;
		value2: number;
		onprev: () => void;
		onnext: () => void;
		isFirst: boolean;
		isLast: boolean;
	} = $props();
</script>

<div class="w-full max-w-md mx-auto">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-gray-900 mb-2">{filter.label}</h2>
		<p class="text-gray-500">{filter.description}</p>
	</div>

	<div class="rounded-2xl bg-white shadow-lg p-8 mb-8">
		{#if filter.id === 'geluid'}
			<SoundMeter bind:value />
		{:else if filter.id === 'kleding'}
			<Wardrobe bind:value />
		{:else if filter.id === 'teamgrootte'}
			<TeamSize bind:value />
		{:else if filter.id === 'zingeving'}
			<Purpose bind:value bind:value2 />
		{/if}
	</div>

	<div class="flex justify-between items-center gap-4">
		<button
			onclick={onprev}
			disabled={isFirst}
			class="rounded-xl px-6 py-3 font-semibold transition-all
				{isFirst
					? 'bg-gray-100 text-gray-400 cursor-not-allowed'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:scale-[0.97]'}"
		>
			Vorige
		</button>

		<button
			onclick={onnext}
			class="rounded-xl px-8 py-3 font-semibold text-white transition-all
				bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] shadow-lg"
		>
			{isLast ? 'Resultaat bekijken' : 'Volgende'}
		</button>
	</div>
</div>
