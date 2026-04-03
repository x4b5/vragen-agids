<script lang="ts">
	let { value = $bindable(0.5) }: { value: number } = $props();
</script>

<div class="flex flex-col items-center gap-6">
	<div class="relative w-72 h-44 flex items-center justify-center">
		<svg viewBox="0 0 240 120" class="w-full h-full">
			<!-- Hanger bar -->
			<line x1="40" y1="15" x2="200" y2="15" stroke="#94a3b8" stroke-width="3" />

			<!-- Casual outfit (left) -->
			<g opacity={1 - value * 0.6} class="transition-opacity duration-300">
				<!-- T-shirt -->
				<path d="M60,25 L50,35 L55,37 L55,65 L85,65 L85,37 L90,35 L80,25 L75,30 L65,30 Z"
					fill="#f97316" stroke="#ea580c" stroke-width="1.5" />
				<!-- Jeans -->
				<path d="M57,67 L57,100 L67,100 L70,75 L73,100 L83,100 L83,67 Z"
					fill="#3b82f6" stroke="#2563eb" stroke-width="1.5" />
				<!-- Boot -->
				<rect x="55" y="100" width="14" height="8" rx="2" fill="#78350f" />
				<rect x="71" y="100" width="14" height="8" rx="2" fill="#78350f" />
			</g>

			<!-- Business outfit (right) -->
			<g opacity={0.4 + value * 0.6} class="transition-opacity duration-300">
				<!-- Jacket -->
				<path d="M155,25 L145,35 L150,37 L150,70 L180,70 L180,37 L185,35 L175,25 L170,30 L160,30 Z"
					fill="#1e293b" stroke="#0f172a" stroke-width="1.5" />
				<!-- Tie -->
				<polygon points="165,30 163,50 165,52 167,50" fill="#dc2626" />
				<!-- Shirt collar -->
				<path d="M160,25 L163,32 L165,28 L167,32 L170,25" fill="white" stroke="#e2e8f0" stroke-width="0.5" />
				<!-- Trousers -->
				<path d="M152,72 L152,100 L162,100 L165,80 L168,100 L178,100 L178,72 Z"
					fill="#334155" stroke="#1e293b" stroke-width="1.5" />
				<!-- Shoes -->
				<rect x="150" y="100" width="14" height="6" rx="2" fill="#1e293b" />
				<rect x="166" y="100" width="14" height="6" rx="2" fill="#1e293b" />
			</g>

			<!-- Center arrow indicator -->
			<polygon
				points="120,55 115,65 125,65"
				fill="#6366f1"
				transform="translate({(value - 0.5) * 60}, 0)"
				class="transition-transform duration-300"
			/>
		</svg>
	</div>

	<input
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value
		class="w-full max-w-xs h-3 rounded-full appearance-none cursor-pointer
			bg-gradient-to-r from-orange-300 to-slate-400"
	/>

	<div class="flex justify-between w-full max-w-xs text-sm font-medium">
		<span class="text-orange-600">Gewone kleren</span>
		<span class="text-slate-600">Nette kleren</span>
	</div>
</div>
