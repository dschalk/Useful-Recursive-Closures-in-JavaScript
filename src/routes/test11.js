
 

  // Initial state
  var log = console.log;

  import { onMount } from 'svelte';

  const dF3x = Symbol('dF3x');

  function M (x) {
    return function go (func)
      {
          if (func === dF3x) return x;
          else x = func(x);
          return go;
      }
  }

// Update m initialization too
var m = M(Array.from({ length: 50 }, () => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
  })));

  var bestPath;
  var beforeDistance;
  var afterDistance;
  var improved;
  var step;
  var lastChange;
  var penultimatePath;
  function pathDistance () {
    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const cityA = cities[path[i]];
      const cityB = cities[path[i + 1]];
      distance += Math.sqrt(
        Math.pow(cityB.x - cityA.x, 2) + Math.pow(cityB.y - cityA.y, 2)
      );
    }
    return distance;
  };
  var A = m(dF3x);

const generateCities = () => {
  return Array.from({ length: 50 }, () => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
  }))}

  function reset() {
    return Array.from({ length: 50 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
    }))};
    
  var A = m(dF3x);
  const newCities = m(() =>reset())(dF3x);
    
  const newPath = Array.from({ length: newCities.length }, (_, i) => i);
  log("newPath", newPath);

  const initialDistance = pathDistance(newPath, newCities);
  

  A = m(dF3x);
  drawBefore(A.bestPath);
};
const solveTSP = (m) => {
  m((state) => {
    if (!state.improved) {
      return state;
    }
    let improved = false;
    const currentPath = [...state.bestPath];
    const currentDistance = pathDistance(currentPath, state.cities);
    for (let i = 1; i < currentPath.length - 1; i++) {
      for (let j = i + 1; j < currentPath.length; j++) {
        const newPath = [...currentPath];
        const segment = newPath.slice(i, j + 1).reverse();
        newPath.splice(i, segment.length, ...segment);
        const newDistance = pathDistance(newPath, state.cities);
        if (newDistance < currentDistance) {
          return {
            ...state,
            bestPath: newPath,
            afterDistance: newDistance,
            improved: true,
            step: state.step + 1,
            lastChange: { start: i, end: j }  // Make sure this is included
          };
        }
      }
    }
    
    return {
      ...state,
      improved: false,
      lastChange: { start: -1, end: -1 }
    };
  });
  A = m(dF3x);
  // Add console.log to debug
  console.log('Current state:', A);
  drawAfter(A.cities, A.bestPath, A.lastChange);  // Make sure lastChange is passed
};

    const after = m(dF3x);
    console.log('After optimization:', {
      distance: after.afterDistance,
      improved: after.improved
    });
  function pathDistance() {
    if (!path || !cities || path.length < 2 || cities.length < 2) return 0;
    
    let totalDistance = 0;
    try {
      for (let i = 0; i < path.length - 1; i++) {
        totalDistance += distance(cities[path[i]], cities[path[i + 1]]);
      }
      totalDistance += distance(cities[path[path.length - 1]], cities[path[0]]);
    } catch (error) {
      console.error('Error calculating path distance:', error);
      return 0;
    }
    return totalDistance;
  }
  function distance(city1, city2) {
    return Math.sqrt((city1.x - city2.x) ** 2 + (city1.y - city2.y) ** 2);
  }
  function drawBefore(path) {
    if (!beforeCanvas || !A.cities) return;
    try {
      const ctx = beforeCanvas.getContext('2d');
      ctx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);
      
      // Draw cities
      ctx.fillStyle = 'blue';
      A.cities.forEach((city) => {
        ctx.beginPath();
        ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });
      // Draw path
      if (path && path.length) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(A.cities[path[0]].x, A.cities[path[0]].y);
        path.forEach((index) => {
          const city = A.cities[index];
          ctx.lineTo(city.x, city.y);
        });
        ctx.lineTo(A.cities[path[0]].x, A.cities[path[0]].y);
        ctx.stroke();
      }
    } catch (error) {
      console.error('Error drawing before canvas:', error);
    }
  }
function drawAfter(cities, path, lastChange) {
  if (!afterCanvas) return;
  const ctx = afterCanvas.getContext('2d');
  ctx.clearRect(0, 0, afterCanvas.width, afterCanvas.height);
  
  // Draw path
  if (path && path.length) {
    // First draw the CHANGED segments if they exist
    if (lastChange && lastChange.start >= 0 && lastChange.end >= 0) {
      // Draw original segment (before reversal) in bright cyan
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 6;  // Even thicker
      ctx.beginPath();
      ctx.moveTo(cities[path[lastChange.start]].x, cities[path[lastChange.start]].y);
      for (let i = lastChange.start + 1; i <= lastChange.end; i++) {
        ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
      }
      ctx.stroke();
      // Draw new segment (after reversal) in bright gold
      ctx.strokeStyle = '#FFD700';  // Bright gold
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(cities[path[lastChange.start]].x, cities[path[lastChange.start]].y);
      for (let i = lastChange.end; i >= lastChange.start; i--) {
        ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
      }
      ctx.stroke();
    }
    // Then draw the main path in red
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
    path.forEach(index => {
      ctx.lineTo(cities[index].x, cities[index].y);
    });
    ctx.lineTo(cities[path[0]].x, cities[path[0]].y);
    ctx.stroke();
  }
  // Draw cities last
  ctx.fillStyle = 'blue';
  cities.forEach(city => {
    ctx.beginPath();
    ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}
  onMount(() => {
    console.log('Component mounted');
    m(v => ({
      cities: [],
      bestPath: [],
      beforeDistance: 0,
      afterDistance: 0,
      improved: true,
      step: 0
    }));
    
    A = m(dF3x);
    console.log('Initial State:', A);
  });
/*
<h1>Traveling Salesman Problem</h1>
<div style="display: flex; gap: 20px;">
  <div>
    <h2>Before</h2>
    <canvas bind:this={beforeCanvas} width="800" height="600"></canvas>
    <p>Total Distance: {A?.beforeDistance ? A.beforeDistance.toFixed(2) : 'N/A'}</p>
  </div>
  <div>
    <h2>After</h2>
    <canvas bind:this={afterCanvas} width="800" height="600"></canvas>
    <p>Total Distance: {A?.afterDistance ? A.afterDistance.toFixed(2) : 'N/A'}</p>
  </div>
</div>
<button on:click={() => {
  generateCities();
}}>Generate Cities</button>
<button on:click={() => {
  if (A?.improved) {
    solveTSP(m);
  }
}}>Solve TSP (Step-by-Step)</button>

*/
