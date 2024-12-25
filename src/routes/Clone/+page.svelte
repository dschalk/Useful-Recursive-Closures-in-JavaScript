<script>

var MCode = `

  var dF3x = () => {}; // This flag is never called. See line 3 of M, below. 

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

  var m = M(x); // x can be any JavaScript value
  var m_clone = M(m(dF3x)); `;

var code = `// Utility function for logging
var log = console.log;

// Function used in M (below) to retrieve the 
// current value of x in the closure
var dF3x = () => {}

// Function M(x) that creates a closure over any JavaScript value x
function M(x) {
    return function go(func) {
        if (func === dF3x) {
            // If func is dF3x, return the current value of x
            return x;
        } else {
            // **Critical Line**: Reassign x to the result of func(x)
            x = func(x);
            return go;
        }
    }
}

// Example function to be stored in the array
function add(a, b) { return a + b; }

// Create closures
const m = M([ [6], [7], [add] ]); // Original closure
const cl = m;                      // cl references the same closure as m
const m_clone = M(m(dF3x));        // m_clone is a new closure with its own x

// **Caption**: Initial State - All closures share the same x
log("Initial State:");
log("m(dF3x) is", m(dF3x));         // [ [6], [7], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x));       // [ [6], [7], [ [Function: add] ] ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [6], [7], [ [Function: add] ] ]
log("Object.is(m(dF3x), cl(dF3x)):", Object.is(m(dF3x), cl(dF3x))); // true
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// **Caption**: Mutating x via m_clone before any reassignment
m_clone(dF3x).push(1111);
log("\nAfter m_clone(dF3x).push(1111):");
log("m(dF3x) is", m(dF3x));           // Mutated array includes 1111
log("cl(dF3x) is", cl(dF3x));         // Also includes 1111
log("m_clone(dF3x) is", m_clone(dF3x));   // Includes 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// **Caption**: Reassigning x in m - This breaks the shared reference
m(v => v.concat(888)); // Reassign x in m to a new array
log("After m(v => v.concat(888)):");
log("m(dF3x) is", m(dF3x));           // New array with 888
log("cl(dF3x) is", cl(dF3x));         // Also updated (same closure as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // Remains unchanged with 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// **Caption**: Reassigning x in m_clone - Independent state
m_clone(v => v.concat(777)); // Reassign x in m_clone to a new array
log("After m_clone(v => v.concat(777)):");
log("m(dF3x) is", m(dF3x));           // Unchanged from previous step
log("cl(dF3x) is", cl(dF3x));         // Unchanged (same as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // New array with 1111 and 777
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// **Caption**: Mutating x in m_clone after reassignment
m_clone(dF3x).push(2222);
log("After m_clone(dF3x).push(2222):");
log("m(dF3x) is", m(dF3x));           // Unchanged
log("cl(dF3x) is", cl(dF3x));         // Unchanged
log("m_clone(dF3x) is", m_clone(dF3x));   // Now includes 1111, 777, 2222

// **Caption**: Mutating x in m
m(dF3x).push(3333);
log("After m(dF3x).push(3333):");
log("m(dF3x) is", m(dF3x));           // Includes 888, 3333
log("cl(dF3x) is", cl(dF3x));         // Also includes 888, 3333
log("m_clone(dF3x) is", m_clone(dF3x));   // Unchanged

// Mutating x via m_clone after any reassignment
m_clone(dF3x).push(444);
log("\nAfter m_clone(dF3x).push(444):");
log("m(dF3x) is", m(dF3x));           // Does not include 444
log("cl(dF3x) is", cl(dF3x));         // Also does not include 444
log("m_clone(dF3x) is", m_clone(dF3x));   // Only the clone has been updated
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // Now it's false`    

var output = `Initial State:
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
Object.is(m(dF3x), cl(dF3x)): true
Object.is(m(dF3x), m_clone(dF3x)): true

After m_clone(dF3x).push(1111):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
Object.is(m(dF3x), m_clone(dF3x)): true

After m(v => v.concat(888)):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
Object.is(m(dF3x), m_clone(dF3x)): false

After m_clone(v => v.concat(777)):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777 ]
Object.is(m(dF3x), m_clone(dF3x)): false

After m_clone(dF3x).push(2222):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222 ]

After m(dF3x).push(3333):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222 ]

After m_clone(dF3x).push(444):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222, 444 ]
Object.is(m(dF3x), m_clone(dF3x)): false `
var Obis = `        log(Object.is(NaN, NaN)); // true
        log(NaN === NaN);         // false
        log(Object.is(-0, 0));    // true
        log(-0 === 0)             // false `

var ex1 = `    var a, b;
    var a = b = [1,2,3]; 
    a.push(4); 
    console.log(a); // [1,2,3,4];
    console.log(b); // [1,2,3,4]`;

var ex2 = `    var a, b;
    a = b = [1,2,3];
    a = a.concat(4);
    console.log(a); // [1,2,3,4]
    console.log(b); // [1,2,3]`


</script>


<h1>Simply Cloning Any Object</h1>
<h2>Even Deeply Nested Data Structures Containing Functions, Self-References, etc </h2>
<pre>{MCode}</pre>
<p>Calling m(func) for some function "func" changes x in the m-M(x) closure to func(x) (unless it throws an error); but  has no effect on x in the m_clone-M(x) closure. Likewise, running m_clone(func) does not affect m. Why? <span style="color:coral">Because x gets reassigned on line 4 of M.</span> </p>

<h2>Two Essential Facts</h2>
<p> 1. When two variables point to the same object in memory, either variable can modify that object, thereby changing the value of both variables. For example,
    <pre>{ex1}</pre>
<p> 2. When two variables point to the same object in memory, and one gets reassigned  <span style="color:coral">(as happens on line 4 of M)</span>, the variables become independent from one another. For example,
    <pre>{ex2}</pre>
   
<p>Note: Object.is and === (strict equality) are both used to compare values, but they work differently in two ways: Object.is(NaN, NaN) returns true, whereas NaN === NaN returns false. Object.is(-0, +0) returns true, but -0 === +0 returns false. "===" could have been used in the demonstration below.</p>

<pre>{Obis}</pre>

<p>In the example below, m is defined as an array containing three arrays, one of which contains a function. cl is copy of m. m_clone is a clone of m, m_clone = M(m(dF3x)). The value returned by m_clone(dF3x) is, at first, a reference to the array held in the m-M(x) closure. When m(func) reassigns x in the m-M(x) closure, or m_clone(func) reassigns x in its closure for some function "func", the value of x in the m-M(x) closure and the value of x in the m_clone-M(x) become independent of one another. These reassignment happen on the 4th line of M. </p>

<p>As shown in the following examples, changes in m(dF3x) caused by m(v => v.concat(888)) don't change m_clone(dF3x), and changing m_clone(dF3x) by running m_clone(v => v.concat(777)) has no effect on m or cl. Unlike m and m_clone, m and cl point to the same place in memory, as do the values held in the m-M(x) and cl-M(x) closures; i.e., m(dF3x) and cl(dF3x). Therefore, changing x in either closure changes x in the other. </p>

<p> Here's the demonstration code:</p>
<pre>{code}</pre>
<br>
<p> This is the text returned by the demonstration code using Node.js: </p>
<pre>{output}</pre>



<style>
    h1 {text-align: center;}
    h2 {text-align: center;}
    pre {
        font-size: 20px;
        white-space: pre-wrap;       /* Since CSS 2.1 */
        word-break: keep-all;
    }

</style>