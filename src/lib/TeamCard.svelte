<script lang="ts">
	export let name: string;
	// export let img: string;
	export let role: string;
	export let phone: string;
	export let mail: string;
	export let expired: boolean = false;
</script>

<div
	class="teamcard relative min-h-80 w-full rounded-xl border-2 border-neutral-900 text-white shadow-2xl shadow-slate-600
     max-md:mx-6 md:h-80 md:w-60 dark:bg-slate-900 dark:shadow-black"
>
	<div>
		<img class="rounded-xl" src="/assets/img/team/{name}.jpg" alt="" />
		{#if expired}
		<img class="absolute z-10 rounded-xl -top-6" src="/assets/img/team/garland.png" alt="" />
		{/if}
	</div>
	<div
		class="name-overlay flex h-32 items-center justify-center rounded-b-lg bg-white
     text-black md:h-24 dark:bg-slate-900 dark:text-white"
	>
		<ul class="text-xs font-medium text-gray-600 dark:text-gray-400">
			<li class="text-lg font-bold text-black dark:text-white">{name}</li>
			<li>{role}</li>
			<li>{phone}</li>
			<li class="hover:text-purple-400"><a href="mailto:{mail}">{mail}</a></li>
		</ul>
	</div>
</div>

<style>
	.name-overlay {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>
