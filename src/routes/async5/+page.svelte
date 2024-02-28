  
<script>  
    import {fade} from "svelte/transition"
    
    // const worker_OO = new Worker("/worker_OO.js");
    
    var dF3x = () => {}; 
    var dF3ar = () => {}; 
    
    function M (x, ar = []) {
        return function go (func){
        if (func === dF3x) return x;
        else if (func === dF3ar) return ar;
        x = idP(x).then(v => func(v));
        ar.push(func.key);
        return go;
    }
        };

    var Mcode = `    function M (x) {
            return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;

    var A;

    function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
    }
    
    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    async function pause (x) {
      await wait(1000)
      A = "Hello "
      await wait(700)
      B = "World"
      await wait(700)
      A = 42
      await wait(700)
      B = 42
      return x;
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
      await wait(5)
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
    
    async function pause (x) {
      await wait(1000)
      A = "Hello "
      await wait(700)
      B = "World"
      await wait(700)
      A = 42
      await wait(700)
      B = 42
      return x;
    }
    
    let divPinverse = a => async b => {
      await wait (300)
      return a/b;
    }
    
    let addP =  x => async y => {
      await wait(300)
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
      await wait(1)
      return x;
    }
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    } `;
    
    var m = M(4)

    A = "A"
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

    m(addP(7))(Math.sqrt)(v => v*6)(pause)(dF3x).then(a => (C = a));

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
      m(divP(14))(v => v * 3)(addP(15))(v=> v * 3)(dF3x).then(v => (D = v)); 
    }`

    /*m(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      
    m(v => v/42)(multP(6))(v=>v*7)(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); */

    restart();

  /*function M(x, ar =[]) {
    return function go(func) {
      if (func === dF3x) return x;
      else if (func === dF3ar) return ar    
      else x = idP(x).then(v => func(v));
      // x = func(x);
      ar.push(func.key);
      console.log("func.key is", func.key);
      return go;
    }; 
  } */

</script>

<p> This modified version of M can handle both ordinary data and promises together in composite functions: </p>
<pre>{Mcode}</pre>

<p> In the demonstration below, functions composed of mixtures of ordinary functions and promises eventually resolve as expected. The definition of m, <span style="color:aqua">m = M(4) </span>, sets "x" in the m-M(x) closure to the number 4.</p>
<button on:click = {restart} data.sveltekit.reload>Restart</button>
<br><br>
<span style="color: #FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m(addP(3)) (squareP) (v => v - 7)(pause) (dF3x).then(v => (A = v)) = </span> <span style = "font-weight: bold; color:red">{A}</span> &nbsp;&nbsp; <span> //  &nbsp;(4+3)**2 - 7 = 42</span>   
<br><br> 
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m(v => v/42) (multP(6)) (v=>v*7) (dF3x).then(v => (B = v)) = <span style = "font-weight: bold; color:red">{B}</span> </span> <span> &nbsp; &nbsp; // &nbsp;(42/42)*6*7 = 42</span>
<br><br>
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m(addP(7)) (Math.sqrt) (v => v*6) (dF3x).then(a => (C = a)) = <span style = "font-weight: bold; color:red">{C}</span> </span> <span> &nbsp; &nbsp; // &nbsp;Math.sqrt(42 + 7) * 6 = 42</span>
<br><br>
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)) = <span style = "font-weight: bold; color:red">{D}</span> </span> <span> &nbsp; &nbsp; // &nbsp;((42/14)*3 + 5) * 3 = 42</span>

<p> The asynchronous functions used above are in this list:</p>
<pre>{functionCode}</pre>

<p> Here's the restart code: </p>
<pre>{restartCode}</pre>




