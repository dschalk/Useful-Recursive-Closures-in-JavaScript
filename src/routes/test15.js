var log = console.log;
var dF3x = () => {};

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        x = func(x);
        return go;
    };
}

function gamble() {
    let m = M([50, 1, 50, 0]);  // [stake, bet, goal, number successes] 
    let gain = 0;
    let loss = 0;
    let k = 0;

    // Main loop
    while (k < 1000000000) {
        k += 1;

        // Place another bet.
        m(f1);
        
        // Reset the closure state in preparation for another round.
        m(() => [50, 1, 50, 0]);
    }

    // Log results after loop
    log("k is", k);
    log("gain is", gain);
    log("loss is", loss);
    log("percent deviation from equality is", ((gain - loss) / (gain + loss)) * 100, "%");

    function f1(v) {
        let result = Math.floor(Math.random() * 2);

        if (result) {
            gain += v[1];
            v[0] += v[1];  // Increase stake by current bet
            v[1] = 1;      // Reset bet to 1
            v[3] += 1;     // Increment success counter

            // Recursively continue if stake is less than goal
            if (v[0] < 100) {
                m(f1);  // Continue playing
            }
        } else {
            v[0] -= v[1];   // Subtract bet from stake (loss)
            loss += v[1];   // Add to total loss
            v[1] <<= 1;     // Double the bet (using bit shift)

            // Check if the current bet exceeds stake; if not, continue
            if (v[1] <= v[0]) {
                m(f1);  // Continue playing
            }
        }
    }
}

gamble();
