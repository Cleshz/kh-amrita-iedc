<script lang="ts">
	//@ts-nocheck
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import TiHome from 'svelte-icons/ti/TiHome.svelte';
	import GiArcheryTarget from 'svelte-icons/gi/GiArcheryTarget.svelte';
	import FaRocket from 'svelte-icons/fa/FaRocket.svelte';
	import IoIosFlower from 'svelte-icons/io/IoIosFlower.svelte';
	import { Popover, Button } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	import About from '$lib/About.svelte';
	import Savishkaara from '$lib/Savishkaara.svelte';
	import Team from '$lib/Team.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import FaUsers from 'svelte-icons/fa/FaUsers.svelte';
	import Contacts from '$lib/Contacts.svelte';
	import IoMdCall from 'svelte-icons/io/IoMdCall.svelte';
	import { navigating } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let placement: string = 'bottom';

	let userTheme = 5;
	let isThemeReady = false;
	if (browser) {
		userTheme = localStorage.getItem('theme') === 'dark';
	}
	onMount(() => {
		if (browser) {
			const storedTheme = localStorage.getItem('theme');
			userTheme = storedTheme === 'dark';

			const htmlElement = document.documentElement;
			if (userTheme) {
				htmlElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				htmlElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
			isThemeReady = true;
		}
	});
	function toggleTheme() {
		if (browser) {
			userTheme = !userTheme;
			const htmlElement = document.documentElement;
			if (userTheme) {
				htmlElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				htmlElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		}
	}

	function toggleMenu() {
		const menu = document.getElementById('mobile-menu');
		// @ts-ignore
		menu?.classList.toggle('hidden');
	}
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<nav class="sticky top-0 z-50 h-20 border-gray-200 bg-white dark:bg-neutral-900">
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 pt-5">
			<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img class="mt-2 h-14" src="/assets/img/asaslogo.png" alt="ASAS Logo" />
			</a>
			{#if userTheme != 5}
				<button class="absolute right-5 mt-1 items-center hover:text-white md:hidden">
					<Button id="placement-bottom">
						<div class="h-12 text-gray-500 outline-none">
							<IoMdMenu />
						</div>
					</Button>
				</button>
			{/if}
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul
					class="mt-4 flex flex-col rounded-lg border p-4 text-lg font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
				>
					<li>
						<a
							href="#Home"
							class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
							aria-current="page">Home</a
						>
					</li>
					<li>
						<a href="#About" class="nav-link">About</a>
					</li>
					<li>
						<a href="#Savishkaara" class="nav-link">Savishkaara</a>
					</li>
					<li>
						<a href="#Team" class="nav-link">Team</a>
					</li>
					<li>
						<a href="/events" class="nav-link">Events</a>
					</li>
					<li>
						<button class="h-7" on:click={toggleTheme}>
							<FaMoon />
						</button>
					</li>
				</ul>
			</div>
			<button class="absolute right-24 h-7 md:hidden" on:click={toggleTheme}>
				<FaMoon />
			</button>
		</div>
	</nav>

	<Popover
		triggeredBy="#placement-bottom"
		{placement}
		transition={slide}
		trigger="click"
		class="z-20 h-80 w-full border-none bg-gray-100 opacity-70 shadow-lg shadow-black dark:bg-neutral-900"
	>
		<ul class="flex flex-col space-y-16 rounded-lg px-4 font-medium">
			<li>
				<a href="#Home" class="nav-mb"> <TiHome /><span class="ml-2 mt-2">Home</span></a>
			</li>
			<li>
				<a href="#About" class="nav-mb"> <GiArcheryTarget /><span class="ml-2 mt-2">About</span></a>
			</li>
			<li>
				<a href="#Savishkaara" class="nav-mb">
					<IoIosFlower /><span class="ml-2 mt-1">Savishkaara</span></a
				>
			</li>
			<li>
				<a href="#Team" class="nav-mb"> <FaUsers /><span class="ml-2 mt-1">Team</span></a>
			</li>
			<!-- <li>
				<a href="#Contacts" class="nav-mb"> <IoMdCall /><span class="ml-2 mt-1">Contacts</span></a>
			</li> -->
			<li>
				<a href="/events" class="nav-mb pt-2"> <FaRocket /><span class="ml-4">Events</span></a>
			</li>
		</ul>
	</Popover>
	<article>
		<section
			id="Home"
			class="sec -mt-24 grid h-screen grid-cols-3 items-center justify-center pb-20 pt-20 max-lg:grid-cols-none"
		>
			<div class="mx-10 max-lg:hidden">
				{#await Promise.resolve() then _}
					<ImageCarousel />
				{/await}
			</div>
			<div class=" pb-5">
				<img class="m-auto w-80" src="/assets/img/iedc_asas_2.png" alt="" loading="eager" />
				<h1 class="text-center text-2xl font-bold md:text-4xl dark:text-violet-800">
					INNOVATION AND<br />
					ENTREPRENEURSHIP<br />
					DEVELOPMENT CENTRE
				</h1>
				<h1 class="mt-5 text-center font-bold md:text-xl">
					AMRITA VISHWA VIDHYAPEETHAM<br />KOCHI
				</h1>
				<div class="p-2 text-center">
					<a href="https://innovate.startupmission.in/joinus/" target="_blank">
						{#if userTheme}
							<button class="btn btnDark">Join Today!</button>
						{:else}
							<button class="btn btnLight">Join Today!</button>
						{/if}
					</a>
				</div>
			</div>
			<div class="mx-10 max-lg:hidden">
				{#await Promise.resolve() then _}
					<ImageCarousel />
				{/await}
			</div>
		</section>

		<section id="About" class="sec h-screen pt-20">
			<About />
		</section>

		<section id="Savishkaara" class="sec h-screen pt-20">
			{#key userTheme}
				<Savishkaara {userTheme} />
			{/key}
		</section>
		<section id="Team" class="pt-60">
			<Team />
		</section>
		<footer id="Contacts" class="sec h-screen pt-20">
			<Contacts />
		</footer>
	</article>
</body>

<style>
	footer {
		width: 100%;
		text-align: center;
		padding: 1rem;
	}

	body,
	nav {
		@apply transition-colors duration-500;
	}

	.nav-link {
		@apply block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500;
	}

	.nav-mb {
		@apply absolute flex h-10 px-3 text-blue-700 dark:text-white;
	}
	/* From Uiverse.io by aidanwain */
	.btn {
		--border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
		--border-width: 0.125em;
		--curve-size: 0.5em;
		--blur: 30px;

		color: var(--color);
		cursor: pointer;
		/* use position: relative; so that BG is only for .btn */
		position: relative;
		isolation: isolate;
		display: inline-grid;
		place-content: center;
		padding: 0.5em 1.5em;
		font-size: 17px;
		border: 0;
		text-transform: uppercase;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
		clip-path: polygon(
			/* Top-left */ 0% var(--curve-size),
			var(--curve-size) 0,
			/* top-right */ 100% 0,
			100% calc(100% - var(--curve-size)),
			/* bottom-right 1 */ calc(100% - var(--curve-size)) 100%,
			/* bottom-right 2 */ 0 100%
		);
		transition: color 250ms;
	}
	.btnDark {
		--bg: #080312;
		--color: #afffff;
	}
	.btnLight {
		--bg: #fff;
		--color: #080312;
	}

	.btn::after,
	.btn::before {
		content: '';
		position: absolute;
		inset: 0;
	}

	.btn::before {
		background: var(--border-color);
		background-size: 300% 300%;
		animation: move-bg7234 5s ease infinite;
		z-index: -2;
	}

	@keyframes move-bg7234 {
		0% {
			background-position: 31% 0%;
		}

		50% {
			background-position: 70% 100%;
		}

		100% {
			background-position: 31% 0%;
		}
	}

	.btn::after {
		background: var(--bg);
		z-index: -1;
		clip-path: polygon(
			/* Top-left */ var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
			calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
			/* top-right */ calc(100% - var(--border-width)) var(--border-width),
			calc(100% - var(--border-width))
				calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
			/* bottom-right 1 */ calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
				calc(100% - var(--border-width)),
			/* bottom-right 2 */ var(--border-width) calc(100% - var(--border-width))
		);
		transition: clip-path 500ms;
	}

	.btn:where(:hover, :focus)::after {
		clip-path: polygon(
			/* Top-left */ calc(100% - var(--border-width))
				calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
			calc(100% - var(--border-width)) var(--border-width),
			/* top-right */ calc(100% - var(--border-width)) var(--border-width),
			calc(100% - var(--border-width))
				calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
			/* bottom-right 1 */ calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
				calc(100% - var(--border-width)),
			/* bottom-right 2 */ calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
				calc(100% - var(--border-width))
		);
		transition: 200ms;
	}

	.btn:where(:hover, :focus) {
		color: #fff;
	}
</style>
