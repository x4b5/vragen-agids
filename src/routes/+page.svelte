<script lang="ts">
  import PatternBackground from '$lib/components/PatternBackground.svelte';
</script>

<PatternBackground patternIndex={3}>
  <main class="min-h-svh flex items-center justify-center px-5 py-10">
    <div class="w-full max-w-sm md:max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-950 mb-8">Hoi</h1>

      <p class="text-lg md:text-xl text-gray-800 leading-loose mb-5">
        Vaak krijg je te horen wat je zou moeten doen — solliciteer hier, volg die cursus.
        Maar zelden vraagt iemand eerst wat jíj eigenlijk wilt.
      </p>

      <p class="text-lg md:text-xl text-gray-800 leading-loose mb-12">
        Wij beginnen bij jou. Wat vind jij belangrijk?
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
