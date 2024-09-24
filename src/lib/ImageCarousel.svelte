<script lang="ts">
	//@ts-ignore
	import Carousel from 'svelte-carousel';

	let images1: any[] = [];
	let images2: any[] = [];
	for (let i = 1; i < 40; i++) {
		images1.push('\\assets\\Carousel-Gallery\\Savishkaara\\img (' + i + ').jpg');
	}
	for (let i = 1; i < 22; i++) {
		images2.push('\\assets\\Carousel-Gallery\\Events\\img (' + i + ').jpg');
	}
	let savi = images1
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
	let events = images2
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
</script>

<Carousel
	autoplayDuration={0}
	duration={1000}
	autoplay
	infinite={true}
	timingFunction="linear"
	dots={false}
	arrows={false}
	swiping={false}
	particlesToShow={4}
>
	{#each savi as src}
		<img {src} alt="" class="my-2 w-28  rounded-xl object-cover px-1" loading="lazy"/>
	{/each}
</Carousel>

<Carousel
	autoplayDirection="prev"
	autoplayDuration={0}
	duration={1000}
	autoplay
	infinite={true}
	timingFunction="linear"
	dots={false}
	arrows={false}
	swiping={false}
	particlesToShow={4}
>
	{#each events as src}
		<img {src} alt={src.description} class="my-2 w-28 rounded-xl object-cover px-1" loading="lazy"/>
	{/each}
</Carousel>
<Carousel
	initialPageIndex={20}
	autoplayDuration={0}
	duration={1000}
	autoplay
	infinite={true}
	timingFunction="linear"
	dots={false}
	arrows={false}
	swiping={false}
	particlesToShow={4}
>
	{#each savi as src}
		<img {src} alt={src.description} class="my-2 w-28 rounded-xl object-cover px-1" loading="lazy"/>
	{/each}
</Carousel>

<style>
	* {
		/* @apply bg-none opacity-85 shadow-lg dark:opacity-70; */
	}
</style>
