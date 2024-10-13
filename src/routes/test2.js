
  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };

  }

var n = 2**10 + 1
var m = M([n, 0]);
/*
function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      log ("d is", d);
      if (d[0] === 1) {
          log("The number of steps is", d[1])
          return;
      }
      f(d);
}

m(f);  */


var out = [];

function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      if (d[1] === 0) log(d);

      d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      log(d);
      if (d[0] === 1) {
          return;
      }
      f(d);
}
m(f);
