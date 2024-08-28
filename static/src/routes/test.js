var log = console.log;
var dF3x = () => { }

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}


var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
log('1 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))
var m = M(ar);
log(m(dF3x) === ar)
ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
log(m(dF3x) === ar)
log('2 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))
// var arzi = [ [ ], [ [ ], [ [ ], [ function (a) {return a(dF3x)} ]]]]
// ar2 = arzi[1][1][1][0](m);
var ar2 = m(dF3x);


ar[1][1][1].splice(-1)
ar[1][1][1].push(function concat(a, b) { return "" + a + b });
log('3 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))
log('ar2[1][1][1][9](6,7) is', ar2[1][1][1][0](6, 7))
ar[1][1][1].splice(-1)
ar[1][1][1].push(function add(a, b) { return a + b });
log('4 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6, 7))
ar2[1][1][1].splice(-1)
ar2[1][1][1].push(function concat(a, b) { return "" + a + b });
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6, 7))
log('5 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))
ar2 = [{ x: 'yz' }]
log('ar2 is', ar2)
log('6 ar[1][1][1][0](6,7)', ar[1][1][1][0](6, 7))

var cloning = `var ar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]]
log('1 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) // 42
var m = M(ar);
log (m(dF3x) === ar)  // true
ar = [ [ ], [ [ ], [ [ ], [ function mult (a, b) {return a * b} ]]]]
log (m(dF3x) === ar)  // false

log('2 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7))  // 42
var ar2 = m(dF3x);

ar[1][1][1].splice(-1)
ar[1][1][1].push(function concat (a,b) {return "" + a + b});
log('3 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7))  // 67
log('ar2[1][1][1][9](6,7) is', ar2[1][1][1][0](6,7))  // 42
ar[1][1][1].splice(-1)
ar[1][1][1].push(function add (a,b) {return a + b});
log('4 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7))  // 13
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7)) // 42
ar2[1][1][1].splice(-1)
ar2[1][1][1].push(function concat (a,b) {return "" + a + b});
log('ar2[1][1][1][0](6,7)', ar2[1][1][1][0](6,7))  // 67
    log("Fuck")
log('5 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7))  // 13
ar2 = [{x:'yz'}]
log('ar2[0] is', ar2[0])  // [{x: 'yz'}]
log('6 ar[1][1][1][0](6,7)', ar[1][1][1][0](6,7)) // 13`
log("// ******************************************************")
log(cloning);

