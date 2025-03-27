<script lang="ts">
	//@ts-nocheck
	import FaRegCopy from 'svelte-icons/fa/FaRegCopy.svelte';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import { onMount } from 'svelte';
	import * as monaco from 'monaco-editor';
	let copied = false;
	import { tick } from 'svelte';
	export let code = '';

	let editorContainer: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;

	onMount(() => {
		editor = monaco.editor.create(editorContainer, {
			value: code,
			language: 'cpp',
			theme: 'vs-dark',
			readOnly: true,
			minimap: { enabled: false },
			fontSize: 16,
			automaticLayout: true
		});
	});

	async function copyCode() {
		await navigator.clipboard.writeText(code);
		copied = true;
		await tick();
		setTimeout(() => {
			copied = false;
		}, 1500);
	}
</script>

<!-- <div bind:this={editorContainer} class="h-80 w-full rounded-lg border border-neutral-700" /> -->
<div class="relative h-96 w-full overflow-hidden rounded-lg border border-neutral-700">
	<div bind:this={editorContainer} class="h-full w-full" />
	<button
		on:click={copyCode}
		class="absolute right-5 top-2 flex items-center gap-2 rounded-md bg-neutral-800 px-3 py-1 text-sm text-white shadow-md transition hover:bg-neutral-700"
	>
		{#if copied}
			<div class="w-8 text-green-500"><FaCheck /></div>
			Copied
		{:else}
			<div class="w-8 "><FaRegCopy /></div>
			 Copy Code
		{/if}
	</button>
</div>
