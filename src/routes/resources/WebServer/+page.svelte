<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { code } from './code';;
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			WebServer
		</h1>

		<div class="space-y-8">
			<!-- Introduction -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Create a WiFi Access point on an ESP32 and host a simple website on it.
				</p>
			</div>

			<!-- Components Required -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
					Components Required
				</h2>
				<ul class="list-disc space-y-2 pl-5">
					<li>ESP32 Development Board (Any variant)</li>
					<li>Micro USB Cable (Data-enabled)</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			ESP 32 Pinout
		</h1>
		<img class="md:w-full" src="/assets/img/resources/esp_pinout.png" alt="esppinout" />
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code
		</h1>
		<MonacoEditor {code} />
		<div class="mt-10 border-l-4 border-pink-700 bg-pink-50 p-4 dark:border-red-700 dark:bg-neutral-800">
			<p class="text-sm">
				Once the code is uploaded, Connect to the newly generated Wifi Access Point. After
				connecting, Open any browser of your choice and visit
				<a href="http://192.168.4.1" target="_blank"><strong class="text-indigo-300 underline">192.168.4.1</strong></a>.
			</p>
		</div>
		<div class="mt-32 flex justify-between">
			<a href="/resources/Potentiometer">
				<button
					class="group relative h-14 w-48 rounded-2xl border border-black bg-white text-center text-xl font-semibold text-black dark:bg-slate-700 dark:text-white"
					type="button"
				>
					<div
						class="absolute left-1 top-[4px] z-10 flex h-12 w-1/4 items-center justify-center rounded-xl bg-red-400 duration-500 group-hover:w-[184px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1024 1024"
							height="25px"
							width="25px"
						>
							<path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
							<path
								d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
								fill="#000000"
							></path>
						</svg>
					</div>
					<p class="translate-x-2">Go Back</p>
				</button>
			</a>
			<a href="/resources/Drivers">
				<button
					class="group relative h-14 w-48 rounded-2xl border border-black bg-white text-center text-xl font-semibold text-black dark:bg-slate-700 dark:text-white"
					type="button"
				>
					<div
						class="absolute right-1 top-[4px] z-10 flex h-12 w-1/4 rotate-180 items-center justify-center rounded-xl bg-green-400 duration-500 group-hover:w-[184px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1024 1024"
							height="25px"
							width="25px"
						>
							<path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
							<path
								d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
								fill="#000000"
							></path>
						</svg>
					</div>
					<p class="-ml-3">Next</p>
				</button>
			</a>
		</div>
	</section>
</body>

<style>
	body {
		@apply transition-colors duration-500;
	}
	.nav-link {
		@apply block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500;
	}
</style>
