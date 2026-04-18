<script lang="ts">
	import {
		getGameStateV10,
		rateQuestionV10,
		nextQuestionV10,
		prevQuestionV10,
		submitAllV10
	} from '$lib/stores/game-v10.svelte';
	import WelcomeScreenV10 from '$lib/components/WelcomeScreenV10.svelte';
	import QuestionCardV10 from '$lib/components/QuestionCardV10.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import PhaseHeader from '$lib/components/PhaseHeader.svelte';
	import DoneScreenV10 from '$lib/components/DoneScreenV10.svelte';

	const game = getGameStateV10();

	function handleRate(questionId: string, stars: number) {
		rateQuestionV10(questionId, stars);
	}

	async function handleNext() {
		if (game.isLastQuestion) {
			await submitAllV10();
		} else {
			nextQuestionV10();
		}
	}

	function handlePrev() {
		prevQuestionV10();
	}
</script>

{#if game.phase === 'welcome'}
	<WelcomeScreenV10 />
{:else if game.phase === 'questionnaire'}
	<main class="min-h-svh flex flex-col px-5 py-6 sm:py-10">
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
{:else if game.phase === 'done'}
	<DoneScreenV10 />
{/if}
