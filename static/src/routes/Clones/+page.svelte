<script>


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

var cloneCode = `function clone (v) {
   return M((v)(dF3x));
}`;

var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ["clown"], [v=>v**3] ] ], 888 ], ob: { z: "skyblue" } } );
log("var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ['clown'], [v=>v**3] ] ], 888 ], ob: { z: 'skyblue' } }" ) ;
log("mclone = clone(m)");
mclone = clone(m);
log("mclone is", mclone);
log("mclone === m", mclone === m);
log("mclone(dF3x) === m(dF3x)", mclone(dF3x) === m(dF3x));

log("mclone = ['Hello World')]'");
mclone = M(["Hello World"]);  
log("mclone(dF3x) === m(dF3x", mclone(dF3x) === m(dF3x));
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));
log("m(() => [8, {yes: 'You bet!')]")
m(() => [8, {yes: 'You bet!'}]);
log("m(dF3x) is", m(dF3x));
log("mclone(dF3x) is", mclone(dF3x));

var dumbCode = `var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ['clown'], [v=>v**3] ] ], 888 ], ob: { z: 'skyblue' } }
mclone = clone(m)
mclone is [Function: go]
mclone === m false
mclone(dF3x) === m(dF3x) true
mclone = ['Hello World')]'
mclone(dF3x) === m(dF3x false
m(dF3x) is {
  arr: [ [ [Array], [Array], [Array] ], [ [Array], [Array] ], 888 ],
  ob: { z: 'skyblue' }
}
mclone(dF3x) is [ 'Hello World' ]
m(() => [8, {yes: 'You bet!')]
m(dF3x) is [ 8, { yes: 'You bet!' } ]
mclone(dF3x) is [ 'Hello World' ] `;





</script> 

<h1 style = "text-align: center; font-size:28px"> Cloning Complex Data Structures Containing Functions</h1>

<p> Neither JSON.parse(JSON.stringify()), Object.assign(), spread operators, nor structuredClone can clone data structures containing functions or stand-alone functions. </p>  

<!-- <pre style="text-align: center; font-size: 28px>{cloneCode}></pre> -->

<br><br><br><br> 