import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { C as Cubeshot } from "../../chunks/Cubeshot.js";
const shot3 = "/recursive-closures/_app/immutable/assets/Screenshot3.DxsvaAW-.png";
const shot4 = "/recursive-closures/_app/immutable/assets/shot4.CAgxQU-n.png";
const shot5 = "/recursive-closures/_app/immutable/assets/shot5.DZwVWERr.png";
const shot6 = "/recursive-closures/_app/immutable/assets/shot6.24Ct7-Ci.png";
const css$1 = {
  code: "h1.svelte-cxunpl,h2.svelte-cxunpl{text-align:center}.middle.svelte-cxunpl{text-align:center;width:100%}.middle2.svelte-cxunpl{text-align:center;width:100%;font-size:26px}h2.svelte-cxunpl{color:#f5a976}.or.svelte-cxunpl{color:rgb(254, 148, 62)\n}span.svelte-cxunpl{color:rgb(219, 253, 244);font-size:24px;margin:0%}a.svelte-cxunpl{color:rgb(222, 100, 245)}a.svelte-cxunpl:hover{color:white;background-color:#000}img.svelte-cxunpl{width:25%;height:auto}.h2.svelte-cxunpl{color:gold;font-size:32px;text-align:center}.h3.svelte-cxunpl{color:gold;font-size:27px;text-align:center}.i3.svelte-cxunpl{text-indent:3%;text-align:left}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    /*import { onMount } from 'svelte';\\n    onMount(() => {\\n        if ('serviceWorker' in navigator) {\\n            navigator.serviceWorker\\n                .register('/service-worker.js')\\n                .then((registration) => {\\n                    console.log('Service Worker registered with scope:', registration.scope);\\n                })\\n                .catch((error) => {\\n                    console.error('Service Worker registration failed:', error);\\n                });\\n        }\\n    });\\n*/\\n\\n\\n  import Cubeshot from \\"$lib/Cubeshot.png\\"\\n  import CubeshotR from \\"$lib/CubeshotR.png\\"\\n  import shot3 from \\"$lib/Screenshot3.png\\"\\n  import shot4 from \\"$lib/shot4.png\\"\\n  import shot5 from \\"$lib/shot5.png\\"\\n  import shot6 from \\"$lib/shot6.png\\"\\n  import F from \\"$lib/F.png\\"\\n  \\n  var Mdisplay = \`function M (x) {\\n    return function</span> go (func) {\\n    if (func === dF3x) return x;\\n    else x = func(x);\\n    return go;\\n    }\\n  }\\n  dF3x = () => {}; \`;\\n\\n  var Mdis = \`    function M (x) {\\n      return function go (func)\\n        {\\n            if (func === dF3x) return x;\\n            else x = func(x);\\n            return go;\\n        }\\n    }\`\\n\\n  var MMdisplay =\\n    \\"    function M (x) { \\\\\\n      return function go (func) { \\\\\\n        if (func === dF3x) return x; \\\\\\n        else x = func(x); \\\\\\n        return go; \\\\\\n      } \\\\\\n    } \\\\\\n    Where dF3x = () => {}; \\";\\n\\n  var dF3x = () => {};\\n\\n  function M(x) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      else x = func(x);\\n      return go;\\n    };\\n  }\\n\\n  var log = console.log;\\n\\n  var test_0 = \`var m = M('peaches');\\nlog('m(ret) is', m(ret)); // m(ret) is peaches\\n\\nm(x => x + ' and pears')\\nlog('m(ret) is', m(ret)); // m(ret) is peaches and pears\\n\\nm(()=>3);  // Equivalent to m = M(3) whenever m is mutable.\\nlog('m(ret) is', m(ret)); // m(ret) is 3\\n\\nlog(m(v=>v**3)(v=>v+v)(v=>v-12)(ret)) // m(ret) is 42\\n\\nvar Pyth = a => b => Math.sqrt(a*a + b*b); \\nlog(M(Pyth(3)(4))(ret)); // This anonymous computation returns 5\`;\\n\\n  var test_1 = \`var arr = m = M([1,2,3]);\\n\\nvar add = x => a => a.concat(x + a.slice(-1)[0]);\\nvar mult = x => a => a.concat(x * a[a.length-1]);\\nm(add(4)); // 4 + 3 is concatenated to a.\\nlog(\\"1. m(ret)\\", m(ret)); // [ 1, 2, 3, 7 ]\\nm(mult(6));  // 6 * 7 is concatenated to a.\\nlog(\\"2. m(ret)\\", m(ret)); // [ 1, 2, 3, 7, 42 ]\\n\\n// Next, we append the three stages of Math.sqrt(7 + 42) * 6  // 49, 7, 42 \\nlog(m(x => x.concat(x[3] + x[4]))(x=>x.concat(Math.sqrt(x[x.length - 1])))(mult(6))(ret))\\n// [ 1, 2, 3, 7, 42, 49, 7, 42 ]\`;\\n\\n  var table = \`function R (ar) {\\n  let temp = []\\n  temp[0] = [ar[0][6], ar[0][3], ar[0][0],\\n            ar[0][7], ar[0][4], ar[0][1],\\n            ar[0][8], ar[0][5], ar[0][2]];\\n\\n  temp[1] = ar[1];\\n\\n  temp[2] = [ar[4][8], ar[2][1], ar[2][2],\\n            ar[4][5], ar[2][4], ar[2][5],\\n            ar[4][2], ar[2][7], ar[2][8]];\\n\\n  temp[3] = [ar[3][0], ar[3][1], ar[5][2],\\n            ar[3][3], ar[3][4], ar[5][5],\\n            ar[3][6], ar[3][7], ar[5][8]];\\n\\n  temp[4] = [ar[4][0], ar[4][1], ar[3][2],\\n            ar[4][3], ar[4][4], ar[3][5],\\n            ar[4][6], ar[4][7], ar[3][8]];\\n\\n            temp[5] = [ar[5][0], ar[5][1], ar[2][6],\\n            ar[5][3], ar[5][4], ar[2][3],\\n            ar[5][6], ar[5][7], ar[2][0]];\\nreturn temp;\\n}\`;\\n\\n  var score = \`m2 = M(\\n    [ \\n      [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,\\n      Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], \\n      [], ['+'], [], [0], [], [0], [] \\n    ]);\`;\\n\\n  var fuDem = \`function fu (a) {                                    // fu\\n  a[5].push(clone(a));\\n  a[7].push(clone(a)); // All game states for use in \\"Back\\" and \\"Forward.\\"\\n  a[6][0] += 1;\\n    // a[1].push(a[0].pop());\\n  var result;\\n  SCORE = a[4];\\n  var a1;\\n  if (a[1].length === 2 && a[2].length === 1)   {\\n    a1 = a[1];\\n    result = calc(a[1][0], a[1][1],a[2][0]);\\n    a[0].push(result);\\n    a[3].push(result);\\n    a[1] = [];\\n    m2 = M(a);\\n  }\\n   \\n  if (a[1].length === 3) {\\n    a[0].push(a[1].pop());\\n  }\\n\\n  if (result == 20 && intersection(a1, a[3]).length > 0) {\\n      if (SCORE === 4) {\\n          ZWIN = \\"You win! \\"\\n          a[4][0] = 0;\\n          runRoll(0);\\n      }\\n      else {\\n          var aint = parseInt(a[4][0], 10);\\n          aint += 1;\\n          Z = \\"           Your score increased to \\" + aint;\\n          runRoll(aint);\\n      }\\n      setTimeout(() => Z = ZWIN = \\"\\", 3000);\\n  }\\n  update();\\n  sfunc();\\n  return m2(s);\\n};\\n\\nvar update = () => { // The button displays will correspond to the values in m2.\\n  AA = m2(s)[0][0];\\n  BB = m2(s)[0][1];\\n  CC = m2(s)[0][2];\\n  DD = m2(s)[0][3];\\n  EE = m2(s)[2];\\n  FF = m2(s)[3];\\n  SCORE = m2(s)[4];\\n  WW = m2(s)[1][0];\\n  XX = m2(s)[1][1];\\n  YY = m2(s)[1][2];\\n  ZZ = m2(s)[1][3];\\n}\`;\\n\\n  var Rf = \`var Rfunc = () => {\\n  cube = m(R)();\\n};\`;\\n\\n  var Zdemo = \`function Zrotate (ar) {\\n      cube = m(Zro)();\\n  }\\n  \\n  function Zro (ar) {\\n    m(() => [ [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][6],\\n    ar[5][3], ar[5][0], ar[5][7], ar[5][4], ar[5][1],ar[5][8], ar[5][5], ar[5][2] ], [ar[2][2], ar[2][5], ar[2][8], \\n    ar[2][1], ar[2][4], ar[2][7],ar[2][0], ar[2][3], ar[2][6] ], [ ar[3][6], ar[3][3], ar[3][0], ar[3][7], ar[3][4], \\n    ar[3][1],ar[3][8], ar[3][5], ar[3][2] ], [ ar[1][6], ar[1][3], ar[1][0], ar[1][7], ar[1][4], ar[1][1],ar[1][8], \\n    ar[1][5], ar[1][2] ], [ ar[0][6], ar[0][3], ar[0][0], ar[0][7], ar[0][4], ar[0][1],ar[0][8], ar[0][5], ar[0][2] ] ] ); \\n    // cube = m(); \\n    return m();\\n  };\`;\\n\\n  var ZbackDemo = \`function Zback (ar) {\\n      cube = m(Zro)(Zro)(Zro)();\\n  };\`;\\n\\n  var mona = \`function M (x) {\\n  return function go (func) {\\n    if (func === dF3x) return x;\\n    else x = func(x);\\n    return go;\\n  }\\n}\\nWhere dF3x = () => {}; // This flag is a function in order to\\n                              accommodate future type checking.\`;\\n  var orthoganal = \`var demo1 = M(3);\\nvar demo2 = M(3);\\ndemo1(v=>v**3);\\ndemo2(v=>v - 1);\\nconsole.log(demo1(dF3x)); // 27\\nconsole.log(demo2(dF3x)); // 2\`;\\n\\n  var compose1 = \`var m = M(3);\\nlog(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9\`;\\n\\n  var compose2 = \`m(()=>4);  // Sets x in the m-M(x) closure to 4.\\nm(v=>v**4)(v=>v**(1/2))(v=>v-7)\\nlog(m(dF3x))                             // 42\\n\\nvar add = a => b => a + b;\\nvar mult = a => b => a * b;\\nvar exp = a => b => b**a;\\n\\nm(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));\\nlog(m(dF3x))                             // 42\\n\\n// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.\\n\\nlog(M(2)(add(4))(mult(7))(dF3x))\`;\\n  var mean = \`function meaning (ar) {return ar.reduce((a, \\n  currentValue) => a**3 + currentValue, 0) - 2*13};\\n\\nvar m = M([1,3,4]);\\nm(meaning);\\nm(dF3x);     // 42\`;\\n\\n  var M4 = \`function M(x) {\\n    let ar = [];\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      if (func === dF3ar) return ar;\\n      else x = func(x);\\n      ar.push(func);\\n      return go;\\n    };\\n  };\`;\\n\\nlet Fcode = \`  function F(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[4][6],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[4][7],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[4][8],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[5][0],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[5][1],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[5][2],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = [\\n      ar[3][6],\\n      ar[3][3],\\n      ar[3][0],\\n      ar[3][7],\\n      ar[3][4],\\n      ar[3][1],\\n      ar[3][8],\\n      ar[3][5],\\n      ar[3][2],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n\\n    temp[5] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  } \`\\n\\n  var reverseShow = \`function reverse () { \\n  let fu = m(dF3ar).pop(); \\n  // discards the function being reversed.\\n    \\n  let foo = x => fu(fu(fu(x))); \\n  // Three more turns reverses the first one.\\n    \\n  m(foo)(dF3ar).pop();     \\n  // uses foo, then discards it, returning the cube to where it was.\\n}; \`;\\n\\n  var reduceCode = \`const m = M([3,4,5,6,7,8,9]);\\nconst rd = x => x.reduce((a, b) => a + b);\\nm(rd)(dF3x);   // 42 \`;\\n\\n  const Mcode = \`function M(x, ar = []) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      if (func === dF3ar) return ar;\\n      else x = func(x);\\n      ar.push(func);\\n      return go;\\n    };\\n  };\\n    Where const dF3x = () => {}\\n          const dF3ar = () => {};\`;\\n\\n  \\n  var mCode = \`m = M([ [\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"], [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]);\`\\n\\n  const cubeCode = \`\\n  \\n  \`;\\n  const DOMright = \`<div class=\\"face right\\">\\n        <div class=\\"grid\\">\\n          <div class={m(dF3x)[0][0]} />\\n          <div class={m(dF3x)[0][1]} />\\n          <div class={m(dF3x)[0][2]} />\\n          <div class={m(dF3x)[0][3]} />\\n          <div class={m(dF3x)[0][4]} />\\n          <div class={m(dF3x)[0][5]} />\\n          <div class={m(dF3x)[0][6]} />\\n          <div class={m(dF3x)[0][7]} />\\n          <div class={m(dF3x)[0][8]} />\\n        </div>\\n      </div>\`;\\n\\n  const DOMfront = \`      <div class=\\"face front\\">\\n        <div class=\\"grid\\" >\\n          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> \\n          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  \\n          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> \\n          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>\\n          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> \\n          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> \\n          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> \\n        </div>\\n      </div>\`;\\n\\n  var classCode2 = \\"Cow\\"; \\n  var v1 = \` var  m = M(3)\`;\\n\\n  var v3 = \`x = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) \\nconsole.log('x is', x);\`\\n/*\\nvar v3b = \`m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)\\nconsole.log('m(dF3x) is', m(dF3x));\`\\n\\nvar v3c = \`m(v=>v+4)(v=>v*3)\\nconsole.log('m(dF3x) is', m(dF3x));\`\\n  */\\n  var v4 = \`m = M(3)\`;\\n  var v5 = \\"m(dF3x)  // 3\\";\\n  var v6 = \`m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)\`;\\n  var v7 = \`m(dF3x)  // 10\`;\\n  var v8 = \`m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42\`;\\n  var v9 = \`m(dF3x) // 42\`;\\n\\n  var showBlue = \`      .blue {\\n          height: 60px;\\n          width: 60px;\\n          background-color: lightblue;\\n          display: inline;\\n          border-radius: 10px;\\n      }\`;\\n\\n  var Rcode = \`  const R = function R(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n\\n    temp[1] = ar[1];\\n\\n    temp[2] = [\\n      ar[4][8],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[4][5],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[4][2],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[5][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[5][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[5][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[3][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[3][5],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[2][6],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[2][3],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[2][0],\\n    ];\\n    return temp;\\n  }\`;\\n\\n  var css = \`.blue {\\n    height: 60px;\\n    width: 60px;\\n    background-color: lightblue;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .green {\\n    height: 60px;\\n    width: 60px;\\n    background-color: lightgreen;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .red {\\n    height: 60px;\\n    width: 60px;\\n    background-color: rgb(252, 97, 97);\\n    border-radius: 10px;\\n  }\\n  .orange {\\n    height: 60px;\\n    width: 60px;\\n    background-color: orange;\\n    border-radius: 10px;\\n  }\\n  .yellow {\\n    height: 60px;\\n    width: 60px;\\n    background-color: yellow;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .white { \\n    height: 60px;\\n    width: 60px;\\n    background-color: white;\\n    border-radius: 10px;\\n  }\`;\\n\\n  var domCube = \`<div class=\\"face front\\">\\n  <div class=\\"grid\\">\\n    <button style=\\"background-color: {m(dF3x)[3][0]}\\" on:click={() => {m = m(Fz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][1]}\\" on:click={() => {m = m(Cx)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][2]}\\" on:click={() => {m = m(F)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][3]}\\" on:click={() => {m = m(Cyr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][4]}\\" on:click={() => {m = m(Zro)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][5]}\\" on:click={() => {m = m(Cy)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][6]}\\" on:click={() => {m = m(Fz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][7]}\\" on:click={() => {m = m(Cxr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[3][8]}\\" on:click={() => {m = m(F)}}/>\\n  </div>\\n</div>\\n\\n<div class=\\"face right\\">\\n  <div class=\\"grid\\">\\n    <button style=\\"background-color: {m(dF3x)[0][0]}\\" on:click={() => {m = m(Rz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][1]}\\" on:click={() => {m = m(Cz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][2]}\\" on:click={() => {m = m(R)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][3]}\\" on:click={() => {m = m(Cyr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][4]}\\" on:click={() => {m = m(Xro)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][5]}\\" on:click={() => {m = m(Cy)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][6]}\\" on:click={() => {m = m(Rz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][7]}\\" on:click={() => {m = m(Czr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[0][8]}\\" on:click={() => {m = m(R)}}/>\\n  </div>\\n</div>\\n\\n<div class=\\"face top\\">\\n  <div class=\\"grid\\">\\n    <button style=\\"background-color: {m(dF3x)[4][0]}\\" on:click={() => {m = m(Uz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][1]}\\" on:click={() => {m = m(Cx)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][2]}\\" on:click={() => {m = m(U)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][3]}\\" on:click={() => {m = m(Cz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][4]}\\" on:click={() => {m = m(Yro)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][5]}\\" on:click={() => {m = m(Czr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][6]}\\" on:click={() => {m = m(Uz)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][7]}\\" on:click={() => {m = m(Cxr)}}/>\\n    <button style=\\"background-color: {m(dF3x)[4][8]}\\" on:click={() => {m = m(U)}}/>\\n  </div>        \\n</div>\`;\\n\\n  var m = M(3);\\n\\n  var Rz = \\"clowns\\";\\n\\n  var example3 = \`<button on:click={() => m = m(R)}>R</button>\\n<div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> \`;\\n\\n  var handleEventCode = \`function handleEvent(e) { \\n    console.log(e.keyCode);\\n         if (e.keyCode === 85)  m(Uz);\\n    else if (e.keyCode === 117) m(U);\\n    else if (e.keyCode === 68)  m(Dz);\\n    else if (e.keyCode === 100) m(D);\\n    else if (e.keyCode === 82)  m(Rz);\\n    else if (e.keyCode === 114) m(R);\\n    else if (e.keyCode === 76)  m(Lz);\\n    else if (e.keyCode === 108) m(L);\\n    else if (e.keyCode === 70)  m(Fz);\\n    else if (e.keyCode === 102) m(F);\\n    else if (e.keyCode === 66)  m(Bz);\\n    else if (e.keyCode === 98)  m(B);\\n    else if (e.keyCode === 77)  m(Cxr);\\n    else if (e.keyCode === 109) m(Cx);\\n    else if (e.keyCode === 69)  m(Cyr);\\n    else if (e.keyCode === 101) m(Cy);\\n    else if (e.keyCode === 83)  m(Czr);\\n    else if (e.keyCode === 115) m(Cz);\\n    else if (e.keyCode === 120) m(Xro);\\n    else if (e.keyCode === 88)  m(Xror);  \\n    else if (e.keyCode === 121) m(Yro);\\n    else if (e.keyCode === 89)  m(Yror);\\n    else if (e.keyCode === 122) m(Zro);\\n    else if (e.keyCode === 90)  m(Zror);\\n    else if (e.keyCode === 119) shu();\\n    else if (e.keyCode === 118) Start();\\n    else if (e.keyCode === 113) reverse();\\n    else if (e.keyCode === 105) previous();\\n    else if (e.keyCode === 73) getSaved();\\n    else if (e.keyCode === 111) save();\\n    // else if (e.keyCode === 116) rotate(); \\n    m = m;  // In Svelte, this updates the DOM\\n  }\`;\\n\\nvar Masync = \`function M (x) {\\n          return function go (func){\\n            if (func === dF3x) return x;\\n            else x = idP(x).then(v => func(v));\\n            return go;\\n          }\\n        }\`;\\n        \\nvar dF3xCode = \\"dF3x = () => {}\\"\\n\\nvar mCode = \`      var m = M([ [\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"],\\n      [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"],\\n      [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"],\\n      [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"],\\n      [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"],\\n      [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]);\`\\n\\nvar Fcode2 = \`      var m = M([ [\\"yellow\\", \\"blue\\", \\"blue\\", \\"yellow\\", \\"blue\\", \\"blue\\", \\"yellow\\", \\"blue\\", \\"blue\\"],\\n      [\\"green\\", \\"green\\", \\"white\\", \\"green\\", \\"green\\", \\"white\\", \\"green\\", \\"green\\", \\"white\\"],\\n      [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"],\\n      [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"],\\n      [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"green\\", \\"green\\", \\"green\\"],\\n      [\\"blue\\", \\"blue\\", \\"blue\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]);\`\\n\\nvar functionF = \`function F(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[4][6],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[4][7],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[4][8],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[5][0],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[5][1],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[5][2],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = [\\n      ar[3][6],\\n      ar[3][3],\\n      ar[3][0],\\n      ar[3][7],\\n      ar[3][4],\\n      ar[3][1],\\n      ar[3][8],\\n      ar[3][5],\\n      ar[3][2],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n\\n    temp[5] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n} \`;\\n\\n var Fbeginning = \`let temp = [];\\ntemp[0] = [\\nar[4][6]\`; // This will become x[0][0] when F returns temp.\\n\\nvar Fend = \`temp[5] = [\\n    ar[0][6],\\n    ar[0][3],\\n    ar[0][0],\\n    ar[5][3],\\n    ar[5][4],\\n    ar[5][5],\\n    ar[5][6],\\n    ar[5][7],\\n    ar[5][8], ];\\nreturn temp;\\n\`;\\n\\nvar F5 = '';   \\nvar F6 = '';  \\nfunction f66 (x) {F6 = x};\\n\\n    async function anon () {\\n      f5 = \\"m = M(3)\\"; }\\n    async function anon2 () {\\n      m = m(v => v**3)\\n      await wait(500)\\n      m = m(Cx)\\n      await wait(500)\\n      m = m(Cx)\\n      await wait(500)\\n      m = m(Cx)\\n      \\n      f77(\\"E\\")\\n      await wait(500)\\n      m = m(Cy)\\n      await wait(500)\\n      m = m(Cy)\\n      await wait(500)\\n      m = m(Cy)\\n      await wait(500)\\n      m = m(Cy)     \\n      \\n      f77(\\"S\\")\\n      await wait(500)\\n      m = m(Cz)\\n      await wait(500)\\n      m = m(Cz)\\n      await wait(500)\\n      m = m(Cz)\\n      await wait(500)\\n      m = m(Cz)\\n      for (let k = 0; k < 12; k+=1){\\n          await wait(300)\\n          m = m(ob[m(dF3ar).pop()]);\\n          console.log(m(dF3x));\\n          m(dF3ar).pop();\\n          f77(11 - k);\\n      }\\n        await wait(500)\\n        f77(\\"\\");\\n    }\\n\\n\\n\\n\\nvar H = '';\\nvar I = '';\\nvar G = '';\\n\\nfunction* generatorFunction() {\\n  yield \`m(dF3x) // 3 (as expected from the definition of M)\`\\n  yield \\"m(v=>v**3) . . . causing 3 => 3**3 = 27\\"\\n  yield \\"m(dF3x) // 27 (as expected)\\"\\n  yield \\"m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12.\\"\\n  yield \`m(dF3x)  // 42\`\\n  yield \`m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7\`\\n  yield \`m(v = v * 6) // Back to 42\`\\n  yield \`m(dF3x)  // 42, as expected\`\\n  yield H = '';\\n  yield I = '';\\n  yield \`\`\\n  generator = generatorFunction();\\n}\\n\\nvar generator = generatorFunction()\\n\\nfunction cow () {\\n    I = \\"m = M(3) defines m and an m-M(x) closure holding the number 3\\"\\n    var z = generator.next().value;\\n    if (z != undefined) G = z\\n    else {\\n      I = '';\\n      generatorFunction();\\n    }\\n    return generator;\\n}\\n\\n  function handleEvent(e) {\\n    if (e.keyCode === 59) cow();\\n  }\\n\\n  var x;\\n  var x3 = \`    const dF3x = () => {}\`\\n\\n//  *********************************************************\\n// *********************************************************\\n\\nvar cloneDemo = \`var m = M(3)\\nvar m2 = m(() => m(dF3x))\\nvar m3 = M(m(dF3x))\\nlog(m === m2)  // true\\nlog(m === m3)  // false\\nlog(m2 === m3) // false \\nlog( m(v => v * 2),  m2(v => v * 3))\\nlog(m(dF3x),m2(dF3x),m3(dF3x)); // 18, 18, \` ;\\n\\n\\nvar testArrayMult = \`var ar1 = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a*b} ]]]]\`\\nvar testArrayAdd = \`var ar1 = [ [ ], [ [ ], [ [ ], [function add (a, b) {return a+b} ]]]]\`\\nvar testArrayConcat = \`var ar1 = [ [ ], [ [ ], [ [ ], [function concat (a, b) {return \\"\\" + a + b} ]]]]\`\\n\\nvar cloneCode = \`ar[1][1][1][0](6,7)  // 42\\nm = M(ar)\\nm2 = M(m(dF3x));\\nar = 888;\\nlog('ar is', ar);  // 888\\nlog( \\"m2(dF3x)[1][1][1][0](6,7)\\", m2(dF3x)[1][1][1][0](6,7))\`\\n\\nvar cloneCode_2 = \` \\nvar ar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]]\\nvar m = M(ar);\\nar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]] \\n\\nlog('1 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) \\n// var arzi = [ [ ], [ [ ], [ [ ], [ function (a) {return a(dF3x)} ]]]]\\n// ar2 = arzi[1][1][1][0](m);\\nvar ar2 = m(dF3x);\\nlog(\\"################################ Changing ar\\")\\nar[1][1][1].splice(-1)\\nar[1][1][1].push(function concat (a,b) {return \\"\\" + a + b});\\nlog('2 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) \\nlog('ar2[1][1][1][9](6,7) is', ar2[1][1][1][0](6,7))\\n\\nlog(\\"################################ Changing ar\\")\\nar[1][1][1].splice(-1)\\nar[1][1][1].push(function add (a,b) {return a + b});\\nlog('3 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) \\nlog('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7)) \\n\\nlog(\\"################################ Changing ar2\\")\\nar2[1][1][1].splice(-1)\\nar2[1][1][1].push(function concat (a,b) {return \\"\\" + a + b});\\nlog('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7)) \\nlog('4 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) \\n\\nlog(\\"################################ Changing ar2\\")\\nar2 = [{x:'yz'}]\\nlog('ar2[0] is', ar2[0]) \\nlog('5 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) \\n\\n// ****************************************************************8\\n\\nar[1][1][1][0](6,7)  // 42 \\n\\n// Changing ar\\nar[1][1][1][0](6,7)  // 67  \\nar2[1][1][1][9](6,7)  // 42 \\n\\n// Changing ar\\nar[1][1][1][0](6,7)  // 13 \\nar2[1][1][1][0](6,7) // 42 \\n\\n// Changing ar2 \\nar2[1][1][1][0](6,7)  // 67 \\nar[1][1][1][0](6,7)  // 13 \\n\\n// Changing ar2 \\nar2[0]  // Object { x: \\"yz\\" }\\nar[1][1][1][0](6,7)  // 13\\n\`;\\n\\nvar JSCode2 = \`m(dF3x} [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]\\nvar clone = M(m(dF3x))\\nclone === m false\\nclone(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]\\nclone and m are identical, and 'clone === m' returns false.\\nTherefore clone is a deep clone of m. Q.E.D.\\n******************************* Change m\\nm(v => [ v[0], v[1], [v[1][0](v[0][0])]])\\nm(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 27 ] ]\\nclone(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]\\n***************** Change x[0][0] to 4 in the clone-M(x) closure\\nclone( v => [ [4], v[1], v[2] ] )\\n***************** Run x[1][0](x[0][0]) in x[2] in the clone-M(x) closure.\\nclone(v => [ v[0], v[1],  [v[1][0](v[0][0])] ] )\\nclone(dF3x) [ [ 4 ], [ [Function (anonymous)] ], [ 64 ] ]\\nm(dF3x} [ [ 3 ], [ [Function (anonymous)] ], [ 27 ] ]\`;\\n\\n\\nvar fibCode = \`var log = console.log;\\nvar dF3x = () => {};\\nvar dF3ar = () => {};\\n\\nfunction M(x, ar = [0]) {\\n    return function go(func) {\\n        if (func === dF3ar) return ar\\n        else x = func(x);\\n        ar.push(x[0]);\\n        return go;\\n    };\\n}\\n\\nvar m = M([0,1])\\n\\nfunction fib (f,n) {\\n  for (let k = 1; k <= n; k+=1) {\\n    f(([a, b]) => [b, a + b]);\\n  }\\n  return f(dF3ar);\\n}\\n  \\nlog(fib(m,9)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]\\nlog(fib(m,2)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55, 89]\`\\n\\nvar dF3ar = () => {};\\n\\n/*function M(x, ar = [0]) {\\n    return function go(func) {\\n        if (func === dF3ar) return ar\\n        else x = func(x);\\n        ar.push(x[0]);\\n        return go;\\n    };\\n//}*/\\n\\nvar m = M([0,1])\\n\\nfunction fib (f,n) {\\n  for (let k = 1; k <= n; k+=1) {\\n    f(([a, b]) => [b, a + b]);\\n  }\\n  return f(dF3ar);\\n}\\nvar MCode = \`    const dF3x = () => {}\\n\\n    function M (x) {\\n      return function go (func)\\n        {\\n            if (func === dF3x) return x;\\n            else x = func(x);\\n            return go;\\n        }\\n    }\`\\nvar k = 397421;\\n\\nvar v2 = \`M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10\`\\n\\nvar v5 = \`var ar = [ [6], [mult = (a,b) => a*b] ];\\nvar arClone = M(ar)(dF3x);\\nlog(arClone); // [ [6], [mult = (a,b) => a*b] ]\\nar = {hello: \\"Hello World\\"};\\nlog(arClone) // [ [6], [mult = (a,b) => a*b] ]\\narClone = [ 1, 2, {yes:\\"You bet!\\"} ];\\nlog(ar); // {\\"hello\\": \\"Hello World\\"}\\nlog(arClone); // [1, 2, {yes: \\"You bet!\\"}]\`;\\n\\nlog(fib(m,11));\\n\\nlog(\\"Hello\\", v2)\\n\\n\\nvar cloneCode = \`function add (a,b) {return a+b};\\nfunction mult (a,b) {return a*b};\\n\\nvar m = M([ [6], [7], [add] ]);\\nvar clone = M(m(dF3x));\\n\\nlog(\\"m === clone\\", m === clone); // false\\nlog(\\"m(dF3x) === clone(dF3x)\\", m(dF3x) === clone(dF3x)) // true\`\\n\\nvar cloneCode2 = \`log(\\"m(dF3x)\\", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 13\\nlog(\\"clone(dF3x)\\",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42\\n\\nlog(\\"m === clone\\", m === clone);  // false\\nlog(\\"m(dF3x) === clone(dF3x)\\", m(dF3x) === clone(dF3x) ) // false\`;\\n\\n\\nvar a1 = \`var O = {};\\nO.car = \\"BMW\\";\\nvar W = O;\`\\n\\nvar a2 = \`W.car = \\"Chevy\\";\\nlog(\\"O is\\", O);  // \\"Chevy\\"\\nlog(\\"W is\\", W);  // \\"Chevy\\"\`\\n\\nvar a3 = \`W = {car: W.car};\\nlog(\\"O is\\", O)   // \\"Chevy\\"\\nlog(\\"W is\\", W);  // \\"Chevy\\" \`\\n\\nvar a4 = \`W.car = \\"Ford\\";\\nlog(\\"O is\\", O); // \\"Chevy\\"\\nlog(\\"W is\\", W); // \\"Ford\\" \`\\n\\n\\nvar stdCode = \`    import { leftShift } from \\"mathjs\\";\\n    var log = console.log;\\n    var dF3x = () => {};\\n\\n    function M(x) {\\n        return function go(func) {\\n            if (func === dF3x) return x;\\n            x = func(x);\\n            return go;\\n        };\\n    }\\n    var aa = 25;\\n    var m = M([aa,1,aa,0]); // x in the m(x)-M closure is [25,1,25,0]\\n // The elements of x (above) represent a starting dollars, first bet, goal, and wins.\\n\\n    function f1 (v) {\\n        let result = Math.floor(Math.random()*2);\\n        if (result) {           // 1 is true, 0 is false.\\n          v[0] += v[1];         // The player gains $1.00\\n          log(\\"2<><><><><><><>, m(dF3x) is\\", m(dF3x));\\n          if (v[3] < aa) m(f1)  // Another coin flip, \\n          else {\\n            log(\\"Double\\", m(dF3x))\\n            return;\\n          }  \\n        }\\n        else {\\n            v[0] = v[0] - v[1];\\n            v[1] = leftShift(v[1], 1);          \\n            log(\\"2******, m(dF3x) is\\", m(dF3x));\\n            if (v[1] > v[0]) {\\n              log(\\"Fail\\", m(dF3x));\\n              return\\n            }\\n            else m(f1);\\n        } \\n        return v;\\n      };\`;\\n\\nlet topCenter = \`    <button\\n        style=\\"background-color: {m(dF3x)[4][4]}\\"\\n        on:click={() => {\\n            m = m(Yro);\\n        }}\\n    />\` \\n\\n\\nvar square_0_2 = \`                    <button\\n                        style=\\"background-color: {m(dF3x)[0][2]}\\"\\n                        on:click={() => {\\n                            m = m(R);\\n                        }}\\n                    /> \`;\\n\\nvar square_4_4 = \`                    <button\\n                        style=\\"background-color: {m(dF3x)[4][4]}\\"\\n                        on:click={() => {\\n                            m = m(Yro);\\n                        }}\\n                    /> \`;\\n\\n\\nvar YroCode = \`    var Yro = function Yro(ar) {\\n        let temp = [];\\n        temp[0] = ar[2];\\n        temp[1] = ar[3];\\n        temp[2] = ar[1];\\n        temp[3] = ar[0];\\n        temp[4] = [\\n            ar[4][6],\\n            ar[4][3],\\n            ar[4][0],\\n            ar[4][7],\\n            ar[4][4],\\n            ar[4][1],\\n            ar[4][8],\\n            ar[4][5],\\n            ar[4][2],\\n        ];\\n        temp[5] = [\\n            ar[5][2],\\n            ar[5][5],\\n            ar[5][8],\\n            ar[5][1],\\n            ar[5][4],\\n            ar[5][7],\\n            ar[5][0],\\n            ar[5][3],\\n            ar[5][6],\\n        ];\\n        return temp;\\n    };\`\\n\\n\\nvar cloneLimitations = \`var log = console.log;\\nvar dF3x = () => {};\\n\\nfunction M(x) {\\n    return function go(func) {\\n        if (func === dF3x) return x;\\n        x = func(x);\\n        return go;\\n    };\\n}\\n\\nvar m = M({a:1, b:2});\\nvar b = m(dF3x);  // b is just another name for x in the m-M(x) closure.\\nb.c = 3; \\nlog(\\"b is\\", b);  // b is { a: 1, b: 2, c: 3 }\\nlog(\\"m(dF3x) is\\", m(dF3x));  // m(dF3x) is { a: 1, b: 2, c: 3 }\\n// Mutating b mutated x in the m-M(x) closure.\\n\\nfunction M(x) {\\n    return function go(func) {\\n        if (func === dF3x) return JSON.parse(JSON.stringify(x));\\n        x = func(x);\\n        return go;\\n    };\\n}\\n\\nvar m = M({a:1, b:2});\\nvar b = m(dF3x);  // b is a clone\\nb.c = 3;\\nlog(\\"b is\\", b);  // b is { a: 1, b: 2, c: 3 }\\nlog(\\"m(dF3x) is\\", m(dF3x));  // m(dF3x) is { a: 1, b: 2 }\\n// x in the m-M(x) closure is not affected by the modification of b.\\n\\nJSON.parse(JSON.stringify(x)) is unable to make clones of functions, \\nundefined values, Symbols, circular references, custom class instances (methods and prototype), dates (converted to strings), regular Expressions (lost), typed Arrays and special objects (converted to plain objects).\\n\\nJSON.parse(JSON.stringify(x)) is a common technique to create a deep clone of an object in JavaScript. However, it fails to handle certain types of data. Here are the values of x for which this method cannot make a proper clone:\\n\\n(1) Functions: Functions are not valid JSON data types, so they are omitted during stringification.\\n\\nconst obj = { fn: function() { return \\"hello\\"; } };\\nJSON.parse(JSON.stringify(obj)); // { } - the function is lost\\n\\n(2) Undefined values: undefined is not a valid JSON type, so any property with undefined as a value will be omitted.\\n\\nconst obj = { key: undefined };\\nJSON.parse(JSON.stringify(obj)); // { } - the undefined property is lost\\n\\n(3) Symbol values: Symbols are not valid in JSON and are excluded during stringification.\\n\\nconst obj = { key: Symbol(\\"sym\\") };\\nJSON.parse(JSON.stringify(obj)); // { } - the symbol is lost\\n\\n(4) Circular references: JSON cannot represent circular structures, so attempting to stringify an object with circular references will throw an error.\\n\\nconst obj = {};\\nobj.self = obj;\\nJSON.stringify(obj); // Error: Converting circular structure to JSON\\n\\n(5) Custom class instances: Instances of custom classes will be converted to plain objects, and their methods and prototype chain will be lost.\\n\\nclass MyClass {\\n  constructor() { this.val = 10; }\\n  method() { return this.val; }\\n}\\nconst obj = new MyClass();\\nJSON.parse(JSON.stringify(obj)); // { val: 10 } - methods are lost\\n\\n(6) Date objects: Dates will be serialized as strings and will not retain their Date type.\\n\\nconst obj = { date: new Date() };\\nJSON.parse(JSON.stringify(obj)); // { date: \\"2024-09-10T00:00:00.000Z\\" } - Date is converted to string\\n\\n(7) Regular Expressions: RegExps are not supported and will be converted to empty objects.\\n\\nconst obj = { regex: /abc/ };\\nJSON.parse(JSON.stringify(obj)); // { regex: {} } - Regular expression is lost\\n\\n(8) Typed Arrays and other special objects: Objects like Map, Set, WeakMap, WeakSet, Int8Array, Uint8Array, etc., will lose their special behavior and be serialized as empty or plain objects.\\n\\nconst obj = { map: new Map(), set: new Set() };\\nJSON.parse(JSON.stringify(obj)); // { map: {}, set: {} } - Map and Set are lost\`;\\n\\nvar betterClone = \`You can combine Object.create(Object.getPrototypeOf(obj)) \\nwith Object.getOwnPropertyDescriptors(obj) to both preserve the prototype and \\ncopy the own properties of obj using property descriptors. This approach \\nallows you to create a new object with the same prototype as obj, while also \\ncopying all its own properties (including non-enumerable properties and \\ngetters/setters) in a concise and efficient way.\\n\\nHow It Works:\\n\\n    Object.getOwnPropertyDescriptors(obj) returns an object containing \\n    all the property descriptors of obj's own properties. Object.create() \\n    allows you to specify the prototype for the new object and also pass \\n    a property descriptor object as the second argument to define its properties.\\n\\nHere’s how you can use them together:\\n\\njavascript\\n\\nconst newObj = Object.create(\\n  Object.getPrototypeOf(obj),   // Set the prototype of the new object\\n  Object.getOwnPropertyDescriptors(obj)  // Copy all own properties of 'obj'\\n);\\n\\nExample:\\n\\njavascript\\n\\nconst obj = {\\n  a: 1,\\n  get b() { return this.a + 1; }\\n};\\n\\n// Create a new object with the same prototype and properties as 'obj'\\nconst newObj = Object.create(\\n  Object.getPrototypeOf(obj), \\n  Object.getOwnPropertyDescriptors(obj)\\n);\\n\\nconsole.log(newObj.a);  // Output: 1\\nconsole.log(newObj.b);  // Output: 2 (getter works)\\nconsole.log(Object.getPrototypeOf(newObj) === Object.getPrototypeOf(obj)); // true\\n\\nWhy This Is Useful:\\n\\n    Retains Prototype: You retain the original prototype chain of obj, \\n    meaning newObj will inherit methods and properties from the same \\n    prototype as obj. Copies Own Properties: The own properties \\n    (including getters, setters, and non-enumerable properties) of obj \\n    are copied to newObj. Efficient: This is an efficient way to create \\n    a new object with the same prototype and properties, without \\n    manually copying or assigning them.\\n\\n    However, deep copying is still not automatic: If any of the properties are objects \\n    themselves, they will be shallow copied, and you may need to handle deep \\n    copying manually if necessary. Works for non-enumerable properties: This \\n    method also copies non-enumerable properties, which Object.assign() would \\n    not handle.\\n\\nExample With Non-enumerable Properties:\\n\\nconst obj = {};\\n\\nObject.defineProperty(obj, 'a', {\\n  value: 42,\\n  enumerable: true,\\n  writable: true,\\n  configurable: true\\n});\\n\\nObject.defineProperty(obj, 'b', {\\n  value: 100,\\n  enumerable: false,  // Non-enumerable property\\n  writable: true,\\n  configurable: true\\n});\\n\\nconst newObj = Object.create(\\n  Object.getPrototypeOf(obj),\\n  Object.getOwnPropertyDescriptors(obj)\\n);\\n\\nconsole.log(newObj.a);   // Output: 42\\nconsole.log(newObj.b);   // Output: 100 (non-enumerable property is copied)\\nconsole.log(Object.keys(newObj)); // Output: ['a'], 'b' is non-enumerable\` ;\\n\\n    const obCode = \`const ob = {'R': Rz, 'L': Lz, 'U': Uz, 'D': Dz, 'F': Fz, 'B': Bz, 'Cx': Cxr,\\n   'Cy': Cyr, 'Cz': Czr, 'Xro': Xror, 'Yro': Yror, 'Zro': Zror, 'Rz': R,\\n   'Lz': L, 'Uz': U, 'Dz': D, 'Fz': F, 'Bz': B, 'Cxr': Cx, 'Cyr': Cy, 'Czr': Cz,\\n   'Xror': Xro, 'Yror': Yro, 'Zror': Zro};\`;\\n\\n\\n    const reverseCode = \`function reverse () { \\n    m = m(ob[m(dF3ar).pop()]); // Pops a function name and runs its reverse.   \\n    m(dF3ar).pop(); // Discard the inverse functions's name, that m just \\n                    // pushed onto ar (inside of the m-M(x) closure). \\n  }\`;\\n\\n// Async code\\n    function M2 (x) {\\n        x = idP(x);\\n        return function go (func){\\n            if (func === dF3x) return x;\\n            else x = x.then(v => func(v));\\n            return go;\\n        };\\n    };\\n    \\nvar m = M2(1);\\nvar add = a => b => a + b;\\nvar mult = a => b => a * b;\\nvar div = a => b => a / b;\\n\\n    function wait(ms) {\\n        return new Promise((resolve) => setTimeout(resolve, ms));\\n    }\\n\\n    async function squareP(x) {\\n        await wait(300);\\n        return x * x;    \\n        return new Promise((resolve) => setTimeout(resolve, ms));\\n    }\\n\\n    let pause = (t) => async (x) => {\\n        await wait(t);\\n        return x;\\n    };\\nvar A,B,C,D;\\nvar arr = [A,B,C,D];\\n    async function hello(x) {\\n        await wait(500);\\n        A = 3;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500);\\n        B = 2;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500)\\n        C = 1;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500);\\n        D = \\"Blast off\\";\\n        arr = [A,B,C,D];\\n        log(arr);\\n        return x;\\n    }\\n\\n    let addP = (x) => async (y) => {\\n        await wait(1000);\\n        return x + y;\\n    };\\n\\n    let multP = (a) => async (b) => {\\n        await wait(2000);\\n        return b * a;\\n    };\\n\\n        m(dF3x).then(v=>log(\\"m(dF3x resolves to\\", v));\\n        \\n        async function idP(x) {\\n            if (x instanceof Promise) return x;\\n            return Promise.resolve(x);\\n        }\\n\\n    async function restart() {\\n        A = \\"A\\";\\n        B = \\"B\\";\\n        C = \\"C\\";\\n        D = \\"D\\";\\n        hello();\\n        log(A,B,C,D);\\n        m(add(6))(multP(6))(add(8))(multP(2))(Math.sqrt)(dF3x)\\n        .then(v => log(\\"m(dF3x) is\\", v)); // 10\\n        m(add(4))(mult(3))(dF3x).then(v => log(\\"m(dF3x) is\\", v));  // 42\\n        m(dF3x).then(v => log(\\"Confirming that m(dF3x) is\\", v));  // 42\\n        await wait(5000);\\n    };\\n\\nrestart();\\n\\nvar asyncCode = \`    function M2 (x) {\\n        x = idP(x);\\n        return function go (func){\\n            if (func === dF3x) return x;\\n            else x = x.then(v => func(v));\\n            return go;\\n        };\\n    };\\n    \\nvar m = M2(1);\\nvar add = a => b => a + b;\\nvar mult = a => b => a * b;\\nvar div = a => b => a / b;\\n\\n    function wait(ms) {\\n        return new Promise((resolve) => setTimeout(resolve, ms));\\n    }\\n\\n    async function squareP(x) {\\n        await wait(300);\\n        return x * x;    \\n        return new Promise((resolve) => setTimeout(resolve, ms));\\n    }\\n\\n    let pause = (t) => async (x) => {\\n        await wait(t);\\n        return x;\\n    };\\nvar A,B,C,D;\\nvar arr = [A,B,C,D];\\n    async function hello(x) {\\n        await wait(500);\\n        A = 3;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500);\\n        B = 2;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500)\\n        C = 1;\\n        arr = [A,B,C,D];\\n        log(arr);\\n        await wait(500);\\n        D = \\"Blast off\\";\\n        arr = [A,B,C,D];\\n        log(arr);\\n        return x;\\n    }\\n\\n    let addP = (x) => async (y) => {\\n        await wait(1000);\\n        return x + y;\\n    };\\n\\n    let multP = (a) => async (b) => {\\n        await wait(2000);\\n        return b * a;\\n    };\\n\\n        m(dF3x).then(v=>log(\\"m(dF3x resolves to\\", v));\\n        \\n        async function idP(x) {\\n            if (x instanceof Promise) return x;\\n            return Promise.resolve(x);\\n        }\\n\\n    async function restart() {\\n        A = \\"A\\";\\n        B = \\"B\\";\\n        C = \\"C\\";\\n        D = \\"D\\";\\n        hello();\\n        log(A,B,C,D);\\n        m(add(6))(multP(6))(add(8))(multP(2))(Math.sqrt)(dF3x)\\n        .then(v => log(\\"m(dF3x) is\\", v)); // 10\\n        m(add(4))(mult(3))(dF3x).then(v => log(\\"m(dF3x) is\\", v));  // 42\\n        m(dF3x).then(v => log(\\"Confirming that m(dF3x) is\\", v));  // 42\\n        await wait(5000);\\n    };\`\\n<\/script>\\n\\n<svelte:window on:keypress={handleEvent} />\\n\\n<div style=\\"margin-left: 8%; margin-right: 8%\\" id = \\"top\\">\\n  <h1 class=\\"middle\\">Recursive Closures</h1>\\n\\n <p> This website explores some of the useful features of m-M(x) closures; i.e., closures created instantiated by statements \\"m = M(x)\\", where x can be any value, and the simplest definition of \\"M\\" is:\\n \\n  <pre>{MCode}</pre>\\n <p> A modified version of M can be found at <a href=\\"./cube\\">Rubik's cube example </a>, where M holds an array of function names, making it convenient for players to reverse a series of moves by repeatedly pressing the \\"Q\\" key (see <a href=\\"./cube#reverse\\">function reverse</a>. Another variant of M is demonstrated at <a href=\\"./async5\\">Synchronous and Asynchronous Functions Handled</a> where the line \\"x = func(x)\\" in M (above) is replaced by \\"x = idP(x).then(v => func(v))\\", idP(x),and where idP(x) returns a promise holding x.</p>\\n  <p> The above definition of M is no more complex than needed to demonstrate the core features of m-M(x) closures. Unless you are sure it is unnecessary, it might be wise to include a try-catch block in the definition of M to handle values of func that are not dF3x, are not functions, or are functions that are incompatible with x. Sometimes, you might even check for functions that change x in a way that makes it incompatible with other necessary functions.  \\n</p>\\n \\n<h2> Function Composition </h2>  \\n<p> Instead of writing f1(f2(f3(f4(f5(x))))), which can get very messy if the five functions are verbose, you can (A) write m(f1)(f2)(f3)(f4)(f5) where m = M(x) to preserve the modified value of x in the m-M(x) closure for future transformations, for example running m(f6)(f7) at a later time, or for use of the value m(dF3x), for example, console.log(\\"The final result is\\", m(dF3x)).</p>\\n<p>Alternatively, M(v)(f1)(f2)(f3)(f4)(f5)(dF3x) returns the result of running five functions on some value v, leaving the temporary closure for the garbage collector to delete. This anonymous, and therefore temporary, closure returns 10 after taking the square root of ((3 cubed times 4) minus 8): <span class = \\"or\\">{v2} </span> </p>\\n\\n<h2> Isolation of Sequences of Computations</h2>\\n<p>The virtual Rubik's cube shown on the <a href=./cube>Rubik's cube page</a> demonstrates key presses and button clicks turning the sides, middle sections, or entire body of the virtual Rubik's cube that is displayed in browsers. The application code contains two entwined representations of the cube; one written in JavaScript, and the other in HTML.</p> \\n\\n<h2> The Two Representations of the Virtual Cube</h2>\\n<p> The JavaScript representation of the virtual Rubik's cube consists of 54 strings contained in an array of six nine-member arrays. This array of arrays is \\"x\\" in the application's m-M(x) closure. \\"m\\" handles events triggered by key presses and mouse clicks. Events that rearrange strings in the m-M(x) closure cause m to operate on one of the functions (let's call it \\"func\\") defined within the script tags. Pursuant to the definition of M, m(func) rearranges the strings of x, mutating x to func(x). \\n</p>\\n<p> The HTML representation of the cube consists of 54 buttons contained in an array of three nine-member arrays, corresponding to the three sides of the cube which are visible in the browser: front, top, and right. Rotating the virtual cube does not change this fact. For example, clicking the top center square, clicking \\"Y\\", and pressing the \\"Y\\" key changes x in the m-M(x) closure and also in the DOM, since m(dF3x) is x pursuant to the definition of M. </p>        \\n<pre>{square_4_4}</pre>  \\n  \\n<p> by x in an m-M(x) closure, where x is an aAny andrray of six nine-member arrays of the strings \\"blue\\", \\"green\\", \\"red\\", \\"orange\\", \\"yellow\\", and \\"white\\". These clicks and key presses call m on functions, causing those functions to operate on the Rubik's cube representation in the m-M(x) closure. Rearranging the color strings of x, which are reactive and embedded in the DOM as \\"background-color = m(dF3x)[j][k]\\" for j between 0 and 6, and k between 0 and 9, automatically transforms the background colors of the buttons that comprise the Rubik's cube representation in the DOM. Rearranging the buttons'background colors creates the appearance, in the browser, of the virtual Rubik's cube, or one of its sides or middle sections, rotating 45 degrees. For example, The top, center square seen in the browser corresponds to this button element in the DOM: </p>\\n<p> The function Yro rearranges the virtual Rubik's cube seen in the monitor in a manner corresponding to a 45-degree clockwise rotation of the entire Rubik's cube around the vertical axis. It operates on x inside of the m-M(x) closure, insulated from possible interactions with other JavaScript code. The only side effects are changes in the HTML buttons' background colors. </p>\\n                    <pre>{topCenter}</pre>\\n                    \\n<p>The illustration below shows the color changes that are seen in browser monitors when the center square on the top of a solved virtual Rubik's cube is clicked three times. The color strings of the x array of arrays in the m-M(x) closure rearrange to Yro(x). Overall, three clicks change x to Yro(Yro(Yro(x))). The definition of Yro is in the appendix at the bottom of this page.</p> \\n\\n<img src={shot3} alt=\\"Screenshot3.png\\" style=\\"width:100px;height:104px;color:#44ff33;\\" />\\n<img src={shot4} alt=\\"Screenshot3.png\\" style=\\"width:100px;height:104px;color:#44ff33;\\" />\\n<img src={shot5} alt=\\"Screenshot3.png\\" style=\\"width:100px;height:104px;color:#44ff33;\\" />\\n<img src={shot6} alt=\\"Screenshot3.png\\" style=\\"width:100px;height:104px;color:#44ff33;\\" />\\n\\n<div class = \\"h3\\"> Cloning With Astonishing Ease</div>\\n<p class=\\"i3\\"> Cloning is discussed on the <a href=\\"./clone\\">Clone</a> page. Deeply nested, self-referential, function-containing, complex and complicated objects are cloned with the greatest of ease. </p>\\n\\n<div class = \\"h3\\"> Modifying M For Special Purposes</div>\\n<p> The definition of M can be modified to avoid mutation (push new results into an array, for example), reverse a series of actions as in the<a href=\\"cube#star\\">Rubik's cube</a> example, handle asynchronous functions, as in <a href=\\"./cube#reverse\\">the cube reverse function</a>,  <a href=\\"./async5#yes\\">Async</a>, and other purposes.</p>\\n<p>M2, a modified version of M, returns functions that can operate on synchronous and asynchronous, in any order:</p>\\n<pre>{asyncCode}</pre>\\n{arr}\\n<div class = \\"h2\\">Efficiently Crunching Numbers</div>\\n<p><a href=\\"./game2\\">Martingale</a> runs the Martingale betting strategy millions of times, demonstrating that even-odds games of chance are, in the long run, break-even endeavors. Sometimes you end up ahead, sometimes behind. The Martingale strategy doesn't change that.</p> \\n<p> to show that it neither increases nor decreases the odds of coming out ahead. x in the m(x)-M closure is [starting amount,1,goal,0] where \\"starting amount\\" is the amount of money the player tries to double. \\"goal is fixed, starting at \\"starting amount. m operates on the function \\"f1\\", which randomly generates 0 or 1 wth equal probability, increasing or decreasing v[1] (the mount of the bet) and v[0] (the players current stake). </p>\\n<p> If you go to <a href=\\"./game2\\">Martingale</a>, you can try it yourself, learn the betting algorithm, and see the outcomes of tens of thousands of coin flips. m needs only one function, f1, shown below.</p>\\n\\n<pre>{stdCode}</pre>\\n\\n</div> \\n\\n<a href=\\"#top\\">Back to the top</a>\\n<br>\\n<div class=\\"h2\\">Appendix</div>\\n<div class=\\"h3\\">The Virtual Rubik's Cube</div>\\n<p> Additional discussion is at <a href=\\"./cube\\">Virtual Rubik's Cube</a></p>\\n<p>In the m-M(x) representation of a Rubik's cube as an array of six nine-member arrays of strings, the solved cube is x = ([ [\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"],\\n      [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"],\\n      [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"],\\n      [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"],\\n      [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"],\\n      [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]  The default orientation of the visible sides of a solved cube is yellow on top, blue on the right, and orange facing outward.  </p>\\n<p>When m(Yro) executes, Yro constructs an array of six nine-member arrays named \\"temp,\\" using the 54 strings constituting x in its current state. Finally, pursuant to the definition of M, x = temp, the return value of Yro(x). Here's the definition of Yro: </p>\\n<pre>{YroCode}</pre>\\n\\n<h1 class=\\"middle2\\"> Further Discussion of the Fast and Efficient Virtual Rubik's Cube </h1> \\n\\n<p> Some of the code responsible for the <a href=\\"./cube\\">virtual Rubik's cube</a> is shown below. Here's the HTML code:</p>  \\n\\n<pre>{domCube}</pre>\\n<p> A JavaScript representation of a solved virtual Rubik's cube is shown below. 'x' in the m-M(x) closure is an array of six nine-member arrays of strings. x[0] contains nine copies of \\"blue\\". The code that determines the colors of the initial right side of the virtual cube displayed in the broswer is shown in the middle block of HTML buttons above. Each of the nine lines specifies background-colors which are elements of x[0], all of which are \\"blue\\" when the m-M(x) closure is defined.   </p>\\n<pre>{mCode}</pre>\\n<p> After pressing \\"F\\", clicking the \\"F\\" button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) closure rearranges to this configuration:\\n<pre>{Fcode2}</pre>\\n<p> And the cube looks like this:</p>\\n\\n<img src={Cubeshot} alt=\\"Right side turned\\" style=\\"width:150px;height:155px;\\" />\\n<p> Here's the definition of F:</p>\\n<pre>{functionF}</pre>\\n<p> F populates a temporary array \\"temp\\" with values taken from locations on the current configuration of x. It populates temp[0][0], temp[0][3], temp[0][6], with whatever strings happen to be at x[4][2], x[4][5], and x[4][8]. When m(F) returns temp, temp becomes the value of x in the m-M(x) closure. </p>\\n\\n\\n<div class=\\"h3\\">Additional Protection of \\"x\\" in m-M(x) closures</div>\\n<p> If x is not a primitive value, changing m(dF3x) changes x in the m-M(x) closure. This can be convenient, as in the function \\"reverse\\" in <a href=\\"./cube\\">Rubik's Cube</a>. The array \\"ar\\" in the modified definition of M holds an array of the names of the functions called when users press keys or click buttons that change the virtual Rubik's cube. m(dF3ar) returns ar. \\"ob\\" is an object that produces the inverse of the Rubik's cube manipulation functions. For example, ob.R is Rz, the inverse of R. Here are the definitions of reverse and ob: </p>\\n<pre>{reverseCode}</pre>\\n<pre>{obCode}</pre>\\n\\n\\n<p> </p>\\n<pre>{cloneLimitations}</pre>\\n\\n<p> While not universally effective, this method covers many cases:</p>\\n<pre>{betterClone}</pre>\\n\\n<style>\\nh1, h2 {\\n  text-align: center;\\n}\\n.middle {\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.middle2 {\\n  text-align: center;\\n  width: 100%;\\n  font-size: 26px;\\n}\\n\\nh2 {\\n  color: #f5a976;\\n}\\n\\n.or {\\n  color:rgb(254, 148, 62)\\n}\\n\\nspan {\\n    color: rgb(219, 253, 244);\\n    font-size: 24px;\\n    margin: 0%;\\n\\n}\\n\\n.orange {\\n  color: rgb(244, 202, 168)\\n}\\n  a {\\n    color: rgb(222, 100, 245);\\n  } \\n\\n  a:hover {\\n    color: white;\\n    background-color: #000;\\n  }\\n\\n  img {\\n    width: 25%;\\n    height: auto;\\n  }\\n\\n  h3 {\\n    color: gold;\\n    font-size: 25px;\\n    }\\n\\n  h4 {\\n    color: rgb(255, 187, 0);\\n    font-size: 22px;\\n    }\\n\\n  .h2 {\\n    color: gold;\\n    font-size: 32px;\\n    text-align: center;\\n    }\\n\\n  .h3 {\\n    color: gold;\\n    font-size: 27px;\\n    text-align: center;\\n    }\\n\\n  .h4 {\\n    color: gold;\\n    font-size: 22px;\\n    text-align: center;\\n    }\\n\\n.i3 {\\n  text-indent: 3%;\\n  text-align: left;\\n}\\n    \\n/*\\n  .blue {\\n    height: 60px;\\n    width: 60px;\\n    background-color: lightblue;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .green {\\n    height: 60px;\\n    width: 60px;\\n    background-color: lightgreen;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .red {\\n    height: 60px;\\n    width: 60px;\\n    background-color: rgb(252, 97, 97);\\n    border-radius: 10px;\\n  }\\n  .orange {\\n    height: 60px;\\n    width: 60px;\\n    background-color: orange;\\n    border-radius: 10px;\\n  }\\n  .yellow {\\n    height: 60px;\\n    width: 60px;\\n    background-color: yellow;\\n    display: inline;\\n    border-radius: 10px;\\n  }\\n  .white {\\n    height: 60px;\\n    width: 60px;\\n  }\\n\\n  .teaser {\\n    font-size: 32px;\\n    color: #ffccaa;\\n  }\\n\\n  img {\\n    display: block;\\n    margin: 0 auto;\\n    width: 100%;\\n  }\\n\\n  .O {\\n    color: orange;\\n  }\\n\\n  .dis {\\n    color: #fe0374;\\n    font-weight: bold;\\n    font-size: 28px;\\n  }\\n\\n  .play {\\n    color: yellow;\\n    font-weight: bold;\\n    font-size: 28px;\\n  }\\n\\n  .light {\\n    color: #ffeeaa;\\n    font-size: 28px;\\n  }\\n*/\\n\\n</style>\\n\\n\\n<slot />\\n"],"names":[],"mappings":"AAw/CA,gBAAE,CAAE,gBAAG,CACL,UAAU,CAAE,MACd,CACA,qBAAQ,CACN,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT,CAEA,sBAAS,CACP,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACb,CAEA,gBAAG,CACD,KAAK,CAAE,OACT,CAEA,iBAAI,CACF,MAAM,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE;AACxB,CAEA,kBAAK,CACD,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,EAEZ,CAKE,eAAE,CACA,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1B,CAEA,eAAC,MAAO,CACN,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IACpB,CAEA,iBAAI,CACF,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IACV,CAYA,iBAAI,CACF,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACZ,CAEF,iBAAI,CACF,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACZ,CAQJ,iBAAI,CACF,WAAW,CAAE,EAAE,CACf,UAAU,CAAE,IACd"}`
};
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function idP(x) {
  if (x instanceof Promise) return x;
  return Promise.resolve(x);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var dF3x = () => {
  };
  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }
  var log = console.log;
  var mCode = `m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`;
  var domCube = `<div class="face front">
  <div class="grid">
    <button style="background-color: {m(dF3x)[3][0]}" on:click={() => {m = m(Fz)}}/>
    <button style="background-color: {m(dF3x)[3][1]}" on:click={() => {m = m(Cx)}}/>
    <button style="background-color: {m(dF3x)[3][2]}" on:click={() => {m = m(F)}}/>
    <button style="background-color: {m(dF3x)[3][3]}" on:click={() => {m = m(Cyr)}}/>
    <button style="background-color: {m(dF3x)[3][4]}" on:click={() => {m = m(Zro)}}/>
    <button style="background-color: {m(dF3x)[3][5]}" on:click={() => {m = m(Cy)}}/>
    <button style="background-color: {m(dF3x)[3][6]}" on:click={() => {m = m(Fz)}}/>
    <button style="background-color: {m(dF3x)[3][7]}" on:click={() => {m = m(Cxr)}}/>
    <button style="background-color: {m(dF3x)[3][8]}" on:click={() => {m = m(F)}}/>
  </div>
</div>

<div class="face right">
  <div class="grid">
    <button style="background-color: {m(dF3x)[0][0]}" on:click={() => {m = m(Rz)}}/>
    <button style="background-color: {m(dF3x)[0][1]}" on:click={() => {m = m(Cz)}}/>
    <button style="background-color: {m(dF3x)[0][2]}" on:click={() => {m = m(R)}}/>
    <button style="background-color: {m(dF3x)[0][3]}" on:click={() => {m = m(Cyr)}}/>
    <button style="background-color: {m(dF3x)[0][4]}" on:click={() => {m = m(Xro)}}/>
    <button style="background-color: {m(dF3x)[0][5]}" on:click={() => {m = m(Cy)}}/>
    <button style="background-color: {m(dF3x)[0][6]}" on:click={() => {m = m(Rz)}}/>
    <button style="background-color: {m(dF3x)[0][7]}" on:click={() => {m = m(Czr)}}/>
    <button style="background-color: {m(dF3x)[0][8]}" on:click={() => {m = m(R)}}/>
  </div>
</div>

<div class="face top">
  <div class="grid">
    <button style="background-color: {m(dF3x)[4][0]}" on:click={() => {m = m(Uz)}}/>
    <button style="background-color: {m(dF3x)[4][1]}" on:click={() => {m = m(Cx)}}/>
    <button style="background-color: {m(dF3x)[4][2]}" on:click={() => {m = m(U)}}/>
    <button style="background-color: {m(dF3x)[4][3]}" on:click={() => {m = m(Cz)}}/>
    <button style="background-color: {m(dF3x)[4][4]}" on:click={() => {m = m(Yro)}}/>
    <button style="background-color: {m(dF3x)[4][5]}" on:click={() => {m = m(Czr)}}/>
    <button style="background-color: {m(dF3x)[4][6]}" on:click={() => {m = m(Uz)}}/>
    <button style="background-color: {m(dF3x)[4][7]}" on:click={() => {m = m(Cxr)}}/>
    <button style="background-color: {m(dF3x)[4][8]}" on:click={() => {m = m(U)}}/>
  </div>        
</div>`;
  var m = M(3);
  var mCode = `      var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`;
  var Fcode2 = `      var m = M([ ["yellow", "blue", "blue", "yellow", "blue", "blue", "yellow", "blue", "blue"],
      ["green", "green", "white", "green", "green", "white", "green", "green", "white"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green", "green", "green"],
      ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white"] ]);`;
  var functionF = `function F(ar) {
    let temp = [];
    temp[0] = [
      ar[4][6],
      ar[0][1],
      ar[0][2],
      ar[4][7],
      ar[0][4],
      ar[0][5],
      ar[4][8],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[5][0],
      ar[1][3],
      ar[1][4],
      ar[5][1],
      ar[1][6],
      ar[1][7],
      ar[5][2],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][6],
      ar[3][3],
      ar[3][0],
      ar[3][7],
      ar[3][4],
      ar[3][1],
      ar[3][8],
      ar[3][5],
      ar[3][2],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[1][8],
      ar[1][5],
      ar[1][2],
    ];

    temp[5] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
} `;
  var dF3ar = () => {
  };
  var m = M([0, 1]);
  function fib(f, n) {
    for (let k = 1; k <= n; k += 1) {
      f(([a, b]) => [b, a + b]);
    }
    return f(dF3ar);
  }
  var MCode = `    const dF3x = () => {}

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`;
  var v2 = `M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`;
  log(fib(m, 11));
  log("Hello", v2);
  var stdCode = `    import { leftShift } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }
    var aa = 25;
    var m = M([aa,1,aa,0]); // x in the m(x)-M closure is [25,1,25,0]
 // The elements of x (above) represent a starting dollars, first bet, goal, and wins.

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {           // 1 is true, 0 is false.
          v[0] += v[1];         // The player gains $1.00
          log("2<><><><><><><>, m(dF3x) is", m(dF3x));
          if (v[3] < aa) m(f1)  // Another coin flip, 
          else {
            log("Double", m(dF3x))
            return;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            v[1] = leftShift(v[1], 1);          
            log("2******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Fail", m(dF3x));
              return
            }
            else m(f1);
        } 
        return v;
      };`;
  let topCenter = `    <button
        style="background-color: {m(dF3x)[4][4]}"
        on:click={() => {
            m = m(Yro);
        }}
    />`;
  var square_4_4 = `                    <button
                        style="background-color: {m(dF3x)[4][4]}"
                        on:click={() => {
                            m = m(Yro);
                        }}
                    /> `;
  var YroCode = `    var Yro = function Yro(ar) {
        let temp = [];
        temp[0] = ar[2];
        temp[1] = ar[3];
        temp[2] = ar[1];
        temp[3] = ar[0];
        temp[4] = [
            ar[4][6],
            ar[4][3],
            ar[4][0],
            ar[4][7],
            ar[4][4],
            ar[4][1],
            ar[4][8],
            ar[4][5],
            ar[4][2],
        ];
        temp[5] = [
            ar[5][2],
            ar[5][5],
            ar[5][8],
            ar[5][1],
            ar[5][4],
            ar[5][7],
            ar[5][0],
            ar[5][3],
            ar[5][6],
        ];
        return temp;
    };`;
  var cloneLimitations = `var log = console.log;
var dF3x = () => {};

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        x = func(x);
        return go;
    };
}

var m = M({a:1, b:2});
var b = m(dF3x);  // b is just another name for x in the m-M(x) closure.
b.c = 3; 
log("b is", b);  // b is { a: 1, b: 2, c: 3 }
log("m(dF3x) is", m(dF3x));  // m(dF3x) is { a: 1, b: 2, c: 3 }
// Mutating b mutated x in the m-M(x) closure.

function M(x) {
    return function go(func) {
        if (func === dF3x) return JSON.parse(JSON.stringify(x));
        x = func(x);
        return go;
    };
}

var m = M({a:1, b:2});
var b = m(dF3x);  // b is a clone
b.c = 3;
log("b is", b);  // b is { a: 1, b: 2, c: 3 }
log("m(dF3x) is", m(dF3x));  // m(dF3x) is { a: 1, b: 2 }
// x in the m-M(x) closure is not affected by the modification of b.

JSON.parse(JSON.stringify(x)) is unable to make clones of functions, 
undefined values, Symbols, circular references, custom class instances (methods and prototype), dates (converted to strings), regular Expressions (lost), typed Arrays and special objects (converted to plain objects).

JSON.parse(JSON.stringify(x)) is a common technique to create a deep clone of an object in JavaScript. However, it fails to handle certain types of data. Here are the values of x for which this method cannot make a proper clone:

(1) Functions: Functions are not valid JSON data types, so they are omitted during stringification.

const obj = { fn: function() { return "hello"; } };
JSON.parse(JSON.stringify(obj)); // { } - the function is lost

(2) Undefined values: undefined is not a valid JSON type, so any property with undefined as a value will be omitted.

const obj = { key: undefined };
JSON.parse(JSON.stringify(obj)); // { } - the undefined property is lost

(3) Symbol values: Symbols are not valid in JSON and are excluded during stringification.

const obj = { key: Symbol("sym") };
JSON.parse(JSON.stringify(obj)); // { } - the symbol is lost

(4) Circular references: JSON cannot represent circular structures, so attempting to stringify an object with circular references will throw an error.

const obj = {};
obj.self = obj;
JSON.stringify(obj); // Error: Converting circular structure to JSON

(5) Custom class instances: Instances of custom classes will be converted to plain objects, and their methods and prototype chain will be lost.

class MyClass {
  constructor() { this.val = 10; }
  method() { return this.val; }
}
const obj = new MyClass();
JSON.parse(JSON.stringify(obj)); // { val: 10 } - methods are lost

(6) Date objects: Dates will be serialized as strings and will not retain their Date type.

const obj = { date: new Date() };
JSON.parse(JSON.stringify(obj)); // { date: "2024-09-10T00:00:00.000Z" } - Date is converted to string

(7) Regular Expressions: RegExps are not supported and will be converted to empty objects.

const obj = { regex: /abc/ };
JSON.parse(JSON.stringify(obj)); // { regex: {} } - Regular expression is lost

(8) Typed Arrays and other special objects: Objects like Map, Set, WeakMap, WeakSet, Int8Array, Uint8Array, etc., will lose their special behavior and be serialized as empty or plain objects.

const obj = { map: new Map(), set: new Set() };
JSON.parse(JSON.stringify(obj)); // { map: {}, set: {} } - Map and Set are lost`;
  var betterClone = `You can combine Object.create(Object.getPrototypeOf(obj)) 
with Object.getOwnPropertyDescriptors(obj) to both preserve the prototype and 
copy the own properties of obj using property descriptors. This approach 
allows you to create a new object with the same prototype as obj, while also 
copying all its own properties (including non-enumerable properties and 
getters/setters) in a concise and efficient way.

How It Works:

    Object.getOwnPropertyDescriptors(obj) returns an object containing 
    all the property descriptors of obj's own properties. Object.create() 
    allows you to specify the prototype for the new object and also pass 
    a property descriptor object as the second argument to define its properties.

Here’s how you can use them together:

javascript

const newObj = Object.create(
  Object.getPrototypeOf(obj),   // Set the prototype of the new object
  Object.getOwnPropertyDescriptors(obj)  // Copy all own properties of 'obj'
);

Example:

javascript

const obj = {
  a: 1,
  get b() { return this.a + 1; }
};

// Create a new object with the same prototype and properties as 'obj'
const newObj = Object.create(
  Object.getPrototypeOf(obj), 
  Object.getOwnPropertyDescriptors(obj)
);

console.log(newObj.a);  // Output: 1
console.log(newObj.b);  // Output: 2 (getter works)
console.log(Object.getPrototypeOf(newObj) === Object.getPrototypeOf(obj)); // true

Why This Is Useful:

    Retains Prototype: You retain the original prototype chain of obj, 
    meaning newObj will inherit methods and properties from the same 
    prototype as obj. Copies Own Properties: The own properties 
    (including getters, setters, and non-enumerable properties) of obj 
    are copied to newObj. Efficient: This is an efficient way to create 
    a new object with the same prototype and properties, without 
    manually copying or assigning them.

    However, deep copying is still not automatic: If any of the properties are objects 
    themselves, they will be shallow copied, and you may need to handle deep 
    copying manually if necessary. Works for non-enumerable properties: This 
    method also copies non-enumerable properties, which Object.assign() would 
    not handle.

Example With Non-enumerable Properties:

const obj = {};

Object.defineProperty(obj, 'a', {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

Object.defineProperty(obj, 'b', {
  value: 100,
  enumerable: false,  // Non-enumerable property
  writable: true,
  configurable: true
});

const newObj = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

console.log(newObj.a);   // Output: 42
console.log(newObj.b);   // Output: 100 (non-enumerable property is copied)
console.log(Object.keys(newObj)); // Output: ['a'], 'b' is non-enumerable`;
  const obCode = `const ob = {'R': Rz, 'L': Lz, 'U': Uz, 'D': Dz, 'F': Fz, 'B': Bz, 'Cx': Cxr,
   'Cy': Cyr, 'Cz': Czr, 'Xro': Xror, 'Yro': Yror, 'Zro': Zror, 'Rz': R,
   'Lz': L, 'Uz': U, 'Dz': D, 'Fz': F, 'Bz': B, 'Cxr': Cx, 'Cyr': Cy, 'Czr': Cz,
   'Xror': Xro, 'Yror': Yro, 'Zror': Zro};`;
  const reverseCode = `function reverse () { 
    m = m(ob[m(dF3ar).pop()]); // Pops a function name and runs its reverse.   
    m(dF3ar).pop(); // Discard the inverse functions's name, that m just 
                    // pushed onto ar (inside of the m-M(x) closure). 
  }`;
  function M2(x) {
    x = idP(x);
    return function go(func) {
      if (func === dF3x) return x;
      else x = x.then((v) => func(v));
      return go;
    };
  }
  var m = M2(1);
  var add = (a) => (b) => a + b;
  var mult = (a) => (b) => a * b;
  var A, B, C, D;
  var arr = [A, B, C, D];
  async function hello(x) {
    await wait(500);
    A = 3;
    arr = [A, B, C, D];
    log(arr);
    await wait(500);
    B = 2;
    arr = [A, B, C, D];
    log(arr);
    await wait(500);
    C = 1;
    arr = [A, B, C, D];
    log(arr);
    await wait(500);
    D = "Blast off";
    arr = [A, B, C, D];
    log(arr);
    return x;
  }
  let multP = (a) => async (b) => {
    await wait(2e3);
    return b * a;
  };
  m(dF3x).then((v) => log("m(dF3x resolves to", v));
  async function restart() {
    A = "A";
    B = "B";
    C = "C";
    D = "D";
    hello();
    log(A, B, C, D);
    m(add(6))(multP(6))(add(8))(multP(2))(Math.sqrt)(dF3x).then((v) => log("m(dF3x) is", v));
    m(add(4))(mult(3))(dF3x).then((v) => log("m(dF3x) is", v));
    m(dF3x).then((v) => log("Confirming that m(dF3x) is", v));
    await wait(5e3);
  }
  restart();
  var asyncCode = `    function M2 (x) {
        x = idP(x);
        return function go (func){
            if (func === dF3x) return x;
            else x = x.then(v => func(v));
            return go;
        };
    };
    
var m = M2(1);
var add = a => b => a + b;
var mult = a => b => a * b;
var div = a => b => a / b;

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function squareP(x) {
        await wait(300);
        return x * x;    
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let pause = (t) => async (x) => {
        await wait(t);
        return x;
    };
var A,B,C,D;
var arr = [A,B,C,D];
    async function hello(x) {
        await wait(500);
        A = 3;
        arr = [A,B,C,D];
        log(arr);
        await wait(500);
        B = 2;
        arr = [A,B,C,D];
        log(arr);
        await wait(500)
        C = 1;
        arr = [A,B,C,D];
        log(arr);
        await wait(500);
        D = "Blast off";
        arr = [A,B,C,D];
        log(arr);
        return x;
    }

    let addP = (x) => async (y) => {
        await wait(1000);
        return x + y;
    };

    let multP = (a) => async (b) => {
        await wait(2000);
        return b * a;
    };

        m(dF3x).then(v=>log("m(dF3x resolves to", v));
        
        async function idP(x) {
            if (x instanceof Promise) return x;
            return Promise.resolve(x);
        }

    async function restart() {
        A = "A";
        B = "B";
        C = "C";
        D = "D";
        hello();
        log(A,B,C,D);
        m(add(6))(multP(6))(add(8))(multP(2))(Math.sqrt)(dF3x)
        .then(v => log("m(dF3x) is", v)); // 10
        m(add(4))(mult(3))(dF3x).then(v => log("m(dF3x) is", v));  // 42
        m(dF3x).then(v => log("Confirming that m(dF3x) is", v));  // 42
        await wait(5000);
    };`;
  $$result.css.add(css$1);
  return ` <div style="margin-left: 8%; margin-right: 8%" id="top"><h1 class="middle svelte-cxunpl" data-svelte-h="svelte-zjsxjc">Recursive Closures</h1> <p data-svelte-h="svelte-1eulq29">This website explores some of the useful features of m-M(x) closures; i.e., closures created instantiated by statements &quot;m = M(x)&quot;, where x can be any value, and the simplest definition of &quot;M&quot; is:
 
  </p><pre>${escape(MCode)}</pre> <p data-svelte-h="svelte-7d4zne">A modified version of M can be found at <a href="./cube" class="svelte-cxunpl">Rubik&#39;s cube example </a>, where M holds an array of function names, making it convenient for players to reverse a series of moves by repeatedly pressing the &quot;Q&quot; key (see <a href="./cube#reverse" class="svelte-cxunpl">function reverse</a>. Another variant of M is demonstrated at <a href="./async5" class="svelte-cxunpl">Synchronous and Asynchronous Functions Handled</a> where the line &quot;x = func(x)&quot; in M (above) is replaced by &quot;x = idP(x).then(v =&gt; func(v))&quot;, idP(x),and where idP(x) returns a promise holding x.</p> <p data-svelte-h="svelte-179kzq">The above definition of M is no more complex than needed to demonstrate the core features of m-M(x) closures. Unless you are sure it is unnecessary, it might be wise to include a try-catch block in the definition of M to handle values of func that are not dF3x, are not functions, or are functions that are incompatible with x. Sometimes, you might even check for functions that change x in a way that makes it incompatible with other necessary functions.</p> <h2 class="svelte-cxunpl" data-svelte-h="svelte-1k4tiok">Function Composition</h2> <p data-svelte-h="svelte-dkque2">Instead of writing f1(f2(f3(f4(f5(x))))), which can get very messy if the five functions are verbose, you can (A) write m(f1)(f2)(f3)(f4)(f5) where m = M(x) to preserve the modified value of x in the m-M(x) closure for future transformations, for example running m(f6)(f7) at a later time, or for use of the value m(dF3x), for example, console.log(&quot;The final result is&quot;, m(dF3x)).</p> <p>Alternatively, M(v)(f1)(f2)(f3)(f4)(f5)(dF3x) returns the result of running five functions on some value v, leaving the temporary closure for the garbage collector to delete. This anonymous, and therefore temporary, closure returns 10 after taking the square root of ((3 cubed times 4) minus 8): <span class="or svelte-cxunpl">${escape(v2)}</span></p> <h2 class="svelte-cxunpl" data-svelte-h="svelte-16tw4wu">Isolation of Sequences of Computations</h2> <p data-svelte-h="svelte-qwztwm">The virtual Rubik&#39;s cube shown on the <a href="./cube" class="svelte-cxunpl">Rubik&#39;s cube page</a> demonstrates key presses and button clicks turning the sides, middle sections, or entire body of the virtual Rubik&#39;s cube that is displayed in browsers. The application code contains two entwined representations of the cube; one written in JavaScript, and the other in HTML.</p> <h2 class="svelte-cxunpl" data-svelte-h="svelte-1noahtr">The Two Representations of the Virtual Cube</h2> <p data-svelte-h="svelte-nf9bfy">The JavaScript representation of the virtual Rubik&#39;s cube consists of 54 strings contained in an array of six nine-member arrays. This array of arrays is &quot;x&quot; in the application&#39;s m-M(x) closure. &quot;m&quot; handles events triggered by key presses and mouse clicks. Events that rearrange strings in the m-M(x) closure cause m to operate on one of the functions (let&#39;s call it &quot;func&quot;) defined within the script tags. Pursuant to the definition of M, m(func) rearranges the strings of x, mutating x to func(x).</p> <p data-svelte-h="svelte-fr4euz">The HTML representation of the cube consists of 54 buttons contained in an array of three nine-member arrays, corresponding to the three sides of the cube which are visible in the browser: front, top, and right. Rotating the virtual cube does not change this fact. For example, clicking the top center square, clicking &quot;Y&quot;, and pressing the &quot;Y&quot; key changes x in the m-M(x) closure and also in the DOM, since m(dF3x) is x pursuant to the definition of M.</p> <pre>${escape(square_4_4)}</pre> <p data-svelte-h="svelte-1nb4i5k">by x in an m-M(x) closure, where x is an aAny andrray of six nine-member arrays of the strings &quot;blue&quot;, &quot;green&quot;, &quot;red&quot;, &quot;orange&quot;, &quot;yellow&quot;, and &quot;white&quot;. These clicks and key presses call m on functions, causing those functions to operate on the Rubik&#39;s cube representation in the m-M(x) closure. Rearranging the color strings of x, which are reactive and embedded in the DOM as &quot;background-color = m(dF3x)[j][k]&quot; for j between 0 and 6, and k between 0 and 9, automatically transforms the background colors of the buttons that comprise the Rubik&#39;s cube representation in the DOM. Rearranging the buttons&#39;background colors creates the appearance, in the browser, of the virtual Rubik&#39;s cube, or one of its sides or middle sections, rotating 45 degrees. For example, The top, center square seen in the browser corresponds to this button element in the DOM:</p> <p data-svelte-h="svelte-s51nih">The function Yro rearranges the virtual Rubik&#39;s cube seen in the monitor in a manner corresponding to a 45-degree clockwise rotation of the entire Rubik&#39;s cube around the vertical axis. It operates on x inside of the m-M(x) closure, insulated from possible interactions with other JavaScript code. The only side effects are changes in the HTML buttons&#39; background colors.</p> <pre>${escape(topCenter)}</pre> <p data-svelte-h="svelte-1q8puul">The illustration below shows the color changes that are seen in browser monitors when the center square on the top of a solved virtual Rubik&#39;s cube is clicked three times. The color strings of the x array of arrays in the m-M(x) closure rearrange to Yro(x). Overall, three clicks change x to Yro(Yro(Yro(x))). The definition of Yro is in the appendix at the bottom of this page.</p> <img${add_attribute("src", shot3, 0)} alt="Screenshot3.png" style="width:100px;height:104px;color:#44ff33;" class="svelte-cxunpl"> <img${add_attribute("src", shot4, 0)} alt="Screenshot3.png" style="width:100px;height:104px;color:#44ff33;" class="svelte-cxunpl"> <img${add_attribute("src", shot5, 0)} alt="Screenshot3.png" style="width:100px;height:104px;color:#44ff33;" class="svelte-cxunpl"> <img${add_attribute("src", shot6, 0)} alt="Screenshot3.png" style="width:100px;height:104px;color:#44ff33;" class="svelte-cxunpl"> <div class="h3 svelte-cxunpl" data-svelte-h="svelte-1dux413">Cloning With Astonishing Ease</div> <p class="i3 svelte-cxunpl" data-svelte-h="svelte-firr0a">Cloning is discussed on the <a href="./clone" class="svelte-cxunpl">Clone</a> page. Deeply nested, self-referential, function-containing, complex and complicated objects are cloned with the greatest of ease.</p> <div class="h3 svelte-cxunpl" data-svelte-h="svelte-1pg5tyq">Modifying M For Special Purposes</div> <p data-svelte-h="svelte-1spjgdz">The definition of M can be modified to avoid mutation (push new results into an array, for example), reverse a series of actions as in the<a href="cube#star" class="svelte-cxunpl">Rubik&#39;s cube</a> example, handle asynchronous functions, as in <a href="./cube#reverse" class="svelte-cxunpl">the cube reverse function</a>,  <a href="./async5#yes" class="svelte-cxunpl">Async</a>, and other purposes.</p> <p data-svelte-h="svelte-9fpn70">M2, a modified version of M, returns functions that can operate on synchronous and asynchronous, in any order:</p> <pre>${escape(asyncCode)}</pre> ${escape(arr)} <div class="h2 svelte-cxunpl" data-svelte-h="svelte-3a8njy">Efficiently Crunching Numbers</div> <p data-svelte-h="svelte-1uultj9"><a href="./game2" class="svelte-cxunpl">Martingale</a> runs the Martingale betting strategy millions of times, demonstrating that even-odds games of chance are, in the long run, break-even endeavors. Sometimes you end up ahead, sometimes behind. The Martingale strategy doesn&#39;t change that.</p> <p data-svelte-h="svelte-s959ff">to show that it neither increases nor decreases the odds of coming out ahead. x in the m(x)-M closure is [starting amount,1,goal,0] where &quot;starting amount&quot; is the amount of money the player tries to double. &quot;goal is fixed, starting at &quot;starting amount. m operates on the function &quot;f1&quot;, which randomly generates 0 or 1 wth equal probability, increasing or decreasing v[1] (the mount of the bet) and v[0] (the players current stake).</p> <p data-svelte-h="svelte-vude9i">If you go to <a href="./game2" class="svelte-cxunpl">Martingale</a>, you can try it yourself, learn the betting algorithm, and see the outcomes of tens of thousands of coin flips. m needs only one function, f1, shown below.</p> <pre>${escape(stdCode)}</pre></div> <a href="#top" class="svelte-cxunpl" data-svelte-h="svelte-1887boa">Back to the top</a> <br> <div class="h2 svelte-cxunpl" data-svelte-h="svelte-ak8q84">Appendix</div> <div class="h3 svelte-cxunpl" data-svelte-h="svelte-mb6ace">The Virtual Rubik&#39;s Cube</div> <p data-svelte-h="svelte-1en07ms">Additional discussion is at <a href="./cube" class="svelte-cxunpl">Virtual Rubik&#39;s Cube</a></p> <p data-svelte-h="svelte-1ojsfva">In the m-M(x) representation of a Rubik&#39;s cube as an array of six nine-member arrays of strings, the solved cube is x = ([ [&quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;, &quot;blue&quot;],
      [&quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;, &quot;green&quot;],
      [&quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;, &quot;red&quot;],
      [&quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;, &quot;orange&quot;],
      [&quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;, &quot;yellow&quot;],
      [&quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;, &quot;white&quot;] ]  The default orientation of the visible sides of a solved cube is yellow on top, blue on the right, and orange facing outward.</p> <p data-svelte-h="svelte-1q1psh7">When m(Yro) executes, Yro constructs an array of six nine-member arrays named &quot;temp,&quot; using the 54 strings constituting x in its current state. Finally, pursuant to the definition of M, x = temp, the return value of Yro(x). Here&#39;s the definition of Yro:</p> <pre>${escape(YroCode)}</pre> <h1 class="middle2 svelte-cxunpl" data-svelte-h="svelte-jur4mx">Further Discussion of the Fast and Efficient Virtual Rubik&#39;s Cube</h1> <p data-svelte-h="svelte-1ah6ryy">Some of the code responsible for the <a href="./cube" class="svelte-cxunpl">virtual Rubik&#39;s cube</a> is shown below. Here&#39;s the HTML code:</p> <pre>${escape(domCube)}</pre> <p data-svelte-h="svelte-1orwi6g">A JavaScript representation of a solved virtual Rubik&#39;s cube is shown below. &#39;x&#39; in the m-M(x) closure is an array of six nine-member arrays of strings. x[0] contains nine copies of &quot;blue&quot;. The code that determines the colors of the initial right side of the virtual cube displayed in the broswer is shown in the middle block of HTML buttons above. Each of the nine lines specifies background-colors which are elements of x[0], all of which are &quot;blue&quot; when the m-M(x) closure is defined.</p> <pre>${escape(mCode)}</pre> <p data-svelte-h="svelte-15xi2ir">After pressing &quot;F&quot;, clicking the &quot;F&quot; button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) closure rearranges to this configuration:
</p><pre>${escape(Fcode2)}</pre> <p data-svelte-h="svelte-145bh0k">And the cube looks like this:</p> <img${add_attribute("src", Cubeshot, 0)} alt="Right side turned" style="width:150px;height:155px;" class="svelte-cxunpl"> <p data-svelte-h="svelte-1odlfg9">Here&#39;s the definition of F:</p> <pre>${escape(functionF)}</pre> <p data-svelte-h="svelte-v62ybc">F populates a temporary array &quot;temp&quot; with values taken from locations on the current configuration of x. It populates temp[0][0], temp[0][3], temp[0][6], with whatever strings happen to be at x[4][2], x[4][5], and x[4][8]. When m(F) returns temp, temp becomes the value of x in the m-M(x) closure.</p> <div class="h3 svelte-cxunpl" data-svelte-h="svelte-131ofdm">Additional Protection of &quot;x&quot; in m-M(x) closures</div> <p data-svelte-h="svelte-1kq13qy">If x is not a primitive value, changing m(dF3x) changes x in the m-M(x) closure. This can be convenient, as in the function &quot;reverse&quot; in <a href="./cube" class="svelte-cxunpl">Rubik&#39;s Cube</a>. The array &quot;ar&quot; in the modified definition of M holds an array of the names of the functions called when users press keys or click buttons that change the virtual Rubik&#39;s cube. m(dF3ar) returns ar. &quot;ob&quot; is an object that produces the inverse of the Rubik&#39;s cube manipulation functions. For example, ob.R is Rz, the inverse of R. Here are the definitions of reverse and ob:</p> <pre>${escape(reverseCode)}</pre> <pre>${escape(obCode)}</pre> <p data-svelte-h="svelte-1cfqa3s"></p> <pre>${escape(cloneLimitations)}</pre> <p data-svelte-h="svelte-517zjw">While not universally effective, this method covers many cases:</p> <pre>${escape(betterClone)}</pre>  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
