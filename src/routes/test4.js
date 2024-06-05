    var m, mclone;
    var dF3x = () => {};
    var log = console.log;

function M (x) {
    return function go (func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
 }

function clone (v) {
   return M((v)(dF3x));
}

// var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ["clown"], [v=>v**3] ] ], 888 ], ob: { z: "skyblue" } } );
var m = M({value: 10})
// log("var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ['clown'], [v=>v**3] ] ], 888 ], ob: { z: 'skyblue' } }" ) ;
log("mclone = clone(m)");
mclone = clone(m);
log("mclone(dF3x) is", mclone(dF3x));
log("mclone === m", mclone === m);
log("mclone(dF3x) === m(dF3x)", mclone(dF3x) === m(dF3x));

log("mclone = M(['Hello World')]");
mclone = M(["Hello World"]);  
log("mclone(dF3x) === m(dF3x", mclone(dF3x) === m(dF3x));
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));
log("m(() => [8, {yes: 'You bet!')]")
m(() => [8, {yes: 'You bet!'}]);
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));
