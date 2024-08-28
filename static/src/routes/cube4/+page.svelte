<script>
    import clickDemo from "$lib/clickDemo.png";
    import oppH from "$lib/oppH.png";
    import red from "$lib/red.png";
    import green from "$lib/green.png";
    import func from "$lib/function.png";
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
    // import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

    var index = 1;
    function setIndex() {
        index = 1;
    }

    function wait(ms) {
        return new Promise((r) => setTimeout(r, ms));
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

    var Amos;

    var dF3x = () => {};
    var dF3ar = () => {};

    function M(x, ar = []) {
        return function go(func) {
            if (func === dF3x) return x;
            else if (func === dF3ar) return ar;
            x = func(x);
            ar.push(func.key);
            console.log("func.key is", func.key);
            return go;
        };
    }
    var m;

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

    var newMcode = `  function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      else if (func === dF3ar) return ar;
      x = func(x);
      if (Object.keys(func).length === 1) ar.push(func.key);
      return go;
    };
  }

      return function go(func) {
        if (func === dF3x) return x;
        if (func === dF3ar) return ar;
        else x = func(x);
        ar.push(func.key);
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

    function T(x) {
        x = m(R)(Cxr)(dF3x);
        return x;
    }

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
        Yro,
        Xro,
        Zro,
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
        else if (e.keyCode === 116) m(R)(Cxr);
        else if (e.keyCode === 84) m(Rz)(Cx);
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
        else if (e.keyCode === 111) m(Zro)(Zro)(Yro);
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

    var dom = `<div class="face front">
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

    var a = 0;
    var b = 0;
    var classCode = `classes={m(dF3x)[a][b]}`;

    var basic = `function M (x) {
  return function go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
  }`;

    var Mcode = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func.key);
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

    var CSScolorsCode = `.blue {
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
    </div> `;

    var precise = `    <div> 
        <button class={m(dF3x)[3][0]} on:click={() => {m = m(Fz)}}/>
    </div> `;

    var orangeCode = `.orange {
        height: 60px;
        width: 60px;
        background-color: orange;
        border-radius: 10px;
    }`;
    Start();
    Start();

    const mve = new Map();
    mve.set("R", Rz);
    mve.set("L", Lz);
    mve.set("U", Uz);
    mve.set("D", Dz);
    mve.set("F", F);
    mve.set("Xro", Xror);
    mve.set("Yro", Yror);
    mve.set("Zro", Zror);

    const ob = {
        R: Rz,
        L: Lz,
        U: Uz,
        D: Dz,
        F: Fz,
        B: Bz,
        Cx: Cxr,
        Cy: Cyr,
        Cz: Czr,
        Xro: Xror,
        Yro: Yror,
        Zro: Zror,
        Rz: R,
        Lz: L,
        Uz: U,
        Dz: D,
        Fz: F,
        Bz: B,
        Cxr: Cx,
        Cyr: Cy,
        Czr: Cz,
        Xror: Xro,
        Yror: Yro,
        Zror: Zro,
    };

    const obCode = `const ob = {'R': Rz, 'L': Lz, 'U': Uz, 'D': Dz, 'F': Fz, 'B': Bz, 'Cx': Cxr,
   'Cy': Cyr, 'Cz': Czr, 'Xro': Xror, 'Yro': Yror, 'Zro': Zror, 'Rz': R,
   'Lz': L, 'Uz': U, 'Dz': D, 'Fz': F, 'Bz': B, 'Cxr': Cx, 'Cyr': Cy, 'Czr': Cz,
   'Xror': Xro, 'Yror': Yro, 'Zror': Zro};`;

    R.key = "R";
    L.key = "L";
    U.key = "U";
    D.key = "D";
    F.key = "F";
    B.key = "B";
    Cx.key = "Cx";
    Cy.key = "Cy";
    Cz.key = "Cz";
    Xro.key = "Xro";
    Yro.key = "Yro";
    Zro.key = "Zro";
    Rz.key = "Rz";
    Lz.key = "Lz";
    Uz.key = "Uz";
    Dz.key = "Dz";
    Fz.key = "Fz";
    Bz.key = "Bz";
    Cxr.key = "Cxr";
    Cyr.key = "Cyr";
    Czr.key = "Czr";
    Xror.key = "Xror";
    Yror.key = "Yror";
    Zror.key = "Zror";

    var foo;

    function reverse() {
        m = m(ob[m(dF3ar).pop()]);
        m(dF3ar).pop();
    }

    const reverseCode = `function reverse () { 
    m = m(ob[m(dF3ar).pop()]); // Pops the key and runs m on value.   
    m(dF3ar).pop(); // Discard the function that m just pushed onto ar.
  }`;

    var buttonCode = `<button style="background-color: {m(dF3x)[3][3]}" 
    on:click={() => {m = m(Cyr)}} />`;

    var F7 = "";
    function f77(x) {
        F7 = x;
    }

    async function faces() {
        f77("R");
        await wait(400);
        m = m(R);
        await wait(400);
        m = m(R);
        await wait(400);
        m = m(R);
        await wait(400);
        m = m(R);
        await wait(400);

        f77("L");

        m = m(L);
        await wait(400);
        m = m(L);
        await wait(400);
        m = m(L);
        await wait(400);
        m = m(L);

        f77("U");
await wait(400);
        m = m(U);
        await wait(400);
        m = m(U);
        await wait(400);
        m = m(U);
        await wait(400);
        m = m(U);

        f77("D");
        await wait(400);
        m = m(D);
        await wait(400);
        m = m(D);
        await wait(400);
        m = m(D);
        await wait(400);
        m = m(D);

        f77("B");
        await wait(400);
        m = m(B);
        await wait(400);
        m = m(B);
        await wait(400);
        m = m(B);
        await wait(400);
        m = m(B);

        f77("F");
        await wait(400);
        m = m(F);
        await wait(400);
        m = m(F);
        await wait(400);
        m = m(F);
        await wait(400);
        m = m(F);
        for (let k = 0; k < 24; k += 1) {
            await wait(300);
            m = m(ob[m(dF3ar).pop()]);
            console.log(m(dF3x));
            m(dF3ar).pop();
            f77(23 - k);
        }
        await wait(500);
        f77("");
    }

    async function middles() {
        f77("M");
        await wait(500);
        m = m(Cx);
        await wait(500);
        m = m(Cx);
        await wait(500);
        m = m(Cx);
        await wait(500);
        m = m(Cx);

        f77("E");
        await wait(500);
        m = m(Cy);
        await wait(500);
        m = m(Cy);
        await wait(500);
        m = m(Cy);
        await wait(500);
        m = m(Cy);

        f77("S");
        await wait(500);
        m = m(Cz);
        await wait(500);
        m = m(Cz);
        await wait(500);
        m = m(Cz);
        await wait(500);
        m = m(Cz);
        for (let k = 0; k < 12; k += 1) {
            await wait(300);
            m = m(ob[m(dF3ar).pop()]);
            console.log(m(dF3x));
            m(dF3ar).pop();
            f77(11 - k);
        }
        await wait(500);
        f77("");
    }

    async function all() {
        f77("X");
        await wait(400);
        m = m(Xro);
        await wait(400);
        m = m(Xro);
        await wait(400);
        m = m(Xro);
        await wait(400);
        m = m(Xro);
        f77("Y");
        await wait(400);
        m = m(Yro);
        await wait(400);
        m = m(Yro);
        await wait(400);
        m = m(Yro);
        await wait(400);
        m = m(Yro);
        f77("Z");
        await wait(400);
        m = m(Zro);
        await wait(400);
        m = m(Zro);
        await wait(400);
        m = m(Zro);
        await wait(400);
        m = m(Zro);
        for (let k = 0; k < 12; k += 1) {
            await wait(300);
            m = m(ob[m(dF3ar).pop()]);
            console.log(m(dF3x));
            m(dF3ar).pop();
            f77(11 - k);
        }
        await wait(500);
        f77("");
    }
    var r = () => (m = m(R)(Cxr));
    var configArr = [];
    var king = {};
    king.L1s = () => (m = m(F)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(Fz));
    king.L2s = () => (m = m(Fz)(Lz)(Uz)(L)(U)(Lz)(Uz)(L)(U)(F));
    king.L3s = () =>
        (m =
            m(R)(Cxr)(Uz)(R)(Cxr)(R)(Cxr)(U)(R)(Cxr)(R)(Cxr)(U)(R)(Cxr)(R)(Cxr)(
                Uz,
            )(R)(Cxr));

    king.L4s = () =>
        (m =
            m(Rz)(Cx)(U)(R)(Cxr)(R)(Cxr)(Uz)(R)(Cxr)(R)(Cxr)(Uz)(R)(Cxr)(R)(
                Cxr,
            )(U)(Rz)(Cx));

    king.L5s = () => (m = m(Rz)(Cx)(Uz)(R)(Uz)(Rz)(U)(R)(Uz)(Rz)(U)(U)(R)(Cxr));

    king.L6s = () => (m = m(R)(Cxr)(U)(Rz)(U)(R)(Uz)(Rz)(U)(R)(U)(U)(Rz)(Cx));

    // (r U R' U) (R U' R' U) R U2' r'

    king.bar1s = () => (m = m(F)(U)(R)(Uz)(Rz)(U)(R)(Uz)(Rz)(Fz));
    king.bar2s = () => (m = m(Fz)(Uz)(Lz)(U)(L)(Uz)(Lz)(U)(L)(F));
    king.bar3s = () => (m = m(Rz)(Uz)(R)(Uz)(Rz)(U)(yz)(Rz)(U)(R)(B));

    king.L6 = [
        [
            "yellow",
            "green",
            "yellow",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "yellow",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["blue", "red", "green", "red", "red", "red", "red", "red", "red"],
        [
            "green",
            "yellow",
            "blue",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "red",
            "yellow",
            "red",
            "orange",
            "yellow",
            "yellow",
            "orange",
            "blue",
            "orange",
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

    king.L5 = [
        [
            "yellow",
            "green",
            "yellow",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "yellow",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["blue", "yellow", "green", "red", "red", "red", "red", "red", "red"],
        [
            "green",
            "orange",
            "blue",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "red",
            "blue",
            "red",
            "red",
            "yellow",
            "yellow",
            "orange",
            "yellow",
            "orange",
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

    king.L4 = [
        [
            "red",
            "blue",
            "orange",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "yellow",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["yellow", "yellow", "blue", "red", "red", "red", "red", "red", "red"],
        [
            "blue",
            "red",
            "yellow",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "orange",
            "green",
            "green",
            "orange",
            "yellow",
            "yellow",
            "red",
            "yellow",
            "green",
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

    king.L3 = [
        [
            "red",
            "blue",
            "orange",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "yellow",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["yellow", "orange", "blue", "red", "red", "red", "red", "red", "red"],
        [
            "blue",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "orange",
            "yellow",
            "green",
            "red",
            "yellow",
            "yellow",
            "red",
            "green",
            "green",
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

    king.bar2 = [
        [
            "orange",
            "blue",
            "red",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "red",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["yellow", "yellow", "green", "red", "red", "red", "red", "red", "red"],
        [
            "green",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "red",
            "orange",
            "blue",
            "yellow",
            "yellow",
            "yellow",
            "orange",
            "green",
            "blue",
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

    king.bar1 = [
        [
            "yellow",
            "red",
            "yellow",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "red",
            "green",
            "orange",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["blue", "yellow", "yellow", "red", "red", "red", "red", "red", "red"],
        [
            "yellow",
            "yellow",
            "blue",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "green",
            "orange",
            "red",
            "yellow",
            "yellow",
            "yellow",
            "green",
            "blue",
            "orange",
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

    king.L1 = [
        [
            "orange",
            "yellow",
            "red",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "yellow",
            "green",
            "yellow",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["yellow", "blue", "green", "red", "red", "red", "red", "red", "red"],
        [
            "green",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "red",
            "yellow",
            "blue",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "red",
            "blue",
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

    king.L2 = [
        [
            "yellow",
            "blue",
            "yellow",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
            "blue",
        ],
        [
            "red",
            "yellow",
            "orange",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
        ],
        ["blue", "green", "yellow", "red", "red", "red", "red", "red", "red"],
        [
            "yellow",
            "yellow",
            "blue",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
        ],
        [
            "green",
            "yellow",
            "red",
            "orange",
            "yellow",
            "yellow",
            "green",
            "red",
            "orange",
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
    async function check4 () {
        check();
        m = m(U)
        await wait(1000)
        check();
        m = m(U)
        await wait(1000)
        check();
        m = m(U)
        await wait(1000)
        check();
        m = m(U);
    }

    function check() {
        console.log(compare(m(dF3x), king.L1));
        if(compare(m(dF3x), king.L1) === "Same") {king.L1s()}
        else if(compare(m(dF3x), king.L2) === "Same") king.L2s();
        else if(compare(m(dF3x), king.L3) === "Same") king.L3s();
        else if(compare(m(dF3x), king.L4) === "Same") king.L4s();
        else if(compare(m(dF3x), king.L5) === "Same") king.L5s();
        else if (compare(m(dF3x), king.L6) === "Same") king.L6s();
        else if (compare(m(dF3x), king.bar1) === "Same") king.bar1s();
        else if (compare(m(dF3x), king.bar2) === "Same") king.bar2s();
    }

    var thing;
    var arr = [1, 2, 3, 4, 5];
    var ar = arr.length;

    var config = () => {
        king["duck".concat(JSON.stringify(ar))] = 7;
        thing = configStore["duck" + configArr.length];
        console.log("thing is", thing, typeof thing);
        thing = m(dF3x);
        configArr.push(thing);
        console.log("Here's it", thing, typeof thing);
        console.log("configARR is", configArr);
        console.log("duck0 is", duck0);
        console.log("duck1 is", duck1);
        console.log("duck2 is", duck2);
    };

    king["duck".concat(JSON.stringify(ar))] = 7;

    log("duck2 is", king.duck2);
    var Z3 = "";
    var conf0;
    var conf1;
    var conf2;

    function testLL(ar) {
        if (M(dF3x) == config1) Z3 = "r U' r2 U r2 r";
        else if (M(dF3x) == config0) Z3 = "The cube is solved";
        else Z3 = "Ready";
    }

    function queenL1() {
        m = m(() => king.L1);
    }
    function queenL2() {
        m = m(() => king.L2);
    }
    function queenL3() {
        m = m(() => king.L3);
    }
    function queenL4() {
        m = m(() => king.L4);
    }
    function queenL5() {
        m = m(() => king.L5);
    }
    function queenL6() {
        m = m(() => king.L6);
    }
    function queenbar1() {
        m = m(() => king.bar1);
    }
    function queenbar2() {
        m = m(() => king.bar2);
    }

    function compare(a, b) {
        let ar = [];
        for (let k = 0; k < 6; k += 1)
            for (let j = 0; j < 6; j += 1)
                if (JSON.stringify(a[k]) == JSON.stringify(b[j])) ar.push(1);
        if (ar.length === 6) return "Same";
        else return "Different";
    }

    // m = m(T);

    // ***********************************************************
    // ***********************************************************
    // ***********************************************************
</script>

<svelte:window on:keypress={handleEvent} />
<section class="columns">
    <div style="width: 70%">
        <h1>A Virtual Rubik's Cube</h1>
        <pre>{test7}</pre>
        <p>
            The default empty array "ar" was added to the <a href="./"
                >basic m-M(x) closure</a
            > to work with the function reverse(). Modifying "M" wasn't necessary,
            but the elegant simplicity of reversing moves with the modified "M" was
            irresistable.
        </p>
        <pre>{reverseCode}</pre>
        <p>
            The version of the m-M(x) closure used on this page encapsulates an
            array of six nine-member arrays of the strings "blue", "green",
            "red", "orange", "yellow", and "white." Users have at their disposal
            12 basic functions (top row below) and their inverses (bottom row).
        </p>

        <button on:click={() => (m = m(U))}>U</button>
        <button on:click={() => (m = m(D))}>D</button>
        <button on:click={() => (m = m(R))}>R</button>
        <button on:click={() => (m = m(L))}>L</button>
        <button on:click={() => (m = m(F))}>F</button>
        <button on:click={() => (m = m(B))}>B</button>
        <button on:click={() => (m = m(Cx))}>M</button>
        <button on:click={() => (m = m(Cy))}>E</button>
        <button on:click={() => (m = m(Cz))}>S</button>
        <button on:click={() => (m = m(Xro))}>X</button>
        <button on:click={() => (m = m(Yro))}>Y</button>
        <button on:click={() => (m = m(Zro))}>Z</button>
        <button on:click={() => (m = m(Cxr)(R))}>r</button>
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
        <button on:click={() => (m = m(Xror))}>X'</button>
        <button on:click={() => (m = m(Yror))}>Y'</button>
        <button on:click={() => (m = m(Zror))}>Z'</button>
        <button on:click={() => (m = m(Cx)(Rz))}>r'</button>

        <br />
        <p>
            User key presses and button clicks cause the 54 strings in the
            m-M(x) closure to rearrange. The virtual cube image on the right
            consists of 27 buttons with statements " style = 'background-color =
            m(dF3x)[ j ][ k ]' " for positive whole numbers j less than 6 and k
            less than 9. If the string at some position x[ j ][ k ] is replaced
            by a different string after a key press or button click, that string
            determines the color of the button containing the statement " style
            = 'background-color = m(dF3x)[ j ][ k ]' ."
        </p>

        <h3 style="text-align: center; font-size:36px">
            Four Key-Presses / Four Button-clicks Demonstration
        </h3>
        <span> Click </span><button
            style="height:32px; padding:0"
            on:click={faces}>faces</button
        >
        <span>
            to turn the right, left, top, bottom, front, and back faces with the
            functions R, L, U ("top"), D ("bottom"), F, and B .</span
        >
        <span> Click </span><button
            style="height:32px; padding:0"
            on:click={middles}>middle sections</button
        > <span> to turn the three middle sections. </span>
        <span> Click </span><button
            style="height:32px; padding:0"
            on:click={all}>whole cube</button
        >
        <span>
            to turn the cube 90 degrees on its X, Y, and Z axes. Hold down the
            'Q' key to rapidly reverse every move in order, starting with the
            most recent move.</span
        >

        <h3 style="text-align: center; font-size:36px">
            The 27 buttons of the virtual Rubik's cube never move.
        </h3>
        <p>
            The positions of the 54 elements of "x" in the closure change in
            response to user input, but the positions of the 27 buttons of the
            virtual Rubik's cube are permanently fixed. The 9 buttons of the
            outward facing side of the cube image have background colors <span
                style="color:{m(dF3x)[3][0]}">m(dF3x)[ 3 ][ 0 ],</span
            > <span style="color:{m(dF3x)[3][1]}">m(dF3x)[ 3 ][ 1 ]</span>, ...<span
                style="color:{m(dF3x)[3][8]}"
            >
                m(dF3x)[ 3 ][ 8 ]</span
            > starting in the upper-left button and ending in the lower-right button.
            As x[3] changes in the closure, so the front-facing side of the virtual
            Rubik's changes.
        </p>

        <p>
            Pressing "U", "D", "R", "L", "F", or "B" keys, or clicking their
            corresponding buttons (above), rearranges some of the background
            colors of the 9 buttons that constitute each face of the virtual
            cube, simulating the result of turning the top, bottom, right, left,
            front, and back faces, respectively, of a Rubik's cube 90%. "M",
            "E", and "S" turn the middle sections 90 degrees. X", "Y", and "Z"
            turn the whole cube clockwise 90 degrees around the traditional x,
            y, and z axes. The single quote marks signify inverses, which can be
            run on the keyboard by simultaneously holding down the Shift key.
        </p>
        <pre>{buttonCode}</pre>

        <p>
            The elements of the array of six arrays held in the m-M(x) closure
            are embedded (by means of expressions "m(dF3ar)[j][k]") in the 27
            buttons of the visible sides of the virtual Rubik's cube. If a user
            presses a key or clicks a button that calls m(func) -- thereby
            running x => func(x) in the m-M(x) closure -- each of the 27 copies
            of m in the method m (dF3ar) in the simulated Rubik's cube in the
            DOM immediately updates by returning the func(x). And if, for
            example, the string to which x[3][3] points in the closure changes
            from from 'green' to 'red', the value of m(dF3ar)[3][3] in the DOM
            will likewise change, and the color of the left square in the second
            row of the forward facing of the virtual Rubik's cube will be
            observed to change from red to green.
        </p>

        <p>
            The nine strings of the array x[3] correspond exactly to the nine
            buttons constituting the front of virtual Rubik's cube. These are
            all orange on the starting and solved cube.
        </p>

        <pre>{reverseCode}</pre>

        <p>
            The object ob contains 24 key:value pairs of the names and inverses
            of the functions that exchange and rearrange the elements of the six
            nine-member arrays of strings that constitute x in the m-M()
            closure.
        </p>
        <pre>{obCode}</pre>
        <h2>Callbacks Rearrange x in the m-M(x) Closure</h2>

        <p>
            Clicking the "Start" button (or pressing "V") refreshes the m-M(x)
            closure by declaring "m = M(x)" where
        </p>
        <pre> x = [ ['{m(dF3x)[0][0]}','{m(dF3x)[0][1]}','{m(dF3x)[0][2]}','{m(
                dF3x,
            )[0][3]}','{m(dF3x)[0][4]}','{m(dF3x)[0][5]}','{m(dF3x)[0][6]}','{m(
                dF3x,
            )[0][7]}','{m(dF3x)[0][8]}'],  // <span style="color:red"
                >Right side</span
            >
['{m(dF3x)[1][0]}','{m(dF3x)[1][1]}','{m(dF3x)[1][2]}','{m(dF3x)[1][3]}','{m(
                dF3x,
            )[1][4]}','{m(dF3x)[1][5]}','{m(dF3x)[1][6]}','{m(dF3x)[1][7]}','{m(
                dF3x,
            )[1][8]}'],
['{m(dF3x)[2][0]}','{m(dF3x)[2][1]}','{m(dF3x)[2][2]}','{m(dF3x)[2][3]}','{m(
                dF3x,
            )[2][4]}','{m(dF3x)[2][5]}','{m(dF3x)[2][6]}','{m(dF3x)[2][7]}','{m(
                dF3x,
            )[2][8]}'],
['{m(dF3x)[3][0]}','{m(dF3x)[3][1]}','{m(dF3x)[3][2]}','{m(dF3x)[3][3]}','{m(
                dF3x,
            )[3][4]}','{m(dF3x)[3][5]}','{m(dF3x)[3][6]}','{m(dF3x)[3][7]}','{m(
                dF3x,
            )[3][8]}'],   // <span style="color:red">Front</span>
['{m(dF3x)[4][0]}','{m(dF3x)[4][1]}','{m(dF3x)[4][2]}','{m(dF3x)[4][3]}','{m(
                dF3x,
            )[4][4]}','{m(dF3x)[4][5]}','{m(dF3x)[4][6]}','{m(dF3x)[4][7]}','{m(
                dF3x,
            )[4][8]}'],  // <span style="color:red">Top</span>
['{m(dF3x)[5][0]}','{m(dF3x)[5][1]}','{m(dF3x)[5][2]}','{m(dF3x)[5][3]}','{m(
                dF3x,
            )[5][4]}','{m(dF3x)[5][5]}','{m(dF3x)[5][6]}','{m(
                dF3x,
            )[5][7]}', '{m(dF3x)[5][8]}'] ] </pre>

        <p>
            x[0], x[3], and x[4] correspond to the right side, front, and top
            faces of the cube, respectively. Pressing the "F" key calls m(F),
            causing the value of x (whatever it happens to be at the time) to
            update to F(x) in the m-M(x) closure. Corresponding to the
            rearrangement of x (see above), the front face of the cube will seem
            to have rotated clockwise 90 degrees. Here's the <a href="./#Fdef"
                >definition of "F."
            </a>
        </p>

        <h2>The Browser Image</h2>
        <p>Here's the HTML code for the Rubik's cube image on the right:</p>
        <pre>{dom}</pre>
        <p>
            Changing x in the m-M(x) JavaScript closure changes m(dF3x) embedded
            in the HTML code for the cube because they both point to the same
            place in memory. x === m(dF3x) returns "true." on in memory.
            Changing the value of x changes the value of m(dF3x) and vice versa.
        </p>
        <p>
            The 27 buttons constituting the visible half of the simulated
            Rubik's cube never move. Pressing "Y" when the cube is in the
            starting configuration rearranges background colors to this
            configuration:
        </p>
        <img src={red} alt="Red side demo" style="width:150px;height:155px;" />

        <p>Press "Y" again and see this:</p>
        <img
            src={green}
            alt="Green side demo"
            style="width:150px;height:155px;"
        />
        <p>
            x[0] went from all blue (in the starting configuration), to all red
            (code is below) to all green (a little further down).
        </p>
        <pre>
  x = [ ['red','red','red','red','red','red','red','red','red'],  // Right side
  ['orange','orange','orange','orange','orange','orange','orange','orange','orange'],
  ['green','green','green','green','green','green','green','green','green'],
  ['blue','blue','blue','blue','blue','blue','blue','blue','blue'],   // Front
  ['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow'],  // Top
  ['white','white','white','white','white','white','white','white', 'white'] ] 
</pre>
        <p>And then ...</p>
        <pre>
  x = [ ['green','green','green','green','green','green','green','green','green'],  // Right side
  ['blue','blue','blue','blue','blue','blue','blue','blue','blue'],
  ['orange','orange','orange','orange','orange','orange','orange','orange','orange'],
  ['red','red','red','red','red','red','red','red','red'],   // Front
  ['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow'],  // Top
  ['white','white','white','white','white','white','white','white', 'white'] ] 
</pre>
        <p>
            x[3]'s background colors went from orange to blue to red. The cube
            seems to have rotated, but all of the divs and buttons remained
            stationary. Rearranging strings in the m-M(x) closure by pressing
            "Y", thereby rearranging the background colors of some of the
            simulated Rubik's cube buttons, created the illusion.
        </p>

        <button on:click={reverse}>Reverse</button>
        <span style="font-size:25px">
            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:
        </span> <span style="font-weight:bold; font-size:30px">{Sally}</span>
        <br />
        <button on:click={() => (m = m(Xro))}>X</button>
        <button on:click={() => (m = m(Yro))}>Y</button>
        <button on:click={() => (m = m(Zro))}>Z</button>
        <br />
        <button on:click={() => (m = m(Xror))}>X'</button>
        <button on:click={() => (m = m(Yror))}>Y'</button>
        <button on:click={() => (m = m(Zror))}>Z'</button>

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
        <button on:click={() => (m = m(Cxr)(R))}>r</button>
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
        <button on:click={() => (m = m(Cx)(Rz))}>r'</button>
        <div style="margin-left: 1px">
            <p>
                Pressing the u, d, r, l, f, b, m, e, s, x, y, and z keys has the
                same effect as clicking the corresponding (capitalized) buttons.
                Holding down the "Shift" key (or activating "CapsLock") while
                pressing the keys causes the reverse effect. Pressing v, w, and
                q is equivalent to clicking Start, Scramble, and Reverse,
                respectively.
            </p>
            <p>
                clicking either of two left corners of each face of the cube
                causes that face to seem to rotate counterclockwise 90 degrees.
                Clicking on either of two right corners of each face of the cube
                causes that face to rotate clockwise 90 degrees. clicking edges
                rotates center sections, rather than faces. clicking the centers
                of the right, top, and front rotates the entire cube clockwise
                on the X, Y and Z axes, respectively.
            </p>
            <p>
                Of course, nothing actually rotates. Rearranging strings in the
                m-M(x) closure, thereby automatically rearranging the background
                colors of the buttons inside of the divs that constitute the
                virtual Rubik's cube, makes it seem that rotation occurred.
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
                Then click
                <button on:click={Xrotate}>X rotate</button>,
                <button on:click={Yrotate}>Y rotate</button>, and
                <button on:click={Zrotate}>Z rotate</button>
                buttons to see the main cube from various angles.
            </p>
            <br /><br />
        </div>
    </div>
</section>
<div id="steady">
    <h2>{F7}</h2>
    <br />
    <div class="container">
        <div class={cu}>
            <div class="face front">
                <div class="grid">
                    <button
                        style="background-color: {m(dF3x)[3][0]}"
                        on:click={() => {
                            m = m(Fz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][1]}"
                        on:click={() => {
                            m = m(Cx);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][2]}"
                        on:click={() => {
                            m = m(F);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][3]}"
                        on:click={() => {
                            m = m(Cyr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][4]}"
                        on:click={() => {
                            m = m(Zro);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][5]}"
                        on:click={() => {
                            m = m(Cy);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][6]}"
                        on:click={() => {
                            m = m(Fz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][7]}"
                        on:click={() => {
                            m = m(Cxr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[3][8]}"
                        on:click={() => {
                            m = m(F);
                        }}
                    />
                </div>
            </div>

            <div class="face right">
                <div class="grid">
                    <button
                        style="background-color: {m(dF3x)[0][0]}"
                        on:click={() => {
                            m = m(Rz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][1]}"
                        on:click={() => {
                            m = m(Cz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][2]}"
                        on:click={() => {
                            m = m(R);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][3]}"
                        on:click={() => {
                            m = m(Cyr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][4]}"
                        on:click={() => {
                            m = m(Xro);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][5]}"
                        on:click={() => {
                            m = m(Cy);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][6]}"
                        on:click={() => {
                            m = m(Rz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][7]}"
                        on:click={() => {
                            m = m(Czr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[0][8]}"
                        on:click={() => {
                            m = m(R);
                        }}
                    />
                </div>
            </div>
            <div class="face top">
                <div class="grid">
                    <button
                        style="background-color: {m(dF3x)[4][0]}"
                        on:click={() => {
                            m = m(Uz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][1]}"
                        on:click={() => {
                            m = m(Cx);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][2]}"
                        on:click={() => {
                            m = m(U);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][3]}"
                        on:click={() => {
                            m = m(Cz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][4]}"
                        on:click={() => {
                            m = m(Yro);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][5]}"
                        on:click={() => {
                            m = m(Czr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][6]}"
                        on:click={() => {
                            m = m(Uz);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][7]}"
                        on:click={() => {
                            m = m(Cxr);
                        }}
                    />
                    <button
                        style="background-color: {m(dF3x)[4][8]}"
                        on:click={() => {
                            m = m(U);
                        }}
                    />
                </div>
            </div>
        </div>

        <br /><br /><br /><br />
        <button
            style="font-size: 22px; height:90px "
            on:click={() => (m = m(Zro)(Zro)(Yro))}
            >Other View<br /> Click or Press O</button
        >
        <br /><br />
        <button style="font-size: 19px; height:30px;" on:click={shu}
            >Scramble W
        </button>
        <br /><br />
        <button style="font-size: 19px; height:30px;" on:click={Start}
            >Start V</button
        >
    </div>
</div>

<section id="coolcow" class="columns">
    <div style="width: 70%">
        <p id="cow8">
            Continued from the <a href="./#cow7"> previous page </a>
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
        <p>METHOD TWO -- clicking the cube</p>
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
        <p>Here's the function "reverse":</p>
        <pre>{reverseCode}</pre>
        <p>And this is the key-value lookup table:</p>
        <pre>{obCode}</pre>

        <p>
            The array of six nine-member arrays of strings held in the m-M(x)
            closure is transformed whenever a user presses certain keys, or
            clicks the mouse over buttons or various parts of the displayed cube
            image. These actions call m(func) for functions "func" that
            rearrange strings in the m-M(x) closure, making it seem as though
            the virtual Rubik's cube, one of its six sides, or one of its three
            middle sections have rotated 90 degrees. This works because the
            strings in the m-M(x) closure are exposed in "background-color =
            m(dF3x)[j][k]" statements for 0 and positive integers j less than 6
            and k less than nine, in the 27 buttons that constitute the visible
            faces of the virtual Rubik's cube seen in the browser.
        </p>

        <p>
            Note: The attribute "key" added to the functions "func" discussed
            above are identical to the built-in string attributes "name." When
            trying to use "func.name," it was discovered that running "build"
            mutated names in the "ar" array in M, but an array of "func.key"
            emerged unchanged.
        </p>
        <p>
            Some of the definitions of "func" in m(func) expressions (described
            above), can be found at <a href="./">Home</a>. All of them are in
            the
            <a href="https://github.com/dschalk/Recursive-Closures"
                >Github repository</a
            >. Each time m(func) is called, func's key is appended to ar in M.
            Rapidly clicking "10,000 Scrambles" five times and waiting for it to
            finish indicates that 2,000,000 simulated 90 degree turns were
            performed and recorded in ar in around 3 seconds.
        </p>
        <h3>*********************************************************</h3>
        <p>
            I'll continue using SvelteKit, but I'm perturbed by having to add
            the attribute "key" to my functions when I would prefer to use the
            already-present attribute "name." Notice "func.key" in the
            definition of M at the top of this page. If "ar" in "M" contains
            "func.name" for each function that is called, SvelteKet renames many
            of them, causing the function "reverse" to fail.
        </p>
        <p>
            Functions are objects in JavaScript. Here's a screenshot of simple
            function's internals taken in Firefox Developer Tools (accessed by
            pressing F12).
        </p>

        <img src={func} alt="Screenshot" style="width:800px;height:600px;" />

        <p>
            Why SvelteKit mangles arrays of func.name but not func.key escapes
            me. I'm glad that whoever "optimized" SvelteKit this way spared
            developer-added attributes.
        </p>
        <h3>*********************************************************</h3>
        <p>
            The efficiency of the "reverse" function can be observed by clicking
            "Scramble" or pressing the "W" key five times, and then holding down
            the "Q" key. You can watch the simulated cube perform 200 reverse
            moves in about five seconds.
        </p>

        <pre>{reverseCode}</pre>

        <span id="test"></span>

        <h2>The elapsed time is {elapsedTime} milliseconds.</h2>

        <button on:click={et2}>10,000 Scrambles</button>
        <br />
        <span style="font-size:25px">
            &nbsp;&nbsp;&nbsp;&nbsp; Move list length:
        </span> <span style="font-weight:bold; font-size:30px">{Sally}</span>
        <pre>{et2Code}</pre>
        <h2>Move List</h2>
        <h2>.{m(dF3ar)}</h2>
        <h2>END</h2>
    </div>
    <div></div>
</section>
<button on:click={console.log(m(dF3x))}>log x</button>
<button on:click={console.log(m(dF3ar))}>log ar</button>
<button on:click={config}>config</button>
<button on:click={king.L1s}>king.L1s</button>
<button on:click={king.L2s}>king.L2s</button>
<button on:click={king.L3s}>king.L3s</button>
<button on:click={king.L4s}>king.L4s</button>
<button on:click={king.L5s}>king.L5s</button>
<button on:click={king.L6s}>king.L6s</button>

<button on:click={king.bar1s}>king.bar1s</button>
<button on:click={king.bar2s}>king.bar2s</button>
<br /><br />
<button on:click={queenL1}>king.L1</button>
<button on:click={queenL2}>king.L2</button>
<button on:click={queenL3}>king.L3</button>
<button on:click={queenL4}>king.L4</button>
<button on:click={queenL5}>king.L5</button>
<button on:click={queenL6}>king.L6</button>

<button on:click={queenbar1}>king.bar1</button>
<button on:click={queenbar2}>king.bar2</button>
<button on:click={check4}>check4</button>

<br /><br /><br />
<br /><br /><br />
<br /><br /><br />

<slot />

<style>
    ::before,
    ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        height: 60px;
        border-radius: 10px;
    }

    .less {
        font-size: 14;
        height: 25px;
        border-radius: 4px;
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
        perspective: 800px;
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
        top: 100px;
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
