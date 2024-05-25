  
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
    };

    const m = M(3);

    async function idP (x) {
      await wait(5)
      return x;
    }
    
    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }
    
    
    var Mcode = `    var dF3x = () => {}; 

    function M (x) {
        return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
        };
    };
    
    const m = M(3); 
    
    async function idP (x) {
      await wait(5)
      return x;
    } ;

    function wait(ms) {
        return new Promise(r => setTimeout(r, ms));
    }`;
    
    var A;

    async function squareP (x) {
      await wait(300)
      return x*x;
    }
    
    let pause = t => async x => {
      await wait(t)
      return x;
    }
    
    async function hello (x) {
      A = "Hello "
      await wait(700)
      B = "World"
      await wait(700)
      A = 42
      await wait(700)
      B = 42
      await wait(600);
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
    
    let pause = t => async x => {
      await wait(t)
      return x;
    }
    
    async function hello (x) {
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
    
    async function cubeP (x) {
      await wait(600)
      return x*x*x;
    } `;
    
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
      
    m(v => v/42)(v => v + 5)(v=>v*7)(pause(600))(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(hello)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 

    }

    var restartCode = `    function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"
    m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      
    m(v => v/42)(v => v + 5)(v=>v*7)(pause(600))(dF3x).then(v => (B = v));

    m(addP(7))(Math.sqrt)(v => v*6)(hello)(dF3x).then(a => (C = a));

    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 

    }`

    restart();  


// Create a generator function with multiple yields
var log = console.log;


var G = '';

function* generatorFunction() {
  yield `m(v=>v**3)`
  yield `m(dF3x)  // 3`
  yield `m(v=>v**3)(v=>v*2)(v=>v-12)`
  yield `m(dF3x)  // 42`
  yield `m(v=>v+7)(Math.sqrt)(dF3x)  // 7`
  return ''
}

var generator = generatorFunction()

function cow () {
    console.log("Fuck you")
    var z = generator.next().value;
    console.log("z is", z);
    if (z != undefined) G = z
    else G = '';
}

  function handleEvent(e) {
    if (e.keyCode === 59) cow();
  }
cow();
console.log("Fuck you")

</script>







<svelte:window on:keypress={handleEvent} />

<p> Using the modified version of M below, m can handle mixtures of synchronous and asynchronous arguments. idP(a) has no effect if a is a promise. Otherwise, idP transforms a into a promise. To see this in action, click "Restart" (below).</p>
<pre>{Mcode}</pre>

<p id='yes'> In the demonstration below, "m" is given mixtures of simple functions and promises.  </p>
<button on:click = {restart} data.sveltekit.reload>Restart</button>
<br><br>
<span style="color: #FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m(() => 4)(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
= </span> <span style = "font-weight: bold; color:red">{A}</span> &nbsp;&nbsp; <span> // x is changed to 4, then &nbsp;(4+3)**2 - 7 = 42</span>   
<br><br> 
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m(v => v/42)(v => v + 5)(v=>v*7)(pause(600))(dF3x).then(v => (B = v));
= <span style = "font-weight: bold; color:red">{B}</span> </span> <span> &nbsp; &nbsp; // &nbsp;(42/42)*6*7 = 42</span>
<br><br>
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m(addP(7))(Math.sqrt)(v => v*6)(hello)(dF3x).then(a => (C = a));
= <span style = "font-weight: bold; color:red">{C}</span> </span> <span> &nbsp; &nbsp; // &nbsp;Math.sqrt(42 + 7) * 6 = 42</span>
<br><br>
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)) = <span style = "font-weight: bold; color:red">{D}</span> </span> <span> &nbsp; &nbsp; // &nbsp;((42 / 14) * 3 + 5) * 3 = 42</span>

<p> The asynchronous functions used above are in this list:</p>
<pre>{functionCode}</pre>

<p> Here's the restart code: </p>
<pre>{restartCode}</pre>

<h2>m = M(3)</h2>
<h2>{G}</h2>

<br><br><br>



<br><br><br>
<br><br><br>



