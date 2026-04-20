<script lang="ts">
  const versions = [
    { href: '/v9', label: 'V9', desc: '20 vragen — definitieve set met multi-select sectoren', color: 'bg-indigo-50 border-indigo-300 text-indigo-800 hover:bg-indigo-100' },
    { href: '/v8', label: 'V8', desc: 'Review — alle vragen V1-V7, selecteer de beste', color: 'bg-teal-50 border-teal-300 text-teal-800 hover:bg-teal-100' },
    { href: '/v7', label: 'V7', desc: '20 vragen — swipe-stijl kaarten (Tinder UX)', color: 'bg-pink-50 border-pink-300 text-pink-800 hover:bg-pink-100' },
    { href: '/v6', label: 'V6', desc: '20 vragen — visuele kaarten met foto\'s', color: 'bg-rose-50 border-rose-300 text-rose-800 hover:bg-rose-100' },
    { href: '/v5', label: 'V5', desc: 'Visuele filters — AI-gegenereerde beroepssuggesties', color: 'bg-violet-50 border-violet-300 text-violet-800 hover:bg-violet-100' },
    { href: '/v4', label: 'V4', desc: '20 vragen — eenvoudig taalgebruik', color: 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100' },
    { href: '/v3', label: 'V3', desc: '20 vragen — formeel taalgebruik', color: 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100' },
    { href: '/v2', label: 'V2', desc: '38 vragen — gebalanceerd', color: 'bg-sky-50 border-sky-300 text-sky-800 hover:bg-sky-100' },
    { href: '/v1', label: 'V1', desc: '41 vragen — uitgebreid, met sliders en multi-select', color: 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100' },
  ];
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-10">
  <div class="w-full max-w-sm md:max-w-2xl mx-auto">
    <a href="/" class="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6 inline-block">&larr; Terug naar hoofdpagina</a>

    <h1 class="text-3xl font-bold text-gray-900 mb-2">Eerdere versies</h1>
    <p class="text-base text-gray-500 mb-8">
      Deze versies zijn alleen bedoeld voor intern gebruik en testen.
    </p>

    <a
      href="/skizo"
      class="rounded-xl border-2 border-indigo-300 bg-indigo-50 px-6 py-5 transition-all block hover:bg-indigo-100 text-indigo-800 mb-6"
    >
      <span class="block text-xl font-bold">Skizo Agent</span>
      <span class="block text-sm mt-1 opacity-75">Laat AI de vragenlijst invullen vanuit een persoonlijkheid</span>
    </a>

    <p class="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Vragenlijst versies</p>

    <div class="flex flex-col gap-3">
      {#each versions as v}
        <a
          href={v.href}
          class="rounded-xl border-2 px-5 py-4 transition-all block {v.color}"
        >
          <span class="block text-lg font-bold">{v.label}</span>
          <span class="block text-sm mt-0.5 opacity-75">{v.desc}</span>
        </a>
      {/each}
    </div>
  </div>
</main>
