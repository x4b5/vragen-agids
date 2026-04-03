<script lang="ts">
	let { value = $bindable(0.5) }: { value: number } = $props();
</script>

<div class="flex flex-col items-center gap-6 w-full">
	<div class="relative w-full max-w-sm h-48 flex justify-between items-center gap-4">
		<!-- Druk en levendig (Left) -->
		<div 
			class="flex flex-col gap-2 w-1/2 transition-all duration-300 origin-left"
			style="opacity: {1 - value * 0.7}; transform: scale({1 - value * 0.1});"
		>
			<img src="/images/bouwplaats.png" alt="Bouwplaats" class="w-full h-20 object-cover rounded-lg shadow-md grayscale-[{value * 100}%]" />
			<img src="/images/horeca.png" alt="Gezellige horeca" class="w-full h-20 object-cover rounded-lg shadow-md grayscale-[{value * 100}%]" />
		</div>

		<!-- Center indicator -->
		<div 
			class="absolute left-1/2 top-1/2 -ml-3 -mt-3 w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-300"
			style="transform: translateX({(value - 0.5) * 60}px)"
		>
			<div class="w-2 h-2 bg-white rounded-full"></div>
		</div>

		<!-- Rustig en stil (Right) -->
		<div 
			class="flex flex-col gap-2 w-1/2 transition-all duration-300 origin-right"
			style="opacity: {0.3 + value * 0.7}; transform: scale({0.9 + value * 0.1});"
		>
			<img src="/images/zorg.png" alt="Werk in de zorg" class="w-full h-20 object-cover rounded-lg shadow-md grayscale-[{(1 - value) * 100}%]" />
			<img src="/images/lab.png" alt="In lab" class="w-full h-20 object-cover rounded-lg shadow-md grayscale-[{(1 - value) * 100}%]" />
		</div>
	</div>

	<input
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value
		class="w-full max-w-xs h-3 rounded-full appearance-none cursor-pointer
			bg-gradient-to-r from-orange-300 to-cyan-300"
	/>

	<div class="flex justify-between w-full max-w-xs text-sm font-medium">
		<span class="text-orange-600">Druk en levendig</span>
		<span class="text-cyan-600">Rustig en stil</span>
	</div>
</div>
