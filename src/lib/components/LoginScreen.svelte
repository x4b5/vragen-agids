<script lang="ts">
	import { login } from '$lib/stores/game.svelte';

	let password = $state('');
	let error = $state(false);
	let shaking = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		const success = login(password);
		if (!success) {
			error = true;
			shaking = true;
			setTimeout(() => (shaking = false), 500);
		}
	}
</script>

<main class="min-h-svh flex items-center justify-center px-5">
	<div class="w-full max-w-sm text-center">
		<div class="mb-10">
			<h1 class="text-4xl font-bold text-gray-900 mb-3">Agent Kompas</h1>
			<p class="text-lg text-gray-500">Voer het wachtwoord in om te beginnen</p>
		</div>

		<form onsubmit={handleSubmit} class="space-y-4">
			<div class={shaking ? 'animate-shake' : ''}>
				<input
					type="password"
					bind:value={password}
					placeholder="Wachtwoord"
					autocomplete="off"
					class="w-full rounded-xl border-2 px-4 py-3 text-center text-lg outline-none transition-colors
						{error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-indigo-500'}"
					onfocus={() => (error = false)}
				/>
				{#if error}
					<p class="mt-2 text-sm text-red-500">Onjuist wachtwoord</p>
				{/if}
			</div>

			<button
				type="submit"
				class="w-full rounded-xl bg-indigo-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg
					transition-all active:scale-[0.97] hover:bg-indigo-700 disabled:opacity-50"
				disabled={!password}
			>
				Start
			</button>
		</form>
	</div>
</main>
