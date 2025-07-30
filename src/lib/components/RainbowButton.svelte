<a href="https://savishkaara.in" target="_blank" rel="noopener noreferrer">

<button class="button">
	<span>Join Savishkaara 2025</span>
</button>
</a>
<style>
	.button {
		position: relative;
		text-decoration: none;
		@apply text-black hover:text-white dark:text-white;
		background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
		padding: 14px 25px;
		border-radius: 10px;
		font-size: 1.25em;
		cursor: pointer;
	}

	.button span {
		position: relative;
		z-index: 1;
	}

	.button::before {
		content: '';
		position: absolute;
		inset: 1px;
		@apply bg-white dark:bg-slate-950;
		border-radius: 9px;
		transition: 0.5s;
	}

	.button:hover::before {
		opacity: 0.7;
	}

	.button::after {
		content: '';
		position: absolute;
		inset: 0px;
		background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
		border-radius: 9px;
		transition: 0.5s;
		opacity: 0;
		filter: blur(20px);
	}

	.button:hover:after {
		opacity: 1;
	}
</style>
