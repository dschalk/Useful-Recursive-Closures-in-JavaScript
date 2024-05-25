
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






