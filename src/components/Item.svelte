<script>
	export let left = 30;
	export let top = 30;
	export let width = 50;
	export let height = 50;
	
	let moving = false; 
	
	function start() {
		moving = true;
	}
	
	function stop() {
		moving = false;
	}
	
	function move(e) {
			if (moving) {
				left += e.movementX;
				top += e.movementY;
			}
	}
</script>

<svelte:window on:mouseup={stop} on:mousemove={move}  />

<section on:mousedown={start} style="left: {left}px; top: {top}px; width:{width}px; height:{height}px" class="item">
	<slot></slot>
</section>

<style>
	.item {
		user-select: none;
		position: absolute;
		border: none;
		text-align: center;
		background: white; 
		cursor: move;
	}
</style>