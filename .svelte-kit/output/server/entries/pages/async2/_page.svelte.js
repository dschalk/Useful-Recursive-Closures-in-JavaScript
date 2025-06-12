import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
async function asyncId(x) {
  return x;
}
async function wait(t) {
  setTimeout(function() {
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var M1Code = `function M1 (x) {
  return function go (func) {
      if (func === ret) return x;
      x = asyncId(x).then(v => func(v));
      return go;
  }
}

WHERE async function asyncId (x) {return x};`;
  var monad = `function M (x) {
    return function go (func) {
        if (func === ret) return x
        x = func(x);
        return go;
  }
}`;
  var asyncIdCode = `async function asyncId (x) {return x};

var m2 = M1(3);

log("m2(ret) is", m2(ret));  // 3

asyncId(m2(ret)).then(v=>log("asyncId(m2(ret)).then(v =>",v));  //3

asyncId(asyncId(asyncId(m2(ret))))
.then(v=>log("asyncId(asyncId(asyncId(m2(ret))))).then(v =>",v));  //3`;
  var m1 = M1(2);
  var m2 = M1(new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(2);
      },
      1500
    );
  }));
  var mpow = (y) => async (x) => asyncId(x).then((v) => x = v ** y);
  var mMult = (y) => (x) => asyncId(x).then((v) => x = v * y);
  var madd = (y) => async (x) => {
    await wait();
    return x + y;
  };
  m1(mpow(10))(Math.sqrt)(madd(52))(mMult(2))((a) => a * 2)(async (x) => {
    await wait();
    return x / 8;
  });
  m2(mpow(10))(Math.sqrt)(madd(52))(mMult(2))((a) => a * 2)(async (x) => {
    await wait();
    return x / 8;
  });
  console.log("m1(ret) is", m1(ret));
  console.log("m2(ret) is", m2(ret));
  let A;
  m1(ret).then((v) => A = v);
  m2(ret).then((v) => v);
  return `${$$result.head += `<!-- HEAD_svelte-1d9b83h_START -->${$$result.title = `<title>Asynchronous values in monads</title>`, ""}<!-- HEAD_svelte-1d9b83h_END -->`, ""} <br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <div style="font-family: Times New Roman; text-align:center; font-size: 32px;" data-svelte-h="svelte-6mtrel"><br>

    Asynchronous State Transformations in Monads</div> <br> <h3 data-svelte-h="svelte-14quf8o">GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Recursive Closure</h3> <p data-svelte-h="svelte-1bh1p6z">We&#39;ve been creating the recursive closures called monads with:</p> <pre>${escape(monad)}</pre> <p data-svelte-h="svelte-en9ymf">Here it is again with a small tweak enabling it to handle functions that operate on and/or return promises:</p> <pre>${escape(M1Code)}</pre> <p data-svelte-h="svelte-r1d7yz">AsyncId makes promises out of non-promises and has no effect on promises as shown below.</p> <pre>${escape(asyncIdCode)}</pre> <p data-svelte-h="svelte-16qlfgr">Part A (above) shows that m2(ret) == 3. Calling asyncId on m2(ret) in Part B returned a promise whose fulfullment value is 3. The Part B Promise is both the argument and the return value of asyncId in PartC.</p> <h2>m1(ret).then(v =&gt; A = v) A is ${escape(A)}</h2> <h2>${escape(A)}</h2> <p data-svelte-h="svelte-1j0obtq">The next screenshot demonstrates M1-created monads taking as arguments a series of synchronous mixed with asynchronous functions. The value held in m1 is initially the number 2. The value in m2 is a promise that resolves to the number 2.</p> <p data-svelte-h="svelte-1tildub">After m1 and m2 operate on pow(5), both hold promises with fulfillment values of 32. Had they operated on mpow(5) instead, the result would be the same.</p>`;
});
export {
  Page as default
};
