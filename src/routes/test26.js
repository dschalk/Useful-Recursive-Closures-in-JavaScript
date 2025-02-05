
var log = console.log;
var dF3x = () => { }

function M(x) {
    x = idP(x);
    return function go(func) {
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
        return go;
    }
}

    var m = M(3);
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
    
    const m = M(3); `;
    
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
      log("A", A);
      B = "World"
      await wait(700)
      log("B", B);
      C = "You";
      D = "bet";
      log("C", C);
      log("D", D);
      await wait(700)
      log("A", A);
      D = "bet";
      await wait(700)
      log("B", B);
      A = 42
      log("A", A);
      await wait(700)
      log("A", A);
      B = 42
      log("B", B);
      await wait(600);
      B = "bet";
      log("B", B);
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
    
    A = "A"
    var B = "B"
    var C = "C"
    var D = "D"
    
    async function restart () {
      A = "A"
      B = "B"
      C = "C"
      D = "D"

    m(addP(3)) (squareP) (v => v-7)(dF3x).then(v => (A = v));
      await wait(1700)
     log("A", A); 
    m(v => v/42)(v => v + 5)(v=>v*7)(pause(600))(dF3x).then(v => (B = v));
      await wait(1700)
      log("B", B)
    m(addP(7))(Math.sqrt)(v => v*6)(hello)(dF3x).then(a => (C = a));
      await wait(3700)
      log("C", C);
    m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)); 
      await wait(3700)
      log("D", D);
    }



    restart();  




