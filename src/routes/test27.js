

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

var A = "A";
var B = "B";
var C = "C";
function car () {
    var X;
    let a = Math.random();
    if (a < 1/3) X = A;
    else if (a < 2/3) X = B;
    else X = C;
    return X;
}

function choose () {
    var H = car();
    var result;
    if (H === A) result = 0;
    if (H === C) result = 1;
    if (H === B) result = 1;
    return result;
}

    var sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum += choose();
    }
    log("sum/1000000 is", sum/10000000);



