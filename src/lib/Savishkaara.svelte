<script lang="ts">
	import RainbowButton from "./components/RainbowButton.svelte";

	export let userTheme: boolean;

</script>

<h1
	class="mb-20 text-center text-5xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
>
	SAVISHKAARA
</h1>
<div class="mt-20 flex grid-cols-2 flex-col md:grid">
	<div class="grid grid-cols-3 text-center text-2xl font-bold max-lg:grid-cols-none md:text-4xl">
		<div class="relative max-lg:hidden">
			<div class="absolute -right-10 top-36 w-52 duration-500">
				{#if userTheme}
					<img src="/assets/img/iedcDark.png" alt="" />
				{:else}
					<img src="/assets/img/iedc.png" alt="" />
				{/if}
			</div>
			<div class="absolute -right-0 bottom-48 w-40">
				<!-- <img src="/assets/img/CSI.PNG" alt="" /> -->
				<img src="/assets/img/SIC.png" alt="" />
			</div>
		</div>
		<div class="mx-3">
			<img class="m-auto -mb-6" src="/assets/img/saavishkaara.png" alt="Savi logo" />
			<img class="m-auto mt-14 w-20 max-lg:hidden" src="/assets/img/CSI.PNG" alt="Savi logo" />

			<!-- <h1 class="text-center text-2xl font-bold md:text-2xl dark:text-violet-800">
				Tech fest organised by Department of Computer Science and IT
			</h1> -->
		</div>
		<div class="relative max-lg:hidden">
			<div class="absolute -left-8 top-36 w-40">
				<img src="/assets/img/IIC.png" alt="" />
			</div>
			<div class="absolute bottom-56 left-8 w-24">
				<img src="/assets/img/IPL.png" alt="" />
			</div>
		</div>
	</div>
	<div class="mx-5 mt-8 text-justify font-bold md:mr-40">
		<h1>
			The Annual Tech Fest at Amrita Vishwa Vidyapeetham, Kochi is a premier event organized by the
			Department of Computer Science & Information Technology in collaboration with the <span
				class="dark:text-orange-500">Computer Society of India (CSI)</span
			>,
			<span class="dark:text-yellow-500"
				>Innovation and Entrepreneurship Development Centre (IEDC)</span
			>, <span class="dark:text-indigo-600"> Software Innovators' Club (SIC)</span>, and
			<span class="dark:text-red-500">Institution's Innovation Council (IIC)</span>, this fest
			brings together students, industry experts, and innovators to showcase cutting-edge technology
			and ideas. The event fosters creativity, innovation, and collaboration, serving as a platform
			for participants to explore advancements in the tech world.
		</h1>
		<div class="flex justify-center mt-10"><RainbowButton/></div>
	</div>
</div>
