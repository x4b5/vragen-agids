<script lang="ts">
	import { getSkizoState } from '$lib/stores/skizo.svelte';
	import SkizoInput from '$lib/components/SkizoInput.svelte';
	import SkizoResult from '$lib/components/SkizoResult.svelte';

	const state = getSkizoState();
</script>

{#if state.phase === 'input'}
	<SkizoInput />
{:else if state.phase === 'processing'}
	<main class="min-h-svh flex items-center justify-center px-5">
		<div class="text-center">
			<div
				class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100"
			>
				<svg class="h-10 w-10 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
					/>
				</svg>
			</div>
			<h2 class="text-2xl font-bold text-gray-900 mb-2">Agent denkt na...</h2>
			<p class="text-gray-500">De AI beantwoordt de vragenlijst</p>
		</div>
	</main>
{:else if state.phase === 'result'}
	<SkizoResult />
{/if}
