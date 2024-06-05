
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
// This confirms the independence of m2`;


var c2 = `function add (a,b) {return a+b};
function mult (a,b) {return a*b};

var m = M([ [6], [7], [add] ]);
var clone = M(m(dF3x));

log("m === clone", m === clone); // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x)) // true`;

var c22 =`log("m(dF3x)", m(dF3x)[2][0]( m(dF3x)[0][0], m(dF3x)[1][0] )) // 13
log("clone(dF3x)",clone(dF3x)[2][0]( clone(dF3x)[0][0], clone(dF3x)[1][0] )) // 42

log("m === clone", m === clone);  // false
log("m(dF3x) === clone(dF3x)", m(dF3x) === clone(dF3x) ) // false`;

var c3 = `function add (a,b) {return a+b};
function mult (a,b) {return a*b};
var arr = [ [6], [7], [add] ];
var m = M(arr);
var arr2 = M(m(dF3x))(dF3x);`
		
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
</script>

<h1 style="text-align: center">Cloning m-M(x) Closures</h1>
<pre>{c0}</pre>
<p> 'b', in the code below, copies 'a' and is then modified. The modification of 'b' changes 'a', as expected. 'a' and 'b' both refer to the same object in memory.  </p>
<pre>{d0}</pre>
<p>Reassignment of a or b severs a from b. After reassignment, each refer to distinct, sepagate memory addresses. </p>
<pre>{d1}</pre> 
<p> Running m(func) for some function "func" doesn't immediately look like a reassignment of x in its m-M(x) closure, but m(func) causes x = func(x) inside of M. After that reassignment, clone(dF3x) is independent from m(dF3x).   </p>
<pre>{c2}</pre>

<span style="font-size:26px; font-weight: 'bold'; color: orange " >&nbsp;&nbsp; clone(v => [ v[0], v[1], [mult] ] )</span> <span>&nbsp; // Now a true clone, with its own memory address</span> 
<pre>{c22}</pre>

<p> If "clone" hadn't been called, it seems it wouldn't have been assigned its unique memory address. "m(dF3x) === clone(dF3x) would have remained true.  </p>



<br><br><br>



<br><br><br>
<br><br><br>
<style>


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

