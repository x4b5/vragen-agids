<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getGameStateV10,
		startQuestionnaireV10,
		rateQuestionV10,
		nextQuestionV10,
		prevQuestionV10,
		goToSituationV10
	} from '$lib/stores/game-v10.svelte';
	import QuestionCardV10 from '$lib/components/QuestionCardV10.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import PhaseHeader from '$lib/components/PhaseHeader.svelte';
	import SituationScreenV10 from '$lib/components/SituationScreenV10.svelte';
	import ConversionScreenV10 from '$lib/components/ConversionScreenV10.svelte';
	const game = getGameStateV10();

	// Start direct met de vragenlijst (de welkomstpagina is de root-route /).
	onMount(() => {
		startQuestionnaireV10();
	});

	function handleRate(questionId: string, stars: number) {
		rateQuestionV10(questionId, stars);
	}

	function handleNext() {
		if (game.isLastQuestion) {
			goToSituationV10();
		} else {
			nextQuestionV10();
		}
	}

	function handlePrev() {
		prevQuestionV10();
	}
</script>

{#if game.phase === 'situation'}
	<SituationScreenV10 />
{:else if game.phase === 'questionnaire'}
	<main class="flex-1 flex flex-col px-5 py-6 sm:py-10">
		<div class="w-full max-w-lg mx-auto">
			<ProgressBar
				progress={game.progress}
				current={game.currentQuestionIndex}
				total={game.totalQuestions}
			/>
		</div>

		<div class="flex-1 flex flex-col items-center justify-center py-8">
			<PhaseHeader phase={game.currentTheme} />

			{#key game.currentQuestionIndex}
				<div class="w-full animate-fade-in">
					<QuestionCardV10
						question={game.currentQuestion}
						rating={game.answers.get(game.currentQuestion.id) ?? 0}
						onrate={handleRate}
						onnext={handleNext}
						onprev={handlePrev}
						isFirst={game.isFirstQuestion}
					/>
				</div>
			{/key}
		</div>
	</main>
{:else if game.phase === 'conversion'}
	<ConversionScreenV10 />
{/if}
