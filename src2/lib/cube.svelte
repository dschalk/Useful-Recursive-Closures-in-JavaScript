
<script>
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

  var b0 = "blue";
  var b1 = "blue";
  var b2 = "blue";
  var b3 = "blue";
  var b4 = "blue";
  var b5 = "blue";
  var b6 = "blue";
  var b7 = "blue";
  var b8 = "blue";

  var g0 = "green";
  var g1 = "green";
  var g2 = "green";
  var g3 = "green";
  var g4 = "green";
  var g5 = "green";
  var g6 = "green";
  var g7 = "green";
  var g8 = "green";

  var r0 = "red";
  var r1 = "red";
  var r2 = "red";
  var r3 = "red";
  var r4 = "red";
  var r5 = "red";
  var r6 = "red";
  var r7 = "red";
  var r8 = "red";

  var o0 = "orange";
  var o1 = "orange";
  var o2 = "orange";
  var o3 = "orange";
  var o4 = "orange";
  var o5 = "orange";
  var o6 = "orange";
  var o7 = "orange";
  var o8 = "orange";

  var y0 = "yellow";
  var y1 = "yellow";
  var y2 = "yellow";
  var y3 = "yellow";
  var y4 = "yellow";
  var y5 = "yellow";
  var y6 = "yellow";
  var y7 = "yellow";
  var y8 = "yellow";

  var w0 = "white";
  var w1 = "white";
  var w2 = "white";
  var w3 = "white";
  var w4 = "white";
  var w5 = "white";
  var w6 = "white";
  var w7 = "white";
  var w8 = "white";

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  let m = M([bb, gg, rr, oo, yy, ww]);

  var cubeStart = JSON.parse(JSON.stringify([bb, gg, rr, oo, yy, ww]));

console.log(M(3)(v=>v**3)(dF3x));

  var Start = () => {
    index = 1;
    m = M(cubeStart);
  };

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
</script>


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

    <div>
      <button
        style="background-color:{m(dF3x)[3][0]}; color: black; font-size:30px"
        on:click={() => {}}
        >m(dF3x)[3][0] = {m(dF3x)[3][0]}
      </button>
      <button
        style="background-color:{m(dF3x)[3][1]}; color: black; font-size:30px"
        on:click={() => {}}
        >m(dF3x)[3][1] = {m(dF3x)[3][1]}
      </button>
      <button
        style="background-color:{m(dF3x)[3][2]}; color: black; font-size:30px"
        on:click={() => {}}
        >m(dF3x)[3][2] = {m(dF3x)[3][2]}
      </button>
    </div>
