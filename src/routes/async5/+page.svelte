  
<script>  
    import {fade} from "svelte/transition"
    
    // const worker_OO = new Worker("/worker_OO.js");
    
    var dF3x = () => {}; 
    
    function M (x) {
          return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }

    var Mcode = `    function M (x) {
            return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;

    
    function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
    }
    
    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    async function pause (t) {
      await wait(100 * t)
      return;
    }
    
    let divPinverse = a => async b => {
      await wait (300)
      return a/b;
    }
    
        let addP =  x => async y => {
      await wait(500)
      return parseInt(x,10) + parseInt(y,10);
    }
    
    let doubleP = async y => {
      await wait(600)
      return 2 * parseInt(y,10) 
    }
    
    let multP = x => async y => {
      await wait(600)
      return x * y;
    }
    
    let divP = a => async b => {
      await wait (300)
      return b/a;
    }
    
    async function idP (x) {
      await wait(500)
      return x;
    }
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    }
   var functionCode = `    function wait(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
    
    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    async function pause (t) {
      await wait(100 * t)
      return;
    }
    
    let divPinverse = a => async b => {
      await wait (300)
      return a/b;
    }
    
    let addP =  x => async y => {
      await wait(500)
      return parseInt(x,10) + parseInt(y,10);
    }
    
    let doubleP = async y => {
      await wait(600)
      return 2 * parseInt(y,10) 
    }
    
    let multP = x => async y => {
      await wait(600)
      return x * y;
    }
    
    let divP = a => async b => {
      await wait (300)
      return b/a;
    }
    
    async function idP (x) {
      await wait(500)
      return x;
    }
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    } `;
    
    var m = M(4)

    var A = "A"
    var B = "B"
    var C = "C"
    var D = "D"
    
    function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"

    m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      
    m(v => v/42)(multP(6))(v=>v*7)(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 

    }

    var restartCode = `    function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"
      m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      m(v => v/42)(multP(6))(v=>v*7)(dF3x).then(v => (B = v));
      m(addP(7))(Math.sqrt)(v => v*6)(dF3x).then(a => (C = a));
      m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 
    }`

    m(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      
    m(v => v/42)(multP(6))(v=>v*7)(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 

</script>
<p> This modified version of M can handle both ordinary data and promises together in composite functions: </p>
<pre>{Mcode}</pre>

<p> In the demonstration below, functions composed of mixtures of ordinary functions and promises eventually resolve as expected. "x" in the m-M(x) closure begins with the number 4: <span style="color:aqua">m = M(4) </span>.</p>
<button on:click = {restart} data.sveltekit.reload>Restart</button>

<p style="color:aqua">m(addP(3)) (squareP) (v => v - 7) (dF3x).then(v => (D = v)) = {A} </p>    

<p style="color:aqua">m(v => v / 42) (multP(6)) (v=>v * 7) (dF3x).then(v => (A = v)) = {B} </p>

<p style="color:aqua">m(addP(7)) (Math.sqrt) (v => v * 6) (dF3x).then(a => (C = a)) = {C} </p>

<p style="color:aqua">m(divP(14)) (v => v**3) (addP(5)) (dF3x).then(v => (D = v)) = {D} </p>

<p> The asynchronous functions used above are in this list:</p>
<pre>{functionCode}</pre>

<p> Here's the restart code: </p>
<pre>{restartCode}</pre>




