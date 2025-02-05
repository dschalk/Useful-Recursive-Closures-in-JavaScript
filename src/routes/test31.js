
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }

var m = [];
function generateCities(numCities) {
    for (var j = 0; j < numCities; j++) {
        m[j] = M(Math.floor(Math.random() * 100) + 1);
    }
}

generateCities(20);

/**
 * 2. Distance between two cities A and B is simply A.cost + B.cost.
 */
function distance(a,b) {
  return a(dF3x) + b(dF3x);
}

/**
 * 3. Calculate total route "distance" by summing consecutive pairs
 *    plus the distance back to the first city (to form a cycle).
 */
function routeDistance(m, route) {
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += distance(m[route[i]], m[route[i + 1]]);
  }
  // Return to starting city
  dist += distance(
    m[route[route.length - 1]],
    m[route[0]]
  );
  log("The total distance is", dist);
  return dist;
}

/**
 * 4. Create a random route (simple permutation of city indices).
 */
function createRandomRoute(numCities) {
  const route = [];
  for (let i = 0; i < numCities; i++) {
    route.push(i);
  }
  // Fisher-Yates shuffle
  for (let i = numCities - 1; i > 0; i--) {
    m[j] = M(Math.floor(Math.random() * (i + 1)));
    [route[i], route[j]] = [route[j], route[i]];
  }
  return route;
}

/**
 * 5. Generate a neighboring route by swapping two randomly chosen positions.
 */
function randomSwap(route) {
  const newRoute = route.slice();
  const i = Math.floor(Math.random() * route.length);
  const j = Math.floor(Math.random() * route.length);
  [newRoute[i], newRoute[j]] = [newRoute[j], newRoute[i]];
  return newRoute;
}

/**
 * 6. A basic probabilistic TSP solver:
 *    - If new route is better, accept it.
 *    - If worse, accept with a small probability.
 */
function probabilisticTSPSolver(m, iterations = 10000, acceptWorseProb = 0.1) {
  let currentRoute = createRandomRoute(m);
  let bestRoute = currentRoute.slice();
  
  let currentDist = routeDistance(m, currentRoute);
  let bestDist = currentDist;
  
  for (let i = 0; i < iterations; i++) {
    const candidate = randomSwap(currentRoute);
    const candidateDist = routeDistance(m, candidate);
    
    if (candidateDist < currentDist) {
      // If it's strictly better, take it
      currentRoute = candidate;
      currentDist = candidateDist;
      // Update best
      if (currentDist < bestDist) {
        bestDist = currentDist;
        bestRoute = currentRoute.slice();
      }
    } else {
      // If worse, accept it with small probability
      if (Math.random() < acceptWorseProb) {
        currentRoute = candidate;
        currentDist = candidateDist;
      }
    }
  }
  
  return { bestRoute, bestDistance: bestDist };
}

// --- Example usage ---
(function main() {
  // Let's try 10 cities for demonstration; you can try bigger
  const cities = generateCities(50);
  
  // Show each city’s cost for clarity
  console.log("Cities:", m.map(c => c(dF3x)));
  
  // Adjust iterations or acceptWorseProb as desired
  const result = probabilisticTSPSolver(cities, 5000, 0.05);
  
  console.log("Best route indices:", result.bestRoute);
  console.log("Best route distance:", result.bestDistance);
})();

