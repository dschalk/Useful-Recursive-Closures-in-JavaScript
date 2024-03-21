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
// *********************************************************
</script>


<svelte:window on:keypress={handleEvent} />

<div style="margin-left: 8%; margin-right: 8%" id = "top">
  <h1 style="text-align: center; color: #f5ee9f">Recursive Closures</h1>
  
  <p style="text-indent:3% ">"M" returns the recursive function "go". "m-M(x) closures" refers to closure created by defining "m" as the recursive function return by "M" when "m = M(x)" runs. "M" is defined below, "x" can be any JavaScript value, and "func" is either dF3x or a function that operates on x.  </p>
  <div style="<color:#880000; font-size:32">
  <pre>{x3}</pre>
  <pre>{Mdis}</pre>
  <pre>{I}</pre>
  <pre>{H}</pre>
  <pre>{G}</pre>
  </div>
<span> &nbsp;&nbsp;&nbsp; Anonymous closures can perform computations without leaving persistent closures in memory. The results might be assigned to variables, placed in persistent objects, memorialized in log files, and so forth; but the closures that produced those results are subject to immediate garbage collection. Here an example: </span><span style = "color: #f5ee9f; font-size:28px"> console.log( M( 3 )( v=>v**3 )( v=>v*4 )( v=>v-8 )( Math.sqrt )( dF3x ) ) // 42 </span><br> 
<br>
<span>  &nbsp;&nbsp;&nbsp; The variable "m" (above) is a number. The closure that performed the computation is gone, out of reach and subject to garbage collection. But, when the closure is named, it remains at least as long as a browser tab remains open; longer with persistent storage.</span>
<br>

<span style = "color: #f5ee9f">  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)</span><br> 
<span style = "color: #f5ee9f; font-size:28px"> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; console.log ( "m is", m ) &nbsp;&nbsp;&nbsp;&nbsp; // m is function go(func)
</span><br> 
<span style = "color: #f5ee9f; font-size:28px"> &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  console.log(m(dF3x)) &nbsp;&nbsp;  // 10 </span>  <br>
<span style = "color: #f5ee9f; font-size:28px"> &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; m(v=>v+4)(v=>v*3) &nbsp;&nbsp;   // &nbsp; </span> <br>
<span style = "color: #f5ee9f; font-size:28px"> &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  console.log(m(dF3x)) &nbsp;&nbsp;  // 42  </span>

<p>  &nbsp;&nbsp;&nbsp; For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5#yes">Async</a>.</p>

<h1 style = "text-align: center; color: #f5ee9f"> A Fast and Efficient Virtual Rubik's Cube </h1>

<p> The JavaScript representation of the virtual Rubik's cube visible in the browser is contained in an m-M(x) closure where x starts out as an array of 6 nine-member arrays of strings. All 9 members of x[0] are the string "blue". x[1] is all "green", x[2] all "red", x[3] all "orange", x[4] all "yellow", and the 9 members of x[5] are the string "white". </p>
<p> The virtual Rubik's cube in the DOM and displayed in the browser consists of 9 front-facing buttons, 9 top buttons, and 9 side buttons. Each of the 27 buttons containin a "style = ' background-color: m(dF3x)[ j ][ k ] ' " statements. Since user invoked functions are reactive, and m(dF3x) returns the current value of x in the m-M(x) closure, user key presses and button clicks that rearrange the strings in x immediately rearrange the colors of the 9 squares of each of the three visible sides of the virtual Rubik's cube.   </p>
<p> Here's the HTML code:</p>
<pre>{domCube}</pre>
<p> And here's the JavaScript representation of the virtual Rubik's cube:</p>
<pre>{mCode}</pre>
<p> After pressing "F", clicking the "F" button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) rearranges to this configuration:
<pre>{Fcode2}</pre>
<p> And the cube looks like this:</p>
 <img
                src={F}
                alt="Cube after F"                                              
                style="width:150px;height:155px;"
            />
<p> When a user presses the "F" key, m(F) runs, causing x => F(x). The return value of F(x) when x is in its starting configuration is shown above. Here's the definition of F:

<pre>{functionF}</pre>
<p> F populates a temporary array "temp" with values taken from locations on x specified by the definition of F. It begins with 
  <pre>{Fbeginning}</pre> 
  <p> F ends with:</p>
  <pre>{Fend}</pre> 
  <p>R replaces the first three elements of temp[5] with whatever strings happen to be at x[0][6], x[0][3]Then F returns temp, causing it to replace the current value of x. The values of the strings F places in temp are not relevant.   locations without regard to whether the strings happen to be "blue", "green", "red", "orange", "yellow", or "white".
<p> Looking at x after the transformation (above), we see that the first thing F(x) does is move the string that happens to be at x[4][6] to x[0][0], Near the bottom of F, we see that x[0][0] goes to x[5][2]. Whatever happened to be at x[5][2] ends up at x[1][8].</p>
<p> x remains an array of six nine-member arrays of strings, maintaining its one-to-one correspondence with the six, nine-cubit sides of the virtual Rubik's cube. None of the functions available to users change the structure of x, just as solving a real Rubik's does not change the number of cubits on each side of the cube.
  




<h1 style = "text-align: center; color: #f5ee9f"> The Game of Score </h1>
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
    margin: 0%;

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

  h3 {
    color: gold;
    font-size: 25px;
    }

</style>
