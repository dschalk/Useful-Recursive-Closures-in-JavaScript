
/***************************************************
 * 1) Sentinel & M(x) for storing [x, y] in a closure
 ***************************************************/
const dF3x = () => {};

function M (x),
  return function go(func) {
    if (func === dF3x) {
      return x; // return the [x, y] array
    } else {
      x= func(x);
      return go;
    }
  };
}

/***************************************************
 * 2) In the m-M(x) closure, x is array of [x, y] coodinates.
 ***************************************************/

const m = M([
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
  M([12, 23]),
  M([23, 35]),
  M([10, 37]),
  M([5, 35]),
  M([17, 33]),
  M([20, 33]),
  M([13, 45]),
  M([11, 38]),
  M([14, 32]),
  M([9, 35]),
  M([12, 43])
]);
 
/***************************************************
 * 3) Euclidean distance between two city-closures
 ***************************************************/
function distance (A,B) {
  return Math.sqrt(A[0] * B[0] + A[1] * B[1]);
};

/***************************************************
 * 4) Calculate total distance of a route, cyclical
 ***************************************************/
function routeDistance(closures, route) {
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += distance(
      closures[route[i]],
      closures[route[i + 1]]
    );
  }
  // Return to the start city
  dist += distance(
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

    /* Log the candidate for debugging
    console.log(
      `Iteration ${i}, Candidate route: ${candidateRoute}, ` +
      `Candidate dist: ${candidateDist.toFixed(2)}`
    );*/

    if (candidateDist < currentDist) {
      // If better, accept
      currentRoute = candidateRoute;
      currentDist = candidateDist;
      // console.log(`→ Accepted (better). CurrentDist now ${currentDist.toFixed(2)}`);

      // Update global best
      if (candidateDist < bestDist) {
        bestDist = candidateDist;
        bestRoute = currentRoute.slice();
        // console.log(`→ New BEST distance: ${bestDist.toFixed(2)}!`);
      }
    } else {
      // If worse, maybe accept
      if (Math.random() < acceptWorseProb) {
        currentRoute = candidateRoute;
        currentDist = candidateDist;
        /* console.log(
          `→ Accepted (worse) with prob ${acceptWorseProb}. ` +
          `CurrentDist now ${currentDist.toFixed(2)}`
        );*/
      } else {
        // console.log(`→ Rejected (worse). CurrentDist remains ${currentDist.toFixed(2)}`);
      }
    }
  }

  console.log("\nFinal best route:", bestRoute);
  console.log("Final best distance:", bestDist.toFixed(2));

  return { bestRoute, bestDistance: bestDist };
}

// console.log("Cities (closures):", m.map(c => c(dF3x)));
const result = probabilisticTSPSolver(m, 4000, 0.1); 

