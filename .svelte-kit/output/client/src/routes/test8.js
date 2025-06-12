

var log = console.log;81
var dF3x = () => {}

function M (x) {
    return function go (func)
    {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
    }
}
var m = M([ [], [[6,7], [a => b => a * b]], [888]] );
log("var m = M([ [], [[6,7], [a => b => a * b]], [888]] ) ");
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) ")  // 42 
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) )  // 42 

var mclone = m;
log("var mclone = m ");

log("mclone === m", mclone === m);
mclone = M(mclone(dF3x));
log("mclone = M(mclone(dF3x))");
log("mclone === m", mclone === m);

mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] ); // New definition
log("mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] );"); // New definition

log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])") ;
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;

log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ));

m(() => [ [], [[6,7], [a => b => a + b], [888] ] ] ); // New definition
log("m(() => [ [], [[6,7], [a => b => a + b], [888] ] ] );" ); // New definition
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0])( m(dF3x)[1][0][1])) ;
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");

log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )");
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;
log("<>><><><><><><><><><><><><><><><><><><><><><><>")
log("m(() => [ [], [[3,4], [a => b => a + b], [888] ] ] )" )
m(() => [ [], [[3,4], [a => b => a + b], [888] ] ] )
log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] ) );  
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] ) );
