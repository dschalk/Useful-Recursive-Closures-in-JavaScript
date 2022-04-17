<head>
  <script>
    
var fuDem = `function fu (a) {                                    // fu
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
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};`

var monad3 = `var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;


var simple = `var s = 'stop';
var m4 = M(3);   // creates a new monad named "m4".
var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;`;

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
};`

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
};`

var putBack = `if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`

var fuFuncs = `function squareFu () {m4 = m4(square)};
function cubeFu () {m4 = m4(cube)};

function divFraction (x) {
    var y = x.split('/');
    if(y.length > 1){
        return (y[0] / y[1])
    }
    else{
        return y[0];
    }
}

var powFu = function powFu (e) {
    var p = divFraction(e.target.value);
    if (e.keyCode == 13) {
        m4 = m4(pow(p));
    }
};
    
var addFu = function addFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(add(e.target.value));
    };
  };
    
var multFu = function multFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(mult(divFraction(e.target.value)))};
};
    
var resetFu = function resetFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(reset2(divFraction(e.target.value)))
    };
};`;

var example0 = `var mon = M(2); // mon's value is the anonymous function returned by M.     `  

var example3 = `var mon = M(2);  
mon(v=>v**4)(v=>v+5)(v=>v*2);`;
// The value of x can be obtained later
var example4 = `mon('stop');  // 42
mon(v => v*v);`;
// And later:
var example5 = `mon('stop');  // 1764`;

var oldMonad =`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};`

var buttons = `<button style = "display: {b0}" on:click = {() => m2(click0)}>{AA}</button> 
<button style = "display: {b1}" on:click = {() => m2(click1)}>{BB}</button> 
<button style = "display: {b2}" on:click = {() => m2(click2)}>{CC}</button> 
<button style = "display: {b3}" on:click = {() => m2(click3)}>{DD}</button>

<span style = "margin-left: 8%; font-size: 22px">The operator is {m2(s)[2]}</span>

<br><br>
<button on:click = {() => m2(clic0)}>add</button>
<button on:click = {() => m2(clic1)}>subtract</button>
<button on:click = {() => m2(clic2)}>multiply</button>
<button on:click = {() => m2(clic3)}>divide</button>
<button on:click = {() => m2(clic4)}>concat</button>
`;
var backDem = `back = a => {
    if (a[5].length < 1) {
      m2 = M(a);
      console.log("You're already all the way back")
      return;
    }
    else {
        var b = a[5][a[5].length - 1];
        b[7] = a[7];
        m2 = M(b);
        update();
        sfunc();
    }
};

var forward;
$: forward = a => {
    var index = a[6][0];
    if (a[5].length === a[7].length) {
        console.log("Already at the top");
        m2 = M(a);
        return;
    }
    else {
        var b = a[7][index + 1];
        b[7] = a[7];
        m2 = M(b);
        update();
        sfunc();
    }
};`

var example2 = `var m3 = M(3);
var m4 = M(m3(s));
m3(v => v + 3);
m4(v => v + 4);

log("m3(s) * m4(s) is", m3(s) * m4(s))

m3(s) * m4(s) is 42`;

var example6 = `M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42`

</script>

  
</head>

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

  <pre>{backDem}</pre>
  
  
  
  
  
  
  
  
  
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
