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

<body class="h-screen overflow-y-scroll bg-white dark:bg-neutral-900 dark:text-gray-300">
	<nav class="sticky top-0 z-50 h-20 border-gray-200 bg-inherit dark:bg-inherit max-lg:px-6">
		<!-- <div class="relative w-full flex items-center md:justify-around justify-between pt-5 px-10 "> -->
		 <div class="flex md:justify-between md:px-20 items-center mt-4 w-full">
			<a href="/" class="mt-2">
				<img class="h-14 w-36 object-contain  " src="/assets/img/asaslogo.png" alt="ASAS Logo" />
			</a>
			<!-- <div class=" absolute right-6">
				<button class="w-8 md:hidden absolute right-10">
					<FaMoon />
				</button>
				<a href="/">
					<button class="w-12 -mt-2">
						<TiArrowBack />
					</button>
				</a>
			</div> -->
			<div class="flex mt-4 absolute right-6">
				<button class="w-8 md:hidden absolute right-10" on:click={() => (userTheme = !userTheme)}>
					<FaMoon />
				</button>
				<button>
					<a href="/">
					<Button id="placement-bottom" class="-mt-3 md:hidden w-14">
						<div class="w-14 text-gray-500 outline-none">
							<TiArrowBack/>
						</div>
					</Button>
				</a>
				</button>
			</div>
		
			<!-- Navbar Links -->
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul class="mt-4 flex flex-col rounded-lg border p-4 text-lg font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
					<li>
						<a href="#Home" class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500" aria-current="page">
							Home
						</a>
					</li>
					<li><a href="#About" class="nav-link">About</a></li>
					<li><a href="#Savishkaara" class="nav-link">Savishkaara</a></li>
					<li><a href="#Team" class="nav-link">Team</a></li>
					<li><a href="/events" class="nav-link">Events</a></li>
					<li>
						<button class="h-7" on:click={() => (userTheme = !userTheme)}>
							<FaMoon />
						</button>
					</li>
				</ul>
			</div>
		
			<!-- Night Mode Toggle -->
			<!-- <button class=" h-7 md:hidden" on:click={toggleTheme}>
				<FaMoon />
			</button> -->
		</div>
		
		
	</nav>
	<h1 class="text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700">
		PAST EVENTS
	</h1>
	<div class="mb-40 mt-10 flex flex-wrap justify-center gap-6 pb-6">
		<EventCard
			name="Major Project Orientation"
			url="/assets/Posters/MajorProjectOrientation.jpeg"
			details="🏆 Im not getting paid enuf for these details😭"
		/>
		<EventCard
			name="Amrita Bit 7.0"
			url="/assets/Posters/AmritaBit-7.png"
			details="🏆 We warmly invite you to Amrita Bit 7.0 (project exhibition), where students will showcase their innovative ideas, creative solutions, and hard work. Come explore a diverse range of projects, interact with the creators, and be inspired by their dedication and ingenuity!"
		/>
		<EventCard
			name="Bits & Bolts"
			url="/assets/Posters/Bits&Bolts.jpeg"
			details="🏆 Join us for an engaging hardware workshop where you'll get a closer look at the inner workings of a physical computer—discover how each component comes together to power the technology we use every day!"
		/>
		<!-- <button
			on:click={() =>
				openModal(EventModal, {
					title: 'AI Reinforced Deep Learning Workshop',
					img: '/assets/Posters/deeplearning.jpg',
					details:
						'🏆 We’re thrilled to announce the AI Reinforced Deep Learning Workshop, a hands-on, full-day event on 24th September, starting at 9:30 AM in Lab 6, A Block!',
					indepth:
						'Have fun while learning AI! This workshop will give you the chance to explore cutting-edge AI techniques and apply them in a fun and engaging project. If you’ve ever wanted to delve into AI and deep learning in an exciting way, this is the workshop for you!',

					highlights:
						'Learn AI through a fun and interactive project.Get hands-on experience in real-world AI applications.Enhance your Python and AI skills.',
					requirements:
						'Open to All students.Only 60 seats available.Basic knowledge of Python is required.',
					fee: '₹100',
					contacts: 'Vaishnav - +91 6238996266. Hrishikesh Nair - +91 7510752549.'
				})}
		> -->
		<EventCard
			name="AI Reinforced Deep Learning Workshop"
			url="/assets/Posters/deeplearning.jpg"
			details="🏆 We’re thrilled to announce the AI Reinforced Deep Learning Workshop, a hands-on, full-day event on 24th September, starting at 9:30 AM in Lab 6, A Block!"
		/>
		<!-- </button> -->
		<EventCard
			name="Entrepreneurship And Financial Independence"
			url="/assets/Posters/Entrepreneurship.jpg"
			details="🏆 Todo"
		/>
		<EventCard
			name="Ethical Hacking Bootcamp"
			url="/assets/Posters/EthicalHacking.jpeg"
			details="🏆 Todo"
		/>
		<EventCard
			name="Generative AI - Introduction"
			url="/assets/Posters/GenerativeAI.jpg"
			details="🏆 Todo"
		/>
		<EventCard name="InspireX" url="/assets/Posters/InspireX.jpg" details="🏆 Todo" />
		<EventCard
			name="Programming with GPU"
			url="/assets/Posters/ProgrammingGpu.jpg"
			details="🏆 Todo"
		/>
		<EventCard
			name="Minor Project Orientation"
			url="/assets/Posters/ProjectOrientation.jpg"
			details="🏆 Todo"
		/>
		<EventCard
			name="Research Methodology"
			url="/assets/Posters/ResearchMethodology.jpg"
			details="🏆 Todo"
		/>
		<EventCard
			name="Securing Systems"
			url="/assets/Posters/SecuringSystems.jpg"
			details="🏆 Todo"
		/>
	</div>
	<Modals></Modals>
	<h1 class="text-center text-4xl font-bold text-pink-700 underline decoration-2 dark:text-red-700">
		SAVISHKAARA 2024
	</h1>
	<div class="mt-10 flex flex-wrap justify-center gap-6 pb-6">
		<EventCard
			name="Amrita CTF"
			url="/assets/Posters/amritactf.jpg"
			details="🏆 Get ready to unleash your inner hacker in our adrenaline-fueled Capture the Flag competition, Hosted by the Department of Computer Science & IT. Dive into a world of cyber challenges, where every byte counts and victory awaits the bold. Register now and join us in the battle for digital supremacy!"
		/>
		<EventCard
			name="Biz Blitz"
			url="/assets/Posters/bizblitz.jpg"
			details="🎖️Think outside the box and inside the market! Join us for the Department of Computer Science & IT's Biz Blitz, where participants unleash their creativity to market a range of products like never before."
		/>
		<EventCard
			name="E-Football"
			url="/assets/Posters/efootball.jpg"
			details="🎖️Get ready to unleash your inner athlete in our electrifying e-football tournament, Hosted by the Department of Computer Science & IT. Dive into the digital arena as you compete in thrilling matches, showcasing your skills and strategic prowess."
		/>
		<EventCard
			name="Electro Forge"
			url="/assets/Posters/electroforge.jpg"
			details="💡Calling all students from every department! Are you ready to unleash your inner hardware wizard and forge something extraordinary? Join us for Electro Forge, an electrifying hardware assembly competition proudly brought to you by the Department of Computer Science and IT."
		/>
		<EventCard
			name="Enigma"
			url="/assets/Posters/enigma.jpg"
			details="🏆 Gear up for a thrilling Logo Guess challenge, Hosted by the Department of Computer Science & IT. Dive into the world of branding and design as you decipher iconic logos. Every guess counts as you race towards victory in this ultimate test of visual recognition."
		/>
		<EventCard
			name="Logo Design"
			url="/assets/Posters/logodesign.jpg"
			details="🏆 Get ready to unleash your creativity in our exhilarating Logo Design challenge, Hosted by the Department of Computer Science & IT. Dive into the world of branding and design as you craft iconic logos from scratch"
		/>
		<EventCard
			name="NerdScript 2.0"
			url="/assets/Posters/nerdscript.jpg"
			details="🧑‍💻Calling all code wizards! The Department of Computer Science & IT presents a thrilling competition where creativity meets challenge. Dive into the world of coding, solve complex problems, and emerge as the coding maestro!"
		/>
		<EventCard
			name="Photo Scavenger"
			url="/assets/Posters/photoscav.jpg"
			details="🏆 Get ready to unleash your inner explorer in our exhilarating Photo Scavenger Hunt adventure, Hosted by the Department of Computer Science & IT. Dive into the world of photography as you capture moments and stories through your lens."
		/>
		<EventCard
			name="Swiftknot Sprint"
			url="/assets/Posters/swiftknotsprint.jpg"
			details="🧑‍💻 Race against the clock and your peers in the ultimate keyboard showdown! Join us for the *Department of Computer Science & IT*'s Swiftknot Sprint and let your fingers do the talking. Who will emerge as the fastest typer?"
		/>
		<EventCard
			name="Treasure Hunt"
			url="/assets/Posters/treasurehunt.jpg"
			details="🎖️ Embark on a quest for hidden treasures in our thrilling Treasure Hunt event, hosted by the *Department of Computer Science & IT*. Challenge your wits, solve mind-bending puzzles, and conquer exciting tasks in this ultimate adventure."
		/>
		<EventCard
			name="Web Hackathon"
			url="/assets/Posters/webhackathon.jpg"
			details="🌐 Join the Department of Computer Science & IT's Web Hackathon for an exhilarating journey! Unleash your creativity as you develop web or mobile apps with database connectivity."
		/>
		<EventCard
			name="Xonotic"
			url="/assets/Posters/xonotic.jpg"
			details="🎖️ Prepare to enter the virtual arena and battle for supremacy in the *Department of Computer Science & IT*'s Xonotic event! Whether you're a seasoned player or a newcomer, this is your chance to showcase your skills and claim victory !"
		/>
	</div>
</body>

<style>
	body{
		@apply transition-colors duration-500;
	}
	.nav-link {
		@apply block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500;
	}
</style>
