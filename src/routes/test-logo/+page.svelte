<script>
  import CursiveA from "$lib/components/CursiveA.svelte";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Arizonia&family=Dancing+Script:wght@700&family=Grand+Hotel&family=Great+Vibes&family=Parisienne&family=Pinyon+Script&family=Rochester&family=Rouge+Script&family=Sacramento&display=swap");
  </style>
</svelte:head>

<div class="min-h-screen bg-[#FDFBF7] p-8 text-black">
  <h1 class="text-2xl font-bold mb-8 font-sans">Logo "A" Replicatie Tests</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- SVG Recreatie -->
    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        SVG Recreatie (Handmatig getekend)
      </h2>
      <div class="flex items-end">
        <CursiveA class="w-24 h-24 text-black -mr-1" />
        <span class="text-7xl leading-none font-serif mb-2">r</span>
      </div>
    </div>

    <!-- Font Tests -->
    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Arizonia
      </h2>
      <div style="font-family: 'Arizonia'" class="text-8xl">Ar</div>
    </div>

    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Alex Brush
      </h2>
      <div style="font-family: 'Alex Brush'" class="text-8xl">Ar</div>
    </div>

    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Allura
      </h2>
      <div style="font-family: 'Allura'" class="text-8xl">Ar</div>
    </div>

    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Great Vibes
      </h2>
      <div style="font-family: 'Great Vibes'" class="text-8xl">Ar</div>
    </div>

    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Parisienne
      </h2>
      <div style="font-family: 'Parisienne'" class="text-8xl">Ar</div>
    </div>

    <div
      class="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <h2 class="text-sm text-gray-400 font-sans mb-4 uppercase tracking-wide">
        Font: Grand Hotel
      </h2>
      <div style="font-family: 'Grand Hotel'" class="text-8xl">Ar</div>
    </div>
  </div>
</div>
