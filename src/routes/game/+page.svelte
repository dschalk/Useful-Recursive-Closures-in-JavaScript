<script>
    import { leftShift } from "mathjs";

    var dF3x = () => {};
    var dF3ar = () => {};

    function M(x, ar = []) {
        return function go(func) {
            if (func === dF3x) return x;
            else if (func === dF3ar) return ar;
            x = func(x);
            if (func.key) ar.push(func.key);
            return go;
        };
    }

    var m = M([100, 1, 100]);
    function f1 (v) {
        v[1] = leftShift(v[1], 1);
        v[2] -= 1;
        result = Math.floor(Math.random()*2);
        result ? v[0] += v[1] :  v[0] -= 1;
    }

    function next (v) {leftShift}


function gamble () {
    let run;    
    let stake = 100
    let multiplier = 1;
    let limit = 100;
    run = () =>  {
        for (let k = 0; k < limit; k+=1) {
            limit -= 1;    
            let j = Math.floor(Math.random()*2);
            if (j === 0) {
                stake = stake - multiplier; 
               multiplier = multiplier * 2;
            if (stake > 0 && limit > 0) run();
            else {
                stake = stake + multiplier     
               multiplier = 1;
            if (limit > 0) run();
        }
        return ["limit:",limit, "<><> stake", stake, "<><> multiplier", multiplier];
    };
};
};
};
</script>



<!--<input type = "number" bind:value={number} placeholder="enter a positive integer"/> -->
<br><br>

<button on:click={gamble}>Gamble</button>

<h1>{gamble()}</h1>





