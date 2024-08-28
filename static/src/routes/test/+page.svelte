
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
                addLogMessage(`Wipeout ${JSON.stringify(m(dF3x))}`);
                return;
            } else {
                m(f1);
            }
        }
        return v;
    }

    m(f1);
</script>

<button on:click = {play}>Play</button>
<button on:click = {clear}>Clear</button>
<div>
    <h1>Game Output</h1>
    <pre>{output}</pre> <!-- The output will be displayed here -->
</div>
