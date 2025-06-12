
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
log("var m = M([ [], [[6,7], [a => b => a * b]], [888]] ") ;
log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");
log("The above code reduces to (a=>b=>a*b)(6)(7) =",m(dF3x)[1][1][0]( m(dF3x)[1][0][0])( m(dF3x)[1][0][1])) ;
var mclone = m;
log("mclone === m", mclone === m);
mclone = M(mclone(dF3x));
log("mclone = M(mclone(dF3x))");
log("mclone === m", mclone === m);
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )");
log("Also reduces to (a=>b=>a*b)(6)(7) =",mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;
log("\nmclone and m are identical, and 'mclone === m' returns false."); 
log("Therefore mclone's address in memory is no longer the same as m's.");
log("mclone and m being identical and independent establishes that the object named mclone is a deep clone of m. Q.E.D.\n");
log("Changes to'mclone' won't affect 'm', as shown below.")

mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] ); // New definition

log("mclone(() => [ [], [[3,4], [a => b => Math.sqrt(a*a + b*b)], [888] ] ] )");
log("m(dF3x}", m(dF3x)) 
log("mclone === m", mclone === m);
log("mclone(dF3x)", mclone(dF3x))  
log("m(dF3x)", m(dF3x))  

log("\nWe now repeat previously executed code; but this time, m and mclone return different numbers");
log("mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0] )( mclone(dF3x)[1][0][1] )");
log(mclone(dF3x)[1][1][0]( mclone(dF3x)[1][0][0])( mclone(dF3x)[1][0][1])) ;

log("m(dF3x)[1][1][0]( m(dF3x)[1][0][0] )( m(dF3x)[1][0][1] )");

log(m(dF3x)[1][1][0]( m(dF3x)[1][0][0])( m(dF3x)[1][0][1])) ;

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

/*
log("******************************* Change m") 
m(v => [ v[0], v[1], [v[1][0](v[0][0])]]);
log("m(v => [ v[0], v[1], [v[1][0](v[0][0])]])");
log("m(dF3x)", m(dF3x)) //  [ [ 3 ], [ [Function (anonymous)] ], [ 27 ] ] 
log("clone(dF3x)", clone(dF3x)) // [  [ 3 ], [Function (anonymous)] ], [ 888 ] ]
log("***************** Change x[0][0] to 4 in the clone-M(x) closure")
clone( v => [ [4], v[1], v[2] ] );
log("clone( v => [ [4], v[1], v[2] ] )");
log("***************** Run x[1][0](x[0][0]) in x[2] in the clone-M(x) closure.")
clone(v => [ v[0], v[1],  [v[1][0](v[0][0])] ] );
log("clone(v => [ v[0], v[1],  [v[1][0](v[0][0])] ] )" );
log('clone(dF3x)', clone(dF3x))
log('m(dF3x}', m(dF3x)); 
*/

