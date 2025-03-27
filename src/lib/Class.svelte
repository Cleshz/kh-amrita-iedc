
<script lang="ts">
	export let svg = '';
	export let level = 'Basics';
	export let title = '';
	export let viewBox = '0 0 100 100';
</script>

<div class="card group scale-90 duration-300 hover:scale-95">
	<div class="flex justify-center w-full">
		<svg
			class="App-logo mt-7 transition-colors duration-300  group-hover:stroke-red-500 scale-75 fill-slate-950"
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox}

		>
			<title>iconCard</title>
			<path d={svg} />
		</svg>
	</div>
	<div class="header">
		<center>
			<span class="welcometo">ESP 32 {level}</span> <br />
			<span class="python">{title}</span>
		</center>
	</div>
	<button class="App-button">Start Coding</button>
</div>

<style>
	.card {
		background-color: #191e24;
		border: 3px solid #387eb8;
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
		stroke: white;
	}

	.App-button {
		padding: 10px 20px;
		background-color: transparent;
		color: #ffe052;
		font-size: 15px;
		border: 3px solid #ffe052;
		border-radius: 5em;
		margin-top: 20px;
		transition: 0.2s;
	}

	.App-button:hover {
		color: #191e24;
		background-color: #ffe052;
	}

	.welcometo {
		color: #dc5f6a;
	}

	.python {
		color: #ffe052;
	}
</style>