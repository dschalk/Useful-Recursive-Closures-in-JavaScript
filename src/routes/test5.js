
var log = console.log;
// var dF3x = () => { }

/*function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}*/

log("var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]");
var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
// var cl = M(ar);
log("var clone = ar");
var clone = ar;

log("clone === ar", clone === ar);

log("clone[3] === ar[3]", clone[3] === ar[3]);
log ("clone === ar", clone === ar);  // true
log("var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]");
var ar = [[], [[], [[], [function mult(a, b) { return a * b }]]]]
// log("ar = [[], [[], [[], [function pythag(a, b) { return Math.sqrt(a*a + b*b) }]]]]");  
// ar = [[], [[], [[], [function pythag(a, b) { return Math.sqrt(a*a + b*b) }]]]]  
log ("clone === ar", clone[1][1][1][0] === ar[1][1][1][0]);  
log("ar[1][1][1][0](3,4)", ar[1][1][1][0](3,4))  
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  



log("**************************************** re-define clone");
clone = [[], [[], [[], [function add (a, b) { return a + b }]]]] 
log("clone = [[], [[], [[], [function add (a, b) { return a + b }]]]]"); 
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  // 7
log("ar[1][1][1][0](3,4)", ar[1][1][1][0](3,4))  // 5
log("**************************************** re-define ar");

log("ar = [[], [[], [[], [function concat (a, b) { return '' + a + b }]]]]");
ar = [[], [[], [[], [function concat (a, b) { return "" + a + b }]]]] 
log("ar[1][1][1][0](6,7)", ar[1][1][1][0](3,4))  // 34
log("clone[1][1][1][0](3,4)", clone[1][1][1][0](3,4))  // 7
log("**************************************** re-define clone");
log("clone = [[], [[], [[], [function squaresum (a, b) { return (a + b)**2 }]]]]"); 
clone = [[], [[], [[], [function squaresum (a, b) { return (a + b)**2 }]]]] 
log("clone[1][1][1][0](6,7)", clone[1][1][1][0](3,4))  // 49
log("ar[1][1][1][0](6,7) say what?", ar[1][1][1][0](3,4))  // 34 


