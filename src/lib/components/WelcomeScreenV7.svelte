<script lang="ts">
	import { startQuestionnaireV7 } from '$lib/stores/game-v7.svelte';
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-6">Swipe je werkprofiel</h1>

		<p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
			Beantwoord 20 korte vragen door op je antwoord te tikken.<br />
			De kaart swipet automatisch door naar de volgende vraag.
		</p>

		<button
			onclick={startQuestionnaireV7}
			class="rounded-xl bg-indigo-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-indigo-700"
		>
			Start
		</button>
	</div>
</main>
