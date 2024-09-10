

var log = console.log;
var dF3x = () => {};

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        x = func(x);
        return go;
    };
}


    let m = M([50, 1, 50, 0]);  // [stake, bet, goal, number successes] 
    let jumpUp = 0;
    let jumpBack = 0;
    let jumpZero = 0;
    let gain = 0;
    let loss = 0;
    let k = 0;
    let x = Date.now();
    let q1 = true;
    let q2 = false;
    let q3 = false;
    

    // Main loop
    while (k < 1000000000) {
        k += 1;

        // if (gain === loss) even += 1;
        // Reset the closure state in preparation for another round.
        m(() => [50, 1, 50, 0]);
        // Place another bet.
        m(f1);
    }

    // Log results after loop
    log("End", (Date.now() - x) / 1000)
    log(k, "attempts");
    log("gain is", gain);
    log("loss is", loss);
    // log("Player jumped out of the red ",jumpUp, "times")
    // log("Player fell back into the red ",jumpBack, "times")
    log("jumpUp is", jumpUp);
    log("jumpBack is", jumpBack);
    log("percent deviation from equality is", ((gain - loss) / (gain + loss)) * 100, "%");
  
    function f1(v) {
        let result = Math.floor(Math.random() * 2);
        q1 = (gain > loss);
        q2 = (loss > gain);

        if (result) {      // Success
            gain += v[1];

            v[0] += v[1];  // Increase stake by current bet
            v[1] = 1;      // Reset bet to 1
            v[3] += 1;     // Increment success counter
            // Recursively continue if stake is less than goal
            if (q2 && (gain > loss)) jumpUp += 1;    
            if (v[0] < 100) {
                m(f1);  // Continue playing
            }
        } else {            // Failure
            v[0] -= v[1];   // Subtract bet from stake (loss)
            loss += v[1];   // Add to total loss
            v[1] <<= 1;     // Double the bet (using bit shift)
            if (q1 && (gain < loss)) jumpBack += 1;
            // Check if the current bet exceeds stake; if not, continue
            if (v[1] <= v[0]) {
                m(f1);  // Continue playing
            }
        }
    }


