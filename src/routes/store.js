
import { getContext, hasContext, setContext } from "svelte";
import { readable, writable } from "svelte/store";

// store.js
import { writable } from 'svelte/store';

export const createState = () => {
  const { subscribe, update, set } = writable({
    cities: [],
    bestPath: [],
    penultimatePath: [],
    beforeDistance: 0,
    afterDistance: 0,
    improved: true,
    step: 0,
    lastChange: { start: -1, end: -1 }
  });

  return {
    subscribe,
    updateState: (newState) => update(() => newState),
    reset: () => set({
      cities: [],
      bestPath: [],
      penultimatePath: [],
      beforeDistance: 0,
      afterDistance: 0,
      improved: true,
      step: 0,
      lastChange: { start: -1, end: -1 }
    })
  };
};

export const state = createState();