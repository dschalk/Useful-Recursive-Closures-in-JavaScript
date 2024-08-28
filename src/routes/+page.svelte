<script>
  import Cubeshot from "$lib/Cubeshot.png"
  import CubeshotR from "$lib/CubeshotR.png"
  import F from "$lib/F.png"
  
  var Mdisplay = `function M (x) {
    return function</span> go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
    }
  }
  dF3x = () => {}; `;

  var Mdis = `    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`

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

  
  var mCode = `m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`

  const cubeCode = `
  
  `;
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

  var classCode2 = "Cow"; 
  var v1 = ` var  m = M(3)`;

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

var mCode = `      var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`

var Fcode2 = `      var m = M([ ["yellow", "blue", "blue", "yellow", "blue", "blue", "yellow", "blue", "blue"],
      ["green", "green", "white", "green", "green", "white", "green", "green", "white"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green", "green", "green"],
      ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white"] ]);`

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
ar[4][6]`; // This will become x[0][0] when F returns temp.

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

var F5 = '';   
var F6 = '';  
function f66 (x) {F6 = x};

    async function anon () {
      f5 = "m = M(3)"; }
    async function anon2 () {
      m = m(v => v**3)
      await wait(500)
      m = m(Cx)
      await wait(500)
      m = m(Cx)
      await wait(500)
      m = m(Cx)
      
      f77("E")
      await wait(500)
      m = m(Cy)
      await wait(500)
      m = m(Cy)
      await wait(500)
      m = m(Cy)
      await wait(500)
      m = m(Cy)     
      
      f77("S")
      await wait(500)
      m = m(Cz)
      await wait(500)
      m = m(Cz)
      await wait(500)
      m = m(Cz)
      await wait(500)
      m = m(Cz)
      for (let k = 0; k < 12; k+=1){
          await wait(300)
          m = m(ob[m(dF3ar).pop()]);
          console.log(m(dF3x));
          m(dF3ar).pop();
          f77(11 - k);
      }
        await wait(500)
        f77("");
    }




var H = '';
var I = '';
var G = '';

function* generatorFunction() {
  yield `m(dF3x) // 3 (as expected from the definition of M)`
  yield "m(v=>v**3) . . . causing 3 => 3**3 = 27"
  yield "m(dF3x) // 27 (as expected)"
  yield "m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12."
  yield `m(dF3x)  // 42`
  yield `m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7`
  yield `m(v = v * 6) // Back to 42`
  yield `m(dF3x)  // 42, as expected`
  yield H = '';
  yield I = '';
  yield ``
  generator = generatorFunction();
}

var generator = generatorFunction()

function cow () {
    I = "m = M(3) defines m and an m-M(x) closure holding the number 3"
    var z = generator.next().value;
    if (z != undefined) G = z
    else {
      I = '';
      generatorFunction();
    }
    return generator;
}

  function handleEvent(e) {
    if (e.keyCode === 59) cow();
  }

  var x;
  var x3 = `    const dF3x = () => {}`

//  *********************************************************
// *********************************************************

var cloneDemo = `var m = M(3)
var m2 = m(() => m(dF3x))
var m3 = M(m(dF3x))
log(m === m2)  // true
log(m === m3)  // false
log(m2 === m3) // false 
log( m(v => v * 2),  m2(v => v * 3))
log(m(dF3x),m2(dF3x),m3(dF3x)); // 18, 18, ` ;


var testArrayMult = `var ar1 = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a*b} ]]]]`
var testArrayAdd = `var ar1 = [ [ ], [ [ ], [ [ ], [function add (a, b) {return a+b} ]]]]`
var testArrayConcat = `var ar1 = [ [ ], [ [ ], [ [ ], [function concat (a, b) {return "" + a + b} ]]]]`

var cloneCode = `ar[1][1][1][0](6,7)  // 42
m = M(ar)
m2 = M(m(dF3x));
ar = 888;
log('ar is', ar);  // 888
log( "m2(dF3x)[1][1][1][0](6,7)", m2(dF3x)[1][1][1][0](6,7))`

var cloneCode_2 = ` 
var ar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]]
var m = M(ar);
ar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]] 

log('1 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) 
// var arzi = [ [ ], [ [ ], [ [ ], [ function (a) {return a(dF3x)} ]]]]
// ar2 = arzi[1][1][1][0](m);
var ar2 = m(dF3x);
log("################################ Changing ar")
ar[1][1][1].splice(-1)
ar[1][1][1].push(function concat (a,b) {return "" + a + b});
log('2 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) 
log('ar2[1][1][1][9](6,7) is', ar2[1][1][1][0](6,7))

log("################################ Changing ar")
ar[1][1][1].splice(-1)
ar[1][1][1].push(function add (a,b) {return a + b});
log('3 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) 
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7)) 

log("################################ Changing ar2")
ar2[1][1][1].splice(-1)
ar2[1][1][1].push(function concat (a,b) {return "" + a + b});
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7)) 
log('4 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) 

log("################################ Changing ar2")
ar2 = [{x:'yz'}]
log('ar2[0] is', ar2[0]) 
log('5 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) 

// ****************************************************************8

ar[1][1][1][0](6,7)  // 42 

// Changing ar
ar[1][1][1][0](6,7)  // 67  
ar2[1][1][1][9](6,7)  // 42 

// Changing ar
ar[1][1][1][0](6,7)  // 13 
ar2[1][1][1][0](6,7) // 42 

// Changing ar2 
ar2[1][1][1][0](6,7)  // 67 
ar[1][1][1][0](6,7)  // 13 

// Changing ar2 
ar2[0]  // Object { x: "yz" }
ar[1][1][1][0](6,7)  // 13
`;

var JSCode2 = `m(dF3x} [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]
var clone = M(m(dF3x))
clone === m false
clone(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]
clone and m are identical, and 'clone === m' returns false.
Therefore clone is a deep clone of m. Q.E.D.
******************************* Change m
m(v => [ v[0], v[1], [v[1][0](v[0][0])]])
m(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 27 ] ]
clone(dF3x) [ [ 3 ], [ [Function (anonymous)] ], [ 888 ] ]
***************** Change x[0][0] to 4 in the clone-M(x) closure
clone( v => [ [4], v[1], v[2] ] )
***************** Run x[1][0](x[0][0]) in x[2] in the clone-M(x) closure.
clone(v => [ v[0], v[1],  [v[1][0](v[0][0])] ] )
clone(dF3x) [ [ 4 ], [ [Function (anonymous)] ], [ 64 ] ]
m(dF3x} [ [ 3 ], [ [Function (anonymous)] ], [ 27 ] ]`;


var fibCode = `var log = console.log;
var dF3x = () => {};
var dF3ar = () => {};

function M(x, ar = [0]) {
    return function go(func) {
        if (func === dF3ar) return ar
        else x = func(x);
        ar.push(x[0]);
        return go;
    };
}

var m = M([0,1])

function fib (f,n) {
  for (let k = 1; k <= n; k+=1) {
    f(([a, b]) => [b, a + b]);
  }
  return f(dF3ar);
}
  
log(fib(m,9)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
log(fib(m,2)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55, 89]`

var log = console.log;
var dF3x = () => {};
var dF3ar = () => {};

/*function M(x, ar = [0]) {
    return function go(func) {
        if (func === dF3ar) return ar
        else x = func(x);
        ar.push(x[0]);
        return go;
    };
//}*/

var m = M([0,1])

function fib (f,n) {
  for (let k = 1; k <= n; k+=1) {
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
    }`
var k = 397421;

var v2 = `M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`

var v5 = `var ar = [ [6], [mult = (a,b) => a*b] ];
var arClone = M(ar)(dF3x);
log(arClone); // [ [6], [mult = (a,b) => a*b] ]
ar = {hello: "Hello World"};
log(arClone) // [ [6], [mult = (a,b) => a*b] ]
arClone = [ 1, 2, {yes:"You bet!"} ];
log(ar); // {"hello": "Hello World"}
log(arClone); // [1, 2, {yes: "You bet!"}]`;

log(fib(m,11));

log("Hello", v2)


var cloneCode = `function add (a,b) {return a+b};
function mult (a,b) {return a*b};

var m = M([ [6], [7], [add] ]);
var clone = M(m(dF3x));

log("m === clone", m === clone); // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x)) // true`

var cloneCode2 = `log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 13
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42

log("m === clone", m === clone);  // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // false`;


var a1 = `var O = {};
O.car = "BMW";
var W = O;`

var a2 = `W.car = "Chevy";
log("O is", O);  // "Chevy"
log("W is", W);  // "Chevy"`

var a3 = `W = {car: W.car};
log("O is", O)   // "Chevy"
log("W is", W);  // "Chevy" `

var a4 = `W.car = "Ford";
log("O is", O); // "Chevy"
log("W is", W); // "Ford" `


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




</script>


<svelte:window on:keypress={handleEvent} />

<div style="margin-left: 8%; margin-right: 8%" id = "top">
  <h1 class="middle">Recursive Closures</h1>

 <p> This webpage, and those that follow, explore the utility of what will be called "m-M(x) closures"; i.e., closures resulting from statements "m = M(x)", where x can be any value, and "M" is basically defined as:
 
  <pre>{MCode}</pre>
 

<div class = "h3"> Concise and Transparent Function Composition </div> <p class = "i3"> An anonymous, and therefore temporary, closure returns 10 after taking the square root of ((3 cubed times 4) minus 8). <span class = "or">{v2} </span> </p>

<div class = "h3"> Isolation of Sequences of Computations</div>
<p>The virtual Rubik's cube shown on the <a href=./cube>Rubik's cube page</a> demonstrates how user key presses and button clicks avoid causing side effects outside of the m-M(x) closure. User actions pull functions "func" into the m-M(x) closure with calls to "m(func)" for functions affecting the array of six nine-member arrays of the strings "blue", "green", "red", "orange", "yellow", and "white". "m(func)" causes x = func(x) to execute inside of M, rearranging some of the 54 elements of x in ways corresponding to turning the faces and middle sections of a Rubik's cube. </p>

<p> For example, When a user presses the "R" key, m(R) is called, causing x to be reassigned whih the statement "x =R(x)".  to execute inside of the m-M(x) closure. This rearranges the color strings of x, and consequently, the corresponding background colors of the HTML representation of the cube in the DOM. The state of the cube, 'x', can remain in the m-M(x) closure from user key strokes and button clicks all the way to the DOM without affecting, or being affected by, any Svelte code inside of the script tags.  This is similar to what the Haskell IO monad does, allowing user input to be processed without side effects until the final result is printed or displayed. The lazy evaluation of newly defined clones demonstrated on the <a href="./clone">clone</a> page is also reminscent of Haskell. When the dynamic state of applications are kept in recursive sures  </p>

<div class = "h3"> Cloning M (Including x) In m-M(x) Closures </div>
<p class="i3"> Cloning is discussed on the <a href="./clone">Clone</a> page. Cloning m is a two-step procedure. Frist, define the clone with "const m_clone = M(m(dF3x))". That creates a new, independent-from-m closure, an m_clone-M(x) closure. "x" inside of the m_clone-M(x) closure and "x" in the m-M(x) closure are references to the same object in memory. At this stage, m_clone is, for all practical purposes, a perfect deep clone. It's just lazily waiting to be used before it automatically becomes independent of the other "x", the one in the m-M(x) closure. </p>
<div class = "h4"> Lazy Evaluation of "x"</div>
<p> "x" in the m_clone-M(x) is a reference to "x" in the m-M(x) closure until m_clone(func) is called on any function "func" other than dF3x. The reason is simple. "m" is a copy of "go" in the definition of "M". By that definition, m(func) reassigns x with the statement "x = func(x)". Modifying a copy of an object also modifies the object that was copied. Reassigning a variable refering to the copy causes the variable to refer to (point to) a unique address in memory, and changing the object at that new address has no effect on the object that was copied. </p>

<pre>{a1}</pre>
<pre>{a2}</pre>

<p>Modifying "W" modified O. Next, W gets reassigned. From then on, changing W no longer changes  'O'.</p>

<pre>{a3}</pre>
<p> O.car and W.car happen to have the same value, but not for long. When W.car becomes "Ford", O.car remains "Chevy". </p>
<pre>{a4}</pre>
  <p>

<p>There are many good reasons to work inside m-M(x) closures. The ease with which you can clone nested, convoluted, and circular values, no matter how many functions, self-references and complex data structures it contains, is another good reason for coders who need to make and save clones.</p>
<pre>{cloneCode}</pre>
<span style="font-size:26px; font-weight: 'bold'; color: orange " >&nbsp;&nbsp; clone(v => [ v[0], v[1], [mult] ] )</span> <span>&nbsp; // Now a true clone, with its own memory address</span> 
<pre>{cloneCode2}</pre>

<p>More discussion and examples are at <a href="./clone">Clones</a></p>.


<div class = "h3"> Modifying M For Special Purposes</div>
<p> The definition of M can be modified to avoid mutation (push new results into an array, for example), reverse a series of actions as in the<a href="cube#star">Rubik's cube</a> example, handle asynchronous functions, as in <a href="./cube#reverse">the cube reverse function</a>,  <a href="./async5#yes">Async</a>, and other purposes.</p>


<p> There are better ways to generate Fibonacci numbers. This example shows that the result of running fib(11) can be obtained by running fib(9) and later fib(2).  </p>
<pre>{fibCode}</pre>

<h1 class="middle2"> A Fast and Efficient Virtual Rubik's Cube </h1> 

<p> Some of the code responsible for the <a href="./cube">virtual Rubik's cube</a> is shown below. Here's the HTML code:</p>  

<pre>{domCube}</pre>
<p> A JavaScript representation of a solved virtual Rubik's cube is shown below. 'x' in the m-M(x) closure is an array of six nine-member arrays of strings. x[0] contains nine copies of "blue". The code that determines the colors of the initial right side of the virtual cube displayed in the broswer is shown in the middle block of HTML buttons above. Each of the nine lines specifies background-colors which are elements of x[0], all of which are "blue" when the m-M(x) closure is defined.   </p>
<pre>{mCode}</pre>
<p> After pressing "F", clicking the "F" button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) closure rearranges to this configuration:
<pre>{Fcode2}</pre>
<p> And the cube looks like this:</p>

<img src={Cubeshot} alt="Right side turned" style="width:150px;height:155px;" />
<p> Here's the definition of F:</p>
<pre>{functionF}</pre>
<p> F populates a temporary array "temp" with values taken from locations on the current configuration of x. It populates temp[0][0], temp[0][3], temp[0][6], with whatever strings happen to be at x[4][2], x[4][5], and x[4][8]. When m(F) returns temp, temp becomes the value of x in the m-M(x) closure. </p>

<h1 class="middle2"> The Game of Score </h1>
    <p>
      The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided dice along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of "x" in
      the m-M(x) closure is shown in the definition of m2:
    </p>
    <pre>m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);</pre>

<h1 class="middle2">Crunching Numbers</h1>
<p><a href="./game2">Martingale</a> runs the Martingale betting strategy thousands of times to show that it neither increases nor decreases the odds of coming out ahead. x in the m(x)-M closure is [starting amount,1,goal,0] where "starting amount" is the amount of money the player tries to double. "goal is fixed, starting at "starting amount. m operates on the function "f1", which randomly generates 0 or 1 wth equal probability, increasing or decreasing v[1] (the mount of the bet) and v[0] (the players current stake). </p>
<p> If you go to <a href="./game2">Martingale</a>, you can try it yourself, learn the betting algorithm, and see the outcomes of tens of thousands of coin flips. m needs only one function, f1, shown below.</p>

<pre>{stdCode}</pre>







</div> 




<a href="#top">Back to the top</a>

<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>

<slot />

<style>

.middle {
  text-align: center;
  width: 100%;
}

.middle2 {
  text-align: center;
  width: 100%;
  font-size: 26px;
}

h2 {
  color: #f5a976;
}

.or {
  color:rgb(254, 148, 62)
}

span {
    color: rgb(219, 253, 244);
    font-size: 24px;
    margin: 0%;

}

.orange {
  color: rgb(244, 202, 168)
}
  a {
    color: rgb(222, 100, 245);
  } 

  a:hover {
    color: white;
    background-color: #000;
  }

  img {
    width: 25%;
    height: auto;
  }

  h3 {
    color: gold;
    font-size: 25px;
    }

  h4 {
    color: rgb(255, 187, 0);
    font-size: 22px;
    }

  .h3 {
    color: gold;
    font-size: 27px;
    text-align: center;
    }

.i3 {
  text-indent: 3%;
  text-align: left;
}
    
/*
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
*/

</style>
