import { writable } from 'svelte/store';

export const nextEl = writable(0);
export const lastEl = writable(1);
export const transitionY = writable(500);
