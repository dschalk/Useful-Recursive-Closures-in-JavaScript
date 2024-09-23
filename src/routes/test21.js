


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

log("m(dF3x)", m(dF3x)); //  [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true 
//m(dF3x).push(42);
m(v => v.concat(42));
log("m(dF3x)", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 42 ]
log("cl(dF3x)",cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("Object.is(m, cl)", Object.is(m, cl)); // false 
log("Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // false
