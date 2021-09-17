// svelte
import { writable } from 'svelte/store';

// http

// types
import { communityType } from './ts/types/commune';

export const nextEl = writable<number>(0);
export const lastEl = writable<number>(1);
export const transitionY = writable<number>(500);




// start setting up for http
export const communityStore = writable<communityType[]>([]);
