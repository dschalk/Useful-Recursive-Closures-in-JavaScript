
<script>
let cloneChat = "$lib/Clones";  
var A1 = `    var dF3x = () => {};
    var log = console.log;

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }

    const m = M([ [6], [7], [add] ]);
    const cl = M(m(dF3x))
    function add (a,b) {return a+b};
    function mult (a,b) {return a*b};`;

var B2 = `const m = M([ [6], [7], [add] ]);
const cl = M(m(dF3x))
function add (a,b) {return a+b};

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 
log("m(() => [7777])");
m(() => [7777]);
log("m(dF3x)", m(dF3x)); // [7777] 
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add ] ]`

var B3 = `const m = M([ [6], [7], [add] ]);
const cl = M(m(dF3x))
function add (a,b) {return a+b};
function mult (a,b) {return a*b};

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 

cl(v => [ v[0], v[1], [mult] ]); 
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: mult ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false `

var D4 = `const m = M([ [6], [7], [add] ]);
const cl = M(m(dF3x))
function add (a,b) {return a+b};

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 
m(dF3x).push(42);
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 42 ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 42 ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true`

var E5 = `const m = M([ [6], [7], [add] ]);
const cl = M(m(dF3x))
function add (a,b) {return a+b};

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 
//m(dF3x).push(42);
m(v => v.concat(42));
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 42 ]
log("cl(dF3x)", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // false`

</script>
<h1>Cloning Deeply Nested Data Structures </h1>   
<h2 style="font-style: italic">Works On Every Kind of Object </h2>

<p>Another advantage of holding state in m-M(x) closures (see <a href="./">Home</a>) is the ease with which clones can be created.  </p>
<div class = "chat">
<pre>{A1}</pre>

<h2>Lazy Evaluation</h2>

<p> Object.is, when applied to objects, tests whether they share the same address in memory. Below, Object.is is used to show that cl is independent of m, although both hold references to a single value in memory. Sharing the reference to [ [6], [7], [add] ] at the same memory address doesn't change the fact that cl is a clone of m.  Using m(func1) or cl(func2), where func1 and func2 operate on 'x' in the m-M(x) and cl-M(x) closures, affects only cl or m, depending on which made the function call. </p> 
<p> Below, the value held in m will change without affecting cl.</p>
</div>
<div class = "chat">
<pre>{B2}</pre>
</div>
<p>Conversely, changes to x in the cl-M(x) closure has no affect on x in the m-M(x) closure.</p>
<pre>{B3}</pre>
<p> Running cl(func) results in "x = func(x)," pursuant to the definition of M. This reassigns x to a new location in memory, rendering it completely independent from x in the m-M(x) closure. If cl(func) isn't called on any function that modifies x in the cl-M(x) closure, browser engines and Node let it remain a reference to x in the m-M(x) closure. Encapsulating operations on the values held in m-M(x) closures is reminiscent of monads in the Haskell programming language, as is lazy evaluation. Without carrying the analogy too far, it's interesting to observe functional programming in two very different languages converging this way.     </p>

 <p> m and cl begin as closures located at separate addresses in memory. Both are closures around [ [ 6 ], [ 7 ], [ add ]] located at some address in memory.  Calling cl(v => [ v[0], v[1], [mult] ]) reassigns the value in the cl closure to some address holding [v[0], v[1], [mult]]) </p> 
  
  <p>Cloning is accomplished by reassigning x in the cl-M(x) closure. This is accomplished in line 5 of M (else x = func(x)). The following two lines of code create a clone of m named "cl", where ob can be any JavaScript object, no matter how deeply nested, self-referential, complicated, or unusual it might be: </p>
<pre>        m = M(v);
        cl = M(m(dF3x));</pre>
<p> All non-primitive JavaScript values are objects, either because they are in the Object prototype chain, or because they were explicitly created with Object.create(null) and therefore have no prototype. "cl = M(m(dF3x)" works for any JavaScript object because, whenever cl(func) is called on a function func that modifies x in the cl-M(x) closure, x = func(x) runs in M, and the new value of x gets a new address in memory. </p>


<h2>Back Door Access</h2>

<p> It's possible to modify x in the cl-M(x) closure directly. If the modification doesn't reassign x, the change gets reflected in both closures, as illustrated below.  </p>
<pre>{D4}</pre>
<p> Appending 42 to x in the m-M(x) closure, without affecting x in the cl-M(x) closure, can be accomplished as follows:</p>
<pre>{E5}</pre>
<br><br>

<br><br><br>
<br><br><br>



<style>
span {
  color: #91d1f9;
}

h2 {
  text-align: center;  
} 

h1 {
  text-align: center;  
} 

h3 {
  color:rgb(245, 220, 146);
  text-align: center;
  font-size: 27px;
  white-space: inherit;
}

  .H33 {
    color: gold;
    text-align: center;
    text-indent: 3%;
    }

.i3 {
  text-indent: 3%;
  text-align: left;
}
    
.chat {
  margin: 1px;
  color: #91d1f9;
}    

.marginLeft {
  margin-left: 3%;
}    


</style>

