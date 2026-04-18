<script lang="ts">
	let {
		value = 0,
		onrate
	}: {
		value: number;
		onrate: (rating: number) => void;
	} = $props();

	const options = [
		{ rating: 1, label: '🤷 Hoef ik niet te weten', color: 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200', activeColor: 'bg-gray-700 text-white border-gray-700' },
		{ rating: 2, label: '😊 Leuk om te weten', color: 'bg-sky-100 text-sky-800 border-sky-300 hover:bg-sky-200', activeColor: 'bg-sky-700 text-white border-sky-700' },
		{ rating: 3, label: '👍 Wil ik weten', color: 'bg-indigo-100 text-indigo-800 border-indigo-300 hover:bg-indigo-200', activeColor: 'bg-indigo-700 text-white border-indigo-700' },
		{ rating: 4, label: '💪 Moet ik weten!', color: 'bg-violet-100 text-violet-800 border-violet-300 hover:bg-violet-200', activeColor: 'bg-violet-800 text-white border-violet-800' }
	];
</script>

<div class="flex flex-col gap-3 w-full max-w-sm mx-auto" role="radiogroup" aria-label="Hoe belangrijk vind je het om dit te weten?">
	{#each options as option}
		<button
			type="button"
			onclick={() => onrate(option.rating)}
			class="cursor-pointer rounded-xl border-2 px-6 py-4 text-lg sm:text-xl font-semibold
				transition-all duration-150 active:scale-[0.97]
				{value === option.rating ? option.activeColor : option.color}"
			aria-pressed={value === option.rating}
		>
			{option.label}
		</button>
	{/each}
</div>
