
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


function add (a,b) {return a+b};
function mult (a,b) {return a*b};
function clone (DS) {
    DS = [DS]; 
    return DS[0]
}
var ar = [ [6], [7], [add] ];
var ar2 = ar;
log("ar is", ar)
log("ar2 is",ar2);
ar.pop();
ar.push([mult]);

log("ar is", ar)
log("ar2 is",ar2);
log(" -A- ar === ar2", ar === ar2) // false
log("ar is", ar)
log("ar2 is",ar2);
ar2.pop();
ar2.push([add]);
log("ar is",ar)
log("ar2 is", ar2);

