
<script>
  // import Image from './Image.svelte'
  var log = console.log;
  var ERROR = "";

  import { onMount } from "svelte";

  import array from "$lib/OLL.png";
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
    draw,
    crossfade,
  } from "svelte/transition";

  var Rf78d3s5 = () => {};

  const M = function M(x) {
    return function go(func) {
      if (func === Rf78d3s5) return x;
      else x = func(x);
      return go;
    };
  };
  
var Mcode = `const M = function M(x) {
  return function go(func) {
    if (func === Rf78d3s5) return x;
    else x = func(x);
    return go;
  };
} where Rf78d3s5 = () => {};`;

  /*function M (x) {
  return function go (func) {
    if (func) {x = func(x); return go}
    else return x;
  }
}*/

  // var b0, b1, b2, b3, b4, b5, b6, b7, b8;
  // var g0, g1, g2, g3, g4, g5, g6, g7, g8;
  // var r0, r1, r2, r3, r4, r5, r6, r7, r8;
  // var o0, o1, o2, o3, o4, o5, o6, o7, o8;
  // var y0, y1, y2, y3, y4, y5, y6, y7, y8;
  // var w0, w1, w2, w3, w4, w5, w6, w7, w8;

  const b0 = 'blue';
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
  const w8 = "white";

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);

  var mCode = `const b0 = 'blue';
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
  const w8 = "white";

  const bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  const gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  const rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  const oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  const yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  const ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;
  
  
  const cubeStart = JSON.parse(JSON.stringify([bb,gg,rr,oo,yy,ww]));

  function Xro(ar) {
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
    temp[1] = [
        ar[1][2],
        ar[1][5],
        ar[1][8],
        ar[1][1],
        ar[1][4],
        ar[1][7],
        ar[1][0],
        ar[1][3],
        ar[1][6],
      ];
    temp[2] = [
        ar[4][8],
        ar[4][7],
        ar[4][6],
        ar[4][5],
        ar[4][4],
        ar[4][3],
        ar[4][2],
        ar[4][1],
        ar[4][0],
      ];
    temp[3] = ar[5];
    temp[4] = ar[3];
    temp[5] = [
        ar[2][8],
        ar[2][7],
        ar[2][6],
        ar[2][5],
        ar[2][4],
        ar[2][3],
        ar[2][2],
        ar[2][1],
        ar[2][0],
      ];
    return temp;
  };

  const Xror = x => Xro(Xro(Xro(x)));

  function Yro(ar) {
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
  } 

  const Yror = x => Yro(Yro(Yro(x)));
  
  function Zro(ar) {
    let temp = [];
    temp[0] = [
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
      temp[1] = [
        ar[5][6],
        ar[5][3],
        ar[5][0],
        ar[5][7],
        ar[5][4],
        ar[5][1],
        ar[5][8],
        ar[5][5],
        ar[5][2],
      ];
      temp[2] = [
        ar[2][2],
        ar[2][5],
        ar[2][8],
        ar[2][1],
        ar[2][4],
        ar[2][7],
        ar[2][0],
        ar[2][3],
        ar[2][6],
      ];
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
        ar[1][6],
        ar[1][3],
        ar[1][0],
        ar[1][7],
        ar[1][4],
        ar[1][1],
        ar[1][8],
        ar[1][5],
        ar[1][2],
      ];
      temp[5] = [
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
    return temp;
  };

  const Zror = x => Zro(Zro(Zro(x)));

  $: m = m(() => m(Rf78d3s5));

  function Xrotate(ar) {
    m(Xro);
    m = m;
  }

  function Xback(ar) {
    m(Xror);
    m = m;
  }

  function Yrotate(ar) {
    m(Yro);
    m = m;
  }

  function Yback(ar) {
    m(Yror);
    m = m;
  }

  function Zrotate(ar) {
    m(Zro);
    m = m;
  }

  function Zback(ar) {
    m(Zror);
    m = m;
  }

  console.log("m(Rf78d3s5) is", m(Rf78d3s5));

  function Cz(ar) {
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
      ar[0][8],
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
      ar[1][8],
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
      ar[4][8],
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
      ar[5][8],
    ];
    return temp;
  }

  function Cx(ar) {
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
      ar[2][8],
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
      ar[3][8],
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
      ar[4][8],
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
      ar[5][8],
    ];
    // m = M(temp);
    return temp;
  }

  function Cy(ar) {
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
      ar[0][8],
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
      ar[1][8],
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
      ar[2][8],
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
      ar[3][8],
    ];
    temp[4] = ar[4];
    temp[5] = ar[5];
    return temp;
  }


/*
  function Cxr(ar) {
    let temp = [];
    temp[0] = ar[0];
    temp[1] = ar[1];
    temp[2] = [
      ar[2][0],
      ar[4][1],
      ar[2][2],
      ar[2][3],
      ar[4][4],
      ar[2][5],
      ar[2][6],
      ar[4][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[5][7],
      ar[3][2],
      ar[3][3],
      ar[5][4],
      ar[3][5],
      ar[3][6],
      ar[5][1],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[3][1],
      ar[4][2],
      ar[4][3],
      ar[3][4],
      ar[4][5],
      ar[4][6],
      ar[3][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[2][7],
      ar[5][2],
      ar[5][3],
      ar[2][4],
      ar[5][5],
      ar[5][6],
      ar[2][1],
      ar[5][8],
    ];
    return temp;
  }  */
  function B(ar) {
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
      ar[5][6],
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
      ar[1][8],
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
      ar[2][2],
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
      ar[4][8],
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
      ar[1][6],
    ];
    return temp;
  }
  const Bz = x => B(B(B(x)))

  /*function Bz(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[4][0],
      ar[0][3],
      ar[0][4],
      ar[4][1],
      ar[0][6],
      ar[0][7],
      ar[4][2],
    ];

    temp[1] = [
      ar[5][6],
      ar[1][1],
      ar[1][2],
      ar[5][7],
      ar[1][4],
      ar[1][5],
      ar[5][8],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[2][2],
      ar[2][5],
      ar[2][8],
      ar[2][1],
      ar[2][4],
      ar[2][7],
      ar[2][0],
      ar[2][3],
      ar[2][6],
    ];

    temp[3] = ar[3];

    temp[4] = [
      ar[1][6],
      ar[1][3],
      ar[1][0],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[4][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[0][2],
      ar[0][5],
      ar[0][8],
    ];
    return temp;
  } */

  function D(ar) {
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
      ar[3][8],
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
      ar[2][8],
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
      ar[0][8],
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
      ar[1][8],
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
      ar[5][2],
    ];
    return temp;
  }

  const Dz = x => D(D(D(x)))
  
  /*function Dz(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[4] = ar[4];

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
  } */

  function L(ar) {
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
      ar[1][2],
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
      ar[5][0],
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
      ar[3][8],
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
      ar[4][8],
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
      ar[5][8],
    ];
    return temp;
  }


  const Lz = x => L(L(L(x)))
  
  /*function Lz(ar) {
    let temp = [];
    temp[0] = ar[0];

    temp[1] = [
      ar[1][2],
      ar[1][5],
      ar[1][8],
      ar[1][1],
      ar[1][4],
      ar[1][7],
      ar[1][0],
      ar[1][3],
      ar[1][6],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[4][6],
      ar[2][3],
      ar[2][4],
      ar[4][3],
      ar[2][6],
      ar[2][7],
      ar[4][0],
    ];

    temp[3] = [
      ar[5][0],
      ar[3][1],
      ar[3][2],
      ar[5][3],
      ar[3][4],
      ar[3][5],
      ar[5][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[3][0],
      ar[4][1],
      ar[4][2],
      ar[3][3],
      ar[4][4],
      ar[4][5],
      ar[3][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[2][8],
      ar[5][1],
      ar[5][2],
      ar[2][5],
      ar[5][4],
      ar[5][5],
      ar[2][2],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
  }  */

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
  }


  const Fz = x => F(F(F(x)))
  
  /*function Fz(ar) {
    let temp = [];
    temp[0] = [
      ar[5][2],
      ar[0][1],
      ar[0][2],
      ar[5][1],
      ar[0][4],
      ar[0][5],
      ar[5][0],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[4][8],
      ar[1][3],
      ar[1][4],
      ar[4][7],
      ar[1][6],
      ar[1][7],
      ar[4][6],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][2],
      ar[3][5],
      ar[3][8],
      ar[3][1],
      ar[3][4],
      ar[3][7],
      ar[3][0],
      ar[3][3],
      ar[3][6],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[0][0],
      ar[0][3],
      ar[0][6],
    ];

    temp[5] = [
      ar[1][2],
      ar[1][5],
      ar[1][8],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
  }  */

  function R(ar) {
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
  }


  const Rz = x => R(R(R(x)))
  
var Rcode = ` function R(ar) {
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


 /* function Rz(ar) {
    let temp = [];
    temp[0] = [
      ar[0][2],
      ar[0][5],
      ar[0][8],
      ar[0][1],
      ar[0][4],
      ar[0][7],
      ar[0][0],
      ar[0][3],
      ar[0][6],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[5][8],
      ar[2][1],
      ar[2][2],
      ar[5][5],
      ar[2][4],
      ar[2][5],
      ar[5][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[4][2],
      ar[3][3],
      ar[3][4],
      ar[4][5],
      ar[3][6],
      ar[3][7],
      ar[4][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[2][6],
      ar[4][3],
      ar[4][4],
      ar[2][3],
      ar[4][6],
      ar[4][7],
      ar[2][0],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[3][2],
      ar[5][3],
      ar[5][4],
      ar[3][5],
      ar[5][6],
      ar[5][7],
      ar[3][8],
    ];
    return temp;
  }  */

  function U(ar) {
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
      ar[0][8],
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
      ar[1][8],
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
      ar[2][8],
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
      ar[3][8],
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
      ar[4][2],
    ];

    temp[5] = ar[5];
    return temp;
  }

  const Uz = x => U(U(U(x)))
  
var Ucode = ` function U(ar) {
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
      ar[0][8],
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
      ar[1][8],
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
      ar[2][8],
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
      ar[3][8],
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
      ar[4][2],
    ];

    temp[5] = ar[5];
    return temp;
  }`

/*  function Uz(ar) {
    let temp = [];

    temp[0] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][2],
      ar[4][5],
      ar[4][8],
      ar[4][1],
      ar[4][4],
      ar[4][7],
      ar[4][0],
      ar[4][3],
      ar[4][6],
    ];

    temp[5] = ar[5];
    return temp;
  } */

  var UfuncCode = `var Ufunc = () => {
    m(U);
    m = m;  // This triggers the DOM update
  };`

  var Dfunc = () => {
    m(D);
    m = m;
  };

  var Rfunc = () => {
    m(R);
    m = m;
  };

  var Lfunc = () => {
    m(L);
    m = m;
  };

  var Ffunc = () => {
    m(F);
    m = m;
  };

  var Bfunc = () => {
    m(B);
    m = m;
  };

  var Cxfunc = () => {
    m(Cx);
    m = m;
  };

  var Czfunc = () => {
    m(Cz);
    m = m;
  };

  var Cyfunc = () => {
    m(Cy);
    m = m;
  };

  var Ufunc = () => {
    m(U);
    m = m;
  };

  var Uzfunc = () => {
    m(Uz);
    m = m;
 };

  var Dzfunc = () => {
    m(Dz);
    m = m;
  };

  var Rzfunc = () => {
    m(Rz);
    m = m;
  };

  var Lzfunc = () => {
    m(Lz);
    m = m;
  };

  var Fzfunc = () => {
    m(Fz);
    m = m;
  };

  var Bzfunc = () => {
    m(Bz);
    m = m;
  };

  var Cxrfunc = () => {
    m(Cx)(Cx)(Cx);
    m = m;
  };

  var Cyrfunc = () => {
    m(Cy)(Cy)(Cy);
    m = m;
  };

  var Czrfunc = () => {
    m(Cz)(Cz)(Cz);
    m = m;
  };

  var Start = () => {
    m(() => cubeStart);
    m = m;
  };

  var corners = () => {
    m(Rz)(F)(Rz)(B)(B)(R)(Fz)(Rz)(B)(B)(R)(R);
    m = m;
  };

  var triclock = () => {
    m(Cx)(Cx)(Uz)(Cx)(U)(U)(Cx)(Cx)(Cx)(Uz)(Cx)(Cx); 
    m = m;
  };

  var tricounterclock = () => {
    m(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(Cx)(U)(Cx)(Cx);
    m = m;
  };

  var edgesOpposite = () => {
    m(Cx)(Cx)(Uz)(Cx)(Cx)(U)(U)(Cx)(Cx)(Uz)(Cx)(Cx);
    m = m;
  };

  var oppositeHeadlights1 = () => {
    m(R)(U)(Rz)(U)(R)(Uz)(Rz)(U)(R)(U)(U)(Rz);
    m = m;
  };

  var oppositeHeadlights2 = () => {
    m(F)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(Fz);
    m = m;
  };

  var oppositeHeadlights3 = () => {
    m(R)(U)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz);
    m = m;
  };

  /*<button on:click={oppositeHeadlights1}>oppositeHeadlights1: R U R' U R U' R' U R U U R'</button>
<button on:click={oppositeHeadlights2}>oppositeHeadlights2: R U U R' U' R U R' U' R U U' R'</button>
<button on:click={oppositeHeadlights3}>oppositeHeadlights3: F R U R' U' R U R' U' R U R' U' F'</button>
*/

  var edgesAdjacent = () => {
    console.log("In edgesAdjacent");
    m(Cx)(Cx)(U)(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(U)(U)(Cx)(U)(U);
    m = m;
  };

  var sune = () => {
    m(R)(U)(Rz)(U)(R)(U)(U)(Rz);
    m = m;
  };

  var antisune = () => {
    m(R)(U)(U)(Rz)(Uz)(R)(Uz)(Rz);
    m = m;
  };

  var sexy = () => {
    m(R)(U)(Rz)(Uz);
    m = m;
  };
  var reverse_sexy = () => {
    m(U)(R)(Uz)(Rz);
    m = m;
  };

  var orient_corners = () => {
    m(U)(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
    m = m;
  };

  var reverse_orient_corners = () => {
    m(Lz)(U)(R)(Uz)(L)(U)(Rz)(Uz);
    m = m;
  };

  var sledgehammer = () => {
    m(Rz)(F)(R)(Fz);
    m = m;
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
    m = m;
  };

  var reverse_niklas = () => {
    m(Lz)(U)(R)(Uz)(L)(U)(Rz);
    m = m;
  };

  var Jb_Perm = () => {
    m(R)(U)(Rz)(Fz)(R)(U)(Rz)(Uz)(Rz)(F)(R)(R)(Uz)(Rz)(Uz);
    m = m;
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
    m = m;
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
    m = m;
  };

  var cu;
  var cu9;
  cu = "cube1";
  cu9 = "cube93";
  var moves = ["U","D","R","L","F","B","Dz","Lz","Fz","Bz","U","D","R","L","Dz","Lz","Fz","Bz","U","F","U","D","R","L","F","B","Dz","Lz","Fz","Bz","U","D","R","L","Dz","Lz","Fz","Bz","U","F" ];

  function rotate9() {
    if (cu9 == "cube9") {console.log("You bet"); cu9 = "cube92"}
    else if (cu9 == "cube95") cu9 = "cube9";
    else if (cu9 == "cube96") cu9 = "cube92";
    else if (cu9 == "cube97") cu9 = "cube93";
    else if (cu9 == "cube98") cu9 = "cube94";
    else if (cu9 == "cube92") cu9 = "cube93";
    else if (cu9 == "cube93") cu9 = "cube94";
    else if (cu9 == "cube94") cu9 = "cube9";
    else if (cu9 == "cube95") cu9 = "cube96";
    else if (cu9 == "cube96") cu9 = "cube97";
    else if (cu9 == "cube97") cu9 = "cube98";
    else if (cu9 == "cube98") cu9 = "cube9";
    else return "cube9";
  }
      
  function tilt9() {
    if (cu9 == "cube9") {cu9 = "cube95"}
    else if (cu9 == "cube92") {cu9 = "cube96"}
    else if (cu9 == "cube93") {cu9 = "cube97"}
    else if (cu9 == "cube94") {cu9 = "cube98"}
    else if (cu9 == "cube98") cu9 = "cube95";
    else if (cu9 == "cube92") cu9 = "cube93";
    else if (cu9 == "cube93") cu9 = "cube94";
    else if (cu9 == "cube94") cu9 = "cube95";
    else if (cu9 == "cube95") cu9 = "cube96";
    else if (cu9 == "cube96") cu9 = "cube97";
    else if (cu9 == "cube97") cu9 = "cube98";
    else if (cu9 == "cube98") cu9 = "cube95";
    else return "cube9";
  }
      
  function rotate() {
    if (cu == "cube1") cu = "cube3";
    else if (cu == "cube2") cu = "cube4";
    else if (cu == "cube3") cu = "cube2";
    else if (cu == "cube4") cu = "cube1";
    else if (cu == "cube5") cu = "cube6";
    else if (cu == "cube6") cu = "cube7";
    else if (cu == "cube7") cu = "cube8";
    else if (cu == "cube8") cu = "cube5";
    else return "cube1";
  }

  function rotate2() {
    rotate();
    rotate();
    rotate();
  }

  var nums = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  function id(x) {
    return x;
  }
  
  function shu() {
    // Scrambles the cube
    console.log("1 m(Rf78d3s5) is", m(Rf78d3s5));
    let moves = [Cx,Cy,Cz,U,D,R,L,F,B,Cx,Cy,Cz,U,D,B,R,L,F,Cx,D,Cy,Cz,B,U,D,R,L,F,Cx,Cy,Cz,
      Cx,Cy,Cz,U,D,R,L,F,B,Cx,Cy,Cz,U,D,B,R,L,F,Cx,D,Cy,Cz,B,U,D,R,L,F,Cx,Cy,Cz];
    for (let n = 0; n < 62; n += 1) {
      m(moves[Math.floor(Math.random() * 62)]);
    } 
    m = m;
  }

  function dupCheck(ar) {
    var flat = ar.flat(1);
    const set = [...new Set(flat)];
    if (flat.length !== set.length) {
      //console.log(v, "is already in the array.");
      ERROR = "STOP";
    } else console.log(ar, "passed dupCheck");
  }

  function logit(e) {
    console.log(e);
  }
  function handleKey(e) {
    console.log(e.key, e.keyCode);
    if (e.keyCode === 38) console.log("cow");
    else if (e.keyCode === 85) m(U)(U)(U);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68) Dzfunc();
    else if (e.keyCode === 100) Dfunc();
    else if (e.keyCode === 82) m(R)(R)(R);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76) Lzfunc();
    else if (e.keyCode === 108) Lfunc();
    else if (e.keyCode === 70) Fzfunc();
    else if (e.keyCode === 102) Ffunc();
    else if (e.keyCode === 66) Bzfunc();
    else if (e.keyCode === 98) Bfunc();
    else if (e.keyCode === 77) Cxrfunc();
    else if (e.keyCode === 109) Cxfunc();
    else if (e.keyCode === 69) Cyrfunc();
    else if (e.keyCode === 101) Cyfunc();
    else if (e.keyCode === 83) Czrfunc();
    else if (e.keyCode === 115) Czfunc();
    else if (e.keyCode === 120) Xrotate();
    else if (e.keyCode === 88) Xback();
    else if (e.keyCode === 121) Yrotate();
    else if (e.keyCode === 89) Yback();
    else if (e.keyCode === 122) Zrotate();
    else if (e.keyCode === 90) Zback();
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    // else if (e.keyCode === 116) rotate();
    m = m;
  }

  var handleKeyCode = `function handleKey(e) {
    console.log(e.key, e.keyCode);
    if (e.keyCode === 38) console.log("cow");
    else if (e.keyCode === 85) m(U)(U)(U);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68) Dzfunc();
    else if (e.keyCode === 100) Dfunc();
    else if (e.keyCode === 82) m(R)(R)(R);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76) Lzfunc();
    else if (e.keyCode === 108) Lfunc();
    else if (e.keyCode === 70) Fzfunc();
    else if (e.keyCode === 102) Ffunc();
    else if (e.keyCode === 66) Bzfunc();
    else if (e.keyCode === 98) Bfunc();
    else if (e.keyCode === 77) Cxrfunc();
    else if (e.keyCode === 109) Cxfunc();
    else if (e.keyCode === 69) Cyrfunc();
    else if (e.keyCode === 101) Cyfunc();
    else if (e.keyCode === 83) Czrfunc();
    else if (e.keyCode === 115) Czfunc();
    else if (e.keyCode === 120) Xrotate();
    else if (e.keyCode === 88) Xback();
    else if (e.keyCode === 121) Yrotate();
    else if (e.keyCode === 89) Yback();
    else if (e.keyCode === 122) Zrotate();
    else if (e.keyCode === 90) Zback();
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    // else if (e.keyCode === 116) rotate();
    m = m;
  }`

  const constants = `  const b0 = 'blue';
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

  const w0 = 'yellow';
  const w1 = 'yellow';
  const w2 = 'yellow';
  const w3 = 'yellow';
  const w4 = 'yellow';
  const w5 = 'yellow';
  const w6 = 'yellow';
  const w7 = 'yellow';
  const w8 = "yellow";`;

  var constants2 = `var bb = [b0,b1,b2,b3,b4,b5,b6,b7,b8];
  var gg = [g0,g1,g2,g3,g4,g5,g6,g7,g8];
  var rr = [r0,r1,r2,r3,r4,r5,r6,r7,r8];
  var oo = [o0,o1,o2,o3,o4,o5,o6,o7,o8];
  var yy = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
  var ww = [w0,w1,w2,w3,w4,w5,w6,w7,w8];

  var m = M( [ bb, gg, rr, oo, yy, ww ] );`
  
var const2 = `const cubeStart = [...[bb, gg, rr, oo, yy, ww]];`

var front = `      <div class="face front">
        <div class="grid">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>`
      
      
var orange = `.orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }`;

var dom = `<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(Rf78d3s5)[2][8]} />
          <div class={m(Rf78d3s5)[2][7]} />
          <div class={m(Rf78d3s5)[2][6]} />
          <div class={m(Rf78d3s5)[2][5]} />
          <div class={m(Rf78d3s5)[2][4]} />
          <div class={m(Rf78d3s5)[2][3]} />
          <div class={m(Rf78d3s5)[2][2]} />
          <div class={m(Rf78d3s5)[2][1]} />
          <div class={m(Rf78d3s5)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
          <div class={m(Rf78d3s5)[0][0]} />
          <div class={m(Rf78d3s5)[0][1]} />
          <div class={m(Rf78d3s5)[0][2]} />
          <div class={m(Rf78d3s5)[0][3]} />
          <div class={m(Rf78d3s5)[0][4]} />
          <div class={m(Rf78d3s5)[0][5]} />
          <div class={m(Rf78d3s5)[0][6]} />
          <div class={m(Rf78d3s5)[0][7]} />
          <div class={m(Rf78d3s5)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(Rf78d3s5)[1][0]} />
          <div class={m(Rf78d3s5)[1][1]} />
          <div class={m(Rf78d3s5)[1][2]} />
          <div class={m(Rf78d3s5)[1][3]} />
          <div class={m(Rf78d3s5)[1][4]} />
          <div class={m(Rf78d3s5)[1][5]} />
          <div class={m(Rf78d3s5)[1][6]} />
          <div class={m(Rf78d3s5)[1][7]} />
          <div class={m(Rf78d3s5)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div class={m(Rf78d3s5)[4][0]} />
          <div class={m(Rf78d3s5)[4][1]} />
          <div class={m(Rf78d3s5)[4][2]} />
          <div class={m(Rf78d3s5)[4][3]} />
          <div class={m(Rf78d3s5)[4][4]} />
          <div class={m(Rf78d3s5)[4][5]} />
          <div class={m(Rf78d3s5)[4][6]} />
          <div class={m(Rf78d3s5)[4][7]} />
          <div class={m(Rf78d3s5)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(Rf78d3s5)[5][0]} />
          <div class={m(Rf78d3s5)[5][1]} />
          <div class={m(Rf78d3s5)[5][2]} />
          <div class={m(Rf78d3s5)[5][3]} />
          <div class={m(Rf78d3s5)[5][4]} />
          <div class={m(Rf78d3s5)[5][5]} />
          <div class={m(Rf78d3s5)[5][6]} />
          <div class={m(Rf78d3s5)[5][7]} />
          <div class={m(Rf78d3s5)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>`;

  /*
x 120 5.b2a1d8d2.js:1:44132
y 121 5.b2a1d8d2.js:1:44132
z 122 5.b2a1d8d2.js:1:44132
X 88 5.b2a1d8d2.js:1:44132
Y 89 5.b2a1d8d2.js:1:44132
Z 90

m 109 +page.svelte:728:12
e 101 +page.svelte:728:12
s 115 +page.svelte:728:12
M 77 +page.svelte:728:12
E 69 +page.svelte:728:12
S 83 +page.svelte:728:12
*/

var a = 0;
var b = 0;
var classCode = `class={m(Rf78d3s5)[a][b]}`;
</script>



<style>

html {
    width: 95%;
}

::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  .cell {
    /* center the cell content */
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Arial;
    font-size: 3rem;
    font-weight: bold;
    background: white;
  }

  .o0::before {
    width: 60px;
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o0";
  }

  .o1::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o1";
  }

  .o2::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o2";
  }

  .o3::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o3";
  }

  .o4::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o4";
  }

  .o5::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o5";
  }

  .o6::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o6";
  }

  .o7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o7";
  }

  .o8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o8";
  }

  .r0::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r0";
  }

  .r1::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r1";
  }

  .r2::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r2";
  }

  .r3::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r3";
  }

  .r4::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r4";
  }

  .r5::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r5";
  }

  .r6::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r6";
  }

  .r7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r7";
  }

  .r8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r8";
  }

  .g0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g0";
  }

  .g1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g1";
  }

  .g2::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g2";
  }

  .g3::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g3";
  }

  .g4::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g4";
  }

  .g5::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g5";
  }

  .g6::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g6";
  }

  .g7::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g7";
  }

  .g8::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g8";
  }

  .b0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b0";
  }

  .b1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b1";
  }

  .b2::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b2";
  }

  .b3::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b3";
  }

  .b4::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b4";
  }

  .b5::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b5";
  }

  .b6::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b6";
  }

  .b7::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b7";
  }

  .b8::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b8";
  }

  .y0::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y0";
  }

  .y1::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y1";
  }

  .y2::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y2";
  }

  .y3::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y3";
  }

  .y4::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y4";
  }

  .y5::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y5";
  }

  .y6::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y6";
  }

  .y7::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y7";
  }

  .y8::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y8";
  }

  .w0::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w0";
  }
  .w1::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w1";
  }

  .w2::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w2";
  }

  .w3::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w3";
  }

  .w4::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w4";
  }

  .w5::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w5";
  }

  .w6::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w6";
  }

  .w7::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w7";
  }

  .w8::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w8";
  }

  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(230, 113, 113);
    border-radius: 10px;
  }
  .blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .white {
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }

  /* body {
  background: turquoise
} */

  .container {
    width: 198px;
    height: 198px;
    perspective: 1000px;
    /*background-color: black; */
    /*float: right;*/
    margin-right: 7%;
    color: aqua;
    /*float: right;
  margin-right: 35%;
  margin-top: 15%; */
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    grid-gap: 7px;
    justify-content: center;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(3, 190px);
    grid-template-rows: repeat(3, 190px);
    grid-gap: 5px;
    justify-content: center;
  }

  .cube2 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(150deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube4 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(60deg);
    /* animation: spin 5s infinite linear;*/
  }

  .cube3 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(240deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube1 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-25deg) rotateY(335deg);
    /*animation: spin 5s infinite linear;*/
  }  

  .cube5 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(30deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube6 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(120deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube7 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(210deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube8 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(300deg);
    /*animation: spin 5s infinite linear; */
  }

  #cube9 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(25deg) rotateY(155deg);
    /*animation: spin 5s infinite linear;*/
  }  

  #cube92 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(25deg) rotateY(65deg);
    /*animation: spin 5s infinite linear; */
  }

  #cube93 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(25deg) rotateY(-25deg);
    /*animation: spin 5s infinite linear; */
  }

  #cube94 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(25deg) rotateY(-115deg);
    /* animation: spin 5s infinite linear;*/
  }

  #cube95 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-25deg) rotateY(-205deg);
    /*animation: spin 5s infinite linear;*/
  }

  #cube96 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-25deg) rotateY(-295deg);
    /*animation: spin 5s infinite linear;*/
  }

  #cube97 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-25deg) rotateY(335deg);
    /*animation: spin 5s infinite linear; */
  }

  #cube98 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-25deg) rotateY(245deg);
    /*animation: spin 5s infinite linear; */
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
  }
  .top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }

  .front {
    transform: rotateX(0deg) translateZ(100px);
  }
  .back {
    transform: rotateX(-180deg) translateZ(100px);
  }

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  button {
    margin-left: 1%;
    background-color: lightblue;
    border-width: 2px;
    border-color: #e8f7c1;
    border-radius: 10px;
    color: blue;
    font-size: 26px;
    box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);
    padding: 3px 10px 3px 10px;
  }

  button:hover {
    color: blue;
    background-color: gold;
    border-color: #e8f7c1;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);
  }

  .rite {
    float: right;
    /* position: absolute;
  right: 25%;
  top: 12%; */
  }

  h1 {
    text-align: center;
    color: #bb00ff;
  }

  #col-1 {
    position: fixed;
    width: 50%;
    left: 5;
    height: 100%;
  }

  #col-2 {
    position: fixed;
    right: 30%;
    top: 400px;
  }

  .col-3 {
    position: fixed;
    right: 12%;
    top: 20%;
    width: 35%;
  }

  #steady {
    position: fixed;
    top: 130px;
    left: 45.5%;
  }

  #steady2 {
    position: fixed;
    top: 450px;
    left: 45.5%;
  }

  h3 {
    color: #ffccff;
  }

  img {
    width: 44%;
    height: 44%;
  }
  
  div {
    color: blue;
  }

  a {
    font-size: 24; color: purple;
    font-weight: bold;
  }

  span {
    color: black;
    font-size: 22px;
  }

</style>

  
<svelte:window on:keypress={handleKey} />

<section class="columns">
  <div style="width: 40%">
    <br />
    <!--  <button on:click={state}>State</button>  // Diagnostic functions
  <button on:click={testRotate}>Test</button> -->
    <h1>{ERROR}</h1>
    <button on:click={() => console.log("m(Rf78d3s5) is", m(Rf78d3s5))}>m(Rf78d3s5)</button> 
    <button on:click={Start}>Start</button> 
    <button on:click={shu}>Scramble</button>
    <br />
    <button on:click={Xrotate}>X rotate</button>
    <button on:click={Yrotate}>Y rotate</button>
    <button on:click={Zrotate}>Z rotate</button>
    <button on:click={Xback}>X back</button>
    <button on:click={Yback}>Y back</button>
    <button on:click={Zback}>Z back</button>

    <br />
    <button on:click={Ufunc}>U</button>
    <button on:click={Dfunc}>D</button>
    <button on:click={Rfunc}>R</button>
    <button on:click={Lfunc}>L</button>
    <button on:click={Ffunc}>F</button>
    <button on:click={Bfunc}>B</button>
    <button on:click={Cxfunc}>M</button>
    <button on:click={Cyfunc}>E</button>
    <button on:click={Czfunc}>S</button>
    <br />
    <button on:click={Uzfunc}>U'</button>
    <button on:click={Dzfunc}>D'</button>
    <button on:click={Rzfunc}>R'</button>
    <button on:click={Lzfunc}>L'</button>
    <button on:click={Fzfunc}>F'</button>
    <button on:click={Bzfunc}>B'</button>
    <button on:click={Cxrfunc}>M'</button>
    <button on:click={Cyrfunc}>E'</button>
    <button on:click={Czrfunc}>S'</button>
    <br /><br />
    <!--<button on:click={rotate}>Clockwise</button>
<br><br>
<button on:click={rotate2}>Counterclockwise</button> -->
    
    <h1>Demonstration 1</h1>
    <p>The keyboard and button controls are not affected by rotations, making the cube much easier to solve than many other online Rubik's cube simulators. For example, clicking <button on:click={Rfunc}>R</button> or pressing the 'r' key always turns the right face clockwise, even after the cube has rotated. To see this, rotate the cube by pressing the 'y' key or clicking <button on:click={Yrotate}>Y rotate</button>, then press the 'r' key or click <button on:click={Rfunc}>R</button>. As before, pressing 'r' or clicking <button on:click={Rfunc}>R</button> still turns the right face. </p>
    
    <p>Now press 'v' or click on the <button on:click={Start}>Start</button> button to return the colors to their starting places on the cube and re-orient the cube by clicking <button on:click={rotate}>Perspective Clockwise</button>. The cube apears to rotate just as it did when "y" was pressed. Under the hood it changed not by rearranging six CSS classes (red, orange, green, blue, yellow, and white), but by rearranging the six nine-div faces of the cube, leaving the classes in place.</p>
    
    <p> Pressing 'r' still rotates the side that was on the right, but now it is in the front of the cube, so it's the front that rotates every time "r" is pressed or <button on:click={Rfunc}>R</button> is clicked. This is how the reference cube in the lower middle column functions. clicking <button on:click={Start}>Start</button> button or pressing 'v' re-establishes uniform colors on the sides, but leaves the lower cube orientated relative to the upper cube just as it was.</p> 
    <p> To return the lower cube to its starting configuration, you need to rotate it back to where it was, or reload the page.</p>

    <h1>Demonstration 2</h1>
    <p>
      Click <button  on:click={reverse_niklas}
        >Reverse Niklas '</button
      >
      (L' U R U' L U R) "Reverse Niklas" and observe that (1) the "fish" points
      toward the lower left and (2) the forward-facing lower-right sticker is
      yellow. Elementary tutorials say this configuration calls for the sune
      algorithm; and, indeed, sune turns the entire upper face yellow. Try
      it. <button  on:click={sune}>Sune</button> (R U R' U R U2
      R'). The cube has a way to go before being solved.
    </p>

    <p>
      Now click <button on:click={Start}>Start</button> and
      <button  on:click={reverse_niklas}
        >Reverse Niklas '</button
      >
      (L' U R U' L U R) again. Note that the upper corners have opposite colors,
      red and orange in this case (green and blue, and white and yellow are also considered
      opposite). The lower-right side sticker and the top left upward-facing
      sticker match (both are red). These observations indicate that the cube
      can be quickly solved. All you need to do is click
      <button  on:click={Uzfunc}>U'</button>
      and <button  on:click={orient_corners}>Revolve</button>
      (U R U' L' U R' U' L), or click
      <button  on:click={niklas}>Niklas</button> (R U' L' U R'
      U' L).
    </p>
<h1>The m-M(x) Closure (JS-Monad)</h1>

<pre>{`const M = function M(x) {
  return function go(func) {
    if (func === Rf78d3s5) return x;
    else x = func(x);
    return go;
  };
} where Rf78d3s5 = () => {}, and
    unless a domain for M is specified
    x can be any JavaScript value.`}</pre>

<p>This isn't a typical so-called "JavaScript monad"; i.e., ones that explicitly tries to mimick the appearance and functionality of monads defined in Category Theory. On this webpage, the m-M(x) closures facilitate, elegantly and efficiently, the composition of functions operating on encapsulated arrays of six nine-member arrays. There are no side effects. The functions are pure, accessing only their arguments (arrays of six nine-member arrays) and doing nothing but return arrays of six nine-member arrays. As is apparent, the domain of M is arrays of six nine-member arrays. The only functions used in this presentation are functions that transform the array in the m-M(x) closure in ways corresponding to moves on Rubik's cubes. Functionality to lift types into other types can be added to JS-Monads as needed -- and omitted where, as here, it isn't needed.</p>

<p> The simulated Rubik's cube is represented by "x" in a m-M(x) closure, where m and x are defined by the following code:</p>
<pre>{constants}</pre>

<a id = "cubeDef"></a>
<pre>{constants2}</pre>
<p>The correspondence between the array containing the six nine-member arrays of divs held in the m-M(x) closure -- available as m(Rf78d3s5) -- and the images of a Rubik's cube displayed in the DOM, is apparent in the code below.</p>
<pre>{dom}</pre>  


  </div>
  <br /><br /><br />
  <div style = "width: 30%">
<br><br>
</div>

  <div style="width: 35%;">
    <!-- Column 2 -->
    <div style="margin-left: 1px">
      <span style = "display: block; color:blue; font-weight:bold; text-align: center; font-size: 24px">Using the Keypad</span>
      <span style="color: blue; font-weight: bold"> Pressing the u, d, r, l, f, b,  m, e, s, x, y, and z keys has the same effect as clicking the corresponding (capitalized) buttons. Holding down the "Shift" key (or activating "CapsLock") while pressing the keys causes the reverse effect. </span>
<br><br>
      <span style = "display: block; color:blue; font-weight:bold; text-align: center; font-size: 24px">Using the Alternate Views</span>
      <span style="color: blue; font-weight: bold">The lower cube image in the center of this page gives eight distinct views of the Rubik's cube image above it. Alternate clicking on "Rotate A" and "Rotate B" tilts the view back and forth. Each repeat click rotates the view 90 degrees.</span><br><br>
      <span style = "display: block; color:blue; font-weight:bold; text-align: center; font-size: 26px">Some Algorithm Shortcuts</span><p></p>
      <button on:click={corners}>PLL Corners: R' F R' B2 R F' R' B2 R2</button>
      <button on:click={triclock}>Triangle Clockwise: M2 U' M U2 M' U' M2</button>
      <button on:click={tricounterclock}>Triangle CounterClockwise: M2 U M U2 M' U M2</button>
      <button on:click={edgesOpposite}>Edges Opposite: M M Uz M M U U M M Uz M M</button>
      <button on:click={edgesAdjacent}>Edges Adjacent: M M U M M U M U U M M U U M U U</button>
      <br />
      <button on:click={sune}>Sune: R U R' U R U2 R'</button>
      <br />
      <button on:click={antisune}>Antisune: R U2 R' U' R U' R' </button>
      <br />
      <button on:click={sexy}>Sexy: R U R' U'</button>
      <br />
      <button on:click={reverse_sexy}>Reverse Sexy: U R U' R'</button>
      <br />
      <button on:click={orient_corners}>Revolve: U R U' L' U R' U' L</button>
      <br />
      <button on:click={reverse_orient_corners}
        >Reverse Revolve: L' U R U' L U R' U'</button
      >
      <br />
      <button on:click={sledgehammer}>Sledgehammer: R' F R F' </button>
      <br />

      <button on:click={oppositeHeadlights1}
        >oppositeHeadlights1: R U R' U R U' R' U R U U R'</button
      >
      <button on:click={oppositeHeadlights2}
        >oppositeHeadlights2: R U U R' U' R U R' U' R U U' R'</button>
      <button on:click={oppositeHeadlights3}
        >oppositeHeadlights3: F R U R' U' R U R' U' R U R' U' F'</button>
      <button on:click={niklas}>Niklas: R U' L' U R' U' L</button>
      <br />
      <button on:click={reverse_niklas}>Reverse Niklas: L' U R U' L U R'</button>

      <br />
      
<h1>Discussion</h1>
  <p> This webpage is meant to do two things: (1) provide a user-friendly Rubik's cube simulation and (2) show that even a basic JS-Monad can be useful in developing complex, bug-resistant web applications. Very simple additions can add functionality, such as reverseable caches of prior configurations, queues of yet-to-be-resolved promises, and more. Here's a link to a more detailed discussion of m-M(x) closures (a/k/a JS-Monads). Here's the definition of its simplest manifestation: </p>
    <pre>{Mcode}</pre>   
    <p>We'll take a closer look at the JS-Monad soon. First, some information about the cube images shown in the middle column.</p> 
  <p> Rotation of the whole cube, its middle sections, and its faces is accomplished by JavaScript functions that rearrange the classes -- more specifically, the css background-colors -- which are assigned in various configurations to each of 54 divs in the DOM. The array of six nine-element arrays maintained in the m-M(x) closure, are references to the strings "orange", "blue", "red", "green", "yellow", or "white". There are 9 divs with each of these background colors.
  The six strings are the names of CSS classes and are also the colors of those class's "background-colors" attributes. </p>
  
  <p>Press the "v" key or click <button on:click={Start}>Start</button> to see each face of the cube with 9 identically colored divs. Click on the <button on:click={Xrotate}>X rotate</button>, <button on:click={Yrotate}>Y rotate</button>, and <button on:click={Zrotate}>Z rotate</button> buttons to see the main cube from various angles, or click on the <button on:click={rotate9}>Rotate A</button> and <button on:click={tilt9}>Rotate B</button> buttons to turn the alternate-view cube. The alternate-view cube (center bottom) can be returned to its starting orientation only be rotations or re-loading this page. <button on:click={Start}>Start</button> will give the sides of the alternate-view cube uniform colors (like the main cube), but its orientation relateve to the main cube doesn't change. This is by design. Click
  <button on:click={rotate9}>Rotate A</button>, then <button on:click={shu}>Scramble</button>, and finally, <button on:click={Start}>Start</button>.</p>
    
    <p>Functions that update the cube's configuration are provided to "m" as arguments. For example, clicking <button on:click={Rfunc}>R</button> or pressing "r" on the key pad triggers m(R), where R is defined as follows:</p>
 <pre>{Rcode}</pre> 
<p> Click "<button on:click={Start}>Start</button>" or press the "v" key, and you will see that each of the six faces of the cube oppositeHeadlights3 all nine of one of the six colors. When you press "w" or click "<button on:click={shu}>Scramble</button>", 62 sudo random moves are performed. After that, there are still nine of each of the six colors, but their locations are scattered around the cube. Click the "<button on:click={Start}>Start</button>" button or press the "v" key to put them back. </p>
<p>Here's how the "orange" CSS class is defined: </p>
<pre>{orange}</pre>
<p> User actions cause m(func) to run for some array-manipulating function "func." m(func) causes func(x) to execute, updating the array in the m-M(x) closure. The code shown in the left column distributes the updated class names over the 54 divs corresponding to the cube representation displayed in the middle column . </p>  
<h1>Encapsulation From User Action To Cube Update In the Browser</h1>
<p>Clicking on <button on:click={Ufunc}>U</button> calls Ufunc, which then call m(U).</p>
<pre>{UfuncCode}</pre>
<p>Pressing "u" calls HandleKey(e) where "e" is the keypress event. HandleKey(e) then calls m(U). </p>
<pre>{handleKeyCode}</pre>
<p> "117" is the keycode for "u", so handleKey(e) calls m(U). Ufunc (above) also calls m(U) when <button on:click={Ufunc}>U</button> is clicked. Pressing "u" three times after Clicking <button on:click={Ufunc}>U</button> returns the cube to its starting configuration. You can also restore the cube to its solved configuration by pressing "v" or clicking <button on:click={Start}>Start</button></p> 
<p> Finally, to see how user clicks and key presses change the browser display, look at the left column. Each of the six colors is the name of a class in the "style" section of this <a href="https://kit.svelte.dev/">SvelteKit</a> webpage.</p> 
<h1>The Round Trip Was Encapsulated</h1> 
<span> In the DOM, clicking on "U" calls "Ufunc()" which calls m(U). Pressing the "u" key calls "HandleKey(e)" where e.keyCode === 117 likewise results in a call to m(U). m(U) triggers the re-configuration of the simulated Rubik's cube code in the m-M(x) closure. This re-configuration automatically updates the DOM (see the "class=" code in the left column) resulting in a change in the images of the simulated Rubik's cube in the browser. </span>
<br><br>
<span> The browser update described above is the result of reassigning the six classes, red, orange, green, blue, yellow, and white, to the 54 stationary divs whose background colors are seen in browsers, and rearranged by user clicks and key presses. The state of the array of six nine-member arrays remains in the m-M(x) closure in the "script" or "style" sections of this <a href="https://kit.svelte.dev">SvelteKit</a> page's code. It is only in the DOM code, the <span style = "color: purple">{classCode}</span> statements (left column), that the contents of the m-M(x) closure are used, updating the browser images of the simulated Rubik's cube.</span>  

      <br /><br />
      <br /><br /><br />
    </div>
  </div>
</section>
<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" >
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(Rf78d3s5)[2][8]} />
          <div class={m(Rf78d3s5)[2][7]} />
          <div class={m(Rf78d3s5)[2][6]} />
          <div class={m(Rf78d3s5)[2][5]} />
          <div class={m(Rf78d3s5)[2][4]} />
          <div class={m(Rf78d3s5)[2][3]} />
          <div class={m(Rf78d3s5)[2][2]} />
          <div class={m(Rf78d3s5)[2][1]} />
          <div class={m(Rf78d3s5)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
          <div class={m(Rf78d3s5)[0][0]} />
          <div class={m(Rf78d3s5)[0][1]} />
          <div class={m(Rf78d3s5)[0][2]} />
          <div class={m(Rf78d3s5)[0][3]} />
          <div class={m(Rf78d3s5)[0][4]} />
          <div class={m(Rf78d3s5)[0][5]} />
          <div class={m(Rf78d3s5)[0][6]} />
          <div class={m(Rf78d3s5)[0][7]} />
          <div class={m(Rf78d3s5)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(Rf78d3s5)[1][0]} />
          <div class={m(Rf78d3s5)[1][1]} />
          <div class={m(Rf78d3s5)[1][2]} />
          <div class={m(Rf78d3s5)[1][3]} />
          <div class={m(Rf78d3s5)[1][4]} />
          <div class={m(Rf78d3s5)[1][5]} />
          <div class={m(Rf78d3s5)[1][6]} />
          <div class={m(Rf78d3s5)[1][7]} />
          <div class={m(Rf78d3s5)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div class={m(Rf78d3s5)[4][0]} />
          <div class={m(Rf78d3s5)[4][1]} />
          <div class={m(Rf78d3s5)[4][2]} />
          <div class={m(Rf78d3s5)[4][3]} />
          <div class={m(Rf78d3s5)[4][4]} />
          <div class={m(Rf78d3s5)[4][5]} />
          <div class={m(Rf78d3s5)[4][6]} />
          <div class={m(Rf78d3s5)[4][7]} />
          <div class={m(Rf78d3s5)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(Rf78d3s5)[5][0]} />
          <div class={m(Rf78d3s5)[5][1]} />
          <div class={m(Rf78d3s5)[5][2]} />
          <div class={m(Rf78d3s5)[5][3]} />
          <div class={m(Rf78d3s5)[5][4]} />
          <div class={m(Rf78d3s5)[5][5]} />
          <div class={m(Rf78d3s5)[5][6]} />
          <div class={m(Rf78d3s5)[5][7]} />
          <div class={m(Rf78d3s5)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>

<div id="steady2">
  <div style = "text-align:center; margin-bottom:14px">
    <button style="font-size: 17px" on:click={rotate9}>Rotate A</button>
    <button style="font-size: 17px" on:click={tilt9}>Rotate B</button></div>
  <br><br>
  <div class="container">
    <div id={cu9}>
      <div class="face front">
        <div class="grid">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(Rf78d3s5)[2][8]} />
          <div class={m(Rf78d3s5)[2][7]} />
          <div class={m(Rf78d3s5)[2][6]} />
          <div class={m(Rf78d3s5)[2][5]} />
          <div class={m(Rf78d3s5)[2][4]} />
          <div class={m(Rf78d3s5)[2][3]} />
          <div class={m(Rf78d3s5)[2][2]} />
          <div class={m(Rf78d3s5)[2][1]} />
          <div class={m(Rf78d3s5)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
          <div class={m(Rf78d3s5)[0][0]} />
          <div class={m(Rf78d3s5)[0][1]} />
          <div class={m(Rf78d3s5)[0][2]} />
          <div class={m(Rf78d3s5)[0][3]} />
          <div class={m(Rf78d3s5)[0][4]} />
          <div class={m(Rf78d3s5)[0][5]} />
          <div class={m(Rf78d3s5)[0][6]} />
          <div class={m(Rf78d3s5)[0][7]} />
          <div class={m(Rf78d3s5)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(Rf78d3s5)[1][0]} />
          <div class={m(Rf78d3s5)[1][1]} />
          <div class={m(Rf78d3s5)[1][2]} />
          <div class={m(Rf78d3s5)[1][3]} />
          <div class={m(Rf78d3s5)[1][4]} />
          <div class={m(Rf78d3s5)[1][5]} />
          <div class={m(Rf78d3s5)[1][6]} />
          <div class={m(Rf78d3s5)[1][7]} />
          <div class={m(Rf78d3s5)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div class={m(Rf78d3s5)[4][0]} />
          <div class={m(Rf78d3s5)[4][1]} />
          <div class={m(Rf78d3s5)[4][2]} />
          <div class={m(Rf78d3s5)[4][3]} />
          <div class={m(Rf78d3s5)[4][4]} />
          <div class={m(Rf78d3s5)[4][5]} />
          <div class={m(Rf78d3s5)[4][6]} />
          <div class={m(Rf78d3s5)[4][7]} />
          <div class={m(Rf78d3s5)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(Rf78d3s5)[5][0]} />
          <div class={m(Rf78d3s5)[5][1]} />
          <div class={m(Rf78d3s5)[5][2]} />
          <div class={m(Rf78d3s5)[5][3]} />
          <div class={m(Rf78d3s5)[5][4]} />
          <div class={m(Rf78d3s5)[5][5]} />
          <div class={m(Rf78d3s5)[5][6]} />
          <div class={m(Rf78d3s5)[5][7]} />
          <div class={m(Rf78d3s5)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>

<slot /> 

