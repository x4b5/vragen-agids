<script lang="ts">
	import {
		getSkizoState,
		setVersion,
		setPersonality,
		setDisplayMode,
		startAgent
	} from '$lib/stores/skizo.svelte';
	import type { SkizoVersion, SkizoDisplayMode } from '$lib/stores/skizo.svelte';

	const state = getSkizoState();

	function handleVersionChange(version: SkizoVersion) {
		setVersion(version);
	}

	function handlePersonalityChange(id: string) {
		setPersonality(id);
	}

	function handleModeChange(mode: SkizoDisplayMode) {
		setDisplayMode(mode);
	}

	function handleStart() {
		startAgent();
	}

	const versionOptions: { value: SkizoVersion; label: string; desc: string }[] = [
		{ value: 'v10', label: 'V10', desc: `${32} vragen — filterbaar` },
		{ value: 'v4', label: 'V4', desc: `${20} vragen — eenvoudig` },
		{ value: 'v3', label: 'V3', desc: `${20} vragen — formeel` },
		{ value: 'v2', label: 'V2', desc: `${38} vragen — gebalanceerd` },
		{ value: 'v1', label: 'V1', desc: `${41} vragen — uitgebreid` }
	];

	const modeOptions: { value: SkizoDisplayMode; label: string; desc: string }[] = [
		{ value: 'live', label: 'Live', desc: 'Antwoorden verschijnen een voor een' },
		{ value: 'direct', label: 'Direct', desc: 'Alle antwoorden in een keer' }
	];
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto">
		<h1 class="text-4xl font-bold text-gray-900 mb-2 text-center">Skizo Agent</h1>
		<p class="text-lg text-gray-500 mb-10 text-center">
			Laat AI de vragenlijst invullen vanuit een persoonlijkheid
		</p>

		<!-- Versie -->
		<div class="mb-8">
			<p class="text-sm font-semibold text-gray-700 mb-3">Vragenlijst versie</p>
			<div class="flex gap-3">
				{#each versionOptions as opt}
					<button
						type="button"
						onclick={() => handleVersionChange(opt.value)}
						class="flex-1 rounded-xl border-2 px-4 py-3 text-center transition-all cursor-pointer
							{state.selectedVersion === opt.value
							? 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-300'
							: 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}"
					>
						<span class="block text-lg font-bold">{opt.label}</span>
						<span class="block text-xs text-gray-500 mt-0.5">{opt.desc}</span>
					</button>
				{/each}
			</div>
		</div>

		<!-- Persoonlijkheid -->
		<div class="mb-8">
			<p class="text-sm font-semibold text-gray-700 mb-3">Persoonlijkheid</p>
			<div class="flex flex-col gap-3">
				{#each state.personalities as p}
					<button
						type="button"
						onclick={() => handlePersonalityChange(p.id)}
						class="rounded-xl border-2 px-5 py-3.5 text-left transition-all cursor-pointer
							{state.selectedPersonality === p.id
							? 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-300'
							: 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}"
					>
						<span class="block text-base font-semibold">{p.name}</span>
						<span class="block text-sm text-gray-500 mt-0.5">{p.description}</span>
					</button>
				{/each}
			</div>
		</div>

		<!-- Weergavemodus -->
		<div class="mb-10">
			<p class="text-sm font-semibold text-gray-700 mb-3">Weergave</p>
			<div class="flex gap-3">
				{#each modeOptions as opt}
					<button
						type="button"
						onclick={() => handleModeChange(opt.value)}
						class="flex-1 rounded-xl border-2 px-4 py-3 text-center transition-all cursor-pointer
							{state.displayMode === opt.value
							? 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-300'
							: 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}"
					>
						<span class="block text-base font-semibold">{opt.label}</span>
						<span class="block text-xs text-gray-500 mt-0.5">{opt.desc}</span>
					</button>
				{/each}
			</div>
		</div>

		<!-- Error -->
		{#if state.error}
			<div class="rounded-xl bg-red-50 border border-red-200 px-5 py-3 mb-6 text-red-700 text-sm">
				{state.error}
			</div>
		{/if}

		<!-- Start knop -->
		<button
			onclick={handleStart}
			class="w-full rounded-xl bg-indigo-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-indigo-700 cursor-pointer"
		>
			Start Agent
		</button>
	</div>
</main>
