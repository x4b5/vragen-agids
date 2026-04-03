<script lang="ts">
	let { value = $bindable(0.5) }: { value: number } = $props();

	let personCount = $derived(Math.max(2, Math.round(2 + value * 14)));
</script>

<div class="flex flex-col items-center gap-6">
	<div class="relative w-72 h-44 flex items-center justify-center">
		<svg viewBox="0 0 240 120" class="w-full h-full">
			{#each Array(personCount) as _, i}
				{@const cols = Math.ceil(Math.sqrt(personCount * 1.5))}
				{@const row = Math.floor(i / cols)}
				{@const col = i % cols}
				{@const totalRows = Math.ceil(personCount / cols)}
				{@const colsInRow = row === totalRows - 1 ? ((personCount - 1) % cols) + 1 : cols}
				{@const spacing = Math.max(18, 160 / cols)}
				{@const startX = 120 - (colsInRow - 1) * spacing / 2}
				{@const startY = 60 - (totalRows - 1) * spacing / 2}
				{@const x = startX + col * spacing}
				{@const y = startY + row * spacing}
				<g class="transition-all duration-500" opacity={0.7 + 0.3 * (1 - i / personCount)}>
					<!-- Head -->
					<circle cx={x} cy={y - 5} r="4"
						fill={`hsl(${220 + i * 17}, 60%, ${50 + (i % 3) * 10}%)`} />
					<!-- Body -->
					<line x1={x} y1={y - 1} x2={x} y2={y + 8}
						stroke={`hsl(${220 + i * 17}, 60%, ${50 + (i % 3) * 10}%)`}
						stroke-width="2.5" stroke-linecap="round" />
					<!-- Arms -->
					<line x1={x - 4} y1={y + 2} x2={x + 4} y2={y + 2}
						stroke={`hsl(${220 + i * 17}, 60%, ${50 + (i % 3) * 10}%)`}
						stroke-width="1.5" stroke-linecap="round" />
				</g>
			{/each}
		</svg>
	</div>

	<input
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value
		class="w-full max-w-xs h-3 rounded-full appearance-none cursor-pointer
			bg-gradient-to-r from-emerald-300 to-violet-300"
	/>

	<div class="flex justify-between w-full max-w-xs text-sm font-medium">
		<span class="text-emerald-600">Weinig mensen</span>
		<span class="text-violet-600">Heel veel mensen</span>
	</div>
</div>
