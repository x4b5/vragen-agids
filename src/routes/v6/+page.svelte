<script lang="ts">
  import { getGameStateV6, answerQuestionV6, nextQuestionV6, prevQuestionV6, submitAllV6 } from "$lib/stores/game-v6.svelte";
  import WelcomeScreenV6 from "$lib/components/WelcomeScreenV6.svelte";
  import QuestionCardV6 from "$lib/components/QuestionCardV6.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import PhaseHeader from "$lib/components/PhaseHeader.svelte";
  import DoneScreenV6 from "$lib/components/DoneScreenV6.svelte";

  const game = getGameStateV6();

  function handleAnswer(questionId: string, value: string) {
    answerQuestionV6(questionId, value);
  }

  async function handleNext() {
    if (game.isLastQuestion) {
      await submitAllV6();
    } else {
      nextQuestionV6();
    }
  }

  function handlePrev() {
    prevQuestionV6();
  }
</script>

{#if game.phase === "welcome"}
  <WelcomeScreenV6 />
{:else if game.phase === "questionnaire"}
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
          <QuestionCardV6
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
{:else if game.phase === "done"}
  <DoneScreenV6 />
{/if}
