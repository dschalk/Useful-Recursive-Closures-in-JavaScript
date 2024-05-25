var log = console.log;
var dF3x = () => {};
var dF3ar = () => {};

function M(x, ar = [0]) {
    return function go(func) {
        if (func === dF3ar) return ar
        else x = func(x);
        ar.push(x[0]);
        return go;
    };
}

function fib (n) {
  var m = M([0,1])
  for (let k = 1; k < n; k+=1) {
    m(([a, b]) => [b, a + b]);
  }
  return m(dF3ar);
}
  
log(fib(9))


