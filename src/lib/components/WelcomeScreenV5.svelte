<script lang="ts">
	import { startV5 } from '$lib/stores/game-v5.svelte';
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-6">Welke baan past bij jou?</h1>

		<p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
			Beantwoord een paar vragen over wat je leuk vindt.
		</p>
		<p class="text-base text-gray-500 leading-relaxed mb-10">
			Schuif de balkjes naar wat bij jou past.
			Daarna zoeken wij banen die bij jou passen.
		</p>

		<button
			onclick={startV5}
			class="rounded-xl bg-indigo-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-indigo-700"
		>
			Start
		</button>
	</div>
</main>
