import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-0d8NzNEj.js';

const F = "/_app/immutable/assets/F.ewlc2ijQ.png";
const css$1 = {
  code: "span.svelte-rqsz06{color:rgb(219, 253, 244);font-size:24px;margin:0%}a.svelte-rqsz06{color:magenta}a.svelte-rqsz06:hover{color:white;background-color:#000}img.svelte-rqsz06{width:25%;height:auto}img.svelte-rqsz06{display:block;margin:0 auto;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Mdis = `    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`;
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
  var Fbeginning = `let temp = [];
temp[0] = [
ar[4][6]`;
  var Fend = `temp[5] = [
    ar[0][6],
    ar[0][3],
    ar[0][0],
    ar[5][3],
    ar[5][4],
    ar[5][5],
    ar[5][6],
    ar[5][7],
    ar[5][8], ];
return temp;
`;
  var H = "";
  var I = "";
  var G = "";
  function* generatorFunction() {
    yield `m(dF3x) // 3 (as expected from the definition of M)`;
    yield "m(v=>v**3) . . . causing 3 => 3**3 = 27";
    yield "m(dF3x) // 27 (as expected)";
    yield "m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12.";
    yield `m(dF3x)  // 42`;
    yield `m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7`;
    yield `m(v = v * 6) // Back to 42`;
    yield `m(dF3x)  // 42, as expected`;
    yield H = "";
    yield I = "";
    yield ``;
    generatorFunction();
  }
  generatorFunction();
  var x3 = `    const dF3x = () => {}`;
  $$result.css.add(css$1);
  return ` <div style="margin-left: 8%; margin-right: 8%" id="top"><h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-17i9lsv">Recursive Closures</h1> <p style="text-indent:3% " data-svelte-h="svelte-ocoy07">&quot;M&quot; returns the recursive function &quot;go&quot;. &quot;m-M(x) closures&quot; refers to closure created by defining &quot;m&quot; as the recursive function return by &quot;M&quot; when &quot;m = M(x)&quot; runs. &quot;M&quot; is defined below, &quot;x&quot; can be any JavaScript value, and &quot;func&quot; is either dF3x or a function that operates on x.</p> <div style="<color:#880000; font-size:32"><pre>${escape(x3)}</pre> <pre>${escape(Mdis)}</pre> <pre>${escape(I)}</pre> <pre>${escape(H)}</pre> <pre>${escape(G)}</pre></div> <span class="svelte-rqsz06" data-svelte-h="svelte-xx3h5c">    Anonymous closures can perform computations without leaving persistent closures in memory. The results might be assigned to variables, placed in persistent objects, memorialized in log files, and so forth; but the closures that produced those results are subject to immediate garbage collection. Here an example: </span><span style="color: #f5ee9f; font-size:28px" class="svelte-rqsz06" data-svelte-h="svelte-xb783u">console.log( M( 3 )( v=&gt;v**3 )( v=&gt;v*4 )( v=&gt;v-8 )( Math.sqrt )( dF3x ) ) // 42 </span><br> <br> <span class="svelte-rqsz06" data-svelte-h="svelte-h11p7k">    The variable &quot;m&quot; (above) is a number. The closure that performed the computation is gone, out of reach and subject to garbage collection. But, when the closure is named, it remains at least as long as a browser tab remains open; longer with persistent storage.</span> <br> <span style="color: #f5ee9f" class="svelte-rqsz06" data-svelte-h="svelte-18ergd2">         m = M(3)(v=&gt;v**3)(v=&gt;v*4)(v=&gt;v-8)(Math.sqrt)</span><br> <span style="color: #f5ee9f; font-size:28px" class="svelte-rqsz06" data-svelte-h="svelte-1oth1pw">        console.log ( &quot;m is&quot;, m )      // m is function go(func)
</span><br> <span style="color: #f5ee9f; font-size:28px" class="svelte-rqsz06" data-svelte-h="svelte-4w7o34">          console.log(m(dF3x))     // 10</span> <br> <span style="color: #f5ee9f; font-size:28px" class="svelte-rqsz06" data-svelte-h="svelte-jbbdnd">         m(v=&gt;v+4)(v=&gt;v*3)      //  </span> <br> <span style="color: #f5ee9f; font-size:28px" class="svelte-rqsz06" data-svelte-h="svelte-19p6vhb">          console.log(m(dF3x))     // 42</span> <p data-svelte-h="svelte-alhn9v">    For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5#yes" class="svelte-rqsz06">Async</a>.</p> <h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-3x2697">A Fast and Efficient Virtual Rubik&#39;s Cube</h1> <p data-svelte-h="svelte-1gf9qms">The JavaScript representation of the virtual Rubik&#39;s cube visible in the browser is contained in an m-M(x) closure where x starts out as an array of 6 nine-member arrays of strings. All 9 members of x[0] are the string &quot;blue&quot;. x[1] is all &quot;green&quot;, x[2] all &quot;red&quot;, x[3] all &quot;orange&quot;, x[4] all &quot;yellow&quot;, and the 9 members of x[5] are the string &quot;white&quot;.</p> <p data-svelte-h="svelte-1oqwx6j">The virtual Rubik&#39;s cube in the DOM and displayed in the browser consists of 9 front-facing buttons, 9 top buttons, and 9 side buttons. Each of the 27 buttons containin a &quot;style = &#39; background-color: m(dF3x)[ j ][ k ] &#39; &quot; statements. Since user invoked functions are reactive, and m(dF3x) returns the current value of x in the m-M(x) closure, user key presses and button clicks that rearrange the strings in x immediately rearrange the colors of the 9 squares of each of the three visible sides of the virtual Rubik&#39;s cube.</p> <p data-svelte-h="svelte-1oicyzr">Here&#39;s the HTML code:</p> <pre>${escape(domCube)}</pre> <p data-svelte-h="svelte-1v1b7sp">And here&#39;s the JavaScript representation of the virtual Rubik&#39;s cube:</p> <pre>${escape(mCode)}</pre> <p data-svelte-h="svelte-16yt25q">After pressing &quot;F&quot;, clicking the &quot;F&quot; button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) rearranges to this configuration:
</p><pre>${escape(Fcode2)}</pre> <p data-svelte-h="svelte-145bh0k">And the cube looks like this:</p> <img${add_attribute("src", F, 0)} alt="Cube after F" style="width:150px;height:155px;" class="svelte-rqsz06"> <p data-svelte-h="svelte-rest4g">When a user presses the &quot;F&quot; key, m(F) runs, causing x =&gt; F(x). The return value of F(x) when x is in its starting configuration is shown above. Here&#39;s the definition of F:

</p><pre>${escape(functionF)}</pre> <p data-svelte-h="svelte-1go0zhe">F populates a temporary array &quot;temp&quot; with values taken from locations on x specified by the definition of F. It begins with 
  </p><pre>${escape(Fbeginning)}</pre> <p data-svelte-h="svelte-le3lti">F ends with:</p> <pre>${escape(Fend)}</pre> <p data-svelte-h="svelte-s1x5ja">R replaces the first three elements of temp[5] with whatever strings happen to be at x[0][6], x[0][3]Then F returns temp, causing it to replace the current value of x. The values of the strings F places in temp are not relevant.   locations without regard to whether the strings happen to be &quot;blue&quot;, &quot;green&quot;, &quot;red&quot;, &quot;orange&quot;, &quot;yellow&quot;, or &quot;white&quot;.
</p><p data-svelte-h="svelte-ei6jrz">Looking at x after the transformation (above), we see that the first thing F(x) does is move the string that happens to be at x[4][6] to x[0][0], Near the bottom of F, we see that x[0][0] goes to x[5][2]. Whatever happened to be at x[5][2] ends up at x[1][8].</p> <p data-svelte-h="svelte-11ayztk">x remains an array of six nine-member arrays of strings, maintaining its one-to-one correspondence with the six, nine-cubit sides of the virtual Rubik&#39;s cube. None of the functions available to users change the structure of x, just as solving a real Rubik&#39;s does not change the number of cubits on each side of the cube.
  




</p><h1 style="text-align: center; color: #f5ee9f" data-svelte-h="svelte-13ler7r">The Game of Score</h1> <p data-svelte-h="svelte-sknn1e">The <a href="./score#mDef" class="svelte-rqsz06">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:</p> <pre data-svelte-h="svelte-1fbr1ln">m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], [&#39;+&#39;], [], [0], [], [0], [] 
]);</pre></div> <a href="#top" class="svelte-rqsz06" data-svelte-h="svelte-1887boa">Back to the top</a> ${slots.default ? slots.default({}) : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-UbbrU71v.js.map
