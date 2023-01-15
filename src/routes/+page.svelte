<script>
  import Item from '../components/Item.svelte';
  import GoodNightWP from '../assets/GoodNightWP.svg';
  import SmashFacism from '../assets/SmashFacism.svg';
</script>

<Item top={50} left={100} width={200} height={300}>
	<img src={GoodNightWP} alt='good night white pride'>
</Item>

<Item top={20} left={20} width={50} height={50} >
	<img src={SmashFacism} alt='smash facism'>
</Item>

<style>
	img {
		user-select: none;
		pointer-events: none;
		object-fit: scale-down;
	}
</style>