<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';

	
	let code1 = `
            
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin GPIO18 as an output.
  pinMode(18, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(18, HIGH); // turn the LED on
  delay(500);             // wait for 500 milliseconds
  digitalWrite(18, LOW);  // turn the LED off
  delay(500);             // wait for 500 milliseconds
}`

	let code2=`
	
// Define LED pin
#define LED_PIN 18

// PWM parameters
#define LEDC_CHANNEL 0   // PWM channel
#define LEDC_FREQ 5000   // Frequency (5 kHz)
#define LEDC_RESOLUTION 8 // 8-bit resolution (0-255)

void setup() {
  // Configure the LEDC PWM functionality
  ledcSetup(LEDC_CHANNEL, LEDC_FREQ, LEDC_RESOLUTION);
  // Attach the LED pin to the channel
  ledcAttachPin(LED_PIN, LEDC_CHANNEL);
}

void loop() {
  // Fade in
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    ledcWrite(LEDC_CHANNEL, dutyCycle);
    delay(5); // Adjust speed of fade
  }

  // Fade out
  for (int dutyCycle = 255; dutyCycle >= 0; dutyCycle--) {
    ledcWrite(LEDC_CHANNEL, dutyCycle);
    delay(5);
  }
}

	`
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />

	<section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Getting Started with ESP32
		</h1>

		<div class="space-y-8">
			<!-- Introduction -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					The ESP32 is a powerful, low-cost microcontroller with built-in Wi-Fi and Bluetooth. This
					guide will help you set up your development environment and start your first project.
				</p>
			</div>

			<!-- Downloads -->
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
					Download & Install
				</h2>
				<ul class="list-disc space-y-2 pl-5">
					<li>
						<a
							href="https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.4_Windows_64bit.msi"
							target="_blank"
							class="text-blue-600 hover:underline dark:text-blue-400">Download Arduino IDE</a
						>
					</li>
					<li>
						After Installing Arduino IDE, Launch the application and go to <br> <b>Tools > Board > BoardManager > Search "ESP32 Espressif" > Install </b>
					</li>
					<li>
						<a
							href="https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip"
							target="_blank"
							class="text-blue-600 hover:underline dark:text-blue-400"
							>Download USB-to-UART Driver (CP210x)</a
						>
					</li>
				</ul>
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
					<li>220Ω Resistor</li>
					<li>Jumper Wires</li>
				</ul>
			</div>

			<!-- Quick Note -->
			<div
				class="border-l-4 border-pink-700 bg-pink-50 p-4 dark:border-red-700 dark:bg-neutral-800"
			>
				<p class="text-sm">
					Once everything is installed, you can find the ESP32 boards in Arduino IDE under
					<strong>Tools &gt; Board &gt; ESP32 Arduino</strong>. Select your board and start coding!
				</p>
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
			LED Pinout
		</h1>
		<img class="scale-90" src="/assets/img/resources/led.png" alt="Ledpinout" />
		<h1
			class="mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			BreadBoard Layout
		</h1>
		<img class="scale-90" src="/assets/img/resources/breadboard.png" alt="Ledpinout" />



		<h1
			class="-mb-10 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Circuit
		</h1>
		<img class="scale-75" src="/assets/img/resources/led_esp.png" alt="pinout" />
	</section>
	<section class="mx-auto max-w-4xl p-6">
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code - LED Blink
		</h1>
		<MonacoEditor code={code1}/>
		<h1
			class="mb-6 mt-20 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Example Code - LED Fade
		</h1>
		<MonacoEditor code={code2}/>
		<div class="mt-32 flex justify-end">
		<a href="/resources/LedToggle">
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
