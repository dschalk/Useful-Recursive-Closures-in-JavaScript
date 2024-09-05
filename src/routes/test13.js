
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


async function gamble () {   
  let m = M([50, 1, 50, 0]);  // [stake, bet, goal, number successes] 
  let gain = 0;
  let loss = 0;
  let k = 0;
  while (k < 1000000000) {
      k += 1; 
      await m(f1)
      m(() => [50, 1, 50, 0]); // Re-sets x in the m-M(x) closure to [50,1,50,0].
  } 
  if (k > 999999998) {
      log("k is", k);
      log("gain is", gain);
      log("loss is", loss);
      log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
  }
    function f1 (v) {
        // log(m(dF3x));
        let result = Math.floor(Math.random()*2);
        if (result) {
          gain += v[1]  
          v[0] += v[1];
          v[1] = 1;
          v[3] += 1;
          if (v[0] < 100) {
            m(f1)
        }
          else {
              return
              ;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            loss += v[1];
            v[1] = leftShift(v[1], 1);          
            if (v[1] > v[0]) {
                return
            }
            else m(f1);
        } 
        return;
      } 
};

gamble();


