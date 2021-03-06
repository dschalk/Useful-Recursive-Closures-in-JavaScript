<head>

</head>

<h2>Useful Recursive Closures</h2>

<p>Recursive functions returned by the simple M(x) function (no restrictions on what x can be) form closures with M that facilitate elegant function composition, sequestering state transformations inside the closure's scope, and more. A demonstration features a solitaire version of the simulated four-dice game of Score controlled inside the closure "m2 = M(x)", where x = [ [], [], [], [], [], [], [],[] ].</p>
<p> JavaScript monads are defined in various ways online and in print. I wouldn't say any of these definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the matter will be in Home and in an addendum. </p>
<p>The function M() (below) returns the function go(), thereby forming a closure. The returned function is named to facilitate recursion. Here's the definition of M():</p>
<pre>{function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};</pre>



<p> M(x) is most useful when the closure is named or, more precisely, when the function returned by M(x) is named. When M(x) is assigned a variable name, the value of "x" in M(x) can be preserved, transformed, and later used if it is eventually needed. "x" in M(x) will correspond to the state of play in the solitaire game of Score (below), but before we get to that, let's take a closer look at M and the function returned by M(x).  </p>
<pre>var mon = M(2);  
mon(v=>v**4)(v=>v+5)(v=>v*2);</pre>
The value of x can be obtained later
<pre>mon('stop');  // 42
mon(v => v*v);</pre>
And later:
<pre>var example5 = `mon('stop');  // 1764</pre>


<p>These abreviations will be used from now on:</p>
<pre>var s = "stop";
var log = console.log;
</pre>
<span style = "font-size:26px; color: gold; text-decoration: underline">Deep Clone:</span>
<span>I ran the following code in the Firefox.aurora console. The result verifies that mon2 defined by "var mon2 = M(mon(s))" is a deep clone of mon. The mon2 closure is out of reach by everything in its outer scope, and the mon closure is no exception.  </span>
<pre>{var m3 = M(3);
var m4 = M(m3(s));
m3(v => v + 3);
m4(v => v + 4);
log("m3(s) * m4(s) is", m3(s) * m4(s))  // m3(s) * m4(s) is 42}</pre>
<p>As expected, m3 and m4 went their separate ways. One holds 6 and the other 7. Their product is 42.</p>

<span style = "font-size:26px; color: gold; text-decoration: underline">Function Composition:</span>
<span>M provides a way to anonymously compose functions concisely and transparently; a good alternative to callback spaghetti. </span>
<pre>{M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42}</pre>

<p>Next, we'll let x = [1,2,3,4] in mon3 = M(x). mon3 will operate on some functions and we'll log mon3(s) to see what happened to x. An interactive demonstration is in the online demonstration at <a href = "https://schalk2.com">https://schalk2.com</a> 

<pre>function g(ar) {
    ar.unshift(ar.pop()**3);
    return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};

function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

var mon3 = M([1,2,3,4]);

console.log(mon3(g)(s)); // [ 64, 1, 2, 3 ]
console.log(mon3(g)(s)); // [ 27, 64, 1, 2 ]
console.log(mon3(g)(s)); // [ 8, 27, 64, 1 ]
console.log(mon3(g)(s)); // [ 1, 8, 27, 64 ]
console.log(mon3(g3)(s)); // [ 1, 2, 3, 4 ]</pre>

<p>The function fu() is the brains behind the game of Score. Each time a number or operator is clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The state of play in M is an array of seven arrays. Let's call it ar. If an operator op is in ar[2] and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and calls runRoll, starting another round of play. </p> 
<p>At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game buttons, causing them to reflect the current state of ar. The second hides buttons that correspond to values of 'undefined' and shows buttons that correspond to numbers in ar. This is done by switching variables p in "style = 'display: p' back and forth between "none" and "inline". </p>
  
<pre>function fu (a) {                                 
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
}; </pre>
