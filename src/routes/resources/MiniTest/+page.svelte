<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Quick Assignment - LED Binary Counter
		</h1>

		<div class="space-y-8">
			<!-- Introduction -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Create a LED Binary Counter<br/> There will be 4 LEDs <br/> Starting state will be ALL OFF <br/> When button pressed, right most led turns on, Representing binary 0001 = 1 <br/>
					and when pressed again, increment and show the the binary of the next number
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
					<li>LED (5mm preferred)</li>
					<li>220Ω Resistor</li>
					<li>Switch</li>
					<li>Jumper Wires</li>
				</ul>
			</div>
		</div>
		<div class="mt-10 border-l-4 border-pink-700 bg-pink-50 p-4 dark:border-red-700 dark:bg-neutral-800">
			<p class="text-sm">
				The First 6 teams to finish this Assignment will recieve the ESP-RC Car Kits, and the rest 3 teams will get Randomized ESP Project Kits 
				
			</p>
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
		

		
	</section>
</body>

<style>
	body {
		@apply transition-colors duration-500;
	}

</style>
