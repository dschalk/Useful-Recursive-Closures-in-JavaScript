
<script>
var log = console.log;
var cloneCode = `var log = console.log;

var ar1 = M([ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a*b} ]]]])  
var clone = ar1;
log('ar1(dF3x)[1][1][1][0](6,7) is', ar1(dF3x)[1][1][1][0](6,7)) // 42
log('clone(dF3x)[1][1][1][0](6,7) is', clone(dF3x)[1][1][1][0](6,7)) // 42
// Next, we make ar1 and clone completely independent of one another with:
ar1 = M([ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a*b} ]]]])

// The variable ar1 now points to a different memory address.
// The variable clone still points to ar1's previous address.
// ar1 and clone are, therefore, completely independent of one another.

var clone = M([ [ ], [ [ ], [ [ ], [ function add (a, b) {return a + b} ]]]])
log('clone(dF3x)[1][1][1][0](6,7) is', clone(dF3x)[1][1][1][0](6,7)) // 13 
log('ar1(dF3x)[1][1][1][0](6,7) is', ar1(dF3x)[1][1][1][0](6,7)) // 42

var ar1 = ar1(() => [ [ ], [ [ ], [ [ ], [ function concat (a, b) {return "" + a + b} ]]]]);
log('ar1(dF3x)[1][1][1][0](6,7)', ar1(dF3x)[1][1][1][0](6,7));  // 67
log('clone(dF3x)[1][1][1][0](6,7)', clone(dF3x)[1][1][1][0](6,7));  // 13 `



var obj = `var O = {add: (a,b) => a + b, mult: (a,b) => a * b}
var Z = O;
O = {add: (a,b) => a + b, mult: (a,b) => a * b}
O.concat = (a,b) => "" + a + b;    
log(O); // { add: add(a, b), mult: mult(a, b), concat: concat(a, b) }
log(Z); // { add: add(a, b), mult: mult(a, b) }   
Z.subtract = (a,b) => a - b;
log(Z); // { add: add(a, b), mult: mult(a, b), subtract: subtract(a) }
log(O); // { add: add(a, b), mult: mult(a, b), concat: concat(a, b) }`

var cloneCode2 = `log("var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]");
var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
log("var clone = ar");
var clone = ar;
log ("clone === ar", clone === ar);  // true
log("ar = [[], [[], [[], [function pythag(a, b) { return Math.sqrt(a*a + b*b) }]]]]");  
ar = [[], [[], [[], [function pythag(a, b) { return Math.sqrt(a*a + b*b) }]]]]  
log ("clone === ar", clone === ar);  // false
log("ar[1][1][1][0](3,4)", ar[1][1][1][0](3,4))  // 5
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  // 12
log("**************************************** re-define clone");
clone = [[], [[], [[], [function add (a, b) { return a + b }]]]] 
log("clone = [[], [[], [[], [function add (a, b) { return a + b }]]]]"); 
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  // 7
log("ar[1][1][1][0](3,4)", ar[1][1][1][0](3,4))  // 5
log("**************************************** re-define ar");
log("ar = [[], [[], [[], [function concat (a, b) { return '' + a + b }]]]]");
ar = [[], [[], [[], [function concat (a, b) { return "" + a + b }]]]] 
log("ar[1][1][1][0](6,7)", ar[1][1][1][0](3,4))  // 34
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  // 7
log("**************************************** re-define clone");
log("clone = [[], [[], [[], [function squaresum (a, b) { return (a + b)**2 }]]]]"); 
clone = [[], [[], [[], [function squaresum (a, b) { return (a + b)**2 }]]]] 
log("clone[1][1][1][0](6,7)", clone[1][1][1][0](3,4))  // 49
log("ar[1][1][1][0](6,7) say what?", ar[1][1][1][0](3,4))  // 34 `

var JSCode = `var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
var clone = ar
clone === ar true
ar = [[], [[], [[], [function pythag(a, b) { return Math.sqrt(a*a + b*b) }]]]]
clone === ar false
ar[1][1][1][0](3,4) 5
clone[1][1][1][0](3,4) 12
**************************************** re-define clone
clone = [[], [[], [[], [function add (a, b) { return a + b }]]]]
clone[1][1][1][0](3,4) 7
ar[1][1][1][0](3,4) 5
**************************************** re-define ar
ar = [[], [[], [[], [function concat (a, b) { return '' + a + b }]]]]
ar[1][1][1][0](6,7) 34
clone[1][1][1][0](3,4) 7
**************************************** re-define clone
clone = [[], [[], [[], [function squaresum (a, b) { return (a + b)**2 }]]]]
clone[1][1][1][0](6,7) 49
ar[1][1][1][0](6,7) say what? 34 `;

var cloneCode3 = `var m = M([ [], [[6,7], [a => b => a * b]], [888]] );
log("var m = M([ [], [[6,7], [a => b => a * b]], [888]] ") ;
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");
log("The above code reduces to (a=>b=>a*b)(6)(7) =",m(dF3x)[1][1][0]( m(dF3x)[1][0][0])( m(dF3x)[1][0][1])) ;
var mclone = m;
log("mclone === m", mclone === m);
mclone = M(mclone(dF3x));
log("mclone = M(mclone(dF3x))");
log("mclone === m", mclone === m);
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )");
log("Also reduces to (a=>b=>a*b)(6)(7) =",mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;
log("\nmclone and m are identical, and 'mclone === m' returns false."); 
log("Therefore mclone's address in memory is no longer the same as m's.");
log("mclone and m being identical and independent establishes that the object named mclone is a deep clone of m. Q.E.D.\n");
log("Changes to'mclone' won't affect 'm', as shown below.")
mclone =  mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] ); // New definition
log("mclone = m(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] )");
log("m(dF3x}", m(dF3x)) 
log("mclone === m", mclone === m);
log("mclone(dF3x)", mclone(dF3x))  
log("m(dF3x)", m(dF3x))  

log("\nWe now repeat previously executed code; but this time, m and mclone return different numbers");
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )");
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;

log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0])( m(dF3x)[1][0][1])); `;

var JSCode2 = `mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] )
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ) ) // 5
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )); // 42 `;

var JSCode3 = `m(() => [ [], [[3,4], [a => b => a + b], [888] ] ] )
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) ) // 7
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )) // 5 `;

var cloneCode4 = `var m = M( [ [], [ [6,7], [a => b => a * b] ], [888]] );

function M (x) {
    return function go (func)
    {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}
const log = console.log;
const dF3x = () => {}; `; 

var cloneCode5 = `var mclone = m;
m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ); // 42 
mclone === m  // true
mclone = M(mclone(dF3x)); 
mclone === m  // false ;
mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ); // 42`

var VSCode = `function clone (v) {
   return M(v)(dF3x);
}

var bclone;
var b = [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ["clown"], [v=>v**3] ] ], 888];
log("b is", b);
bclone = clone(b);
log("bclone = clone(b)");
log("bclone is", bclone);
log("b and bclone are the same as one another,");
log(" though not necessarily referring to the same memory address");
log("b === bclone", b === bclone);
log("Despite the above, when bclone and clone are used,");
log("they turn out to be independent, as shown below:")
log("bclone = 'Hello World')'", bclone = "Hello World" );  
log("b === bclone", b == bclone)
log("b is", b);
log("bclone is", bclone);
log("b = 'Cow'", b = "Cow");
log("b is", b);
log("bclone is", bclone);
`

var test4 = `jj% node test4.js
b is [
  [ [ 2 ], [ 3 ], [ 4 ] ],
  [ [ [Array], [Array], [Array] ], [ [Array], [Array] ] ],
  888
]
bclone = clone(b)
bclone is [
  [ [ 2 ], [ 3 ], [ 4 ] ],
  [ [ [Array], [Array], [Array] ], [ [Array], [Array] ] ],
  888
]
b and bclone are the same as one another,
 though not necessarily referring to the same memory address
b === bclone true
Despite the above, when bclone and clone are used,
they turn out to be independent, as shown below:
bclone = 'Hello World')' Hello World
b === bclone false
b is [
  [ [ 2 ], [ 3 ], [ 4 ] ],
  [ [ [Array], [Array], [Array] ], [ [Array], [Array] ] ],
  888
]
bclone is Hello World
b = 'Cow' Cow
b is Cow
bclone is Hello World `;

</script> 

<h1 style = "text-align: center"> Cloning Recursive Closures</h1>

<p> Neither JSON.parse(JSON.stringify()), Object.assign(), spread operators, nor structuredClone can clone m, M, or the whole m-M(x) closure, such as those defined at <a href= "./">Home</a> and <a href = "./cube">Rubik's Cube</a>; or, for that matter, any data structure containing a function. But there is a simple way to clone complex data structures. We'll start with recursive closures. Let m be defined as:  </p>  
<pre>{cloneCode4}</pre>
  
 <p> It suffices to clone 'm', ignoring "M(x)" in the cloning code. This is easily done by copying m, and then placing that copy at a new location in memory.</p>
<div style="font-size:32px; text-align:center; color:gold">Cloning a Recursive Closure Over a Deeply Nested Data Structure</div>
<pre>{cloneCode5}</pre>
<p> The definition "var mclone = m" created a variable named "mclone" that pointed to an address in memory shared with 'm'. Changes in m would be reflected in mclone and vice versa. Redefining mclone as "mclone = M(mclone(dF3x))" didn't change mclone, it's still the same as it was and still identical with m. Only its memory address changed. Causing mclone to point to a new address in memory made it independent from m. In the code above, "mclone === m" returned "false" after "mclone = M(mclone(dF3x))". This is sufficient to establish that mclone is a deep clone of m. The state of x in the m-M(x) closure when mclone is created will be available to retrieve with mclone(dF3x) or modify with mclone(func) until the computer powers down.   </p>

<p> This confirms that modifying mclone doesn't change m:</p>
<pre>{JSCode2}</pre>
<p> This confirms that modifying m doesn't change mclone;</p>
<pre>{JSCode3}</pre>
<div style="font-size:32px; text-align:center; color:gold"> Cloning a Deeply Nested Array Containing a Function</div>
<p>Does cloning data structures such as "var b = [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ["clown"], [v=>v**3] ] ], 888]" have to be as complicated as most people make it? The little function named "clone", defined below, is all you need.</p>
<p>"Here's the result of calling "node test4.js" in Virtual Studio Code. Running test4.js in the Firefox Developer console (F12). Note the slight lag in reporting that "b === bclone" is false. </p>

<pre>{test4}</pre>

<pre>{VSCode}</pre>

<div style="font-size:32px; text-align:center; color:gold"> Cloning an Object With Deeply Nested Attributes And Functions</div>




<br><br><br><br>