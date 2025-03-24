<script lang="ts">
	//@ts-nocheck
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import TiArrowBack from 'svelte-icons/ti/TiArrowBack.svelte';
	import EventCard from '$lib/EventCard.svelte';
	import { Modals } from 'svelte-modals';
	import { openModal } from 'svelte-modals';
	import EventModal from '$lib/EventModal.svelte';
	import { Button } from 'flowbite-svelte';
	let userTheme: boolean = localStorage.getItem('theme') === 'dark';
	$: {
		const htmlElement = document.documentElement;
		if (userTheme) {
			htmlElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			htmlElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<nav class="sticky top-0 z-50 h-20 border-gray-200 bg-inherit max-lg:px-6 dark:bg-inherit">
	<!-- <div class="relative w-full flex items-center md:justify-around justify-between pt-5 px-10 "> -->
	<div class="mt-4 flex w-full items-center md:justify-between md:px-20">
		<a href="/" class="mt-2">
			<img class="h-14 w-36 object-contain" src="/assets/img/asaslogo.png" alt="ASAS Logo" />
		</a>
		<div class="absolute right-6 mt-4 flex">
			<button class="absolute right-10 w-8 md:hidden" on:click={() => (userTheme = !userTheme)}>
				<FaMoon />
			</button>
			<button>
				<a href="/">
					<Button id="placement-bottom" class="-mt-3 w-14 md:hidden">
						<div class="w-14 text-gray-500 outline-none">
							<TiArrowBack />
						</div>
					</Button>
				</a>
			</button>
		</div>

		<!-- Navbar Links -->
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="mt-4 flex flex-col rounded-lg border p-4 text-lg font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
			>
				<li>
					<a
						href="#Home"
						class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
						aria-current="page"
					>
						Home
					</a>
				</li>
				<li><a href="/#About" class="nav-link">About</a></li>
				<li><a href="/#Savishkaara" class="nav-link">Savishkaara</a></li>
				<li><a href="/#Team" class="nav-link">Team</a></li>
				<li><a href="/events" class="nav-link">Events</a></li>
				<li>
					<button class="h-7" on:click={() => (userTheme = !userTheme)}>
						<FaMoon />
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
