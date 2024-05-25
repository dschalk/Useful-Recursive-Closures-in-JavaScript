<script>
  import clickDemo from "$lib/clickDemo.png";
  import oppH from "$lib/oppH.png";
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
  function setIndex() {
    index = 1;
  }
  var Amos;

  var dF3x = () => {};
  var dF3ar = () => {};

  function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  }

  var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);

  var mCode = `var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`

    var cubeStart = [["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"]];

    function clone(ar) {
      JSON.parse(JSON.stringify(ar))
    }                                                                                                                                                                                               var test7 = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };`;

  const Start = function Start () {
    index = 1;
    m = M([["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"]]);
  };

  var startCode = `const Start = function Start () {
    index = 1;
    m = M([["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], 
    ["green", "green", "green", "green", "green", "green", "green", "green", "green"], 
    ["red", "red", "red", "red", "red", "red", "red", "red", "red"], 
    ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], 
    ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow], 
    ["white", "white", "white", "white", "white", "white", "white", "white", "white"]]);
  };`;

  $: Sally = m(dF3ar).length;

  function reverse() {
    let fu = m(dF3ar).pop();
    // Removes the function being reversed from x.
    let foo = (v) => fu(fu(fu(v)));
    // foo is the inverse of fu.
    m(foo)(dF3ar).pop();
    // After x = foo(x) reverses fu, foo is popped off of ar.
    m = m;
  }

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

  var Xro = function Xro(ar) {
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

  var Xror = function Xror(ar) {
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

  // var Xror = x => Xro(Xro(Xro(x)));

  var Yro = function Yro(ar) {
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
  };

  var Yror = function Yror(ar) {
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
  };

  //  var Yror = x => Yro(Yro(Yro(x)));

  var Zro = function Zro(ar) {
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

  var Zror = function Zror(ar) {
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

  // var Zror = x => Zro(Zro(Zro(x)));

  //  $: m = m(() => m(dF3x));

  var Xrotate = function Xrotate(ar) {
    m(Xro);
    m = m;
  };

  var Xback = function Xback(ar) {
    m(Xror);
    m = m;
  };

  var Yrotate = function Yrotate(ar) {
    m(Yro);
    m = m;
  };

  var Yback = function Yback(ar) {
    m(Yror);
    m = m;
  };

  var Zrotate = function Zrotate(ar) {
    m(Zro);
    m = m;
  };

  var Zback = function Zback(ar) {
    m(Zror);
    m = m;
  };

  var Cz = function Cz(ar) {
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
  };

  var Czr = function Czr(ar) {
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
  };

  var Cx = function Cx(ar) {
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
  };

  var Cy = function Cy(ar) {
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
  };

  var Cyr = function Cyr(ar) {
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
  };

  var Cxr = function Cxr(ar) {
    // Verified
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
  };

  var B = function B(ar) {
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
  };
  // var Bz = x => B(B(B(x)))

  var Bz = function Bz(ar) {
    // Verified
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
  };

  var D = function D(ar) {
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
  };

  // var Dz = x => D(D(D(x)))

  var Dz = function Dz(ar) {
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
  };

  var L = function L(ar) {
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
  };

  // var Lz = x => L(L(L(x)))

  var Lz = function Lz(ar) {
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

  // var Fz = x => F(F(F(x)))

  var Fz = function Fz(ar) {
    // Verified
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
  };

  var R = function R(ar) {
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
  };

  // var Rz = x => R(R(R(x)))

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

  var Rz = function Rz(ar) {
    // Verified
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
  };

  var U = function U(ar) {
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
  };

  //  var Uz = x => U(U(U(x)))

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
  }`;

  var Uz = function Uz(ar) {
    // Verified
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
  };`;

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

  var oppH1 = () => {
    m(R)(U)(Rz)(U)(R)(Uz)(Rz)(U)(R)(U)(U)(Rz);
    m = m;
  };

  var oppH2 = () => {
    m(F)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(Fz);
    m = m;
  };

  var oppH3 = () => {
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
  cu9 = "cube9";

  function rotate9() {
    if (cu9 == "cube9") {
      console.log("You bet");
      cu9 = "cube92";
    } else if (cu9 == "cube95") cu9 = "cube9";
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
    if (cu9 == "cube9") {
      cu9 = "cube95";
    } else if (cu9 == "cube92") {
      cu9 = "cube96";
    } else if (cu9 == "cube93") {
      cu9 = "cube97";
    } else if (cu9 == "cube94") {
      cu9 = "cube98";
    } else if (cu9 == "cube98") cu9 = "cube95";
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

  var keep;

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
    U,
  ];

  console.log("moves.length is", moves.length);

  function shu() {
    index = 1;
    for (let n = 0; n < 40; n += 1) {
      m(moves[Math.floor(Math.random() * 40)]);
    }
    m = m;
  }

  function freeze() {
    keep = [...m(dF3ar)];
  }

  function getSaved() {
    m(() => m2(dF3x));
    m = m;
  }

  function handleEvent(e) {
    console.log(e.keyCode);
    if (e.keyCode === 85) m(Uz);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68) m(Dz);
    else if (e.keyCode === 100) m(D);
    else if (e.keyCode === 82) m(Rz);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76) m(Lz);
    else if (e.keyCode === 108) m(L);
    else if (e.keyCode === 70) m(Fz);
    else if (e.keyCode === 102) m(F);
    else if (e.keyCode === 66) m(Bz);
    else if (e.keyCode === 98) m(B);
    else if (e.keyCode === 77) m(Cxr);
    else if (e.keyCode === 109) m(Cx);
    else if (e.keyCode === 69) m(Cyr);
    else if (e.keyCode === 101) m(Cy);
    else if (e.keyCode === 83) m(Czr);
    else if (e.keyCode === 115) m(Cz);
    else if (e.keyCode === 120) m(Xro);
    else if (e.keyCode === 88) m(Xror);
    else if (e.keyCode === 121) m(Yro);
    else if (e.keyCode === 89) m(Yror);
    else if (e.keyCode === 122) m(Zro);
    else if (e.keyCode === 90) m(Zror);
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

  var var2 = `var cubeStart = [...[bb, gg, rr, oo, yy, ww]];`;

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
      </div>`;

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

  var Mcode = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
  var dF3x = () => {}
  var dF3ar = () => {};`;

  var orangeSide = `    <div class="face front">
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

  var Mdis = `    function M (x) {
      return function`;

  var Mplay = `              go (func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`;
  var Mend = `    }
    var dF3x = () => {}; `; // Triggers return of x;

  var demoButtons = `<div >
          <button style="background-color:{m(dF3x)[3][0]}; color: black; font-size:30px"   on:click = {() => {m = m(F)}}>m = m(F) </button>  
          <button style="background-color:{m(dF3x)[3][1]}; color: black; font-size:30px"   on:click = {() => {m = m(Cx)}}>m = m(Cx) </button>  
          <button style="background-color:{m(dF3x)[3][2]}; color: black; font-size:30px"   on:click = {() => {m = m(L)}}>m = m(L) </button>  
         
    </div>`;

  var elapsedTime = 0;
  function et() {
    m(dF3ar).length = 0;
    var start = new Date();
    let k;
    for (k = 0; k < 10000; k++) {
      shu();
      m(dF3ar).length = 0;
    }
    elapsedTime = new Date() - start;
    console.log("k is", k);
    return elapsedTime;
  }

  function et2() {
    var start = new Date();
    let k;
    for (k = 0; k < 10000; k++) {
      shu();
    }
    elapsedTime = new Date() - start;
    console.log("k is", k);
    return elapsedTime;
  }

  var etCode = `function et () {
    m(dF3ar).length = 0;  // Begin with an empty array.
    var start = new Date();  
    let k;
    for (k = 0; k < 10000; k++) {
        shu();
        m(dF3ar).length = 0;  // empty the array.
    }
    elapsedTime = new Date() - start;
    return elapsedTime;  
}`;

  var et2Code = `function et2() {
    var start = new Date();
    let k;
    for (k = 0; k < 10000; k++) {
      shu();
    }
    elapsedTime = new Date() - start;
    return elapsedTime;
  }`;

  var colors = `.blue {
    height: 60px;
    width: 60px;
    background-color: rgb(116, 116, 253);
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: rgb(76, 251, 76);
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
    border-radius: 10px;
  }
  .white {
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  } `;

var general = `    <div> 
        <button class={m(dF3x)[a][b]} on:click={() => {m = m(func)}}/>
    </div> `

var precise = `    <div> 
        <button class={m(dF3x)[3][0]} on:click={() => {m = m(Fz)}}/>
    </div> `




Start();
  // ***********************************************************
  // ***********************************************************
  // ***********************************************************

</script>



<svelte:window on:keypress={handleEvent} />
<section class="columns">
    <div style="width: 70%">

<h1>A Virtual Rubik's Cube</h1>


    <p> For the virtual Rubik's cube, this slightly modified version of the basic m-M(x) outer function, 'M', (presented on the <a href="./">Home page</a>) will be used:</p>
<pre>{test7}</pre>
    <p> "ar" was added to facilitate reversing any number of moves by repeatedly pressing "Q" or clicking "Reverse." The surprisingly concise code enabling this functionality is shown further down this page.</p>
<p>The following reset code runs every time you press "V" or click the "Start" button:   
    
<pre> m = M([ ['{m(dF3x)[0][0]}','{m(dF3x)[0][1]}','{m(dF3x)[0][2]}','{m(dF3x)[0][3]}','{m(dF3x)[0][4]}','{m(dF3x)[0][5]}','{m(dF3x)[0][6]}','{m(dF3x)[0][7]}', '{m(dF3x)[0][8]}'],  // <span style="color:red">Right side</span>
['{m(dF3x)[1][0]}','{m(dF3x)[1][1]}','{m(dF3x)[1][2]}','{m(dF3x)[1][3]}','{m(dF3x)[1][4]}','{m(dF3x)[1][5]}','{m(dF3x)[1][6]}','{m(dF3x)[1][7]}', '{m(dF3x)[1][8]}'],
['{m(dF3x)[2][0]}','{m(dF3x)[2][1]}','{m(dF3x)[2][2]}','{m(dF3x)[2][3]}','{m(dF3x)[2][4]}','{m(dF3x)[2][5]}','{m(dF3x)[2][6]}','{m(dF3x)[2][7]}', '{m(dF3x)[2][8]}'],
['{m(dF3x)[3][0]}','{m(dF3x)[3][1]}','{m(dF3x)[3][2]}','{m(dF3x)[3][3]}','{m(dF3x)[3][4]}','{m(dF3x)[3][5]}','{m(dF3x)[3][6]}','{m(dF3x)[3][7]}', '{m(dF3x)[3][8]}'],   // <span style="color:red">Front</span>
['{m(dF3x)[4][0]}','{m(dF3x)[4][1]}','{m(dF3x)[4][2]}','{m(dF3x)[4][3]}','{m(dF3x)[4][4]}','{m(dF3x)[4][5]}','{m(dF3x)[4][6]}','{m(dF3x)[4][7]}', '{m(dF3x)[4][8]}'],  // <span style="color:red">Top</span>
['{m(dF3x)[5][0]}','{m(dF3x)[5][1]}','{m(dF3x)[5][2]}','{m(dF3x)[5][3]}','{m(dF3x)[5][4]}','{m(dF3x)[5][5]}','{m(dF3x)[5][6]}','{m(dF3x)[5][7]}', '{m(dF3x)[5][8]}'] ]) } </pre>


<p> As you see, x in the m-M(x) closure is an array of six nine-member arrays of strings. The callbacks triggered by mouse clicks and key presses operate on x in the closure, rearranging the strings without disturbing the structure of an array of six nine-member arrays, and maintaining exactly nine of each color of string.   </p>
<h2> The Browser Image Changes Automatically</h2>
<p> Each of the 27 divs to which users have access (front, top, and right side) have the general structure:
<pre>{general}</pre>  
<p> For example, the upper left corner of the front face is:
<pre>{precise}</pre>  
<p> The CSS class of the upper left corner of the front face is "orange" in the start cube. Press "L" twice, and notice that m(dF3)[3][0] changed to "red." At any given time, m(dF3x)[3][0] resolves to one of six strings in the m-M(x) closure, which is the name of one of six classes in the DOM. The class "orange" specifies "background-color: orange", the class "green" specifies "background-color: green". and so forth.</p>



        <br />
        <button on:click={() => (m = m(Xro))}>X rotate</button>
        <button on:click={() => (m = m(Yro))}>Y rotate</button>
        <button on:click={() => (m = m(Zro))}>Z rotate</button>
        <span style="font-size:25px">
            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:
        </span> <span style="font-weight:bold; font-size:30px">{Sally}</span>
        <br />
        <button on:click={() => (m = m(Xror))}>X back</button>
        <button on:click={() => (m = m(Yror))}>Y back</button>
        <button on:click={() => (m = m(Zror))}>Z back</button>

        <br />
        <button on:click={() => (m = m(U))}>U</button>
        <button on:click={() => (m = m(D))}>D</button>
        <button on:click={() => (m = m(R))}>R</button>
        <button on:click={() => (m = m(L))}>L</button>
        <button on:click={() => (m = m(F))}>F</button>
        <button on:click={() => (m = m(B))}>B</button>
        <button on:click={() => (m = m(Cx))}>M</button>
        <button on:click={() => (m = m(Cy))}>E</button>
        <button on:click={() => (m = m(Cz))}>S</button>
        <br />
        <button on:click={() => (m = m(Uz))}>U'</button>
        <button on:click={() => (m = m(Dz))}>D'</button>
        <button on:click={() => (m = m(Rz))}>R'</button>
        <button on:click={() => (m = m(Lz))}>L'</button>
        <button on:click={() => (m = m(Fz))}>F'</button>
        <button on:click={() => (m = m(Bz))}>B'</button>
        <button on:click={() => (m = m(Cxr))}>M'</button>
        <button on:click={() => (m = m(Cyr))}>E'</button>
        <button on:click={() => (m = m(Czr))}>S'</button>
        <div style="margin-left: 1px">
            <p>
                Pressing the u, d, r, l, f, b, m, e, s, x, y, and z keys has the
                same effect as clicking the corresponding (capitalized) buttons.
                Holding down the "Shift" key (or activating "CapsLock") while
                pressing the keys causes the reverse effect. Pressing v, w, and
                q is equivalent to clicking on Start, Scramble, and Reverse,
                respectively.
            </p>
            <p>
                Clicking on either of two left corners of each face of the cube
                causes that face to rotate counterclockwise 90 degrees. Clicking
                on either of two right corners of each face of the cube causes
                that face to rotate clockwise 90 degrees. Clicking on edges
                rotates center sections, rather than faces. Clicking on the centers
                of the right, top, and front rotates the entire cube clockwise on the X, Y
                and Z axes, respectively. 
            </p>
            <p>
                Of course, nothing actually rotates. Rearranging references to
                strings in the m-M(x) closure creates the illusion in the
                browser that part or all of the cube rotated.
            </p>

            <h2 style="text-align: center;">Some Algorithm Shortcuts</h2>
            <p></p>
            <button on:click={corners}
                >PLL Corners: R' F R' B2 R F' R' B2 R2</button
            >
            <br />
            <button on:click={triclock}
                >Triangle Clockwise: M2 U' M U2 M' U' M2</button
            >
            <br />
            <button on:click={tricounterclock}
                >Triangle CounterClockwise: M2 U M U2 M' U M2</button
            >
            <br />
            <button on:click={edgesOpposite}
                >Edges Opposite: M M Uz M M U U M M Uz M M</button
            >
            <br />
            <button on:click={edgesAdjacent}
                >Edges Adjacent: M M U M M U M U U M M U U M U U</button
            >
            <br />
            <button on:click={doubleFish}
                >doubleFish R' F R B' R' F' R B
            </button>
            <br />
            <button on:click={sune}>Sune: R U R' U R U2 R'</button>
            <br />
            <button on:click={antisune}>Antisune: R U2 R' U' R U' R' </button>
            <br />
            <button on:click={sexy}>Sexy: R U R' U'</button>
            <br />
            <button on:click={reverse_sexy}>Reverse Sexy: U R U' R'</button>
            <br />
            <button on:click={orient_corners}
                >Revolve: U R U' L' U R' U' L</button
            >
            <br />
            <button on:click={reverse_orient_corners}
                >Reverse Revolve: L' U R U' L U R' U'</button
            >
            <br />
            <button on:click={sledgehammer}>Sledgehammer: R' F R F' </button>
            <br />

            <button on:click={oppH1}>oppH1: R U R' U R U' R' U R U U R'</button>
            <br />
            <button on:click={oppH3}
                >oppH3: F R U R' U' R U R' U' R U R' U' F'</button
            >
            <br />
            <button on:click={niklas}>Niklas: R U' L' U R' U' L</button>
            <br />
            <button on:click={reverse_niklas}
                >Reverse Niklas: L' U R U' L U R'</button
            >
            <p>
                Press the "v" key or click <button on:click={Start}
                    >Start</button
                >
                to see each face of the cube with 9 identically colored divs.
                Click on the
                <button on:click={Xrotate}>X rotate</button>,
                <button on:click={Yrotate}>Y rotate</button>, and
                <button on:click={Zrotate}>Z rotate</button>
                buttons to see the main cube from various angles.
            </p>

            <p>
                See the <a href="./">previous page</a> for detailed definitions.
                This page shows how images in the DOM are made to react to rearrangements
                of the elements of a six nine-member arrays of strings in the script,
                User mouse clicks and key presses call m(func), where func is some
                function and m is defined as m = M(x) where x is the array of six
                nine-member arrays of strings mentioned above.
            </p>
        </div>
    </div>
</section>
<!---->
<div id="steady">
    <div class="container">
        <div class={cu}>
            <div class="face front">
                <div class="grid">
                    <div> 
                        <button
                            class={m(dF3x)[3][0]}
                            on:click={() => {
                                m = m(Fz);
                            }}
                        />
                    </div>
                    <div> 
                        <button
                            class={m(dF3x)[3][1]}
                            on:click={() => {
                                m = m(Cx);
                            }}
                        />
                    </div>
                    <div> 
                        <button
                            class={m(dF3x)[3][2]}
                            on:click={() => {
                                m = m(F);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][3]}
                            on:click={() => {
                                m = m(Cy);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][4]}
                            on:click={() => {
                                m = m(Zro);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][5]}
                            on:click={() => {
                                m = m(Cyr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][6]}
                            on:click={() => {
                                m = m(Fz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][7]}
                            on:click={() => {
                                m = m(Cxr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[3][8]}
                            on:click={() => {
                                m = m(F);
                            }}
                        />
                    </div>
                </div>
            </div>

           <!----> <div class="face back">
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
                    <div>
                        <button
                            class={m(dF3x)[0][0]}
                            on:click={() => {
                                m = m(Rz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][1]}
                            on:click={() => {
                                m = m(Cz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][2]}
                            on:click={() => {
                                m = m(R);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][3]}
                            on:click={() => {
                                m = m(Cy);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][4]}
                            on:click={() => {
                                m = m(Xro);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][5]}
                            on:click={() => {
                                m = m(Cyr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][6]}
                            on:click={() => {
                                m = m(Rz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][7]}
                            on:click={() => {
                                m = m(Czr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[0][8]}
                            on:click={() => {
                                m = m(R);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div class="face left">
                <div class="grid">
                    <div><button class={m(dF3x)[1][0]} /></div>
                    <div><button class={m(dF3x)[1][1]} /></div>
                    <div><button class={m(dF3x)[1][2]} /></div>
                    <div><button class={m(dF3x)[1][3]} /></div>
                    <div><button class={m(dF3x)[1][4]} /></div>
                    <div><button class={m(dF3x)[1][5]} /></div>
                    <div><button class={m(dF3x)[1][6]} /></div>
                    <div><button class={m(dF3x)[1][7]} /></div>
                    <div><button class={m(dF3x)[1][8]} /></div>
                </div>
            </div>

            <div class="face top">
                <div class="grid">
                    <div>
                        <button
                            class={m(dF3x)[4][0]}
                            on:click={() => {
                                m = m(Uz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][1]}
                            on:click={() => {
                                m = m(Cx);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][2]}
                            on:click={() => {
                                m = m(U);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][3]}
                            on:click={() => {
                                m = m(Cz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][4]}
                            on:click={() => {
                                m = m(Yro);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][5]}
                            on:click={() => {
                                m = m(Czr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][6]}
                            on:click={() => {
                                m = m(Uz);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][7]}
                            on:click={() => {
                                m = m(Cxr);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            class={m(dF3x)[4][8]}
                            on:click={() => {
                                m = m(U);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div class="face bottom">
                <div class="grid">
                    <div><button class={m(dF3x)[5][0]} /></div>
                    <div><button class={m(dF3x)[5][1]} /></div>
                    <div><button class={m(dF3x)[5][2]} /></div>
                    <div><button class={m(dF3x)[5][3]} /></div>
                    <div><button class={m(dF3x)[5][4]} /></div>
                    <div><button class={m(dF3x)[5][5]} /></div>
                    <div><button class={m(dF3x)[5][6]} /></div>
                    <div><button class={m(dF3x)[5][7]} /></div>
                    <div><button class={m(dF3x)[5][8]} /></div>
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
        <button on:click={Start}>Start</button>
        <br /><br />
        <button on:click={shu}>Scramble</button>
    </div>
</div>

<section id="coolcow" class="columns">
    <div style="width: 70%">
        <p id="cow8">
            Continued from the <a href="./#cow7"> previous page </a>
        </p>
        <p>
            Clicking one of the buttons (below) causes the function displayed on
            it to run. For example, click "R" calls the function R. Pressing the
            "R" key and clicking the upper or lower right squares does the same
            thing. code on its face to execute. For example, clicking on the m =
            m(L) button causes <br />&#160;&#160;&#160; (1) m(L) to execute,
            which causes <br /> &#160;&#160;&#160; (2) x in the m-M(x) closure to
            mutate into L(x).
        </p>

        <p>
            For the sake of clarity, I'll spell this out in more than the usual
            amount of detail: The background color of a button or div can be set
            with x in the m-M(x) closure in these two ways: background-color =
            m(dF3x)[a][b] or class = m(df3x)[a][b] where a is 0, 1, 2, 3, 4, or
            5 and b is 0 or 8, or any number between 0 and 8. When a and b are
            in these ranges, the expression m(dF3x)[a][b] resolves to
            "blue","green", "red", "orange", "yellow", or "white". The classes
            blue, green, red, orange, yellow, and white have "background-color"
            elements corresponding to their names. So, for example, on the
            starting (solved) cube, the expression m(dF3x)[0][0] resolves to the
            string "blue" causing the statements "style = 'background-color:
            m(dF3x)[0][0]' and "class = 'm(dF3x)[0][0]'" to result in blue
            backgrounds.
        </p>

        <p>
            m(dF3x)[3] is x's fourth-from-the-left nine-element array of
            strings. When the cube is solved, each of its elements are variables
            pointing to the string "orange." The three buttons below have the
            colors of the first three elements of the fourth element of x
            because the buttons contain the statements "style = 'm(dF3x)[3][0],
            m(dF3x)[3][1], and m(dF3x)[3][2]. Notice how the colors of the
            buttons correspond to those of the top row of the front face of the
            Rubik's cube representation. Repeatedly pressing "Scramble"
            illustrates this.
        </p>

        <div>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][0]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][0] = {m(dF3x)[3][0]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][1]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][1] = {m(dF3x)[3][1]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][2]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][2] = {m(dF3x)[3][2]}
            </button>
            <br /><br />
            <button
                style="background-color:{m(
                    dF3x,
                )[3][3]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][3] = {m(dF3x)[3][3]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][4]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][4] = {m(dF3x)[3][4]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][5]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][5] = {m(dF3x)[3][5]}
            </button>
            <br /><br />
            <button
                style="background-color:{m(
                    dF3x,
                )[3][6]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][6] = {m(dF3x)[3][6]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][7]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][7] = {m(dF3x)[3][7]}
            </button>
            <button
                style="background-color:{m(
                    dF3x,
                )[3][8]}; color: black; font-size:30px"
                on:click={() => {}}
                >m(dF3x)[3][8] = {m(dF3x)[3][2]}
            </button>
        </div>
        <h2>Rotating the Left, Back, and Bottom Faces</h2>
        <p>METHOD ONE -- The fastest method:</p>
        <p>
            The left, back, and bottom faces can be turned clockwise by pressing
            L, B, and D, respectively. Hold down the SHIFT key for
            counterclockwise rotation.
        </p>
        <p>METHOD TWO -- Clicking on the cube</p>
        <p>
            Click the top center 3 times to bring the green face forward. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right top or bottom square.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the top center 3 more times, bringing
            the red face forward. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click
            the right top or bottom square. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Click the top center two times to re-orient the cube. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right center to bring up the
            bottom face. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the right
            top or bottom square. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click the
            right center 3 more times to re-orient the cube.
        </p>

        <p>
            This is the expected result of pressing "LBD" or following the
            instructions of Method 2 (above): <img
                src={clickDemo}
                alt="Click demo"
                style="width:150px;height:155px;"
            />
        </p>

        <h2>The Amazing Reverse Function</h2>
        <p>
            The value held n the closure m-M(x) is transformed whenever a user
            presses certain keys or clicks the mouse over certain parts of the
            browser display. These actions call m(func), automatically resulting
            in the mutation of x into func(x). Such mutations automatically
            change parts of the DOM where x, exposed as m(dF3x), determines the
            CSS background-color of elements. This is done directly as
            "background-color = 'm(dF3x)[j][k]" or indirectly as "class =
            'm(dF3x)[j][k]" for integers j and k in the ranges of 0,6 for j and
            0,8 for k.
        </p>
        <p>
            The definitions of "func" in m(func), as described above, can be
            found selectively at <a href="./">Home</a> and comprehensively in
            the
            <a href="https://github.com/dschalk/Recursive-Closures"
                >Github repository</a
            >. "reverse" works differently. It works with this modified version
            of M:
        </p>
        <pre>{newMcode}</pre>

        <p>
            Clicking the "Reverse" button or pressing the Q key does not
            directly cause m to run; they just cause "reverse()" to run. m is
            called twice inside of reverse.
        </p>

        <pre>{reverseCode}</pre>
        <p>
            The function reverse works because m(dF3ar) passes ar by reference,
            not value. m(dF3ar) in the "reverse" function refers to the same
            location in memory as ar in the m-M(x) closure. Logging "m(dF3ar ===
            temp (below) while running this application illustrates this.
        </p>
        <pre>{test7}</pre>
        <span id="test"></span>

        <h2>The elapsed time is {elapsedTime} milliseconds.</h2>

        <button on:click={et2}>10,000 Scrambles</button>
        <br />
        <span style="font-size:25px">
            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:
        </span> <span style="font-weight:bold; font-size:30px">{Sally}</span>
        <pre>{et2Code}</pre>
    </div>
    <div></div>
</section>

<slot />

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
        color: rgb(172, 231, 243);
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

    .blue {
        height: 60px;
        width: 60px;
        background-color: rgb(116, 116, 253);
        border-radius: 10px;
    }
    .green {
        height: 60px;
        width: 60px;
        background-color: rgb(76, 251, 76);
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
        border-radius: 10px;
    }
    .white {
        height: 60px;
        width: 60px;
        background-color: white;
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
        color: #f3c95e;
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
        top: 180px;
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

    .img2 {
        width: 150px;
        height: 155px;
    }

    div {
        color: blue;
    }

    h2 {
        text-align: center;
        font-size: 40px;
        color: rgb(255, 134, 198);
    }

    /* *********************************************************** */
    /* *************************************************************** */
    /* *************************************************************** */
</style>
