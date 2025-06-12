var mult, add, hyp;
var log = console.log;
var dF3x = () => {};

function M (x) {
    return function go (func)
    {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}

function clone (v) {
   return M((v)(dF3x));
}

var aa = [ [], [[6,7], [mult = a => b => a * b]], [888]];
var m = M(aa);
log("m(dF3x) is", m(dF3x));

var mclone = clone(m);
log("mclone === m)",mclone === m);  
log("mclone(dF3x) === m(dF3x))",mclone(dF3x) === m(dF3x));  

log("m(() => [ [], [[6,7], [add = a => b => a + b], ['You bet!'] ] ]" ); 
m(() => [ [], [[6,7], [add = a => b => a + b], ["You bet!"] ] ] );
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));

mclone(() => [ [], [ [3,4], [hyp = a => b => Math.sqrt(a*a + b*b) ] ] ] );
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )"); 
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ));
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )"); 
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )); 
