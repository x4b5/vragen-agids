<script lang="ts">
	let { phase }: { phase: string } = $props();
</script>

<div class="text-center mb-2">
	<span
		class="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600 tracking-wide"
	>
		{phase}
	</span>
</div>
