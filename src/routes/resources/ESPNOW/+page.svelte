<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { code, maccode } from './code';
	
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			ESPNOW Messenger
		</h1>

		<div class="space-y-8">
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">Create your own Bidirectional Messaging platform using ESP NOW.</p>
			</div>

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
		<img class="scale-75 md:w-full" src="/assets/img/resources/espmini.png" alt="esppinout" />

		
		
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Get Mac Address
		</h1>
		<MonacoEditor code={maccode} />
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			ESP NOW Code
		</h1>

		<MonacoEditor {code} />
		<!-- <div class="mt-10 border-l-4 border-pink-700 bg-pink-50 p-4 dark:border-red-700 dark:bg-neutral-800">
			<p class="text-sm">
				Once the code is uploaded, Open AppStore or PlayStore and Install <strong class="text-indigo-300 underline">Dabble - Bluetooth Controller</strong>
			</p>
		</div> -->
		<div class="mt-32 flex justify-between"></div>
	</section>
</body>

<style>
	body {
		@apply transition-colors duration-500;
	}
</style>
