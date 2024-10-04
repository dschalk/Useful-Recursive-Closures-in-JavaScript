<script>
var t0 = `var log = console.log;
var dF3x = () => { }

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}

function add (a,b) {return a+b};
const m = M([ [6], [7], [add] ]);
const cl = m;
const m_clone = M(m(dF3x));`;

var t1 = `log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // true

m(v => v.concat(888)); 
log("After m(v => v.concat(888))", m(dF3x));// [[ 6 ], [ 7 ], [ [Function: add] ], [ 888 ]]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // true
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // false

cl(v => v.concat(999)); 
log("After cl(v => v.concat(999))");
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // false
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x)));
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x)));

m_clone(v => v.concat(777)); 
log("After m(concat)");
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // false
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 777 ]`;

var output = `m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) true
After m(v => v.concat(888)) [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) false
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) false
After cl(v => v.concat(999))
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) false
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) false
After m(concat)
1. Object.is(m(dF3x), cl(dF3x)) true
1. Object.is(m(dF3x), m_clone(dF3x)) false
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 777 ]`

var gpt = `ChatGPT: The behavior you're describing, where m === clone is false but m(dF3x) === clone(dF3x) is true after running clone = M(m(dF3x)), is actually fully consistent with how closures, object references, and equality work in JavaScript according to the ECMAScript specification. This is not specific to Node.js or browser engines, but a general behavior of the language.

Let’s break this down step by step to clarify why this happens and how it is defined in the ECMAScript specification.
Key Concepts in JavaScript (from the ECMAScript specification)

    Closures and Function Creation:
        Every time a function is created (like M(x) returning go), a new function object is created in memory. This new function has its own scope and references to its captured variables (in this case, x).
        Even though two closures might start with the same values (like m and clone both starting with [ [6], [7], [add] ]), they are two different function objects. This is why m === clone is false: they are different instances of function objects, even though they capture the same initial data.

    Reference Equality (Object References):
        When you do m(dF3x) and clone(dF3x), both return the same array initially because they both reference the same memory location for x at the time clone was created.
        Object references in JavaScript work based on memory addresses, not the contents of the objects. So, as long as m(dF3x) and clone(dF3x) point to the same memory address, m(dF3x) === clone(dF3x) will return true, even if m and clone are different closures.

    Behavior in ECMAScript:
        The behavior of closures and references is well defined in the ECMAScript Language Specification, particularly in:
            Section 9.2.2: which describes how function objects are created.
            Section 13.3.3: which defines how closures capture variables.
            Section 6.1.7.4: which specifies that === (strict equality) between objects compares references, not the contents of the objects.

Explanation of the Behavior:

    m === clone is false:
        This is because M(m(dF3x)) creates a new closure (a new function object), and JavaScript compares closures (functions) by reference.
        When clone = M(m(dF3x)) is executed, m and clone are different function objects, and even though they share the same initial captured value (m(dF3x)), they are different instances in memory.
        According to the specification, function objects are never equal unless they are the same instance, so m !== clone.

    m(dF3x) === clone(dF3x) is true:
        When you execute m(dF3x) and clone(dF3x), they both return the same reference to the array [ [6], [7], [add] ], because at the moment clone is created, x in clone and m point to the same array.
        Since both closures hold references to the same object in memory, m(dF3x) === clone(dF3x) returns true—it’s checking reference equality, and the two closures return the same array object.

This behavior is consistent with how closures capture references, and how object references work in JavaScript according to the ECMAScript specification. The key part here is understanding that closures capture references to objects, and comparisons of those references (===) check whether they point to the same object in memory, not whether the functions themselves are the same.
Conclusion: Specification vs. Engine

    Is this behavior written into the ECMAScript specification? Yes, this behavior is consistent with the ECMAScript specification. The fact that m === clone is false and m(dF3x) === clone(dF3x) is true arises from how closures are created and how object references are handled. This is not a quirk of Node.js or browser engines but an expected behavior according to the JavaScript specification.

    Is this an artifact of Node.js or browser engines? No, this behavior is universal across all JavaScript environments that adhere to the ECMAScript standard, including Node.js and browser engines. It’s fundamental to how closures and references work in JavaScript.`;

    var compare = `        log(Object.is(NaN, NaN)); // true
        log(NaN === NaN);         // false
        log(Object.is(-0, 0));    // false
        log(-0 === 0)             // true `;
</script>

<h1>Simply Cloning Any Object </h1>   
<h2 style="font-style: italic">Deeply Nested With Functions, Self-References, etc  </h2>

<p>Another advantage of coding state transformations inside of m-M(x) closures (see examples at <a href="./">Home</a>) is the ease with which clones can be created. Let a be any JavaScript object, even a deeply nested object containing sets, functions, and any other valid JavaScript values. Let m = M(a) and m_clone = M(m(dF3x)). Even though m_clone(dF3x) initially refers to m(dF3x), m_clone is a clone of m. Let func be any function. If m(func) mutates x in the m-M(x) closure, m_clone remains unchanged. Likewise, if m_clone(func) mutates x in the m_clone-M(x) closure, x in the m-M(x) closure remains unchanged. This is domonstrated in the example below.  </p>

<p> Object.is() and === (strict equality) are both used to compare values, but they work differently in two ways: Object.is(NaN, NaN) returns true, whereas NaN === NaN returns false. Object.is(-0, +0) returns true, but -0 === +0 returns false. </p>
<pre>{compare}</pre>
<p> In the example below, m is defined as an array containing three arrays, one of which contains a function. cl is copy of m. m_clone is a clone of m, m_clone = M(m(dF3x)). The value returned by m_clone(dF3x) is, at first, a reference to the array held in the m-M(x) closure. When m(func) reassigns x in the m-M(x) closure, or m_clone(func) reassigns x in its closure for some function "func", the value of x in the m-M(x) closure and the value of x in the m_clone-M(x) become independent of one another. These reassignment happen on the 4th line of M.  </p>

<p> As shown in the following examples, changes in m(dF3x) caused by m(v => v.concat(888)) don't change m_clone(dF3x), and changing m_clone(dF3x) by running m_clone(v => v.concat(777)) has no effect on m or cl. Unlike m and m_clone, m and cl point to the same place in memory, as do the values held in the m-M(x) and cl-M(x) closures; i.e., m(dF3x) and cl(dF3x). Therefore, changing x in either closure changes x in the other.  </p>
<div class = "chat">
<pre>{t0}</pre>
<br><br>
<pre>{t1}</pre>

<pre>{output}</pre>
<br><br>

<p style="color:aqua">
ChatGPT: The behavior you're describing, where m === clone is false but m(dF3x) === clone(dF3x) is true after running clone = M(m(dF3x)), is actually fully consistent with how closures, object references, and equality work in JavaScript according to the ECMAScript specification. This is not specific to Node.js or browser engines, but a general behavior of the language.
<br><br>
         Let’s break this down step by step to clarify why this happens and how it is defined in the ECMAScript specification.
Key Concepts in JavaScript (from the ECMAScript specification)

<br><br>
         Closures and Function Creation:

<br><br>
        Every time a function is created (like M(x) returning go), a new function object is created in memory. This new function has its own scope and references to its captured variables (in this case, x).

<br><br>
        Even though two closures might start with the same values (like m and clone both starting with [ [6], [7], [add] ]), they are two different function objects. This is why m === clone is false: they are different instances of function objects, even though they capture the same initial data.

<br><br>
 Reference Equality (Object References):
<br><br>
        When you do m(dF3x) and clone(dF3x), both return the same array initially because they both reference the same memory location for x at the time clone was created.
        Object references in JavaScript work based on memory addresses, not the contents of the objects. So, as long as m(dF3x) and clone(dF3x) point to the same memory address, m(dF3x) === clone(dF3x) will return true, even if m and clone are different closures.

<br><br>
         Behavior in ECMAScript:<br><br>
        The behavior of closures and references is well defined in the ECMAScript Language Specification, particularly in:
<br><br>
            Section 9.2.2: which describes how function objects are created.
            Section 13.3.3: which defines how closures capture variables.
            Section 6.1.7.4: which specifies that === (strict equality) between objects compares references, not the contents of the objects.

<br><br>
        Explanation of the Behavior:

<br><br>
         m === clone is false:<br><br>
        This is because M(m(dF3x)) creates a new closure (a new function object), and JavaScript compares closures (functions) by reference.<br><br>
        When clone = M(m(dF3x)) is executed, m and clone are different function objects, and even though they share the same initial captured value (m(dF3x)), they are different instances in memory.<br><br>
        According to the specification, function objects are never equal unless they are the same instance, so m !== clone.
<br><br>
        m(dF3x) === clone(dF3x) is true:<br><br>
        When you execute m(dF3x) and clone(dF3x), they both return the same reference to the array [ [6], [7], [add] ], because at the moment clone is created, x in clone and m point to the same array.

<br><br>
        Since both closures hold references to the same object in memory, m(dF3x) === clone(dF3x) returns true—it’s checking reference equality, and the two closures return the same array object.

<br><br>
        This behavior is consistent with how closures capture references, and how object references work in JavaScript according to the ECMAScript specification. The key part here is understanding that closures capture references to objects, and comparisons of those references (===) check whether they point to the same object in memory, not whether the functions themselves are the same.

<br><br>
Conclusion: Specification vs. Engine

<br><br>
        Is this behavior written into the ECMAScript specification? Yes, this behavior is consistent with the ECMAScript specification. The fact that m === clone is false and m(dF3x) === clone(dF3x) is true arises from how closures are created and how object references are handled. This is not a quirk of Node.js or browser engines but an expected behavior according to the JavaScript specification.

<br><br>
        Is this an artifact of Node.js or browser engines? No, this behavior is universal across all JavaScript environments that adhere to the ECMAScript standard, including Node.js and browser engines. It’s fundamental to how closures and references work in JavaScript.

</p>


</div>

<!-- 
<h2>Lazy Evaluation</h2>

<p> When Object.is applied to any two objects ob1 and ob2, it returns true if and only if they point to the same address in memory. It follows that both objects have the same value whenever "Object.js(ob1, ob2) === true."Sharing the reference to [ [6], [7], [add] ] at the same memory address doesn't change the fact that cl is a clone of m.  Using m(func1) or cl(func2), where func1 and func2 operate on 'x' in the m-M(x) and cl-M(x) closures, affects only cl or m, depending on which made the function call. </p> 
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

-->

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

