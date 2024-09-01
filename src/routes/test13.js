
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
    let dbl = 0;
    let gain = 0;
    let loss = 0;
    let aa = 50;
// [stake, bet, goal, winnings]
    var m = M([aa, 1, aa, 0]);

    function f1 (v) {
        log(m(dF3x));
        let result = Math.floor(Math.random()*2);
        if (result) {
          gain += v[1]  
          v[0] += v[1];
          v[1] = 1;
          v[3] += 1;
          if (v[3] < aa) {
            m(f1)
        }
          else {
              dbl += 1;
              return v;
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
        return v;
      } 

async function gamble () {   
  let k = 0;
  while (k < 100) {
      k += 1; 
      await m(f1)
      m(() => [50, 1, 50, 0]);
  } 
  if (k > 98) {
      log("gain is", gain);
      log("loss is", loss);
      log("dbl/100000 is", dbl/100000);
      log("1/Euler's number is", 0.368);
      log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
  }
};

gamble();

// m(f1);
// log("~~~~~~~ m(dF3x) is", m(dF3x));