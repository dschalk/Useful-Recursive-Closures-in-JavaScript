
  import { onMount } from 'svelte';

  // Define the m-M(x) closure
  const dF3x = () => {};
  const log = console.log;

  var AA;
  var BB;
  var CC;
  var route;
  var totalDist;

  function M(x) {
    return function go(func) {
      if (func === dF3x) {
        return x; // Return the current x (internal only)
      } else {
        x = func(x); // Update x by applying func(x)
        return go;   // Return the closure for chaining
      }
    };
  }

  // Closure to hold the city coordinates
  const m = M([]);
  
  // Utility: Generate random cities
  function randomizeCities() {
    return () => {
      const newCities = [];
      for (let i = 0; i < 50; i++) {
        newCities.push([Math.random() * 1000, Math.random() * 1000]);
      }
      return newCities;
    };
  }
  
  m(() => randomizeCities()); 
  log("m(dF3x) is", m(dF3x));

  // Utility: Compute route distance
  function distance(a,b) {
    return Math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2); ;
  }
  console.log("distance ")
  console.log("distance is", distance)

  function routeDistance() {
    totalDist = 0;
    for (let i = 0; i < 49; i++) {
        const cityA = m(dF3x)[i];
        const cityB = m(dF3x)[i + 1];
        totalDist += distance(cityA, cityB);
    };
  }

  m(routeDistance);
  /*
  // State for the UI
  let num = 50;
  let bestDistance = null;
  let route = [];
  let citiesVisible = false;

  // Randomize cities on mount
  onMount(() => {
    m(randomizeCities());
  });

  // Randomize the cities
  function handleRandomize() {
    m(randomizeCities(num));
    bestDistance = null;
    route = [];
  }

  // Scale the cities
  function handleScale(factor) {
    m(scaleCities(factor));
  }
*/
  // Run a basic TSP simulation
  var numb = 50;

  function runTSP(arr) {
    const n = numb;

    // Create an initial random route
    route = Array.from({ length: 50 }, (_, i) => i);
    console.log("route is", route);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [route[i], route[j]] = [route[j], route[i]];
    }

    let currentRoute = route.slice();
    let currentDist = routeDistance(currentRoute);

    let bestRoute = currentRoute.slice();
    let bestDist = currentDist;

    // Perform random swaps
    for (let i = 0; i < n; i++) {
      const newRoute = currentRoute.slice();
      const a = Math.floor(Math.random() * n);
      const b = Math.floor(Math.random() * n);
      [newRoute[a], newRoute[b]] = [newRoute[b], newRoute[a]];

      const newDist = routeDistance(newRoute);
      if (newDist < currentDist) {
        currentRoute = newRoute;
        currentDist = newDist;

        if (newDist < bestDist) {
          bestDist = newDist;
          bestRoute = newRoute.slice();
          BB = bestDist;
          CC = bestRoute;
        }
      }
    }
          CC = bestRoute;

    // Update state
    route = bestRoute.toFixed(2)
    bestDist = bestDist;
    return arr;
  }

  m(runTSP);

  log("BB is", BBte);
  log('bestDist is', bestDist);
/*
<style>
  .city {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
  }
</style>
<h1>TSP Demo with m-M(x) Closures</h1>

<p>
  Number of cities:
  <input type="number" bind:value={num} min="1" max="100" />
  <button on:click={handleRandomize}>Randomize Cities</button>
</p>

<p>
  <button on:click={() => handleScale(0.5)}>Scale Down (0.5x)</button>
  <button on:click={() => handleScale(2)}>Scale Up (2x)</button>
</p>

<p>
  <button on:click={() => runTSP(10000)}>Run TSP Simulation</button>
</p>

<p>
  Best distance: {bestDistance || "N/A"}
</p>

<button on:click={() => (citiesVisible = !citiesVisible)}>
  {citiesVisible ? "Hide Cities" : "Show Cities"}
</button>

{#if citiesVisible}
  <div style="position: relative; width: 500px; height: 500px; border: 1px solid black;">
    {#each m(dF3x) as [x, y], i}
      <div
        class="city"
        style="left: {x / 2}px; top: {y / 2}px;"
        title="City {i}"
      />
    {/each}
  </div>
{/if}
*/
