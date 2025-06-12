import { c as create_ssr_component, e as escape } from './ssr-DgjyUhy2.js';

var s = "stop";
function M(x) {
  return function go(func) {
    if (func == "stop") return x;
    if (x instanceof Promise) x = x.then((v) => x = func(v));
    else if (typeof func == "function") x = func(x);
    return go;
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ar;
  var L;
  var f = async (c) => await c;
  var m3 = M(3);
  var log = console.log;
  var AR;
  log("<@><@><@> <$><$><$> <%><%><%> m3(s)", m3(s));
  m3 = M(3);
  log("AR is", AR);
  log("$&$&$&$&$&$&  m3(s) is", m3(s));
  f(9).then((v) => console.log("v == 9", v === 9));
  log("f(f(7)) == f(7)", f(7).then((v1) => f(7).then((v2) => v1 == v2)));
  setTimeout(() => L = ar(), 2200);
  setTimeout(() => L = ar(), 3500);
  var bigMonad = `function Comp ( AR = [] )  {
      var f_, p, run;
      var ar = AR.slice();
      var x = ar.pop();
      return run = (function run (x) {
        if (x === null || x === NaN ||
          x === undefined) x = f_('stop').pop();
        if (x instanceof Filt) {
          var z = ar.pop();
          if (x.filt(z)) x = z; else ar = [];
        }
        else if (x instanceof Promise) x.then(y =>
          {if (y != undefined && typeof y !== "boolean"
            && y === y && y.name !== "f_" && y.name !== "stop" ) {
          ar.push(y);
          diffRender()
        }})
        else if (x != undefined && x === x && x !== false
          && x.name !== "f_" && x.name !== "stop" ) {
          ar.push(x);
          diffRender()
        };
        function f_ (func) {
          if (func === 'stop' || func === 'S') return ar;
          else if (func === 'finish' || func === 'F') return Object.freeze(ar);
          else if (typeof func !== "function") p = func;
          else if (x instanceof Promise) p = x.then(v => func(v));
          else p = func(x);
          return run(p);
        };
        return f_;
      })(x)
    }`;
  var arrayCode = `m3(asyncMult(1))(x => fMult(x)(7))(v => v*2)(asyncAdd(58))(fMult(2))
    (asyncMult(0.025))(asyncAdd(1))(asyncMult(7))(fact2)(v => 36)(fact2)
    (v => 888)(asyncId)(fact2)(v => [2,3,4])(asyncId)(v => v = v.concat(5))
    (asyncId)(red)(fact2)
    
    setTimeout(() => {m3(v => [3,3,3])(asyncId)(red)(fact2)},3000);
    
    setTimeout(() => L = ar(),2200);
    setTimeout(() => L = ar(),3500);
        where ar = () => AR.join(" --> ")
          and AR and other relevant functions are defined below.`;
  var MCode = `function M(x) {
        return function go(func) {
            if (func == "stop") return x
            if (x instanceof Promise) x = x.then(v => x = func(v));
            else if (typeof func == 'function') x = func(x);
            return go;
        };
    }`;
  AR = [];
  ar = () => AR.join(" --> ");
  return `<br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <div style="font-family: Times New Roman; text-align:center; font-size: 32px;" data-svelte-h="svelte-3imyyi"><br>
	Asynchronous Functions for the Very Simple Recursive Closure</div> <br>  <p data-svelte-h="svelte-1gzf7sb">M, defined in <a href="./Archive/monads">monads</a>, has an extra line of code here to account for possible asynchronisity. Here&#39;s the tweaked definition:</p> <pre>${escape(MCode)}</pre> <p data-svelte-h="svelte-kpqgpv">This code:</p> <pre>${escape(arrayCode)}</pre> <p data-svelte-h="svelte-1wcj9nt">Results in this:</p> <p>Progression of AR: ${escape(L)}</p> <br><br> <br><br> <p data-svelte-h="svelte-10goiui">In <a href="/Functions/Archive/Monad3/" target="_blank">Monad3</a> the demonstration used this monad:</p> <pre>${escape(bigMonad)}</pre> ${$$result.head += `<!-- HEAD_svelte-1v73x6b_START -->${$$result.title = `<title>Asynchronous Recursive Closures</title>`, ""}<!-- HEAD_svelte-1v73x6b_END -->`, ""} <br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <div style="font-family: Times New Roman; text-align:center; font-size: 32px;" data-svelte-h="svelte-1qygadg"><br>
        Asynchronous Functions for the Very Simple Recursive Closure</div> <br>  <p data-svelte-h="svelte-1gzf7sb">M, defined in <a href="./Archive/monads">monads</a>, has an extra line of code here to account for possible asynchronisity. Here&#39;s the tweaked definition:</p> <pre>${escape(MCode)}</pre> <p data-svelte-h="svelte-kpqgpv">This code:</p> <pre>${escape(arrayCode)}</pre> <p data-svelte-h="svelte-1wcj9nt">Results in this:</p> <p>Progression of AR: ${escape(L)}</p> <br><br> <br><br> <p data-svelte-h="svelte-10goiui">In <a href="/Functions/Archive/Monad3/" target="_blank">Monad3</a> the demonstration used this monad:</p> <pre>${escape(bigMonad)}</pre>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4lTUg0_D.js.map
