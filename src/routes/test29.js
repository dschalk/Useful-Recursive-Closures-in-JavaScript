

    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }
/**
 * 1. Generate N random cities (each is an object {x, y}).
 *    For simplicity, we'll place them in a 1000x1000 square.
 */
var k = 0;

var Cities = generateCities(12);
function generateCities(numCities) {
  const cities = [];
  for (let i = 0; i < numCities; i++) {
    cities.push({
      x: Math.random() * 1000,
      y: Math.random() * 1000
    });
  }
  return cities;
}

/**
 * 2. Compute Euclidean distance between two cities.
 */
function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx*dx + dy*dy);
}

/**
 * 3. Calculate the total distance of a route (array of indices).
 *    We include the distance back to the first city to "close the loop."
 */
function routeDistance(cities, route) {
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += distance(cities[route[i]], cities[route[i + 1]]);
  }
  // Return to starting city
  dist += distance(cities[route[route.length - 1]], cities[route[0]]);
  return dist;
}

/**
 * 4. Create a random route (simple permutation).
 */
function createRandomRoute(numCities) {
  const route = [];
  for (let i = 0; i < numCities; i++) {
    route.push(i);
  }
  // Shuffle (Fisher-Yates)
  for (let i = numCities - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [route[i], route[j]] = [route[j], route[i]];
  }
  log("The initial random route is", route);
  return route;
}

/**
 * 5. Swap two random positions in the route to create a new candidate route.
 */
function randomSwap(route) {
  const newRoute = route.slice();
  const i = Math.floor(Math.random() * route.length);
  const j = Math.floor(Math.random() * route.length);
  [newRoute[i], newRoute[j]] = [newRoute[j], newRoute[i]];
  return newRoute;
}

/**
 * 6. A basic probabilistic TSP solver.
 *    - We'll run for a fixed number of iterations.
 *    - If the new route is better, accept it.
 *    - If worse, accept with a small fixed probability (e.g., 0.1).
 */
function probabilisticTSPSolver(cities, iterations = 10000, acceptWorseProb = 0.1) {
  // Start with a random route
  let currentRoute = createRandomRoute(cities.length);
  let bestRoute = currentRoute.slice();

  let currentDist = routeDistance(cities, currentRoute);
  log("Initial random distance", currentDist);
  let bestDist = currentDist;

  for (let i = 0; i < iterations; i++) {
    k+=1;
    const candidate = randomSwap(currentRoute);
    const candidateDist = routeDistance(cities, candidate);
    log(k, "candidateDist", candidateDist);
    if (candidateDist < currentDist) {
      // If it's strictly better, take it
      currentRoute = candidate;
      currentDist = candidateDist;
      // Update best if needed
      if (currentDist < bestDist) {
        bestDist = currentDist;
        bestRoute = currentRoute.slice();
      }
    } else {
      // If it's worse, accept it with some small probability
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
  // Let's try with 50 cities to keep it quick. (Try 400 if you like!)
  const cities = generateCities(20);
  
  // Number of iterations. Increase for bigger problems or deeper search.
  const iterations = 1000;
  
  // Probability of accepting a worse route
  const acceptWorseProb = 0.01;

  const result = probabilisticTSPSolver(cities, iterations, acceptWorseProb);

  console.log("Best route found:", result.bestRoute);
  console.log("Best route distance:", result.bestDistance.toFixed(2));
})();
