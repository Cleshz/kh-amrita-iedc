<script lang="ts">
	import MonacoEditor from '$lib/MonacoEditor.svelte';
	import Navbar from '$lib/Navbar.svelte';
	let code = `
            
// Motor A Pins
const int motor1Pin1 = 27;
const int motor1Pin2 = 26;
const int enable1Pin = 14;

// PWM Settings
const int pwmChannel = 0;
const int freq = 30000;
const int resolution = 8;

void setup() {
  pinMode(motor1Pin1, OUTPUT);
  pinMode(motor1Pin2, OUTPUT);
  pinMode(enable1Pin, OUTPUT);

  ledcSetup(pwmChannel, freq, resolution);
  ledcAttachPin(enable1Pin, pwmChannel);

  Serial.begin(115200);
  Serial.println("DC Motor Test");
}

void loop() {
  moveMotor(HIGH, LOW, 2000, 200);  // Forward
  stopMotor(1000);                  // Stop
  moveMotor(LOW, HIGH, 2000, 200);  // Backward
  stopMotor(1000);                  // Stop
  accelerateMotor(HIGH, LOW, 200, 255, 5, 500); // Accelerate forward
}

// Function to move motor in a direction
void moveMotor(int dir1, int dir2, int duration, int speed) {
  digitalWrite(motor1Pin1, dir1);
  digitalWrite(motor1Pin2, dir2);
  ledcWrite(pwmChannel, speed);
  Serial.println(dir1 ? "Moving Backward" : "Moving Forward");
  delay(duration);
}

// Function to stop motor
void stopMotor(int duration) {
  digitalWrite(motor1Pin1, LOW);
  digitalWrite(motor1Pin2, LOW);
  Serial.println("Motor stopped");
  delay(duration);
}

// Function to gradually increase speed
void accelerateMotor(int dir1, int dir2, int startSpeed, int maxSpeed, int step, int delayTime) {
  digitalWrite(motor1Pin1, dir1);
  digitalWrite(motor1Pin2, dir2);
  for (int speed = startSpeed; speed <= maxSpeed; speed += step) {
    ledcWrite(pwmChannel, speed);
    Serial.print("Speed: ");
    Serial.println(speed);
    delay(delayTime);
  }
}
`;
</script>

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<Navbar root="/resources" />
	<h1 class="text-6xl text-center text-red-600 font-bold mt-32">PAGE UNDER CONSTRUCTION!!!</h1>
	<!-- <section class="mx-auto max-w-3xl p-6">
		<h1
			class="mb-6 text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700"
		>
			Home Automation
		</h1>

		<div class="space-y-8">
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Overview</h2>
				<p class="text-base leading-relaxed">
					Control a motor using PWM signals with the help of ESP32 and L298N Motor Driver
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
	</section> -->
</body>

<style>
	body {
		@apply transition-colors duration-500;
	}
	.nav-link {
		@apply block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500;
	}
</style>
