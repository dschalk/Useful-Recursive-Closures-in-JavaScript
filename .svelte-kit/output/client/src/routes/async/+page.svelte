<script>
	import { merge_ssr_styles } from 'svelte/internal';
	import { fade } from 'svelte/transition';

function dF3x () {};
var log = console.log;
async function asyncId (x) {return x};

function M (x) {
  return function go (func) {
      if (func === dF3x) return x;
      else x = asyncId(x).then(v => func(v));
      return go;
  }
}

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
m(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `


</script>
    
<style>
    h3 {color:rgb(187, 248, 204) }
</style>

<h1 style = "text-align: center">Asynchronous Transformations</h1>
  
  <h3>GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure</h3>
<pre>{closure}</pre>
<p>If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10</p> 
<pre>{test}</pre>








