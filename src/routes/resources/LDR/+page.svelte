<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	let code = `
#define LDR_PIN 3
#define LED_PIN 4

// Thresholds (adjust after testing)
int thresholdLow = 600;   // LED turns ON below this (dark)
int thresholdHigh = 600;  // LED turns OFF above this (bright)

// LED state tracker
bool ledState = false;

// Function to smooth ADC readings
int readLDR() {
  int sum = 0;
  for (int i = 0; i < 10; i++) {
    sum += analogRead(LDR_PIN);
    delay(5);
  }
  return sum / 10;
}

void setup() {
  Serial.begin(115200);

  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW); // start OFF

  delay(1000); // stabilize
}

void loop() {
  int ldrValue = readLDR();

  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  // Hysteresis logic
  if (!ledState && ldrValue < thresholdLow) {
    ledState = true;
    digitalWrite(LED_PIN, HIGH);  // turn ON
    Serial.println("LED ON (Dark)");
  } 
  else if (ledState && ldrValue > thresholdHigh) {
    ledState = false;
    digitalWrite(LED_PIN, LOW);   // turn OFF
    Serial.println("LED OFF (Bright)");
  }

  delay(100);
}            
`;
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Light Dependent Resistor
		</h1>

		<div class="space-y-8">
			<!-- Introduction -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Make an ESP32-C3 emergency lamp
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
					<li>LED (5mm preferred)</li>
					<li>LDR sensors</li>
					<li>10k Ω Resistor</li>
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
		<img class="md:w-full scale-75" src="/assets/img/resources/espmini.png" alt="esppinout" />



		<h1
			class="-mb-10 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Circuit
		</h1>
		<img class="scale-75" src="/assets/img/resources/emergency.png" alt="pinout" />
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code
		</h1>
		<MonacoEditor {code} />
		<div class="mt-32 flex justify-between">
			<a href="/resources/Automation">
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
