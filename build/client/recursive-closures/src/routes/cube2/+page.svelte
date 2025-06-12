
<script>
// import Image from './Image.svelte'  
var log = console.log;
var ERROR = "";

import { onMount } from 'svelte';

import array from '$lib/OLL.png';
import {fade , blur , fly , slide , scale , draw, crossfade} from 'svelte/transition'

function M (x) {
  return function go (func) {
    if (func) {x = func(x); return go}
    else return x;
  }
}

var b0, b1, b2, b3, b4, b5, b6, b7, b8;
var g0, g1, g2, g3, g4, g5, g6, g7, g8;
var r0, r1, r2, r3, r4, r5, r6, r7, r8;
var o0, o1, o2, o3, o4, o5, o6, o7, o8;
var y0, y1, y2, y3, y4, y5, y6, y7, y8;
var w0, w1, w2, w3, w4, w5, w6, w7, w8;

b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = "blue"
g0 = g1 = g2 = g3 = g4 = g5 = g6 = g7 = g8 = "green"
r0 = r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = "red"
o0 = o1 = o2 = o3 = o4 = o5 = o6 = o7 = o8 = "orange"
y0 = y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = "yellow"
w0 = w1 = w2 = w3 = w4 = w5 = w6 = w7 = w8 = "white"

//var b = "blue", g ="green", r = "red", y = "yellow", w = "white", o = "orange";
  
  var bb = [b0,b1,b2,b3,b4,b5,b6,b7,b8];
  var gg = [g0,g1,g2,g3,g4,g5,g6,g7,g8];
  var rr = [r0,r1,r2,r3,r4,r5,r6,r7,r8];
  var oo = [o0,o1,o2,o3,o4,o5,o6,o7,o8];
  var yy = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
  var ww = [w0,w1,w2,w3,w4,w5,w6,w7,w8];

  var cube = [bb,gg,rr,oo,yy,ww];
  var cube2 = [rr,oo,gg,bb,yy,ww];

  var m = M(cube);
  var cubeStart = [...[bb,gg,rr,oo,yy,ww]];
    
  function Xro (ar) {
    m(() => [ [ar[0][6], ar[0][3], ar[0][0], ar[0][7], ar[0][4], ar[0][1],ar[0][8], ar[0][5], ar[0][2] ], 
    [ ar[1][2], ar[1][5], ar[1][8], ar[1][1], ar[1][4], ar[1][7],ar[1][0], ar[1][3], ar[1][6] ], [ ar[4][8], ar[4][7], ar[4][6], ar[4][5], ar[4][4], ar[4][3], ar[4][2], ar[4][1], ar[4][0] ], ar[5], ar[3], [ ar[2][8], ar[2][7], ar[2][6],  ar[2][5], ar[2][4], ar[2][3],  ar[2][2], ar[2][1], ar[2][0], ] ] );
    return m();
  };

  function Yro (ar) {
    m(() => [ ar[2], ar[3], ar[1], ar[0], [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][2], ar[5][5], ar[5][8], ar[5][1], ar[5][4], ar[5][7],ar[5][0], ar[5][3], ar[5][6] ] ] );
    return m();
  };

  function Zro (ar) {
    m(() => [ [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][6], ar[5][3], ar[5][0], ar[5][7], ar[5][4], ar[5][1],ar[5][8], ar[5][5], ar[5][2] ], [ar[2][2], ar[2][5], ar[2][8], ar[2][1], ar[2][4], ar[2][7],ar[2][0], ar[2][3], ar[2][6] ], [ ar[3][6], ar[3][3], ar[3][0], ar[3][7], ar[3][4], ar[3][1],ar[3][8], ar[3][5], ar[3][2] ], [ ar[1][6], ar[1][3], ar[1][0], ar[1][7], ar[1][4], ar[1][1],ar[1][8], ar[1][5], ar[1][2] ], [ ar[0][6], ar[0][3], ar[0][0], ar[0][7], ar[0][4], ar[0][1],ar[0][8], ar[0][5], ar[0][2] ] ] ); 
    return m();
  };

  function Xrotate (ar) {
      cube = m(Xro)();
  }

  function Xback (ar) {
      cube = m(Xro)(Xro)(Xro)();
  };

  function Yrotate (ar) {
      cube = m(Yro)();
  }

  function Yback (ar) {
      cube = m(Yro)(Yro)(Yro)();
  };

  function Zrotate (ar) {
      cube = m(Zro)();
  }

  function Zback (ar) {
      cube = m(Zro)(Zro)(Zro)();
  };

/*  Used for troubleshooting
var bb = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"];
var gg = ["g0","g1","g2","g3","g4","g5","g6","g7","g8"];
var rr = ["r0","r1","r2","r3","r4","r5","r6","r7","r8"];
var oo = ["o0","o1","o2","o3","o4","o5","o6","o7","o8"];
var yy = ["y0","y1","y2","y3","y4","y5","y6","y7","y8"];
var ww = ["w0","w1","w2","w3","w4","w5","w6","w7","w8"];
var cube = [bb,gg,rr,oo,yy,ww] 
*/
console.log("m() is", m());

function Cz (ar) {
  let temp = []

  temp[0] = [ar[0][0], ar[4][3], ar[0][2],
            ar[0][3], ar[4][4], ar[0][5],
            ar[0][6], ar[4][5], ar[0][8]];

  temp[1] = [ar[1][0], ar[5][3], ar[1][2],
            ar[1][3], ar[5][4], ar[1][5],
            ar[1][6], ar[5][5], ar[1][8]];
            
  temp[2] = ar[2];

  temp[3] = ar[3];

  temp[4] = [ar[4][0], ar[4][1], ar[4][2],
            ar[1][7], ar[1][4], ar[1][1],
            ar[4][6], ar[4][7], ar[4][8]];

 temp[5] = [ar[5][0],ar[5][1], ar[5][2],
            ar[0][7], ar[0][4], ar[0][1],
            ar[5][6], ar[5][7], ar[5][8]];
return temp;
}

function Cx (ar) {
  let temp = []

  temp[0] = ar[0];

  temp[1] = ar[1];

  temp[2] = [ar[2][0], ar[5][7], ar[2][2],
            ar[2][3], ar[5][4], ar[2][5],
            ar[2][6], ar[5][1], ar[2][8]];

temp[3] = [ar[3][0], ar[4][1], ar[3][2],
            ar[3][3], ar[4][4], ar[3][5],
            ar[3][6], ar[4][7], ar[3][8]];

  temp[4] = [ar[4][0], ar[2][7], ar[4][2],
            ar[4][3], ar[2][4], ar[4][5],
            ar[4][6], ar[2][1], ar[4][8]];

  temp[5] = [ar[5][0], ar[3][1], ar[5][2],
            ar[5][3], ar[3][4], ar[5][5],
            ar[5][6], ar[3][7], ar[5][8]];
return temp;
}

function Cy (ar) {
  let temp = []

  temp[0] = [ar[0][0], ar[0][1],ar[0][2],
            ar[2][3], ar[2][4], ar[2][5],
            ar[0][6], ar[0][7], ar[0][8]];

  temp[1] = [ar[1][0], ar[1][1], ar[1][2],
            ar[3][3], ar[3][4], ar[3][5],
            ar[1][6], ar[1][7], ar[1][8]];
  
  temp[2] = [ar[2][0], ar[2][1], ar[2][2],
            ar[1][3], ar[1][4], ar[1][5],
            ar[2][6], ar[2][7], ar[2][8]];

  temp[3] = [ar[3][0], ar[3][1], ar[3][2],
            ar[0][3], ar[0][4], ar[0][5],
            ar[3][6], ar[3][7], ar[3][8]];

  temp[4] = ar[4];

  temp[5] = ar[5];

return temp;
}

function Cxr (ar) {
  let temp = []
  temp[0] = ar[0];
  temp[1] = ar[1];
  temp[2] = [ar[2][0], ar[4][1], ar[2][2],
            ar[2][3], ar[4][4], ar[2][5],
            ar[2][6], ar[4][7], ar[2][8]];

  temp[3] = [ar[3][0], ar[5][7], ar[3][2],
            ar[3][3], ar[5][4], ar[3][5],
            ar[3][6], ar[5][1], ar[3][8]];

  temp[4] = [ar[4][0], ar[3][1], ar[4][2],
            ar[4][3], ar[3][4], ar[4][5],
            ar[4][6], ar[3][7], ar[4][8]];

  temp[5] = [ar[5][0], ar[2][7], ar[5][2],
            ar[5][3], ar[2][4], ar[5][5],
            ar[5][6], ar[2][1], ar[5][8]];
return temp;
}

function B (ar) {
  let temp = []

 temp[0] = [ar[0][0], ar[0][1],ar[5][8],
            ar[0][3], ar[0][4], ar[5][7],
            ar[0][6], ar[0][7], ar[5][6]];

  temp[1] = [ar[4][2], ar[1][1], ar[1][2],
            ar[4][1], ar[1][4], ar[1][5],
            ar[4][0], ar[1][7], ar[1][8]];

  temp[2] = [ar[2][6], ar[2][3], ar[2][0],
            ar[2][7], ar[2][4], ar[2][1],
            ar[2][8], ar[2][5], ar[2][2]];

  temp[3] = ar[3];

  temp[4] = [ar[0][2], ar[0][5], ar[0][8],
            ar[4][3], ar[4][4], ar[4][5],
            ar[4][6], ar[4][7], ar[4][8]];

  temp[5] = [ar[5][0], ar[5][1], ar[5][2],
            ar[5][3], ar[5][4], ar[5][5],
            ar[1][0], ar[1][3], ar[1][6]];
return temp;
}

function Bz (ar) {
  let temp = []

  temp[0] = [ar[0][0], ar[0][1],ar[4][0],
            ar[0][3], ar[0][4], ar[4][1],
            ar[0][6], ar[0][7], ar[4][2]];

  temp[1] = [ar[5][6], ar[1][1], ar[1][2],
            ar[5][7], ar[1][4], ar[1][5],
            ar[5][8], ar[1][7], ar[1][8]];

  temp[2] = [ar[2][2], ar[2][5], ar[2][8],
            ar[2][1], ar[2][4], ar[2][7],
            ar[2][0], ar[2][3], ar[2][6]];

  temp[3] = ar[3];

  temp[4] = [ar[1][6], ar[1][3], ar[1][0],
            ar[4][3], ar[4][4], ar[4][5],
            ar[4][6], ar[4][7], ar[4][8]];

  temp[5] = [ar[5][0], ar[5][1], ar[5][2],
            ar[5][3], ar[5][4], ar[5][5],
            ar[0][2], ar[0][5], ar[0][8]];
return temp;
}

function D (ar) {
  let temp = []

  temp[0] = [ar[0][0], ar[0][1], ar[0][2],
            ar[0][3], ar[0][4], ar[0][5],
            ar[3][6], ar[3][7], ar[3][8]];

  temp[1] = [ar[1][0], ar[1][1], ar[1][2],
            ar[1][3], ar[1][4], ar[1][5],
            ar[2][6], ar[2][7], ar[2][8]];

  temp[2] = [ar[2][0], ar[2][1], ar[2][2],
            ar[2][3], ar[2][4], ar[2][5],
            ar[0][6], ar[0][7], ar[0][8]];

temp[3] = [ar[3][0], ar[3][1], ar[3][2],
            ar[3][3], ar[3][4], ar[3][5],
            ar[1][6], ar[1][7], ar[1][8]];

  temp[4] = ar[4];

temp[5] = [ar[5][6], ar[5][3], ar[5][0],
            ar[5][7], ar[5][4], ar[5][1],
            ar[5][8], ar[5][5], ar[5][2]];
return temp;
}

function Dz (ar) {
  let temp = []

  temp[0] = [ar[0][0], ar[0][1], ar[0][2],
            ar[0][3], ar[0][4], ar[0][5],
            ar[2][6], ar[2][7], ar[2][8]];

  temp[1] = [ar[1][0], ar[1][1], ar[1][2],
            ar[1][3], ar[1][4], ar[1][5],
            ar[3][6], ar[3][7], ar[3][8]];

  temp[2] = [ar[2][0], ar[2][1], ar[2][2],
            ar[2][3], ar[2][4], ar[2][5],
            ar[1][6], ar[1][7], ar[1][8]];

temp[3] = [ar[3][0], ar[3][1], ar[3][2],
            ar[3][3], ar[3][4], ar[3][5],
            ar[0][6], ar[0][7], ar[0][8]];

  temp[4] = ar[4];

temp[5] = [ar[5][2], ar[5][5], ar[5][8],
            ar[5][1], ar[5][4], ar[5][7],
            ar[5][0], ar[5][3], ar[5][6]];
return temp;
}


function L (ar) {
  let temp = []
  temp[0] = ar[0];

  temp[1] = [ar[1][6], ar[1][3], ar[1][0],
            ar[1][7], ar[1][4], ar[1][1],
            ar[1][8], ar[1][5], ar[1][2]];

  temp[2] = [ar[2][0], ar[2][1], ar[5][6],
            ar[2][3], ar[2][4], ar[5][3],
            ar[2][6], ar[2][7], ar[5][0]];

temp[3] = [ar[4][0], ar[3][1], ar[3][2],
            ar[4][3], ar[3][4], ar[3][5],
            ar[4][6], ar[3][7], ar[3][8]];

temp[4] = [ar[2][8], ar[4][1], ar[4][2],
            ar[2][5], ar[4][4], ar[4][5],
            ar[2][2], ar[4][7], ar[4][8]];

temp[5] = [ar[3][0], ar[5][1], ar[5][2],
            ar[3][3], ar[5][4], ar[5][5],
            ar[3][6], ar[5][7], ar[5][8]];
return temp;
}

function Lz (ar) {
  let temp = []
  temp[0] = ar[0];

  temp[1] = [ar[1][2], ar[1][5], ar[1][8],
            ar[1][1], ar[1][4], ar[1][7],
            ar[1][0], ar[1][3], ar[1][6]];

  temp[2] = [ar[2][0], ar[2][1], ar[4][6],
            ar[2][3], ar[2][4], ar[4][3],
            ar[2][6], ar[2][7], ar[4][0]];

temp[3] = [ar[5][0], ar[3][1], ar[3][2],
            ar[5][3], ar[3][4], ar[3][5],
            ar[5][6], ar[3][7], ar[3][8]];

temp[4] = [ar[3][0], ar[4][1], ar[4][2],
            ar[3][3], ar[4][4], ar[4][5],
            ar[3][6], ar[4][7], ar[4][8]];

temp[5] = [ar[2][8], ar[5][1], ar[5][2],
            ar[2][5], ar[5][4], ar[5][5],
            ar[2][2], ar[5][7], ar[5][8]];
return temp;
}

function F (ar) {
  let temp = []
  temp[0] = [ar[4][6], ar[0][1], ar[0][2],
            ar[4][7], ar[0][4], ar[0][5],
            ar[4][8], ar[0][7], ar[0][8]];

  temp[1] = [ar[1][0], ar[1][1], ar[5][0],
            ar[1][3], ar[1][4], ar[5][1],
            ar[1][6], ar[1][7], ar[5][2]];

  temp[2] = ar[2];

  temp[3] = [ar[3][6], ar[3][3], ar[3][0],
            ar[3][7], ar[3][4], ar[3][1],
            ar[3][8], ar[3][5], ar[3][2]];

temp[4] = [ar[4][0], ar[4][1], ar[4][2],
            ar[4][3], ar[4][4], ar[4][5],
            ar[1][8], ar[1][5], ar[1][2]];

temp[5] = [ar[0][6], ar[0][3], ar[0][0],
            ar[5][3], ar[5][4], ar[5][5],
            ar[5][6], ar[5][7], ar[5][8]];
return temp;
}


function Fz (ar) {
  let temp = []
  temp[0] = [ar[5][2], ar[0][1], ar[0][2],
            ar[5][1], ar[0][4], ar[0][5],
            ar[5][0], ar[0][7], ar[0][8]];

  temp[1] = [ar[1][0], ar[1][1], ar[4][8],
            ar[1][3], ar[1][4], ar[4][7],
            ar[1][6], ar[1][7], ar[4][6]];

  temp[2] = ar[2];

  temp[3] = [ar[3][2], ar[3][5], ar[3][8],
            ar[3][1], ar[3][4], ar[3][7],
            ar[3][0], ar[3][3], ar[3][6]];

temp[4] = [ar[4][0], ar[4][1], ar[4][2],
            ar[4][3], ar[4][4], ar[4][5],
            ar[0][0], ar[0][3], ar[0][6]];

temp[5] = [ar[1][2], ar[1][5], ar[1][8],
            ar[5][3], ar[5][4], ar[5][5],
            ar[5][6], ar[5][7], ar[5][8]];
return temp;
}

function R (ar) {
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
}

function Rz (ar) {
  let temp = []
  temp[0] = [ar[0][2], ar[0][5], ar[0][8],
            ar[0][1], ar[0][4], ar[0][7],
            ar[0][0], ar[0][3], ar[0][6]];

  temp[1] = ar[1];

  temp[2] = [ar[5][8], ar[2][1], ar[2][2],
            ar[5][5], ar[2][4], ar[2][5],
            ar[5][2], ar[2][7], ar[2][8]];

temp[3] = [ar[3][0], ar[3][1], ar[4][2],
            ar[3][3], ar[3][4], ar[4][5],
            ar[3][6], ar[3][7], ar[4][8]];

temp[4] = [ar[4][0], ar[4][1], ar[2][6],
            ar[4][3], ar[4][4], ar[2][3],
            ar[4][6], ar[4][7], ar[2][0]];

temp[5] = [ar[5][0], ar[5][1], ar[3][2],
            ar[5][3], ar[5][4], ar[3][5],
            ar[5][6], ar[5][7], ar[3][8]];
return temp;
}

function U (ar) {
  let temp = []

  temp[0] = [ar[2][0], ar[2][1], ar[2][2],
            ar[0][3], ar[0][4], ar[0][5],
            ar[0][6], ar[0][7], ar[0][8]];

  temp[1] = [ar[3][0], ar[3][1], ar[3][2],
            ar[1][3], ar[1][4], ar[1][5],
            ar[1][6], ar[1][7], ar[1][8]];

  temp[2] = [ar[1][0], ar[1][1], ar[1][2],
            ar[2][3], ar[2][4], ar[2][5],
            ar[2][6], ar[2][7], ar[2][8]];

  temp[3] = [ar[0][0], ar[0][1], ar[0][2],
            ar[3][3], ar[3][4], ar[3][5],
            ar[3][6], ar[3][7], ar[3][8]];

temp[4] = [ar[4][6], ar[4][3], ar[4][0],
            ar[4][7], ar[4][4], ar[4][1],
            ar[4][8], ar[4][5], ar[4][2]];

temp[5] = ar[5];
	return temp;
}

function Uz (ar) {
  let temp = []

  temp[0] = [ar[3][0], ar[3][1], ar[3][2],
            ar[0][3], ar[0][4], ar[0][5],
            ar[0][6], ar[0][7], ar[0][8]];

	temp[1] = [ar[2][0], ar[2][1], ar[2][2],
            ar[1][3], ar[1][4], ar[1][5],
            ar[1][6], ar[1][7], ar[1][8]];

	temp[2] = [ar[0][0], ar[0][1], ar[0][2],
            ar[2][3], ar[2][4], ar[2][5],
            ar[2][6], ar[2][7], ar[2][8]];

	temp[3] = [ar[1][0], ar[1][1], ar[1][2],
            ar[3][3], ar[3][4], ar[3][5],
            ar[3][6], ar[3][7], ar[3][8]];

  temp[4] = [ar[4][2], ar[4][5], ar[4][8],
            ar[4][1], ar[4][4], ar[4][7],
            ar[4][0], ar[4][3], ar[4][6]];

temp[5] = ar[5];
	return temp;
}
var m2 = M(0);

var Ufunc = () => {
  cube = m(U)();
};

var Dfunc = () => {
  cube = m(D)();
};

var Rfunc = () => {
  cube = m(R)();
};

var Lfunc = () => {
  cube = m(L)();
};

var Ffunc = () => {
  cube = m(F)();
};

var Bfunc = () => {
  cube = m(B)();
};

var Cxfunc = () => {
  cube = m(Cx)();
};

var Czfunc = () => {
  cube = m(Cz)();
};

var Cyfunc = () => {
  cube = m(Cy)();
};

var Uzfunc = () => {
  cube = m(U)(U)(U)();
};

var Dzfunc = () => {
  cube = m(D)(D)(D)();
};

var Rzfunc = () => {
  cube = m(R)(R)(R)();
};

var Lzfunc = () => {
  cube = m(L)(L)(L)();
};

var Fzfunc = () => {
  cube = m(F)(F)(F)();
};

var Bzfunc = () => {
  cube = m(B)(B)(B)();
};

var Cxrfunc = () => {
  cube = m(Cx)(Cx)(Cx)();
};

var Cyrfunc = () => {
  cube = m(Cy)(Cy)(Cy)();
};

var Czrfunc = () => {
  cube = m(Cz)(Cz)(Cz)();
};

var Uzfunc = () => {
  cube = m(U)(U)(U)();
}

var Start = () => {
  m = M(cubeStart);
  cube = m();
}

var corners = () => {
    cube = m(Rz)(F)(Rz)(B)(B)(R)(Fz)(Rz)(B)(B)(R)(R)();
}

var triclock = () => {
    cube = m(Cx)(Cx)(Uz)(Cx)(U)(U)(Cxr)(Uz)(Cx)(Cx)()
} 

var tricounterclock = () => {
    cube = m(Cx)(Cx)(U)(Cx)(U)(U)(Cxr)(U)(Cx)(Cx)();
}

var sune = () => {
    cube = m(R)(U)(Rz)(U)(R)(U)(U)(Rz)();
}

var antisune = () => {
    cube = m(R)(U)(U)(Rz)(Uz)(R)(Uz)(Rz)();
}

var sexy = () => {
    cube = m(R)(U)(Rz)(Uz)();
}
var reverse_sexy = () => {
    cube = m(U)(R)(Uz)(Rz)();
}

var orient_corners = () => {
    cube = m(U)(R)(Uz)(Lz)(U)(Rz)(Uz)(L)();
}

var reverse_orient_corners = () => {
    cube = m(Lz)(U)(R)(Uz)(L)(U)(Rz)(Uz)();
}

var sledgehammer = () => {
    cube = m(Rz)(F)(R)(Fz)();
}

var niklas = () => {
    cube = m(R)(Uz)(Lz)(U)(Rz)(Uz)(L)();
}

var reverse_niklas = () => {
    cube = m(Lz)(U)(R)(Uz)(L)(U)(Rz)();
}

var Jb_Perm = () => {
    cube = m(R)(U)(Rz)(Fz)(R)(U)(Rz)(Uz)(Rz)(F)(R)(R)(Uz)(Rz)(Uz)();
}  

var niklas = () => {
    cube = m(R)(Uz)(Lz)(U)(Rz)(Uz)(L)();
}

var niklas = () => {
    cube = m(R)(Uz)(Lz)(U)(Rz)(Uz)(L)();
}


var cu;
cu = "cube1";
var moves = ['U','D','R','L','F','B','Dz','Lz','Fz','Bz','U','D','R','L','Dz','Lz','Fz','Bz','U','F'];

function rotate () {
    if (cu == "cube1") cu = "cube3"
    else if (cu == "cube2") cu = "cube4"
    else if (cu == "cube3") cu = "cube2"
    else if (cu == "cube4") cu = "cube1"
    else if (cu == "cube5") cu = "cube6"
    else if (cu == "cube6") cu = "cube7"
    else if (cu == "cube7") cu = "cube8"
    else if (cu == "cube8") cu = "cube5"
    else return "cube1"
    dupCheck(m());
};

function rotate2 () {
    rotate();
    rotate();
    rotate();
};

function testRotate () {
  cube = m(() => cube2)();
  console.log("cube is", cube);
  console.log("cube2 is", cube2);
}

/*function flip () {
    if (cu == "cube1") {cu = "cube5"; m = M(cube)}
    else if (cu == "cube2") {cu = "cube7"; m = M(cube)}
    else if (cu == "cube3") {cu = "cube8"; m = M(cube)}
    else if (cu == "cube4") {cu = "cube6"; m = M(cube)}
    else if (cu == "cube5") {cu = "cube1"; m = M(cube)}
    else if (cu == "cube6") {cu = "cube4"; m = M(cube)}
    else if (cu == "cube7") {cu = "cube2"; m = M(cube)}
    else if (cu == "cube8") {cu = "cube3"; m = M(cube)}
} */

function state () {
  console.log("*************************************");
  console.log("*************************************");
  console.log("m() is", m());
  console.log("*************************************");
  console.log("cube is", cube);
  console.log("*************************************");
  console.log("*************************************");
}

var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

/*function shu() {
  var ar5 = nums.sort( ()=>Math.random()-0.5 );
  var ar4 = ar5.sort( ()=>Math.random()-0.5 );
  var a = ar4.sort( ()=>Math.random()-0.5 );
  cube = m(a[0])(a[1])(a[2])(a[3])(a[4])(a[5])(a[6])(a[7])(a[8])(a[9])(a[10])(a[11])(a[12])(a[13])(a[14])(a[15])(a[16])(a[17])(a[18])(a[19])(a[20])(a[21])(a[22])()
  
}  */ 

function shu() {
  Start();
  let ar7 = [];
  let moves = [U,D,R,L,F,Cx,Cy,Cz,U,D,R,L,F,Cx,Cy,Cz,U,D,R,L,F,Cx,Cy,Cz];
  for (let n = 0; n <24; n+=1) {
    m(moves[Math.floor(Math.random()*23)]);
    console.log("m() is", m());
  }
  // a = a.sort( ()=>Math.random()-0.5 );
  // cube = await (m(a[0])(a[1])(a[2])(a[3])(a[4])(a[5])(a[6])(a[7])(a[8])(a[9])(a[10])(a[11])(a[12])(a[13])(a[14])(a[15])(a[16])(a[17])(a[18])(a[19])(a[20])(a[21])(a[22])(a[23])())
  //dupCheck(cube);
cube = m();
console.log("Scrambled cube is", cube);
console.log("m() is", m());
return cube;
}  

function dupCheck (ar) {
  var flat = ar.flat(1);
  const set = [...new Set(flat)];
  if (flat.length !== set.length) {
    //console.log(v, "is already in the array.");
    ERROR = "STOP";
  } 
  else console.log(ar, "passed dupCheck")
}

// Xrotate(cube);

function logit (e) {console.log(e)};
function handleKeypress(e) {
    console.log(e.key, e.keyCode);
        if (e.keyCode === 8888) console.log("cow");
		else if (e.keyCode === 85) Uzfunc();
		else if (e.keyCode === 117) Ufunc();
		else if (e.keyCode === 68) Dzfunc();
		else if (e.keyCode === 100) Dfunc();
		else if (e.keyCode === 82) Rzfunc();
		else if (e.keyCode === 114) Rfunc();
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
		else if (e.keyCode === 83) Czrzfunc();
		else if (e.keyCode === 115) Czfunc();
	}


/*u 117 +page.svelte:714:10
U 85 +page.svelte:714:10
d 100 +page.svelte:714:10
D 68 +page.svelte:714:10
r 114 +page.svelte:714:10
R 82 +page.svelte:714:10
l 108 +page.svelte:714:10
L 76 +page.svelte:714:10
f 102 +page.svelte:714:10
F 70 +page.svelte:714:10
b 98 +page.svelte:714:10
B 66 +page.svelte:714:10
M 77 +page.svelte:714:10
E 69 +page.svelte:714:10
S 83 +page.svelte:714:10

<button on:click={Cxrfunc}>M'</button>
<button on:click={Cyrfunc}>E'</button>
<button on:click={Czrfunc}>S'</button>  */



</script>

<style>
/* *,  
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}  */

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
  float: right;
  margin-right:7%;
  color: aqua;
  /*float: right;
  margin-right: 35%;
  margin-top: 15%; */
}

.container2 {
  float: right;
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
  
.cube4 {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateX(-30deg) rotateY(60deg);
  /*animation: spin 5s infinite linear; */
}

.cube2 {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateX(-30deg) rotateY(150deg);
  /*animation: spin 5s infinite linear; */
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
  transform: rotateX(-30deg) rotateY(330deg);
  /*animation: spin 5s infinite linear; */
}

.cube5 {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateX(-210deg) rotateY(30deg);
  /*animation: spin 5s infinite linear; */
}

.cube6 {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotateX(-210deg) rotateY(120deg);
  /*animation: spin 5s infinite linear; */
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
    border-color: #E8F7C1;
    border-radius: 10px;
    color: blue;
    font-size: 20px;
    box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);
    padding: 3px 10px 3px 10px; 
  } 

  button:hover {
    color: blue;
    background-color: gold;
    border-color: #E8F7C1;
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
  width:35%;
}


#steady {
  position: fixed;
  top: 52%;
  left:25%;
}

h3 {
  color: #FFCCFF;
}

img {
  width:44%; 
  height:44%;
}

</style>

<svelte:window on:keypress={handleKeypress} />

<!-- <div id = 'col-1'>  
<div style="margin-top: 3%">
<div style = "margin-left:50px">  -->
<!-- Column 1 -->
<section class="columns">
<div style='width: 50%'>
  <br>
<!--  <button on:click={state}>State</button>  // Diagnostic functions
  <button on:click={testRotate}>Test</button> --> 
  <h1>{ERROR}</h1>

<button on:click={Start}>Start</button>
<button on:click={shu}>Scramble</button>
<br>
<button on:click={() => Xrotate(cube)}>X axis rotate</button>
<button on:click={() => Yrotate(cube)}>Y axis rotate</button>
<button on:click={Zrotate}>Z axis rotate</button>
<button on:click={() => Xback(cube)}>X back</button>
<button on:click={() => Yback(cube)}>Y back</button>
<button on:click={() => Zback(cube)}>Z back</button>

<br>
<button on:click={Ufunc}>U</button>
<button on:click={Dfunc}>D</button>
<button on:click={Rfunc}>R</button>
<button on:click={Lfunc}>L</button>
<button on:click={Ffunc}>F</button>
<button on:click={Bfunc}>B</button>
<button on:click={Cxfunc}>M</button>
<button on:click={Cyfunc}>E</button>
<button on:click={Czfunc}>S</button>
<br>
<button on:click={Uzfunc}>U'</button>
<button on:click={Dzfunc}>D'</button>
<button on:click={Rzfunc}>R'</button>
<button on:click={Lzfunc}>L'</button>
<button on:click={Fzfunc}>F'</button>
<button on:click={Bzfunc}>B'</button>
<button on:click={Cxrfunc}>M'</button>
<button on:click={Cyrfunc}>E'</button>
<button on:click={Czrfunc}>S'</button>
<br><br>
<!--<button on:click={rotate}>Clockwise</button>
<br><br>
<button on:click={rotate2}>Counterclockwise</button> -->
<br><br><br>

<br><br><br>
<h3 style='color: darkgreen'>Demonstration 1 - keep scrolling down if the cube covers the text </h3>
<p>Click <button style='all: revert' on:click={reverse_niklas}>Reverse Niklas '</button> (L' U R U' L U R) "Reverse Niklas" and observe that (1) the "fish" points toward the lower left and (2) the forward-facing lower-right sticker is yellow. Elementary tutorials say this configuration calls for the sune algorithm; and, indeed, sune sune makes the entire upper face yellow. Try it. <button style='all: revert' on:click={sune}>Sune</button> (R U R' U R U2 R'). The cube has a way to go before being solved. </p>


<p> Now click <button style='all: revert' on:click={Start}>Start</button> and <button style='all: revert' on:click={reverse_niklas}>Reverse Niklas '</button> (L' U R U' L U R) again. Note that the upper corners have opposite colors, red and orange in this case (green and blue are also considered opposite).The lower-right side sticker and the top left uppward-facing sticker match (both are red). These observations indicate that the cube can be quickly solved. All you need to do is click <button style='all: revert' on:click={Uzfunc}>U'</button> and <button style='all:revert' on:click={orient_corners}>Revolve</button> (U R U' L' U R' U' L), or click <button style='all:revert' on:click={niklas}>Niklas</button> (R U' L' U R' U' L).
</p>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
</div>
<br><br><br>


<div style='width: 49%'>
<!-- Column 2 -->
<div style = 'margin-left: 25px'>
<br><br>
<h1 style = "color: blue"   >Using the Keypad</h1>
<p style = "color: blue; font-weight: bold"  > Pressing u, d, r, l, f, b, m, e, and s rotates faces clockwise as you face them. This widely-used convention can be confusing since, for example, the left and right sides turn in opposite direction when both turn clockwise. </p>
    
<p style = "color: blue; font-weight: bold" >Holding shift while pressing u, d, r, l, f, b, m, e, and s rotates faces and middle layers counterclockwise. Keeping capslock on reverses this, of course, so holding down shift causes clockwise rotation.</p>

<button on:click={corners}>PLL Corners: R' F R' B2 R F' R' B2 R2</button>
<br>
<button on:click={triclock}>Triangle Clockwise: M M U' M U2 M' U</button>
<br>
<button on:click={tricounterclock}>Triangle Counterclockwise: M M U M U2 M' U</button>
<br>

<button on:click={sune}>Sune: R U R' U R U2 R'</button>
<br>
<button on:click={antisune}>Antisune: R U2 R' U' R U' R' </button>
<br>
<button on:click={sexy}>Sexy: R U R' U'</button>
<br>
<button on:click={reverse_sexy}>Reverse Sexy: U R U' R'</button>
<br>
<button on:click={orient_corners}>Revolve: U R U' L' U  R' U' L</button>
<br>
<button on:click={reverse_orient_corners}>Reverse Revolve: L' U R U' L U R' U'</button>
<br>
<button on:click={sledgehammer}>Sledgehammer: R' F R F' </button>
<br>
<button on:click={niklas}>Niklas: R U' L' U R' U' L</button>
<br>
<button on:click={reverse_niklas}>Reverse Niklas: L' U R U' L U R'</button>
<br>
<button on:click={Jb_Perm}>Jb_Perm: R U R' U' R' F R2 U' R' U' R U R' F' </button>
<br><br>
  
<!--<img alt = "OLL" src = {array} />  -->

<div>T Perm: R U R' U' R' F R2 U' R' U' R U R' F'</div>
<div>H Perm: M2' U' M2' U2' M2' U' M2'</div>
<div>Key: R U R' U' R' F R F'</div>
<div>Bottlecap: f (R U R' U') (R U R' U') f'</div>
<div>Checkerboard: M2 E2 S2  or  R2 L2 U2 D2 F2 B2</div>
<br><br>
<p>As mentioned on the splash page, rotation of the cube, its middle sections, and its faces is accomplished with JavaScript, not with the CSS transform property. The keyboard controls are not affected by rotations, making the cube much easier to solve than most (possibly all) other online Rubik's cube simulators. For example, clicking "R" always turns the right face clockwise. Other simulator keyboard controls follow the original cube orientation, so clicking "R" might turn the bottom, top, left, back, or front face. </p>
<div style="margin-down:400px"></div>

</div>
</div>
</section>
<div id = "steady">
<div class="container"> 
<div class={cu} >
  <div class="face front">
    <div class="grid" id = "a3">
        <div class = {cube[3][0]}></div> 
        <div class = {cube[3][1]}></div> 
        <div class = {cube[3][2]}></div> 
        <div class = {cube[3][3]}></div> 
        <div class = {cube[3][4]}></div> 
        <div class = {cube[3][5]}></div> 
        <div class = {cube[3][6]}></div> 
        <div class = {cube[3][7]}></div> 
        <div class = {cube[3][8]}></div> 
    </div>
    </div>

    <div class="face back">
    <div class="grid" id = "a2">
        <div class = {cube[2][8]}></div> 
        <div class = {cube[2][7]}></div> 
        <div class = {cube[2][6]}></div> 
        <div class = {cube[2][5]}></div> 
        <div class = {cube[2][4]}></div> 
        <div class = {cube[2][3]}></div> 
        <div class = {cube[2][2]}></div> 
        <div class = {cube[2][1]}></div> 
        <div class = {cube[2][0]}></div> 
    </div>
    </div>

    <div class="face right">
    <div class="grid" id = "a0">
        <div class = {cube[0][0]}></div> 
        <div class = {cube[0][1]}></div> 
        <div class = {cube[0][2]}></div> 
        <div class = {cube[0][3]}></div> 
        <div class = {cube[0][4]}></div> 
        <div class = {cube[0][5]}></div> 
        <div class = {cube[0][6]}></div> 
        <div class = {cube[0][7]}></div> 
        <div class = {cube[0][8]}></div> 
    </div>
    </div>

    <div class="face left">
    <div class="grid" id = "a1">
        <div class = {cube[1][0]}></div> 
        <div class = {cube[1][1]}></div> 
        <div class = {cube[1][2]}></div> 
        <div class = {cube[1][3]}></div> 
        <div class = {cube[1][4]}></div> 
        <div class = {cube[1][5]}></div> 
        <div class = {cube[1][6]}></div> 
        <div class = {cube[1][7]}></div> 
        <div class = {cube[1][8]}></div> 
    </div>
    </div>

    <div class="face top">
    <div class="grid" id = "a4">
        <div class = {cube[4][0]}></div> 
        <div class = {cube[4][1]}></div> 
        <div class = {cube[4][2]}></div> 
        <div class = {cube[4][3]}></div> 
        <div class = {cube[4][4]}></div> 
        <div class = {cube[4][5]}></div> 
        <div class = {cube[4][6]}></div> 
        <div class = {cube[4][7]}></div> 
        <div class = {cube[4][8]}></div> 
    </div>
    </div>

    <div class="face bottom">
    <div class="grid" id="b5">
        <div class = {cube[5][0]}></div> 
        <div class = {cube[5][1]}></div> 
        <div class = {cube[5][2]}></div> 
        <div class = {cube[5][3]}></div> 
        <div class = {cube[5][4]}></div> 
        <div class = {cube[5][5]}></div> 
        <div class = {cube[5][6]}></div> 
        <div class = {cube[5][7]}></div> 
        <div class = {cube[5][8]}></div> 
    </div>
</div>
</div>
</div>
</div>    

<slot></slot>

