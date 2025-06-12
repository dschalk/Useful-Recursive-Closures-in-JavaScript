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

  var index = 1;
  function setIndex () {index = 1};
  var Amos;
  
  var dF3x = () => {};
  var dF3ar = () => {};

/*var bb = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"];  // For testing 
var gg = ["g0","g1","g2","g3","g4","g5","g6","g7","g8"];
var rr = ["r0","r1","r2","r3","r4","r5","r6","r7","r8"];
var oo = ["o0","o1","o2","o3","o4","o5","o6","o7","o8"];
var yy = ["y0","y1","y2","y3","y4","y5","y6","y7","y8"];
var ww = ["w0","w1","w2","w3","w4","w5","w6","w7","w8"]; */

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
  var m2 = M2([bb, gg, rr, oo, yy, ww]);  

  const cubeStart = JSON.parse(JSON.stringify([bb,gg,rr,oo,yy,ww]));

  function clone (ar) {
    JSON.parse(JSON.stringify(ar));
  }

  function M2(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  };

  function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };

  var Start = () => {
    index = 1;
    m = M(cubeStart);
  };

$: Sally = m(dF3ar).length;

function reverse () { 
    let fu = m(dF3ar).pop(); 
    // discards the function being reversed.
    let foo = x => fu(fu(fu(x))); 
    // Three more turns reverses the first one.
    m(foo)(dF3ar).pop();     
    // uses foo, then discards it.
};

var reverseCode = `function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it.
}; `;

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
  

  const Xro = function Xro(ar) {
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

  const Xror = function Xror(ar) {
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
        ar[5][8],
        ar[5][7],
        ar[5][6],
        ar[5][5],
        ar[5][4],
        ar[5][3],
        ar[5][2],
        ar[5][1],
        ar[5][0],
      ];
    temp[3] = ar[4];
    temp[4] = [
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
    temp[5] = ar[3];
      
    return temp;
  };

  // const Xror = x => Xro(Xro(Xro(x)));

  const Yro = function Yro(ar) {
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

  const Yror = function Yror(ar) {
    let temp = [];
    temp[0] = ar[3];
    temp[1] = ar[2];
    temp[2] = ar[0];
    temp[3] = ar[1];
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

  //  const Yror = x => Yro(Yro(Yro(x)));
 
  const Zro = function Zro(ar) {
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

  const Zror = function Zror(ar) {
    let temp = [];
    temp[0] = [
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
      temp[1] = [
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
      temp[5] = [
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
    return temp;
  };

  // const Zror = x => Zro(Zro(Zro(x)));

 //  $: m = m(() => m(dF3x));

  const Xrotate = function Xrotate(ar) {
    m(Xro);
    m = m;
  }

  const Xback = function Xback(ar) {
    m(Xror);
    m = m;
  }

  const Yrotate = function Yrotate(ar) {
    m(Yro);
    m = m;
  }

  const Yback = function Yback(ar) {
    m(Yror);
    m = m;
  }

  const Zrotate = function Zrotate(ar) {
    m(Zro);
    m = m;
  }

  const Zback = function Zback(ar) {
    m(Zror);
    m = m;
  }

  // console.log("m(dF3x) is", m(dF3x));

  const Cz = function Cz(ar) {
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

  const Czr = function Czr(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[5][5],
      ar[0][2],
      ar[0][3],
      ar[5][4],
      ar[0][5],
      ar[0][6],
      ar[5][3],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[4][5],
      ar[1][2],
      ar[1][3],
      ar[4][4],
      ar[1][5],
      ar[1][6],
      ar[4][3],
      ar[1][8],
    ];

    temp[2] = ar[2];

    temp[3] = ar[3];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[0][1],
      ar[0][4],
      ar[0][7],
      ar[4][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[1][1],
      ar[1][4],
      ar[1][7],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
  }

  const Cx = function Cx(ar) {
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

  const Cy = function Cy(ar) {
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

  const Cyr = function Cyr(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];
    temp[4] = ar[4];
    temp[5] = ar[5];
    return temp;
  }

  const Cxr = function Cxr(ar) {    // Verified
    let temp = [];
    temp[0] = ar[0];
    temp[1] = ar[1];
    temp[2] = [
      ar[2][0],
      ar[4][7],
      ar[2][2],
      ar[2][3],
      ar[4][4],
      ar[2][5],
      ar[2][6],
      ar[4][1],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[5][1],
      ar[3][2],
      ar[3][3],
      ar[5][4],
      ar[3][5],
      ar[3][6],
      ar[5][7],
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
  } 

  const B = function B(ar) {
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
  // const Bz = x => B(B(B(x)))

  const Bz = function Bz(ar) {  // Verified
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
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];
    return temp;
  }

  const D = function D(ar) {
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

  // const Dz = x => D(D(D(x)))
  
  const Dz = function Dz(ar) {
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
  } 

  const L = function L(ar) {
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


  // const Lz = x => L(L(L(x)))
  
  const Lz = function Lz(ar) {
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
  } 

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


  // const Fz = x => F(F(F(x)))
  
  const Fz = function Fz(ar) {   // Verified
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
  } 
  
  const R = function R(ar) {
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


 // const Rz = x => R(R(R(x)))
  
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


 const Rz = function Rz(ar) {    // Verified
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
  } 

  const U = function U(ar) {
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

 //  const Uz = x => U(U(U(x)))
  
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

  const Uz = function Uz(ar) {  // Verified
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
  };

  var UfuncCode = `var Ufunc = () => {
    m(U);
    m = m;  // This triggers the DOM update
  };`

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

  var edgesAdjacent = () => {
    console.log("In edgesAdjacent");
    m(Cx)(Cx)(U)(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(U)(U)(Cx)(U)(U);
    m = m;
  };

  var doubleFish = () => {
    m(Rz)(F)(R)(Bz)(Rz)(Fz)(R)(B);
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
  
  var preserve;
  var keep;
      
  var moves = [Cx,Cz,U,D,F,B,Cx,Cy,U,D,B,R,L,Cx,D,Cz,B,U,R,L,F,Cy,Cz,Cx,Cy,L,F,B,Cx,Cy,Cz,U,D,R,L,F,Cx,D,Cy,U];

  function shu() {
    // Scrambles the cube
    Start();  
    console.log("moves is", moves);
    index = 1;
    console.log("1 m(dF3x) is", m(dF3x));
    for (let n = 0; n < 41; n += 1) {
      m(moves[Math.floor(Math.random() * 40)]);
    } 
    preserve = [...m(dF3ar)];
    m = m;  
  }

  function previous () {
      Start();
      console.log("preserve is", preserve);   
      preserve.forEach(v => m(v));
      console.log("m(dF3ar is", m(dF3ar));
  }

  function freeze () {
    keep = [...m(dF3ar)];
  }

  function getSaved () {
      m(() => m2(dF3x));
      m = m;
  }

  function handleEvent(e) { 
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
    m = m;
  }
  var handleEventCode = `function handleEvent(e) {
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
    // else if (e.keyCode === 116) rotate(); 
    m = m;  // In Svelte, this updates the DOM
  }`

var const2 = `const cubeStart = [...[bb, gg, rr, oo, yy, ww]];`

var front = `      <div class="face front">
        <div class="grid">
          <div class={m(dF3x)[3][0]} />
          <div class={m(dF3x)[3][1]} />
          <div class={m(dF3x)[3][2]} />
          <div class={m(dF3x)[3][3]} />
          <div class={m(dF3x)[3][4]} />
          <div class={m(dF3x)[3][5]} />
          <div class={m(dF3x)[3][6]} />
          <div class={m(dF3x)[3][7]} />
          <div class={m(dF3x)[3][8]} />
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
          <div class={m(dF3x)[3][0]} />
          <div class={m(dF3x)[3][1]} />
          <div class={m(dF3x)[3][2]} />
          <div class={m(dF3x)[3][3]} />
          <div class={m(dF3x)[3][4]} />
          <div class={m(dF3x)[3][5]} />
          <div class={m(dF3x)[3][6]} />
          <div class={m(dF3x)[3][7]} />
          <div class={m(dF3x)[3][8]} />
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
          <div class={m(dF3x)[4][0]} />
          <div class={m(dF3x)[4][1]} />
          <div class={m(dF3x)[4][2]} />
          <div class={m(dF3x)[4][3]} />
          <div class={m(dF3x)[4][4]} />
          <div class={m(dF3x)[4][5]} />
          <div class={m(dF3x)[4][6]} />
          <div class={m(dF3x)[4][7]} />
          <div class={m(dF3x)[4][8]} />
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


var a = 0;
var b = 0;
var classCode = `classes={m(dF3x)[a][b]}`;

var basic = `function M (x) {
  return function go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
  }`;

var log = console.log;

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

const orangeSide = `<div class="face front">
        <div class="grid">
          <div class={m(dF3x)[3][8]} />
          <div class={m(dF3x)[3][7]} />
          <div class={m(dF3x)[3][6]} />
          <div class={m(dF3x)[3][5]} />
          <div class={m(dF3x)[3][4]} />
          <div class={m(dF3x)[3][3]} />
          <div class={m(dF3x)[3][2]} />
          <div class={m(dF3x)[3][1]} />
          <div class={m(dF3x)[3][0]} />
        </div>
      </div>`;

  

  var Mdis = `    function M (x) {
      return function` 
                             
  var Mplay = `              go (func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`
  var Mend =     
    `    }
    Where dF3x = () => {}; `; // Triggers return of x;

</script>




<style>

::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  color: rgb(172, 231, 243)
}


  .cell {
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
    background-color: rgb(252, 97, 97);
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

  .rite {
    float: right;
    /* position: absolute;
  right: 25%;
  top: 12%; */
  }

  h1 {
    text-align: center;
    color: #dd00ff;
  }

  #col-1 {
    position: fixed;
    width: 50%;
    left: 5;
    height: 100%;
  }

  #col-2 {
    position: fixed;
    right: 0%;
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
    top: 120px;
    left: 75.5%;
  }

  #steady2 {
    position: fixed;
    top: 420px;
    left: 75.5%;
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

  /* a {
    font-size: 26; color: #0000ff;
    font-weight: bold;
    font-style: underline; 
    color: rgb(239, 126, 209);
  } */

</style>



<svelte:window on:keypress={handleEvent} />
<section class="columns">
  <div style="width: 70%">
   
<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div class={m(dF3x)[3][4]} />
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
          <div class={m(dF3x)[0][4]} />
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
          <div class={m(dF3x)[4][4]} />
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
</div>
</section>

<slot /> 

