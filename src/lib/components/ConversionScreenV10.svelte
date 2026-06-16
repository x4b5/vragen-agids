<script lang="ts">
	import { getGameStateV10 } from '$lib/stores/game-v10.svelte';
	import { reflectionsV10 } from '$lib/data/reflections-v10';

	const MEER_INFO_URL = 'https://www.arbeidsmarktgids.nl/meer-info';
	const game = getGameStateV10();

	const reflection = $derived(game.reflection);

	function reflectionFor(questionId: string, statement: string): string {
		return reflectionsV10[questionId] ?? `Ik vind het belangrijk dat ${statement}`;
	}
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-10">
	<div class="w-full max-w-sm md:max-w-xl mx-auto text-center">
		{#if reflection.kind === 'all-important'}
			<h1 class="text-3xl md:text-4xl font-bold text-gray-950 mb-5">
				Je vindt eigenlijk alles belangrijk
			</h1>
			<p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-9">
				Bij bijna elke vraag gaf je aan dat het voor jou meetelt. Je wilt dus werk
				dat op veel punten goed zit.
			</p>
		{:else if reflection.kind === 'none-important'}
			<h1 class="text-3xl md:text-4xl font-bold text-gray-950 mb-5">
				Je vindt bijna niets echt belangrijk
			</h1>
			<p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-9">
				Bij de meeste vragen maakte het je niet zoveel uit. Misschien sta je overal
				voor open, of weet je nog niet goed wat je zoekt.
			</p>
		{:else}
			<h1 class="text-3xl md:text-4xl font-bold text-gray-950 mb-5">
				Je weet eigenlijk best goed wat je wilt, bijvoorbeeld:
			</h1>
			{#if reflection.themes.length > 0}
				<ul class="flex flex-col gap-3 text-left mt-7 mb-9">
					{#each reflection.themes as item (item.theme)}
						<li class="rounded-2xl bg-amg-beige/70 px-5 py-4">
							<p class="text-sm font-semibold uppercase tracking-wide text-amg-coral mb-1">
								{item.theme}
							</p>
							<p class="text-lg text-gray-900 leading-snug">
								{reflectionFor(item.questionId, item.statement)}
							</p>
						</li>
					{/each}
				</ul>
			{/if}
		{/if}

		{#if reflection.kind === 'none-important'}
			<p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
				En het goede nieuws? Een arbeidsmarktgids kan je helpen ontdekken wat wél bij
				je past.
			</p>
		{:else}
			<p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
				En het goede nieuws? Er zijn mogelijkheden die aansluiten bij jouw voorkeuren.
			</p>
		{/if}

		<p class="text-lg md:text-xl text-gray-800 leading-relaxed mb-9">
			We plannen graag een gratis gesprek voor je in met een
			<strong>arbeidsmarktgids</strong> die je daar meer over kan vertellen.
		</p>

		<a
			href={MEER_INFO_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="btn-amg inline-block rounded-xl px-10 py-4 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97]"
		>
			Ja, ik wil een gratis gesprek
		</a>
	</div>
</main>
