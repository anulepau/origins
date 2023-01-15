<script>
	export let left = 30;
	export let top = 30;
	export let width = 100;
	export let height = 100;
	
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
		background: none; 
		cursor: move;
	}
</style>