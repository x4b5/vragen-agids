<script lang="ts">
	import { startQuestionnaireV10 } from '$lib/stores/game-v10.svelte';
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
		<h1 class="text-5xl font-bold text-gray-950 mb-8">Welkom</h1>

		<p class="text-xl md:text-2xl text-gray-800 leading-loose mb-5">
			We willen weten wat mensen belangrijk vinden in (het zoeken naar) werk.
			We willen jou vragen om ons te helpen hier achter te komen.
		</p>

		<p class="text-xl md:text-2xl text-gray-800 leading-loose mb-12">
			Stel, je zoekt een baan. Je krijgt 32 korte stellingen.
			Per stelling geef je met sterren aan hoe belangrijk het voor jou is:
			van <strong>1 ster</strong> (niet belangrijk) tot <strong>5 sterren</strong> (heel belangrijk).
		</p>

		<button
			onclick={startQuestionnaireV10}
			class="cursor-pointer rounded-xl bg-indigo-600 px-12 py-4 text-xl font-semibold text-white shadow-lg
				transition-all active:scale-[0.97] hover:bg-indigo-700"
		>
			Start
		</button>
	</div>
</main>
