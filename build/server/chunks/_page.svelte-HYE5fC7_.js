import { c as create_ssr_component, e as escape, d as add_attribute } from './ssr-DgjyUhy2.js';

const css = {
  code: "h1.svelte-901fe7{text-align:center}pre.svelte-901fe7{font-size:20px;white-space:pre-wrap;word-break:keep-all}input[type=number].svelte-901fe7{font-size:34px;width:80%;background-color:lightblue\n  }",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n\\n<script>\\n\\nvar conjecture = `For any positive integer n, the Collatz sequence is defined as follows:\\n\\n    If n is even:\\n        Divide it by 2.\\n    If n is odd:\\n        Multiply it by 3 and add 1.\\n\\n    Repeat the process with the new value of n.\\n\\nThe conjecture states that no matter what positive integer you start with, the sequence will always eventually reach 1.`;\\n\\nvar example = `    6 is even,  6÷2=3\\n    3 is odd,   3×3+1=10\\n    10 is even, 10÷2=5\\n    5 is odd,   5×3+1=16.\\n    16 is even, 16÷2=8.\\n    8 is even,  8÷2=4.\\n    4 is even,  4÷2=2.\\n    2 is even,  2÷2=1.`\\n\\nvar code = `  var log = console.log;\\n  var dF3x = () => {};\\n\\n  function M(x) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      else x = func(x);\\n      return go;\\n    };\\n  }\\n\\nvar n;\\nvar m;\\n\\nvar collatz = function collatz (n) {\\n    m = M([n, 0]);\\n    m(f);\\n}\\nvar out = \\"\\";\\n\\nfunction f (d) {\\n      if (d[1] === 0) log(\\"testing the number\\", d[0]);\\n      d[1] = d[1] += 1;\\n      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]\\n      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]\\n      if (d[0] !== 1) f(d)\\n      else {\\n          d[1] = d[1];\\n          out = \\"The number of steps was \\" + d[1];\\n      }\\n}\\n\\nfunction getInput (event) {\\n    n = event.target.value;\\n}`;\\n\\nvar results = `testing the number 10\\nThe number of steps is 6\\n\\ntesting the number 100\\nThe number of steps is 25\\n\\ntesting the number 1000\\nThe number of steps is 111\\n\\ntesting the number 10000\\nThe number of steps is 29\\n\\ntesting the number 100000\\nThe number of steps is 128\\n\\ntesting the number 1000000\\nThe number of steps is 152\\n\\ntesting the number 10000000\\nThe number of steps is 145\\n\\ntesting the number 100000000\\nThe number of steps is 107\\n\\ntesting the number 1000000000\\nThe number of steps is 100\\n\\ntesting the number 10000000000\\nThe number of steps is 124\\n\\ntesting the number 100000000000\\nThe number of steps is 347\\n\\ntesting the number 1000000000000\\nThe number of steps is 146`\\n\\nvar bigNum = `testing the number 2.6561398887587478e+95\\nd is [ 1.3280699443793739e+95, 1 ]\\nd is [ 6.6403497218968695e+94, 2 ]\\nd is [ 3.3201748609484348e+94, 3 ]\\nd is [ 1.6600874304742174e+94, 4 ]\\nd is [ 8.300437152371087e+93, 5 ]\\nd is [ 4.1502185761855434e+93, 6 ]\\nd is [ 2.0751092880927717e+93, 7 ]\\nd is [ 1.0375546440463859e+93, 8 ]\\nd is [ 5.1877732202319293e+92, 9 ]\\nd is [ 2.5938866101159647e+92, 10 ]\\nd is [ 1.2969433050579823e+92, 11 ]\\n...\\nd is [ 1364, 578 ]\\nd is [ 682, 579 ]\\nd is [ 341, 580 ]\\nd is [ 1024, 581 ]\\nd is [ 512, 582 ]\\nd is [ 256, 583 ]\\nd is [ 128, 584 ]\\nd is [ 64, 585 ]\\nd is [ 32, 586 ]\\nd is [ 16, 587 ]\\nd is [ 8, 588 ]\\nd is [ 4, 589 ]\\nd is [ 2, 590 ]\\nd is [ 1, 591 ]\\nThe number of steps is 591`;\\n\\nvar biggerNumber  = `testing the number 1.7190733398152932e+304\\nd is [ 8.595366699076466e+303, 1 ]\\nd is [ 4.297683349538233e+303, 2 ]\\nd is [ 2.1488416747691165e+303, 3 ]\\nd is [ 1.0744208373845582e+303, 4 ]\\nd is [ 5.372104186922791e+302, 5 ]\\nd is [ 2.6860520934613956e+302, 6 ]\\n...\\nd is [ 53, 1204 ]\\nd is [ 160, 1205 ]\\nd is [ 80, 1206 ]\\nd is [ 40, 1207 ]\\nd is [ 20, 1208 ]\\nd is [ 10, 1209 ]\\nd is [ 5, 1210 ]\\nd is [ 16, 1211 ]\\nd is [ 8, 1212 ]\\nd is [ 4, 1213 ]\\nd is [ 2, 1214 ]\\nd is [ 1, 1215 ]\\nThe number of steps is 1215`;\\n\\nvar big = `\\np@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test2\\ntesting the number 1.2247208276643356e+201\\nd is [ 6.123604138321678e+200, 1 ]\\nd is [ 3.061802069160839e+200, 2 ]\\nd is [ 1.5309010345804195e+200, 3 ]\\nd is [ 7.654505172902098e+199, 4 ]\\n...\\nd is [ 2.3611832414348226e+21, 597 ]\\nd is [ 1.1805916207174113e+21, 598 ]\\nd is [ 590295810358705700000, 599 ]\\nd is [ 295147905179352830000, 600 ]\\nd is [ 147573952589676410000, 601 ]\\nd is [ 73786976294838210000, 602 ]\\nd is [ 36893488147419103000, 603 ]\\nd is [ 18446744073709552000, 604 ]\\nd is [ 9223372036854776000, 605 ]\\nd is [ 4611686018427388000, 606 ]\\nd is [ 2305843009213694000, 607 ]\\nd is [ 1152921504606847000, 608 ]\\nd is [ 576460752303423500, 609 ]\\nd is [ 288230376151711740, 610 ]\\nd is [ 144115188075855870, 611 ]\\nd is [ 72057594037927940, 612 ]\\nd is [ 36028797018963970, 613 ]\\nd is [ 18014398509481984, 614 ]\\nd is [ 9007199254740992, 615 ]\\nd is [ 4503599627370496, 616 ]\\nd is [ 2251799813685248, 617 ]\\nd is [ 1125899906842624, 618 ]\\nd is [ 562949953421312, 619 ]\\nd is [ 281474976710656, 620 ]\\nd is [ 140737488355328, 621 ]\\nd is [ 70368744177664, 622 ]\\nd is [ 35184372088832, 623 ]\\nd is [ 17592186044416, 624 ]\\nd is [ 8796093022208, 625 ]\\nd is [ 4398046511104, 626 ]\\nd is [ 2199023255552, 627 ]\\nd is [ 1099511627776, 628 ]\\nd is [ 549755813888, 629 ]\\nd is [ 274877906944, 630 ]\\nd is [ 137438953472, 631 ]\\nd is [ 68719476736, 632 ]\\nd is [ 34359738368, 633 ]\\nd is [ 17179869184, 634 ]\\nd is [ 8589934592, 635 ]\\nd is [ 4294967296, 636 ]\\nd is [ 2147483648, 637 ]\\nd is [ 1073741824, 638 ]\\nd is [ 536870912, 639 ]\\nd is [ 268435456, 640 ]\\nd is [ 134217728, 641 ]\\nd is [ 67108864, 642 ]\\nd is [ 33554432, 643 ]\\nd is [ 16777216, 644 ]\\nd is [ 8388608, 645 ]\\nd is [ 4194304, 646 ]\\nd is [ 2097152, 647 ]\\nd is [ 1048576, 648 ]\\nd is [ 524288, 649 ]\\nd is [ 262144, 650 ]\\nd is [ 131072, 651 ]\\nd is [ 65536, 652 ]\\nd is [ 32768, 653 ]\\nd is [ 16384, 654 ]\\nd is [ 8192, 655 ]\\nd is [ 4096, 656 ]\\nd is [ 2048, 657 ]\\nd is [ 1024, 658 ]\\nd is [ 512, 659 ]\\nd is [ 256, 660 ]\\nd is [ 128, 661 ]\\nd is [ 64, 662 ]\\nd is [ 32, 663 ]\\nd is [ 16, 664 ]\\nd is [ 8, 665 ]\\nd is [ 4, 666 ]\\nd is [ 2, 667 ]\\nd is [ 1, 668 ]\\nThe number of steps is 668\\n`\\n\\n  var log = console.log;\\n  var dF3x = () => {};\\n\\n  function M(x) {\\n    return function go(func) {\\n      if (func === dF3x) return x;\\n      else x = func(x);\\n      return go;\\n    };\\n  }\\n\\nvar n;\\nvar m;\\n\\nvar collatz = function collatz (n) {\\n    m = M([n, 0]);\\n    m(f);\\n}\\nvar out = \\"\\";\\n\\nfunction f (d) {\\n      if (d[1] === 0) log(\\"testing the number\\", d[0]);\\n      d[1] = d[1] += 1;\\n      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]\\n      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]\\n      if (d[0] !== 1) f(d)\\n      else {\\n          d[1] = d[1];\\n          out = \\"The number of steps was \\" + d[1];\\n      }\\n}\\n\\nfunction getInput (event) {\\n    n = event.target.value;\\n}\\n<\/script>\\n\\n<h1>The Collatz Conjecture</h1>\\n<pre>{conjecture}</pre>\\n<p> For example, consider n = 6:</p>\\n<pre>{example}</pre>\\n<br>\\n<div>*******************************************************</div>\\n<div>*******************************************************</div>\\n<p> Enter an integer greater than 1 below to see how many steps it takes to get to the the number \\"1\\". The arrow keys work. For example, if you enter 32, you get 5; press the \\"down\\" arrow on your keyboard, or the \\"down\\" arrow on the input box (below), and see that it takes 106 steps for 31 to get to 1. </p>\\n<input type=\\"number\\" bind:value={n} on:keypress = {() => collatz(n)} on:change = {() => collatz(n)} on:input = {() => collatz(n)} on:change = {() => n = n} on:keypress = {() => n = n}    />\\n<h3>The selected number is {n}</h3>\\n<h3>{out}</h3>\\n<div>*******************************************************</div>\\n<div>*******************************************************</div>\\n\\n<!-- <button on:click = {() => collatz(n)}>Run collatz</button> -->\\n\\n<p> Here\'s the code that generates the Collatz sequence on this page:</p>\\n<pre>{code}</pre>\\n<p> Here are some results:</p>\\n<pre>{results}</pre>\\n<p> Even n = 9**100 finishes in fewer than 1000 steps, as shown below. </p>\\n<pre>{bigNum}</pre>\\n\\n\\n\\n\\n\\n<br><br><br>\\n<br><br><br>\\n\\n\\n\\n<style>\\n    h1 {text-align: center}\\n    h2 {text-align: center}\\n    pre {\\n        font-size: 20px;\\n        white-space: pre-wrap;       /* Since CSS 2.1 */\\n        word-break: keep-all;\\n    }\\n  input[type=number] {\\n      font-size: 34px;\\n      width: 80%;\\n      background-color: lightblue\\n  }\\n</style>"],"names":[],"mappings":"AA4SI,gBAAG,CAAC,UAAU,CAAE,MAAM,CAEtB,iBAAI,CACA,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,QAAQ,CACrB,UAAU,CAAE,QAChB,CACF,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACf,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GAAG,CACV,gBAAgB,CAAE;AACxB,EAAE"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var conjecture = `For any positive integer n, the Collatz sequence is defined as follows:

    If n is even:
        Divide it by 2.
    If n is odd:
        Multiply it by 3 and add 1.

    Repeat the process with the new value of n.

The conjecture states that no matter what positive integer you start with, the sequence will always eventually reach 1.`;
  var example = `    6 is even,  6÷2=3
    3 is odd,   3×3+1=10
    10 is even, 10÷2=5
    5 is odd,   5×3+1=16.
    16 is even, 16÷2=8.
    8 is even,  8÷2=4.
    4 is even,  4÷2=2.
    2 is even,  2÷2=1.`;
  var code = `  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var n;
var m;

var collatz = function collatz (n) {
    m = M([n, 0]);
    m(f);
}
var out = "";

function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] = d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      if (d[0] !== 1) f(d)
      else {
          d[1] = d[1];
          out = "The number of steps was " + d[1];
      }
}

function getInput (event) {
    n = event.target.value;
}`;
  var results = `testing the number 10
The number of steps is 6

testing the number 100
The number of steps is 25

testing the number 1000
The number of steps is 111

testing the number 10000
The number of steps is 29

testing the number 100000
The number of steps is 128

testing the number 1000000
The number of steps is 152

testing the number 10000000
The number of steps is 145

testing the number 100000000
The number of steps is 107

testing the number 1000000000
The number of steps is 100

testing the number 10000000000
The number of steps is 124

testing the number 100000000000
The number of steps is 347

testing the number 1000000000000
The number of steps is 146`;
  var bigNum = `testing the number 2.6561398887587478e+95
d is [ 1.3280699443793739e+95, 1 ]
d is [ 6.6403497218968695e+94, 2 ]
d is [ 3.3201748609484348e+94, 3 ]
d is [ 1.6600874304742174e+94, 4 ]
d is [ 8.300437152371087e+93, 5 ]
d is [ 4.1502185761855434e+93, 6 ]
d is [ 2.0751092880927717e+93, 7 ]
d is [ 1.0375546440463859e+93, 8 ]
d is [ 5.1877732202319293e+92, 9 ]
d is [ 2.5938866101159647e+92, 10 ]
d is [ 1.2969433050579823e+92, 11 ]
...
d is [ 1364, 578 ]
d is [ 682, 579 ]
d is [ 341, 580 ]
d is [ 1024, 581 ]
d is [ 512, 582 ]
d is [ 256, 583 ]
d is [ 128, 584 ]
d is [ 64, 585 ]
d is [ 32, 586 ]
d is [ 16, 587 ]
d is [ 8, 588 ]
d is [ 4, 589 ]
d is [ 2, 590 ]
d is [ 1, 591 ]
The number of steps is 591`;
  var n;
  var out = "";
  $$result.css.add(css);
  return `<h1 class="svelte-901fe7" data-svelte-h="svelte-15tok7g">The Collatz Conjecture</h1> <pre class="svelte-901fe7">${escape(conjecture)}</pre> <p data-svelte-h="svelte-6jqccx">For example, consider n = 6:</p> <pre class="svelte-901fe7">${escape(example)}</pre> <br> <div data-svelte-h="svelte-1r8vzgo">*******************************************************</div> <div data-svelte-h="svelte-1r8vzgo">*******************************************************</div> <p data-svelte-h="svelte-s7chxv">Enter an integer greater than 1 below to see how many steps it takes to get to the the number &quot;1&quot;. The arrow keys work. For example, if you enter 32, you get 5; press the &quot;down&quot; arrow on your keyboard, or the &quot;down&quot; arrow on the input box (below), and see that it takes 106 steps for 31 to get to 1.</p> <input type="number" class="svelte-901fe7"${add_attribute("value", n, 0)}> <h3>The selected number is ${escape(n)}</h3> <h3>${escape(out)}</h3> <div data-svelte-h="svelte-1r8vzgo">*******************************************************</div> <div data-svelte-h="svelte-1r8vzgo">*******************************************************</div>  <p data-svelte-h="svelte-1pg9okm">Here&#39;s the code that generates the Collatz sequence on this page:</p> <pre class="svelte-901fe7">${escape(code)}</pre> <p data-svelte-h="svelte-1ayed94">Here are some results:</p> <pre class="svelte-901fe7">${escape(results)}</pre> <p data-svelte-h="svelte-1y6hdyd">Even n = 9**100 finishes in fewer than 1000 steps, as shown below.</p> <pre class="svelte-901fe7">${escape(bigNum)}</pre> <br><br><br> <br><br><br>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-HYE5fC7_.js.map
