
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
        m(() => [aa, 1, aa, 0]);
    
    log("gain is", gain);
    log("loss is", loss);
    log("percent deviation from equality is", ((2*(gain - loss)/(gain + loss) * 100), "%"));
    };
};`;

clear();
var test13Code = `
2******, m(dF3x) is [ 99, 2, 100, 0 ]
2<><><><><><><>, m(dF3x) is [ 101, 1, 100, 1 ]
2<><><><><><><>, m(dF3x) is [ 102, 1, 100, 2 ]
2<><><><><><><>, m(dF3x) is [ 103, 1, 100, 3 ]
2******, m(dF3x) is [ 102, 2, 100, 3 ]
2******, m(dF3x) is [ 100, 4, 100, 3 ]
2******, m(dF3x) is [ 96, 8, 100, 3 ]
2******, m(dF3x) is [ 88, 16, 100, 3 ]
2******, m(dF3x) is [ 72, 32, 100, 3 ]
2<><><><><><><>, m(dF3x) is [ 104, 1, 100, 4 ]
2<><><><><><><>, m(dF3x) is [ 105, 1, 100, 5 ]
2<><><><><><><>, m(dF3x) is [ 106, 1, 100, 6 ]
2<><><><><><><>, m(dF3x) is [ 107, 1, 100, 7 ]
2<><><><><><><>, m(dF3x) is [ 108, 1, 100, 8 ]
2******, m(dF3x) is [ 107, 2, 100, 8 ]
2<><><><><><><>, m(dF3x) is [ 109, 1, 100, 9 ]
2******, m(dF3x) is [ 108, 2, 100, 9 ]
2******, m(dF3x) is [ 106, 4, 100, 9 ]
2<><><><><><><>, m(dF3x) is [ 110, 1, 100, 10 ]
2<><><><><><><>, m(dF3x) is [ 111, 1, 100, 11 ]
2<><><><><><><>, m(dF3x) is [ 112, 1, 100, 12 ]
2******, m(dF3x) is [ 111, 2, 100, 12 ]
2<><><><><><><>, m(dF3x) is [ 113, 1, 100, 13 ]
2******, m(dF3x) is [ 112, 2, 100, 13 ]
2<><><><><><><>, m(dF3x) is [ 114, 1, 100, 14 ]
2******, m(dF3x) is [ 113, 2, 100, 14 ]
2<><><><><><><>, m(dF3x) is [ 115, 1, 100, 15 ]
2<><><><><><><>, m(dF3x) is [ 116, 1, 100, 16 ]
2<><><><><><><>, m(dF3x) is [ 117, 1, 100, 17 ]
2<><><><><><><>, m(dF3x) is [ 118, 1, 100, 18 ]
2******, m(dF3x) is [ 117, 2, 100, 18 ]
2******, m(dF3x) is [ 115, 4, 100, 18 ]
2******, m(dF3x) is [ 111, 8, 100, 18 ]
2<><><><><><><>, m(dF3x) is [ 119, 1, 100, 19 ]
2******, m(dF3x) is [ 118, 2, 100, 19 ]
2<><><><><><><>, m(dF3x) is [ 120, 1, 100, 20 ]
2<><><><><><><>, m(dF3x) is [ 121, 1, 100, 21 ]
2******, m(dF3x) is [ 120, 2, 100, 21 ]
2******, m(dF3x) is [ 118, 4, 100, 21 ]
2******, m(dF3x) is [ 114, 8, 100, 21 ]
2******, m(dF3x) is [ 106, 16, 100, 21 ]
2******, m(dF3x) is [ 90, 32, 100, 21 ]
2<><><><><><><>, m(dF3x) is [ 122, 1, 100, 22 ]
2<><><><><><><>, m(dF3x) is [ 123, 1, 100, 23 ]
2******, m(dF3x) is [ 122, 2, 100, 23 ]
2<><><><><><><>, m(dF3x) is [ 124, 1, 100, 24 ]
2<><><><><><><>, m(dF3x) is [ 125, 1, 100, 25 ]
2<><><><><><><>, m(dF3x) is [ 126, 1, 100, 26 ]
2<><><><><><><>, m(dF3x) is [ 127, 1, 100, 27 ]
2******, m(dF3x) is [ 126, 2, 100, 27 ]
2******, m(dF3x) is [ 124, 4, 100, 27 ]
2<><><><><><><>, m(dF3x) is [ 128, 1, 100, 28 ]
2******, m(dF3x) is [ 127, 2, 100, 28 ]
2<><><><><><><>, m(dF3x) is [ 129, 1, 100, 29 ]
2<><><><><><><>, m(dF3x) is [ 130, 1, 100, 30 ]
2******, m(dF3x) is [ 129, 2, 100, 30 ]
2******, m(dF3x) is [ 127, 4, 100, 30 ]
2<><><><><><><>, m(dF3x) is [ 131, 1, 100, 31 ]
2******, m(dF3x) is [ 130, 2, 100, 31 ]
2******, m(dF3x) is [ 128, 4, 100, 31 ]
2******, m(dF3x) is [ 124, 8, 100, 31 ]
2******, m(dF3x) is [ 116, 16, 100, 31 ]
2******, m(dF3x) is [ 100, 32, 100, 31 ]
2******, m(dF3x) is [ 68, 64, 100, 31 ]
2******, m(dF3x) is [ 4, 128, 100, 31 ]
Fail [ 4, 128, 100, 31 ]
gain is 1940596
loss is 1935086
percent deviation from equality is 0.28 %`;

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

<p> Players fail most attempts to double their money. Lacking sufficient funds to cover a losing bet, they leave with whatever they still have. The amount they lose varies, but it's rarely everything they started with. Less frequent doubling your of your money can balance more frequent but smaller losses. That's what happens when the Martingale strategy is repeatedly executed.   </p>
<p> The next demonstration attempts to double $100 10,000 times using the function "gamble."</p>
 
<pre>{gambleCode}</pre>  
<p> After 9,999 attempts, the Martingale betting strategy fails to double the starting amount. The loss of $96 has little impact on the total losses of $1,935,086. </p>
<pre>{test13Code}</pre>

<br>


</div>
