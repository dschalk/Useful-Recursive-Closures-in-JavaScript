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
log("var aa = [ [], [[6,7], [mult = a => b => a * b]], [888]];");
var m = M(aa);
log("var m = M(aa);");
log("m(dF3x) is", m(dF3x));

var mclone = clone(m);
log("var mclone = clone(m);")

log("mclone === m)",mclone === m); // false 
log("mclone(dF3x) === m(dF3x))",mclone(dF3x) === m(dF3x)); // true  
log("  As shown below, m and mclone are independent of one anlother. ");
log("  It looks like lazy evaluation. ");
log("m(() => [ [], [[6,7], [add = a => b => a + b], ['You bet!'] ] ]" ); 
m(() => [ [], [[6,7], [add = a => b => a + b], ["You bet!"] ] ] );
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));

mclone(() => [ [], [ [3,4], [hyp = a => b => Math.sqrt(a*a + b*b) ] ] ] );
log("mclone(() => [ [], [ [3,4], [hyp = a => b => Math.sqrt(a*a + b*b) ] ] ] )" );
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )"); 
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ));
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )"); 
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )); 



/*
    var log = console.log;
    var dF3x = () => {}

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }
    
    var m1
    var ar = [ [ ], [ [ ], [ [ ], [ M(3) ]]]]
    m1 = M(ar);
    var clone = M(m1(dF3x));
    log(clone)
    log("clone(dF3x) is ", clone(dF3x));
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 3
    log('clone(dF3x))', clone(dF3x));  // 3
    m1(v=>v**3); 
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 27
    log('clone(dF3x))', clone(dF3x));  // 3
    m1(v => v + 22)(Math.sqrt) 
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x));  // 7
    log('clone(dF3x))', clone(dF3x));  // 3
    clone(v => v+v)(v => v * m1(dF3x));
    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x)); // 7
    log('clone(dF3x))', clone(dF3x));  // 42

    log("ar[1][1][1][0](dF3x)", ar[1][1][1][0](dF3x))
    log('m1(dF3x))', m1(dF3x)); // 7
    log('m3(dF3x))', clone(dF3x));  // 42
*/





