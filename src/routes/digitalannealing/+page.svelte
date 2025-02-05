
<script>
  // Initial state
  var A = {
    cities: [],
    bestPath: [],
    penultimatePath: [],
    beforeDistance: 0,
    afterDistance: 0,
    improved: true,
    step: 0,
    lastChange: { start: -1, end: -1 }
  };

  import { onMount } from 'svelte';
  const dF3x = Symbol('dF3x');

  const M = (initialState) => {
    let x = { ...initialState };
    const go = (func) => {
      if (func === dF3x) {
        return x;
      }
      x = func(x);
      return go;
    };
    return go;
  };

  // Update m initialization too
  var m = M({
    cities: [],
    bestPath: [],
    penultimatePath: [],
    beforeDistance: 0,
    afterDistance: 0,
    improved: true,
    step: 0,
    lastChange: { start: -1, end: -1 }
  });

  let beforeCanvas;
  let afterCanvas;

  const generateCities = () => {
    const newCities = Array.from({ length: 50 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
    }));

    const newPath = Array.from({ length: newCities.length }, (_, i) => i);
    const initialDistance = pathDistance(newPath, newCities);

    m(v => ({
      cities: newCities,
      bestPath: newPath,
      penultimatePath: newPath,
      beforeDistance: initialDistance,
      afterDistance: initialDistance,
      improved: true,
      step: 0,
      lastChange: { start: -1, end: -1 }
    }));
    A = m(dF3x);
    drawBefore(A.penultimatePath, A.lastChange);
    drawAfter(A.cities, A.bestPath, A.lastChange);
  };

  const solveTSP = (m) => {
    m((state) => {
      if (!state.improved) return state;

      const { bestPath, cities } = state;
      const currentDistance = pathDistance(bestPath, cities);

      for (let i = 1; i < bestPath.length - 1; i++) {
        for (let j = i + 1; j < bestPath.length; j++) {
          const newPath = [...bestPath];
          const segment = newPath.slice(i, j + 1).reverse();
          newPath.splice(i, segment.length, ...segment);

          const newDistance = pathDistance(newPath, cities);
          if (newDistance < currentDistance) {
            return {
              ...state,
              bestPath: newPath,
              penultimatePath: bestPath,
              afterDistance: newDistance,
              improved: true,
              step: state.step + 1,
              lastChange: { start: i, end: j },
            };
          }
        }
      }

      return { ...state, improved: false, lastChange: { start: -1, end: -1 } };
    });

    A = m(dF3x);
    console.log('Current state:', A);
    drawBefore(A.penultimatePath, A.lastChange);
    drawAfter(A.cities, A.bestPath, A.lastChange);
  };

  function pathDistance(path, cities) {
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

  function drawBefore(path, lastChange) {
    if (!beforeCanvas || !A.cities) return;

    const ctx = beforeCanvas.getContext('2d');
    ctx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);

    // Draw cities
    ctx.fillStyle = 'blue';
    A.cities.forEach((city) => {
      ctx.beginPath();
      ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw the main path in red
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(A.cities[path[0]].x, A.cities[path[0]].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(A.cities[path[i]].x, A.cities[path[i]].y);
    }
    ctx.stroke();

    // Highlight the segment that will disappear (if any)
    if (lastChange && lastChange.start >= 0 && lastChange.end >= 0) {
      const { start, end } = lastChange;

      ctx.strokeStyle = '#00FFFF'; // Bright cyan
      ctx.lineWidth = 6; // Thicker line for emphasis
      ctx.beginPath();
      ctx.moveTo(A.cities[path[start]].x, A.cities[path[start]].y);
      for (let i = start + 1; i <= end; i++) {
        ctx.lineTo(A.cities[path[i]].x, A.cities[path[i]].y);
      }
      ctx.stroke();
    }
  }

  function drawAfter(cities, path, lastChange) {
    if (!afterCanvas) return;
    const ctx = afterCanvas.getContext('2d');
    ctx.clearRect(0, 0, afterCanvas.width, afterCanvas.height);

    // Draw cities
    ctx.fillStyle = 'blue';
    cities.forEach(city => {
      ctx.beginPath();
      ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw the main path in red
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
    path.forEach(index => {
      ctx.lineTo(cities[index].x, cities[index].y);
    });
    ctx.lineTo(cities[path[0]].x, cities[path[0]].y); // Close the loop
    ctx.stroke();

    // Highlight the changed segments if they exist
    if (lastChange && lastChange.start >= 0 && lastChange.end >= 0) {
      const { start, end } = lastChange;

      // Draw the original segment (before reversal) in bright cyan
      ctx.strokeStyle = '#00FFFF'; // Bright cyan
      ctx.lineWidth = 6; // Thicker line for emphasis
      ctx.beginPath();
      ctx.moveTo(cities[path[start]].x, cities[path[start]].y);
      for (let i = start + 1; i <= end; i++) {
        ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
      }
      ctx.stroke();

      // Draw the new segment (after reversal) in gold
      ctx.strokeStyle = '#FFD700'; // Gold
      ctx.lineWidth = 6; // Thicker line for emphasis
      ctx.beginPath();
      ctx.moveTo(cities[path[start]].x, cities[path[start]].y);
      for (let i = end; i >= start; i--) {
        ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
      }
      ctx.stroke();
    }
  }

  onMount(() => {
    console.log('Component mounted');
    m(v => ({
      cities: [],
      bestPath: [],
      penultimatePath: [],
      beforeDistance: 0,
      afterDistance: 0,
      improved: true,
      step: 0
    }));
    A = m(dF3x);
    console.log('Initial State:', A);
  });
</script>

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
<button on:click={() => {
  generateCities();
}}>Reset</button>

<p>Steps Taken: {A?.step}</p>
<p>Improvement: {A?.beforeDistance && A?.afterDistance 
  ? `${(((A.beforeDistance - A.afterDistance) / A.beforeDistance) * 100).toFixed(2)}%` 
  : 'N/A'}</p>