import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "h3.svelte-xvyccl{color:rgb(187, 248, 204) }",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { merge_ssr_styles } from \'svelte/internal\';\\n\\timport { fade } from \'svelte/transition\';\\n\\nfunction dF3x () {};\\nvar log = console.log;\\nasync function asyncId (x) {return x};\\n\\nfunction M (x) {\\n  return function go (func) {\\n      if (func === dF3x) return x;\\n      else x = asyncId(x).then(v => func(v));\\n      return go;\\n  }\\n}\\n\\nvar closure = `function dF3x () {};\\nvar log = console.log;\\nasync function asyncId (x) {return x};\\n\\nfunction M (x) {\\n  return function go (func) {\\n      if (func === dF3x) return clone(x);\\n      else x = asyncId(x).then(v => func(v));\\n      return go;\\n  }\\n}`;\\n\\nvar test = `var m = M(3);\\nm(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `\\n\\n\\n<\/script>\\n    \\n<style>\\n    h3 {color:rgb(187, 248, 204) }\\n</style>\\n\\n<h1 style = \\"text-align: center\\">Asynchronous Transformations</h1>\\n  \\n  <h3>GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure</h3>\\n<pre>{closure}</pre>\\n<p>If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10</p> \\n<pre>{test}</pre>\\n\\n\\n\\n\\n\\n\\n\\n\\n"],"names":[],"mappings":"AAmCI,gBAAG,CAAC,MAAM,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var closure = `function dF3x () {};
var log = console.log;
async function asyncId (x) {return x};

function M (x) {
  return function go (func) {
      if (func === dF3x) return clone(x);
      else x = asyncId(x).then(v => func(v));
      return go;
  }
}`;
  var test = `var m = M(3);
m(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `;
  $$result.css.add(css);
  return `<h1 style="text-align: center" data-svelte-h="svelte-z7nlbi">Asynchronous Transformations</h1> <h3 class="svelte-xvyccl" data-svelte-h="svelte-cmiygg">GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure</h3> <pre>${escape(closure)}</pre> <p data-svelte-h="svelte-1a82hpg">If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10</p> <pre>${escape(test)}</pre>`;
});
export {
  Page as default
};
