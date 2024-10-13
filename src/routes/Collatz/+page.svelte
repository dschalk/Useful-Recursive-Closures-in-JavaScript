
<script>

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
    2 is even,  2÷2=1.`

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
The number of steps is 146`

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

var biggerNumber  = `testing the number 1.7190733398152932e+304
d is [ 8.595366699076466e+303, 1 ]
d is [ 4.297683349538233e+303, 2 ]
d is [ 2.1488416747691165e+303, 3 ]
d is [ 1.0744208373845582e+303, 4 ]
d is [ 5.372104186922791e+302, 5 ]
d is [ 2.6860520934613956e+302, 6 ]
...
d is [ 53, 1204 ]
d is [ 160, 1205 ]
d is [ 80, 1206 ]
d is [ 40, 1207 ]
d is [ 20, 1208 ]
d is [ 10, 1209 ]
d is [ 5, 1210 ]
d is [ 16, 1211 ]
d is [ 8, 1212 ]
d is [ 4, 1213 ]
d is [ 2, 1214 ]
d is [ 1, 1215 ]
The number of steps is 1215`;

var big = `
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test2
testing the number 1.2247208276643356e+201
d is [ 6.123604138321678e+200, 1 ]
d is [ 3.061802069160839e+200, 2 ]
d is [ 1.5309010345804195e+200, 3 ]
d is [ 7.654505172902098e+199, 4 ]
...
d is [ 2.3611832414348226e+21, 597 ]
d is [ 1.1805916207174113e+21, 598 ]
d is [ 590295810358705700000, 599 ]
d is [ 295147905179352830000, 600 ]
d is [ 147573952589676410000, 601 ]
d is [ 73786976294838210000, 602 ]
d is [ 36893488147419103000, 603 ]
d is [ 18446744073709552000, 604 ]
d is [ 9223372036854776000, 605 ]
d is [ 4611686018427388000, 606 ]
d is [ 2305843009213694000, 607 ]
d is [ 1152921504606847000, 608 ]
d is [ 576460752303423500, 609 ]
d is [ 288230376151711740, 610 ]
d is [ 144115188075855870, 611 ]
d is [ 72057594037927940, 612 ]
d is [ 36028797018963970, 613 ]
d is [ 18014398509481984, 614 ]
d is [ 9007199254740992, 615 ]
d is [ 4503599627370496, 616 ]
d is [ 2251799813685248, 617 ]
d is [ 1125899906842624, 618 ]
d is [ 562949953421312, 619 ]
d is [ 281474976710656, 620 ]
d is [ 140737488355328, 621 ]
d is [ 70368744177664, 622 ]
d is [ 35184372088832, 623 ]
d is [ 17592186044416, 624 ]
d is [ 8796093022208, 625 ]
d is [ 4398046511104, 626 ]
d is [ 2199023255552, 627 ]
d is [ 1099511627776, 628 ]
d is [ 549755813888, 629 ]
d is [ 274877906944, 630 ]
d is [ 137438953472, 631 ]
d is [ 68719476736, 632 ]
d is [ 34359738368, 633 ]
d is [ 17179869184, 634 ]
d is [ 8589934592, 635 ]
d is [ 4294967296, 636 ]
d is [ 2147483648, 637 ]
d is [ 1073741824, 638 ]
d is [ 536870912, 639 ]
d is [ 268435456, 640 ]
d is [ 134217728, 641 ]
d is [ 67108864, 642 ]
d is [ 33554432, 643 ]
d is [ 16777216, 644 ]
d is [ 8388608, 645 ]
d is [ 4194304, 646 ]
d is [ 2097152, 647 ]
d is [ 1048576, 648 ]
d is [ 524288, 649 ]
d is [ 262144, 650 ]
d is [ 131072, 651 ]
d is [ 65536, 652 ]
d is [ 32768, 653 ]
d is [ 16384, 654 ]
d is [ 8192, 655 ]
d is [ 4096, 656 ]
d is [ 2048, 657 ]
d is [ 1024, 658 ]
d is [ 512, 659 ]
d is [ 256, 660 ]
d is [ 128, 661 ]
d is [ 64, 662 ]
d is [ 32, 663 ]
d is [ 16, 664 ]
d is [ 8, 665 ]
d is [ 4, 666 ]
d is [ 2, 667 ]
d is [ 1, 668 ]
The number of steps is 668
`

  var log = console.log;
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
}
</script>

<h1>The Collatz Conjecture</h1>
<pre>{conjecture}</pre>
<p> For example, consider n = 6:</p>
<pre>{example}</pre>
<br>
<div>*******************************************************</div>
<div>*******************************************************</div>
<p> Enter an integer greater than 1 below to see how many steps it takes to get to the the number "1". The arrow keys work. For example, if you enter 32, you get 5; press the "down" arrow on your keyboard, or the "down" arrow on the input box (below), and see that it takes 106 steps for 31 to get to 1. </p>
<input type="number" bind:value={n} on:keypress = {() => collatz(n)} on:change = {() => collatz(n)} on:input = {() => collatz(n)} on:change = {() => n = n} on:keypress = {() => n = n}    />
<h3>The selected number is {n}</h3>
<h3>{out}</h3>
<div>*******************************************************</div>
<div>*******************************************************</div>

<!-- <button on:click = {() => collatz(n)}>Run collatz</button> -->

<p> Here's the code that generates the Collatz sequence on this page:</p>
<pre>{code}</pre>
<p> Here are some results:</p>
<pre>{results}</pre>
<p> Even n = 9**100 finishes in fewer than 1000 steps, as shown below. </p>
<pre>{bigNum}</pre>





<br><br><br>
<br><br><br>



<style>
    h1 {text-align: center}
    h2 {text-align: center}
    pre {
        font-size: 20px;
        white-space: pre-wrap;       /* Since CSS 2.1 */
        word-break: keep-all;
    }
  input[type=number] {
      font-size: 34px;
      width: 80%;
      background-color: lightblue
  }
</style>