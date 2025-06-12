import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { B as BROWSER, w as writable } from "../../../chunks/index.js";
const browser = BROWSER;
const css = {
  code: "pre.svelte-6bq8z1{margin-left:3%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["    \\n<script>\\n\\n    import {writable} from \\"svelte/store\\";\\n    import {browser} from \\"$app/environment\\"\\n    \\n    const userName = writable(\\n        browser && (localStorage.getItem(\\"userName\\" || \\"Fred\\"))\\n    );\\n    \\n    const top = writable (\\n        browser && (localStorage.getItem(\\"top\\" || \\"topAr\\"))\\n    ); \\n    \\n    userName.subscribe((val) => browser && (localStorage.userName = val));\\n    \\n    top.subscribe((val) => browser && (localStorage.top = val));\\n    \\n    \\n    \\n        // @ts-ignore\\n    \\n        import { merge_ssr_styles } from 'svelte/internal';\\n        //\\timport { onMount } from \\"svelte\\";\\n        import { fade } from 'svelte/transition';\\n        // import Index from \\"./index.svelte\\";\\n    /*\\n        import {\\n            complex,\\n            square,\\n            chain,\\n            e,\\n            evaluate,\\n            log,\\n            pi,\\n            pow,\\n            round,\\n            sqrt,\\n            create,\\n            all\\n        } from 'mathjs';\\n    \\n        console.log('square(pow(-4, 1/2))', square(pow(complex(4), 1/2))); \\n        // var im = sqrt(complex(16, -4));\\n        // console.log('sqrt(complex(16,-4', sqrt(complex(16, -4)));\\n    */\\n        // import { top } from '/stores.js';\\n        // import { userName } from '/stores.js';\\n    \\n    \\n        function ret () {};\\n    \\n        var m2;\\n        var PIN, WINNERS;\\n        var WIN = 1000.0;\\n        var FIN = 1001.0;\\n        var FINAL;\\n        var millisec = 0;\\n        var seconds = 0;\\n        var timer;\\n        var d2;\\n        var startStop = 'Start';\\n        var value;\\n        var d2 = '';\\n        var A,\\n            B,\\n            C,\\n            D,\\n            AA,\\n            BB,\\n            CC,\\n            DD,\\n            EE,\\n            FF,\\n            GG,\\n            HH = 'wait';\\n        var N = 0;\\n        var l = console.log;\\n        var b0 = 'none';\\n        var b1 = 'none';\\n        var b2 = 'none';\\n        var b3 = 'none';\\n        var index;\\n        var b4 = 'none';\\n        var b5 = 'none';\\n        var b6 = 'none';\\n        var b7 = 'none';\\n        var s = ret;\\n        var AA;\\n        var BB;\\n        var CC;\\n        var DD;\\n        var EEE = 'awaiting selection';\\n        var FF;\\n        var WW;\\n        var XX;\\n        var YY;\\n        var ZZ;\\n        var SCORE;\\n        $: SCORE = [0];\\n        var ZYXW;\\n        var WXYZ;\\n    \\n        var runRoll;\\n        runRoll = (b) => {\\n            var arr = [\\n                [\\n                    Math.floor(Math.random() * 6) + 1,\\n                    Math.floor(Math.random() * 6) + 1,\\n                    Math.floor(Math.random() * 12) + 1,\\n                    Math.floor(Math.random() * 20) + 1\\n                ],\\n                [],\\n                ['+'],\\n                [],\\n                [b],\\n                [],\\n                [0],\\n                []\\n            ];\\n            m2 = M(arr);\\n            // m2 = m2(fuu);\\n    \\n            //[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));\\n            EEE = 'yet to be selected';\\n            m2 = M(m2(s));\\n            updateRoll(m2);\\n            m2(fu);\\n            if (tog) display();\\n            return m2;\\n        };\\n        var Z = '';\\n        $: Z;\\n        var x;\\n        function updateRoll(m) {\\n            console.log('In updateRoll. m(s) is', m(s));\\n            AA = m(s)[0][0];\\n            BB = m(s)[0][1];\\n            CC = m(s)[0][2];\\n            DD = m(s)[0][3];\\n    \\n            WW = m(s)[1][0];\\n            XX = m(s)[1][1];\\n            YY = m(s)[1][2];\\n            ZZ = m(s)[1][3];\\n            EE = m(s)[2];\\n            FF = m(s)[3];\\n            SCORE = m(s)[4];\\n            b0 = b1 = b2 = b3 = 'inline';\\n            b4 = b5 = b6 = b7 = 'none';\\n        }\\n        function sfunc() {\\n            b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = 'none';\\n            if (AA != (undefined && 0)) b0 = 'inline';\\n            if (BB != (undefined && 0)) b1 = 'inline';\\n            if (CC != (undefined && 0)) b2 = 'inline';\\n            if (DD != (undefined && 0)) b3 = 'inline';\\n            if (WW != (undefined && 0)) b4 = 'inline';\\n            if (XX != (undefined && 0)) b5 = 'inline';\\n            if (YY != (undefined && 0)) b6 = 'inline';\\n            if (ZZ != (undefined && 0)) b7 = 'inline';\\n        }\\n    \\n        m2 = M([\\n            [\\n                Math.floor(Math.random() * 6) + 1,\\n                Math.floor(Math.random() * 6) + 1,\\n                Math.floor(Math.random() * 12) + 1,\\n                Math.floor(Math.random() * 20) + 1\\n            ],\\n            [],\\n            ['+'],\\n            [],\\n            [0],\\n            [],\\n            [0],\\n            []\\n        ]);\\n    \\n        var update = function update() {\\n            AA = m2(s)[0][0];\\n            BB = m2(s)[0][1];\\n            CC = m2(s)[0][2];\\n            DD = m2(s)[0][3];\\n            EE = m2(s)[2];\\n            FF = m2(s)[3];\\n            SCORE = m2(s)[4];\\n            WW = m2(s)[1][0];\\n            XX = m2(s)[1][1];\\n            YY = m2(s)[1][2];\\n            ZZ = m2(s)[1][3];\\n        };\\n    \\n        $: AA = m2(s)[0][0];\\n        $: BB = m2(s)[0][1];\\n        $: CC = m2(s)[0][2];\\n        $: DD = m2(s)[0][3];\\n        $: EE = m2(s)[2];\\n        $: FF = m2(s)[3];\\n        $: SCORE = m2(s)[4];\\n        $: WW = m2(s)[1][0];\\n        $: XX = m2(s)[1][1];\\n        $: YY = m2(s)[1][2];\\n        $: ZZ = m2(s)[1][3];\\n    \\n        var ZWIN = '';\\n        var mon3 = M([1, 2, 3, 4]);\\n    \\n        function calc(aa, bb, c) {\\n            var a = parseInt(aa, 10);\\n            var b = parseInt(bb, 10);\\n            if (c === '+') return a + b;\\n            else if (c === '*') return a * b;\\n            else if (c === '-') return a - b;\\n            else if (c === '/') return a / b;\\n            else if (c === '@') return ' ' + a + b;\\n            else return 'fubar';\\n        }\\n    \\n        function g(ar) {\\n            var x = ar.pop() ** 3;\\n            ar.unshift(x);\\n            return ar;\\n        }\\n    \\n        function g2(ar) {\\n            return ar.flatMap((v) => (v + 1) ** 3);\\n        }\\n        function g3(ar) {\\n            return ar.flatMap((v) => Math.round(v ** (1 / 3)));\\n        }\\n    \\n        function clone(x) {\\n            return JSON.parse(JSON.stringify(x));\\n        }\\n        // var clone = structuredClone;\\n    \\n        function M (x) {\\n            return function go (func) {\\n                if (func === ret) return x\\n                x = func(x);\\n                return go;\\n            }\\n        }\\n        \\n        var back;\\n        back = (a) => {\\n            if (a[5].length < 1) {\\n                m2 = M(a);\\n                console.log(\\"You're already all the way back\\");\\n                return;\\n            } else {\\n                var a7 = a[7];\\n                var a = a[5][a[5].length - 1];\\n                a[7] = a7;\\n                m2 = M(a);\\n                update();\\n                sfunc();\\n            }\\n        };\\n    \\n        var forward;\\n        forward = (a) => {\\n            var index = a[6][0];\\n            if (a[5].length === a[7].length) {\\n                console.log('Already at the top');\\n                m2 = M(a);\\n                return;\\n            } else {\\n                var a7 = clone(a[7]);\\n                var a = a[7][index + 1];\\n                a[7] = a7;\\n                m2 = M(a);\\n                update();\\n                sfunc();\\n            }\\n        };\\n    \\n        function test() {\\n            var xx = m2(s);\\n            console.log('<><><><><><><><> xx is', xx);\\n            console.log(xx[0]);\\n            console.log('xx[5].length is ', xx[5].length);\\n            console.log('index is', xx[6]);\\n            m2 = M(xx);\\n            return m2;\\n        }\\n    \\n        function fuu(a) {\\n            a[5].push(clone([a[0], a[1], a[2], a[3], a[4], a[5][0], a[6], a[7]]));\\n            l('In fu. a is', a);\\n            return a;\\n        }\\n    \\n        function fu(a) {\\n            a[5].push(clone([a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]]));\\n            a[7].push(clone(a));\\n            a[6][0] += 1;\\n            // a[1].push(a[0].pop());\\n            var result;\\n            SCORE = a[4];\\n            var a1;\\n            if (a[1].length === 2 && a[2].length === 1) {\\n                a1 = a[1];\\n                result = calc(a[1][0], a[1][1], a[2][0]);\\n                a[0].push(result);\\n                a[3].push(result);\\n                a[1] = [];\\n                m2 = M(a);\\n            }\\n    \\n            if (a[1].length === 3) {\\n                a[0].push(a[1].pop());\\n            }\\n    \\n            if (result == 20 && intersection(a1, a[3]).length > 0) {\\n                if (a[4][0] == 2) {\\n                    resettimer();\\n                    PIN = FIN;\\n                    if (FIN < WIN) WIN = FIN;\\n                    ZWIN = 'You win! Your score is ';\\n                    WINNERS = WIN;\\n                //\\ttop.set([WIN]);\\n    \\n                    // setTimeout(() => a[4][0] = 0,8000);\\n                } else {\\n                    var aint = parseInt(a[4], 10);\\n                    aint += 1;\\n                    Z = '           Your score increased to ' + aint;\\n                    runRoll(aint);\\n                }\\n                setTimeout(() => (Z = ZWIN = ''), 8000);\\n            }\\n            update();\\n            sfunc();\\n            return m2(s);\\n        }\\n    \\n        var fmon = (f) => (x) => x(f);\\n        var reset = (x) => [1, 2, 3, 4];\\n    \\n        var click0 = (a) => {\\n            a[1].push(a[0][0]);\\n            a[0].shift();\\n            m2 = M(a);\\n            m2(fu);\\n            // sfunc();\\n        };\\n    \\n        /* var click0 = a => {\\n        a[1].push(a[0].splice(0,1)[0]);\\n        m2 = M(a);\\n    \\n    }; */\\n    \\n        var click1 = (a) => {\\n            a[1].push(a[0].splice(1, 1)[0]);\\n            m2 = M(a);\\n            m2 = m2(fu);\\n        };\\n    \\n        var click2 = (a) => {\\n            a[1].push(a[0].splice(2, 1)[0]);\\n            m2 = M(a);\\n            m2 = m2(fu);\\n        };\\n    \\n        var click3 = (a) => {\\n            a[1].push(a[0].splice(3, 1)[0]);\\n            m2 = M(a);\\n            m2 = m2(fu);\\n        };\\n    \\n        function clic0(m) {\\n            EEE = 'add';\\n            m[2] = '+';\\n            m2 = M(m);\\n        }\\n    \\n        $: clic1 = (m) => {\\n            EEE = 'subtract';\\n            m[2] = '-';\\n            m2 = M(m);\\n        };\\n    \\n        function clic2(m) {\\n            EEE = 'multiply';\\n            m[2] = '*';\\n            m2 = M(m);\\n        }\\n    \\n        function clic3(m) {\\n            EEE = 'divide';\\n            m[2] = '/';\\n            m2 = M(m);\\n        }\\n    \\n        function clic4(m) {\\n            EEE = 'concat';\\n            m[2] = '@';\\n            m2 = M(m);\\n        }\\n    \\n        $: Z = Z;\\n    \\n        var m3 = M(3);\\n    \\n        var m4 = M(3.1415926535);\\n        var cube = (x) => x ** 3;\\n        var pow = n => x => x**n;\\n        var square = x => x*x; \\n        var add = (n) => (x) => 1 * x + 1 * n;\\n        var mult = (n) => (x) => x * n;\\n        var reset2 = (n) => (x) => (x = n);\\n    \\n        function squareFu() {\\n            m4 = m4(square);\\n        }\\n        function cubeFu() {\\n            m4 = m4(cube);\\n        }\\n    \\n        function divFraction(x) {\\n            var y = x.split('/');\\n            if (y.length > 1) {\\n                return y[0] / y[1];\\n            } else {\\n                return y[0];\\n            }\\n        }\\n        var powFu = function powFu(e) {\\n            var p = divFraction(e.target.value);\\n            if (e.keyCode == 13) {\\n                m4 = m4(pow(p));\\n            }\\n        };\\n    \\n        var addFu = function addFu(e) {\\n            if (e.keyCode == 13) {\\n                m4 = m4(add(e.target.value));\\n            }\\n        };\\n    \\n        var multFu = function multFu(e) {\\n            if (e.keyCode == 13) {\\n                m4 = m4(mult(divFraction(e.target.value)));\\n            }\\n        };\\n    \\n        var resetFu = function resetFu(e) {\\n            if (e.keyCode == 13) {\\n                m4 = m4(reset2(divFraction(e.target.value)));\\n            }\\n        };\\n    \\n        function intersection(a, b) {\\n            return a.filter((x) => b.includes(x));\\n        }\\n    \\n        $: XO = m2(s);\\n    \\n        var tog = true;\\n    \\n        var display = function display() {\\n            tog = false;\\n            if (millisec >= 9) {\\n                millisec = 0;\\n                seconds += 1;\\n            } else millisec += 1;\\n            d2 = seconds + '.' + millisec;\\n            timer = setTimeout(() => display(), 100);\\n        };\\n    \\n        function starttimer() {\\n            if (timer > 0) {\\n                return;\\n            }\\n            display();\\n        }\\n        function stoptimer() {\\n            clearTimeout(timer);\\n            timer = 0;\\n        }\\n    \\n        function startstoptimer() {\\n            if (startStop === 'Start') startStop = 'Stop';\\n            else startStop = 'Start';\\n            if (timer > 0) {\\n                clearTimeout(timer);\\n                timer = 0;\\n            } else {\\n                display();\\n            }\\n        }\\n    \\n        function resettimer() {\\n            clearTimeout(timer);\\n            FIN = d2;\\n            var temp = m2(s);\\n            temp[4] = [0];\\n            m2 = M(temp);\\n            millisec = 0;\\n            seconds = 0;\\n            d2 = seconds + '.' + millisec;\\n            tog = true;\\n        }\\n    \\n        var fuDem = \`function fu (a) {                  // fu\\n      a[5].push(clone(a));\\n      a[7].push(clone(a)); // All game states for use in \\"Back\\" and \\"Forward.\\"\\n      a[6][0] += 1;\\n        // a[1].push(a[0].pop());\\n      var result;\\n      SCORE = a[4];\\n      var a1;\\n      if (a[1].length === 2 && a[2].length === 1)   {\\n        a1 = a[1];\\n        result = calc(a[1][0], a[1][1],a[2][0]);\\n        a[0].push(result);\\n        a[3].push(result);\\n        a[1] = [];\\n        m2 = M(a);\\n      }\\n    \\n      if (a[1].length === 3) {\\n        a[0].push(a[1].pop());\\n      }\\n    \\n      if (result == 20 && intersection(a1, a[3]).length > 0) {\\n          if (SCORE === 4) {\\n              ZWIN = \\"You win! \\"\\n              a[4][0] = 0;\\n              runRoll(0);\\n          }\\n          else {\\n              var aint = parseInt(a[4][0], 10);\\n              aint += 1;\\n              Z = \\"           Your score increased to \\" + aint;\\n              runRoll(aint);\\n          }\\n          setTimeout(() => Z = ZWIN = \\"\\", 3000);\\n      }\\n      update();\\n      sfunc();\\n      return m2(s);\\n    };\\n    \\n    var update = () => { // The button displays will correspond to the values in m2.\\n      AA = m2(s)[0][0];\\n      BB = m2(s)[0][1];\\n      CC = m2(s)[0][2];\\n      DD = m2(s)[0][3];\\n      EE = m2(s)[2];\\n      FF = m2(s)[3];\\n      SCORE = m2(s)[4];\\n      WW = m2(s)[1][0];\\n      XX = m2(s)[1][1];\\n      YY = m2(s)[1][2];\\n      ZZ = m2(s)[1][3];\\n    }\\n    \\n    function sfunc () {\\n        b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = \\"none\\"; // All button displays controlled by b's disappear.\\n        if (AA != (undefined && 0)) b0 = \\"inline\\"; // Next, selected buttons are diplayed.\\n        if (BB != (undefined && 0)) b1 = \\"inline\\";\\n        if (CC != (undefined && 0)) b2 = \\"inline\\";\\n        if (DD != (undefined && 0)) b3 = \\"inline\\";\\n        if (WW != (undefined && 0)) b4 = \\"inline\\";\\n        if (XX != (undefined && 0)) b5 = \\"inline\\";\\n        if (YY != (undefined && 0)) b6 = \\"inline\\";\\n        if (ZZ != (undefined && 0)) b7 = \\"inline\\";\\n    }\`;\\n    \\n    \\n    var monad = \`function M (x) {\\n        return function go (func) {\\n            if (func === ret) return x\\n            else x = func(x);\\n            return go;\\n      }\\n    }\`;\\n    var monadNew = \`function M (x) {\\n      return function go (func) {\\n        if (func) {x = func(x); return go}\\n        else return x;\\n      }\`\\n    \\n    var retCode = \`function ret () {}\`\\n    \\n    var monad3 = \`var mon3 = M([1,2,3,4]);\\n        function g(ar) {\\n            var x = (ar.pop())**3;\\n            ar.unshift(x);\\n            return ar;\\n    };\\n    function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};\\n    function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};\`;\\n    \\n        var simple = \`var s = 'stop';\\n    var m4 = M(3);   // creates a new monad named \\"m4\\".\\n    var cube = x => x**3;\\n    var square = x => x*x;\\n    var pow = n => x => x**n;\\n    var add = n => x => 1*x + 1*n;\\n    var mult = n => x => x * n;\\n    var reset2 = n => x => x = n;\`;\\n    \\n        var runR = \`runRoll = x => {\\n        m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);\\n        updateRoll();\\n        EEE = \\"yet to be selected\\";\\n        XO = m2('stop');\\n        AR = [];\\n        index = 0;\\n    }\\n    \\n    const updateRoll = () => {\\n      AA = m2(s)[0][0];\\n      BB = m2(s)[0][1];\\n      CC = m2(s)[0][2];\\n      DD = m2(s)[0][3];\\n    \\n      WW = m2(s)[1][0];\\n      XX = m2(s)[1][1];\\n      YY = m2(s)[1][2];\\n      ZZ = m2(s)[1][3];\\n      EE = m2(s)[2];\\n      FF = m2(s)[3];\\n      SCORE = m2(s)[4];\\n      b0 = b1 = b2 = b3 = \\"inline\\";\\n      b4 = b5 = b6 = b7 = 'none';\\n    };\`;\\n    \\n        var clickFuncs = \`var click0 = a => {\\n        a[1].push(a[0][0])\\n        a[0].shift();\\n        m2 = M(a);\\n        m2(fu);\\n        // sfunc();\\n    };\\n    \\n    var click1 = a => {\\n        a[1].push(a[0].splice(1,1)[0]);\\n        m2 = M(a);\\n        m2 = m2(fu);\\n    };\\n    \\n    var click2 = a => {\\n        a[1].push(a[0].splice(2,1)[0]);\\n        m2 = M(a);\\n        m2 = m2(fu);\\n    };\\n    \\n    var click3 = a => {\\n        a[1].push(a[0].splice(3,1)[0]);\\n        m2 = M(a);\\n        m2 = m2(fu);\\n    };\\n    \\n    function clic0 (m) {\\n      EEE = \\"add\\";\\n      m[2] = \\"+\\";\\n      m2 = M(m) ;\\n    }\\n    \\n    $: clic1 = m => {\\n      EEE = \\"subtract\\";\\n      m[2] = \\"-\\";\\n      m2 = M(m) ;\\n    }\\n    \\n    function clic2 (m) {\\n      EEE = \\"multiply\\";\\n      m[2] = \\"*\\";\\n      m2 = M(m) ;\\n    }\\n    \\n    function clic3 (m) {\\n      EEE = \\"divide\\";\\n      m[2] = \\"/\\";\\n      m2 = M(m) ;\\n    }\\n    \\n    function clic4 (m) {\\n      EEE = \\"concat\\";\\n      m[2] = \\"@\\"\\n      m2 = M(m);\\n    };\`;\\n    \\n        var putBack = \`if (a[1].length === 3) {\\n        a[0].push(a[1].pop());  // Returns a clicked third number.\\n      };\`;\\n    \\n        var fuFuncs = \`function squareFu () {m4 = m4(square)};\\n    function cubeFu () {m4 = m4(cube)};\\n    \\n    function divFraction (x) {\\n        var y = x.split('/');\\n        if(y.length > 1){\\n            return (y[0] / y[1])\\n        }\\n        else{\\n            return y[0];\\n        }\\n    }\\n    \\n    var powFu = function powFu (e) {\\n        var p = divFraction(e.target.value);\\n        if (e.keyCode == 13) {\\n            m4 = m4(pow(p));\\n        }\\n    };\\n    \\n    var addFu = function addFu (e) {\\n        if (e.keyCode == 13) {\\n            m4 = m4(add(e.target.value));\\n        };\\n      };\\n    \\n    var multFu = function multFu (e) {\\n        if (e.keyCode == 13) {\\n            m4 = m4(mult(divFraction(e.target.value)))};\\n    };\\n    \\n    var resetFu = function resetFu (e) {\\n        if (e.keyCode == 13) {\\n            m4 = m4(reset2(divFraction(e.target.value)))\\n        };\\n    };\`;\\n    \\n        var example0 = \`var mon = M(2); // mon's value is the anonymous function returned by M.     \`;\\n    \\n        var example3 = \`var mon = M(2);\\n    mon(v=>v**4)(v=>v+5)(v=>v*2);\`;\\n        // The value of x can be obtained later\\n        var example4 = \`mon(ret);  // 42\\n    mon(v => v*v);\`;\\n        // And later:\\n        var example5 = \`mon(ret);  // 1764\`;\\n    \\n        var oldMonad = \`function M (x) {\\n        return function go (func) {\\n            if (typeof func === \\"function\\") {\\n                x = func(x);\\n                return go;\\n            }\\n            else if (func === \\"stop\\") return x;\\n        }\\n    };\`;\\n    \\n        var buttons = \`<button style = \\"display: {b0}\\" on:click = {() => m2(click0)}>{AA}</button>\\n    <button style = \\"display: {b1}\\" on:click = {() => m2(click1)}>{BB}</button>\\n    <button style = \\"display: {b2}\\" on:click = {() => m2(click2)}>{CC}</button>\\n    <button style = \\"display: {b3}\\" on:click = {() => m2(click3)}>{DD}</button>\\n    \\n    <span style = \\"margin-left: 8%; font-size: 22px\\">The operator is {m2(s)[2]}</span>\\n    \\n    <br><br>\\n    <button on:click = {() => m2(clic0)}>add</button>\\n    <button on:click = {() => m2(clic1)}>subtract</button>\\n    <button on:click = {() => m2(clic2)}>multiply</button>\\n    <button on:click = {() => m2(clic3)}>divide</button>\\n    <button on:click = {() => m2(clic4)}>concat</button>\\n    \`;\\n        var backDem = \`back = a => {\\n        if (a[5].length < 1) {\\n          m2 = M(a);\\n          console.log(\\"You're already all the way back\\")\\n          return;\\n        }\\n        else {\\n            var b = a[5][a[5].length - 1];\\n            b[7] = a[7];\\n            m2 = M(b);\\n            update();\\n            sfunc();\\n        }\\n    };\\n    \\n    var forward;\\n    $: forward = a => {\\n        var index = a[6][0];\\n        if (a[5].length === a[7].length) {\\n            console.log(\\"Already at the top\\");\\n            m2 = M(a);\\n            return;\\n        }\\n        else {\\n            var b = a[7][index + 1];\\n            b[7] = a[7];\\n            m2 = M(b);\\n            update();\\n            sfunc();\\n        }\\n    };\`;\\n    \\n        var example2 = \`var m3 = M(3);\\n    var m4 = M(m3(s));\\n    m3(v => v + 3);\\n    m4(v => v + 4);\\n    \\n    log(\\"m3(s) * m4(s) is\\", m3(s) * m4(s))\\n    \\n    m3(s) * m4(s) is 42\`;\\n    \\n        var example6 = \`M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42\`;\\n    \\n        var async = \`var asyncMult = a => async b => {\\n        var d;\\n        if (!(b instanceof Promise)) return a * b;\\n        else d = await b;\\n        return a * d;\\n    }\\n    \\n    var asyncAdd = a => async b => {\\n        var d;\\n        if (!(b instanceof Promise)) return a + b;\\n        else d = await b;\\n        return a + d;\\n    }\\n    \\n    var m3 = M(3);\\n    \\n    m3(asyncAdd(4))(asyncMult(6))(s).then(v => log(\\"The result is\\", v));  // The result is 42\\n    m3(asyncAdd(8))(asyncMult(2))(s).then(v => log(\\"Now we are at\\", v));  // Now we are at 100\\n    m3(asyncAdd(-51))(asyncMult(6/7))(s).then(v => log(\\"And back to\\", v)) // And back to 42 \`;\\n    \\n        var bigMonad = \`function Comp ( AR = [] )  {\\n      var f_, p, run;\\n      var ar = AR.slice();\\n      var x = ar.pop();\\n      return run = (function run (x) {\\n        if (x === null || x === NaN ||\\n          x === undefined) x = f_('stop').pop();\\n        if (x instanceof Filt) {\\n          var z = ar.pop();\\n          if (x.filt(z)) x = z; else ar = [];\\n        }\\n        else if (x instanceof Promise) x.then(y =>\\n          {if (y != undefined && typeof y !== \\"boolean\\"\\n            && y === y && y.name !== \\"f_\\" && y.name !== \\"stop\\" ) {\\n          ar.push(y);\\n          diffRender()\\n        }})\\n        else if (x != undefined && x === x && x !== false\\n          && x.name !== \\"f_\\" && x.name !== \\"stop\\" ) {\\n          ar.push(x);\\n          diffRender()\\n        };\\n        function f_ (func) {\\n          if (func === 'stop' || func === 'S') return ar;\\n          else if (func === 'finish' || func === 'F') return Object.freeze(ar);\\n          else if (typeof func !== \\"function\\") p = func;\\n          else if (x instanceof Promise) p = x.then(v => func(v));\\n          else p = func(x);\\n          return run(p);\\n        };\\n        return f_;\\n      })(x)\\n    }\`;\\n    \\n        var caution = \`var s = ret;\\n    var log = console.log;\\n    \\n    function M(x) {\\n      return function go(func) {\\n        if (typeof func === \\"function\\") {\\n          x = func(x);\\n          return go;\\n        } else if (func === \\"stop\\") return x;\\n      }\\n    };\\n    \\n    var m3 = M(3);\\n    \\n    m3(async a => await 888); // m3(s) will return a Promise with value 888.\\n    \\n    m3(s).then(v => m3((z => v + 112)));\\n    // m3(s) will return 1000 after the promise is fulfilled.\\n    \\n    m3(s).then(v => setTimeout(() => console.log(\\"m3(s) resolved is\\", v,), 2000));\\n    // The promise is still pending, so the value of \\"v\\" is 888.\\n    \\n    setTimeout(() => console.log(\\"m3(s) is\\", m3(s)),0);\\n    // This gets bumped to the bottom of the stack, behind (2).\\n    // m3(s) is called after x has been updated to 1000.\\n    \\n    // Result:\\n    16:13:15.590 m3(s) is 1000\\n    16:13:17.590 m3(s) resolved is 888\\n    // Two seconds after \\"1000\\" appears in the console log, \\"888\\" is displayed.\`;\\n    \\n    \\n    var start = \`m2 = M(\\n        [ \\n          [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,\\n          Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], \\n          [], ['+'], [], [0], [], [0], [] \\n        ]);\`\\n    \\n    \\n    \\n    <\/script>\\n    \\n    <style>\\n      pre {margin-left: 3%;}\\n     \\n    \\n    </style>\\n    \\n    \\n    \\n    <svelte:head>\\n        <title>The Solitaire Game of Score</title>\\n    </svelte:head>\\n    <div style = \\"margin-left:12%; margin-right: 12%;\\">\\n    <br />\\n    <div>**************************************************************************</div>\\n    <h1 style = \\"text-align: center\\">The Solitaire Game of Score</h1>\\n    <p> The game is held in the closure returned initially by M(x) where M is: </p>\\n    <pre>{monad}</pre>\\n    <p>and x is an array of eight arrays defined as:</p>\\n    <pre>{start}</pre>\\n    <p>It doesn't matter what, if anything, the function ret() would do if it were to be called because it doesn't get called. It's only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in <span>M(2)(v=>v+4)(v=>v*7)(ret) = 42</span>.</p> \\n    \\n    \\n    <p>Here, ret() is defined as <span>{retCode}</span>. Later versions of M dispense with ret(), returning the value held in the m-M(x) closure whenever the argument is null.\\n        <pre>{monadNew}</pre>\\n        \\n    \\n    <p>Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You'll have two 1's before the multiplication. It won't matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two. </p>\\n    <!-- <h1>{$userName}</h1> -->\\n    <!--<span>Player: </span> \\n    <input style=\\"color: black; \\" type=\\"text\\" bind:value={$userName} />\\n    <br /><br />\\n    <span>Best Score: </span> -->\\n    <!-- <input style=\\"color: black;\\" type=\\"number\\" bind:value={$top} /> -->\\n    \\n    <h2>{d2}</h2>\\n    <!-- <button on:click={display}>Start</button>\\n    <button on:click={stoptimer}>Stop</button> -->\\n    <br />\\n    \\n    <button on:click={resettimer}>Reset</button>\\n    <br /><br />\\n    <button style=\\"display: {b0}\\" on:click={() => m2(click0)}>{AA}</button>\\n    <button style=\\"display: {b1}\\" on:click={() => m2(click1)}>{BB}</button>\\n    <button style=\\"display: {b2}\\" on:click={() => m2(click2)}>{CC}</button>\\n    <button style=\\"display: {b3}\\" on:click={() => m2(click3)}>{DD}</button>\\n    <span style=\\"margin-left: 8%; font-size: 32px\\">Operator: {m2(s)[2]}</span>\\n    <span style=\\"margin-left: 64px; font-size: 32px\\">Score: {m2(s)[4]}</span>\\n    \\n    <br /><br />\\n    <button on:click={() => m2(clic0)}>add</button>\\n    <button on:click={() => m2(clic1)}>subtract</button>\\n    <button on:click={() => m2(clic2)}>multiply</button>\\n    <button on:click={() => m2(clic3)}>divide</button>\\n    <button on:click={() => m2(clic4)}>concat</button>\\n    \\n    <span style=\\"margin-left: 20px; font-size:28px\\">{Z}</span>\\n    <span style=\\"margin-left: 20px; font-size:38px\\">{ZWIN}</span>\\n    <span style=\\"margin-left: 20px; font-size:38px\\">{FIN}</span>\\n    \\n    <br /><br />\\n    <button on:click={() => m2(runRoll(m2(s)[4][0]))}>ROLL</button>\\n    <br /><br />\\n    \\n    <button on:click={() => test()}>test</button>\\n    <button style=\\"display: {b4}\\">{WW}</button>\\n    <button style=\\"display: {b5}\\">{XX}</button>\\n    <button style=\\"display: {b6}\\">{YY}</button>\\n    <button style=\\"display: {b7}\\">{ZZ}</button>\\n    <br /><br />\\n    <button on:click={() => m2(back)}>Back</button>\\n    <button on:click={() => m2(forward)}>Forward</button>\\n    \\n    <p>\\n        Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the\\n        result of a prior computation\\n    </p>\\n    <p>\\n        <h2>Background</h2>\\n        <p>Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version. </p>\\n        <p> After some messy experiences developing a server with other\\tprogramming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of \\tnumber of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers. </p>\\n        <p> One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe \\"euphoric\\" is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.</p>\\n        <p> In the online game, players can gain a point by\\tclicking \\"Impossible\\" unless another player finds a solution. In that case, the player who clicked \\"Impossible\\" loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default\\tvalue of 20. <!-- A drag and drop Haskell version of Score is online at <a href=\\"https://score.schalk2.com\\" \\n            >https://score.schalk2.com</a>. -->\\n    </p>\\n    <h2>About this Solitaire Version</h2>\\n    <p>\\n        This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of closures. You can traverse the history of game play for the current roll. If you make a\\n        mistake, you can take back your move and do something else. If you traverse back and forth very\\n        far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.\\n    </p>\\n    <p>\\n        The function fu() is the brains behind the game of Score. Each time a number or operator is\\n        clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The\\n        state of play in M is an array of seven arrays. Let's call it ar. If an operator op is in ar[2]\\n        and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and\\n        ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At\\n        least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the\\n        number of points reaches 5, fu causes \\"You win\\" to be displayed, sets the score back to 0, and\\n        calls runRoll, starting another round of play.\\n    </p>\\n    <p>\\n        At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game\\n        buttons, causing them to reflect the current state of ar. The second hides buttons that correspond\\n        to values of undefine and shows buttons that correspond to numbers in ar. This is done by\\n        switching variables p in \\"style = 'display: p' back and forth between \\"none\\" and \\"inline\\".\\n    </p>\\n        <a id = \\"scoreDef\\"></a>\\n    <pre>{fuDem}</pre>\\n    \\n    <p>Clicking \\"ROLL\\" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>\\n    <pre>{runR}</pre>\\n    <p>\\n        The \\"x =[ \\n            [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,\\n            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], \\n            [], ['+'], [], [0], [], [0], [] ]);\\" format will be maintained throught game play. x[0]\\n        simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and\\n        x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved\\n        in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and\\n        a[4] is examined when 20 is computed. Here are the first few functions called when a number is\\n        clicked:\\n    </p>\\n    <pre>{clickFuncs}</pre>\\n    <p>\\n        The first line of fu() is the calculation result that is generated whenever there are two items in\\n        (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If\\n        \\"intersect\\", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and\\n        the last test in fu fails, even though 20 was produced on the second computation.\\n    </p>\\n    <p>\\n        If no operator has been selected, it's possible to click a third number. The program doesn't\\n        complain, it just puts the number back for you with:\\n    </p>\\n    <pre>{putBack}</pre>\\n    <p>\\n        If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back\\n        and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first\\n        position and pushed back on the right.\\n    </p>\\n    <p>\\n        sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS\\n        display strings are changed back and forth between \\"none\\" and \\"inline\\". fu() calls sfunc(). Here's\\n        how it is defined:\\n    </p>\\n    \\n    <p>\\n        For solitaire version presented here, a function named \\"m2\\" will form a closure with M as\\n        follows: \\"m2 = M(x)\\" where x = [ Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,\\n            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], ['+'], [], [0], [], [0], []]) m2 will consume functions\\n        that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of\\n        game play. After each click on a number or operator button, m2(fu) is called. The record of prior\\n        states kept in x[7] allows players to traverse the history of their choices.\\n    </p>\\n    \\n    <p>\\n        In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of\\n        arrays [ [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], ['+'], [], [0], [], [0], []] ] where x[0], x[1], x[2], and x[3] start out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the\\n        number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number\\n        of successes until the player wins by reaching 5, x[5] contains all prior states as the player\\n        selects numbers and operators and is used for reversing state a little or all the way back to the\\n        original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every\\n        state during a round. using x[6] to travers the history of game play in both directions.\\n    </p>\\n    \\n    <!-- <button on:click = {m2Func}>m2Func</button>\\n    <button on:click = {update}>Update</button>\\n    <button on:click = {() => m2(fu)}>m2(fu)</button>\\n    <button on:click = {sfunc}>sfunc</button>\\n    -->\\n    \\n    <h2>Why I Call Them \\"Monads\\"</h2>\\n    \\n    <p>\\n        I sometimes call functions returned by M \\"monads\\", much to the consternation of some \\"functional\\n        programmers\\" who scoff at the idea that JavaScript could possibly have monads such as those\\n        defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category\\n        Theory monads. Haskell monads insulate chained computation from the global space, consuming\\n        functions that return new Monads. Mine happen to do the same thing. Haskell monads need to\\n        navigate through various types but I don't bother with that. The definition of \\"M\\" shows that the\\n        returned function responds to arguments that are functions and also to the string \\"Stop.\\"\\n    </p>\\n    \\n    <p>\\n        In my opinion, trying to define JavaScript objects that resemble the basic monads found in the\\n        Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.\\n        People who think Haskell, or the supposed mathematical category of Haskell types and functions\\n        called \\"Hask\\", are actually Category Theory categories are mistaken. Category Theory inspired the\\n        development of Haskell monads and it might not be merely coincidental that the monads I am about\\n        to define are functionally similar to Haskell state monads, though superficially quite different. Both\\n        transform state along pipelines isolated from their outer scope by operating on functions that\\n        return new monads. Both preserve state for future transformations or for eventual use in their\\n        outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to\\n        wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional\\n        programming language. I'll probably stop calling my little closures \\"monads.\\"\\n    </p>\\n    \\n    Caution:\\n    <pre>{caution}</pre>\\n    <br /><br />\\n    \\n    <!-- <style>\\n         (A) CONTAINER\\n    #stopwatch {\\n      display: flex;\\n      flex-wrap: wrap;\\n      max-width: 320px;\\n      margin: 0 auto;\\n    }\\n    \\n    #sw-time {\\n      width: 100%;\\n      padding: 20px 0;\\n      font-size: 48px;\\n      font-weight: bold;\\n      text-align: center;\\n      background: #000;\\n      color: #fff;\\n    }\\n    \\n    #sw-rst, #sw-go {\\n      box-sizing: border-box;\\n      width: 50%;\\n      cursor: pointer;\\n      padding: 20px 0;\\n      border: 0;\\n      color: #fff;\\n      font-size: 20px;\\n    }\\n    #sw-rst { background-color: #a32208; }\\n    #sw-go { background-color: #20a308; }\\n    \\n    \\n    </style> -->\\n    </div>\\n    \\n    <slot></slot>\\n    "],"names":[],"mappings":"AAy4BM,iBAAI,CAAC,WAAW,CAAE,EAAG"}`
};
function ret() {
}
function M(x) {
  return function go(func) {
    if (func === ret) return x;
    x = func(x);
    return go;
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const userName = writable(browser);
  const top = writable(browser);
  userName.subscribe((val) => browser);
  top.subscribe((val) => browser);
  var m2;
  var FIN = 1001;
  var d2;
  var d2 = "";
  var AA, BB, CC, DD;
  var b0 = "none";
  var b1 = "none";
  var b2 = "none";
  var b3 = "none";
  var b4 = "none";
  var b5 = "none";
  var b6 = "none";
  var b7 = "none";
  var s = ret;
  var AA;
  var BB;
  var CC;
  var DD;
  var WW;
  var XX;
  var YY;
  var ZZ;
  var Z = "";
  m2 = M([
    [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    [],
    ["+"],
    [],
    [0],
    [],
    [0],
    []
  ]);
  var ZWIN = "";
  var fuDem = `function fu (a) {                  // fu
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
    }
    
    function sfunc () {
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none"; // All button displays controlled by b's disappear.
        if (AA != (undefined && 0)) b0 = "inline"; // Next, selected buttons are diplayed.
        if (BB != (undefined && 0)) b1 = "inline";
        if (CC != (undefined && 0)) b2 = "inline";
        if (DD != (undefined && 0)) b3 = "inline";
        if (WW != (undefined && 0)) b4 = "inline";
        if (XX != (undefined && 0)) b5 = "inline";
        if (YY != (undefined && 0)) b6 = "inline";
        if (ZZ != (undefined && 0)) b7 = "inline";
    }`;
  var monad = `function M (x) {
        return function go (func) {
            if (func === ret) return x
            else x = func(x);
            return go;
      }
    }`;
  var monadNew = `function M (x) {
      return function go (func) {
        if (func) {x = func(x); return go}
        else return x;
      }`;
  var retCode = `function ret () {}`;
  var runR = `runRoll = x => {
        m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
        updateRoll();
        EEE = "yet to be selected";
        XO = m2('stop');
        AR = [];
        index = 0;
    }
    
    const updateRoll = () => {
      AA = m2(s)[0][0];
      BB = m2(s)[0][1];
      CC = m2(s)[0][2];
      DD = m2(s)[0][3];
    
      WW = m2(s)[1][0];
      XX = m2(s)[1][1];
      YY = m2(s)[1][2];
      ZZ = m2(s)[1][3];
      EE = m2(s)[2];
      FF = m2(s)[3];
      SCORE = m2(s)[4];
      b0 = b1 = b2 = b3 = "inline";
      b4 = b5 = b6 = b7 = 'none';
    };`;
  var clickFuncs = `var click0 = a => {
        a[1].push(a[0][0])
        a[0].shift();
        m2 = M(a);
        m2(fu);
        // sfunc();
    };
    
    var click1 = a => {
        a[1].push(a[0].splice(1,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click2 = a => {
        a[1].push(a[0].splice(2,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click3 = a => {
        a[1].push(a[0].splice(3,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    function clic0 (m) {
      EEE = "add";
      m[2] = "+";
      m2 = M(m) ;
    }
    
    $: clic1 = m => {
      EEE = "subtract";
      m[2] = "-";
      m2 = M(m) ;
    }
    
    function clic2 (m) {
      EEE = "multiply";
      m[2] = "*";
      m2 = M(m) ;
    }
    
    function clic3 (m) {
      EEE = "divide";
      m[2] = "/";
      m2 = M(m) ;
    }
    
    function clic4 (m) {
      EEE = "concat";
      m[2] = "@"
      m2 = M(m);
    };`;
  var putBack = `if (a[1].length === 3) {
        a[0].push(a[1].pop());  // Returns a clicked third number.
      };`;
  var caution = `var s = ret;
    var log = console.log;
    
    function M(x) {
      return function go(func) {
        if (typeof func === "function") {
          x = func(x);
          return go;
        } else if (func === "stop") return x;
      }
    };
    
    var m3 = M(3);
    
    m3(async a => await 888); // m3(s) will return a Promise with value 888.
    
    m3(s).then(v => m3((z => v + 112)));
    // m3(s) will return 1000 after the promise is fulfilled.
    
    m3(s).then(v => setTimeout(() => console.log("m3(s) resolved is", v,), 2000));
    // The promise is still pending, so the value of "v" is 888.
    
    setTimeout(() => console.log("m3(s) is", m3(s)),0);
    // This gets bumped to the bottom of the stack, behind (2).
    // m3(s) is called after x has been updated to 1000.
    
    // Result:
    16:13:15.590 m3(s) is 1000
    16:13:17.590 m3(s) resolved is 888
    // Two seconds after "1000" appears in the console log, "888" is displayed.`;
  var start = `m2 = M(
        [ 
          [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
          [], ['+'], [], [0], [], [0], [] 
        ]);`;
  $$result.css.add(css);
  Z = Z;
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  m2(s)[2];
  m2(s)[3];
  m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  m2(s);
  return `${$$result.head += `<!-- HEAD_svelte-1t861vf_START -->${$$result.title = `<title>The Solitaire Game of Score</title>`, ""}<!-- HEAD_svelte-1t861vf_END -->`, ""} <div style="margin-left:12%; margin-right: 12%;"><br> <div data-svelte-h="svelte-9ovhf0">**************************************************************************</div> <h1 style="text-align: center" data-svelte-h="svelte-12jmyso">The Solitaire Game of Score</h1> <p data-svelte-h="svelte-1ddt8vg">The game is held in the closure returned initially by M(x) where M is:</p> <pre class="svelte-6bq8z1">${escape(monad)}</pre> <p data-svelte-h="svelte-b2vf74">and x is an array of eight arrays defined as:</p> <pre class="svelte-6bq8z1">${escape(start)}</pre> <p data-svelte-h="svelte-ixx4tx">It doesn&#39;t matter what, if anything, the function ret() would do if it were to be called because it doesn&#39;t get called. It&#39;s only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in <span>M(2)(v=&gt;v+4)(v=&gt;v*7)(ret) = 42</span>.</p> <p>Here, ret() is defined as <span>${escape(retCode)}</span>. Later versions of M dispense with ret(), returning the value held in the m-M(x) closure whenever the argument is null.
        </p><pre class="svelte-6bq8z1">${escape(monadNew)}</pre> <p data-svelte-h="svelte-12plheh">Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You&#39;ll have two 1&#39;s before the multiplication. It won&#39;t matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two.</p>    <h2>${escape(d2)}</h2>  <br> <button data-svelte-h="svelte-1p8ycuh">Reset</button> <br><br> <button style="${"display: " + escape(b0, true)}">${escape(AA)}</button> <button style="${"display: " + escape(b1, true)}">${escape(BB)}</button> <button style="${"display: " + escape(b2, true)}">${escape(CC)}</button> <button style="${"display: " + escape(b3, true)}">${escape(DD)}</button> <span style="margin-left: 8%; font-size: 32px">Operator: ${escape(m2(s)[2])}</span> <span style="margin-left: 64px; font-size: 32px">Score: ${escape(m2(s)[4])}</span> <br><br> <button data-svelte-h="svelte-1e12d00">add</button> <button data-svelte-h="svelte-1kswafo">subtract</button> <button data-svelte-h="svelte-1yud9f9">multiply</button> <button data-svelte-h="svelte-gsri11">divide</button> <button data-svelte-h="svelte-1ta58wz">concat</button> <span style="margin-left: 20px; font-size:28px">${escape(Z)}</span> <span style="margin-left: 20px; font-size:38px">${escape(ZWIN)}</span> <span style="margin-left: 20px; font-size:38px">${escape(FIN)}</span> <br><br> <button data-svelte-h="svelte-1fzj6m7">ROLL</button> <br><br> <button data-svelte-h="svelte-1pj6w29">test</button> <button style="${"display: " + escape(b4, true)}">${escape(WW)}</button> <button style="${"display: " + escape(b5, true)}">${escape(XX)}</button> <button style="${"display: " + escape(b6, true)}">${escape(YY)}</button> <button style="${"display: " + escape(b7, true)}">${escape(ZZ)}</button> <br><br> <button data-svelte-h="svelte-10mew4k">Back</button> <button data-svelte-h="svelte-1fu3ck2">Forward</button> <p data-svelte-h="svelte-1j12tk4">Remember, just computing 20 isn&#39;t always enough. One of the numbers used to get 20 has to be the
        result of a prior computation</p> <p data-svelte-h="svelte-o0cwe5"></p><h2 data-svelte-h="svelte-1c47mae">Background</h2> <p data-svelte-h="svelte-1iwmjdh">Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version.</p> <p data-svelte-h="svelte-90lq4n">After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers.</p> <p data-svelte-h="svelte-14y7d2j">One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe &quot;euphoric&quot; is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.</p> <p data-svelte-h="svelte-ipd2o">In the online game, players can gain a point by	clicking &quot;Impossible&quot; unless another player finds a solution. In that case, the player who clicked &quot;Impossible&quot; loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default	value of 20. </p> <h2 data-svelte-h="svelte-nx0ma9">About this Solitaire Version</h2> <p data-svelte-h="svelte-92aqys">This demonstration doesn&#39;t rely on a remote server, nor does it feature any Haskell code. It&#39;s just a little solitaire game providing an opportunity to consider the interesting possibilities of closures. You can traverse the history of game play for the current roll. If you make a
        mistake, you can take back your move and do something else. If you traverse back and forth very
        far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.</p> <p data-svelte-h="svelte-ho031a">The function fu() is the brains behind the game of Score. Each time a number or operator is
        clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
        state of play in M is an array of seven arrays. Let&#39;s call it ar. If an operator op is in ar[2]
        and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
        ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
        least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
        number of points reaches 5, fu causes &quot;You win&quot; to be displayed, sets the score back to 0, and
        calls runRoll, starting another round of play.</p> <p data-svelte-h="svelte-1sqt9j8">At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
        buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
        to values of undefine and shows buttons that correspond to numbers in ar. This is done by
        switching variables p in &quot;style = &#39;display: p&#39; back and forth between &quot;none&quot; and &quot;inline&quot;.</p> <a id="scoreDef"></a> <pre class="svelte-6bq8z1">${escape(fuDem)}</pre> <p data-svelte-h="svelte-15rv1aj">Clicking &quot;ROLL&quot; calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p> <pre class="svelte-6bq8z1">${escape(runR)}</pre> <p data-svelte-h="svelte-gtqu57">The &quot;x =[ 
            [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
            [], [&#39;+&#39;], [], [0], [], [0], [] ]);&quot; format will be maintained throught game play. x[0]
        simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
        x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
        in arriving at 20. That&#39;s the reason, toward the end of fu(), that the intersection of a[0] and
        a[4] is examined when 20 is computed. Here are the first few functions called when a number is
        clicked:</p> <pre class="svelte-6bq8z1">${escape(clickFuncs)}</pre> <p data-svelte-h="svelte-zq379y">The first line of fu() is the calculation result that is generated whenever there are two items in
        (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()&#39;s bottom test. If
        &quot;intersect&quot;, the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
        the last test in fu fails, even though 20 was produced on the second computation.</p> <p data-svelte-h="svelte-yzh3on">If no operator has been selected, it&#39;s possible to click a third number. The program doesn&#39;t
        complain, it just puts the number back for you with:</p> <pre class="svelte-6bq8z1">${escape(putBack)}</pre> <p data-svelte-h="svelte-412cb9">If you roll the dice and keep clicking on the leftmost number, you&#39;ll see the numbers shift back
        and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
        position and pushed back on the right.</p> <p data-svelte-h="svelte-9wuunx">sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
        display strings are changed back and forth between &quot;none&quot; and &quot;inline&quot;. fu() calls sfunc(). Here&#39;s
        how it is defined:</p> <p data-svelte-h="svelte-1dbb3x7">For solitaire version presented here, a function named &quot;m2&quot; will form a closure with M as
        follows: &quot;m2 = M(x)&quot; where x = [ Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [&#39;+&#39;], [], [0], [], [0], []]) m2 will consume functions
        that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
        game play. After each click on a number or operator button, m2(fu) is called. The record of prior
        states kept in x[7] allows players to traverse the history of their choices.</p> <p data-svelte-h="svelte-7tl240">In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
        arrays [ [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [&#39;+&#39;], [], [0], [], [0], []] ] where x[0], x[1], x[2], and x[3] start out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
        number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
        of successes until the player wins by reaching 5, x[5] contains all prior states as the player
        selects numbers and operators and is used for reversing state a little or all the way back to the
        original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
        state during a round. using x[6] to travers the history of game play in both directions.</p>  <h2 data-svelte-h="svelte-1kuwtpn">Why I Call Them &quot;Monads&quot;</h2> <p data-svelte-h="svelte-1bae15k">I sometimes call functions returned by M &quot;monads&quot;, much to the consternation of some &quot;functional
        programmers&quot; who scoff at the idea that JavaScript could possibly have monads such as those
        defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
        Theory monads. Haskell monads insulate chained computation from the global space, consuming
        functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
        navigate through various types but I don&#39;t bother with that. The definition of &quot;M&quot; shows that the
        returned function responds to arguments that are functions and also to the string &quot;Stop.&quot;</p> <p data-svelte-h="svelte-ht7zg4">In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
        Haskell Prelude module, amusing though it may be, isn&#39;t likely to produce anything very useful.
        People who think Haskell, or the supposed mathematical category of Haskell types and functions
        called &quot;Hask&quot;, are actually Category Theory categories are mistaken. Category Theory inspired the
        development of Haskell monads and it might not be merely coincidental that the monads I am about
        to define are functionally similar to Haskell state monads, though superficially quite different. Both
        transform state along pipelines isolated from their outer scope by operating on functions that
        return new monads. Both preserve state for future transformations or for eventual use in their
        outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
        wait to do it in a main() function. I&#39;m not trying to mimic Haskell or any other functional
        programming language. I&#39;ll probably stop calling my little closures &quot;monads.&quot;</p>
    
    Caution:
    <pre class="svelte-6bq8z1">${escape(caution)}</pre> <br><br> </div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
