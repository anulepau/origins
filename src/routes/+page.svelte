<script>
  import Artifact from '../components/Artifact.svelte';
	import Background from '../assets/background2.svg';
	import artifacts from '../data';
</script>

<div class='container'>
	{#each artifacts as artifact}
		<Artifact top={artifact.position.y} left={artifact.position.x} width={artifact.width} height={artifact.height} >
			<img class='svg-artifact' src={artifact.src} alt={artifact.alt}>
		</Artifact>
	{/each}
</div>

<img class='background' src={Background} alt='light blue sky with many white clouds'>

<style>
	.svg-artifact {
		position: absolute;
		pointer-events: none;
		width: 100%;
		height: 100%;
	}
	.container {
		width: 614.40002;
		height: 345.60001;
	}
	.background {
		width: 100%;
		height: 100%;
	}
</style>