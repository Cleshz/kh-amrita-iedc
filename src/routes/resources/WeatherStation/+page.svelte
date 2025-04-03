<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { code } from './code';
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />
	
	 <section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Weather Station using ESP32
		</h1>

		<div class="space-y-8">
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Control LEDs/Appliances through a WebServer, and Host its own Access point 
				</p>
			</div>

	
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
					Components Required
				</h2>
				<ul class="list-disc space-y-2 pl-5">
					<li>ESP32 Development Board (Any variant)</li>
					<li>Micro USB Cable (Data-enabled)</li>
					<li>Breadboard</li>
					<li>LED (5mm preferred)</li>
					<li>220Ω Resistor</li>
					<li>Jumper Wires</li>
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

		

		<h1
			class="-mb-10 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Circuit
		</h1>
		<img class="scale-75" src="/assets/img/resources/led_esp_server.png" alt="pinout" />
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<div class="mt-10 border-l-4 border-pink-700 bg-pink-50 p-4 dark:border-red-700 dark:bg-neutral-800">
			<div class="text-sm">
				<b class="text-red-500">OLED Display Library</b>
				<ul class="list-disc space-y-2 pl-5">
					<li>Install the <b class="text-green-400 hover:text-green-300">"Adafruit SSD1306"</b> from the library manager</li>
					<li>Install the <b class="text-green-400 hover:text-green-300">"Adafruit GFX library"</b> from the library manager</li>
				</ul>
				<h1 class="text-red-500 pt-8 font-bold">DHT Sensor Library</h1>
				<ul class="list-disc space-y-2 pl-5">
					<li>Install the <b class="text-green-400 hover:text-green-300">"DHT sensor for Adafruit"</b> from the library manager</li>
					<li>Install the <b class="text-green-400 hover:text-green-300">"Adafruit Unified Sensor"</b> from the library manager</li>
				</ul>
				
			</div>
		</div>
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code
		</h1>
		<MonacoEditor {code} />
		
		<div class="mt-32 flex justify-between">
			
			
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
