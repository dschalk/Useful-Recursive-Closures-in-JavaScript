
<script>
    import { leftShift } from "mathjs";
    let output = ''; // Reactive variable to store log messages
    function play () {
        output = '';
        m(() => [aa, 1, aa, 0 ]);
        m(f1);
    }
    function clear () {
        output = '';
    }
    const aa = 25;
    const bb = 1;
    const dd = 0;
    const arr = [aa, bb, aa, dd]; // [stake, bet, goal, winnings]

    const dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }

    var m = M([aa, 1, aa, 0]);

    function addLogMessage(message) {
        output += message + '\n';
    }

    function f1(v) {
        const result = Math.floor(Math.random() * 2);
        if (result) {
            v[0] += v[1];
            v[1] = 1;
            v[3] += 1;
            addLogMessage(`<><><><><><><>, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
            if (v[3] < aa) m(f1);
            else {
                addLogMessage(`Double ${JSON.stringify(m(dF3x))}`);
                return v;
            }
        } else {
            v[0] -= v[1];
            v[1] = leftShift(v[1], 1);
            addLogMessage(`******, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
            if (v[1] > v[0]) {
                addLogMessage(`Fail ${JSON.stringify(m(dF3x))}`);
                return;
            } else {
                m(f1);
            }
        }
        return v;
    }

    m(f1);

var stdCode = `    import { leftShift } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }
    var aa = 25;
    var m = M([aa,1,aa,0]); // x in the m(x)-M closure is [25,1,25,0]
 // The elements of x (above) represent a starting dollars, first bet, goal, and wins.

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {           // 1 is true, 0 is false.
          v[0] += v[1];         // The player gains $1.00
          log("2<><><><><><><>, m(dF3x) is", m(dF3x));
          if (v[3] < aa) m(f1)  // Another coin flip, 
          else {
            log("Double", m(dF3x))
            return;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            v[1] = leftShift(v[1], 1);          
            log("2******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Fail", m(dF3x));
              return
            }
            else m(f1);
        } 
        return v;
      };`;

var gambleCode = `async function gamble () {   
    for (var k = 0; k < 10000; k += 1) {
       await m(f1)
       m(() => [25, 1, 25, 0]);
    log("gain is", gain);
    log("loss is", loss);
    log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
    };
};`;

clear();


var runs_100000 = `gain is 8306925
loss is 8308713
dbl/100000 is 0.36959
1/Euler's number is 0.368
percent deviation from equality is -0.010760947006669259 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8309877
loss is 8313498
dbl/100000 is 0.36897
1/Euler's number is 0.368
percent deviation from equality is -0.021782580252205103 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8312262
loss is 8301838
dbl/100000 is 0.37098
1/Euler's number is 0.368
percent deviation from equality is 0.06274188791448228 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8326477
loss is 8316122
dbl/100000 is 0.37035
1/Euler's number is 0.368
percent deviation from equality is 0.06221984919542915 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8331954
loss is 8322345
dbl/100000 is 0.3706
1/Euler's number is 0.368
percent deviation from equality is 0.05769681449816651 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8312439
loss is 8309928
dbl/100000 is 0.36999
1/Euler's number is 0.368
percent deviation from equality is 0.015106151849492915 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8314156
loss is 8316033
dbl/100000 is 0.36927
1/Euler's number is 0.368
percent deviation from equality is -0.011286702754851434 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8323725
loss is 8330640
dbl/100000 is 0.36863
1/Euler's number is 0.368
percent deviation from equality is -0.041520646389099795 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8354956
loss is 8339631
dbl/100000 is 0.37151
1/Euler's number is 0.368
percent deviation from equality is 0.09179622113443117 %

p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test13
gain is 8286734
loss is 8303624
dbl/100000 is 0.36738
1/Euler's number is 0.368
percent deviation from equality is -0.10180612136278192 %`

var f1Code2 = `import { leftShift } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
     
            return go;
        };
    }
    let gain = 0;  // additional variable
    let loss = 0;  // additional variable
    let aa = 25;
    let bb = 1;
    let dd = 0
    let arr = [aa, bb, aa, dd];
// [stake, bet, goal, winnings]
    var m = M([aa, 1, aa, 0]);

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {
          gain += v[1]   // gain is incremented by the amount of the bet  
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
            loss += v[1];   // loss is incremented by the amount of the bet
            v[1] = leftShift(v[1], 1);          
            log("******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Fail", m(dF3x));
              return
            }
            else m(f1);
        } 
        return v;
    }`; 

</script>

<div style = "width: 80%; margin-left: 10%">
<h1 style="text-align:center">Martingale Betting Strategy</h1>

<p> The Martingale betting strategy is explained and analyzed here: <a href = "https://medium.com/@pelicanlabs/a-curious-conclusion-from-the-martingale-betting-strategy-28dc297a5fee">A Curious Conclusion From The Martingale Betting Strategy</a> As in the above-linked article, the goal of the game presented here can be thought of as fair coin flips. Under the hood, the numbers 0 and 1 will be semi-randomly generated with equal probabilities of occurring.  </p>
<p> Players start with N dollars and stop when they either double their money or lack sufficient funds to cover losing the next bet. Each time a player loses, the amount of the bet (which starts at $1.00) doubles. If the player wins a bet, all prior losses are recouped and $1.00 is gained. For example, if the bets were $1, $2, $4,and $8, winning $16 recoups the $(1+2+4+8) = $15, leaving one extra dollar. </p>

<p> Here's an abstraction of game progress, written in JavaScript: </p>
<pre>{stdCode}</pre>

<p> Output can also be sent to the browser window, rather than the console. 
  Try it, if you like. You won't need to click "Clear" between tries. </p>
<button on:click = {play}>Play</button>
<button on:click = {clear}>Clear</button>
<div>
    <h1>Game Output</h1>
    <pre>{output}</pre> <!-- The output will be displayed here -->
    <p>"********************************************"</p>
</div>

<p> Players fail most attempts to double their money. Lacking sufficient funds to cover a losing bet, they leave with whatever they still have. The amount they lose varies, but it's rarely everything they started with. Less frequent doubling of the initial bet compensates for the more frequent, but smaller, losses. After 10,000 attempts to double a starting stake of $25, the percent difference between gains and losses with respect to total gains and losses ((gains - losses)/(gains+losses))*100 %) is usually less than half of one-percent. The "gamble" function (below) will be used to demonstrate this.     </p>
 
<pre>{gambleCode}</pre>  
<span style = "margin: 3%"> The result of calling gamble() ten consecutive times, each time trying to double $25 10,000 times, supports the assertion that repeated use of the Martingale betting strategy is a 50-50, break even proposition, similar to betting the same amount on coin flips thousands of times. I don't know how to prove it, but it seems self-evident that no pattern of changing the amounts of bets can possibly increase or decrease the odds of coming out ahead after repeatedly betting on fair flips of a fair coin.  </span>
<pre>{runs_100000}</pre>
<p> The "f1" function was slightly modified to keep track of gains and losses as follows</p>
<pre>{f1Code2}</pre>
<br>

</div>
