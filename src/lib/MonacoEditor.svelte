<script lang="ts">
//@ts-nocheck
import FaRegCopy from 'svelte-icons/fa/FaRegCopy.svelte';
import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
import { onMount, onDestroy } from 'svelte';
import * as monaco from 'monaco-editor';
import { theme } from '$lib/themeStore'; // Import the theme store
import { tick } from 'svelte';

export let code = '';
let copied = false;
let editorContainer: HTMLDivElement;
let editor: monaco.editor.IStandaloneCodeEditor;
let unsubscribe: () => void;

onMount(() => {
	editor = monaco.editor.create(editorContainer, {
		value: code,
		language: 'cpp',
		theme: 'vs-dark', // Default theme
		readOnly: true,
		minimap: { enabled: false },
		fontSize: 16,
		automaticLayout: true
	});

	// Subscribe to theme store and update Monaco's theme
	unsubscribe = theme.subscribe((isDark) => {
		const monacoTheme = isDark ? 'vs-dark' : 'vs-light';
		monaco.editor.setTheme(monacoTheme);
	});
});

onDestroy(() => {
	unsubscribe(); // Unsubscribe to prevent memory leaks
	editor.dispose(); // Dispose of Monaco instance
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
		class="absolute right-5 top-6 z-40 flex items-center gap-2 rounded-md dark:bg-neutral-800 bg-neutral-100 px-3 py-1 text-sm dark:text-white shadow-md transition dark:hover:bg-neutral-700 hover:bg-neutral-200"
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
