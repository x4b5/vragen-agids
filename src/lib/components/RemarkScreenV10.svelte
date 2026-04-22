<script lang="ts">
	let {
		remark,
		onchange,
		onsubmit,
		onback
	}: {
		remark: string;
		onchange: (text: string) => void;
		onsubmit: () => void;
		onback: () => void;
	} = $props();
</script>

<main class="min-h-svh flex items-center justify-center px-5 py-6 sm:py-10">
	<div class="w-full max-w-lg text-center">
		<h1 class="text-3xl sm:text-4xl font-bold text-gray-950 mb-3">
			Bijna klaar!
		</h1>

		<p class="text-xl text-gray-700 mb-8">
			Heb je nog een opmerking of vraag? Laat het hieronder weten.
			Dit is niet verplicht.
		</p>

		<textarea
			class="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-lg text-gray-900
				placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200
				transition-colors resize-none"
			rows="4"
			placeholder="Typ hier je opmerking of vraag..."
			value={remark}
			oninput={(e) => onchange(e.currentTarget.value)}
		></textarea>

		<div class="flex items-center justify-between max-w-xs mx-auto mt-8">
			<button
				onclick={onback}
				class="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-700 transition-colors"
			>
				Terug
			</button>

			<button
				onclick={onsubmit}
				class="cursor-pointer rounded-xl bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-md
					transition-all hover:bg-indigo-700 active:scale-[0.97]"
			>
				Versturen
			</button>
		</div>
	</div>
</main>
