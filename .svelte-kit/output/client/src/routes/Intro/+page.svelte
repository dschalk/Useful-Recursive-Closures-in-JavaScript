<script>
  import Cubeshot from "$lib/Cubeshot.png"
  import CubeshotR from "$lib/CubeshotR.png"

  var Mdisplay = `function M (x) {
    return function</span> go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
    }
  }
  dF3x = () => {}; `;

  var Mdis = `    function M (x) {
      return function go (func)`;

  var Mplay = `      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`;
  var Mend = `    }`
    
    

  var MMdisplay =
    "    function M (x) { \
      return function go (func) { \
        if (func === dF3x) return x; \
        else x = func(x); \
        return go; \
      } \
    } \
    Where dF3x = () => {}; ";

  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

  
  var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);

  var log = console.log;

  var test_0 = `var m = M('peaches');
log('m(ret) is', m(ret)); // m(ret) is peaches

m(x => x + ' and pears')
log('m(ret) is', m(ret)); // m(ret) is peaches and pears

m(()=>3);  // Equivalent to m = M(3) whenever m is mutable.
log('m(ret) is', m(ret)); // m(ret) is 3

log(m(v=>v**3)(v=>v+v)(v=>v-12)(ret)) // m(ret) is 42

var Pyth = a => b => Math.sqrt(a*a + b*b); 
log(M(Pyth(3)(4))(ret)); // This anonymous computation returns 5`;

  var test_1 = `var arr = m = M([1,2,3]);

var add = x => a => a.concat(x + a.slice(-1)[0]);
var mult = x => a => a.concat(x * a[a.length-1]);
m(add(4)); // 4 + 3 is concatenated to a.
log("1. m(ret)", m(ret)); // [ 1, 2, 3, 7 ]
m(mult(6));  // 6 * 7 is concatenated to a.
log("2. m(ret)", m(ret)); // [ 1, 2, 3, 7, 42 ]

// Next, we append the three stages of Math.sqrt(7 + 42) * 6  // 49, 7, 42 
log(m(x => x.concat(x[3] + x[4]))(x=>x.concat(Math.sqrt(x[x.length - 1])))(mult(6))(ret))
// [ 1, 2, 3, 7, 42, 49, 7, 42 ]`;

  var table = `function R (ar) {
  let temp = []
  temp[0] = [ar[0][6], ar[0][3], ar[0][0],
            ar[0][7], ar[0][4], ar[0][1],
            ar[0][8], ar[0][5], ar[0][2]];

  temp[1] = ar[1];

  temp[2] = [ar[4][8], ar[2][1], ar[2][2],
            ar[4][5], ar[2][4], ar[2][5],
            ar[4][2], ar[2][7], ar[2][8]];

  temp[3] = [ar[3][0], ar[3][1], ar[5][2],
            ar[3][3], ar[3][4], ar[5][5],
            ar[3][6], ar[3][7], ar[5][8]];

  temp[4] = [ar[4][0], ar[4][1], ar[3][2],
            ar[4][3], ar[4][4], ar[3][5],
            ar[4][6], ar[4][7], ar[3][8]];

            temp[5] = [ar[5][0], ar[5][1], ar[2][6],
            ar[5][3], ar[5][4], ar[2][3],
            ar[5][6], ar[5][7], ar[2][0]];
return temp;
}`;

  var score = `m2 = M(
    [ 
      [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
      [], ['+'], [], [0], [], [0], [] 
    ]);`;

  var fuDem = `function fu (a) {                                    // fu
  a[5].push(clone(a));
  a[7].push(clone(a)); // All game states for use in "Back" and "Forward."
  a[6][0] += 1;
    // a[1].push(a[0].pop());
  var result;
  SCORE = a[4];
  var a1;
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);
    a[1] = [];
    m2 = M(a);
  }
   
  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }

  if (result == 20 && intersection(a1, a[3]).length > 0) {
      if (SCORE === 4) {
          ZWIN = "You win! "
          a[4][0] = 0;
          runRoll(0);
      }
      else {
          var aint = parseInt(a[4][0], 10);
          aint += 1;
          Z = "           Your score increased to " + aint;
          runRoll(aint);
      }
      setTimeout(() => Z = ZWIN = "", 3000);
  }
  update();
  sfunc();
  return m2(s);
};

var update = () => { // The button displays will correspond to the values in m2.
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
}`;

  var Rf = `var Rfunc = () => {
  cube = m(R)();
};`;

  var Zdemo = `function Zrotate (ar) {
      cube = m(Zro)();
  }
  
  function Zro (ar) {
    m(() => [ [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][6],
    ar[5][3], ar[5][0], ar[5][7], ar[5][4], ar[5][1],ar[5][8], ar[5][5], ar[5][2] ], [ar[2][2], ar[2][5], ar[2][8], 
    ar[2][1], ar[2][4], ar[2][7],ar[2][0], ar[2][3], ar[2][6] ], [ ar[3][6], ar[3][3], ar[3][0], ar[3][7], ar[3][4], 
    ar[3][1],ar[3][8], ar[3][5], ar[3][2] ], [ ar[1][6], ar[1][3], ar[1][0], ar[1][7], ar[1][4], ar[1][1],ar[1][8], 
    ar[1][5], ar[1][2] ], [ ar[0][6], ar[0][3], ar[0][0], ar[0][7], ar[0][4], ar[0][1],ar[0][8], ar[0][5], ar[0][2] ] ] ); 
    // cube = m(); 
    return m();
  };`;

  var ZbackDemo = `function Zback (ar) {
      cube = m(Zro)(Zro)(Zro)();
  };`;

  var mona = `function M (x) {
  return function go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
  }
}
Where dF3x = () => {}; // This flag is a function in order to
                              accommodate future type checking.`;
  var orthoganal = `var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3x)); // 27
console.log(demo2(dF3x)); // 2`;

  var compose1 = `var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9`;

  var compose2 = `m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3x))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3x))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3x))`;
  var mean = `function meaning (ar) {return ar.reduce((a, 
  currentValue) => a**3 + currentValue, 0) - 2*13};

var m = M([1,3,4]);
m(meaning);
m(dF3x);     // 42`;

  var M4 = `function M(x) {
    let ar = [];
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };`;

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
  } `



  var reverseShow = `function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it, returning the cube to where it was.
}; `;

  var reduceCode = `const m = M([3,4,5,6,7,8,9]);
const rd = x => x.reduce((a, b) => a + b);
m(rd)(dF3x);   // 42 `;

  const Mcode = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
    Where const dF3x = () => {}
          const dF3ar = () => {};`;

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

  const DOMright = `<div class="face right">
        <div class="grid">
          <div class={m(dF3x)[0][0]} />
          <div class={m(dF3x)[0][1]} />
          <div class={m(dF3x)[0][2]} />
          <div class={m(dF3x)[0][3]} />
          <div class={m(dF3x)[0][4]} />
          <div class={m(dF3x)[0][5]} />
          <div class={m(dF3x)[0][6]} />
          <div class={m(dF3x)[0][7]} />
          <div class={m(dF3x)[0][8]} />
        </div>
      </div>`;

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

  var classCode2 = 
  `x =[ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);

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
  var v1 = ` var  m = M(3)`;

  var v2 = `M()(()=>3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`;

  var v3 = `x = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) 
console.log('x is', x);`
/*
var v3b = `m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)
console.log('m(dF3x) is', m(dF3x));`

var v3c = `m(v=>v+4)(v=>v*3)
console.log('m(dF3x) is', m(dF3x));`
  */
  var v4 = `m = M(3)`;
  var v5 = "m(dF3x)  // 3";
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

  var m = M(3);

  var Rz = "clowns";

  var example3 = `<button on:click={() => m = m(R)}>R</button>
<div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> `;

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
var dF3xCode = "dF3x = () => {}"

// *********************************************************
// *********************************************************
// *********************************************************
</script>





<div style="margin-left: 8%; margin-right: 8%" id = "top">
  <h1 style="text-align: center; color: #f5ee9f">Recursive Closures</h1>
  
  <h3>The inner function "m" ( defined below as "go" in the outer function M ) is recursive</h3>
  <p> m = M(x),</p>
  <p> Where x can be any value and M is</p>

  <pre class="dis">{Mdis}</pre>
  <pre class="play">{Mplay}</pre>
  <pre class="dis">{Mend}</pre>
  <p> The flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, "func" is defined here as a function; namely: <span style = "margin: 0px; color: #f5ee9f">{dF3xCode}</span>. </p>

<span> When the closure isn't named, there's no danger of a memory leak:</span>
<br>
<span style = "color: #f5ee9f"> x = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x)</span><br> 
<span style = "color: #f5ee9f"> console.log(x) &nbsp;&nbsp;  // 10 </span>
<br><br>
<span> When the closure is named, it remains at least as long as the browser tab remains open, longer with persistent storage.</span>
<br>

<span style = "color: #f5ee9f"> m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)</span><br> 
<span style = "color: #f5ee9f"> console.log(x) &nbsp;&nbsp;  // 10 </span> <br>
<span style = "color: #f5ee9f">m(v=>v+4)(v=>v*3)</span> <br>
<span style = "color: #f5ee9f"> console.log(x) &nbsp;&nbsp;  // 42 </span>

<p> For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5">Async</a>.</p>

<h1 style = "text-align: center; color: #f5ee9f"> A Fast and Efficient Virtual Rubik's Cube </h1>
<h2> Callbacks Rearrange the m-M(x) Closure</h2>
<p> Key press and mouse click events trigger m(func) where m is the inner function in the m-M(x) closure holding the state of the virtual Rubiks cube and func is a callback operating on x. Just as a Rubik's cube always has six sides, each of which always contains nine squares, so too the array in the closure always holds six nine-member arrays of strings. There is always a one-to-one correspondence between the positions of the nine strings named "blue", the nine strings named "green", and so forth, and the nine blue squares, nine green squares, etc. of the simulated Rubik's cube in the browser.</p>
<h2> The Browser Image of the Virtural Rubik's Cube Automatically Reflects the State of x in the Closure.  </h2>
<p>  </p> 



<p> Keystrokes and mouse clicks call </p>



<p> The six colors of the Rubik's cube are primitive values (strings) in the m-M(x) closure, but also variable names of six CSS classes. For example, m(dF3x)[3][0]  </p>
<p> Whenever any of the six nine-element arrays in x get reconstituted with with new or differently-ordered strings, the background colors of the 54 divs that constitute the virtual Rubik's automatically change accordingly. That's because the divs have CSS classes named "blue, green, red, orange, yellow, and white" with corresponding background colors. What are just strings in the m-M(x) closure are class names in the DOM. Here's the solved-cube definitions of x in the m-M(x) closure, the definitions of the six CSS classes, and the permanent structure of the 54 div representation of the Rubik's cube: </p>  

<pre>{classCode2}</pre>
    <p> Here are the div class names that get automatically rearranged whenever the strings in the m-M(x) closure are rearranged. Functions that rearrange the locations of strings in the m-M(x) closure make it seem that the divs constituting the faces of the virtual Rubik's cube have rearranged.          , its sides, or its middle sections have rotated 90 degrees:  </p>
  <pre>{css}</pre>

  <p>
    The 54 divs that combine to represent the cube in the DOM are shown below. Strings rearrange in the m-M(x) closure causing div class assignments to rearrange thereby creating the illusion that the whole cube, its faces, or its middle sections have rotated.

    The visual representation that appears in the browser is on the next page, <a
      href="./cube7">Rubik's cube</a
    >
  </p>
    <pre>{dom}</pre>
  <p>
  

  <h2> The Three Visible Sides of the Simulated Rubik's Cube</h2>
  <p> You can rotate the entire cube by clicking on the middle square of any side, pressing the 'X', 'Y', and 'Z' keys, or clicking on the "X rotate", "Y rotate", or "Z rotate" buttons. Such rotations change which sides are displayed, but they are always designated 'top', 'front', and 'right-side' for purposes of rotating sides and middle sections. For example, pres'e front divs, and nine right-side divs contain buttons with classes named "blue, green, red, orange, yellow, and white." Each of these classes has a "background-color" attribute identical to its name. </p>
  <p> The statement, "class = m(dF3x)[j][k], where j is 0, 1, 2, 3, 4, or 5 specifies 'blue', 'green', 'red', 'orange', 'yellow', or 'white' respectively, and k is the location   an integer und-color of one of the squares on one of the faces of the Rubik's cube representation in the DOM."</p>

  <p> Likewise, the statement "style = 'background-color: m(dF3x)[j][k]'" can specify the color of one of the 54 squares that constitute the simulated Rubik's cube in the DOM. Here's a demonstration on the Rubik's cube page: <a href="./cube7#coolcow"><span style="font-weight:bold; color:#ff99dd;"> Demonstration</span></a>. After you click "Scramble" multiple times, I recommend that you read the definitions that precede it. Counterintuitive things are happening, some of which will be explained in the next section. </p>
  <p> Composing function this way is elegant, transparent, and efficient. Scrambling the Rubik's cube involves calling a random sequence of 40 functions that rotate faces and middle sections of the Simulated Rubik's cube. Running this application on localhost:5173, my desktop computer can scramble the cube 1,000 times in less than 300 milliseconds. <a href = "./cube7#test">Try it here</a>   </p>
  <p> The statement resolves to 10. No variable points to the transient closure, which is transient because it is not assigned to a variable and is, therefore, ripe for removal by the garbage collector immediately upon resolution to 10. </p>
  <p> M(3) at the beginning of the above computation returns go. The function go operates on v=>v**3, v=>v*4, v=>v-8, Math.sqrt, and dF3x. Then, being unreachable by any variable assignment, disappears from memory whenever the garbage collector gets around to removing it. </p>
  <br />
  <p>  </p>
  <div class="light">
    <span>Encapsulated State:</span>
    <pre>{v4}</pre>
    <pre>{v5}</pre>
    <span>Sometime later:</span>
    <pre>{v6}</pre>
    <pre>{v7}</pre>
    <pre>{v8}</pre>
    <pre>{v9} // The JavaScript garbage collector ignores closures </pre>
  </div>
  <span id = "sim" class="teaser">Back to the Rubik's Cube Simulation</span>
  <span class="teaser">***********************************************************************
    <br />
    <p> In the <a style = "color: #FCAACC" href = ./cube7>Rubik's cube application</a>, x in the m-M(x) closure is defined as:  </p>
    <pre>{classCode2}</pre>
    <p> In the solved cube, bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. Notice that in the DOM representation of the Rubik's cube (below), only the top, front, and right side of the cube contain buttons. Click the center of the right side of the cube or press 'X' on the keyboard. Now the front is white, but it has an embedded button  </p>

    Case 1 -- Clicking on the three visible sides of the cube.</span>
  <p> Although some or all of the 54 divs that constitute the representation a Rubik's cube seem to move in response to certain mouse clicks and key presses, they never do. If func is the function dF3x, m(func) is a reference to the to the array of six nine-member arrays of strings named "x" in the m-M(x) closure. m(dF3x) === x. Mutating one mutates the other. Otherwise, calling m(func) results in x => func(x) in the m-M(x) closure where x has become func(x). </p> 
  <p>
    The value held in the m-M(x) closure in the Rubik's cube application, "x", is always an array of six nine-member
    references to the strings "blue, green, red, orange, yellow, and white." The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in x[j][k]. In the starting cube, also known as the "solved cube," x[3] is the array "oo", the array of all nine references to "orange." Here's the first of the six parts of the 54 div representation of the Rubik's cube in the DOM: </p>
    <pre>{DOMfront}</pre>
    <p> The third button down from the top and the final button of the front face (see above) contain the statement "m = m(F)". These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named "temp". </p>
    <pre>{Fcode}</pre>
    <p> Pressing the "F" key and clicking on the "F" button are other ways of rotating the front face clockwise 90 degrees. All three methods rely on the statement, "m = m(F)". The "m =" part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks. </p>
    <p> Examining the function "F", we see that the front face of the cube, temp[3], remains solid orange after class reassignments create the illusion that the front face rotated. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here's what the cube looks like in the browser after running "m = m(F)" on the solved cube: </p>

      <img src={Cubeshot} alt="Image of the Rubik's cube " style="width:200px;height:210px;">
    
    <p> The changes to the top face, with three classes reassigned from x[1] (previously all green), and the changes to the right face, three classes reassigned from x[4] (previously all yellow), demonstrate the correspondence between the function "F" and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of your own solved cube, assuming you have one.   </p>

  <p> Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, and z Keys has the same effects. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons for clockwise rotations, and "back" buttons for counterclockwise rotation.</p>

  <p>
    The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a
      href="./cube7">Rubik's cube</a
    >
  </p>
    <pre>{dom}</pre>
  <p>
    If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.
    
  </p>

    <span class="teaser"
      >***********************************************************************
      <br />
      Case 2 -- Clicking on the buttons.</span>
    <p>
      Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for for the same functions "func" involved in clicking on parts of the simulated Rubik's cube.  Each function "func" rearranges some of the six nine-element arrays constituting the array "x" in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the illusion in the browser that the cube or some part of it has rotated. You can try out the buttons in the <a href="./cube7#yes">button section</a> of the Rubik's cube page.
    </p>
    <p> Pressing the "F" key, clicking the "F" button, or clicking the right upper or lower corners of the forward-facing side all cause the function "m(F)" to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top and the lowest row of the yellow top to move into the left column of the right side of the cube. </p>
    <span class="teaser"
      >***********************************************************************
      <br />
      Case 3 -- Key presses.
    </span>
    <p>
      Pressing keys invokes eventHandler(e) where "e" is the key-press event object and
      eventHandler is defined as follows:
    </p>
    <pre>{handleEventCode}</pre>
    <p>
      "svelte:window on:keypress = &#123; handleEvent &#125; " routes keyPress
      event objects to handleEvent.
    </p>
    <p>
      The <a href="./cube7">Rubik's Cube simulation</a> features an m-M(x)
      closure whose x values are always arrays of six nine-member arrays of the
      strings "blue, green, red, orange, yellow, and white". Callbacks stemming
      from mouse clicks have the form "m = m(Foo), where Foo is one of several
      functions that use the elements of x to construct and return new arrays of
      six nine-member arrays. The resulting transformation of x in the m-M(x)
      closure automatically transforms the cube displayed in the browser because
      x's elements (references to strings) are references to classes in the DOM.
      m(dF3x)[0] is always the first element of m(dF3x). In the solved cube,
      it's a nine-member array, each element of which is corresponds to a CSS
      class with the element "background-color: blue". m(dF3x)[0][0] === "blue"
      returns "true", as do m(dF3x)[0][v] for the other eight elements of
      m(dF3x)[0]. automatically responds because to arrays to and return create
      arrays of six nine-member arrays that " are operated upon by m that
      respond only to DOM events, and whose side effects are felt only in the
      DOM rearrangements of six CSS classes on the 54 divs of the cube. Other
      than background colors, those classes are all identical. modifications of
      the DOM, encapsulate transformations of x in a manner reminiscent of
      Haskel monads. <a href="./cube7">Here</a>, you can click on an edge or
      corner of the upper cube and see it rotate. The JavaScript in the script
      section provides function definitions, and nothing more.
    </p>
    <span class="teaser"

      >***********************************************************************</span
    >
    <div class="background">
      <p>
        The code samples at the top of this page show that function composition
        using M is as transparent and concise as it can possibly be. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik's cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves. 
      </p>

      <p>
        A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let's call it "ar", into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it's time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a
          href="./cube7">Simulated Rubik's cube</a
        > is a case in point.
      </p>

      <p>
        The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".
      </p>

      <p id="cow7">
        To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:
      </p>

      <pre>{classCode2}</pre>

      <p>
        m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:
      </p>
      <pre>{showBlue}</pre>

      <p>
        Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).
      </p>

      <pre>{dom}</pre>
      <p>
        <a href="./cube7#cow8">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary; only their class assignments change.
      </p>
      <p>
        When you press "R", click the "R" button, or click the upper right or lower right
        corner of the right side of the cube representation, m = m(R) executes. This runs R on x and by the definition of M, x mutates to R(x) = temp as defined in the function R. </p>
        <pre>{Rcode}</pre>

        <p>
        The current configuration of x in the closure is of no concern to R. R rearranges the strings based solely on their locations in whatever the configuration of x happens to be. 
      </p>

      <p>
        For example, the third line down in temp[3] in the function "R" specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white, as shown below. </p>

      <img src={CubeshotR} alt="Image of the Rubik's cube " style="width:200px;height:210px;">


      <h2>Handling Intermittant Promises</h2>

      <p>This slightly modified version of M can handle both ordinary functions and promises:</p>
      
        <pre>{Masync}</pre>

      <p>Here's a demonstration: <a href = "./async5">Async</a></p> 
  
<!-- <p> Solving a virtual Rubik's cube in a browser is most efficiently accomplished with keystrokes, rather than mouse clicks and drags. I know of only two online Rubik's cube that respond properly to instructions from the keyboard: <a href="cstimer.net">csTimer</a> and <a href="./cube7">This Site</a>. For example, "F" might turn the front face 90 degrees, as expected; but after turning the whole cube 90 degrees clockwise, "F" turns the left face of the cube. "F" should always turn the front face, no matter how many times the whole cube has been turned.  </p> -->

<!--

      <p>
        The <a href="./cube7">Simulated Rubik's cube</a> page has gone through improvements,
        including code refactoring, that render much of its text incorrect -- but
        the cube itself works like a charm. Here's an explanation of the code, beginning
        with the interface between the closure holding the array of six nine-member
        arrays of references to the strings "blue, green, red, orange, yellow, and
        white" and the div containing six nine-member arrays of divs. The strings
        in the representation are the names of CSS classes with background-color
        entries corresponding to their names.
      </p>

      <p>
        The code samples at the top of this page show that function composition
        using M can't be more transparent, concise, and maintainable. When I get
        around to it, I'll show how slight modification of M facilitate nesting
        of mixed synchronous and asynchronous handled by m, and how, when x is
        an array, pushing modifications onto it can avoid mutations. The code is
        tested and good to to, but it's time now to show m-M(x) closures
        handling larger applications. There's the <a href="./score"
          >Game of Score</a
        >
        and my current project, <a href="./cube7">Simulated Rubik's cube</a>.
      </p>

      <p>
        Key press and mouse click events call eventHandler(e) where e is an
        object containing an integer named keyCode. If eventHandler contains an
        object with a keyCode number matching keyCode in e, m(f) is called where
        f is a function that rearranges resides response to events initiated in
        the DOM.
      </p>
      <p>
        Events initiated by user key presses and clicks cause eventHandler() to
        call m on functions that operate on arrays of six nine-member arrays.
      </p>
    </div>

    <p>
      The following discussion centers around the function M (defined below),
      along with closures of the form m-M(x), where m = M(x) and x can be any
      JavaScript value.
    </p>

    <p>
      M can, of course, be modified to include try-catch blocks, objects, or
      anything else. Modification of M in this presentation are small. The
      functions provided to m are responsible for turning the six sides and
      three middle sections of the cube.
    </p>

    <p>
      The simulated Rubik's cube example follows the convention of creating an
      application's main closure by calling "m = M(x)", where x can be any
      value, and r-erring to the result as "the m-M(x) closure." "x" is
      encapsulated, sequestered from everything outside the closure's scope. As
      is apparent from the definition of M (below_), 'x' can be modified by
      calling m(func) for some function "func". In the simplest version of "M",
      calling m(func) mutates "x," changing it from x to func(x).
    </p>

    <p>
      <span style="color:yellow; font-weight:bold">CAUTION</span> as will be
      extensively discussed on this page, m(dF3x) is a reference to 'x' in the
      closure unless the line in M,
      <span class="O"> if (func === dF3x) return x;</span>
      is changed to <span class="O">if (func === dF3x) return clone(x)</span> for
      some function "clone" that returns a perfect duplicate of 'x' with an address
      in memory different from that of 'x'. More about that later. First, here's
      the definition M and some examples of m-M(x) closures:
    </p>

    <p>
      The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of "x" in
      the m-M(x) closure is shown in the definition of m2:
    </p>
    <pre>m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);</pre>
    <h2>The Simulated Rubik's Cube</h2>
    <p>
      The <a href="./cube7">simulated Rubik's cube</a> is another example of a fairly
      complex application whose state is maintained in a tiny closure. The bare bones
      M shown above can handle the transformations of the cube, from keystroke or
      button click to the result seen in the browser. But, in order to facilitate
      taking back a series of moves, an array of references to every argument provided
      to m was added.
    </p>
    <h3>The Code Directly Responsible for the Browser Display</h3>

    <p>
      In the DOM, the simulated Rubik's cube consists of 6 groups of 9 Div
      elements. User moves rearrange classes. Cubies change color when they are
      assigned a class with a different background
    </p>

    <p>
      Those arguments are functions that operate on x in the m-M(x) closure;
      i.e., that operate on <span style="color: orange"
        >[ bb, gg, rr, oo, yy, ww ]</span
      >, the array that determines the background colors of the 54 divs in the
      DOM, thereby controling the configuration of the cube displayed in the
      browser. When an array was added to the definition of M, the original M
      was renamed M2. Here's the complete definition of m in the m-M(x) closure,
      beginning with the revised definition of M:
    </p>
    <pre>{Mcode}</pre>
    <pre>{classCode2}</pre>

    <p>
      As the line "else x = func(x);" in the definition of M indicates, m(func)
      causes func(x) to replace x in the m-M(x) closure unless func is dF3x or
      dF3ar. Pressing the "r" key or clicking on the "R" rotates the right side
      of the cube clockwise a quarter turn. See how it uses the elements of the
      current configuration (named "ar") of <span style="color: orange"
        >[ bb, gg, rr, oo, yy, ww ]</span
      > as a source of building blocks to assemble the updated configuration, named
      "temp."
    </p>

    <pre>{Rcode}</pre>
    <p>
      The functions that manipulate the cube have numerous lines of code, but
      they are as simple as they could possibly be. They don't rely on
      procedures to determine what goes where during the construction of "temp",
      they are just instructions specifying the new locations of the elements of
      the array held in the m-M(x) closure. While not organized in tabular form,
      they are essentially items in a lookup table.
    </p>
    <p>
      If the meanings of passing by value and passing by reference is clear, as
      I'm sure it is for many of you, reading the rest of this section on the
      Rubik's cube simulator might be tedious. For those who are still a little
      unsure, I hope reading this will be the breakthrough that clarifies it
      once and for all.
    </p>
    <p>
      With moves stored in ar, setting the cube configuration back to where it
      was prior to the most recent move requires nothing more than the three
      short lines of code in the function "reverse". When m(dF3ar) is modified
      in reverse, 'x' is simultaneously modified in the m-M(x) closure. This is
      because both 'x' and m(dF3ar) are references to the same address in
      memory. Change what is stored at that address with either one, and that
      will be the value of both 'x' and 'm(dF3ar) and any other variable that
      happens to point to that location.
    </p>
    <pre>{reverseShow}</pre>
    <p>
      m(dF3ar) is a reference to ar in the m-M(x) closure, so reverse() shortens
      the length of ar inside the closure. Very little browser memory is needed
      to store the information necessary to reverse hundreds of moves. Making
      moves is not resource intensive either. A move doesn't rearrange the div
      elements of the cube or rotate numerous little cubits, as is the case with
      many Rubik's cube simulators. All it does is rearrange the placement of
      the strings (names of colors) referring to some CSS classes.
    </p>
    <p>
      The reverse function is oblivious to precisely which functions were
      responsible for the transformations being reversed. Whatever the function
      at the top of the list happens to be, it runs three more times. After foo
      executes, it and the function that was reversed are discarded, making the
      list one item shorter than it was.
    </p>
    <div style="margin-left:2%; margin-right: 2%;">
      <img class="display_image" src={passBy} />
    </div>
    <div style="margin-left:12%; margin-right: 12%;">
      <p>
        Distinguishing between passing by value (primitives) and passing by
        reference (objects) is a stumbling block for people new to JavaScript.
        It's important to know that string, number, bigint, boolean, undefined,
        symbol, and null are the primitive values. All other values are down the
        prototype chain from Object and are, therefore, objects. Here's
        verification that a simple function is an object:
      </p>
    </div>
    <div style="margin-left:2%; margin-right: 2%;">
      <img class="display_image" src={object} />
    </div>
    <div style="margin-left:12%; margin-right: 12%;">
      <p>See "prototype: Object" at the bottom of the right side.</p>

      <a id="examples" />
      <h1>Elementary Facts and Examples</h1>

      <p>
        M can serve as the outer scope for multiple orthogonal (non-interacting)
        functions, with structures identical to M's "go()". For example:
      </p>
      <pre>{orthoganal}</pre>

      <h3>"M" facilitates function composition.</h3>
      <p>Garbage collectors should delete this.</p>
      <pre>{compose1}</pre>
      <p>
        The value "x" in the m-M(x) closure persists until m is redefined or
        deleted.
      </p>
      <pre>{compose2}</pre>
      <p>
        Recommended Reading: <a
          href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB"
          >Javascript Under the Hood</a
        >
      </p>
    </div> -->
</div>
</div>

<a href="#top">Back to the top</a>
<slot />

<style>
h2 {
  color: #f5ee9f;
}

span {
    color: rgb(219, 253, 244);
    font-size: 24px;
    margin: 3%;

}


  a {
    color: magenta;
  } 

  a:hover {
    color: white;
    background-color: #000;
  }

  img {
    width: 25%;
    height: auto;
  }

  .blue {
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
  }

  .teaser {
    font-size: 32px;
    color: #ffccaa;
  }

  h3 {
    color: turquoise;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .O {
    color: orange;
  }

  .dis {
    color: #fe0374;
    font-weight: bold;
    font-size: 28px;
  }

  .play {
    color: yellow;
    font-weight: bold;
    font-size: 28px;
  }

  .light {
    color: #ffeeaa;
    font-size: 28px;
  }
</style>
