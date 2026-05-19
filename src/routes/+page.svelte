<script lang="ts">
  import PatternBackground from '$lib/components/PatternBackground.svelte';
</script>

<PatternBackground patternIndex={3}>
  <main class="min-h-svh flex items-center justify-center px-5 py-10">
    <div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-950 mb-8">Hoi</h1>

      <p class="text-lg md:text-xl text-gray-800 leading-loose mb-5">
        We willen weten wat mensen belangrijk vinden in (het zoeken naar) werk.
        We willen jou vragen om ons te helpen hier achter te komen.
      </p>

      <p class="text-lg md:text-xl text-gray-800 leading-loose mb-12">
        Je krijgt zo meteen 36 stellingen.
        Per stelling geef je met sterren aan hoe belangrijk deze voor jou is:
        van <strong>1 ster</strong> (niet belangrijk) tot <strong>5 sterren</strong> (heel belangrijk).
      </p>

      <a
        href="/v10"
        class="btn-amg inline-block rounded-xl px-12 py-4 text-lg font-semibold text-white shadow-lg
          transition-all active:scale-[0.97]"
      >
        Start de vragenlijst
      </a>
    </div>
  </main>
</PatternBackground>
