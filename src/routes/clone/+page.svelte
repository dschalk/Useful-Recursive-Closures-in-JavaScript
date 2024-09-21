

<script>
let cloneChat = "$lib/Clones";  
var A1 = `var dF3x = () => {};
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

var B2 = `log("m === cl", m === cl); // false
log("m(dF3x) === cl(dF3x)", m(dF3x) === cl(dF3x) ); // true
log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]`;

var C3 = `log("cl(v => [ v[0], v[1], [mult] ] )");  
cl(v => [ v[0], v[1], [mult] ]); 
log("m === cl", m === cl);  // false 
log("m(dF3x) === cl(dF3x)", m(dF3x) === cl(dF3x) ) // false
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: mult] ] ]
log("m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0])",
   m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0])) // 13
log("cl(dF3x)[2][0]( cl(dF3x)[0][0], cl(dF3x)[1][0])", 
   cl(dF3x)[2][0]( cl(dF3x)[0][0], cl(dF3x)[1][0] )) // 42`

var D4 = `log("m === cl", m === cl); // false
log("m(dF3x) === cl(dF3x)", m(dF3x) === cl(dF3x) ); // true
log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]

// log("cl(v => [ v[0], v[1], [mult] ] )");  
// cl(v => [ v[0], v[1], [mult] ]); 
log("cl(dF3x)[2] = [mult]")''
cl(dF3x)[2] = [mult];
log("m === cl", m === cl);  // false
log("m(dF3x) === cl(dF3x)", m(dF3x) === cl(dF3x) ) // true
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: mult] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: mult] ] ]
log("m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0])",
   m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0])) // 42
log("cl(dF3x)[2][0]( cl(dF3x)[0][0], cl(dF3x)[1][0])", 
   cl(dF3x)[2][0]( cl(dF3x)[0][0], cl(dF3x)[1][0] )) // 42`
</script>
<h1>Cloning Deeply Nested Data Structures </h1>   
<h2 style="font-style: italic">Containing Self-References, Functions, Any JavaScript values </h2>

<p>Another advantage of holding state in m-M(x) closures (see <a href="./">Home</a>) is the ease with which clones can be created.  </p>
<div class = "chat">
<pre>{A1}</pre>
<p> cl is a clone of m, although both hold references to the value at the same location in memory, as shown below. </p> 
</div>
<div class = "chat">
<pre>{B2}</pre>
</div>
<h2>Lazy Evaluation</h2>
<p> Running cl(func) results in "x = func(x)," pursuant to the definition of M. This reassigns x to a new location in memory, rendering it completely independent from x in the m-M(x) closure. If cl(func) isn't called on any function that modifies x in the cl-M(x) closure, browser engines and Node let it remain a reference to x in the m-M(x) closure. Encapsulating operations on the values held in m-M(x) closures is reminiscent of monads in the Haskell programming language, as is lazy evaluation. Without carrying the analogy too far, it's interesting to observe functional programming in two very different languages converging this way.     </p>

<div class = "chat">
<pre>{C3}</pre>

 <p class="chat">m and cl begin as closures located at separate addresses in memory, both pointing to one address in memory containing [ [ 6 ], [ 7 ], [ [Function: add] ].  Calling cl(v => [ v[0], v[1], [mult] ]) reassigns the value in the cl closure to cl(v => [ v[0], v[1], [mult] ]). Cloning is accomplished by re-assigning memory addresses, and should work with any m(v) , cl = m, and cl(a => a') where a is any JavaScript value and a' is a modification of v, accomplished by reassigning the value in cl to a.  Using the terminology in the definition of M, func = a => a' and x = func(x) is the reassignment. This method works for any JavaScript data structure because it doesn't attempt to operate on individual aspects of data structures, it simply places the modification of the data structure contained in the closure m into a separate location in memory. Am I correct?</p>

<p class="chat">Let’s break it down to confirm your understanding and clarify any points. <br><br>

1. Closures and Memory/ <br><br>


You are correct that closures in JavaScript capture variables from their surrounding scope, and each closure has its own reference to the variables it captures. When you create two closures (m and cl) that both initially point to the same value, they both reference the same memory location. <br><br>

    When you create cl from m using cl = M(m(dF3x)), both closures (m and cl) initially reference the same memory location holding [ [6], [7], [ [Function: add] ] ]. <br><br>

2. Reassignment and Memory Locations <br><br>

The critical part of your question is that reassignment in JavaScript modifies references, not the values directly.
 <br><br>
    When you call cl(v => [ v[0], v[1], [mult] ]), you're invoking the function and passing a modification function (v => [ v[0], v[1], [mult] ]). This reassigns the value in cl's closure (i.e., x is updated in cl's scope) to a new array [ [6], [7], [ [Function: mult] ] ], stored at a new memory location. <br><br>

    m continues to reference the original memory location because m's value hasn’t changed. <br><br>

3. Generalization of Your Approach  <br><br>

You are also correct in observing that this method works with any JavaScript data structure because you're not directly manipulating the internal components of the data structures. Instead, you are:
 <br><br>
    Reassigning the entire structure in cl with the new value, and that reassignment is done at the level of the reference (i.e., pointing cl's closure to a new memory location). <br><br>

    This is effective for any mutable or reference-based JavaScript data structure (arrays, objects, functions, etc.) because the reassignment happens at the reference level—you're not dealing with cloning or copying each internal element manually, but rather replacing the reference to the structure entirely. <br><br>

4. Why This Method Works

Your method works because JavaScript uses reference assignment for objects and arrays, meaning that when you reassign the value in cl: <br><br>

    You’re not cloning or copying individual aspects of the structure but rather replacing the entire reference with a new one created by the modification function (v => v').<br><br>

    This works for all types of JavaScript objects because JavaScript handles object references uniformly, regardless of the complexity of the object. Whether it's an array, object, function, or more complex structure (like Map or Set), as long as you reassign the reference to a modified value, the system behaves consistently. </p>

</div>

<p> We can verify that the values initially held in the m and cl closures are, in addition to being identical, also reside in the same place in memory. Modifying the value in cl, without reassigning it, is expected to modify the value held in m. That's what is observed when the following code is run:  </p>
<div class="marginLeft">
<pre>{D4}</pre>
</div>

<br><br><br>
<br><br><br>



<style>
span {
  color:rgb(252, 173, 75);
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
  margin: 3%;
  color: #91d1f9;
}    

.marginLeft {
  margin-left: 3%;
}    


</style>

