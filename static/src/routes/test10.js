
var mult, add, hyp;
var log = console.log;
var dF3x = () => {};
function M (x) {
    return function go (func)
    {
        if (func == dF3x) return x;
        else x = func(x);
        return go;
    }
}

function clone (v) {
   return M(7)(()=>v)(dF3x)  ;
}

var aa = [ [], [[6,7], [mult = a => b => a * b]], [888]];
//var aaClone = aa;
var aaClone = clone(aa);
log(aa == aaClone)
var aa = [ [], [[10,10], [mult = a => b => a * b]], [888]];
log(aa == aaClone)
log("aaClone is", aaClone);
log("aa is", aa);



