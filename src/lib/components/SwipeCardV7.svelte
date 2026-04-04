<script lang="ts">
	import type { V7Question } from '$lib/data/questions-v7';
	import type { SwipeDirection } from '$lib/stores/game-v7.svelte';

	let {
		question,
		answer,
		swipeDirection,
		questionIndex,
		totalQuestions,
		onselect,
		onswipeend,
		onback,
		isFirst,
		isLast,
		onsubmit
	}: {
		question: V7Question;
		answer: string | undefined;
		swipeDirection: SwipeDirection;
		questionIndex: number;
		totalQuestions: number;
		onselect: (questionId: string, value: string) => void;
		onswipeend: () => void;
		onback: () => void;
		isFirst: boolean;
		isLast: boolean;
		onsubmit: () => void;
	} = $props();

	const optionColors = [
		'bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700',
		'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700',
		'bg-amber-500 hover:bg-amber-600 active:bg-amber-700'
	];

	let animating = $state(false);
	let cardEl: HTMLDivElement | undefined = $state();

	// Touch/drag state
	let dragX = $state(0);
	let dragging = $state(false);
	let startX = 0;

	function handleSelect(value: string) {
		if (animating) return;

		if (isLast) {
			onselect(question.id, value);
			onsubmit();
			return;
		}

		animating = true;
		onselect(question.id, value);
	}

	$effect(() => {
		if (swipeDirection !== 'none' && !dragging) {
			animating = true;
		}
	});

	function handleTransitionEnd() {
		if (animating) {
			animating = false;
			dragX = 0;
			onswipeend();
		}
	}

	// Touch handlers for manual swipe-back gesture
	function handleTouchStart(e: TouchEvent) {
		if (animating) return;
		startX = e.touches[0].clientX;
		dragging = true;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!dragging || animating) return;
		const diff = e.touches[0].clientX - startX;
		// Only allow drag to the right (go back)
		if (diff > 0 && !isFirst) {
			dragX = diff;
		}
	}

	function handleTouchEnd() {
		if (!dragging) return;
		dragging = false;
		if (dragX > 100 && !isFirst) {
			onback();
		}
		dragX = 0;
	}

	// Mouse drag handlers
	function handleMouseDown(e: MouseEvent) {
		if (animating) return;
		startX = e.clientX;
		dragging = true;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!dragging || animating) return;
		const diff = e.clientX - startX;
		if (diff > 0 && !isFirst) {
			dragX = diff;
		}
	}

	function handleMouseUp() {
		if (!dragging) return;
		dragging = false;
		if (dragX > 100 && !isFirst) {
			onback();
		}
		dragX = 0;
	}

	let translateX = $derived.by(() => {
		if (dragging && dragX > 0) return dragX;
		if (swipeDirection === 'right') return 500;
		if (swipeDirection === 'left') return -500;
		return 0;
	});

	let rotation = $derived.by(() => {
		if (dragging && dragX > 0) return dragX * 0.05;
		if (swipeDirection === 'right') return 15;
		if (swipeDirection === 'left') return -15;
		return 0;
	});

	let opacity = $derived.by(() => {
		if (swipeDirection !== 'none') return 0;
		if (dragging && dragX > 80) return 1 - (dragX - 80) / 200;
		return 1;
	});
</script>

<svelte:window
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
/>

<div class="w-full max-w-md mx-auto select-none">
	<!-- Card stack visual (background cards) -->
	<div class="relative">
		<!-- Shadow card 2 (deepest) -->
		{#if questionIndex < totalQuestions - 2}
			<div
				class="absolute inset-0 rounded-3xl bg-white border border-gray-200 shadow-sm"
				style="transform: scale(0.92) translateY(16px); opacity: 0.5;"
			></div>
		{/if}

		<!-- Shadow card 1 -->
		{#if questionIndex < totalQuestions - 1}
			<div
				class="absolute inset-0 rounded-3xl bg-white border border-gray-200 shadow-md"
				style="transform: scale(0.96) translateY(8px); opacity: 0.7;"
			></div>
		{/if}

		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- Active card -->
		<div
			bind:this={cardEl}
			class="relative rounded-3xl bg-white border-2 border-gray-100 shadow-xl p-6 sm:p-8 cursor-grab active:cursor-grabbing"
			style="transform: translateX({translateX}px) rotate({rotation}deg); opacity: {opacity}; transition: {dragging ? 'none' : 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease'};"
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
			onmousedown={handleMouseDown}
			ontransitionend={handleTransitionEnd}
			role="group"
			aria-label="Vraag {questionIndex + 1} van {totalQuestions}"
		>
			<!-- Question number badge -->
			<div class="flex justify-center mb-5">
				<span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
					{questionIndex + 1} / {totalQuestions}
				</span>
			</div>

			<!-- Question text -->
			<h2 class="text-xl sm:text-2xl font-bold text-gray-900 text-center leading-snug mb-8">
				{question.text}
			</h2>

			<!-- Answer options -->
			<div class="flex flex-col gap-3">
				{#each question.options as option, i}
					{@const selected = answer === option.value}
					<button
						type="button"
						onclick={() => handleSelect(option.value)}
						disabled={animating}
						class="w-full rounded-2xl px-5 py-4 text-left transition-all duration-150
							{selected
								? 'bg-indigo-500 text-white shadow-lg scale-[1.02]'
								: `${optionColors[i]} text-white shadow-md`}
							disabled:opacity-60 active:scale-[0.98] cursor-pointer"
					>
						<span class="text-sm sm:text-base font-semibold leading-snug">
							{option.label}
						</span>
					</button>
				{/each}
			</div>

			<!-- Swipe hint -->
			{#if !isFirst}
				<p class="text-center text-xs text-gray-300 mt-6">
					Swipe naar rechts om terug te gaan
				</p>
			{/if}
		</div>
	</div>

	<!-- Back button -->
	<div class="mt-5 flex justify-center">
		<button
			onclick={onback}
			disabled={isFirst || animating}
			class="cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-0 disabled:cursor-default"
		>
			Vorige vraag
		</button>
	</div>
</div>
