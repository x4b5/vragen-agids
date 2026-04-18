<script lang="ts">
	import { startQuestionnaireV10 } from '$lib/stores/game-v10.svelte';
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-6">Welkom</h1>

		<p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
			We willen weten wat mensen belangrijk vinden in het zoeken naar werk.
			We willen jou vragen om ons te helpen hier achter te komen.
		</p>

		<p class="text-base md:text-lg text-gray-500 leading-relaxed mb-10">
			Stel, je zoekt een baan. Je krijgt 32 korte vragen.
			Per vraag kies je: <strong>Maakt niet uit</strong>,
			<strong>Wil ik weten</strong> of <strong>Moet ik weten</strong>.
		</p>

		<button
			onclick={startQuestionnaireV10}
			class="cursor-pointer rounded-xl bg-indigo-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-indigo-700"
		>
			Start
		</button>
	</div>
</main>
