<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	let code = `
            
#define PIN_IN1  26 // ESP32 pin GPIO19 connected to the IN1 pin L298N
#define PIN_IN2  27 // ESP32 pin GPIO18 connected to the IN2 pin L298N
#define PIN_ENA  14 // ESP32 pin GPIO17 connected to the EN1 pin L298N

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pins as outputs.
  pinMode(PIN_IN1, OUTPUT);
  pinMode(PIN_IN2, OUTPUT);
  pinMode(PIN_ENA, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(PIN_IN1, HIGH); // control the motor's direction in clockwise
  digitalWrite(PIN_IN2, LOW);  // control the motor's direction in clockwise

  for (int speed = 0; speed <= 255; speed++) {
    analogWrite(PIN_ENA, speed); // speed up
    delay(10);
  }

  delay(5000); // rotate at maximum speed 2 seconds in clockwise direction

  // change direction
  digitalWrite(PIN_IN1, LOW);   // control the motor's direction in anti-clockwise
  digitalWrite(PIN_IN2, HIGH);  // control the motor's direction in anti-clockwise

  delay(5000); // rotate at maximum speed for 2 seconds in anti-clockwise direction

  for (int speed = 255; speed >= 0; speed--) {
    analogWrite(PIN_ENA, speed); // speed down
    delay(10);
  }

  delay(2000); // stop motor 2 second
}
`;
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Motor Drivers
		</h1>

		<div class="space-y-8">
			<!-- Introduction -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Control a motor using PWM signals with the help of ESP32 and L298N Motor Driver
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
					<li>Breadboard</li>
					<li>L298N Motor Driver</li>
					<li>Battery</li>
					<li>DC Motor</li>
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
			class="mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Motor Driver - L298N
		</h1>
		<img class="scale-90" src="/assets/img/resources/L298N.png" alt="Ledpinout" />

		<h1
			class="-mb-10 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Circuit
		</h1>
		<img class="scale-75" src="/assets/img/resources/L298N_esp.png" alt="pinout" />
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code
		</h1>
		<MonacoEditor {code} />
		<div class="mt-32 flex justify-between">
			<a href="/resources/WebServer">
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
			<a href="/resources/Automation">
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

</style>
