<script lang="ts">
	import {
		getGameStateV7,
		answerAndAdvanceV7,
		onSwipeAnimationEnd,
		goBackV7,
		submitAllV7
	} from '$lib/stores/game-v7.svelte';
	import WelcomeScreenV7 from '$lib/components/WelcomeScreenV7.svelte';
	import SwipeCardV7 from '$lib/components/SwipeCardV7.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import DoneScreenV7 from '$lib/components/DoneScreenV7.svelte';

	const game = getGameStateV7();

	function handleSelect(questionId: string, value: string) {
		answerAndAdvanceV7(questionId, value);
	}

	function handleSwipeEnd() {
		onSwipeAnimationEnd();
	}

	function handleBack() {
		goBackV7();
	}

	async function handleSubmit() {
		await submitAllV7();
	}
</script>

{#if game.phase === 'welcome'}
	<WelcomeScreenV7 />
{:else if game.phase === 'questionnaire'}
	<main class="min-h-svh flex flex-col px-5 py-6 sm:py-10">
		<div class="w-full max-w-md mx-auto">
			<ProgressBar
				progress={game.progress}
				current={game.currentQuestionIndex}
				total={game.totalQuestions}
			/>
		</div>

		<div class="flex-1 flex items-center justify-center py-8">
			{#key game.swipeDirection === 'none' ? game.currentQuestionIndex : -1}
				<SwipeCardV7
					question={game.currentQuestion}
					answer={game.answers.get(game.currentQuestion.id)}
					swipeDirection={game.swipeDirection}
					questionIndex={game.currentQuestionIndex}
					totalQuestions={game.totalQuestions}
					onselect={handleSelect}
					onswipeend={handleSwipeEnd}
					onback={handleBack}
					isFirst={game.isFirstQuestion}
					isLast={game.isLastQuestion}
					onsubmit={handleSubmit}
				/>
			{/key}
		</div>
	</main>
{:else if game.phase === 'done'}
	<DoneScreenV7 />
{/if}
