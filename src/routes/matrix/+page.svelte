
<script>

import {matrix, Matrix, dot, dotMultiply, multiply} from "mathjs"

console.log(matrix, Matrix, dot, dotMultiply);

var python = `Rubik's Cube matrix multiplication (using no context from Notebook)

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
`;

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
    // import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
    var m;
    var index = 1;
    function setIndex() {
        index = 1;
    }

    function wait(ms) {
        return new Promise((r) => setTimeout(r, ms));
    }

    let pause = t => async x => {
      await wait(t)
      return x;
    }
    
    async function squareP(x) {
        await wait(300);
        return x * x;
    }

    let divPinverse = (a) => async (b) => {
        await wait(300);
        return a / b;
    };

    let addP = (x) => async (y) => {
        await wait(500);
        return parseInt(x, 10) + parseInt(y, 10);
    };

    let doubleP = async (y) => {
        await wait(600);
        return 2 * parseInt(y, 10);
    };

    let multP = (x) => async (y) => {
        await wait(600);
        return x * y;
    };

    let divP = (a) => async (b) => {
        await wait(300);
        return b / a;
    };

    async function idP(x) {
        await wait(5);
        return x;
    }

    async function cubeP(x) {
        await wait(600);
        return x * x * x;
    }

    // var slow = a => a.map(async v => await m(pause(2000))(() => m = m(v)));

    var Amos;

    var dF3x = () => {};
    var dF3ar = () => {};

    function M(x, ar = []) {
        return function go(func) {
            if (func === dF3x) return x;
            else if (func === dF3ar) return ar;
            x = func(x);
            ar.push(func.name);
            console.log("func.key is", func.key);
            return go;
        };
    }
       
    var cube = matrix([
        [
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
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
            "orange",
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
            "yellow",
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
            "white",
        ],
    ]);

    var m = M(cube);
    console.log("cube._data is", cube._data);

    var mCode = `var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`;

    var cubeStart = [
        [
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
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
            "orange",
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
            "yellow",
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
            "white",
        ],
    ];

    function clone(ar) {
        JSON.parse(JSON.stringify(ar));
    }
    var test7 = `function M(x, ar =[]) {
    return function go(func) {
      if (func === dF3x) return x;
      else if (func === dF3ar) return ar;
      x = func(x);
      ar.push(func.key);
      return go;
    };
  }`;

    function Start() {
        index = 1;
        m = M([
            [
                "blue",
                "blue",
                "blue",
                "blue",
                "blue",
                "blue",
                "blue",
                "blue",
                "blue",
            ],
            [
                "green",
                "green",
                "green",
                "green",
                "green",
                "green",
                "green",
                "green",
                "green",
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
                "orange",
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
                "yellow",
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
                "white",
            ],
        ]);
    }

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

    console.log("m(dF3x is", m(dF3x));

    var R = [[0, 1, 0], [-1, 0, 0], [0, 0, 1], [0, 1, 0], [-1, 0, 0], [0, 0, 1], [0, 1, 0], [-1, 0, 0], [0, 0, 1]   ];

    // var tr = Multiply(cube, R);

    console.log("dot(m(dF3x)._data, R", multiply(R, m(dF3x)._data));

    
</script>

<p>Rubik's Cube matrix multiplication (using no context from Notebook)</p>
<p style="line-height: 100%">To perform matrix multiplication for a
Rubik's Cube, we can represent the cube as a 3x3x3 matrix. Each face
of the Rubik's Cube can be represented as a 3x3 matrix, and the
entire Rubik's Cube can be represented as a 3x3x6 matrix, where each
3x3x1 slice represents a face of the cube. To perform matrix
multiplication for a Rubik's Cube, we can use the NumPy package in
Python. NumPy provides efficient functions for matrix operations,
including matrix multiplication. Here's an example of how you can
perform matrix multiplication for a Rubik's Cube using NumPy: 
</p>
<pre style = "color:gold">{python}</pre>













