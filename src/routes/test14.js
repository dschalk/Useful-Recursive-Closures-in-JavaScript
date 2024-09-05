
    import { leftShift } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }

    let m = M([25,1,25,0]);

    function f1 (v) {
        log(m(dF3x));
        let result = Math.floor(Math.random()*2);
        if (result) {
          v[0] += v[1];
          v[1] = 1;
          v[3] += 1;
          if (v[0] < 50) {
            m(f1)
        }
          else {
              log("SUCCESS", m(dF3x) );
              return;
              ;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            v[1] = leftShift(v[1], 1);          
            if (v[1] > v[0]) {
                log("FAIL", m(dF3x));
                return; 
            }
            else m(f1);
        } 
        return;
      } 


    m(f1);