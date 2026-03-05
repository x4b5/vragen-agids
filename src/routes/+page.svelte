<script lang="ts">
  import { getGameState, rateQuestion, nextQuestion, prevQuestion, submitAll } from "$lib/stores/game.svelte";
  import LoginScreen from "$lib/components/LoginScreen.svelte";
  import WelcomeScreen from "$lib/components/WelcomeScreen.svelte";
  import QuestionCard from "$lib/components/QuestionCard.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import PhaseHeader from "$lib/components/PhaseHeader.svelte";
  import DoneScreen from "$lib/components/DoneScreen.svelte";

  const game = getGameState();

  function handleRate(questionId: string, rating: 'skip' | 'important', selectedOptions?: string[], remark?: string) {
    rateQuestion(questionId, rating, selectedOptions, remark);
  }

  async function handleNext() {
    if (game.isLastQuestion) {
      await submitAll();
    } else {
      nextQuestion();
    }
  }

  function handlePrev() {
    prevQuestion();
  }
</script>

{#if game.phase === "login"}
  <LoginScreen />
{:else if game.phase === "welcome"}
  <WelcomeScreen />
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
          <QuestionCard
            question={game.currentQuestion}
            answer={game.answers.get(game.currentQuestion.id)}
            onrate={handleRate}
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
  <DoneScreen />
{/if}
