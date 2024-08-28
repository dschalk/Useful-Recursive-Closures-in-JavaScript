
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
    let gain = 0;
    let loss = 0;
    let aa = 25;
    let bb = 1;
    let dd = 0
    let arr = [aa, bb, aa, dd];
// [stake, bet, goal, winnings]
    var m = M([aa, 1, aa, 0]);

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {
          gain += v[1]  
          v[0] += v[1];
          v[1] = 1;
          v[3] += 1;
          log("<><><><><><><>, m(dF3x) is", m(dF3x));
          if (v[3] < aa) m(f1)
          else {
            log("Double", m(dF3x))
            return v;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            loss += v[1];
            v[1] = leftShift(v[1], 1);          
            log("******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Fail", m(dF3x));
              return
            }
            else m(f1);
        } 
        // return v;
        return v;
      } 

async function gamble () {   
    for (var k = 0; k < 10000; k += 1) {
       await m(f1)
        m(() => [25, 1, aa, 25]);
    log("gain is", gain);
    log("loss is", loss);
    log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
    };
};

gamble();

// m(f1);
// log("~~~~~~~ m(dF3x) is", m(dF3x));