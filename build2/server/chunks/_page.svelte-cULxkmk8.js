import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-0d8NzNEj.js';

const Cubeshot = "data:image/png;base64,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";
const CubeshotR = "/_app/immutable/assets/CubeshotR.5QedDGqe.png";
const css$1 = {
  code: "h2.svelte-1j1mmf{color:#f5ee9f}span.svelte-1j1mmf{color:rgb(219, 253, 244);font-size:24px;margin:3%}a.svelte-1j1mmf{color:magenta}a.svelte-1j1mmf:hover{color:white;background-color:#000}img.svelte-1j1mmf{width:25%;height:auto}.teaser.svelte-1j1mmf{font-size:32px;color:#ffccaa}h3.svelte-1j1mmf{color:turquoise}img.svelte-1j1mmf{display:block;margin:0 auto;width:100%}.dis.svelte-1j1mmf{color:#fe0374;font-weight:bold;font-size:28px}.play.svelte-1j1mmf{color:yellow;font-weight:bold;font-size:28px}.light.svelte-1j1mmf{color:#ffeeaa;font-size:28px}",
  map: null
};
var v5 = "m(dF3x)  // 3";
var dF3xCode = "dF3x = () => {}";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Mdis = `    function M (x) {
      return function go (func)`;
  var Mplay = `      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`;
  var Mend = `    }`;
  let Fcode = `  function F(ar) {
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
  var classCode2 = `const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'white';
  const w1 = 'white';
  const w2 = 'white';
  const w3 = 'white';
  const w4 = 'white';
  const w5 = 'white';
  const w6 = 'white';
  const w7 = 'white';
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;
  const DOMfront = `      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>`;
  var classCode2 = `x =[ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);

  Where
  
  var b0 = 'blue';
  var b1 = 'blue';
  var b2 = 'blue';
  var b3 = 'blue';
  var b4 = 'blue';
  var b5 = 'blue';
  var b6 = 'blue';
  var b7 = 'blue';
  var b8 = "blue";

  var g0 = 'green';
  var g1 = 'green';
  var g2 = 'green';
  var g3 = 'green';
  var g4 = 'green';
  var g5 = 'green';
  var g6 = 'green';
  var g7 = 'green';
  var g8 = "green";

  var r0 = 'red';
  var r1 = 'red';
  var r2 = 'red';
  var r3 = 'red';
  var r4 = 'red';
  var r5 = 'red';
  var r6 = 'red';
  var r7 = 'red';
  var r8 = "red";

  var o0 = 'orange';
  var o1 = 'orange';
  var o2 = 'orange';
  var o3 = 'orange';
  var o4 = 'orange';
  var o5 = 'orange';
  var o6 = 'orange';
  var o7 = 'orange';
  var o8 = "orange";

  var y0 = 'yellow';
  var y1 = 'yellow';
  var y2 = 'yellow';
  var y3 = 'yellow';
  var y4 = 'yellow';
  var y5 = 'yellow';
  var y6 = 'yellow';
  var y7 = 'yellow';
  var y8 = "yellow";

  var w0 = 'white';
  var w1 = 'white';
  var w2 = 'white';
  var w3 = 'white';
  var w4 = 'white';
  var w5 = 'white';
  var w6 = 'white';
  var w7 = 'white';
  var w8 = 'white';

  m = M([bb, gg, rr, oo, yy, ww]);`;
  var v4 = `m = M(3)`;
  var v6 = `m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)`;
  var v7 = `m(dF3x)  // 10`;
  var v8 = `m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42`;
  var v9 = `m(dF3x) // 42`;
  var showBlue = `      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`;
  var Rcode = `  const R = function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];
    return temp;
  }`;
  var css = `.blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(252, 97, 97);
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }
  .white { 
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }`;
  var dom = `<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(dF3x)[2][8]} />
          <div class={m(dF3x)[2][7]} />
          <div class={m(dF3x)[2][6]} />
          <div class={m(dF3x)[2][5]} />
          <div class={m(dF3x)[2][4]} />
          <div class={m(dF3x)[2][3]} />
          <div class={m(dF3x)[2][2]} />
          <div class={m(dF3x)[2][1]} />
          <div class={m(dF3x)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
         <div><button class={m(dF3x)[0][0]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][1]} on:click = {() => {m = m(Cz)}} /> </div> 
         <div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> 
          <div><button class={m(dF3x)[0][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[0][4]} on:click = {() => {m = m(Xro)}} /> </div>
          <div><button class={m(dF3x)[0][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[0][6]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][7]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[0][8]} on:click = {() => {m = m(R)}} /> </div> 
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(dF3x)[1][0]} />
          <div class={m(dF3x)[1][1]} />
          <div class={m(dF3x)[1][2]} />
          <div class={m(dF3x)[1][3]} />
          <div class={m(dF3x)[1][4]} />
          <div class={m(dF3x)[1][5]} />
          <div class={m(dF3x)[1][6]} />
          <div class={m(dF3x)[1][7]} />
          <div class={m(dF3x)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div><button class={m(dF3x)[4][0]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div><button class={m(dF3x)[4][2]} on:click = {() => {m = m(U)}} /> </div> 
          <div><button class={m(dF3x)[4][3]} on:click = {() => {m = m(Cz)}} /> </div> 
          <div> <button class={m(dF3x)[4][4]} on:click = {() => {m = m(Yro)}} /> </div>
          <div><button class={m(dF3x)[4][5]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[4][6]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[4][8]} on:click = {() => {m = m(U)}} /> </div> 
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(dF3x)[5][0]} />
          <div class={m(dF3x)[5][1]} />
          <div class={m(dF3x)[5][2]} />
          <div class={m(dF3x)[5][3]} />
          <div class={m(dF3x)[5][4]} />
          <div class={m(dF3x)[5][5]} />
          <div class={m(dF3x)[5][6]} />
          <div class={m(dF3x)[5][7]} />
          <div class={m(dF3x)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>`;
  var handleEventCode = `function handleEvent(e) { 
    console.log(e.keyCode);
         if (e.keyCode === 85)  m(Uz);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68)  m(Dz);
    else if (e.keyCode === 100) m(D);
    else if (e.keyCode === 82)  m(Rz);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76)  m(Lz);
    else if (e.keyCode === 108) m(L);
    else if (e.keyCode === 70)  m(Fz);
    else if (e.keyCode === 102) m(F);
    else if (e.keyCode === 66)  m(Bz);
    else if (e.keyCode === 98)  m(B);
    else if (e.keyCode === 77)  m(Cxr);
    else if (e.keyCode === 109) m(Cx);
    else if (e.keyCode === 69)  m(Cyr);
    else if (e.keyCode === 101) m(Cy);
    else if (e.keyCode === 83)  m(Czr);
    else if (e.keyCode === 115) m(Cz);
    else if (e.keyCode === 120) m(Xro);
    else if (e.keyCode === 88)  m(Xror);  
    else if (e.keyCode === 121) m(Yro);
    else if (e.keyCode === 89)  m(Yror);
    else if (e.keyCode === 122) m(Zro);
    else if (e.keyCode === 90)  m(Zror);
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    else if (e.keyCode === 113) reverse();
    else if (e.keyCode === 105) previous();
    else if (e.keyCode === 73) getSaved();
    else if (e.keyCode === 111) save();
    // else if (e.keyCode === 116) rotate(); 
    m = m;  // In Svelte, this updates the DOM
  }`;
  var Masync = `function M (x) {
          return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;
  $$result.css.add(css$1);
  return `<div style="margin-left: 8%; margin-right: 8%" id="top"><h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-17i9lsv">Recursive Closures</h1> <h3 class="svelte-1j1mmf" data-svelte-h="svelte-snzv95">The inner function &quot;m&quot; ( defined below as &quot;go&quot; in the outer function M ) is recursive</h3> <p data-svelte-h="svelte-vcq9z2">m = M(x),</p> <p data-svelte-h="svelte-1q6ftnr">Where x can be any value and M is</p> <pre class="dis svelte-1j1mmf">${escape(Mdis)}</pre> <pre class="play svelte-1j1mmf">${escape(Mplay)}</pre> <pre class="dis svelte-1j1mmf">${escape(Mend)}</pre> <p>The flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, &quot;func&quot; is defined here as a function; namely: <span style="margin: 0px; color: #f5ee9f" class="svelte-1j1mmf">${escape(dF3xCode)}</span>.</p> <span class="svelte-1j1mmf" data-svelte-h="svelte-1wtymb8">When the closure isn&#39;t named, there&#39;s no danger of a memory leak:</span> <br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-ool12f">x = M(3)(v=&gt;v**3)(v=&gt;v*4)(v=&gt;v-8)(Math.sqrt)(dF3x)</span><br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-5343z1">console.log(x)     // 10</span> <br><br> <span class="svelte-1j1mmf" data-svelte-h="svelte-1n5kn1n">When the closure is named, it remains at least as long as the browser tab remains open, longer with persistent storage.</span> <br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-1hjcq7i">m = M(3)(v=&gt;v**3)(v=&gt;v*4)(v=&gt;v-8)(Math.sqrt)</span><br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-5343z1">console.log(x)     // 10</span> <br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-9ze7pl">m(v=&gt;v+4)(v=&gt;v*3)</span> <br> <span style="color: #f5ee9f" class="svelte-1j1mmf" data-svelte-h="svelte-1qxzyji">console.log(x)     // 42</span> <p data-svelte-h="svelte-60zzy5">For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5" class="svelte-1j1mmf">Async</a>.</p> <h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-3x2697">A Fast and Efficient Virtual Rubik&#39;s Cube</h1> <h2 class="svelte-1j1mmf" data-svelte-h="svelte-33klux">Callbacks Rearrange the m-M(x) Closure</h2> <p data-svelte-h="svelte-h0xfgz">Key press and mouse click events trigger m(func) where m is the inner function in the m-M(x) closure holding the state of the virtual Rubiks cube and func is a callback operating on x. Just as a Rubik&#39;s cube always has six sides, each of which always contains nine squares, so too the array in the closure always holds six nine-member arrays of strings. There is always a one-to-one correspondence between the positions of the nine strings named &quot;blue&quot;, the nine strings named &quot;green&quot;, and so forth, and the nine blue squares, nine green squares, etc. of the simulated Rubik&#39;s cube in the browser.</p> <h2 class="svelte-1j1mmf" data-svelte-h="svelte-17b0z2k">The Browser Image of the Virtural Rubik&#39;s Cube Automatically Reflects the State of x in the Closure.</h2> <p data-svelte-h="svelte-9wn1h0"></p> <p data-svelte-h="svelte-zurehh">Keystrokes and mouse clicks call</p> <p data-svelte-h="svelte-cv5qqz">The six colors of the Rubik&#39;s cube are primitive values (strings) in the m-M(x) closure, but also variable names of six CSS classes. For example, m(dF3x)[3][0]</p> <p data-svelte-h="svelte-wjn1me">Whenever any of the six nine-element arrays in x get reconstituted with with new or differently-ordered strings, the background colors of the 54 divs that constitute the virtual Rubik&#39;s automatically change accordingly. That&#39;s because the divs have CSS classes named &quot;blue, green, red, orange, yellow, and white&quot; with corresponding background colors. What are just strings in the m-M(x) closure are class names in the DOM. Here&#39;s the solved-cube definitions of x in the m-M(x) closure, the definitions of the six CSS classes, and the permanent structure of the 54 div representation of the Rubik&#39;s cube:</p> <pre>${escape(classCode2)}</pre> <p data-svelte-h="svelte-wpx7dc">Here are the div class names that get automatically rearranged whenever the strings in the m-M(x) closure are rearranged. Functions that rearrange the locations of strings in the m-M(x) closure make it seem that the divs constituting the faces of the virtual Rubik&#39;s cube have rearranged.          , its sides, or its middle sections have rotated 90 degrees:</p> <pre>${escape(css)}</pre> <p data-svelte-h="svelte-11b2fg6">The 54 divs that combine to represent the cube in the DOM are shown below. Strings rearrange in the m-M(x) closure causing div class assignments to rearrange thereby creating the illusion that the whole cube, its faces, or its middle sections have rotated.

    The visual representation that appears in the browser is on the next page, <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube</a></p> <pre>${escape(dom)}</pre> <p data-svelte-h="svelte-1hhrzwd"></p><h2 class="svelte-1j1mmf" data-svelte-h="svelte-7yh3e7">The Three Visible Sides of the Simulated Rubik&#39;s Cube</h2> <p data-svelte-h="svelte-1zk8o7">You can rotate the entire cube by clicking on the middle square of any side, pressing the &#39;X&#39;, &#39;Y&#39;, and &#39;Z&#39; keys, or clicking on the &quot;X rotate&quot;, &quot;Y rotate&quot;, or &quot;Z rotate&quot; buttons. Such rotations change which sides are displayed, but they are always designated &#39;top&#39;, &#39;front&#39;, and &#39;right-side&#39; for purposes of rotating sides and middle sections. For example, pres&#39;e front divs, and nine right-side divs contain buttons with classes named &quot;blue, green, red, orange, yellow, and white.&quot; Each of these classes has a &quot;background-color&quot; attribute identical to its name.</p> <p data-svelte-h="svelte-18lijdl">The statement, &quot;class = m(dF3x)[j][k], where j is 0, 1, 2, 3, 4, or 5 specifies &#39;blue&#39;, &#39;green&#39;, &#39;red&#39;, &#39;orange&#39;, &#39;yellow&#39;, or &#39;white&#39; respectively, and k is the location   an integer und-color of one of the squares on one of the faces of the Rubik&#39;s cube representation in the DOM.&quot;</p> <p data-svelte-h="svelte-dyx75a">Likewise, the statement &quot;style = &#39;background-color: m(dF3x)[j][k]&#39;&quot; can specify the color of one of the 54 squares that constitute the simulated Rubik&#39;s cube in the DOM. Here&#39;s a demonstration on the Rubik&#39;s cube page: <a href="./cube7#coolcow" class="svelte-1j1mmf"><span style="font-weight:bold; color:#ff99dd;" class="svelte-1j1mmf">Demonstration</span></a>. After you click &quot;Scramble&quot; multiple times, I recommend that you read the definitions that precede it. Counterintuitive things are happening, some of which will be explained in the next section.</p> <p data-svelte-h="svelte-bb71i5">Composing function this way is elegant, transparent, and efficient. Scrambling the Rubik&#39;s cube involves calling a random sequence of 40 functions that rotate faces and middle sections of the Simulated Rubik&#39;s cube. Running this application on localhost:5173, my desktop computer can scramble the cube 1,000 times in less than 300 milliseconds. <a href="./cube7#test" class="svelte-1j1mmf">Try it here</a></p> <p data-svelte-h="svelte-192x6hp">The statement resolves to 10. No variable points to the transient closure, which is transient because it is not assigned to a variable and is, therefore, ripe for removal by the garbage collector immediately upon resolution to 10.</p> <p data-svelte-h="svelte-uw280o">M(3) at the beginning of the above computation returns go. The function go operates on v=&gt;v**3, v=&gt;v*4, v=&gt;v-8, Math.sqrt, and dF3x. Then, being unreachable by any variable assignment, disappears from memory whenever the garbage collector gets around to removing it.</p> <br> <p data-svelte-h="svelte-9wn1h0"></p> <div class="light svelte-1j1mmf"><span class="svelte-1j1mmf" data-svelte-h="svelte-1xp33cu">Encapsulated State:</span> <pre>${escape(v4)}</pre> <pre>${escape(v5)}</pre> <span class="svelte-1j1mmf" data-svelte-h="svelte-zs2sfr">Sometime later:</span> <pre>${escape(v6)}</pre> <pre>${escape(v7)}</pre> <pre>${escape(v8)}</pre> <pre>${escape(v9)} // The JavaScript garbage collector ignores closures </pre></div> <span id="sim" class="teaser svelte-1j1mmf" data-svelte-h="svelte-11l9sog">Back to the Rubik&#39;s Cube Simulation</span> <span class="teaser svelte-1j1mmf">***********************************************************************
    <br> <p data-svelte-h="svelte-1wqu2ox">In the <a style="color: #FCAACC" href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube application</a>, x in the m-M(x) closure is defined as:</p> <pre>${escape(classCode2)}</pre> <p data-svelte-h="svelte-7xj7bs">In the solved cube, bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. Notice that in the DOM representation of the Rubik&#39;s cube (below), only the top, front, and right side of the cube contain buttons. Click the center of the right side of the cube or press &#39;X&#39; on the keyboard. Now the front is white, but it has an embedded button</p>

    Case 1 -- Clicking on the three visible sides of the cube.</span> <p data-svelte-h="svelte-5u7x0d">Although some or all of the 54 divs that constitute the representation a Rubik&#39;s cube seem to move in response to certain mouse clicks and key presses, they never do. If func is the function dF3x, m(func) is a reference to the to the array of six nine-member arrays of strings named &quot;x&quot; in the m-M(x) closure. m(dF3x) === x. Mutating one mutates the other. Otherwise, calling m(func) results in x =&gt; func(x) in the m-M(x) closure where x has become func(x).</p> <p data-svelte-h="svelte-1aczuhf">The value held in the m-M(x) closure in the Rubik&#39;s cube application, &quot;x&quot;, is always an array of six nine-member
    references to the strings &quot;blue, green, red, orange, yellow, and white.&quot; The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in x[j][k]. In the starting cube, also known as the &quot;solved cube,&quot; x[3] is the array &quot;oo&quot;, the array of all nine references to &quot;orange.&quot; Here&#39;s the first of the six parts of the 54 div representation of the Rubik&#39;s cube in the DOM:</p> <pre>${escape(DOMfront)}</pre> <p data-svelte-h="svelte-t7rbwi">The third button down from the top and the final button of the front face (see above) contain the statement &quot;m = m(F)&quot;. These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named &quot;temp&quot;.</p> <pre>${escape(Fcode)}</pre> <p data-svelte-h="svelte-7peipo">Pressing the &quot;F&quot; key and clicking on the &quot;F&quot; button are other ways of rotating the front face clockwise 90 degrees. All three methods rely on the statement, &quot;m = m(F)&quot;. The &quot;m =&quot; part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks.</p> <p data-svelte-h="svelte-1665qyz">Examining the function &quot;F&quot;, we see that the front face of the cube, temp[3], remains solid orange after class reassignments create the illusion that the front face rotated. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here&#39;s what the cube looks like in the browser after running &quot;m = m(F)&quot; on the solved cube:</p> <img${add_attribute("src", Cubeshot, 0)} alt="Image of the Rubik's cube " style="width:200px;height:210px;" class="svelte-1j1mmf"> <p data-svelte-h="svelte-17tb0r2">The changes to the top face, with three classes reassigned from x[1] (previously all green), and the changes to the right face, three classes reassigned from x[4] (previously all yellow), demonstrate the correspondence between the function &quot;F&quot; and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of your own solved cube, assuming you have one.</p> <p data-svelte-h="svelte-x3eeug">Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, and z Keys has the same effects. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons for clockwise rotations, and &quot;back&quot; buttons for counterclockwise rotation.</p> <p data-svelte-h="svelte-8cvcfg">The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube</a></p> <pre>${escape(dom)}</pre> <p data-svelte-h="svelte-ok96u4">If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.</p> <span class="teaser svelte-1j1mmf" data-svelte-h="svelte-1aqmcih">***********************************************************************
      <br>
      Case 2 -- Clicking on the buttons.</span> <p data-svelte-h="svelte-1ytqx6g">Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for for the same functions &quot;func&quot; involved in clicking on parts of the simulated Rubik&#39;s cube.  Each function &quot;func&quot; rearranges some of the six nine-element arrays constituting the array &quot;x&quot; in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the illusion in the browser that the cube or some part of it has rotated. You can try out the buttons in the <a href="./cube7#yes" class="svelte-1j1mmf">button section</a> of the Rubik&#39;s cube page.</p> <p data-svelte-h="svelte-1yl9urz">Pressing the &quot;F&quot; key, clicking the &quot;F&quot; button, or clicking the right upper or lower corners of the forward-facing side all cause the function &quot;m(F)&quot; to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top and the lowest row of the yellow top to move into the left column of the right side of the cube.</p> <span class="teaser svelte-1j1mmf" data-svelte-h="svelte-kozoi1">***********************************************************************
      <br>
      Case 3 -- Key presses.</span> <p data-svelte-h="svelte-cxnf2r">Pressing keys invokes eventHandler(e) where &quot;e&quot; is the key-press event object and
      eventHandler is defined as follows:</p> <pre>${escape(handleEventCode)}</pre> <p data-svelte-h="svelte-16gky82">&quot;svelte:window on:keypress = { handleEvent } &quot; routes keyPress
      event objects to handleEvent.</p> <p data-svelte-h="svelte-lw9xvr">The <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s Cube simulation</a> features an m-M(x)
      closure whose x values are always arrays of six nine-member arrays of the
      strings &quot;blue, green, red, orange, yellow, and white&quot;. Callbacks stemming
      from mouse clicks have the form &quot;m = m(Foo), where Foo is one of several
      functions that use the elements of x to construct and return new arrays of
      six nine-member arrays. The resulting transformation of x in the m-M(x)
      closure automatically transforms the cube displayed in the browser because
      x&#39;s elements (references to strings) are references to classes in the DOM.
      m(dF3x)[0] is always the first element of m(dF3x). In the solved cube,
      it&#39;s a nine-member array, each element of which is corresponds to a CSS
      class with the element &quot;background-color: blue&quot;. m(dF3x)[0][0] === &quot;blue&quot;
      returns &quot;true&quot;, as do m(dF3x)[0][v] for the other eight elements of
      m(dF3x)[0]. automatically responds because to arrays to and return create
      arrays of six nine-member arrays that &quot; are operated upon by m that
      respond only to DOM events, and whose side effects are felt only in the
      DOM rearrangements of six CSS classes on the 54 divs of the cube. Other
      than background colors, those classes are all identical. modifications of
      the DOM, encapsulate transformations of x in a manner reminiscent of
      Haskel monads. <a href="./cube7" class="svelte-1j1mmf">Here</a>, you can click on an edge or
      corner of the upper cube and see it rotate. The JavaScript in the script
      section provides function definitions, and nothing more.</p> <span class="teaser svelte-1j1mmf" data-svelte-h="svelte-p8qgwr">***********************************************************************</span> <div class="background"><p data-svelte-h="svelte-qn223a">The code samples at the top of this page show that function composition
        using M is as transparent and concise as it can possibly be. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score" class="svelte-1j1mmf">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik&#39;s cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves.</p> <p data-svelte-h="svelte-2y9he2">A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7" class="svelte-1j1mmf">Simulated Rubik&#39;s cube</a> is a case in point.</p> <p data-svelte-h="svelte-14wboki">The array x in the m-M(x) Rubik&#39;s cube array is an array consisting of
        six nine-member arrays of references to the strings &quot;blue, green, red,
        orange, yellow and white.&quot; Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose &quot;background-color&quot; properties match the names of the
        selectors that contain them. For example, the CSS class &quot;blue&quot; contains
        the line, &quot;background-color: &quot;blue&quot;.</p> <p id="cow7" data-svelte-h="svelte-1jc3qmd">To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:</p> <pre>${escape(classCode2)}</pre> <p data-svelte-h="svelte-r2a6lm">m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = &quot;blue&quot;. Here&#39;s blue&#39;s definition:</p> <pre>${escape(showBlue)}</pre> <p data-svelte-h="svelte-1n05fgy">Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).</p> <pre>${escape(dom)}</pre> <p data-svelte-h="svelte-16bl1cl"><a href="./cube7#cow8" class="svelte-1j1mmf">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary; only their class assignments change.</p> <p data-svelte-h="svelte-dqomyr">When you press &quot;R&quot;, click the &quot;R&quot; button, or click the upper right or lower right
        corner of the right side of the cube representation, m = m(R) executes. This runs R on x and by the definition of M, x mutates to R(x) = temp as defined in the function R.</p> <pre>${escape(Rcode)}</pre> <p data-svelte-h="svelte-1ormilq">The current configuration of x in the closure is of no concern to R. R rearranges the strings based solely on their locations in whatever the configuration of x happens to be.</p> <p data-svelte-h="svelte-1rappih">For example, the third line down in temp[3] in the function &quot;R&quot; specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white, as shown below.</p> <img${add_attribute("src", CubeshotR, 0)} alt="Image of the Rubik's cube " style="width:200px;height:210px;" class="svelte-1j1mmf"> <h2 class="svelte-1j1mmf" data-svelte-h="svelte-1q8yqdi">Handling Intermittant Promises</h2> <p data-svelte-h="svelte-m68vo6">This slightly modified version of M can handle both ordinary functions and promises:</p> <pre>${escape(Masync)}</pre> <p data-svelte-h="svelte-1cqm6bl">Here&#39;s a demonstration: <a href="./async5" class="svelte-1j1mmf">Async</a></p>  </div></div> <a href="#top" class="svelte-1j1mmf" data-svelte-h="svelte-1887boa">Back to the top</a> ${slots.default ? slots.default({}) : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cULxkmk8.js.map
