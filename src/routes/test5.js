/*
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
const m = M([ [6], [7], [add] ]);
const cl = m //M(m(dF3x));
const clone = M(m(dF3x));
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("clone(dF3x) is", clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // true

m(v => v.concat(888)); 
log("After m(v => v.concat(888))", m(dF3x));// [[ 6 ], [ 7 ], [ [Function: add] ], [ 888 ]]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // false 
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888 ]
log("clone(dF3x) is", clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // false

cl(v => v.concat(999)); 
log("After cl(v => v.concat(999))");
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // false
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("clone(dF3x) is", clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x)));
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x)));

clone(v => v.concat(777)); 
log("After m(concat)");
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), clone(dF3x))", Object.is(m(dF3x), clone(dF3x))); // false
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 888, 999 ]
log("clone(dF3x) is", clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 777 ]
*/


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
const m = M([ [6], [7], [add] ]);
const cl = m;
const m_clone = M(m(dF3x));
log("m(dF3x) is", m(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ] ]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // true

m(v => v.concat(888)); 
log("After m(v => v.concat(888))", m(dF3x));// [[ 6 ], [ 7 ], [ [Function: add] ], [ 888 ]]
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("1. Object.is(m(dF3x), m_clone(dF3x))", Object.is(m(dF3x), m_clone(dF3x))); // false
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
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [ 6 ], [ 7 ], [ [Function: add] ], 777 ]

log("m_clone(dF3x) is", m_clone(dF3x)); 
Here an explanation of cloning with recursive closures:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var log = console.log;  