<script>
	export let left = 550;
	export let top = 100;
	export let width = 100;
	export let height = 100;
	
	let moving = false; 
	
	const move = (e) => {
			if (moving) {
				left += e.movementX;
				top += e.movementY;
			}
	}
</script>

<svelte:window on:mouseup={() => moving=false} on:mousemove={move}  />

<section on:mousedown={() => moving=true} style="left: {left}px; top: {top}px; width:{width}px; height:{height}px" class="artifact">
	<slot></slot>
</section>

<style>
	.artifact {
		position: absolute;
		user-select: none;
		border: none;
		background: none; 
		cursor: move;
	}
</style>