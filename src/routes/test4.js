  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var m = M([179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368,0]);
m(f);

function f(arr) {
    if (arr[0] > Number. MAX_VALUE) {
        log ("Forget about it");
        return arr[0].toString() + " is not an integer";
    }
    if (arr[1] === 0) log("Testing the number", arr[0].toString());
    if (arr[0] === 1) return arr;
    arr[1] += 1;
    if (arr[0] % 2 === 0) {
        arr[0] = arr[0] / 2;
    } else {
        arr[0] = 3 * arr[0] + 1;
    }
    // log(arr)
    m(f);    
    return "The number of steps is " + arr[1].toString();
}

log(m(dF3x));