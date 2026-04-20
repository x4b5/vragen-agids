<script lang="ts">
	let { phase }: { phase: string } = $props();
</script>

<div class="text-center mb-2">
	<span
		class="inline-block rounded-full bg-indigo-50 px-5 py-2 text-lg font-semibold text-indigo-700 tracking-wide"
	>
		{phase}
	</span>
</div>
