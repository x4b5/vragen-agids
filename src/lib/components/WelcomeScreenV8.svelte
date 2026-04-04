<script lang="ts">
	import { startReviewV8 } from '$lib/stores/game-v8.svelte';
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-6">Vragenlijst Review</h1>

		<p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
			Bekijk alle vragen uit versie 1 t/m 7, gegroepeerd per thema.
		</p>
		<p class="text-base text-gray-500 leading-relaxed mb-10">
			Vragen die hetzelfde zijn staan 1 keer. Vergelijkbare vragen staan bij elkaar.
			Geef per vraag aan of je het een <strong>goede vraag</strong> vindt.
		</p>

		<button
			onclick={startReviewV8}
			class="rounded-xl bg-teal-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-teal-700"
		>
			Start review
		</button>
	</div>
</main>
