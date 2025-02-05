

///////////////////////
// Utility Functions //
///////////////////////

function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

function routeDistance(cities, route) {
  // Sum distance between consecutive cities in the route
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += distance(cities[route[i]], cities[route[i + 1]]);
  }
  return dist;
}

////////////////////////
// Route Manipulation //
////////////////////////

function createRandomRoute(n) {
  // Create a route [0, 1, 2, ..., n-1] in random order
  const route = [];
  for (let i = 0; i < n; i++) {
    route.push(i);
  }
  // Fisher-Yates shuffle
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [route[i], route[j]] = [route[j], route[i]];
  }
  return route;
}

function randomSwap(route) {
  // Returns a new route that is the old route with two indices swapped
  const newRoute = route.slice();
  const i = Math.floor(Math.random() * route.length);
  const j = Math.floor(Math.random() * route.length);
  [newRoute[i], newRoute[j]] = [newRoute[j], newRoute[i]];
  return newRoute;
}

///////////////////////
// Main Optimization //
///////////////////////

function generateCities(n = 50) {
  // Generate 'n' random points in the 2D plane
  const cities = [];
  for (let i = 0; i < n; i++) {
    cities.push([Math.random() * 1000, Math.random() * 1000]);
  }
  return cities;
}

function main() {
  const nCities = 50;
  const cities = generateCities(nCities);
  let iterations = 100000;
  const acceptWorseProb = 0.001;
  
  // Create a random starting route and measure its distance
  let currentRoute = createRandomRoute(nCities);
  let currentDist = routeDistance(cities, currentRoute);
  
  // Keep track of the best route found
  let bestRoute = currentRoute.slice();
  let bestDist = currentDist;

  console.log("Initial route:", currentRoute);
  console.log("Initial distance:", currentDist.toFixed(2));

  for (let i = 0; i < iterations; i++) {
    // Propose a new route by swapping two indices
    const candidate = randomSwap(currentRoute);
    const candidateDist = routeDistance(cities, candidate);

    // If candidate is better, accept it
    if (candidateDist < currentDist) {
      currentRoute = candidate;
      currentDist = candidateDist;

      // If it is the best so far, record it
      if (candidateDist < bestDist) {
        bestDist = candidateDist;
        bestRoute = candidate.slice();
      }
    } else {
      // With some small probability, accept a worse solution
      if (Math.random() < acceptWorseProb) {
        currentRoute = candidate;
        currentDist = candidateDist;
      }
    }
  }

  console.log("Best route found:", bestRoute);
  console.log("Best route distance:", bestDist.toFixed(2));

  // Return final results if needed
  return { bestRoute, bestDistance: bestDist };
}

// Run the TSP approximation
main();