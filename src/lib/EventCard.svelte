<script lang="ts">
	export let name: string;
	export let url: string;
	export let details: string;
	export let status: string='Ended';

</script>

<div class="card">
	<div class="content">
		<div class="back">
			<div class="back-content">
				<div class="relative mx-5">
					<img class="rounded-lg object-fill blur-sm" src={url} alt="" />
					<img
						class="absolute left-1 top-1 w-72 rounded-lg object-fill blur-none"
						src={url}
						alt=""
					/>
				</div>
			</div>
		</div>
		<div class="front">
			<div class="front-content">
				<div class="description mb-5 mt-2">
					<div class="title">
						<p class="title text-center font-bold">
							{name}
						</p>
					</div>
				</div>
				<h1 class="mx-2 pb-2 font-bold text-black dark:text-white">{details}</h1>
				<!-- {#if status!='Join'} -->
					<small class="badge m-auto">
						<button
							class=" transform rounded-full border-2 border-black dark:border-white bg-transparent px-8 py-2 text-lg font-bold text-black dark:text-white shadow-lg transition-transform hover:scale-105 hover:border-green-600 hover:shadow-2xl hover:shadow-green-500/50 focus:outline-none"
						>
							{status}
						</button>
					</small>
				<!-- {:else}
				<small class="badge m-auto">
					<button
						class=" transform rounded-full border-2 border-black dark:border-white bg-transparent px-8 py-2 text-lg font-bold text-black dark:text-white shadow-lg transition-transform hover:scale-105 hover:border-green-600 hover:shadow-2xl hover:shadow-green-500/50 focus:outline-none"
					>
						Ended
					</button>
				</small>
				{/if} -->
			</div>
		</div>
	</div>
</div>

<!-- <div class="mx-5 relative">
	<img class="rounded-lg object-fill blur-sm " src={url} alt="" />
	<img class="rounded-lg object-fill blur-none absolute top-1 left-1 w-72" src={url} alt="" />
</div> -->

<style>
	/* From Uiverse.io by ElSombrero2 */
	.card {
		overflow: visible;
		width: 340px;
		height: 360px;
	}

	.content {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 300ms;
		box-shadow: 0px 0px 10px 1px #000000ee;
		border-radius: 5px;
	}

	.front,
	.back {
		@apply bg-white text-black dark:bg-neutral-900;
		/* background-color: #151515; */
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		border-radius: 5px;
		overflow: hidden;
	}

	.back {
		width: 100%;
		height: 100%;
		justify-content: center;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.back::before {
		position: absolute;
		content: ' ';
		display: block;
		width: 160px;
		height: 160%;
		background: linear-gradient(
			90deg,
			transparent,
			#ea1136,
			#d3168c,
			#a618d1,
			#7605e0,
			#1210d9,
			transparent
		);
		animation: rotation_481 5000ms infinite linear;
	}

	.back-content {
		@apply bg-white dark:bg-neutral-900;
		position: absolute;
		width: 99%;
		height: 99%;
		/* background-color: #151515; */
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}

	.card:hover .content {
		transform: rotateY(180deg);
	}

	@keyframes rotation_481 {
		0% {
			transform: rotateZ(0deg);
		}

		0% {
			transform: rotateZ(360deg);
		}
	}

	.front {
		transform: rotateY(180deg);
		color: white;
	}

	.front .front-content {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.front-content .badge {
		padding: 2px 10px;
		border-radius: 10px;
		backdrop-filter: blur(2px);
		width: fit-content;
	}

	.description {
		box-shadow: 0px 0px 10px 5px #00000088;
		width: 100%;
		padding: 10px;
		background-color: #00000099;
		backdrop-filter: blur(5px);
		border-radius: 5px;
	}

	.title {
		font-size: 18px;
		max-width: 100%;
	}

	@keyframes floating {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(10px);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
