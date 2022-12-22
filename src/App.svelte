<script lang="ts">


    import RoiCalculator from './components/RoiCalculator.svelte';
	import Tailwindcss from './components/Tailwindcss.svelte';
	export let name: string;
</script>
<style>
	.custom-style {
		@apply italic;
	}
</style>
<Tailwindcss />
<main class="font flex flex-col items-center justify-center min-h-screen p-4 mx-auto align-center">
	

	<RoiCalculator />
</main>