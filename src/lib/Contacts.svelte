<script lang="ts">
	//@ts-nocheck
	import GoLocation from 'svelte-icons/go/GoLocation.svelte';
	import GoMail from 'svelte-icons/go/GoMail.svelte';
	import MdPhoneInTalk from 'svelte-icons/md/MdPhoneInTalk.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
</script>

<body class=" flex flex-col mt-60 h-screen">
	<h1
		class="mt-5 text-center text-xl font-bold text-pink-700 underline md:text-4xl dark:text-red-600"
	>
		CONTACT US
	</h1>
	<h1 class="mt-5 text-center text-xs md:text-lg">
		IEDC is not just a program. it's your ticket to an exciting world of endless possibilities.
	</h1>
	<div class="mx-6 mt-10 h-full grid-cols-4 gap-6 pb-6 md:grid ">
		<div
			class="col-span-1 rounded-2xl pb-4 pt-1 shadow-2xl shadow-black max-md:mb-3 dark:bg-gray-900"
		>
			<div class="mx-auto mb-7 mt-3 w-8 text-pink-700 md:mt-16 md:w-16 dark:text-red-500">
				<GoLocation />
			</div>
			<h1 class="text-center text-lg font-bold text-black md:text-3xl dark:text-white">
				Our Address
			</h1>
			<h1 class="mt-5 px-5 text-center text-sm font-bold text-black md:text-lg dark:text-white">
				Edappally North, Amrita Nagar, Brahmasthanam,
			</h1>
		</div>

		<div class="col-span-2 shadow-2xl shadow-black max-md:mb-3" >
			<iframe
				class="h-full w-full rounded-lg"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125738.26123967479!2d76.22132246951735!3d9.990348676162679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc26c6734a5%3A0x80f344b602935780!2sAmrita%20School%20of%20Arts%20and%20Sciences!5e0!3m2!1sen!2sin!4v1696344207867!5m2!1sen!2sin"
				frameborder="0"
				title="map"
				loading="lazy"
			></iframe>
		</div>

		<div class="col-span-1 rounded-2xl shadow-2xl shadow-black dark:bg-gray-900  grid grid-rows-2 gap-0" >
			<div class="mt-5 text-center">
				<div class="mx-auto mb-2 mt-3 w-8 text-pink-700 md:mt-2 md:w-12 dark:text-red-500">
					<GoMail />
				</div>
				<h1 class="text-center text-lg font-bold text-black md:text-2xl dark:text-white">
					Email Us
				</h1>
				<a
					class="mt-5 px-5 text-center text-sm font-bold text-black hover:text-purple-500 md:text-lg dark:text-white"
					href="mailto:iedc@kh.amrita.edu"
				>
					iedc@kh.amrita.edu
				</a>
			</div>
			<div class="pb-10 text-center md:mt-12">
				<div class="mx-auto mb-2 mt-3 w-8 text-pink-700 md:mt-2 md:w-12 dark:text-red-500">
					<MdPhoneInTalk />
				</div>
				<h1 class="text-center text-lg font-bold text-black md:text-2xl dark:text-white">
					Call Us
				</h1>
				<a
					class=" px-5 text-center text-sm font-bold text-black hover:text-purple-500 md:text-lg dark:text-white"
					href="tel:+91 6238996266"
				>
					+91 6238996266
				</a>
			</div>
		</div>

		<div class="col-span-4 mt-0 w-full rounded-2xl bg-gray-200 dark:bg-gray-900">
			<div class="mx-5 mt-5 grid-cols-4 md:grid">
				<h1 class=" text-xl font-bold text-pink-700">AMRITA VISHWA VIDYAPEETHAM KOCHI</h1>
				<ul class="dark:text-white">
					<li class="font-bold">Useful Links</li>
					<li><a class="hover:text-pink-600" target="_blank" href="https://ipl.startupmission.in/">&gt; IPL</a></li>
					<li>
						<a class="hover:text-pink-600" target="_blank" href="https://startupmission.kerala.gov.in/">&gt; KSUM</a
						>
					</li>
				</ul>

				<ul class="dark:text-white">
					<li class="font-bold">Our Services</li>
					<li>
						<a class="hover:text-pink-600" target="_blank" href="https://innovate.startupmission.in/joinus"
							>&gt; Join IEDC</a
						>
					</li>
					<!-- <li>
						<a class="hover:text-pink-600" href="https://startupmission.kerala.gov.in/"
							>&gt; JOIN SIC</a
						>
					</li> -->
				</ul>
				<div>
					<h1 class="font-bold">Our Social Networks</h1>
					<div class="mt-1 flex gap-3">
						<a class="w-10 hover:text-pink-700" target="_blank" href="https://www.instagram.com/iedc.asas/"><FaInstagram /></a>
                        <a class="w-10 hover:text-pink-700" target="_blank" href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-iedc-asas/"><FaLinkedin /></a>
                        <!-- <a class="w-10 hover:text-pink-700" target="_blank" href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-iedc-asas/"><FaTwitter /></a> -->
                    </div>
				</div>
			</div>

			<div class="mx-10 mt-2 flex justify-between pb-4 gap-6">
				<h1>© Copyright Amrita Vishwa Vidyapeetham, Kochi Campus. All Rights Reserved</h1>
				<h1>Designed by IEDC CTO at Amrita</h1>
			</div>
		</div>
	</div>
</body>

<style>
		body,div{
		@apply transition-colors duration-300;
	}
</style>
