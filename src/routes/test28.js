
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }
/*
    let m = M(25);
    let m2 = M(9);

    m (()=>(m(dF3x)*m2(dF3x)))(Math.sqrt);
    log(m(dF3x));
*/

/****************************************************
 * A Simple Simulated Annealing TSP in JavaScript
 ****************************************************/

// 1. Generate a set of random cities (each city is an {x, y} object).
var k = 1;
function generateRandomCities(numCities, width = 500, height = 500) {
  const cities = [];
  for (let i = 0; i < numCities; i++) {
    cities.push({
      x: Math.random() * width,
      y: Math.random() * height
    });
  }
  log("cities", cities);
  return cities;
}

// 2. Calculate the Euclidean distance between two cities.
function distance(cityA, cityB) {
  const dx = cityA.x - cityB.x;
  const dy = cityA.y - cityB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// 3. Calculate the total distance of a given route (array of city indices).
function totalDistance(cities, route) {
  let dist = 0;
  for (let i = 0; i < route.length - 1; i++) {
    dist += distance(cities[route[i]], cities[route[i + 1]]);
  }
  // Add distance back to the starting city to make a cycle
  dist += distance(cities[route[route.length - 1]], cities[route[0]]);
  return dist;
}

// 4. Create a random route (permutation of city indices).
function createRandomRoute(numCities) {
  const route = [];
  for (let i = 0; i < numCities; i++) {
    route.push(i);
  }
  // Shuffle using Fisher-Yates
  for (let i = numCities - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [route[i], route[j]] = [route[j], route[i]];
  }
  return route;
}

// 5. Generate a neighbor by swapping two cities in the route.
function swapTwoCities(route) {
  const newRoute = route.slice();
  const i = Math.floor(Math.random() * newRoute.length);
  const j = Math.floor(Math.random() * newRoute.length);
  [newRoute[i], newRoute[j]] = [newRoute[j], newRoute[i]];
  return newRoute;
}
 ``
// 6. Simulated Annealing TSP
function simulatedAnnealingTSP(cities, initialTemp, coolingRate, iterationsPerTemp) {
  // Start with a random route
  let currentRoute = createRandomRoute(cities.length);
  let bestRoute = currentRoute.slice();

  let currentDistance = totalDistance(cities, currentRoute);
  let bestDistance = currentDistance;

  let temperature = initialTemp;
  // Cooling loop
  /* while (temperature > 1e-6) {
    // log("The temperature is", temperature);
    // Repeat a certain number of times for each temperature
    for (let i = 0; i < iterationsPerTemp; i++) {
      // Generate a neighbor by swapping two cities
      k+=1; */
      for(let j = 0; j < 500; j+=1) {
        k+=1;
      var newRoute = swapTwoCities(currentRoute);
      
      log("k is", k);
      log("The newRoute is", newRoute);
      const newDistance = totalDistance(cities, newRoute);
      log("The newDistance is", newDistance);
      const distanceDiff = newDistance - currentDistance;

      // If the new route is better, accept
      // If worse, accept with some probability
      if (distanceDiff < 0) {
        currentRoute = newRoute;
        currentDistance = newDistance;
        // Update best if we found a new global best
        if (currentDistance < bestDistance) {
          bestDistance = currentDistance;
          bestRoute = currentRoute.slice();
        }
      } else {
        // Accept with probability e^(-distanceDiff / temperature)
        const acceptanceProb = Math.exp(-distanceDiff / temperature);
        if (Math.random() < acceptanceProb) {
          currentRoute = newRoute;
          currentDistance = newDistance;
        }
      }
    
    }
  return { bestRoute, bestDistance };
}

// Example usage:
(function runExample() {
  const numCities = 12;
  const cities = generateRandomCities(numCities);

  const initialTemp = 1000;  // Starting "heat"
  const coolingRate = 0.75;  // Multiplier to reduce temperature
  const iterationsPerTemp = 100; // Iterations per temperature level

  const result = simulatedAnnealingTSP(cities, initialTemp, coolingRate, iterationsPerTemp);
k+=1;
  console.log(k, "Best Route Found:", result.bestRoute);
  console.log(k, "Best Distance:", result.bestDistance.toFixed(2));
})();






