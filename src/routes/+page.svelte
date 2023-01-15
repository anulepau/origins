<script>
  import Item from '../components/Item.svelte';
	import Couch from '../assets/couch.svg';
</script>

<Item top={20} left={20} width={100} height={100} >
	<img src={Couch} alt='plushy neon pink couch'>
</Item>

<style>
	img {
		user-select: none;
		pointer-events: none;
		max-width: 100px;
	}
</style>