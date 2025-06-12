
<script>
    import { leftShift } from "mathjs";

    let outputMessages = ''; // Reactive variable to store log messages
    const aa = 100;
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

    const m = M([aa, 1, aa, 0]);

    function addLogMessage(message) {
        outputMessages += message + '\n';
    }

    function f1(v) {
        const result = Math.floor(Math.random() * 2);
        if (result) {
            v[0] += v[1];
            v[1] = 1;
            v[3] += 1;
            addLogMessage(`2<><><><><><><>, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
            if (v[3] < aa) m(f1);
            else {
                addLogMessage(`Double ${JSON.stringify(m(dF3x))}`);
                return v;
            }
        } else {
            v[0] -= v[1];
            v[1] = leftShift(v[1], 1);
            addLogMessage(`2******, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
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

<div>
    <h1>Game Output</h1>
    <pre>{outputMessages}</pre> <!-- The output will be displayed here -->
</div>
