<script lang="ts">
	import TeamCard from './TeamCard.svelte';
</script>

<div class="text-center text-xl font-bold md:text-4xl max-lg:mt-60 -mt-28">
	<h1 class="text-pink-700 underline decoration-2 dark:text-red-700">OUR FACULTY</h1>
	<h1 class="mt-5 text-xs md:text-lg">
		"Coming together is a beginning, staying together is progress,<br />
		and working together is success."
	</h1>
	<div class="my-6 flex flex-wrap justify-center gap-6">
		<TeamCard
			name="Nima S. Nair"
			role="Nodal Officer"
			phone="+91 9947152940"
			mail="nima@kh.amrita.edu"
		/>
		<TeamCard
			name="A. S. Mahesh"
			role="Asst. Nodal Officer"
			phone="+91 9447369203"
			mail="asmahesh@kh.amrita.edu"
		/>
	</div>
	<h1 class="text-pink-700 underline decoration-2 dark:text-red-700">OUR TEAM</h1>

	<div class="mt-6 flex flex-wrap justify-center gap-6">
		<TeamCard
			name="Vaishnav B"
			role="Chief Executive Officer"
			phone="+91 6238996266"
			mail="ceoiedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Apurva Sunil"
			role="EXPIRED"
			phone="+91 6238191357"
			mail="iedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Sabhyam Mishra"
			role="EXPIRED💀💀"
			phone="+91 9633149771"
			mail="iedc@kh.amrita.edu"
			
		/>
		<TeamCard
			name="Jasmin T J"
			role="Women's Lead"
			phone="+91 9947705103"
			mail="iedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Adithyan S"
			role="Chief Technical Officer"
			phone="+91 9388274985"
			mail="ctoiedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Sidhu Manoj V"
			role="Chief Finance Officer"
			phone="+91 9207833993"
			mail="cfoiedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Rasmi Raju"
			role="Chief Marketing Officer"
			phone="+91 7736190622"
			mail="cmoiedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Natasha M H"
			role="Public Relations Officer"
			phone="+91 7907533185"
			mail="proiedc@kh.amrita.edu"

		/>
		<TeamCard
			name="Treesa Joseph Mampilly"
			role="Chief Creative Officer"
			phone="+91 9188732355"
			mail="ccoiedc@kh.amrita.edu"
		/>
		<TeamCard
			name="Hrishikesh Nair"
			role="Chief Operating Officer"
			phone="+91 7510752549"
			mail="cooiedc@kh.amrita.edu"
		/>
	</div>
</div>
