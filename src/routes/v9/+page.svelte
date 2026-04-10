<script lang="ts">
	import {
		getGameStateV9,
		answerQuestionV9,
		nextQuestionV9,
		prevQuestionV9,
		submitAllV9
	} from '$lib/stores/game-v9.svelte';
	import WelcomeScreenV9 from '$lib/components/WelcomeScreenV9.svelte';
	import QuestionCardV2 from '$lib/components/QuestionCardV2.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import PhaseHeader from '$lib/components/PhaseHeader.svelte';
	import DoneScreenV9 from '$lib/components/DoneScreenV9.svelte';

	const game = getGameStateV9();

	function handleAnswer(questionId: string, value: string) {
		answerQuestionV9(questionId, value);
	}

	async function handleNext() {
		if (game.isLastQuestion) {
			await submitAllV9();
		} else {
			nextQuestionV9();
		}
	}

	function handlePrev() {
		prevQuestionV9();
	}
</script>

{#if game.phase === 'welcome'}
	<WelcomeScreenV9 />
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
			<PhaseHeader phase={game.currentPhase} />

			{#key game.currentQuestionIndex}
				<div class="w-full animate-fade-in">
					<QuestionCardV2
						question={game.currentQuestion}
						answer={game.answers.get(game.currentQuestion.id)}
						onanswer={handleAnswer}
						onnext={handleNext}
						onprev={handlePrev}
						isFirst={game.isFirstQuestion}
						isLast={game.isLastQuestion}
					/>
				</div>
			{/key}
		</div>
	</main>
{:else if game.phase === 'done'}
	<DoneScreenV9 />
{/if}
