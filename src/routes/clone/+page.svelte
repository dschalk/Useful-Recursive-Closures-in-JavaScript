
<script>
var d0 = `var a = [6];
var b = a;
b.pop();
b.push(122);
console.log(a)  // [ 122 ]
console.log("a[0] - b[0] is", a[0] - b[0])  // 0`;

var d1 = `var a = [6];
var b = a;
b = [ 122 ];
console.log(a)  // [ 6 ]
console.log("a[0] - b[0] is", a[0] - b[0])  // 116`;

var c0 = `var dF3x = () => {};
var log = console.log;

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`

var c1 = `var m1 = M(3);
var m2 = M(m1(dF3x));

log("m1(dF3x)", m1(dF3x))  // 3
log("m2(dF3x)", m2(dF3x));  // 3 

log("m1 === m2", m1 === m2)  // false
log("m1(dF3x) === m2(dF3x)", m1(dF3x) === m2(dF3x)); // true

log("m1(v => v**3)(v=>v*3)(v=>v-39)")
m1(v => v**3)(v=>v*3)(v=>v-39);  // ((3**3)*3)-39 = 42

log("m1 === m2", m1 === m2)  // false
log("m1(dF3x) === m2(dF3x)", m1(dF3x) === m2(dF3x));  // false
// m1(dF3x) and m2(dF3x) are now independant from one another.

log("m1(dF3x)", m1(dF3x))  // 42
log("m2(dF3x)", m2(dF3x));  // 3 
// This confirms the independence of m2
`;

var c2 = `const m = M([ [6], [7], [add] ]);
const clone = m;

function add (a,b) {return a+b};
function mult (a,b) {return a*b};

clone(v => [ v[0], v[1], [mult] ] )   // Now a true clone, with its own memory address

log("m === clone", m === clone);  // true
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // true

log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 42
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42`;

var c3 = `const m = M([ [6], [7], [add] ]);
const clone = M(m(dF3x))

function add (a,b) {return a+b};
function mult (a,b) {return a*b};

clone(v => [ v[0], v[1], [mult] ] )  // clone's memory address is no longer different from m's.

log("m === clone", m === clone);  // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // false

log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 13
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42`;

var c3 = `const m = M([ [6], [7], [add] ]);
const clone = M(m(dF3x))

function add (a,b) {return a+b};
function mult (a,b) {return a*b};

clone(v => [ v[0], v[1], [mult] ] )   // Now a true clone, with its own memory address

log("m === clone", m === clone);  // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // false

log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 13
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42`
		
var c4b =  `const m = M([ [6], [7], [add] ]);
const clone = M(m(dF3x))

function add (a,b) {return a+b};
function mult (a,b) {return a*b};

m(v => [ v[0], v[1], [mult] ] )   // Now a true clone, with its own memory address

log("m === clone", m === clone);  // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // false

log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 42
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 13`;


var c4 = `var x = {a: 6};
var y = x;
x = {a: 7}; // Re-declaring x makes it independent from y.
log("x is", x) // {b: 7}
log("y is still", y) // {a: 6}
x.a * y.a  // 42`;
/*
log("arr2 === arr", arr2 === arr ); // true

arr = [ [6], [7], [mult] ];

log("arr2 === arr", arr2 === arr);  // false

log("A", arr[2][0]( arr[0][0], arr[1][0] )) // 42  
log("B", arr2[2][0]( arr2[0][0], arr2[1][0] )) // 13 `;
*/

var botChat =  `Your explanation does make sense. The concept of using a closure with a function to clone an object leverages the power of closures to encapsulate and manage state. In this case, the function m takes a function that returns the object to be cloned, and inside the closure, the object is reassigned implicitly. This reassignment ensures that modifications within the closure do not affect the original object, effectively creating a new, independent instance.

Here's a brief outline of why it works:

    Encapsulation: The closure encapsulates the object, preventing external modifications from affecting the original.
    Reassignment: Within the closure, x = func(x) reassigns the object, creating a new instance.
    Function Argument: Passing a function that returns the object allows for dynamic reassignment and cloning.

This approach showcases the advantages of working within recursive closures for managing object states and cloning.

For more detailed examples and explanations, visit your webpage.

Thank you for sharing your work on recursive closures and JavaScript cloning. The page at schalk2.com demonstrates the concept effectively, especially with the interactive Rubik's Cube example.

The logic of your approach makes sense: by using closures, the internal state (like the m(dF3x) object) is preserved and can be manipulated in a controlled manner. This allows for complex state transformations, which is particularly useful in applications requiring synchronization of state and actions, such as in your Rubik's Cube simulation.

Here are some key points from your implementation:

    State Preservation with Closures: By encapsulating state within the closure M(x), you can manage changes to x through a sequence of function applications without directly exposing x to the external environment.

    Cloning and Independence: Cloning the closure using clone = M(m(dF3x)) creates a new closure with the same initial state. This ensures that changes to clone do not affect m and vice versa once the clone is modified, achieving true independence.

    Illusion of Movement: The Rubik's Cube example shows how rearranging strings within the closure can create the illusion of movement without actually moving any HTML elements. By changing the background colors based on the cube's state, you simulate the cube's rotations.

    Handling Asynchronous Operations: By modifying M to handle asynchronous functions, you ensure that m can manage both synchronous and asynchronous transformations of its state, enhancing its flexibility.

Your explanation about reassignment within the closure is clear. The key point is that while x = func(x) inside M looks like a simple function application, it effectively reassigns x in the closure's scope, thus updating the state managed by the closure. This mechanism allows the state to be cloned and manipulated independently.

If you want to dive deeper into any specific aspect or discuss more examples, feel free to ask. Your work showcases an advanced and creative use of JavaScript closures and state management!
*******************************************************************************************
This is the code that was discussed:

var obj = {
  name: "Alice",
  getName: function() {
    return this.name;
  }
};

var obj2 = {
  name: "Fred", 
  getName: function() {
      return this.name; 
  }
};

obj.self = obj;

var m = M(obj)
mClone = M(m(dF3x)) 
console.log("m(dF3x) is", m(dF3x))

console.log("mClone(dF3x) is", mClone(dF3x)); 

mClone(() => obj2);

console.log("mClone(dF3x) is", mClone(dF3x)); 
console.log("m(dF3x) is", m(dF3x))`

var turn = "function func (v) { return [ v[0], v[1], [mult] ] })"
</script>

<h1 style="text-align: center">Cloning m-M(x) Closures</h1>
<pre>{c0}</pre>
<p> 'b', in the code below, copies 'a' and is then modified. The modification of 'b' changes 'a', as expected. 'a' and 'b' both refer to the same object in memory.  </p>
<pre>{d0}</pre>
<p>Reassignment of a or b severs a from b. After reassignment, each refers to its own unique memory address. </p>
<pre>{d1}</pre> 
<p>Below is some similar code, only this time involving an m-M(x) closure. Changing clone changes m, as expected.  </p>
<pre>{c2}</pre>
<p>There's a simple way to make "clone" a true clone of m, but this time it doesn't involve reassigning m or clone. They're constants; they can't be reassigned. Merely substituting "clone = M(m(dF3x))" for "m = clone" is all it takes to make m and clone independent. They're still identical, but when clone changes, its modified value gets a unique address in memory, and 'm' is not affected. </p>
<pre>{c3}</pre>
<p> Changing 'm' after "clone = M(m(dF3x))" is another way to give "clone" its own, separate address in memory, only this time, 'm' gets the new address.    </p>
<pre>{c4b}</pre>
<h2>Discussion</h2>
<p> When "clone(v => [ v[0], v[1], [mult] ] )" is called, "x = func(x)" in the definition of "go" (returned by "M") is called. "func" can be stated more precisely as <span>"func = v => [ v[0], v[1], [mult] ]"</span> or <span>{turn}</span>. The statement "clone = M(m(dF3x))" (above) created a clone-M(x) closure, but its "x" and the "x" in the m-M(x) closure referred to the same value. This can be deduced from the code above, where m(dF3x) === clone(dF3x) returned true and m === clone returned false. </p>
  
<p> When "x" gets reassigned to the value func(x) in the clone-M(x) closure, m continues to point to its original value, which is the previous value of x in the clone-M(x) closure. At that point, the function "clone" is a true clone of m. But for all practical purposes, the statement "clone = M(m(dF3x))" made the function "clone" a clone of "m" because, from then on, it was destined to become independent of m the first time clone(func) or m(func) ran. "x" in all closures of the form f-M(x) gets reassigned to f(func) (unless func is dF3x) each time f(func) is called. </p>



<!-- <p style = "white-space: pre-line">{botChat}</p> -->

<br><br><br>



<br><br><br>
<br><br><br>
<style>


span {
  color:rgb(252, 173, 75);
}

h2 {
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
    

</style>

