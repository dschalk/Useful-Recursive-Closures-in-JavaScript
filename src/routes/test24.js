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

var d = [ [6], [7], [add] ];
const m = M(d);
const cl = M(M(m(dF3x))(dF3x));
function add (a,b) {return a+b};
function mult (a,b) {return a*b};
function div (a,b) {return a/b};
var arm = [m(dF3x)];
var arcl = [cl(dF3x)];

log("arm is", arm);
log("arcl is", arcl);
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(m(dF3x), cl(dF3x)));
m(v => [ [6], [7], [mult] ] );
arm.push(m(dF3x))
arcl.push(cl(dF3x))
log("arm is", arm);
log("arcl is", arcl);
cl(v => [ v[0], v[1], [div] ]);
arm.push(m(dF3x))
arcl.push(cl(dF3x))
log("arm is", arm);
log("arcl is", arcl);
