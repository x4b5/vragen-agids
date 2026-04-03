<script lang="ts">
  import { getGameStateV2, answerQuestion, nextQuestionV2, prevQuestionV2, submitAllV2 } from "$lib/stores/game-v2.svelte";
  import WelcomeScreenV2 from "$lib/components/WelcomeScreenV2.svelte";
  import QuestionCardV2 from "$lib/components/QuestionCardV2.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import PhaseHeader from "$lib/components/PhaseHeader.svelte";
  import DoneScreenV2 from "$lib/components/DoneScreenV2.svelte";

  const game = getGameStateV2();

  function handleAnswer(questionId: string, value: string) {
    answerQuestion(questionId, value);
  }

  async function handleNext() {
    if (game.isLastQuestion) {
      await submitAllV2();
    } else {
      nextQuestionV2();
    }
  }

  function handlePrev() {
    prevQuestionV2();
  }
</script>

{#if game.phase === "welcome"}
  <WelcomeScreenV2 />
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
{:else if game.phase === "done"}
  <DoneScreenV2 />
{/if}
