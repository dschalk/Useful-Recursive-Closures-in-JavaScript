
<script>

var conjecture = `For any positive integer n, the Collatz sequence is defined as follows:

    If n is even:
        Divide it by 2.
        n=n2n=2n​

    If n is odd:
        Multiply it by 3 and add 1.
        n=3n+1n=3n+1

    Repeat the process with the new value of n.

The conjecture states that no matter what positive integer you start with, the sequence will always eventually reach 1.
An Example`;

var example = `    6 is even, so 6÷2=36÷2=3.
    3 is odd, so 3×3+1=103×3+1=10.
    10 is even, so 10÷2=510÷2=5.
    5 is odd, so 5×3+1=165×3+1=16.
    16 is even, so 16÷2=816÷2=8.
    8 is even, so 8÷2=48÷2=4.
    4 is even, so 4÷2=24÷2=2.
    2 is even, so 2÷2=12÷2=1.`;

var code = `var log = console.log;
var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var m = M([n, 0]);
function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      // log ("d is", d);  // Uncommented for the large number (below)
      if (d[0] === 1) log("The number of steps is", d[1]);
      if (d[0] > 1) f(d);
      else return d  
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


</script>
<h1>The Collatz Conjecture</h1>
<pre>{conjecture}</pre>
<p> For example, consider n = 6:</p>
<pre>{example}</pre>
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

</style>