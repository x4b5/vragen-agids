<script lang="ts">
  const versions = [
    { href: '/v10', label: 'V10', desc: '32 vragen — filterbaar, 4 opties, toegankelijk voor laaggeletterden', color: 'bg-violet-50 border-violet-300 text-violet-800 hover:bg-violet-100' },
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
    <h1 class="text-4xl font-bold text-gray-900 mb-3 text-center">Vragen Agids</h1>
    <p class="text-lg text-gray-500 mb-10 text-center">
      Kies een versie van de vragenlijst
    </p>

    <!-- V10 uitgelicht -->
    <a
      href="/v10"
      class="block rounded-2xl border-2 border-violet-400 bg-violet-600 px-8 py-8 mb-8 transition-all hover:bg-violet-700 shadow-lg hover:shadow-xl"
    >
      <span class="inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white uppercase tracking-wider mb-3">Nieuwste</span>
      <span class="block text-2xl font-bold text-white">V10 — Filterbare vragenlijst</span>
      <span class="block text-base mt-2 text-violet-100">32 vragen met 4 opties, filterbaar en toegankelijk voor laaggeletterden</span>
    </a>

    <p class="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Eerdere versies</p>

    <div class="flex flex-col gap-3 mb-10">
      {#each versions.slice(1) as v}
        <a
          href={v.href}
          class="rounded-xl border-2 px-5 py-4 transition-all block {v.color}"
        >
          <span class="block text-lg font-bold">{v.label}</span>
          <span class="block text-sm mt-0.5 opacity-75">{v.desc}</span>
        </a>
      {/each}
    </div>

    <div class="border-t border-gray-200 pt-6">
      <a
        href="/skizo"
        class="rounded-xl border-2 border-indigo-300 bg-indigo-50 px-6 py-5 transition-all block hover:bg-indigo-100 text-indigo-800"
      >
        <span class="block text-xl font-bold">Skizo Agent</span>
        <span class="block text-sm mt-1 opacity-75">Laat AI de vragenlijst invullen vanuit een persoonlijkheid</span>
      </a>
    </div>
  </div>
</main>
