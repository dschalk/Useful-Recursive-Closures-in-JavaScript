import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var A = {
    step: 0
  };
  const dF3x = Symbol("dF3x");
  const M = (initialState) => {
    let x = { ...initialState };
    const go = (func) => {
      if (func === dF3x) {
        return x;
      }
      x = func(x);
      return go;
    };
    return go;
  };
  M({
    cities: [],
    bestPath: [],
    penultimatePath: [],
    beforeDistance: 0,
    afterDistance: 0,
    improved: true,
    step: 0,
    lastChange: { start: -1, end: -1 }
  });
  let beforeCanvas;
  let afterCanvas;
  return `<h1 data-svelte-h="svelte-yaoto3">Traveling Salesman Problem</h1> <div style="display: flex; gap: 20px;"><div><h2 data-svelte-h="svelte-1sjqmj5">Before</h2> <canvas width="800" height="600"${add_attribute("this", beforeCanvas, 0)}></canvas> <p>Total Distance: ${escape("N/A")}</p></div> <div><h2 data-svelte-h="svelte-12liwks">After</h2> <canvas width="800" height="600"${add_attribute("this", afterCanvas, 0)}></canvas> <p>Total Distance: ${escape("N/A")}</p></div></div> <button data-svelte-h="svelte-1107c6w">Generate Cities</button> <button data-svelte-h="svelte-12hebkb">Solve TSP (Step-by-Step)</button> <button data-svelte-h="svelte-1redxvh">Reset</button> <p>Steps Taken: ${escape(A?.step)}</p> <p>Improvement: ${escape("N/A")}</p>`;
});
export {
  Page as default
};
