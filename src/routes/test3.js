
  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var m = M([]);  
var n;
n = 5;
var m;

async function runCollatz (n) {
    m = M([BigInt(n), 0]);
    await m(f);
    log ("m{dF3x) is", m(dF3x));
}
var out = [];

function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      // out.push (d[0]);
      if (d[0] !== 1) {
          // log(d)
          f(d);
      }
      else {
        log(d);
        log("The number of steps is", d[1]);
        return;
      }
}

runCollatz(10**4);


