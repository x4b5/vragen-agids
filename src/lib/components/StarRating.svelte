<script lang="ts">
	let {
		value = 0,
		onrate
	}: {
		value: number;
		onrate: (rating: number) => void;
	} = $props();

	let hovered = $state(0);

	const labels = ['', 'Niet belangrijk', 'Beetje belangrijk', 'Belangrijk', 'Best belangrijk', 'Heel belangrijk'];

	const activeLabel = $derived(labels[hovered || value] ?? '');
</script>

<div class="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
	<div class="flex gap-2" role="radiogroup" aria-label="Hoe belangrijk vind je het om dit te weten?">
		{#each [1, 2, 3, 4, 5] as star}
			<button
				type="button"
				onclick={() => onrate(star)}
				onmouseenter={() => hovered = star}
				onmouseleave={() => hovered = 0}
				class="cursor-pointer text-6xl sm:text-7xl transition-transform duration-100 active:scale-90 hover:scale-110"
				aria-label="{star} van 5 sterren: {labels[star]}"
				aria-pressed={value === star}
			>
				{(hovered || value) >= star ? '★' : '☆'}
			</button>
		{/each}
	</div>

	<p class="text-xl sm:text-2xl text-gray-700 font-medium h-9">
		{activeLabel}
	</p>
</div>
