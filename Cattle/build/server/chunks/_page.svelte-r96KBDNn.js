import { c as create_ssr_component, e as escape } from './ssr-0d8NzNEj.js';

async function idP(x) {
  await wait(5);
  return x;
}
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function squareP(x) {
  await wait(300);
  return x * x;
}
function* generatorFunction() {
  yield `m(v=>v**3)`;
  yield `m(dF3x)  // 3`;
  yield `m(v=>v**3)(v=>v*2)(v=>v-12)`;
  yield `m(dF3x)  // 42`;
  yield `m(v=>v+7)(Math.sqrt)(dF3x)  // 7`;
  return "";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var dF3x = () => {
  };
  function M(x) {
    return function go(func) {
      if (func === dF3x)
        return x;
      else
        x = idP(x).then((v) => func(v));
      return go;
    };
  }
  const m = M(3);
  var Mcode = `    var dF3x = () => {}; 

    function M (x) {
        return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
        };
    };
    
    const m = M(3); 
    
    async function idP (x) {
      await wait(5)
      return x;
    } ;

    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }`;
  var A;
  let pause = (t) => async (x) => {
    await wait(t);
    return x;
  };
  async function hello(x) {
    A = "Hello ";
    await wait(700);
    B = "World";
    await wait(700);
    A = 42;
    await wait(700);
    B = 42;
    await wait(600);
    return x;
  }
  let addP = (x) => async (y) => {
    await wait(500);
    return parseInt(x, 10) + parseInt(y, 10);
  };
  let divP = (a) => async (b) => {
    await wait(300);
    return b / a;
  };
  var functionCode = `    function wait(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
    
    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    let pause = t => async x => {
      await wait(t)
      return x;
    }
    
    async function hello (x) {
      await wait(1000)
      A = "Hello "
      await wait(700)
      B = "World"
      await wait(700)
      A = 42
      await wait(700)
      B = 42
      return x;
    }
    
    let divPinverse = a => async b => {
      await wait (300)
      return a/b;
    }
    
    let addP =  x => async y => {
      await wait(300)
      return parseInt(x,10) + parseInt(y,10);
    }
    
    let doubleP = async y => {
      await wait(600)
      return 2 * parseInt(y,10) 
    }
    
    let multP = x => async y => {
      await wait(600)
      return x * y;
    }
    
    let divP = a => async b => {
      await wait (300)
      return b/a;
    }
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    } `;
  A = "A";
  var B = "B";
  var C = "C";
  var D = "D";
  function restart() {
    A = "A";
    B = "B";
    C = "C";
    D = "D";
    m(() => 4)(addP(3))(squareP)((v) => v - 7)(dF3x).then((v) => A = v);
    m((v) => v / 42)((v) => v + 5)((v) => v * 7)(pause(600))(dF3x).then((v) => B = v);
    m(addP(7))(Math.sqrt)((v) => v * 6)(hello)(dF3x).then((a) => C = a);
    m(divP(14))((v) => v * 3)(addP(5))((v) => v * 3)(dF3x).then((v) => D = v);
  }
  var restartCode = `    function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"
    m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      
    m(v => v/42)(v => v + 5)(v=>v*7)(pause(600))(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(hello)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 

    }`;
  restart();
  var G = "";
  var generator = generatorFunction();
  function cow() {
    console.log("Fuck you");
    var z = generator.next().value;
    console.log("z is", z);
    if (z != void 0)
      G = z;
    else
      G = "";
  }
  cow();
  console.log("Fuck you");
  return ` <p data-svelte-h="svelte-qhjuei">Using the modified version of M below, m can handle mixtures of synchronous and asynchronous arguments. idP(a) has no effect if a is a promise. Otherwise, idP transforms a into a promise. To see this in action, click &quot;Restart&quot; (below).</p> <pre>${escape(Mcode)}</pre> <p id="yes" data-svelte-h="svelte-180s3jf">In the demonstration below, &quot;m&quot; is given mixtures of simple functions and promises.</p> <button data.sveltekit.reload data-svelte-h="svelte-7mhl08">Restart</button> <br><br> <span style="color: #FAF" data-svelte-h="svelte-10m3kr1">          m(() =&gt; 4)(addP(3)) (squareP) (v =&gt; v-7)(dF3x).then(v =&gt; (A = v));
=</span> <span style="font-weight: bold; color:red">${escape(A)}</span>    <span data-svelte-h="svelte-1tvym8y">// x is changed to 4, then  (4+3)**2 - 7 = 42</span> <br><br> <span style="color:#FAF">         m(v =&gt; v/42)(v =&gt; v + 5)(v=&gt;v*7)(pause(600))(dF3x).then(v =&gt; (B = v));
= <span style="font-weight: bold; color:red">${escape(B)}</span></span> <span data-svelte-h="svelte-506qr8">    //  (42/42)*6*7 = 42</span> <br><br> <span style="color:#FAF">         m(addP(7))(Math.sqrt)(v =&gt; v*6)(hello)(dF3x).then(a =&gt; (C = a));
= <span style="font-weight: bold; color:red">${escape(C)}</span></span> <span data-svelte-h="svelte-1kgm6a4">    //  Math.sqrt(42 + 7) * 6 = 42</span> <br><br> <span style="color:#FAF">          m(divP(14))(v =&gt; v * 3)(addP(5))(v=&gt; v * 3)(dF3x).then(v =&gt; (D = v)) = <span style="font-weight: bold; color:red">${escape(D)}</span></span> <span data-svelte-h="svelte-1c5fdgj">    //  ((42 / 14) * 3 + 5) * 3 = 42</span> <p data-svelte-h="svelte-1omp1e7">The asynchronous functions used above are in this list:</p> <pre>${escape(functionCode)}</pre> <p data-svelte-h="svelte-15mm6ld">Here&#39;s the restart code:</p> <pre>${escape(restartCode)}</pre> <h2 data-svelte-h="svelte-14u0hcr">m = M(3)</h2> <h2>${escape(G)}</h2> <br><br><br> <br><br><br> <br><br><br>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-r96KBDNn.js.map
