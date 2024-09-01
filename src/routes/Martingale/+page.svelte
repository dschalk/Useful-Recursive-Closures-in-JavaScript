
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
            addLogMessage(`m(dF3x) is ${JSON.stringify(m(dF3x))}`);
        const result = Math.floor(Math.random() * 2);
        if (result) {
            v[0] += v[1];
            v[1] = 1;
            v[3] += 1;
            if (v[3] < aa) m(f1);
            else {
                addLogMessage(`Double ${JSON.stringify(m(dF3x))}`);
                return v;
            }
        } else {
            v[0] -= v[1];
            v[1] = leftShift(v[1], 1);
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
var spot = '${JSON.stringify(m(dF3x))}'
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

    function f1(v) {
        addLogMessage("m(dF3x) is ${spot}" );
        const result = Math.floor(Math.random() * 2);
        if (result) {
            v[0] += v[1];
            v[1] = 1;
            v[3] += 1;
            if (v[3] < aa) m(f1);
            else {
                addLogMessage("Double ${spot}");
                return v;
            }
        } else {
            v[0] -= v[1];
            v[1] = leftShift(v[1], 1); // binary way to double v[1]
            if (v[1] > v[0]) {
                addLogMessage("Fail ${spot}");
                return;
            } else {
                m(f1);
            }
        }
        return v;
    };`

var gambleCode = `async function gamble () {   
  let k = 0;
  while (k < 100000) {
      k += 1; 
      await m(f1)
      m(() => [50, 1, 50, 0]);
  } 
  if (k > 99998) {
      log("gain is", gain);
      log("loss is", loss);
      log("dbl/100000 is", dbl/100000);
      log("1/Euler's number is", 0.368);
      log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
  }
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

var f1Code2 = `    import { leftShift } from "mathjs";
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
  while (k < 100000) {
      k += 1; 
      await m(f1)
      m(() => [50, 1, 50, 0]);
  } 
  if (k > 99998) {
      log("gain is", gain);
      log("loss is", loss);
      log("dbl/100000 is", dbl/100000);
      log("1/Euler's number is", 0.368);
      log("percent deviation from equality is", (gain - loss)/(gain + loss) * 100, "%");
  }
};

gamble(); `


</script>

<div style = "width: 80%; margin-left: 10%">
<h1 style="text-align:center">Martingale Betting Strategy</h1>

<p> <a href = "https://medium.com/@pelicanlabs/a-curious-conclusion-from-the-martingale-betting-strategy-28dc297a5fee">The Martingale "Double Your Money" Betting Strategy</a> is, essentially, a system in which players double their bets each time they lose in an even-odds game of chance. Examples are calling "heads" or "tails" on fair flips of a fair coin, and betting on red or black on spins of a roulette wheel.</p>
<p> When "Play" is clicked (below), line 3 of the function "f1" returns either 0 or 1 with equal probability. These numbers are equivalent to false and true in the test on line 4 ("if (result) ..."). </p>
<p> Clicing "Play" calls m(f1), where m = M([25,1,25,0]) and x is [25,1,25,0] in the resulting <a href = "./">m-M(x) closure</a>. 'x' represents [starting amount, current bet, goal, number of wins], (beginning with [25,1,25,0]). </p>
<button on:click = {play}>Play</button>
<button on:click = {clear}>Clear</button>
<div>
    <h1>Game Output</h1>
    <pre>{output}</pre> <!-- The output will be displayed here -->
    <p>"********************************************"</p>
</div>

<p> Players start with N dollars (m(dF3x)[0] === N), and stop if m(dF3x)[0] reaches 2N. Otherwise, players stop when they wouldn't have enough money to cover losing the next bet; i.e., when m(dF3x)[0] is less than m(dF3x)[1]. Here's the code:</p>
<pre>{stdCode}</pre>
<p> Each time a player loses, the amount of the bet (which starts at $1) doubles. If the player wins a bet, all prior losses are recouped and $1 is gained. For example, if the bets were $1, $2, $4,and $8, winning $16 recoups the $(1+2+4+8) = $15, leaving one extra dollar. </p>

<p> When m(dF3x)[3] === m(dF3x)[2], the player's money has doubled because each incremental increase in m(dF3x)[3] corresponds to an incremental increase in m(dF3x)[0]. The final value of x in the m-M(x) closure is m(dF3x) === [50,1,25,25].</p>
<p> If v[3] is less than the starting amount of "aa" (see line '8' of "f1"), then f1 calls m(f1) to initiate another round of action. The semi-recursive function "f1" -- f1 calls m(f1) over and over again until m(dF3x)[2] equals m(dF3x)[3] or m(dF3x)[0] is less than m(dF3x)[1] -- is efficient and concise, while also being easy to understand.   
</p>


<p> Output can also be sent to the browser window, rather than the console. 
  Try it, if you like. You won't need to click "Clear" between tries. </p>
<p> Players fail most attempts to double their money. Lacking sufficient funds to cover a losing bet, they leave with whatever they still have. The amount they lose varies, but it's rarely everything they started with. Less frequent doubling of the initial bet compensates for the more frequent, but smaller, losses. After 10,000 attempts to double a starting stake of $25, the percent difference between gains and losses with respect to total gains and losses ((gains - losses)/(gains+losses))*100 %) is usually less than half of one-percent. The "gamble" function (below) will be used to demonstrate this.     </p>
 
<pre>{gambleCode}</pre>  
<span style = "margin: 3%"> The result of calling gamble() ten consecutive times, each time trying to double $25 10,000 times, supports the assertion that repeated use of the Martingale betting strategy is a 50-50, break even proposition, similar to betting the same amount on coin flips thousands of times. I don't know how to prove it, but it seems self-evident that no pattern of changing the amounts of bets can possibly increase or decrease the odds of coming out ahead after repeatedly betting on fair flips of a fair coin.  </span>
<pre>{runs_100000}</pre>
<p> The "f1" function was slightly modified to keep track of gains and losses as follows</p>
<pre>{f1Code2}</pre>
<br>

</div>
