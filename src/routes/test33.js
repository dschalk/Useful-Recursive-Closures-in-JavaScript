

<script>

// BACKUP OF ANNEALING FILE</script>

  let cities = [];
  let numCities = 6; // Number of cities
  let stepDelay = 500; // Delay between steps (ms)

  // State variables
  let bestRoute = [];
  let bestDistance = 100000;
  let bestDist = 100000
  let stages = []; // To store each stage of the solution
  let explanation = "Click 'Start Simulation' to begin.";

  // Generate random cities
  function generateCities(n) {
    return Array.from({ length: n }, (_, i) => ({
      name: String.fromCharCode(65 + i), // A, B, C, ...
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    }));
  }

  // Calculate distance between two cities
  function distance(city1, city2) {
    const dx = city1.x - city2.x;
    const dy = city1.y - city2.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  // Calculate total distance of a route
  function totalDistance(route) {
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
      dist += distance(route[i], route[i + 1]);
    }
    dist += distance(route[route.length - 1], route[0]); // Return to start
    return dist;
  }

  // Generate random routes
  function generateRandomRoutes(cities, count) {
    const routes = new Set();
    while (routes.size < count) {
      const shuffled = [...cities];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      routes.add(JSON.stringify(shuffled)); // Use JSON to ensure uniqueness
    }
    return Array.from(routes).map((route) => JSON.parse(route));
  }

  // Find shortest route among all
  async function findShortestRoute(allRoutes) {
    for (let i = 0; i < allRoutes.length; i++) {
      const currentRoute = allRoutes[i];
      const currentDistance = totalDistance(currentRoute);

      // Check if this route is the best so far
      if (currentDistance < bestDistance) {
        bestDistance = currentDistance;
        bestRoute = [...currentRoute];
      }

      // Save the current stage
      stages = [...stages, { route: [...currentRoute], distance: currentDistance }];

      // Add a delay for visualization
      await new Promise((resolve) => setTimeout(resolve, stepDelay));
    }
  }

  // Start simulation
  async function startSimulation() {
    explanation = "Finding the shortest route...";
    stages = [];
    bestRoute = [];
    bestDistance = Infinity;

    // Generate cities
    cities = generateCities(numCities);

    // Generate random routes
    const allRoutes = generateRandomRoutes(cities, 50);

    // Find the shortest route
    await findShortestRoute(allRoutes);

    // Update explanation
    explanation = "Simulation complete! Shortest route found with distance: ${bestDistance.toFixed(2)}";
  }

var test32Code = `


/***************************************************
 * 1) M(x) for storing [x, y] coordinates in anonymous closures
 ***************************************************/
const dF3x = () => {};

function M(coords) {
  return function go(func) {
    if (func === dF3x) {
      return coords; // return the [x, y] array
    } else {
      coords = func(coords);
      return go;
    }
  };
}

/***************************************************
 * 2) This time, m is an array of nameless closures in M. m[3], for example, is anonther example of an m-M(x) closure, where m is m[3] and x is [7,13].  
 ***************************************************/

const m = [
  M([2, 10]),
  M([9, 17]),
  M([15, 5]),
  M([7, 13]),
  M([20, 3]),
  M([3, 25]),
  M([11, 8]),
  M([4, 2]),
  M([17, 15]),
  M([6, 20]),
  M([23, 5]),
  M([10, 17]),
  M([5, 15]),
  M([17, 3]),
  M([20, 13]),
  M([13, 25]),
  M([11, 8]),
  M([14, 2]),
  M([9, 15]),
  M([12, 23])
];

/***************************************************
 * 3) Euclidean distance between two city-closures
 ***************************************************/
function euclideanDistance(cityA, cityB) {
  const [xA, yA] = cityA(dF3x);
  const [xB, yB] = cityB(dF3x);
  const dx = xA - xB;
  const dy = yA - yB;
  return Math.sqrt(dx * dx + dy * dy);
}

/***************************************************
 * 4) Calculate total distance of a route, cyclical
 ***************************************************/
function routeDistance(closures, route) {
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += euclideanDistance(
      closures[route[i]],
      closures[route[i + 1]]
    );
  }
  // Return to the start city
  dist += euclideanDistance(
    closures[route[route.length - 1]],
    closures[route[0]]
  );
  return dist;
}

/***************************************************
 * 5) Create a random route (Fisher-Yates shuffle)
 ***************************************************/
function createRandomRoute(numCities) {
  const route = [];
  for (let i = 0; i < numCities; i++) {
    route.push(i);
  }
  for (let i = numCities - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [route[i], route[j]] = [route[j], route[i]];
  }
  console.log("New starting route", route);
  return route;
}

/***************************************************
 * 6) Random neighbor route by swapping two positions
 ***************************************************/
function randomSwap(route) {
  const newRoute = route.slice();
  const i = Math.floor(Math.random() * newRoute.length);
  const j = Math.floor(Math.random() * newRoute.length);
  [newRoute[i], newRoute[j]] = [newRoute[j], newRoute[i]];
  return newRoute;
}

/***************************************************
 * 7) Probabilistic TSP solver WITH LOGGING
 *    - Logs each iteration's candidate & acceptance
 ***************************************************/
function probabilisticTSPSolver(
  closures,
  iterations = 10000,         // Fewer iterations for demonstration
  acceptWorseProb = 0.05
) {
  // 1) Start with a random route
  let currentRoute = createRandomRoute(closures.length);
  let bestRoute = currentRoute.slice();

  let currentDist = routeDistance(closures, currentRoute);
  let bestDist = currentDist;

  console.log("Initial route:", currentRoute);
  console.log("Initial distance:", currentDist.toFixed(2));

  // 2) Main loop
  for (let i = 0; i < iterations; i++) {
    // Generate a candidate by swapping
    const candidateRoute = randomSwap(currentRoute);
    const candidateDist = routeDistance(closures, candidateRoute);

      if (candidateDist < currentDist) {
      // If better, accept
      currentRoute = candidateRoute;
      currentDist = candidateDist;

      // Update global best
      if (candidateDist < bestDist) {
        bestDist = candidateDist;
        bestRoute = currentRoute.slice();
        // console.log("→ New BEST distance: ${bestDist.toFixed(2)}!");
      }
    } else {
      // If worse, maybe accept
      if (Math.random() < acceptWorseProb) {
        currentRoute = candidateRoute;
        currentDist = candidateDist;
        /* console.log(
          "→ Accepted (worse) with prob ${acceptWorseProb}. " +
          "CurrentDist now ${currentDist.toFixed(2)}"
        );*/
      } else {
        // console.log("→ Rejected (worse). CurrentDist remains ${currentDist.toFixed(2)}");
      }
    }
  }

  console.log("\nFinal best route:", bestRoute);
  console.log("Final best distance:", bestDist.toFixed(2));

  return { bestRoute, bestDistance: bestDist };
}

console.log("Cities (closures):", m.map(c => c(dF3x)));
const result = probabilisticTSPSolver(m, 4000, 0.1); `

var test32 = `p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
  16, 13,  8, 14,  9,  2, 0,
  15, 10,  3, 18,  1, 12, 7,
   6,  4, 17, 19, 11,  5
]
Initial route: [
  16, 13,  8, 14,  9,  2, 0,
  15, 10,  3, 18,  1, 12, 7,
   6,  4, 17, 19, 11,  5
]
Initial distance: 234.11

Final best route: [
  14, 10, 18,  3, 5, 9, 19,
  15, 11,  1, 16, 7, 0, 12,
   6, 17,  4, 13, 2, 8
]
Final best distance: 139.70
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
   4, 9,  1, 13, 12,  7, 15,
   2, 5,  0,  8, 11, 10, 16,
  18, 3, 17, 14,  6, 19
]
Initial route: [
   4, 9,  1, 13, 12,  7, 15,
   2, 5,  0,  8, 11, 10, 16,
  18, 3, 17, 14,  6, 19
]
Initial distance: 291.25

Final best route: [
   3,  8, 16,  7,  0, 12,  5,
  19, 15,  9, 11, 14, 10, 13,
   4,  2, 17,  6, 18,  1
]
Final best distance: 135.62
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
  11,  0, 17, 4, 16, 18,  8,
  15,  2,  1, 9, 19,  5, 13,
   6, 12,  3, 7, 14, 10
]
Initial route: [
  11,  0, 17, 4, 16, 18,  8,
  15,  2,  1, 9, 19,  5, 13,
   6, 12,  3, 7, 14, 10
]
Initial distance: 224.16

Final best route: [
  17,  4, 10, 13,  2, 16,  7,
   0, 12,  3, 18,  6,  8, 19,
  15,  1,  5,  9, 11, 14
]
Final best distance: 134.04
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
   8,  2,  4, 15,  6, 19, 17,
  18,  5, 11,  0, 10, 16,  1,
   9, 14, 12,  3, 13,  7
]
Initial route: [
   8,  2,  4, 15,  6, 19, 17,
  18,  5, 11,  0, 10, 16,  1,
   9, 14, 12,  3, 13,  7
]
Initial distance: 265.36

Final best route: [
   0,  5, 9, 18,  8, 14, 11,
  19, 15, 1,  7, 17, 10,  4,
  13,  2, 6, 16, 12,  3
]
Final best distance: 134.19
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],  
<script>
    import { onMount } from 'svelte';

    let number = '';
    let largestPrime = null;
    let worker;

    onMount(() => {
        worker = new Worker('/workers/prime-worker.js');

        worker.onmessage = (event) => {
            largestPrime = event.data;
        };

        return () => {
            worker.terminate();
        };
    });

 ction findPrime() {
        const num = parseInt(number, 10);
        if (!isNaN(num)) {
            worker.postMessage(num);
        } else {
            largestPrime = null;
        }
    }
`





    import {fade} from "svelte/transition"
    
    var worker = new Worker("/worker.js");

  let number = 100;
  let largestPrime = 97;

  // const worker = new Worker('/src/lib/worker.js');

  function calculatePrime() {
    worker.postMessage(number); 

    worker.onmessage = (event) => {
      largestPrime = event.data;
    };
  }
 
    var dF3x = () => {}; 
    
 function M (x) {
      x = idP(x);
      return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
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
        x = idP(x);
        return function go (func){
            if (func === dF3x) return x;
            else x = x.then(v => func(v));
            return go;
        };
    };
    
    const m = M(3); `;

    var dF3x = () => {}; 

function M (x) {
    x = idP(x);-->
    return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
        return go;
    };
};

const m = M(3); 
    var A;

    async function squareP (x) {  
<script>
    import { onMount } from 'svelte';

    let number = '';
    let largestPrime = null;
    let worker;

    onMount(() => {
        worker = new Worker('/workers/prime-worker.js');

        worker.onmessage = (event) => {
            largestPrime = event.data;
        };

        return () => {
            worker.terminate();
        };
    });

 ction findPrime() {
        const num = parseInt(number, 10);
        if (!isNaN(num)) {
            worker.postMessage(num);
        } else {
            largestPrime = null;
        }
    }
`





    import {fade} from "svelte/transition"
    
    var worker = new Worker("/worker.js");

  let number = 100;
  let largestPrime = 97;

  // const worker = new Worker('/src/lib/worker.js');

  function calculatePrime() {
    worker.postMessage(number); 

    worker.onmessage = (event) => {
      largestPrime = event.data;
    };
  }
 
    var dF3x = () => {}; 
    
 function M (x) {
      x = idP(x);
      return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
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
    }`
    
        var Mcode = `    var dF3x = () => {}; 

    function M (x) {
        x = idP(x);
        return function go (func){
            if (func === dF3x) return x;
            else x = x.then(v => func(v));
            return go;
        };
    };
    
    const m = M(3); `;

    var dF3x = () => {}; 

function M (x) {
    x = idP(x);-->
    return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
        return go;
    };
};

const m = M(3); 
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
    };
    
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
<script>
    import { onMount } from 'svelte';

    let number = '';
    let largestPrime = null;
    let worker;

    onMount(() => {
        worker = new Worker('/workers/prime-worker.js');

        worker.onmessage = (event) => {
            largestPrime = event.data;
        };

        return () => {
            worker.terminate();
        };
    });

 ction findPrime() {
        const num = parseInt(number, 10);
        if (!isNaN(num)) {
            worker.postMessage(num);
        } else {
            largestPrime = null;
        }
    }
`





    import {fade} from "svelte/transition"
    
    var worker = new Worker("/worker.js");

  let number = 100;
  let largestPrime = 97;

  // const worker = new Worker('/src/lib/worker.js');

  function calculatePrime() {
    worker.postMessage(number); 

    worker.onmessage = (event) => {
      largestPrime = event.data;
    };
  }
 
    var dF3x = () => {}; 
    
 function M (x) {
      x = idP(x);
      return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
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
    }`
    
        var Mcode = `    var dF3x = () => {}; 

    function M (x) {
        x = idP(x);
        return function go (func){
            if (func === dF3x) return x;
            else x = x.then(v => func(v));
            return go;
        };
    };
    
    const m = M(3); `;

    var dF3x = () => {}; 

function M (x) {
    x = idP(x);-->
    return function go (func){
        if (func === dF3x) return x;
        else x = x.then(v => func(v));
        return go;
    };
};

const m = M(3); 
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
    };
    
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
var log = console.log  let bestDistance = 10000000;;


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
    var z = generator.next().value;
    console.log("z is", z);
    if (z != undefined) G = z
    else G = '';
}
let bestDistance = 10000000;
  }
cow();
console.log("Fuck you")

</script>

<h1>Find the Largest Prime</h1>
<form on:submit|preventDefault={findPrime}>
    <label for="number">Enter a number:</label>
    <input id="number" bind:value={number} type="number" min="2" />
    <button type="submit">Find</button>
</form>

{#if largestPrime !== null}
    <p>The largest prime number less than {number} is {largestPrime}.</p>
{:else if largestPrime === null && number !== ''}
    <p>Calculating...</p>
{/if}

svelte:window on:keypress={handleEvent} />

<p> Using the modified version of M below, m can handle mixtures of synchronous and asynchronous arguments. idP(a) has no effect if a is a promise. Otherwise, idP transforms a into a promise. To see this in action, click "Restart" (below).</p>
<pre>{Mcode}</pre>  let bestDistance = 10000000;

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


<br><br><br>
<br><br><br>


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

<h1>Find the Largest Prime</h1>
<form on:submit|preventDefault={findPrime}>
    <label for="number">Enter a number:</label>
    <input id="number" bind:value={number} type="number" min="2" />
    <button type="submit">Find</button>
</form>

{#if largestPrime !== null}
    <p>The largest prime number less than {number} is {largestPrime}.</p>
{:else if largestPrime === null && number !== ''}
    <p>Calculating...</p>
{/if}

svelte:window on:keypress={handleEvent} />

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


<br><br><br>
<br><br><br>


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
    };
    
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

<h1>Find the Largest Prime</h1>
<form on:submit|preventDefault={findPrime}>
    <label for="number">Enter a number:</label>
    <input id="number" bind:value={number} type="number" min="2" />
    <button type="submit">Find</button>
</form>

{#if largestPrime !== null}
    <p>The largest prime number less than {number} is {largestPrime}.</p>
{:else if largestPrime === null && number !== ''}
    <p>Calculating...</p>
{/if}

svelte:window on:keypress={handleEvent} />

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
<br><br  let bestDistance = 10000000;>
<span style="color:#FAF">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m(divP(14))(v => v * 3)(addP(5))(v=> v * 3)(dF3x).then(v => (D = v)) = <span style = "font-weight: bold; color:red">{D}</span> </span> <span> &nbsp; &nbsp; // &nbsp;((42 / 14) * 3 + 5) * 3 = 42</span>

<p> The asynchronous functions used above are in this list:</p>
<pre>{functionCode}</pre>

<p> Here's the restart code: </p>
<pre>{restartCode}</pre>


<br><br><br>
<br><br><br>


  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
  12, 3,  7,  0, 15, 14, 19,
   9, 8,  4, 10, 16,  2,  6,
  18, 5, 17, 13, 11,  1
]
Initial route: [
  12, 3,  7,  0, 15, 14, 19,
   9, 8,  4, 10, 16,  2,  6,
  18, 5, 17, 13, 11,  1
]
Initial distance: 193.64

Final best route: [
  9, 15, 19,  5, 12, 3, 0,
  7, 14,  8, 18, 11, 6, 2,
  4, 10, 17, 13, 16, 1
]
Final best distance: 137.39
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
   6,  3, 15,  9,  0, 17,  8,
   1, 10,  7, 14,  4,  2, 12,
  13, 19, 11,  5, 18, 16
]
Initial route: [
   6,  3, 15,  9,  0, 17,  8,
   1, 10,  7, 14,  4,  2, 12,
  13, 19, 11,  5, 18, 16
]
Initial distance: 235.30

Final best route: [
   6, 16, 3, 18, 11, 1,  9,
  19, 15, 5,  0, 12, 7, 17,
   2, 13, 4, 10, 14, 8
]
Final best distance: 113.52
p@p:~/monad/Useful-Recursive-Closures-in-JavaScript/src/routes$ node test32.js
Cities (closures): [
  [ 2, 10 ],  [ 9, 17 ],
  [ 15, 5 ],  [ 7, 13 ],
  [ 20, 3 ],  [ 3, 25 ],
  [ 11, 8 ],  [ 4, 2 ],
  [ 17, 15 ], [ 6, 20 ],
  [ 23, 5 ],  [ 10, 17 ],
  [ 5, 15 ],  [ 17, 3 ],
  [ 20, 13 ], [ 13, 25 ],
  [ 11, 8 ],  [ 14, 2 ],
  [ 9, 15 ],  [ 12, 23 ]
]
New starting route [
  10, 17, 18, 11,  2,  4,  0,
  14,  8,  5,  7,  3, 16, 19,
   6,  1, 12,  9, 13, 15
]
Initial route: [
  10, 17, 18, 11,  2,  4,  0,
  14,  8,  5,  7,  3, 16, 19,
   6,  1, 12,  9, 13, 15
]
Initial distance: 257.06

Final best route: [
   6,  3,  1, 11, 5,  9, 12,
  18, 19, 15,  0, 7, 16,  8,
  14,  2, 17, 13, 4, 10
]
Final best distance: 131.84
`
</script>


<h1>Traveling Salesman Problem Solver</h1>
<p>{explanation}</p>
<!--
<div>
  <label>Number of Cities: <input type="number" bind:value={numCities} min="3" max="10" /></label>
  <label>Step Delay (ms): <input type="number" bind:value={stepDelay} min="100" /></label>
  <button on:click={startSimulation}>Start Simulation</button>
</div>
-->
<!--<div>
  <h2>Stages</h2>
  {#each stages as stage, index}
    <h3>Stage {index + 1}</h3>
    <svg width="400" height="400">
      {#each stage.route as city, i}
        <circle cx="{city.x * 3}" cy="{city.y * 3}" r="5" fill="cyan" />
        <text x="{city.x * 3 + 10}" y="{city.y * 3 + 5}" fill="white">{city.name}</text>

        {#if i < stage.route.length - 1}
          <line
            x1="{city.x * 3}"
            y1="{city.y * 3}"
            x2="{stage.route[i + 1].x * 3}"
            y2="{stage.route[i + 1].y * 3}"
            stroke={stage.distance === bestDistance ? "red" : "gray"}
            stroke-width={stage.distance === bestDistance ? 2 : 1}
          />
        {/if}
        {#if i === stage.route.length - 1}
          <line
            x1="{city.x * 3}"
            y1="{city.y * 3}"
            x2="{stage.route[0].x * 3}"
            y2="{stage.route[0].y * 3}"
            stroke={stage.distance === bestDistance ? "red" : "gray"}
            stroke-width={stage.distance === bestDistance ? 2 : 1}
          />
        {/if}
      {/each}
    </svg>
    <p><strong>Route:</strong> {stage.route.map((c) => c.name).join(" → ")}</p>
    <p><strong>Distance:</strong> {stage.distance.toFixed(2)}</p>
  {/each}
</div>

<div>
  <h2>Solution</h2>
  <svg width="400" height="400">
    {#each bestRoute as city, i}
      <circle cx="{city.x * 3}" cy="{city.y * 3}" r="5" fill="red" />
      <text x="{city.x * 3 + 10}" y="{city.y * 3 + 5}" fill="white">{city.name}</text>

      {#if i < bestRoute.length - 1}
        <line
          x1="{city.x * 3}"
          y1="{city.y * 3}"
          x2="{bestRoute[i + 1].x * 3}"
          y2="{bestRoute[i + 1].y * 3}"
          stroke="red"
          stroke-width="2"
        />
      {/if}
      {#if i === bestRoute.length - 1}
        <line
          x1="{city.x * 3}"
          y1="{city.y * 3}"
          x2="{bestRoute[0].x * 3}"
          y2="{bestRoute[0].y * 3}"
          stroke="red"
          stroke-width="2"
        />
      {/if}
    {/each}
  </svg>
  <p><strong>Route:</strong> {bestRoute.map((c) => c.name).join(" → ")}</p>
  <p><strong>Distance:</strong> {bestDistance.toFixed(2)}</p>
</div>

<pre>{test32}</pre>   -->

