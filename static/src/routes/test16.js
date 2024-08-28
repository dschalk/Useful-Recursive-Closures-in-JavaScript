

    import { leftShift } from "mathjs";
    import { std } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
     
            return go;
        };
    }
    let aa = 100;
    let bb = 1;
    let dd = 0
    let arr = [aa, bb, aa, dd];
// [stake, bet, goal, winnings]
    var m = M([aa, 1, aa, 0]);

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {
          v[0] += v[1];
          v[1] = 1;
          v[3] += 1;
          log("2<><><><><><><>, m(dF3x) is", m(dF3x));
          if (v[3] < aa) m(f1)
          else {
            log("Double", m(dF3x))
            return v;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            v[1] = leftShift(v[1], 1);          
            log("2******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Wipeout", m(dF3x));
              return
            }
            else m(f1);
        } 
        // return v;
        return v;
      } 
      
m(f1);
