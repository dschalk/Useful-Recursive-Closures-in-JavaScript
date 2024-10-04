
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
const m = d;
const cl = m;
function add (a,b) {return a+b};
function mult (a,b) {return a*b};
function div (a,b) {return a/b};
var arm = [m];
var arcl = [cl];

log("arm is", arm);
log("arcl is", arcl);
log("1. Object.is(m(dF3x), cl(dF3x))", Object.is(arm, arcl));

var f1 = v => [ [6], [7], [mult] ];
var f2 = v => [ [6], [7], [div] ];

arm.push(f1(m));
arcl.push(cl)
log("arm is", arm);
log("arcl is", arcl);
f2(cl);
arm.push(m)
arcl.push(f2(cl));
log("arm is", arm);
log("arcl is", arcl);
