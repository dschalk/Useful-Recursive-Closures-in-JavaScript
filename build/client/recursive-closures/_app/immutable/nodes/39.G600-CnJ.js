import{s as v,n as b}from"../chunks/Bv-lJKiI.js";import{S as R,i as P,d as u,a as p,j as N,s as g,c as x,g as y,b as w,k as $,h as F,e as h,f as k,t as T}from"../chunks/D2RDcUeg.js";import{m as _,M as E,d as M,a as B,b as D}from"../chunks/DPNsiiZW.js";function H(n){let r,f="Rubik's Cube matrix multiplication (using no context from Notebook)",s,t,m=`To perform matrix multiplication for a
Rubik's Cube, we can represent the cube as a 3x3x3 matrix. Each face
of the Rubik's Cube can be represented as a 3x3 matrix, and the
entire Rubik's Cube can be represented as a 3x3x6 matrix, where each
3x3x1 slice represents a face of the cube. To perform matrix
multiplication for a Rubik's Cube, we can use the NumPy package in
Python. NumPy provides efficient functions for matrix operations,
including matrix multiplication. Here's an example of how you can
perform matrix multiplication for a Rubik's Cube using NumPy:`,l,i,o;return{c(){r=h("p"),r.textContent=f,s=k(),t=h("p"),t.textContent=m,l=k(),i=h("pre"),o=T(n[0]),this.h()},l(e){r=x(e,"P",{"data-svelte-h":!0}),y(r)!=="svelte-totshb"&&(r.textContent=f),s=w(e),t=x(e,"P",{style:!0,"data-svelte-h":!0}),y(t)!=="svelte-u7kzrm"&&(t.textContent=m),l=w(e),i=x(e,"PRE",{style:!0});var a=$(i);o=F(a,n[0]),a.forEach(u),this.h()},h(){g(t,"line-height","100%"),g(i,"color","gold")},m(e,a){p(e,r,a),p(e,s,a),p(e,t,a),p(e,l,a),p(e,i,a),N(i,o)},p:b,i:b,o:b,d(e){e&&(u(r),u(s),u(t),u(l),u(i))}}}function S(n,r,f){console.log(_,E,M,B);var s=`Rubik's Cube matrix multiplication (using no context from Notebook)

To perform matrix multiplication for a Rubik's Cube, we can represent the cube as a 3x3x3 matrix. Each face of the Rubik's Cube can be represented as a 3x3 matrix, and the entire Rubik's Cube can be represented as a 3x3x6 matrix, where each 3x3x1 slice represents a face of the cube. To perform matrix multiplication for a Rubik's Cube, we can use the NumPy package in Python. NumPy provides efficient functions for matrix operations, including matrix multiplication. Here's an example of how you can perform matrix multiplication for a Rubik's Cube using NumPy:


import numpy as np

# Define the initial state of the Rubik's Cube as a 3x3x6 matrix
rubiks_cube = np.array([
    # Front face
    [[1, 1, 1],
     [1, 1, 1],
     [1, 1, 1]],
   
    # Back face
    [[2, 2, 2],
     [2, 2, 2],
     [2, 2, 2]],
   
    # Top face
    [[3, 3, 3],
     [3, 3, 3],
     [3, 3, 3]],
   
    # Bottom face
    [[4, 4, 4],
     [4, 4, 4],
     [4, 4, 4]],
   
    # Left face
    [[5, 5, 5],
     [5, 5, 5],
     [5, 5, 5]],
   
    # Right face
    [[6, 6, 6],
     [6, 6, 6],
     [6, 6, 6]]
])

# Define a transformation matrix for a specific move (e.g., a clockwise rotation of the front face)
transformation_matrix = np.array([
    [0, 1, 0],
    [-1, 0, 0],
    [0, 0, 1]
])

# Perform matrix multiplication to apply the transformation to the Rubik's Cube

transformed_cube = np.tensordot(rubiks_cube, transformation_matrix, axes=([2], [0]))

print(transformed_cube)
`,o,t=()=>{},m=()=>{};function l(a,d=[]){return function C(c){return c===t?a:c===m?d:(a=c(a),d.push(c.name),console.log("func.key is",c.key),C)}}var i=_([["blue","blue","blue","blue","blue","blue","blue","blue","blue"],["green","green","green","green","green","green","green","green","green"],["red","red","red","red","red","red","red","red","red"],["orange","orange","orange","orange","orange","orange","orange","orange","orange"],["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"],["white","white","white","white","white","white","white","white","white"]]),o=l(i);console.log("cube._data is",i._data),console.log("m(dF3x is",o(t));var e=[[0,1,0],[-1,0,0],[0,0,1],[0,1,0],[-1,0,0],[0,0,1],[0,1,0],[-1,0,0],[0,0,1]];return console.log("dot(m(dF3x)._data, R",D(e,o(t)._data)),n.$$.update=()=>{n.$$.dirty&2&&o(m).length},[s,o]}class L extends R{constructor(r){super(),P(this,r,S,H,v,{})}}export{L as component};
