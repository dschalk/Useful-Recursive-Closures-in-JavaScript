


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
function div (a,b) {return a/b};
var arm = [];
var arcl = [];


log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // true
log("m(dF3x) is", m(dF3x), "cl(dF3x) is", cl(dF3x))
arm.push(m(dF3x))
arcl.push(cl(dF3x))
m(v => [ [6], [7], [mult] ] );
arm.push(m(dF3x))
arcl.push(cl(dF3x))
log("m(dF3x) is", m(dF3x), "cl(dF3x) is", cl(dF3x))
log("2. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x))); // false
cl(v => [ v[0], v[1], [div] ]);
arm.push(m(dF3x))
arcl.push(cl(dF3x))
log("m(dF3x) is", m(dF3x), "cl(dF3x) is", cl(dF3x))
log("arm is", arm);
log("arcl is", arcl);
arm = [[1],[2],[3]];
arcl = [[7],[8], [9]]
log("arm is", arm);
log("arcl is", arcl);



