import { c as create_ssr_component, e as escape, b as add_attribute, n as null_to_empty } from "../../../chunks/ssr.js";
import { c as clickDemo } from "../../../chunks/clickDemo.js";
const css = {
  code: '.svelte-p8iwwg::before,.svelte-p8iwwg::after{box-sizing:border-box;margin:0;padding:0}.dis.svelte-p8iwwg{color:#fe0374;font-weight:bold;font-size:28px}.play.svelte-p8iwwg{color:yellow;font-weight:bold;font-size:28px}.light.svelte-p8iwwg{color:rgb(172, 231, 243)}.cell.svelte-p8iwwg{justify-content:center;align-items:center;display:flex;font-family:Arial;font-size:3rem;font-weight:bold;background:white}.o0.svelte-p8iwwg::before{width:60px;font-size:42px;font-weight:bold;background-color:orange;content:"o0"}.o1.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o1"}.o2.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o2"}.o3.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o3"}.o4.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o4"}.o5.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o5"}.o6.svelte-p8iwwg::before{font-size:42px;font-weight:bold;background-color:orange;content:"o6"}.o7.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:orange;content:"o7"}.o8.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:orange;content:"o8"}.r0.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r0"}.r1.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r1"}.r2.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r2"}.r3.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r3"}.r4.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r4"}.r5.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r5"}.r6.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r6"}.r7.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r7"}.r8.svelte-p8iwwg::before{font-size:40px;font-weight:bold;background-color:red;content:"r8"}.g0.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g0"}.g1.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g1"}.g2.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g2"}.g3.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g3"}.g4.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g4"}.g5.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g5"}.g6.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g6"}.g7.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g7"}.g8.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:green;content:"g8"}.b0.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:blue;content:"b0"}.b1.svelte-p8iwwg::before{color:yellow;font-size:40px;font-weight:bold;background-color:blue;content:"b1"}.b2.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b2"}.b3.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b3"}.b4.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b4"}.b5.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b5"}.b6.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b6"}.b7.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b7"}.b8.svelte-p8iwwg::before{color:yellow;font-size:42px;font-weight:bold;background-color:blue;content:"b8"}.y0.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y0"}.y1.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y1"}.y2.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y2"}.y3.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y3"}.y4.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y4"}.y5.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y5"}.y6.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y6"}.y7.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y7"}.y8.svelte-p8iwwg::before{color:blue;font-size:42px;font-weight:bold;background-color:yellow;content:"y8"}.w0.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w0"}.w1.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w1"}.w2.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w2"}.w3.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w3"}.w4.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w4"}.w5.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w5"}.w6.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w6"}.w7.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w7"}.w8.svelte-p8iwwg::before{color:black;font-size:42px;font-weight:bold;background-color:white;content:"w8"}.blue.svelte-p8iwwg{height:60px;width:60px;background-color:rgb(116, 116, 253);border-radius:10px}.green.svelte-p8iwwg{height:60px;width:60px;background-color:rgb(76, 251, 76);border-radius:10px}.red.svelte-p8iwwg{height:60px;width:60px;background-color:rgb(252, 97, 97);border-radius:10px}.orange.svelte-p8iwwg{height:60px;width:60px;background-color:orange;border-radius:10px}.yellow.svelte-p8iwwg{height:60px;width:60px;background-color:yellow;border-radius:10px}.white.svelte-p8iwwg{height:60px;width:60px;background-color:white;border-radius:10px}.container.svelte-p8iwwg{width:198px;height:198px;perspective:1000px;margin-right:7%;color:aqua}.grid.svelte-p8iwwg{display:grid;grid-template-columns:repeat(3, 60px);grid-template-rows:repeat(3, 60px);grid-gap:7px;justify-content:center}.grid2.svelte-p8iwwg{display:grid;grid-template-columns:repeat(3, 190px);grid-template-rows:repeat(3, 190px);grid-gap:5px;justify-content:center}.cube2.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(150deg)}.cube4.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(60deg)}.cube3.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-30deg) rotateY(240deg)}.cube1.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-25deg) rotateY(335deg)}.cube5.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(30deg)}.cube6.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(120deg)}.cube7.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(210deg)}.cube8.svelte-p8iwwg{transform-style:preserve-3d;width:100%;height:100%;position:relative;transform:rotateX(-210deg) rotateY(300deg)}.face.svelte-p8iwwg{position:absolute;width:100%;height:100%;background-color:grey}.top.svelte-p8iwwg{transform:rotateX(90deg) translateZ(100px)}.bottom.svelte-p8iwwg{transform:rotateX(-90deg) translateZ(100px)}.right.svelte-p8iwwg{transform:rotateY(90deg) translateZ(100px)}.left.svelte-p8iwwg{transform:rotateY(-90deg) translateZ(100px)}.front.svelte-p8iwwg{transform:rotateX(0deg) translateZ(100px)}.back.svelte-p8iwwg{transform:rotateX(-180deg) translateZ(100px)}@keyframes svelte-p8iwwg-spin{from{transform:rotateX(0deg) rotateY(0deg)}to{transform:rotateX(360deg) rotateY(360deg)}}.rite.svelte-p8iwwg{float:right}h1.svelte-p8iwwg{text-align:center;color:#f3c95e}.col-3.svelte-p8iwwg{position:fixed;right:12%;top:20%;width:35%}#steady.svelte-p8iwwg{position:fixed;top:180px;left:75.5%}img.svelte-p8iwwg{width:44%;height:44%}.img2.svelte-p8iwwg{width:150px;height:155px}div.svelte-p8iwwg{color:blue}h2.svelte-p8iwwg{text-align:center;font-size:40px;color:rgb(255, 134, 198)}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import clickDemo from \\"$lib/clickDemo.png\\";\\n  import oppH from \\"$lib/oppH.png\\";\\n  // import Image from './Image.svelte'\\n  var log = console.log;\\n  var ERROR = \\"\\";\\n\\n  import { onMount } from \\"svelte\\";\\n\\n  import array from \\"$lib/OLL.png\\";\\n  import {\\n    fade,\\n    blur,\\n    fly,\\n    slide,\\n    scale,\\n    draw,\\n    crossfade,\\n  } from \\"svelte/transition\\";\\n\\n  var index = 1;\\n  function setIndex() {\\n    index = 1;\\n  }\\n  var Amos;\\n\\n  var dF3x = () => {};\\n  var dF3ar = () => {};\\n\\n  function M(x, ar = []) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      if (func === dF3ar) return ar;\\n      else x = func(x);\\n      ar.push(func);\\n      return go;\\n    };\\n  }\\n\\n  var m = M([ [\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"], [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]);\\n\\n  var mCode = \`var m = M([ [\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"], [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"] ]);\`\\n\\n    var cubeStart = [[\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"], [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"]];\\n\\n    function clone(ar) {\\n      JSON.parse(JSON.stringify(ar))\\n    }                                                                                                                                                                                               var test7 = \`function M(x, ar = []) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      if (func === dF3ar) return ar;\\n      else x = func(x);\\n      ar.push(func);\\n      return go;\\n    };\\n  };\`;\\n\\n  const Start = function Start () {\\n    index = 1;\\n    m = M([[\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\"], [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"]]);\\n  };\\n\\n  var startCode = \`const Start = function Start () {\\n    index = 1;\\n    m = M([[\\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\", \\"blue\\"], \\n    [\\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\", \\"green\\"], \\n    [\\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\", \\"red\\"], \\n    [\\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\", \\"orange\\"], \\n    [\\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow\\", \\"yellow], \\n    [\\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\", \\"white\\"]]);\\n  };\`;\\n\\n  $: Sally = m(dF3ar).length;\\n\\n  function reverse() {\\n    let fu = m(dF3ar).pop();\\n    // Removes the function being reversed from x.\\n    let foo = (v) => fu(fu(fu(v)));\\n    // foo is the inverse of fu.\\n    m(foo)(dF3ar).pop();\\n    // After x = foo(x) reverses fu, foo is popped off of ar.\\n    m = m;\\n  }\\n\\n  var reverseCode = \`function reverse () { \\n    let fu = m(dF3ar).pop(); \\n    // Removes the function being reversed from x.\\n    let foo = v => fu(fu(fu(v))); \\n    // foo is the inverse of fu.\\n    m(foo)(dF3ar).pop();     \\n    // After x = foo(x) reverses fu, foo is popped off of ar.\\n    m = m;\\n};\`;\\n\\n  var newMcode = \`  function M(x, ar = []) {\\n      return function go(func) {\\n        if (func === dF3x) return x;\\n        if (func === dF3ar) return ar;\\n        else x = func(x);\\n        ar.push(func);\\n        return go;\\n      };\\n    }; \\n  let m = M(x)\`;\\n\\n  var Xro = function Xro(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n    temp[1] = [\\n      ar[1][2],\\n      ar[1][5],\\n      ar[1][8],\\n      ar[1][1],\\n      ar[1][4],\\n      ar[1][7],\\n      ar[1][0],\\n      ar[1][3],\\n      ar[1][6],\\n    ];\\n    temp[2] = [\\n      ar[4][8],\\n      ar[4][7],\\n      ar[4][6],\\n      ar[4][5],\\n      ar[4][4],\\n      ar[4][3],\\n      ar[4][2],\\n      ar[4][1],\\n      ar[4][0],\\n    ];\\n    temp[3] = ar[5];\\n    temp[4] = ar[3];\\n    temp[5] = [\\n      ar[2][8],\\n      ar[2][7],\\n      ar[2][6],\\n      ar[2][5],\\n      ar[2][4],\\n      ar[2][3],\\n      ar[2][2],\\n      ar[2][1],\\n      ar[2][0],\\n    ];\\n    return temp;\\n  };\\n\\n  var Xror = function Xror(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][2],\\n      ar[0][5],\\n      ar[0][8],\\n      ar[0][1],\\n      ar[0][4],\\n      ar[0][7],\\n      ar[0][0],\\n      ar[0][3],\\n      ar[0][6],\\n    ];\\n    temp[1] = [\\n      ar[1][6],\\n      ar[1][3],\\n      ar[1][0],\\n      ar[1][7],\\n      ar[1][4],\\n      ar[1][1],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n    temp[2] = [\\n      ar[5][8],\\n      ar[5][7],\\n      ar[5][6],\\n      ar[5][5],\\n      ar[5][4],\\n      ar[5][3],\\n      ar[5][2],\\n      ar[5][1],\\n      ar[5][0],\\n    ];\\n    temp[3] = ar[4];\\n    temp[4] = [\\n      ar[2][8],\\n      ar[2][7],\\n      ar[2][6],\\n      ar[2][5],\\n      ar[2][4],\\n      ar[2][3],\\n      ar[2][2],\\n      ar[2][1],\\n      ar[2][0],\\n    ];\\n    temp[5] = ar[3];\\n\\n    return temp;\\n  };\\n\\n  // var Xror = x => Xro(Xro(Xro(x)));\\n\\n  var Yro = function Yro(ar) {\\n    let temp = [];\\n    temp[0] = ar[2];\\n    temp[1] = ar[3];\\n    temp[2] = ar[1];\\n    temp[3] = ar[0];\\n    temp[4] = [\\n      ar[4][6],\\n      ar[4][3],\\n      ar[4][0],\\n      ar[4][7],\\n      ar[4][4],\\n      ar[4][1],\\n      ar[4][8],\\n      ar[4][5],\\n      ar[4][2],\\n    ];\\n    temp[5] = [\\n      ar[5][2],\\n      ar[5][5],\\n      ar[5][8],\\n      ar[5][1],\\n      ar[5][4],\\n      ar[5][7],\\n      ar[5][0],\\n      ar[5][3],\\n      ar[5][6],\\n    ];\\n    return temp;\\n  };\\n\\n  var Yror = function Yror(ar) {\\n    let temp = [];\\n    temp[0] = ar[3];\\n    temp[1] = ar[2];\\n    temp[2] = ar[0];\\n    temp[3] = ar[1];\\n    temp[4] = [\\n      ar[4][2],\\n      ar[4][5],\\n      ar[4][8],\\n      ar[4][1],\\n      ar[4][4],\\n      ar[4][7],\\n      ar[4][0],\\n      ar[4][3],\\n      ar[4][6],\\n    ];\\n    temp[5] = [\\n      ar[5][6],\\n      ar[5][3],\\n      ar[5][0],\\n      ar[5][7],\\n      ar[5][4],\\n      ar[5][1],\\n      ar[5][8],\\n      ar[5][5],\\n      ar[5][2],\\n    ];\\n    return temp;\\n  };\\n\\n  //  var Yror = x => Yro(Yro(Yro(x)));\\n\\n  var Zro = function Zro(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[4][6],\\n      ar[4][3],\\n      ar[4][0],\\n      ar[4][7],\\n      ar[4][4],\\n      ar[4][1],\\n      ar[4][8],\\n      ar[4][5],\\n      ar[4][2],\\n    ];\\n    temp[1] = [\\n      ar[5][6],\\n      ar[5][3],\\n      ar[5][0],\\n      ar[5][7],\\n      ar[5][4],\\n      ar[5][1],\\n      ar[5][8],\\n      ar[5][5],\\n      ar[5][2],\\n    ];\\n    temp[2] = [\\n      ar[2][2],\\n      ar[2][5],\\n      ar[2][8],\\n      ar[2][1],\\n      ar[2][4],\\n      ar[2][7],\\n      ar[2][0],\\n      ar[2][3],\\n      ar[2][6],\\n    ];\\n    temp[3] = [\\n      ar[3][6],\\n      ar[3][3],\\n      ar[3][0],\\n      ar[3][7],\\n      ar[3][4],\\n      ar[3][1],\\n      ar[3][8],\\n      ar[3][5],\\n      ar[3][2],\\n    ];\\n    temp[4] = [\\n      ar[1][6],\\n      ar[1][3],\\n      ar[1][0],\\n      ar[1][7],\\n      ar[1][4],\\n      ar[1][1],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n    temp[5] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n    return temp;\\n  };\\n\\n  var Zror = function Zror(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[5][2],\\n      ar[5][5],\\n      ar[5][8],\\n      ar[5][1],\\n      ar[5][4],\\n      ar[5][7],\\n      ar[5][0],\\n      ar[5][3],\\n      ar[5][6],\\n    ];\\n    temp[1] = [\\n      ar[4][2],\\n      ar[4][5],\\n      ar[4][8],\\n      ar[4][1],\\n      ar[4][4],\\n      ar[4][7],\\n      ar[4][0],\\n      ar[4][3],\\n      ar[4][6],\\n    ];\\n    temp[2] = [\\n      ar[2][6],\\n      ar[2][3],\\n      ar[2][0],\\n      ar[2][7],\\n      ar[2][4],\\n      ar[2][1],\\n      ar[2][8],\\n      ar[2][5],\\n      ar[2][2],\\n    ];\\n    temp[3] = [\\n      ar[3][2],\\n      ar[3][5],\\n      ar[3][8],\\n      ar[3][1],\\n      ar[3][4],\\n      ar[3][7],\\n      ar[3][0],\\n      ar[3][3],\\n      ar[3][6],\\n    ];\\n    temp[4] = [\\n      ar[0][2],\\n      ar[0][5],\\n      ar[0][8],\\n      ar[0][1],\\n      ar[0][4],\\n      ar[0][7],\\n      ar[0][0],\\n      ar[0][3],\\n      ar[0][6],\\n    ];\\n    temp[5] = [\\n      ar[1][2],\\n      ar[1][5],\\n      ar[1][8],\\n      ar[1][1],\\n      ar[1][4],\\n      ar[1][7],\\n      ar[1][0],\\n      ar[1][3],\\n      ar[1][6],\\n    ];\\n    return temp;\\n  };\\n\\n  // var Zror = x => Zro(Zro(Zro(x)));\\n\\n  //  $: m = m(() => m(dF3x));\\n\\n  var Xrotate = function Xrotate(ar) {\\n    m(Xro);\\n    m = m;\\n  };\\n\\n  var Xback = function Xback(ar) {\\n    m(Xror);\\n    m = m;\\n  };\\n\\n  var Yrotate = function Yrotate(ar) {\\n    m(Yro);\\n    m = m;\\n  };\\n\\n  var Yback = function Yback(ar) {\\n    m(Yror);\\n    m = m;\\n  };\\n\\n  var Zrotate = function Zrotate(ar) {\\n    m(Zro);\\n    m = m;\\n  };\\n\\n  var Zback = function Zback(ar) {\\n    m(Zror);\\n    m = m;\\n  };\\n\\n  var Cz = function Cz(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[4][3],\\n      ar[0][2],\\n      ar[0][3],\\n      ar[4][4],\\n      ar[0][5],\\n      ar[0][6],\\n      ar[4][5],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[5][3],\\n      ar[1][2],\\n      ar[1][3],\\n      ar[5][4],\\n      ar[1][5],\\n      ar[1][6],\\n      ar[5][5],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = ar[3];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[1][7],\\n      ar[1][4],\\n      ar[1][1],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  var Czr = function Czr(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[5][5],\\n      ar[0][2],\\n      ar[0][3],\\n      ar[5][4],\\n      ar[0][5],\\n      ar[0][6],\\n      ar[5][3],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[4][5],\\n      ar[1][2],\\n      ar[1][3],\\n      ar[4][4],\\n      ar[1][5],\\n      ar[1][6],\\n      ar[4][3],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = ar[3];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[0][1],\\n      ar[0][4],\\n      ar[0][7],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[1][1],\\n      ar[1][4],\\n      ar[1][7],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  var Cx = function Cx(ar) {\\n    let temp = [];\\n\\n    temp[0] = ar[0];\\n\\n    temp[1] = ar[1];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[5][7],\\n      ar[2][2],\\n      ar[2][3],\\n      ar[5][4],\\n      ar[2][5],\\n      ar[2][6],\\n      ar[5][1],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[4][1],\\n      ar[3][2],\\n      ar[3][3],\\n      ar[4][4],\\n      ar[3][5],\\n      ar[3][6],\\n      ar[4][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[2][7],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[2][4],\\n      ar[4][5],\\n      ar[4][6],\\n      ar[2][1],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[3][1],\\n      ar[5][2],\\n      ar[5][3],\\n      ar[3][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[3][7],\\n      ar[5][8],\\n    ];\\n    // m = M(temp);\\n    return temp;\\n  };\\n\\n  var Cy = function Cy(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n    temp[4] = ar[4];\\n    temp[5] = ar[5];\\n    return temp;\\n  };\\n\\n  var Cyr = function Cyr(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n    temp[4] = ar[4];\\n    temp[5] = ar[5];\\n    return temp;\\n  };\\n\\n  var Cxr = function Cxr(ar) {\\n    // Verified\\n    let temp = [];\\n    temp[0] = ar[0];\\n    temp[1] = ar[1];\\n    temp[2] = [\\n      ar[2][0],\\n      ar[4][7],\\n      ar[2][2],\\n      ar[2][3],\\n      ar[4][4],\\n      ar[2][5],\\n      ar[2][6],\\n      ar[4][1],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[5][1],\\n      ar[3][2],\\n      ar[3][3],\\n      ar[5][4],\\n      ar[3][5],\\n      ar[3][6],\\n      ar[5][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[3][1],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[3][4],\\n      ar[4][5],\\n      ar[4][6],\\n      ar[3][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[2][7],\\n      ar[5][2],\\n      ar[5][3],\\n      ar[2][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[2][1],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  var B = function B(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[5][8],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[5][7],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[5][6],\\n    ];\\n\\n    temp[1] = [\\n      ar[4][2],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[4][1],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[4][0],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][6],\\n      ar[2][3],\\n      ar[2][0],\\n      ar[2][7],\\n      ar[2][4],\\n      ar[2][1],\\n      ar[2][8],\\n      ar[2][5],\\n      ar[2][2],\\n    ];\\n\\n    temp[3] = ar[3];\\n\\n    temp[4] = [\\n      ar[0][2],\\n      ar[0][5],\\n      ar[0][8],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[1][0],\\n      ar[1][3],\\n      ar[1][6],\\n    ];\\n    return temp;\\n  };\\n  // var Bz = x => B(B(B(x)))\\n\\n  var Bz = function Bz(ar) {\\n    // Verified\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[4][0],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[4][1],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[4][2],\\n    ];\\n\\n    temp[1] = [\\n      ar[5][6],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[5][7],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[5][8],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][2],\\n      ar[2][5],\\n      ar[2][8],\\n      ar[2][1],\\n      ar[2][4],\\n      ar[2][7],\\n      ar[2][0],\\n      ar[2][3],\\n      ar[2][6],\\n    ];\\n\\n    temp[3] = ar[3];\\n\\n    temp[4] = [\\n      ar[1][6],\\n      ar[1][3],\\n      ar[1][0],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n    return temp;\\n  };\\n\\n  var D = function D(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[4] = ar[4];\\n\\n    temp[5] = [\\n      ar[5][6],\\n      ar[5][3],\\n      ar[5][0],\\n      ar[5][7],\\n      ar[5][4],\\n      ar[5][1],\\n      ar[5][8],\\n      ar[5][5],\\n      ar[5][2],\\n    ];\\n    return temp;\\n  };\\n\\n  // var Dz = x => D(D(D(x)))\\n\\n  var Dz = function Dz(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[4] = ar[4];\\n\\n    temp[5] = [\\n      ar[5][2],\\n      ar[5][5],\\n      ar[5][8],\\n      ar[5][1],\\n      ar[5][4],\\n      ar[5][7],\\n      ar[5][0],\\n      ar[5][3],\\n      ar[5][6],\\n    ];\\n    return temp;\\n  };\\n\\n  var L = function L(ar) {\\n    let temp = [];\\n    temp[0] = ar[0];\\n\\n    temp[1] = [\\n      ar[1][6],\\n      ar[1][3],\\n      ar[1][0],\\n      ar[1][7],\\n      ar[1][4],\\n      ar[1][1],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[5][6],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[5][3],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[5][0],\\n    ];\\n\\n    temp[3] = [\\n      ar[4][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[4][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[4][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[2][8],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[2][5],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[2][2],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[3][0],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[3][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[3][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  // var Lz = x => L(L(L(x)))\\n\\n  var Lz = function Lz(ar) {\\n    let temp = [];\\n    temp[0] = ar[0];\\n\\n    temp[1] = [\\n      ar[1][2],\\n      ar[1][5],\\n      ar[1][8],\\n      ar[1][1],\\n      ar[1][4],\\n      ar[1][7],\\n      ar[1][0],\\n      ar[1][3],\\n      ar[1][6],\\n    ];\\n\\n    temp[2] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[4][6],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[4][3],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[4][0],\\n    ];\\n\\n    temp[3] = [\\n      ar[5][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[5][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[5][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[3][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[3][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[3][6],\\n      ar[4][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[2][8],\\n      ar[5][1],\\n      ar[5][2],\\n      ar[2][5],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[2][2],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  function F(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[4][6],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[4][7],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[4][8],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[5][0],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[5][1],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[5][2],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = [\\n      ar[3][6],\\n      ar[3][3],\\n      ar[3][0],\\n      ar[3][7],\\n      ar[3][4],\\n      ar[3][1],\\n      ar[3][8],\\n      ar[3][5],\\n      ar[3][2],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[1][8],\\n      ar[1][5],\\n      ar[1][2],\\n    ];\\n\\n    temp[5] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  }\\n\\n  // var Fz = x => F(F(F(x)))\\n\\n  var Fz = function Fz(ar) {\\n    // Verified\\n    let temp = [];\\n    temp[0] = [\\n      ar[5][2],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[5][1],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[5][0],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[4][8],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[4][7],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[4][6],\\n    ];\\n\\n    temp[2] = ar[2];\\n\\n    temp[3] = [\\n      ar[3][2],\\n      ar[3][5],\\n      ar[3][8],\\n      ar[3][1],\\n      ar[3][4],\\n      ar[3][7],\\n      ar[3][0],\\n      ar[3][3],\\n      ar[3][6],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[4][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[4][5],\\n      ar[0][0],\\n      ar[0][3],\\n      ar[0][6],\\n    ];\\n\\n    temp[5] = [\\n      ar[1][2],\\n      ar[1][5],\\n      ar[1][8],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[5][5],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[5][8],\\n    ];\\n    return temp;\\n  };\\n\\n  var R = function R(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n\\n    temp[1] = ar[1];\\n\\n    temp[2] = [\\n      ar[4][8],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[4][5],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[4][2],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[5][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[5][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[5][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[3][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[3][5],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[2][6],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[2][3],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[2][0],\\n    ];\\n    return temp;\\n  };\\n\\n  // var Rz = x => R(R(R(x)))\\n\\n  var Rcode = \` function R(ar) {\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][6],\\n      ar[0][3],\\n      ar[0][0],\\n      ar[0][7],\\n      ar[0][4],\\n      ar[0][1],\\n      ar[0][8],\\n      ar[0][5],\\n      ar[0][2],\\n    ];\\n\\n    temp[1] = ar[1];\\n\\n    temp[2] = [\\n      ar[4][8],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[4][5],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[4][2],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[5][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[5][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[5][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[3][2],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[3][5],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[2][6],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[2][3],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[2][0],\\n    ];\\n    return temp;\\n  }\`;\\n\\n  var Rz = function Rz(ar) {\\n    // Verified\\n    let temp = [];\\n    temp[0] = [\\n      ar[0][2],\\n      ar[0][5],\\n      ar[0][8],\\n      ar[0][1],\\n      ar[0][4],\\n      ar[0][7],\\n      ar[0][0],\\n      ar[0][3],\\n      ar[0][6],\\n    ];\\n\\n    temp[1] = ar[1];\\n\\n    temp[2] = [\\n      ar[5][8],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[5][5],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[5][2],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[4][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[4][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[4][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][0],\\n      ar[4][1],\\n      ar[2][6],\\n      ar[4][3],\\n      ar[4][4],\\n      ar[2][3],\\n      ar[4][6],\\n      ar[4][7],\\n      ar[2][0],\\n    ];\\n\\n    temp[5] = [\\n      ar[5][0],\\n      ar[5][1],\\n      ar[3][2],\\n      ar[5][3],\\n      ar[5][4],\\n      ar[3][5],\\n      ar[5][6],\\n      ar[5][7],\\n      ar[3][8],\\n    ];\\n    return temp;\\n  };\\n\\n  var U = function U(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][6],\\n      ar[4][3],\\n      ar[4][0],\\n      ar[4][7],\\n      ar[4][4],\\n      ar[4][1],\\n      ar[4][8],\\n      ar[4][5],\\n      ar[4][2],\\n    ];\\n\\n    temp[5] = ar[5];\\n    return temp;\\n  };\\n\\n  //  var Uz = x => U(U(U(x)))\\n\\n  var Ucode = \` function U(ar) {\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][6],\\n      ar[4][3],\\n      ar[4][0],\\n      ar[4][7],\\n      ar[4][4],\\n      ar[4][1],\\n      ar[4][8],\\n      ar[4][5],\\n      ar[4][2],\\n    ];\\n\\n    temp[5] = ar[5];\\n    return temp;\\n  }\`;\\n\\n  var Uz = function Uz(ar) {\\n    // Verified\\n    let temp = [];\\n\\n    temp[0] = [\\n      ar[3][0],\\n      ar[3][1],\\n      ar[3][2],\\n      ar[0][3],\\n      ar[0][4],\\n      ar[0][5],\\n      ar[0][6],\\n      ar[0][7],\\n      ar[0][8],\\n    ];\\n\\n    temp[1] = [\\n      ar[2][0],\\n      ar[2][1],\\n      ar[2][2],\\n      ar[1][3],\\n      ar[1][4],\\n      ar[1][5],\\n      ar[1][6],\\n      ar[1][7],\\n      ar[1][8],\\n    ];\\n\\n    temp[2] = [\\n      ar[0][0],\\n      ar[0][1],\\n      ar[0][2],\\n      ar[2][3],\\n      ar[2][4],\\n      ar[2][5],\\n      ar[2][6],\\n      ar[2][7],\\n      ar[2][8],\\n    ];\\n\\n    temp[3] = [\\n      ar[1][0],\\n      ar[1][1],\\n      ar[1][2],\\n      ar[3][3],\\n      ar[3][4],\\n      ar[3][5],\\n      ar[3][6],\\n      ar[3][7],\\n      ar[3][8],\\n    ];\\n\\n    temp[4] = [\\n      ar[4][2],\\n      ar[4][5],\\n      ar[4][8],\\n      ar[4][1],\\n      ar[4][4],\\n      ar[4][7],\\n      ar[4][0],\\n      ar[4][3],\\n      ar[4][6],\\n    ];\\n\\n    temp[5] = ar[5];\\n    return temp;\\n  };\\n\\n  var UfuncCode = \`var Ufunc = () => {\\n    m(U);\\n    m = m;  // This triggers the DOM update\\n  };\`;\\n\\n  var corners = () => {\\n    m(Rz)(F)(Rz)(B)(B)(R)(Fz)(Rz)(B)(B)(R)(R);\\n    m = m;\\n  };\\n\\n  var triclock = () => {\\n    m(Cx)(Cx)(Uz)(Cx)(U)(U)(Cx)(Cx)(Cx)(Uz)(Cx)(Cx);\\n    m = m;\\n  };\\n\\n  var tricounterclock = () => {\\n    m(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(Cx)(U)(Cx)(Cx);\\n    m = m;\\n  };\\n\\n  var edgesOpposite = () => {\\n    m(Cx)(Cx)(Uz)(Cx)(Cx)(U)(U)(Cx)(Cx)(Uz)(Cx)(Cx);\\n    m = m;\\n  };\\n\\n  var oppH1 = () => {\\n    m(R)(U)(Rz)(U)(R)(Uz)(Rz)(U)(R)(U)(U)(Rz);\\n    m = m;\\n  };\\n\\n  var oppH2 = () => {\\n    m(F)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(Fz);\\n    m = m;\\n  };\\n\\n  var oppH3 = () => {\\n    m(R)(U)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz);\\n    m = m;\\n  };\\n\\n  var edgesAdjacent = () => {\\n    console.log(\\"In edgesAdjacent\\");\\n    m(Cx)(Cx)(U)(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(U)(U)(Cx)(U)(U);\\n    m = m;\\n  };\\n\\n  var doubleFish = () => {\\n    m(Rz)(F)(R)(Bz)(Rz)(Fz)(R)(B);\\n    m = m;\\n  };\\n\\n  var sune = () => {\\n    m(R)(U)(Rz)(U)(R)(U)(U)(Rz);\\n    m = m;\\n  };\\n\\n  var antisune = () => {\\n    m(R)(U)(U)(Rz)(Uz)(R)(Uz)(Rz);\\n    m = m;\\n  };\\n\\n  var sexy = () => {\\n    m(R)(U)(Rz)(Uz);\\n    m = m;\\n  };\\n  var reverse_sexy = () => {\\n    m(U)(R)(Uz)(Rz);\\n    m = m;\\n  };\\n\\n  var orient_corners = () => {\\n    m(U)(R)(Uz)(Lz)(U)(Rz)(Uz)(L);\\n    m = m;\\n  };\\n\\n  var reverse_orient_corners = () => {\\n    m(Lz)(U)(R)(Uz)(L)(U)(Rz)(Uz);\\n    m = m;\\n  };\\n\\n  var sledgehammer = () => {\\n    m(Rz)(F)(R)(Fz);\\n    m = m;\\n  };\\n\\n  var niklas = () => {\\n    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);\\n    m = m;\\n  };\\n\\n  var reverse_niklas = () => {\\n    m(Lz)(U)(R)(Uz)(L)(U)(Rz);\\n    m = m;\\n  };\\n\\n  var Jb_Perm = () => {\\n    m(R)(U)(Rz)(Fz)(R)(U)(Rz)(Uz)(Rz)(F)(R)(R)(Uz)(Rz)(Uz);\\n    m = m;\\n  };\\n\\n  var niklas = () => {\\n    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);\\n    m = m;\\n  };\\n\\n  var niklas = () => {\\n    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);\\n    m = m;\\n  };\\n\\n  var cu;\\n  var cu9;\\n  cu = \\"cube1\\";\\n  cu9 = \\"cube9\\";\\n\\n  function rotate9() {\\n    if (cu9 == \\"cube9\\") {\\n      console.log(\\"You bet\\");\\n      cu9 = \\"cube92\\";\\n    } else if (cu9 == \\"cube95\\") cu9 = \\"cube9\\";\\n    else if (cu9 == \\"cube96\\") cu9 = \\"cube92\\";\\n    else if (cu9 == \\"cube97\\") cu9 = \\"cube93\\";\\n    else if (cu9 == \\"cube98\\") cu9 = \\"cube94\\";\\n    else if (cu9 == \\"cube92\\") cu9 = \\"cube93\\";\\n    else if (cu9 == \\"cube93\\") cu9 = \\"cube94\\";\\n    else if (cu9 == \\"cube94\\") cu9 = \\"cube9\\";\\n    else if (cu9 == \\"cube95\\") cu9 = \\"cube96\\";\\n    else if (cu9 == \\"cube96\\") cu9 = \\"cube97\\";\\n    else if (cu9 == \\"cube97\\") cu9 = \\"cube98\\";\\n    else if (cu9 == \\"cube98\\") cu9 = \\"cube9\\";\\n    else return \\"cube9\\";\\n  }\\n\\n  function tilt9() {\\n    if (cu9 == \\"cube9\\") {\\n      cu9 = \\"cube95\\";\\n    } else if (cu9 == \\"cube92\\") {\\n      cu9 = \\"cube96\\";\\n    } else if (cu9 == \\"cube93\\") {\\n      cu9 = \\"cube97\\";\\n    } else if (cu9 == \\"cube94\\") {\\n      cu9 = \\"cube98\\";\\n    } else if (cu9 == \\"cube98\\") cu9 = \\"cube95\\";\\n    else if (cu9 == \\"cube92\\") cu9 = \\"cube93\\";\\n    else if (cu9 == \\"cube93\\") cu9 = \\"cube94\\";\\n    else if (cu9 == \\"cube94\\") cu9 = \\"cube95\\";\\n    else if (cu9 == \\"cube95\\") cu9 = \\"cube96\\";\\n    else if (cu9 == \\"cube96\\") cu9 = \\"cube97\\";\\n    else if (cu9 == \\"cube97\\") cu9 = \\"cube98\\";\\n    else if (cu9 == \\"cube98\\") cu9 = \\"cube95\\";\\n    else return \\"cube9\\";\\n  }\\n\\n  function rotate() {\\n    if (cu == \\"cube1\\") cu = \\"cube3\\";\\n    else if (cu == \\"cube2\\") cu = \\"cube4\\";\\n    else if (cu == \\"cube3\\") cu = \\"cube2\\";\\n    else if (cu == \\"cube4\\") cu = \\"cube1\\";\\n    else if (cu == \\"cube5\\") cu = \\"cube6\\";\\n    else if (cu == \\"cube6\\") cu = \\"cube7\\";\\n    else if (cu == \\"cube7\\") cu = \\"cube8\\";\\n    else if (cu == \\"cube8\\") cu = \\"cube5\\";\\n    else return \\"cube1\\";\\n  }\\n\\n  function rotate2() {\\n    rotate();\\n    rotate();\\n    rotate();\\n  }\\n\\n  var nums = [\\n    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,\\n  ];\\n  function id(x) {\\n    return x;\\n  }\\n\\n  var keep;\\n\\n  var moves = [\\n    Cx,\\n    Cz,\\n    U,\\n    D,\\n    F,\\n    B,\\n    Cx,\\n    Cy,\\n    U,\\n    D,\\n    B,\\n    R,\\n    L,\\n    Cx,\\n    D,\\n    Cz,\\n    B,\\n    U,\\n    R,\\n    L,\\n    F,\\n    Cy,\\n    Cz,\\n    Cx,\\n    Cy,\\n    L,\\n    F,\\n    B,\\n    Cx,\\n    Cy,\\n    Cz,\\n    U,\\n    D,\\n    R,\\n    L,\\n    F,\\n    Cx,\\n    D,\\n    Cy,\\n    U,\\n  ];\\n\\n  console.log(\\"moves.length is\\", moves.length);\\n\\n  function shu() {\\n    index = 1;\\n    for (let n = 0; n < 40; n += 1) {\\n      m(moves[Math.floor(Math.random() * 40)]);\\n    }\\n    m = m;\\n  }\\n\\n  function freeze() {\\n    keep = [...m(dF3ar)];\\n  }\\n\\n  function getSaved() {\\n    m(() => m2(dF3x));\\n    m = m;\\n  }\\n\\n  function handleEvent(e) {\\n    console.log(e.keyCode);\\n    if (e.keyCode === 85) m(Uz);\\n    else if (e.keyCode === 117) m(U);\\n    else if (e.keyCode === 68) m(Dz);\\n    else if (e.keyCode === 100) m(D);\\n    else if (e.keyCode === 82) m(Rz);\\n    else if (e.keyCode === 114) m(R);\\n    else if (e.keyCode === 76) m(Lz);\\n    else if (e.keyCode === 108) m(L);\\n    else if (e.keyCode === 70) m(Fz);\\n    else if (e.keyCode === 102) m(F);\\n    else if (e.keyCode === 66) m(Bz);\\n    else if (e.keyCode === 98) m(B);\\n    else if (e.keyCode === 77) m(Cxr);\\n    else if (e.keyCode === 109) m(Cx);\\n    else if (e.keyCode === 69) m(Cyr);\\n    else if (e.keyCode === 101) m(Cy);\\n    else if (e.keyCode === 83) m(Czr);\\n    else if (e.keyCode === 115) m(Cz);\\n    else if (e.keyCode === 120) m(Xro);\\n    else if (e.keyCode === 88) m(Xror);\\n    else if (e.keyCode === 121) m(Yro);\\n    else if (e.keyCode === 89) m(Yror);\\n    else if (e.keyCode === 122) m(Zro);\\n    else if (e.keyCode === 90) m(Zror);\\n    else if (e.keyCode === 119) shu();\\n    else if (e.keyCode === 118) Start();\\n    else if (e.keyCode === 113) reverse();\\n    else if (e.keyCode === 105) previous();\\n    else if (e.keyCode === 73) getSaved();\\n    else if (e.keyCode === 111) save();\\n    // else if (e.keyCode === 116) rotate();\\n    m = m;\\n  }\\n  var handleEventCode = \`function handleEvent(e) { \\n    console.log(e.keyCode);\\n         if (e.keyCode === 85)  m(Uz);\\n    else if (e.keyCode === 117) m(U);\\n    else if (e.keyCode === 68)  m(Dz);\\n    else if (e.keyCode === 100) m(D);\\n    else if (e.keyCode === 82)  m(Rz);\\n    else if (e.keyCode === 114) m(R);\\n    else if (e.keyCode === 76)  m(Lz);\\n    else if (e.keyCode === 108) m(L);\\n    else if (e.keyCode === 70)  m(Fz);\\n    else if (e.keyCode === 102) m(F);\\n    else if (e.keyCode === 66)  m(Bz);\\n    else if (e.keyCode === 98)  m(B);\\n    else if (e.keyCode === 77)  m(Cxr);\\n    else if (e.keyCode === 109) m(Cx);\\n    else if (e.keyCode === 69)  m(Cyr);\\n    else if (e.keyCode === 101) m(Cy);\\n    else if (e.keyCode === 83)  m(Czr);\\n    else if (e.keyCode === 115) m(Cz);\\n    else if (e.keyCode === 120) m(Xro);\\n    else if (e.keyCode === 88)  m(Xror);  \\n    else if (e.keyCode === 121) m(Yro);\\n    else if (e.keyCode === 89)  m(Yror);\\n    else if (e.keyCode === 122) m(Zro);\\n    else if (e.keyCode === 90)  m(Zror);\\n    else if (e.keyCode === 119) shu();\\n    else if (e.keyCode === 118) Start();\\n    else if (e.keyCode === 113) reverse();\\n    else if (e.keyCode === 105) previous();\\n    else if (e.keyCode === 73) getSaved();\\n    else if (e.keyCode === 111) save();\\n    // else if (e.keyCode === 116) rotate(); \\n    m = m;  // In Svelte, this updates the DOM\\n  }\`;\\n\\n  var var2 = \`var cubeStart = [...[bb, gg, rr, oo, yy, ww]];\`;\\n\\n  var front = \`      <div class=\\"face front\\">\\n        <div class=\\"grid\\">\\n          <div class={m(dF3x)[3][0]} />\\n          <div class={m(dF3x)[3][1]} />\\n          <div class={m(dF3x)[3][2]} />\\n          <div class={m(dF3x)[3][3]} />\\n          <div class={m(dF3x)[3][4]} />\\n          <div class={m(dF3x)[3][5]} />\\n          <div class={m(dF3x)[3][6]} />\\n          <div class={m(dF3x)[3][7]} />\\n          <div class={m(dF3x)[3][8]} />\\n        </div>\\n      </div>\`;\\n\\n  var orange = \`.orange {\\n    height: 60px;\\n    width: 60px;\\n    background-color: orange;\\n    border-radius: 10px;\\n  }\`;\\n\\n  var dom = \`<div id=\\"steady\\">\\n  <div class=\\"container\\">\\n    <div class={cu}>\\n      <div class=\\"face front\\">\\n        <div class=\\"grid\\" >\\n          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> \\n          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  \\n          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> \\n          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>\\n          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> \\n          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> \\n          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> \\n        </div>\\n      </div>\\n\\n      <div class=\\"face back\\">\\n        <div class=\\"grid\\">\\n          <div class={m(dF3x)[2][8]} />\\n          <div class={m(dF3x)[2][7]} />\\n          <div class={m(dF3x)[2][6]} />\\n          <div class={m(dF3x)[2][5]} />\\n          <div class={m(dF3x)[2][4]} />\\n          <div class={m(dF3x)[2][3]} />\\n          <div class={m(dF3x)[2][2]} />\\n          <div class={m(dF3x)[2][1]} />\\n          <div class={m(dF3x)[2][0]} />\\n        </div>\\n      </div>\\n\\n      <div class=\\"face right\\">\\n        <div class=\\"grid\\">\\n         <div><button class={m(dF3x)[0][0]} on:click = {() => {m = m(Rz)}} /> </div> \\n          <div><button class={m(dF3x)[0][1]} on:click = {() => {m = m(Cz)}} /> </div> \\n         <div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> \\n          <div><button class={m(dF3x)[0][3]} on:click = {() => {m = m(Cy)}} /> </div> \\n          <div> <button class={m(dF3x)[0][4]} on:click = {() => {m = m(Xro)}} /> </div>\\n          <div><button class={m(dF3x)[0][5]} on:click = {() => {m = m(Cyr)}} /> </div> \\n          <div><button class={m(dF3x)[0][6]} on:click = {() => {m = m(Rz)}} /> </div> \\n          <div><button class={m(dF3x)[0][7]} on:click = {() => {m = m(Czr)}} /> </div> \\n          <div><button class={m(dF3x)[0][8]} on:click = {() => {m = m(R)}} /> </div> \\n        </div>\\n      </div>\\n\\n      <div class=\\"face left\\">\\n        <div class=\\"grid\\">\\n          <div class={m(dF3x)[1][0]} />\\n          <div class={m(dF3x)[1][1]} />\\n          <div class={m(dF3x)[1][2]} />\\n          <div class={m(dF3x)[1][3]} />\\n          <div class={m(dF3x)[1][4]} />\\n          <div class={m(dF3x)[1][5]} />\\n          <div class={m(dF3x)[1][6]} />\\n          <div class={m(dF3x)[1][7]} />\\n          <div class={m(dF3x)[1][8]} />\\n        </div>\\n      </div>\\n\\n      <div class=\\"face top\\">\\n        <div class=\\"grid\\">\\n          <div><button class={m(dF3x)[4][0]} on:click = {() => {m = m(Uz)}} /> </div> \\n          <div><button class={m(dF3x)[4][1]} on:click = {() => {m = m(Cx)}} /> </div> \\n          <div><button class={m(dF3x)[4][2]} on:click = {() => {m = m(U)}} /> </div> \\n          <div><button class={m(dF3x)[4][3]} on:click = {() => {m = m(Cz)}} /> </div> \\n          <div> <button class={m(dF3x)[4][4]} on:click = {() => {m = m(Yro)}} /> </div>\\n          <div><button class={m(dF3x)[4][5]} on:click = {() => {m = m(Czr)}} /> </div> \\n          <div><button class={m(dF3x)[4][6]} on:click = {() => {m = m(Uz)}} /> </div> \\n          <div><button class={m(dF3x)[4][7]} on:click = {() => {m = m(Cxr)}} /> </div> \\n          <div><button class={m(dF3x)[4][8]} on:click = {() => {m = m(U)}} /> </div> \\n        </div>\\n      </div>\\n\\n      <div class=\\"face bottom\\">\\n        <div class=\\"grid\\">\\n          <div class={m(dF3x)[5][0]} />\\n          <div class={m(dF3x)[5][1]} />\\n          <div class={m(dF3x)[5][2]} />\\n          <div class={m(dF3x)[5][3]} />\\n          <div class={m(dF3x)[5][4]} />\\n          <div class={m(dF3x)[5][5]} />\\n          <div class={m(dF3x)[5][6]} />\\n          <div class={m(dF3x)[5][7]} />\\n          <div class={m(dF3x)[5][8]} />\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\`;\\n\\n  var a = 0;\\n  var b = 0;\\n  var classCode = \`classes={m(dF3x)[a][b]}\`;\\n\\n  var basic = \`function M (x) {\\n  return function go (func) {\\n    if (func === dF3x) return x;\\n    else x = func(x);\\n    return go;\\n  }\`;\\n\\n  var log = console.log;\\n\\n  var Mcode = \`function M(x, ar = []) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      if (func === dF3ar) return ar;\\n      else x = func(x);\\n      ar.push(func);\\n      return go;\\n    };\\n  };\\n  var dF3x = () => {}\\n  var dF3ar = () => {};\`;\\n\\n  var orangeSide = \`    <div class=\\"face front\\">\\n        <div class=\\"grid\\" >\\n          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> \\n          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  \\n          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> \\n          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>\\n          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> \\n          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> \\n          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> \\n          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> \\n        </div>\\n      </div>\`;\\n\\n  var Mdis = \`    function M (x) {\\n      return function\`;\\n\\n  var Mplay = \`              go (func) {\\n        if (func === dF3x) return x;\\n        else x = func(x);\\n        return go;\\n      }\`;\\n  var Mend = \`    }\\n    var dF3x = () => {}; \`; // Triggers return of x;\\n\\n  var demoButtons = \`<div >\\n          <button style=\\"background-color:{m(dF3x)[3][0]}; color: black; font-size:30px\\"   on:click = {() => {m = m(F)}}>m = m(F) </button>  \\n          <button style=\\"background-color:{m(dF3x)[3][1]}; color: black; font-size:30px\\"   on:click = {() => {m = m(Cx)}}>m = m(Cx) </button>  \\n          <button style=\\"background-color:{m(dF3x)[3][2]}; color: black; font-size:30px\\"   on:click = {() => {m = m(L)}}>m = m(L) </button>  \\n         \\n    </div>\`;\\n\\n  var elapsedTime = 0;\\n  function et() {\\n    m(dF3ar).length = 0;\\n    var start = new Date();\\n    let k;\\n    for (k = 0; k < 10000; k++) {\\n      shu();\\n      m(dF3ar).length = 0;\\n    }\\n    elapsedTime = new Date() - start;\\n    console.log(\\"k is\\", k);\\n    return elapsedTime;\\n  }\\n\\n  function et2() {\\n    var start = new Date();\\n    let k;\\n    for (k = 0; k < 10000; k++) {\\n      shu();\\n    }\\n    elapsedTime = new Date() - start;\\n    console.log(\\"k is\\", k);\\n    return elapsedTime;\\n  }\\n\\n  var etCode = \`function et () {\\n    m(dF3ar).length = 0;  // Begin with an empty array.\\n    var start = new Date();  \\n    let k;\\n    for (k = 0; k < 10000; k++) {\\n        shu();\\n        m(dF3ar).length = 0;  // empty the array.\\n    }\\n    elapsedTime = new Date() - start;\\n    return elapsedTime;  \\n}\`;\\n\\n  var et2Code = \`function et2() {\\n    var start = new Date();\\n    let k;\\n    for (k = 0; k < 10000; k++) {\\n      shu();\\n    }\\n    elapsedTime = new Date() - start;\\n    return elapsedTime;\\n  }\`;\\n\\n  var colors = \`.blue {\\n    height: 60px;\\n    width: 60px;\\n    background-color: rgb(116, 116, 253);\\n    border-radius: 10px;\\n  }\\n  .green {\\n    height: 60px;\\n    width: 60px;\\n    background-color: rgb(76, 251, 76);\\n    border-radius: 10px;\\n  }\\n  .red {\\n    height: 60px;\\n    width: 60px;\\n    background-color: rgb(252, 97, 97);\\n    border-radius: 10px;\\n  }\\n  .orange {\\n    height: 60px;\\n    width: 60px;\\n    background-color: orange;\\n    border-radius: 10px;\\n  }\\n  .yellow {\\n    height: 60px;\\n    width: 60px;\\n    background-color: yellow;\\n    border-radius: 10px;\\n  }\\n  .white {\\n    height: 60px;\\n    width: 60px;\\n    background-color: white;\\n    border-radius: 10px;\\n  } \`;\\n\\nvar general = \`    <div> \\n        <button class={m(dF3x)[a][b]} on:click={() => {m = m(func)}}/>\\n    </div> \`\\n\\nvar precise = \`    <div> \\n        <button class={m(dF3x)[3][0]} on:click={() => {m = m(Fz)}}/>\\n    </div> \`\\n\\n\\n\\n\\nStart();\\n  // ***********************************************************\\n  // ***********************************************************\\n  // ***********************************************************\\n\\n<\/script>\\n\\n\\n\\n<svelte:window on:keypress={handleEvent} />\\n<section class=\\"columns\\">\\n    <div style=\\"width: 70%\\">\\n\\n<h1>A Virtual Rubik's Cube</h1>\\n\\n\\n    <p> For the virtual Rubik's cube, this slightly modified version of the basic m-M(x) outer function, 'M', (presented on the <a href=\\"./\\">Home page</a>) will be used:</p>\\n<pre>{test7}</pre>\\n    <p> \\"ar\\" was added to facilitate reversing any number of moves by repeatedly pressing \\"Q\\" or clicking \\"Reverse.\\" The surprisingly concise code enabling this functionality is shown further down this page.</p>\\n<p>The following reset code runs every time you press \\"V\\" or click the \\"Start\\" button:   \\n    \\n<pre> m = M([ ['{m(dF3x)[0][0]}','{m(dF3x)[0][1]}','{m(dF3x)[0][2]}','{m(dF3x)[0][3]}','{m(dF3x)[0][4]}','{m(dF3x)[0][5]}','{m(dF3x)[0][6]}','{m(dF3x)[0][7]}', '{m(dF3x)[0][8]}'],  // <span style=\\"color:red\\">Right side</span>\\n['{m(dF3x)[1][0]}','{m(dF3x)[1][1]}','{m(dF3x)[1][2]}','{m(dF3x)[1][3]}','{m(dF3x)[1][4]}','{m(dF3x)[1][5]}','{m(dF3x)[1][6]}','{m(dF3x)[1][7]}', '{m(dF3x)[1][8]}'],\\n['{m(dF3x)[2][0]}','{m(dF3x)[2][1]}','{m(dF3x)[2][2]}','{m(dF3x)[2][3]}','{m(dF3x)[2][4]}','{m(dF3x)[2][5]}','{m(dF3x)[2][6]}','{m(dF3x)[2][7]}', '{m(dF3x)[2][8]}'],\\n['{m(dF3x)[3][0]}','{m(dF3x)[3][1]}','{m(dF3x)[3][2]}','{m(dF3x)[3][3]}','{m(dF3x)[3][4]}','{m(dF3x)[3][5]}','{m(dF3x)[3][6]}','{m(dF3x)[3][7]}', '{m(dF3x)[3][8]}'],   // <span style=\\"color:red\\">Front</span>\\n['{m(dF3x)[4][0]}','{m(dF3x)[4][1]}','{m(dF3x)[4][2]}','{m(dF3x)[4][3]}','{m(dF3x)[4][4]}','{m(dF3x)[4][5]}','{m(dF3x)[4][6]}','{m(dF3x)[4][7]}', '{m(dF3x)[4][8]}'],  // <span style=\\"color:red\\">Top</span>\\n['{m(dF3x)[5][0]}','{m(dF3x)[5][1]}','{m(dF3x)[5][2]}','{m(dF3x)[5][3]}','{m(dF3x)[5][4]}','{m(dF3x)[5][5]}','{m(dF3x)[5][6]}','{m(dF3x)[5][7]}', '{m(dF3x)[5][8]}'] ]) } </pre>\\n\\n\\n<p> As you see, x in the m-M(x) closure is an array of six nine-member arrays of strings. The callbacks triggered by mouse clicks and key presses operate on x in the closure, rearranging the strings without disturbing the structure of an array of six nine-member arrays, and maintaining exactly nine of each color of string.   </p>\\n<h2> The Browser Image Changes Automatically</h2>\\n<p> Each of the 27 divs to which users have access (front, top, and right side) have the general structure:\\n<pre>{general}</pre>  \\n<p> For example, the upper left corner of the front face is:\\n<pre>{precise}</pre>  \\n<p> The CSS class of the upper left corner of the front face is \\"orange\\" in the start cube. Press \\"L\\" twice, and notice that m(dF3)[3][0] changed to \\"red.\\" At any given time, m(dF3x)[3][0] resolves to one of six strings in the m-M(x) closure, which is the name of one of six classes in the DOM. The class \\"orange\\" specifies \\"background-color: orange\\", the class \\"green\\" specifies \\"background-color: green\\". and so forth.</p>\\n\\n\\n\\n        <br />\\n        <button on:click={() => (m = m(Xro))}>X rotate</button>\\n        <button on:click={() => (m = m(Yro))}>Y rotate</button>\\n        <button on:click={() => (m = m(Zro))}>Z rotate</button>\\n        <span style=\\"font-size:25px\\">\\n            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:\\n        </span> <span style=\\"font-weight:bold; font-size:30px\\">{Sally}</span>\\n        <br />\\n        <button on:click={() => (m = m(Xror))}>X back</button>\\n        <button on:click={() => (m = m(Yror))}>Y back</button>\\n        <button on:click={() => (m = m(Zror))}>Z back</button>\\n\\n        <br />\\n        <button on:click={() => (m = m(U))}>U</button>\\n        <button on:click={() => (m = m(D))}>D</button>\\n        <button on:click={() => (m = m(R))}>R</button>\\n        <button on:click={() => (m = m(L))}>L</button>\\n        <button on:click={() => (m = m(F))}>F</button>\\n        <button on:click={() => (m = m(B))}>B</button>\\n        <button on:click={() => (m = m(Cx))}>M</button>\\n        <button on:click={() => (m = m(Cy))}>E</button>\\n        <button on:click={() => (m = m(Cz))}>S</button>\\n        <br />\\n        <button on:click={() => (m = m(Uz))}>U'</button>\\n        <button on:click={() => (m = m(Dz))}>D'</button>\\n        <button on:click={() => (m = m(Rz))}>R'</button>\\n        <button on:click={() => (m = m(Lz))}>L'</button>\\n        <button on:click={() => (m = m(Fz))}>F'</button>\\n        <button on:click={() => (m = m(Bz))}>B'</button>\\n        <button on:click={() => (m = m(Cxr))}>M'</button>\\n        <button on:click={() => (m = m(Cyr))}>E'</button>\\n        <button on:click={() => (m = m(Czr))}>S'</button>\\n        <div style=\\"margin-left: 1px\\">\\n            <p>\\n                Pressing the u, d, r, l, f, b, m, e, s, x, y, and z keys has the\\n                same effect as clicking the corresponding (capitalized) buttons.\\n                Holding down the \\"Shift\\" key (or activating \\"CapsLock\\") while\\n                pressing the keys causes the reverse effect. Pressing v, w, and\\n                q is equivalent to clicking on Start, Scramble, and Reverse,\\n                respectively.\\n            </p>\\n            <p>\\n                Clicking on either of two left corners of each face of the cube\\n                causes that face to rotate counterclockwise 90 degrees. Clicking\\n                on either of two right corners of each face of the cube causes\\n                that face to rotate clockwise 90 degrees. Clicking on edges\\n                rotates center sections, rather than faces. Clicking on the centers\\n                of the right, top, and front rotates the entire cube clockwise on the X, Y\\n                and Z axes, respectively. \\n            </p>\\n            <p>\\n                Of course, nothing actually rotates. Rearranging references to\\n                strings in the m-M(x) closure creates the illusion in the\\n                browser that part or all of the cube rotated.\\n            </p>\\n\\n            <h2 style=\\"text-align: center;\\">Some Algorithm Shortcuts</h2>\\n            <p></p>\\n            <button on:click={corners}\\n                >PLL Corners: R' F R' B2 R F' R' B2 R2</button\\n            >\\n            <br />\\n            <button on:click={triclock}\\n                >Triangle Clockwise: M2 U' M U2 M' U' M2</button\\n            >\\n            <br />\\n            <button on:click={tricounterclock}\\n                >Triangle CounterClockwise: M2 U M U2 M' U M2</button\\n            >\\n            <br />\\n            <button on:click={edgesOpposite}\\n                >Edges Opposite: M M Uz M M U U M M Uz M M</button\\n            >\\n            <br />\\n            <button on:click={edgesAdjacent}\\n                >Edges Adjacent: M M U M M U M U U M M U U M U U</button\\n            >\\n            <br />\\n            <button on:click={doubleFish}\\n                >doubleFish R' F R B' R' F' R B\\n            </button>\\n            <br />\\n            <button on:click={sune}>Sune: R U R' U R U2 R'</button>\\n            <br />\\n            <button on:click={antisune}>Antisune: R U2 R' U' R U' R' </button>\\n            <br />\\n            <button on:click={sexy}>Sexy: R U R' U'</button>\\n            <br />\\n            <button on:click={reverse_sexy}>Reverse Sexy: U R U' R'</button>\\n            <br />\\n            <button on:click={orient_corners}\\n                >Revolve: U R U' L' U R' U' L</button\\n            >\\n            <br />\\n            <button on:click={reverse_orient_corners}\\n                >Reverse Revolve: L' U R U' L U R' U'</button\\n            >\\n            <br />\\n            <button on:click={sledgehammer}>Sledgehammer: R' F R F' </button>\\n            <br />\\n\\n            <button on:click={oppH1}>oppH1: R U R' U R U' R' U R U U R'</button>\\n            <br />\\n            <button on:click={oppH3}\\n                >oppH3: F R U R' U' R U R' U' R U R' U' F'</button\\n            >\\n            <br />\\n            <button on:click={niklas}>Niklas: R U' L' U R' U' L</button>\\n            <br />\\n            <button on:click={reverse_niklas}\\n                >Reverse Niklas: L' U R U' L U R'</button\\n            >\\n            <p>\\n                Press the \\"v\\" key or click <button on:click={Start}\\n                    >Start</button\\n                >\\n                to see each face of the cube with 9 identically colored divs.\\n                Click on the\\n                <button on:click={Xrotate}>X rotate</button>,\\n                <button on:click={Yrotate}>Y rotate</button>, and\\n                <button on:click={Zrotate}>Z rotate</button>\\n                buttons to see the main cube from various angles.\\n            </p>\\n\\n            <p>\\n                See the <a href=\\"./\\">previous page</a> for detailed definitions.\\n                This page shows how images in the DOM are made to react to rearrangements\\n                of the elements of a six nine-member arrays of strings in the script,\\n                User mouse clicks and key presses call m(func), where func is some\\n                function and m is defined as m = M(x) where x is the array of six\\n                nine-member arrays of strings mentioned above.\\n            </p>\\n        </div>\\n    </div>\\n</section>\\n<!---->\\n<div id=\\"steady\\">\\n    <div class=\\"container\\">\\n        <div class={cu}>\\n            <div class=\\"face front\\">\\n                <div class=\\"grid\\">\\n                    <div> \\n                        <button\\n                            class={m(dF3x)[3][0]}\\n                            on:click={() => {\\n                                m = m(Fz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div> \\n                        <button\\n                            class={m(dF3x)[3][1]}\\n                            on:click={() => {\\n                                m = m(Cx);\\n                            }}\\n                        />\\n                    </div>\\n                    <div> \\n                        <button\\n                            class={m(dF3x)[3][2]}\\n                            on:click={() => {\\n                                m = m(F);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][3]}\\n                            on:click={() => {\\n                                m = m(Cy);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][4]}\\n                            on:click={() => {\\n                                m = m(Zro);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][5]}\\n                            on:click={() => {\\n                                m = m(Cyr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][6]}\\n                            on:click={() => {\\n                                m = m(Fz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][7]}\\n                            on:click={() => {\\n                                m = m(Cxr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[3][8]}\\n                            on:click={() => {\\n                                m = m(F);\\n                            }}\\n                        />\\n                    </div>\\n                </div>\\n            </div>\\n\\n           <!----> <div class=\\"face back\\">\\n                <div class=\\"grid\\">\\n                    <div class={m(dF3x)[2][8]} />\\n                    <div class={m(dF3x)[2][7]} />\\n                    <div class={m(dF3x)[2][6]} />\\n                    <div class={m(dF3x)[2][5]} />\\n                    <div class={m(dF3x)[2][4]} />\\n                    <div class={m(dF3x)[2][3]} />\\n                    <div class={m(dF3x)[2][2]} />\\n                    <div class={m(dF3x)[2][1]} />\\n                    <div class={m(dF3x)[2][0]} />\\n                </div>\\n            </div>\\n\\n            <div class=\\"face right\\">\\n                <div class=\\"grid\\">\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][0]}\\n                            on:click={() => {\\n                                m = m(Rz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][1]}\\n                            on:click={() => {\\n                                m = m(Cz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][2]}\\n                            on:click={() => {\\n                                m = m(R);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][3]}\\n                            on:click={() => {\\n                                m = m(Cy);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][4]}\\n                            on:click={() => {\\n                                m = m(Xro);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][5]}\\n                            on:click={() => {\\n                                m = m(Cyr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][6]}\\n                            on:click={() => {\\n                                m = m(Rz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][7]}\\n                            on:click={() => {\\n                                m = m(Czr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[0][8]}\\n                            on:click={() => {\\n                                m = m(R);\\n                            }}\\n                        />\\n                    </div>\\n                </div>\\n            </div>\\n\\n            <div class=\\"face left\\">\\n                <div class=\\"grid\\">\\n                    <div><button class={m(dF3x)[1][0]} /></div>\\n                    <div><button class={m(dF3x)[1][1]} /></div>\\n                    <div><button class={m(dF3x)[1][2]} /></div>\\n                    <div><button class={m(dF3x)[1][3]} /></div>\\n                    <div><button class={m(dF3x)[1][4]} /></div>\\n                    <div><button class={m(dF3x)[1][5]} /></div>\\n                    <div><button class={m(dF3x)[1][6]} /></div>\\n                    <div><button class={m(dF3x)[1][7]} /></div>\\n                    <div><button class={m(dF3x)[1][8]} /></div>\\n                </div>\\n            </div>\\n\\n            <div class=\\"face top\\">\\n                <div class=\\"grid\\">\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][0]}\\n                            on:click={() => {\\n                                m = m(Uz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][1]}\\n                            on:click={() => {\\n                                m = m(Cx);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][2]}\\n                            on:click={() => {\\n                                m = m(U);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][3]}\\n                            on:click={() => {\\n                                m = m(Cz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][4]}\\n                            on:click={() => {\\n                                m = m(Yro);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][5]}\\n                            on:click={() => {\\n                                m = m(Czr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][6]}\\n                            on:click={() => {\\n                                m = m(Uz);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][7]}\\n                            on:click={() => {\\n                                m = m(Cxr);\\n                            }}\\n                        />\\n                    </div>\\n                    <div>\\n                        <button\\n                            class={m(dF3x)[4][8]}\\n                            on:click={() => {\\n                                m = m(U);\\n                            }}\\n                        />\\n                    </div>\\n                </div>\\n            </div>\\n\\n            <div class=\\"face bottom\\">\\n                <div class=\\"grid\\">\\n                    <div><button class={m(dF3x)[5][0]} /></div>\\n                    <div><button class={m(dF3x)[5][1]} /></div>\\n                    <div><button class={m(dF3x)[5][2]} /></div>\\n                    <div><button class={m(dF3x)[5][3]} /></div>\\n                    <div><button class={m(dF3x)[5][4]} /></div>\\n                    <div><button class={m(dF3x)[5][5]} /></div>\\n                    <div><button class={m(dF3x)[5][6]} /></div>\\n                    <div><button class={m(dF3x)[5][7]} /></div>\\n                    <div><button class={m(dF3x)[5][8]} /></div>\\n                </div>\\n            </div>\\n        </div>\\n        <br /><br /><br /><br />\\n        <button on:click={Start}>Start</button>\\n        <br /><br />\\n        <button on:click={shu}>Scramble</button>\\n    </div>\\n</div>\\n\\n<section id=\\"coolcow\\" class=\\"columns\\">\\n    <div style=\\"width: 70%\\">\\n        <p id=\\"cow8\\">\\n            Continued from the <a href=\\"./#cow7\\"> previous page </a>\\n        </p>\\n        <p>\\n            Clicking one of the buttons (below) causes the function displayed on\\n            it to run. For example, click \\"R\\" calls the function R. Pressing the\\n            \\"R\\" key and clicking the upper or lower right squares does the same\\n            thing. code on its face to execute. For example, clicking on the m =\\n            m(L) button causes <br />&#160;&#160;&#160; (1) m(L) to execute,\\n            which causes <br /> &#160;&#160;&#160; (2) x in the m-M(x) closure to\\n            mutate into L(x).\\n        </p>\\n\\n        <p>\\n            For the sake of clarity, I'll spell this out in more than the usual\\n            amount of detail: The background color of a button or div can be set\\n            with x in the m-M(x) closure in these two ways: background-color =\\n            m(dF3x)[a][b] or class = m(df3x)[a][b] where a is 0, 1, 2, 3, 4, or\\n            5 and b is 0 or 8, or any number between 0 and 8. When a and b are\\n            in these ranges, the expression m(dF3x)[a][b] resolves to\\n            \\"blue\\",\\"green\\", \\"red\\", \\"orange\\", \\"yellow\\", or \\"white\\". The classes\\n            blue, green, red, orange, yellow, and white have \\"background-color\\"\\n            elements corresponding to their names. So, for example, on the\\n            starting (solved) cube, the expression m(dF3x)[0][0] resolves to the\\n            string \\"blue\\" causing the statements \\"style = 'background-color:\\n            m(dF3x)[0][0]' and \\"class = 'm(dF3x)[0][0]'\\" to result in blue\\n            backgrounds.\\n        </p>\\n\\n        <p>\\n            m(dF3x)[3] is x's fourth-from-the-left nine-element array of\\n            strings. When the cube is solved, each of its elements are variables\\n            pointing to the string \\"orange.\\" The three buttons below have the\\n            colors of the first three elements of the fourth element of x\\n            because the buttons contain the statements \\"style = 'm(dF3x)[3][0],\\n            m(dF3x)[3][1], and m(dF3x)[3][2]. Notice how the colors of the\\n            buttons correspond to those of the top row of the front face of the\\n            Rubik's cube representation. Repeatedly pressing \\"Scramble\\"\\n            illustrates this.\\n        </p>\\n\\n        <div>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][0]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][0] = {m(dF3x)[3][0]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][1]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][1] = {m(dF3x)[3][1]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][2]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][2] = {m(dF3x)[3][2]}\\n            </button>\\n            <br /><br />\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][3]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][3] = {m(dF3x)[3][3]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][4]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][4] = {m(dF3x)[3][4]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][5]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][5] = {m(dF3x)[3][5]}\\n            </button>\\n            <br /><br />\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][6]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][6] = {m(dF3x)[3][6]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][7]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][7] = {m(dF3x)[3][7]}\\n            </button>\\n            <button\\n                style=\\"background-color:{m(\\n                    dF3x,\\n                )[3][8]}; color: black; font-size:30px\\"\\n                on:click={() => {}}\\n                >m(dF3x)[3][8] = {m(dF3x)[3][2]}\\n            </button>\\n        </div>\\n        <h2>Rotating the Left, Back, and Bottom Faces</h2>\\n        <p>METHOD ONE -- The fastest method:</p>\\n        <p>\\n            The left, back, and bottom faces can be turned clockwise by pressing\\n            L, B, and D, respectively. Hold down the SHIFT key for\\n            counterclockwise rotation.\\n        </p>\\n        <p>METHOD TWO -- Clicking on the cube</p>\\n        <p>\\n            Click the top center 3 times to bring the green face forward. <br />\\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right top or bottom square.\\n            <br />\\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the top center 3 more times, bringing\\n            the red face forward. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click\\n            the right top or bottom square. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\n            Click the top center two times to re-orient the cube. <br />\\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right center to bring up the\\n            bottom face. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right\\n            top or bottom square. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the\\n            right center 3 more times to re-orient the cube.\\n        </p>\\n\\n        <p>\\n            This is the expected result of pressing \\"LBD\\" or following the\\n            instructions of Method 2 (above): <img\\n                src={clickDemo}\\n                alt=\\"Click demo\\"\\n                style=\\"width:150px;height:155px;\\"\\n            />\\n        </p>\\n\\n        <h2>The Amazing Reverse Function</h2>\\n        <p>\\n            The value held n the closure m-M(x) is transformed whenever a user\\n            presses certain keys or clicks the mouse over certain parts of the\\n            browser display. These actions call m(func), automatically resulting\\n            in the mutation of x into func(x). Such mutations automatically\\n            change parts of the DOM where x, exposed as m(dF3x), determines the\\n            CSS background-color of elements. This is done directly as\\n            \\"background-color = 'm(dF3x)[j][k]\\" or indirectly as \\"class =\\n            'm(dF3x)[j][k]\\" for integers j and k in the ranges of 0,6 for j and\\n            0,8 for k.\\n        </p>\\n        <p>\\n            The definitions of \\"func\\" in m(func), as described above, can be\\n            found selectively at <a href=\\"./\\">Home</a> and comprehensively in\\n            the\\n            <a href=\\"https://github.com/dschalk/Recursive-Closures\\"\\n                >Github repository</a\\n            >. \\"reverse\\" works differently. It works with this modified version\\n            of M:\\n        </p>\\n        <pre>{newMcode}</pre>\\n\\n        <p>\\n            Clicking the \\"Reverse\\" button or pressing the Q key does not\\n            directly cause m to run; they just cause \\"reverse()\\" to run. m is\\n            called twice inside of reverse.\\n        </p>\\n\\n        <pre>{reverseCode}</pre>\\n        <p>\\n            The function reverse works because m(dF3ar) passes ar by reference,\\n            not value. m(dF3ar) in the \\"reverse\\" function refers to the same\\n            location in memory as ar in the m-M(x) closure. Logging \\"m(dF3ar ===\\n            temp (below) while running this application illustrates this.\\n        </p>\\n        <pre>{test7}</pre>\\n        <span id=\\"test\\"></span>\\n\\n        <h2>The elapsed time is {elapsedTime} milliseconds.</h2>\\n\\n        <button on:click={et2}>10,000 Scrambles</button>\\n        <br />\\n        <span style=\\"font-size:25px\\">\\n            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:\\n        </span> <span style=\\"font-weight:bold; font-size:30px\\">{Sally}</span>\\n        <pre>{et2Code}</pre>\\n    </div>\\n    <div></div>\\n</section>\\n\\n<slot />\\n\\n<style>\\n    ::before,\\n    ::after {\\n        box-sizing: border-box;\\n        margin: 0;\\n        padding: 0;\\n    }\\n\\n    .dis {\\n        color: #fe0374;\\n        font-weight: bold;\\n        font-size: 28px;\\n    }\\n\\n    .play {\\n        color: yellow;\\n        font-weight: bold;\\n        font-size: 28px;\\n    }\\n\\n    .light {\\n        color: rgb(172, 231, 243);\\n    }\\n\\n    .cell {\\n        justify-content: center;\\n        align-items: center;\\n        display: flex;\\n        font-family: Arial;\\n        font-size: 3rem;\\n        font-weight: bold;\\n        background: white;\\n    }\\n\\n    .o0::before {\\n        width: 60px;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o0\\";\\n    }\\n\\n    .o1::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o1\\";\\n    }\\n\\n    .o2::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o2\\";\\n    }\\n\\n    .o3::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o3\\";\\n    }\\n\\n    .o4::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o4\\";\\n    }\\n\\n    .o5::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o5\\";\\n    }\\n\\n    .o6::before {\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o6\\";\\n    }\\n\\n    .o7::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o7\\";\\n    }\\n\\n    .o8::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: orange;\\n        content: \\"o8\\";\\n    }\\n\\n    .r0::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r0\\";\\n    }\\n\\n    .r1::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r1\\";\\n    }\\n\\n    .r2::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r2\\";\\n    }\\n\\n    .r3::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r3\\";\\n    }\\n\\n    .r4::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r4\\";\\n    }\\n\\n    .r5::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r5\\";\\n    }\\n\\n    .r6::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r6\\";\\n    }\\n\\n    .r7::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r7\\";\\n    }\\n\\n    .r8::before {\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: red;\\n        content: \\"r8\\";\\n    }\\n\\n    .g0::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g0\\";\\n    }\\n\\n    .g1::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g1\\";\\n    }\\n\\n    .g2::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g2\\";\\n    }\\n\\n    .g3::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g3\\";\\n    }\\n\\n    .g4::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g4\\";\\n    }\\n\\n    .g5::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g5\\";\\n    }\\n\\n    .g6::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g6\\";\\n    }\\n\\n    .g7::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g7\\";\\n    }\\n\\n    .g8::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: green;\\n        content: \\"g8\\";\\n    }\\n\\n    .b0::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b0\\";\\n    }\\n\\n    .b1::before {\\n        color: yellow;\\n        font-size: 40px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b1\\";\\n    }\\n\\n    .b2::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b2\\";\\n    }\\n\\n    .b3::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b3\\";\\n    }\\n\\n    .b4::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b4\\";\\n    }\\n\\n    .b5::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b5\\";\\n    }\\n\\n    .b6::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b6\\";\\n    }\\n\\n    .b7::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b7\\";\\n    }\\n\\n    .b8::before {\\n        color: yellow;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: blue;\\n        content: \\"b8\\";\\n    }\\n\\n    .y0::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y0\\";\\n    }\\n\\n    .y1::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y1\\";\\n    }\\n\\n    .y2::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y2\\";\\n    }\\n\\n    .y3::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y3\\";\\n    }\\n\\n    .y4::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y4\\";\\n    }\\n\\n    .y5::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y5\\";\\n    }\\n\\n    .y6::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y6\\";\\n    }\\n\\n    .y7::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y7\\";\\n    }\\n\\n    .y8::before {\\n        color: blue;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: yellow;\\n        content: \\"y8\\";\\n    }\\n\\n    .w0::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w0\\";\\n    }\\n    .w1::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w1\\";\\n    }\\n\\n    .w2::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w2\\";\\n    }\\n\\n    .w3::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w3\\";\\n    }\\n\\n    .w4::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w4\\";\\n    }\\n\\n    .w5::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w5\\";\\n    }\\n\\n    .w6::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w6\\";\\n    }\\n\\n    .w7::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w7\\";\\n    }\\n\\n    .w8::before {\\n        color: black;\\n        font-size: 42px;\\n        font-weight: bold;\\n        background-color: white;\\n        content: \\"w8\\";\\n    }\\n\\n    .blue {\\n        height: 60px;\\n        width: 60px;\\n        background-color: rgb(116, 116, 253);\\n        border-radius: 10px;\\n    }\\n    .green {\\n        height: 60px;\\n        width: 60px;\\n        background-color: rgb(76, 251, 76);\\n        border-radius: 10px;\\n    }\\n    .red {\\n        height: 60px;\\n        width: 60px;\\n        background-color: rgb(252, 97, 97);\\n        border-radius: 10px;\\n    }\\n    .orange {\\n        height: 60px;\\n        width: 60px;\\n        background-color: orange;\\n        border-radius: 10px;\\n    }\\n    .yellow {\\n        height: 60px;\\n        width: 60px;\\n        background-color: yellow;\\n        border-radius: 10px;\\n    }\\n    .white {\\n        height: 60px;\\n        width: 60px;\\n        background-color: white;\\n        border-radius: 10px;\\n    }\\n\\n    .container {\\n        width: 198px;\\n        height: 198px;\\n        perspective: 1000px;\\n        /*background-color: black; */\\n        /*float: right;*/\\n        margin-right: 7%;\\n        color: aqua;\\n        /*float: right;\\n  margin-right: 35%;\\n  margin-top: 15%; */\\n    }\\n\\n    .grid {\\n        display: grid;\\n        grid-template-columns: repeat(3, 60px);\\n        grid-template-rows: repeat(3, 60px);\\n        grid-gap: 7px;\\n        justify-content: center;\\n    }\\n\\n    .grid2 {\\n        display: grid;\\n        grid-template-columns: repeat(3, 190px);\\n        grid-template-rows: repeat(3, 190px);\\n        grid-gap: 5px;\\n        justify-content: center;\\n    }\\n\\n    .cube2 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-30deg) rotateY(150deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    .cube4 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-30deg) rotateY(60deg);\\n        /* animation: spin 5s infinite linear;*/\\n    }\\n\\n    .cube3 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-30deg) rotateY(240deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    .cube1 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-25deg) rotateY(335deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    .cube5 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-210deg) rotateY(30deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    .cube6 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-210deg) rotateY(120deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    .cube7 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-210deg) rotateY(210deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    .cube8 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-210deg) rotateY(300deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    #cube9 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(25deg) rotateY(155deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    #cube92 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(25deg) rotateY(65deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    #cube93 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(25deg) rotateY(-25deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    #cube94 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(25deg) rotateY(-115deg);\\n        /* animation: spin 5s infinite linear;*/\\n    }\\n\\n    #cube95 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-25deg) rotateY(-205deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    #cube96 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-25deg) rotateY(-295deg);\\n        /*animation: spin 5s infinite linear;*/\\n    }\\n\\n    #cube97 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-25deg) rotateY(335deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n\\n    #cube98 {\\n        transform-style: preserve-3d;\\n        width: 100%;\\n        height: 100%;\\n        position: relative;\\n        transform: rotateX(-25deg) rotateY(245deg);\\n        /*animation: spin 5s infinite linear; */\\n    }\\n    .face {\\n        position: absolute;\\n        width: 100%;\\n        height: 100%;\\n        background-color: grey;\\n    }\\n    .top {\\n        transform: rotateX(90deg) translateZ(100px);\\n    }\\n    .bottom {\\n        transform: rotateX(-90deg) translateZ(100px);\\n    }\\n\\n    .right {\\n        transform: rotateY(90deg) translateZ(100px);\\n    }\\n    .left {\\n        transform: rotateY(-90deg) translateZ(100px);\\n    }\\n\\n    .front {\\n        transform: rotateX(0deg) translateZ(100px);\\n    }\\n    .back {\\n        transform: rotateX(-180deg) translateZ(100px);\\n    }\\n\\n    @keyframes spin {\\n        from {\\n            transform: rotateX(0deg) rotateY(0deg);\\n        }\\n        to {\\n            transform: rotateX(360deg) rotateY(360deg);\\n        }\\n    }\\n\\n    .rite {\\n        float: right;\\n        /* position: absolute;\\n  right: 25%;\\n  top: 12%; */\\n    }\\n\\n    h1 {\\n        text-align: center;\\n        color: #f3c95e;\\n    }\\n\\n    #col-1 {\\n        position: fixed;\\n        width: 50%;\\n        left: 5;\\n        height: 100%;\\n    }\\n\\n    #col-2 {\\n        position: fixed;\\n        right: 0%;\\n        top: 400px;\\n    }\\n\\n    .col-3 {\\n        position: fixed;\\n        right: 12%;\\n        top: 20%;\\n        width: 35%;\\n    }\\n\\n    #steady {\\n        position: fixed;\\n        top: 180px;\\n        left: 75.5%;\\n    }\\n\\n    #steady2 {\\n        position: fixed;\\n        top: 420px;\\n        left: 75.5%;\\n    }\\n\\n    h3 {\\n        color: #ffccff;\\n    }\\n\\n    img {\\n        width: 44%;\\n        height: 44%;\\n    }\\n\\n    .img2 {\\n        width: 150px;\\n        height: 155px;\\n    }\\n\\n    div {\\n        color: blue;\\n    }\\n\\n    h2 {\\n        text-align: center;\\n        font-size: 40px;\\n        color: rgb(255, 134, 198);\\n    }\\n\\n    /* *********************************************************** */\\n    /* *************************************************************** */\\n    /* *************************************************************** */\\n</style>\\n"],"names":[],"mappings":"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"}`
};
function F(ar) {
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
    ar[0][8]
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
    ar[5][2]
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
    ar[3][2]
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
    ar[1][2]
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
    ar[5][8]
  ];
  return temp;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Sally;
  var dF3x = () => {
  };
  var dF3ar = () => {
  };
  function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  }
  var m = M([
    ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
    [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green"
    ],
    ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
    [
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange"
    ],
    [
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow"
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white"
    ]
  ]);
  var test7 = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };`;
  const Start = function Start2() {
    m = M([
      ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      [
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green"
      ],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      [
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange"
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow"
      ],
      [
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white"
      ]
    ]);
  };
  var reverseCode = `function reverse () { 
    let fu = m(dF3ar).pop(); 
    // Removes the function being reversed from x.
    let foo = v => fu(fu(fu(v))); 
    // foo is the inverse of fu.
    m(foo)(dF3ar).pop();     
    // After x = foo(x) reverses fu, foo is popped off of ar.
    m = m;
};`;
  var newMcode = `  function M(x, ar = []) {
      return function go(func) {
        if (func === dF3x) return x;
        if (func === dF3ar) return ar;
        else x = func(x);
        ar.push(func);
        return go;
      };
    }; 
  let m = M(x)`;
  var Cz = function Cz2(ar) {
    let temp = [];
    temp[0] = [
      ar[0][0],
      ar[4][3],
      ar[0][2],
      ar[0][3],
      ar[4][4],
      ar[0][5],
      ar[0][6],
      ar[4][5],
      ar[0][8]
    ];
    temp[1] = [
      ar[1][0],
      ar[5][3],
      ar[1][2],
      ar[1][3],
      ar[5][4],
      ar[1][5],
      ar[1][6],
      ar[5][5],
      ar[1][8]
    ];
    temp[2] = ar[2];
    temp[3] = ar[3];
    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[1][7],
      ar[1][4],
      ar[1][1],
      ar[4][6],
      ar[4][7],
      ar[4][8]
    ];
    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[5][6],
      ar[5][7],
      ar[5][8]
    ];
    return temp;
  };
  var Cx = function Cx2(ar) {
    let temp = [];
    temp[0] = ar[0];
    temp[1] = ar[1];
    temp[2] = [
      ar[2][0],
      ar[5][7],
      ar[2][2],
      ar[2][3],
      ar[5][4],
      ar[2][5],
      ar[2][6],
      ar[5][1],
      ar[2][8]
    ];
    temp[3] = [
      ar[3][0],
      ar[4][1],
      ar[3][2],
      ar[3][3],
      ar[4][4],
      ar[3][5],
      ar[3][6],
      ar[4][7],
      ar[3][8]
    ];
    temp[4] = [
      ar[4][0],
      ar[2][7],
      ar[4][2],
      ar[4][3],
      ar[2][4],
      ar[4][5],
      ar[4][6],
      ar[2][1],
      ar[4][8]
    ];
    temp[5] = [
      ar[5][0],
      ar[3][1],
      ar[5][2],
      ar[5][3],
      ar[3][4],
      ar[5][5],
      ar[5][6],
      ar[3][7],
      ar[5][8]
    ];
    return temp;
  };
  var Cy = function Cy2(ar) {
    let temp = [];
    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[0][6],
      ar[0][7],
      ar[0][8]
    ];
    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[1][6],
      ar[1][7],
      ar[1][8]
    ];
    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[2][6],
      ar[2][7],
      ar[2][8]
    ];
    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[3][6],
      ar[3][7],
      ar[3][8]
    ];
    temp[4] = ar[4];
    temp[5] = ar[5];
    return temp;
  };
  var B = function B2(ar) {
    let temp = [];
    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[5][8],
      ar[0][3],
      ar[0][4],
      ar[5][7],
      ar[0][6],
      ar[0][7],
      ar[5][6]
    ];
    temp[1] = [
      ar[4][2],
      ar[1][1],
      ar[1][2],
      ar[4][1],
      ar[1][4],
      ar[1][5],
      ar[4][0],
      ar[1][7],
      ar[1][8]
    ];
    temp[2] = [
      ar[2][6],
      ar[2][3],
      ar[2][0],
      ar[2][7],
      ar[2][4],
      ar[2][1],
      ar[2][8],
      ar[2][5],
      ar[2][2]
    ];
    temp[3] = ar[3];
    temp[4] = [
      ar[0][2],
      ar[0][5],
      ar[0][8],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[4][6],
      ar[4][7],
      ar[4][8]
    ];
    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[1][0],
      ar[1][3],
      ar[1][6]
    ];
    return temp;
  };
  var D = function D2(ar) {
    let temp = [];
    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[3][6],
      ar[3][7],
      ar[3][8]
    ];
    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[2][6],
      ar[2][7],
      ar[2][8]
    ];
    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[0][6],
      ar[0][7],
      ar[0][8]
    ];
    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[1][6],
      ar[1][7],
      ar[1][8]
    ];
    temp[4] = ar[4];
    temp[5] = [
      ar[5][6],
      ar[5][3],
      ar[5][0],
      ar[5][7],
      ar[5][4],
      ar[5][1],
      ar[5][8],
      ar[5][5],
      ar[5][2]
    ];
    return temp;
  };
  var L = function L2(ar) {
    let temp = [];
    temp[0] = ar[0];
    temp[1] = [
      ar[1][6],
      ar[1][3],
      ar[1][0],
      ar[1][7],
      ar[1][4],
      ar[1][1],
      ar[1][8],
      ar[1][5],
      ar[1][2]
    ];
    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[5][6],
      ar[2][3],
      ar[2][4],
      ar[5][3],
      ar[2][6],
      ar[2][7],
      ar[5][0]
    ];
    temp[3] = [
      ar[4][0],
      ar[3][1],
      ar[3][2],
      ar[4][3],
      ar[3][4],
      ar[3][5],
      ar[4][6],
      ar[3][7],
      ar[3][8]
    ];
    temp[4] = [
      ar[2][8],
      ar[4][1],
      ar[4][2],
      ar[2][5],
      ar[4][4],
      ar[4][5],
      ar[2][2],
      ar[4][7],
      ar[4][8]
    ];
    temp[5] = [
      ar[3][0],
      ar[5][1],
      ar[5][2],
      ar[3][3],
      ar[5][4],
      ar[5][5],
      ar[3][6],
      ar[5][7],
      ar[5][8]
    ];
    return temp;
  };
  var R = function R2(ar) {
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
      ar[0][2]
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
      ar[2][8]
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
      ar[5][8]
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
      ar[3][8]
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
      ar[2][0]
    ];
    return temp;
  };
  var U = function U2(ar) {
    let temp = [];
    temp[0] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[0][6],
      ar[0][7],
      ar[0][8]
    ];
    temp[1] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[1][6],
      ar[1][7],
      ar[1][8]
    ];
    temp[2] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[2][6],
      ar[2][7],
      ar[2][8]
    ];
    temp[3] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[3][6],
      ar[3][7],
      ar[3][8]
    ];
    temp[4] = [
      ar[4][6],
      ar[4][3],
      ar[4][0],
      ar[4][7],
      ar[4][4],
      ar[4][1],
      ar[4][8],
      ar[4][5],
      ar[4][2]
    ];
    temp[5] = ar[5];
    return temp;
  };
  var cu;
  cu = "cube1";
  var moves = [
    Cx,
    Cz,
    U,
    D,
    F,
    B,
    Cx,
    Cy,
    U,
    D,
    B,
    R,
    L,
    Cx,
    D,
    Cz,
    B,
    U,
    R,
    L,
    F,
    Cy,
    Cz,
    Cx,
    Cy,
    L,
    F,
    B,
    Cx,
    Cy,
    Cz,
    U,
    D,
    R,
    L,
    F,
    Cx,
    D,
    Cy,
    U
  ];
  console.log("moves.length is", moves.length);
  var elapsedTime = 0;
  var et2Code = `function et2() {
    var start = new Date();
    let k;
    for (k = 0; k < 10000; k++) {
      shu();
    }
    elapsedTime = new Date() - start;
    return elapsedTime;
  }`;
  var general = `    <div> 
        <button class={m(dF3x)[a][b]} on:click={() => {m = m(func)}}/>
    </div> `;
  var precise = `    <div> 
        <button class={m(dF3x)[3][0]} on:click={() => {m = m(Fz)}}/>
    </div> `;
  Start();
  $$result.css.add(css);
  Sally = m(dF3ar).length;
  return ` <section class="columns svelte-p8iwwg"><div style="width: 70%" class="svelte-p8iwwg"><h1 class="svelte-p8iwwg" data-svelte-h="svelte-1wgqsc0">A Virtual Rubik&#39;s Cube</h1> <p class="svelte-p8iwwg" data-svelte-h="svelte-pelymd">For the virtual Rubik&#39;s cube, this slightly modified version of the basic m-M(x) outer function, &#39;M&#39;, (presented on the <a href="./" class="svelte-p8iwwg">Home page</a>) will be used:</p> <pre class="svelte-p8iwwg">${escape(test7)}</pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-2x4wm7">&quot;ar&quot; was added to facilitate reversing any number of moves by repeatedly pressing &quot;Q&quot; or clicking &quot;Reverse.&quot; The surprisingly concise code enabling this functionality is shown further down this page.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-38etqp">The following reset code runs every time you press &quot;V&quot; or click the &quot;Start&quot; button:   
    
</p><pre class="svelte-p8iwwg"> m = M([ [&#39;${escape(m(dF3x)[0][0])}&#39;,&#39;${escape(m(dF3x)[0][1])}&#39;,&#39;${escape(m(dF3x)[0][2])}&#39;,&#39;${escape(m(dF3x)[0][3])}&#39;,&#39;${escape(m(dF3x)[0][4])}&#39;,&#39;${escape(m(dF3x)[0][5])}&#39;,&#39;${escape(m(dF3x)[0][6])}&#39;,&#39;${escape(m(dF3x)[0][7])}&#39;, &#39;${escape(m(dF3x)[0][8])}&#39;],  // <span style="color:red" class="svelte-p8iwwg" data-svelte-h="svelte-j7qpf5">Right side</span>
[&#39;${escape(m(dF3x)[1][0])}&#39;,&#39;${escape(m(dF3x)[1][1])}&#39;,&#39;${escape(m(dF3x)[1][2])}&#39;,&#39;${escape(m(dF3x)[1][3])}&#39;,&#39;${escape(m(dF3x)[1][4])}&#39;,&#39;${escape(m(dF3x)[1][5])}&#39;,&#39;${escape(m(dF3x)[1][6])}&#39;,&#39;${escape(m(dF3x)[1][7])}&#39;, &#39;${escape(m(dF3x)[1][8])}&#39;],
[&#39;${escape(m(dF3x)[2][0])}&#39;,&#39;${escape(m(dF3x)[2][1])}&#39;,&#39;${escape(m(dF3x)[2][2])}&#39;,&#39;${escape(m(dF3x)[2][3])}&#39;,&#39;${escape(m(dF3x)[2][4])}&#39;,&#39;${escape(m(dF3x)[2][5])}&#39;,&#39;${escape(m(dF3x)[2][6])}&#39;,&#39;${escape(m(dF3x)[2][7])}&#39;, &#39;${escape(m(dF3x)[2][8])}&#39;],
[&#39;${escape(m(dF3x)[3][0])}&#39;,&#39;${escape(m(dF3x)[3][1])}&#39;,&#39;${escape(m(dF3x)[3][2])}&#39;,&#39;${escape(m(dF3x)[3][3])}&#39;,&#39;${escape(m(dF3x)[3][4])}&#39;,&#39;${escape(m(dF3x)[3][5])}&#39;,&#39;${escape(m(dF3x)[3][6])}&#39;,&#39;${escape(m(dF3x)[3][7])}&#39;, &#39;${escape(m(dF3x)[3][8])}&#39;],   // <span style="color:red" class="svelte-p8iwwg" data-svelte-h="svelte-a4yind">Front</span>
[&#39;${escape(m(dF3x)[4][0])}&#39;,&#39;${escape(m(dF3x)[4][1])}&#39;,&#39;${escape(m(dF3x)[4][2])}&#39;,&#39;${escape(m(dF3x)[4][3])}&#39;,&#39;${escape(m(dF3x)[4][4])}&#39;,&#39;${escape(m(dF3x)[4][5])}&#39;,&#39;${escape(m(dF3x)[4][6])}&#39;,&#39;${escape(m(dF3x)[4][7])}&#39;, &#39;${escape(m(dF3x)[4][8])}&#39;],  // <span style="color:red" class="svelte-p8iwwg" data-svelte-h="svelte-34fgeh">Top</span>
[&#39;${escape(m(dF3x)[5][0])}&#39;,&#39;${escape(m(dF3x)[5][1])}&#39;,&#39;${escape(m(dF3x)[5][2])}&#39;,&#39;${escape(m(dF3x)[5][3])}&#39;,&#39;${escape(m(dF3x)[5][4])}&#39;,&#39;${escape(m(dF3x)[5][5])}&#39;,&#39;${escape(m(dF3x)[5][6])}&#39;,&#39;${escape(m(dF3x)[5][7])}&#39;, &#39;${escape(m(dF3x)[5][8])}&#39;] ]) } </pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-z0yh8k">As you see, x in the m-M(x) closure is an array of six nine-member arrays of strings. The callbacks triggered by mouse clicks and key presses operate on x in the closure, rearranging the strings without disturbing the structure of an array of six nine-member arrays, and maintaining exactly nine of each color of string.</p> <h2 class="svelte-p8iwwg" data-svelte-h="svelte-1sottqg">The Browser Image Changes Automatically</h2> <p class="svelte-p8iwwg" data-svelte-h="svelte-pkoxm2">Each of the 27 divs to which users have access (front, top, and right side) have the general structure:
</p><pre class="svelte-p8iwwg">${escape(general)}</pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-1yj9i4x">For example, the upper left corner of the front face is:
</p><pre class="svelte-p8iwwg">${escape(precise)}</pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-v7spke">The CSS class of the upper left corner of the front face is &quot;orange&quot; in the start cube. Press &quot;L&quot; twice, and notice that m(dF3)[3][0] changed to &quot;red.&quot; At any given time, m(dF3x)[3][0] resolves to one of six strings in the m-M(x) closure, which is the name of one of six classes in the DOM. The class &quot;orange&quot; specifies &quot;background-color: orange&quot;, the class &quot;green&quot; specifies &quot;background-color: green&quot;. and so forth.</p> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1kbc5sf">X rotate</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-2r2ufl">Y rotate</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1o8k58v">Z rotate</button> <span style="font-size:25px" class="svelte-p8iwwg" data-svelte-h="svelte-r6qy0n">     Move list length:</span> <span style="font-weight:bold; font-size:30px" class="svelte-p8iwwg">${escape(Sally)}</span> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-xr79dp">X back</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-vpz8jp">Y back</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-9px6u9">Z back</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-antzp9">U</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1by77jn">D</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-17zom2f">R</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-u9q5tf">L</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1rf5bdr">F</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1h0bqgn">B</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1iu7unf">M</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-fa4wp6">E</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-14631gf">S</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-ovihlo">U&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1lvqfts">D&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1l2dhm4">R&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1f3gpsw">L&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-18okvh8">F&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-qig1sc">B&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-10xzdks">M&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-x06nwt">E&#39;</button> <button class="svelte-p8iwwg" data-svelte-h="svelte-1sgwp6k">S&#39;</button> <div style="margin-left: 1px" class="svelte-p8iwwg"><p class="svelte-p8iwwg" data-svelte-h="svelte-1ubbw1">Pressing the u, d, r, l, f, b, m, e, s, x, y, and z keys has the
                same effect as clicking the corresponding (capitalized) buttons.
                Holding down the &quot;Shift&quot; key (or activating &quot;CapsLock&quot;) while
                pressing the keys causes the reverse effect. Pressing v, w, and
                q is equivalent to clicking on Start, Scramble, and Reverse,
                respectively.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-1j46aco">Clicking on either of two left corners of each face of the cube
                causes that face to rotate counterclockwise 90 degrees. Clicking
                on either of two right corners of each face of the cube causes
                that face to rotate clockwise 90 degrees. Clicking on edges
                rotates center sections, rather than faces. Clicking on the centers
                of the right, top, and front rotates the entire cube clockwise on the X, Y
                and Z axes, respectively.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-rr7jbl">Of course, nothing actually rotates. Rearranging references to
                strings in the m-M(x) closure creates the illusion in the
                browser that part or all of the cube rotated.</p> <h2 style="text-align: center;" class="svelte-p8iwwg" data-svelte-h="svelte-68flo9">Some Algorithm Shortcuts</h2> <p class="svelte-p8iwwg"></p> <button class="svelte-p8iwwg" data-svelte-h="svelte-1lfhu2a">PLL Corners: R&#39; F R&#39; B2 R F&#39; R&#39; B2 R2</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1aol85f">Triangle Clockwise: M2 U&#39; M U2 M&#39; U&#39; M2</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-276kzp">Triangle CounterClockwise: M2 U M U2 M&#39; U M2</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1s0d9eq">Edges Opposite: M M Uz M M U U M M Uz M M</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-175oqhe">Edges Adjacent: M M U M M U M U U M M U U M U U</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1601p4y">doubleFish R&#39; F R B&#39; R&#39; F&#39; R B</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-zy6rkl">Sune: R U R&#39; U R U2 R&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1t25e7z">Antisune: R U2 R&#39; U&#39; R U&#39; R&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-131h37e">Sexy: R U R&#39; U&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-vlyvsh">Reverse Sexy: U R U&#39; R&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1s7s1oh">Revolve: U R U&#39; L&#39; U R&#39; U&#39; L</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-9bmw9c">Reverse Revolve: L&#39; U R U&#39; L U R&#39; U&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1f9p2o0">Sledgehammer: R&#39; F R F&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-tc0gxa">oppH1: R U R&#39; U R U&#39; R&#39; U R U U R&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-tgf4th">oppH3: F R U R&#39; U&#39; R U R&#39; U&#39; R U R&#39; U&#39; F&#39;</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1sngs1p">Niklas: R U&#39; L&#39; U R&#39; U&#39; L</button> <br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-101jthv">Reverse Niklas: L&#39; U R U&#39; L U R&#39;</button> <p class="svelte-p8iwwg">Press the &quot;v&quot; key or click <button class="svelte-p8iwwg" data-svelte-h="svelte-10lw3kc">Start</button>
                to see each face of the cube with 9 identically colored divs.
                Click on the
                <button class="svelte-p8iwwg" data-svelte-h="svelte-b8m5uu">X rotate</button>,
                <button class="svelte-p8iwwg" data-svelte-h="svelte-11fxfwk">Y rotate</button>, and
                <button class="svelte-p8iwwg" data-svelte-h="svelte-1fxteei">Z rotate</button>
                buttons to see the main cube from various angles.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-1ueb9m6">See the <a href="./" class="svelte-p8iwwg">previous page</a> for detailed definitions.
                This page shows how images in the DOM are made to react to rearrangements
                of the elements of a six nine-member arrays of strings in the script,
                User mouse clicks and key presses call m(func), where func is some
                function and m is defined as m = M(x) where x is the array of six
                nine-member arrays of strings mentioned above.</p></div></div></section>  <div id="steady" class="svelte-p8iwwg"><div class="container svelte-p8iwwg"><div class="${escape(null_to_empty(cu), true) + " svelte-p8iwwg"}"><div class="face front svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][0]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][1]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][2]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][3]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][4]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][5]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][6]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][7]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[3][8]), true) + " svelte-p8iwwg"}"></button></div></div></div>  <div class="face back svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="${escape(null_to_empty(m(dF3x)[2][8]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][7]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][6]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][5]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][4]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][3]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][2]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][1]), true) + " svelte-p8iwwg"}"></div> <div class="${escape(null_to_empty(m(dF3x)[2][0]), true) + " svelte-p8iwwg"}"></div></div></div> <div class="face right svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][0]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][1]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][2]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][3]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][4]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][5]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][6]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][7]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[0][8]), true) + " svelte-p8iwwg"}"></button></div></div></div> <div class="face left svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][0]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][1]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][2]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][3]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][4]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][5]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][6]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][7]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[1][8]), true) + " svelte-p8iwwg"}"></button></div></div></div> <div class="face top svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][0]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][1]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][2]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][3]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][4]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][5]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][6]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][7]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[4][8]), true) + " svelte-p8iwwg"}"></button></div></div></div> <div class="face bottom svelte-p8iwwg"><div class="grid svelte-p8iwwg"><div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][0]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][1]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][2]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][3]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][4]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][5]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][6]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][7]), true) + " svelte-p8iwwg"}"></button></div> <div class="svelte-p8iwwg"><button class="${escape(null_to_empty(m(dF3x)[5][8]), true) + " svelte-p8iwwg"}"></button></div></div></div></div> <br class="svelte-p8iwwg"><br class="svelte-p8iwwg"><br class="svelte-p8iwwg"><br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-1jnjc72">Start</button> <br class="svelte-p8iwwg"><br class="svelte-p8iwwg"> <button class="svelte-p8iwwg" data-svelte-h="svelte-kmdmj9">Scramble</button></div></div> <section id="coolcow" class="columns svelte-p8iwwg"><div style="width: 70%" class="svelte-p8iwwg"><p id="cow8" class="svelte-p8iwwg" data-svelte-h="svelte-1k83gto">Continued from the <a href="./#cow7" class="svelte-p8iwwg">previous page</a></p> <p class="svelte-p8iwwg" data-svelte-h="svelte-1ibrrvk">Clicking one of the buttons (below) causes the function displayed on
            it to run. For example, click &quot;R&quot; calls the function R. Pressing the
            &quot;R&quot; key and clicking the upper or lower right squares does the same
            thing. code on its face to execute. For example, clicking on the m =
            m(L) button causes <br class="svelte-p8iwwg">    (1) m(L) to execute,
            which causes <br class="svelte-p8iwwg">     (2) x in the m-M(x) closure to
            mutate into L(x).</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-mke6kj">For the sake of clarity, I&#39;ll spell this out in more than the usual
            amount of detail: The background color of a button or div can be set
            with x in the m-M(x) closure in these two ways: background-color =
            m(dF3x)[a][b] or class = m(df3x)[a][b] where a is 0, 1, 2, 3, 4, or
            5 and b is 0 or 8, or any number between 0 and 8. When a and b are
            in these ranges, the expression m(dF3x)[a][b] resolves to
            &quot;blue&quot;,&quot;green&quot;, &quot;red&quot;, &quot;orange&quot;, &quot;yellow&quot;, or &quot;white&quot;. The classes
            blue, green, red, orange, yellow, and white have &quot;background-color&quot;
            elements corresponding to their names. So, for example, on the
            starting (solved) cube, the expression m(dF3x)[0][0] resolves to the
            string &quot;blue&quot; causing the statements &quot;style = &#39;background-color:
            m(dF3x)[0][0]&#39; and &quot;class = &#39;m(dF3x)[0][0]&#39;&quot; to result in blue
            backgrounds.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-1pzmrdc">m(dF3x)[3] is x&#39;s fourth-from-the-left nine-element array of
            strings. When the cube is solved, each of its elements are variables
            pointing to the string &quot;orange.&quot; The three buttons below have the
            colors of the first three elements of the fourth element of x
            because the buttons contain the statements &quot;style = &#39;m(dF3x)[3][0],
            m(dF3x)[3][1], and m(dF3x)[3][2]. Notice how the colors of the
            buttons correspond to those of the top row of the front face of the
            Rubik&#39;s cube representation. Repeatedly pressing &quot;Scramble&quot;
            illustrates this.</p> <div class="svelte-p8iwwg"><button style="${"background-color:" + escape(m(dF3x)[3][0], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][0] = ${escape(m(dF3x)[3][0])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][1], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][1] = ${escape(m(dF3x)[3][1])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][2], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][2] = ${escape(m(dF3x)[3][2])}</button> <br class="svelte-p8iwwg"><br class="svelte-p8iwwg"> <button style="${"background-color:" + escape(m(dF3x)[3][3], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][3] = ${escape(m(dF3x)[3][3])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][4], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][4] = ${escape(m(dF3x)[3][4])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][5], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][5] = ${escape(m(dF3x)[3][5])}</button> <br class="svelte-p8iwwg"><br class="svelte-p8iwwg"> <button style="${"background-color:" + escape(m(dF3x)[3][6], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][6] = ${escape(m(dF3x)[3][6])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][7], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][7] = ${escape(m(dF3x)[3][7])}</button> <button style="${"background-color:" + escape(m(dF3x)[3][8], true) + "; color: black; font-size:30px"}" class="svelte-p8iwwg">m(dF3x)[3][8] = ${escape(m(dF3x)[3][2])}</button></div> <h2 class="svelte-p8iwwg" data-svelte-h="svelte-1c0ucvx">Rotating the Left, Back, and Bottom Faces</h2> <p class="svelte-p8iwwg" data-svelte-h="svelte-xduot9">METHOD ONE -- The fastest method:</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-14b8l4u">The left, back, and bottom faces can be turned clockwise by pressing
            L, B, and D, respectively. Hold down the SHIFT key for
            counterclockwise rotation.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-hm6zli">METHOD TWO -- Clicking on the cube</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-112o95a">Click the top center 3 times to bring the green face forward. <br class="svelte-p8iwwg">
                  Click the right top or bottom square.
            <br class="svelte-p8iwwg">
                  Click the top center 3 more times, bringing
            the red face forward. <br class="svelte-p8iwwg">       Click
            the right top or bottom square. <br class="svelte-p8iwwg">     
            Click the top center two times to re-orient the cube. <br class="svelte-p8iwwg">
                  Click the right center to bring up the
            bottom face. <br class="svelte-p8iwwg">       Click the right
            top or bottom square. <br class="svelte-p8iwwg">       Click the
            right center 3 more times to re-orient the cube.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-kv7zfr">This is the expected result of pressing &quot;LBD&quot; or following the
            instructions of Method 2 (above): <img${add_attribute("src", clickDemo, 0)} alt="Click demo" style="width:150px;height:155px;" class="svelte-p8iwwg"></p> <h2 class="svelte-p8iwwg" data-svelte-h="svelte-1bd037s">The Amazing Reverse Function</h2> <p class="svelte-p8iwwg" data-svelte-h="svelte-w9a2uz">The value held n the closure m-M(x) is transformed whenever a user
            presses certain keys or clicks the mouse over certain parts of the
            browser display. These actions call m(func), automatically resulting
            in the mutation of x into func(x). Such mutations automatically
            change parts of the DOM where x, exposed as m(dF3x), determines the
            CSS background-color of elements. This is done directly as
            &quot;background-color = &#39;m(dF3x)[j][k]&quot; or indirectly as &quot;class =
            &#39;m(dF3x)[j][k]&quot; for integers j and k in the ranges of 0,6 for j and
            0,8 for k.</p> <p class="svelte-p8iwwg" data-svelte-h="svelte-z7k9nt">The definitions of &quot;func&quot; in m(func), as described above, can be
            found selectively at <a href="./" class="svelte-p8iwwg">Home</a> and comprehensively in
            the
            <a href="https://github.com/dschalk/Recursive-Closures" class="svelte-p8iwwg">Github repository</a>. &quot;reverse&quot; works differently. It works with this modified version
            of M:</p> <pre class="svelte-p8iwwg">${escape(newMcode)}</pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-15gbjxo">Clicking the &quot;Reverse&quot; button or pressing the Q key does not
            directly cause m to run; they just cause &quot;reverse()&quot; to run. m is
            called twice inside of reverse.</p> <pre class="svelte-p8iwwg">${escape(reverseCode)}</pre> <p class="svelte-p8iwwg" data-svelte-h="svelte-18qk72u">The function reverse works because m(dF3ar) passes ar by reference,
            not value. m(dF3ar) in the &quot;reverse&quot; function refers to the same
            location in memory as ar in the m-M(x) closure. Logging &quot;m(dF3ar ===
            temp (below) while running this application illustrates this.</p> <pre class="svelte-p8iwwg">${escape(test7)}</pre> <span id="test" class="svelte-p8iwwg"></span> <h2 class="svelte-p8iwwg">The elapsed time is ${escape(elapsedTime)} milliseconds.</h2> <button class="svelte-p8iwwg" data-svelte-h="svelte-1fyszfe">10,000 Scrambles</button> <br class="svelte-p8iwwg"> <span style="font-size:25px" class="svelte-p8iwwg" data-svelte-h="svelte-r6qy0n">     Move list length:</span> <span style="font-weight:bold; font-size:30px" class="svelte-p8iwwg">${escape(Sally)}</span> <pre class="svelte-p8iwwg">${escape(et2Code)}</pre></div> <div class="svelte-p8iwwg"></div></section> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
