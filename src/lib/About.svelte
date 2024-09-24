<script lang="ts">
	//@ts-ignore
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	import Youtube from 'svelte-youtube-embed';
</script>

<div class="text-center text-xl font-bold md:text-4xl">
	<h1 class="underline decoration-2 dark:text-red-700">ABOUT</h1>
	<h2 class="mt-5 md:mt-6">
		Welcome to <span class="text-pink-700">INNOVATION AND ENTREPRENEURSHIP<br/> DEVELOPMENT CENTRE</span>
	</h2>
	<h2 class="mt-5 text-sm">
		"At IEDCs, we're not just about education; <br />we're all about unlocking your inner innovator
		and entrepreneur!"
	</h2>
	<div class="mt-8 md:ml-16 md:grid md:grid-cols-2 gap-2">
		<!-- <iframe width="600" height="300" src="https://www.youtube.com/embed/QnSAMSZ7y00" title="Kerala Startup Mission - Whiteboard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
		<div class="max-lg:hidden md:w-96">
			<Youtube id="QnSAMSZ7y00">
				<button class="h-20 text-neutral-900"><FaPlay /></button>
			</Youtube>
		</div>
		<div class="md:text-left">
			<h1 class="ml-5 text-indigo-700">What is IEDC?</h1>
			<p class="mx-5 mt-2 text-justify text-sm md:mr-20 md:text-base">
				Innovation and Entrepreneurship Development Centre <span class="dark:text-orange-500"
					>(IEDC)</span
				>
				is a flagship initiative of Kerala Startup Mission to promote innovation and entrepreneurship
				among the student and academic fraternity in the educational institutions in the State of Kerala
				and considered as an umbrella programme that would play an instrumental role in fostering innovation
				culture in Academic institutions.<br /><br/>
				Kerala Startup Mission helps Startup Founders to execute their vision and compete on the global
				stage by providing them with risk capital, Incubation support, expert mentoring, and business
				network when traditional financial and other institutions cannot.
			</p>
		</div>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.md\:w-96 {
			width: 37rem /* 384px */;
		}
	}
</style>
