function randomizeCities() {
    return () => {
      const newCities = [];
      for (let i = 0; i < 50; i++) {
        newCities.push([Math.random() * 1000, Math.random() * 1000]);
      }
      return newCities;
    };
  }
  
function tsp(cities) {
  // Calculate the distance between two cities
  function distance(city1, city2) {
    const dx = city1.x - city2.x;
    const dy = city1.y - city2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Generate all possible permutations of cities
  function permutations(arr) {
    if (arr.length === 0) return [[]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = permutations(rest);
      for (const perm of perms) {
        result.push([el, ...perm]);
      }
    }
    return result;
  }

  // Find the shortest route using brute force
  let shortestRoute = null;
  let shortestDistance = Infinity;
  const allPermutations = permutations(cities);
  for (const perm of allPermutations) {
    let totalDistance = 0;
    for (let i = 0; i < perm.length - 1; i++) {
      totalDistance += distance(perm[i], perm[i + 1]);
    }
    totalDistance += distance(perm[perm.length - 1], perm[0]); // Return to starting city
    if (totalDistance < shortestDistance) {
      shortestRoute = perm;
      shortestDistance = totalDistance;
    }
  }

  return shortestRoute;
}

// Example usage
const cities 

const shortestRoute = tsp(cities);
console.log(shortestRoute);