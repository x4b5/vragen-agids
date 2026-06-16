<script lang="ts">
	import { getGameStateV10 } from '$lib/stores/game-v10.svelte';
	import { reflectionsV10 } from '$lib/data/reflections-v10';

	const WHATSAPP_NUMBER = '31634369257';
	const WHATSAPP_MESSAGE =
		'Hoi! Ik heb de vragenlijst ingevuld en wil graag in gesprek over mijn mogelijkheden.';
	const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

	const game = getGameStateV10();

	const reflection = $derived(game.reflection);

	function reflectionFor(questionId: string, statement: string): string {
		const jeVorm = reflectionsV10[questionId];
		return jeVorm
			? `Je vindt het belangrijk dat ${jeVorm}`
			: `Ik vind het belangrijk dat ${statement}`;
	}
</script>

<main class="min-h-svh flex items-center justify-center px-5 pt-10 pb-28">
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
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-10 py-4 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-[#22c35e]"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
				<path
					d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.358.101 11.892c0 2.096.546 4.142 1.588 5.945L0 24l6.304-1.654a11.881 11.881 0 005.683 1.448h.005c6.582 0 11.94-5.358 11.943-11.893a11.821 11.821 0 00-3.498-8.452"
				/>
			</svg>
			Ja, ik wil reageren via WhatsApp
		</a>
	</div>
</main>
