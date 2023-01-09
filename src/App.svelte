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
<main class="flex-col items-center justify-center min-h-screen mx-auto md:flex font align-center">
	

	<RoiCalculator />
</main>