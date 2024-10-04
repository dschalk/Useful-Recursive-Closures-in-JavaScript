
var log = console.log;
var dF3x = () => { }

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}

function add (a,b) {return a+b};
function mult (a,b) {return a*b};
function div (a,b) {return a/b};
var pusch = function pusch (ar) {ar.push([888]); return ar};
const m = M([ [6], [7], [add] ]);
const cl = m //M(m(dF3x));
const clone = M(m(dF3x));
cl(v => v.concat(999)); 
log("After m(concat)", m(dF3x));// [[ 6 ], [ 7 ], [ [Function: add] ], [ 888 ]]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // true
log("m(dF3x) is", m(dF3x));
log("cl(dF3x) is", cl(dF3x));
log("clone(dF3x) is", clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x)));
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x)));
