var log = console.log;
var dF3x = () => {}; 
log("Hello");
function M (x) {
    return function go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
    }
  }

var ar1 = M([1]);
var ar2 = M([2]);
var ar3 = M([3]);
var ar4 = M([4]);

var ar = [ [ ar1, [ar2,  [ar3, [ [ar4] ] ] ] ] ];
log("Blow me", ar);

