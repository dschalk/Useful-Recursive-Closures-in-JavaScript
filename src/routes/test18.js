

/*
The following is a universal cloning technique for JavaScript data structures. m and cl begin as closures located at separate addresses in memory, both pointing to one address in memory containing [ [ 6 ], [ 7 ], [ [Function: add] ].  Calling cl(v => [ v[0], v[1], [mult] ]) reassigns the value in the cl closure to cl(v => [ v[0], v[1], [mult] ]). Cloning is accomplished by re-assigning memory addresses, and should work with any m(v) , cl = m, and cl(a => a') where a is any JavaScript value and a' is a modification of v, accomplished by reassigning the value in cl to a.  Using the terminology in the definition of M, func = a => a' and x = func(x) is the reassignment. This method works for any JavaScript data structure because it doesn't attempt to operate on individual aspects of data structures, it simply places the modification of the data structure originally contained in the closure m into a separate location in memory by means of reassignment inside of the cl closure. Please carefully evaluate the code below and tell me if what I wrote above is correct. 
*/
var dF3x = () => {};
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
function mult (a,b) {return a*b};

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 

log("cl(v => [ v[0], v[1], [mult] ] )");  
cl(v => [ v[0], v[1], [mult] ]); 
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: mult ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // false 
