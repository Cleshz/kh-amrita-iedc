<script lang="ts">
	//@ts-ignore
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import { closeModal } from 'svelte-modals';
	import { fly } from 'svelte/transition';
	export let isOpen;
	export let title;
	export let details;
	export let img;
	export let register = '';
	export let indepth;
	export let highlights;
	export let requirements;
	export let fee;
	export let contacts;
	highlights = highlights.split('.');
	highlights.pop();
	requirements = requirements.split('.');
	requirements.pop();
	contacts = contacts.split('.');
	contacts.pop();
</script>

{#if isOpen}
	<div
		role="dialog"
		class="duration-50 fixed bottom-0 left-0 right-0 top-10 z-30 flex transform-gpu
      justify-center transition-all"
		transition:fly|global
	>
		<div
			class="flex min-w-80 grid-cols-3 flex-col gap-4 overflow-y-auto rounded-3xl bg-white p-4 shadow-xl
       shadow-gray-500 md:mx-40 md:my-10 md:grid md:pl-16 dark:bg-zinc-900 dark:shadow-black"
		>
			<button
				on:click={closeModal}
				class="mt-10 h-10 text-xl text-red-500 md:absolute md:right-60 md:top-24 md:-mt-5"
			>
				<FaTimes />
			</button>
			<div
				class="col-span-1 h-fit w-fit rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500
         to-red-500 py-1 md:my-16"
			>
				<img class="mx-1 mt-1 h-80 w-80 rounded-3xl object-bottom" src={img} alt="" />
			</div>

			<div
				class="details col-span-2 -mt-16 ml-2 flex w-full flex-col pt-24 font-normal dark:text-white"
			>
				<h5 class="text-wrap text-xl font-extrabold tracking-tight">{title}</h5>
				<div class="mr-10 mt-5 text-left font-bold">
					<h1>{details}</h1>
					<h1>&nbsp;</h1>
					<h1>{indepth}</h1>
					<h1>&nbsp;</h1>
					<h1>Event Highlights:</h1>
					<ul class="ml-8 list-disc">
						{#each highlights as point}
							<li>{point}</li>
						{/each}
					</ul>
					<h1>&nbsp;</h1>
					<h1>Who Can Apply:</h1>
					<ul class="ml-8 list-disc">
						{#each requirements as point}
							<li>{point}</li>
						{/each}
					</ul>
					<h1>&nbsp;</h1>
					<h1>For Further Queries, Contact:</h1>
					<ul class="ml-8 list-disc">
						{#each contacts as num}
							<li>{num}</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="group relative m-auto md:-mt-32 md:ml-10">
				<div class="relative z-10 h-14 w-64 overflow-hidden rounded-xl bg-black opacity-90">
					<div
						class="transistion-all absolute z-10 h-full w-44 -translate-x-44 -skew-x-12 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 duration-700 ease-in group-hover:translate-x-[30rem]"
					></div>
					<div
						class="absolute inset-0.5 z-[1] flex items-center justify-center rounded-2xl bg-black text-white opacity-90"
					>
						{#if register != ''}
							<a href={register} target="_blank">
								<button
									name="text"
									class="input h-full w-full rounded-xl bg-black px-16 py-3 text-lg font-semibold opacity-90"
								>
									Register Now!
								</button>
							</a>
						{:else}
							<button
								name="text"
								class="input h-full w-full rounded-xl bg-black px-16 py-3 text-lg font-semibold opacity-90"
							>
								Ended!
							</button>
						{/if}
					</div>
					<div
						class="absolute h-[100px] w-full bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px] duration-1000 group-hover:animate-spin"
					></div>
				</div>
				<h1 class="ml-6 font-bold">💵 Registration Fee:{fee}</h1>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
