<script>
  import Artifact from '../components/Artifact.svelte';
	import Background from '../assets/background2.svg';
	import Couch from '../assets/couch.svg';
	import Luna from '../assets/luna.svg';
</script>

<Artifact top={20} left={20} width={100} height={100} >
	<img class='artifact' src={Couch} alt='plushy neon pink couch'>
</Artifact>

<Artifact top={20} left={20} width={100} height={100} >
	<img class='artifact' src={Luna} alt='black cat plushie with crescent moon on forehead'>
</Artifact>

<img class='background' src={Background} alt='light blue sky with white clouds'>

<style>
	.artifact {
		user-select: none;
		pointer-events: none;
		max-width: 100px;
	}
	.background {
		width: 125%;
		height: 125%;
	}
</style>