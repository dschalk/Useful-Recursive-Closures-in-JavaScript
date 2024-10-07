
  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var m = M([9**100, 0]);
function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      log ("d is", d);
      if (d[0] === 1) log("The number of steps is", d[1]);
      if (d[0] > 1) f(d);
      else return d  

}

m(f);
