

<h2>Useful Recursive Closures</h2>

<p>Recursive functions returned by the simple M(x) function (no restrictions on what x can be) form closures with M that facilitate elegant function composition, sequestering state transformations inside the closure's scope, and more. A demonstration features a solitaire version of the simulated four-dice game of Score controlled inside the closure "m2 = M(x)", where x = [ [], [], [], [], [], [], [],[] ].</p>
<p> JavaScript monads are defined in various ways online and in print. I wouldn't say any of these definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the matter will be in <a href = "./">Home</a> and in an addendum. </p>
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
<p> M(x) is most useful when the closure is named or, more precisely, when the function returned by M(x) is named. When M(x) is asigned a variable name, the value of "x" in M(x) can be preserved, transformed, and later used if it is eventually needed. "x" in M(x) will correspond to the state of play in the solitaire game of Score (below), but before we get to that, let's take a closer look at M and the function returned by M(x).  </p>
<pre>var mon = M(2);  
mon(v=>v**4)(v=>v+5)(v=>v*2);</pre>
The value of x can be obtained later
<pre>mon('stop');  // 42
mon(v => v*v);</pre>
And later:
<pre>var example5 = `mon('stop');  // 1764</pre>

<pre>function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};</pre>
  
  
  
  
  
  
  
  
  
  
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
