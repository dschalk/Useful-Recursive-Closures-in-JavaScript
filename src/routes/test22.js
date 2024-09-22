
var log = console.log;
var dF3x = () => {};
var dF3ar = () => {};

function M(x, ar = [0]) {
    return function go(func) {
        if (func === dF3ar) return ar
        else x = func(x);
        ar.push(x[1]);
        return go;
    };
}

var m = M([0,1])

function fib (f,n) {
  for (let k = 1; k <= (n-1); k+=1) {
    f(([a, b]) => [b, a + b]);
  }
  return f(dF3ar);
}
  
log(fib(m,9)); 
log("***********************************8")
log(fib(m,2)); 