<script lang="ts">
	let {
		value = $bindable(0.5),
		value2 = $bindable(0.5)
	}: { value: number; value2: number } = $props();

	let dragging = $state(false);
	let container: HTMLDivElement | undefined = $state();

	function updateFromPointer(e: PointerEvent) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
		const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
		value = x;
		value2 = y;
	}

	function onPointerDown(e: PointerEvent) {
		dragging = true;
		(e.target as HTMLElement).setPointerCapture(e.pointerId);
		updateFromPointer(e);
	}

	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;
		updateFromPointer(e);
	}

	function onPointerUp() {
		dragging = false;
	}

	const quadrantColors = [
		{ bg: 'rgba(249, 115, 22, 0.12)', border: '#f97316', icon: '#ea580c' },
		{ bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', icon: '#059669' },
		{ bg: 'rgba(99, 102, 241, 0.12)', border: '#6366f1', icon: '#4f46e5' },
		{ bg: 'rgba(239, 68, 68, 0.12)', border: '#ef4444', icon: '#dc2626' }
	];
</script>

<div class="flex flex-col items-center gap-4">
	<!-- Quadrant field -->
	<div
		bind:this={container}
		class="relative w-72 h-72 rounded-2xl border-2 border-gray-200 cursor-crosshair select-none touch-none overflow-hidden"
		role="slider"
		aria-label="Zingeving kiezer"
		aria-valuenow={Math.round(value * 100)}
		aria-valuemin={0}
		aria-valuemax={100}
		tabindex="0"
		onpointerdown={onPointerDown}
		onpointermove={onPointerMove}
		onpointerup={onPointerUp}
		onpointercancel={onPointerUp}
	>
		<!-- Quadrant backgrounds -->
		<div class="absolute inset-0 grid grid-cols-2 grid-rows-2">
			<!-- Top-left: Iets gebouwd -->
			<div class="flex items-center justify-center p-3 border-r border-b border-gray-200"
				style="background: {quadrantColors[0].bg}">
				<div class="text-center">
					<svg viewBox="0 0 32 32" class="w-8 h-8 mx-auto mb-1">
						<rect x="6" y="14" width="20" height="14" rx="2" fill={quadrantColors[0].icon} opacity="0.7" />
						<polygon points="16,4 6,14 26,14" fill={quadrantColors[0].icon} opacity="0.5" />
						<rect x="13" y="18" width="6" height="8" rx="1" fill="white" opacity="0.6" />
					</svg>
					<span class="text-xs font-semibold leading-tight block" style="color: {quadrantColors[0].icon}">
						Dat ik iets heb gemaakt
					</span>
				</div>
			</div>
			<!-- Top-right: Mensen geholpen -->
			<div class="flex items-center justify-center p-3 border-b border-gray-200"
				style="background: {quadrantColors[1].bg}">
				<div class="text-center">
					<svg viewBox="0 0 32 32" class="w-8 h-8 mx-auto mb-1">
						<path d="M16 6 C12 6, 8 10, 8 14 C8 20, 16 26, 16 26 C16 26, 24 20, 24 14 C24 10, 20 6, 16 6Z"
							fill={quadrantColors[1].icon} opacity="0.7" />
						<circle cx="16" cy="14" r="3" fill="white" opacity="0.6" />
					</svg>
					<span class="text-xs font-semibold leading-tight block" style="color: {quadrantColors[1].icon}">
						Dat ik mensen heb geholpen
					</span>
				</div>
			</div>
			<!-- Bottom-left: Nagedacht -->
			<div class="flex items-center justify-center p-3 border-r border-gray-200"
				style="background: {quadrantColors[2].bg}">
				<div class="text-center">
					<svg viewBox="0 0 32 32" class="w-8 h-8 mx-auto mb-1">
						<circle cx="16" cy="13" r="8" fill={quadrantColors[2].icon} opacity="0.5" />
						<path d="M12 21 L14 18 L18 18 L20 21 L22 28 L10 28Z" fill={quadrantColors[2].icon} opacity="0.7" />
						<circle cx="16" cy="11" r="2" fill="white" opacity="0.5" />
						<path d="M14 15 Q16 17 18 15" stroke="white" stroke-width="1" fill="none" opacity="0.6" />
					</svg>
					<span class="text-xs font-semibold leading-tight block" style="color: {quadrantColors[2].icon}">
						Dat ik een probleem heb opgelost
					</span>
				</div>
			</div>
			<!-- Bottom-right: Bewogen -->
			<div class="flex items-center justify-center p-3"
				style="background: {quadrantColors[3].bg}">
				<div class="text-center">
					<svg viewBox="0 0 32 32" class="w-8 h-8 mx-auto mb-1">
						<circle cx="16" cy="8" r="4" fill={quadrantColors[3].icon} opacity="0.7" />
						<line x1="16" y1="12" x2="16" y2="22" stroke={quadrantColors[3].icon} stroke-width="2.5" stroke-linecap="round" opacity="0.7" />
						<line x1="10" y1="16" x2="22" y2="16" stroke={quadrantColors[3].icon} stroke-width="2.5" stroke-linecap="round" opacity="0.7" />
						<line x1="13" y1="22" x2="10" y2="28" stroke={quadrantColors[3].icon} stroke-width="2.5" stroke-linecap="round" opacity="0.7" />
						<line x1="19" y1="22" x2="22" y2="28" stroke={quadrantColors[3].icon} stroke-width="2.5" stroke-linecap="round" opacity="0.7" />
					</svg>
					<span class="text-xs font-semibold leading-tight block" style="color: {quadrantColors[3].icon}">
						Dat ik niet meer naar de sportschool hoef
					</span>
				</div>
			</div>
		</div>

		<!-- Crosshair lines -->
		<div
			class="absolute w-px bg-gray-400 opacity-40 pointer-events-none"
			style="left: {value * 100}%; top: 0; height: 100%"
		></div>
		<div
			class="absolute h-px bg-gray-400 opacity-40 pointer-events-none"
			style="top: {value2 * 100}%; left: 0; width: 100%"
		></div>

		<!-- Draggable dot -->
		<div
			class="absolute w-7 h-7 rounded-full border-[3px] border-white shadow-lg pointer-events-none transition-transform duration-75
				{dragging ? 'scale-110' : ''}"
			style="
				left: {value * 100}%;
				top: {value2 * 100}%;
				transform: translate(-50%, -50%) {dragging ? 'scale(1.1)' : ''};
				background: conic-gradient(
					{quadrantColors[0].icon} 0deg,
					{quadrantColors[1].icon} 90deg,
					{quadrantColors[3].icon} 180deg,
					{quadrantColors[2].icon} 270deg,
					{quadrantColors[0].icon} 360deg
				);
			"
		></div>
	</div>

	<p class="text-sm text-gray-500 text-center">Sleep de stip naar wat bij jou past</p>
</div>
