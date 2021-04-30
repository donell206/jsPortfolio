<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: rgba(0, 0, 0, 0.048);
		padding: 2em;
		margin: 0 auto;
		
		box-sizing: border-box;
	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>