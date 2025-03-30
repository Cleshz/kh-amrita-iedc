import { writable } from 'svelte/store';
import { browser } from '$app/environment';


const initialTheme = browser ? localStorage.getItem('theme') === 'dark' : false;
export const theme = writable(initialTheme);

theme.subscribe((value) => {
    if (browser) {
        localStorage.setItem('theme', value ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', value);
        console.log(value)
    }
});
