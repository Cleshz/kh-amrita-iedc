<script lang="ts">
	export let svg = '';
	export let level = 'Basics';
	export let title = '';
	export let viewBox = '0 0 100 100';
	export let url = '';
</script>

<a href="/resources/{url}">
	<div
		class="card group scale-90 cursor-pointer shadow-2xl shadow-black duration-300 hover:scale-95"
	>
		<div class="flex w-full justify-center">
			<svg
				class={`App-logo mt-7 scale-75 fill-white stroke-black transition-colors duration-300
			 ${level == 'Basics' ? 'group-hover:stroke-red-500' : ' group-hover:stroke-orange-400'} dark:fill-slate-950 dark:stroke-white`}
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				{viewBox}
			>
				<title>iconCard</title>
				<path d={svg} />
			</svg>
		</div>
		<div class="header">
			<center>
				<span class={`${level == 'Basics' ? 'text-red-600' : ' text-orange-500'} `}
					>ESP 32 {level}</span
				> <br />
				<span class="text-black dark:text-white">{title}</span>
			</center>
		</div>
		<div
			class="my-2 rounded-full border-4 border-green-400 px-8 py-3 text-base
		text-black transition-colors duration-500 hover:bg-green-400 dark:text-white dark:hover:text-black"
		>
			Start Building!
		</div>
	</div>
</a>

<style>
	.card {
		border: 5px solid #387eb8;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 26px;
		font-weight: 700;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		padding: 25px 5px;
		color: white;
		border-radius: 45px;
	}

	.App-logo {
		pointer-events: none;
		width: 350px;
		height: 200px;
		stroke-width: 3px;
	}

	.App-button {
		padding: 10px 20px;
		background-color: transparent;
		color: #52ff5b;
		font-size: 15px;
		border: 3px solid #52ff5b;
		border-radius: 5em;
		margin-top: 20px;
		transition: 0.2s;
	}

	.App-button:hover {
		color: #191e24;
		background-color: #52ff5b;
	}

	/* .python {
		color: #ffe052;
	} */
</style>
