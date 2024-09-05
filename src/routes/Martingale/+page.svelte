
<script>
    import { leftShift } from "mathjs";
    let output = ''; // Reactive variable to store log messages
    function play () {
        output = '';
        m(() => [25, 1, 25, 0 ]);
        m(f1);
    }
    function clear () {
        output = '';
    }

    const dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }

    var m = M([25, 1, 25, 0]);

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
            if (v[3] < 25) m(f1);
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

    var m = M([25,1,25,0]); // x in the m(x)-M closure is [25,1,25,0]
 // The elements of x (above) represent a starting dollars, first bet, goal, and wins.

    function f1(v) {
        addLogMessage("m(dF3x) is ${spot}" );
        const result = Math.floor(Math.random() * 2);
        if (result) {
            v[0] += v[1];
            v[1] = 1;
            v[3] += 1;
            if (v[3] < 25) m(f1);
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
};`

clear();

var runs = `
k is 1000000000
gain is 83168244121
loss is 83169208725
percent deviation from equality is -0.0005799078821370784 %

k is 1000000000
gain is 83171572605
loss is 83170976285
percent deviation from equality is 0.00035848915624969653 %

k is 1000000000
gain is 83168282625
loss is 83170787098
percent deviation from equality is -0.0015056432647907866 %

k is 1000000000
gain is 83169300078
loss is 83170549366
percent deviation from equality is -0.000751045527680717 %

k is 1000000000
gain is 83169558217
loss is 83169526275
percent deviation from equality is 0.000019202943251461886 %`;





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

<p> If v[3] is less than the starting amount, f1 calls m on itself to initiate another round of action. The semi-recursive function "f1" -- f1 repeatedly calls m(f1), causing f1 to execute on x in the closure --  executes on x until m(dF3x)[2] equals m(dF3x)[3] (Success), or m(dF3x)[0] is less than m(dF3x)[1] (Fail).   
</p>

<p> Players fail most attempts to double their money. Lacking sufficient funds to cover a losing bet, they leave with whatever they still have. The amount they lose varies, but it's rarely everything they started with.</p>

 <h2> A BILLION ATTEMPTS TO DOUBLE $50 IN AN m-M(x) CLOSURE</h2>

 <p>The following code takes around 30 minutes to run in my linux desktop computer. It uses only 6.2% of the CPU resources available to it, and a miniscule 120 megabytes of the 64 gigabytes of installed memory. </p>

<pre>{gambleCode}</pre>  
<span style = "margin: 3%"> The result of calling gamble (above) five consecutive times, each time trying to double $50 a billion times, supports the assertion that repeated use of the Martingale betting strategy is a 50-50, break even proposition, similar to betting the same amount on coin flips thousands of times. I don't know how to prove it, but it seems self-evident that no pattern of changing the amounts of bets can possibly increase or decrease the odds of coming out ahead after repeatedly betting on fair flips of a fair coin.  </span>
<p> Here are the results: </p>
<pre>{runs}</pre>

<br>

</div>
