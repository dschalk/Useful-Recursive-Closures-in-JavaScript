

  // Define the M function
  const dF3x = Symbol('dF3x'); // A unique symbol to retrieve the current state

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x; // Return the current state
      else x = func(x); // Update the state by applying the function
      return go;
    };
  }

  // Initialize m with an empty array of cities
  var m = M([]);

  // Canvas references
  let beforeCanvas;
  let afterCanvas;

  // Generate random cities
  const generateCities = () => {
    const newCities = Array.from({ length: 50 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
    }));

    const newPath = Array.from({ length: newCities.length }, (_, i) => i);
    const initialDistance = pathDistance(newPath, newCities);

    m = m(() => newCities);

    drawBefore(newPath, { start: -1, end: -1 }); // Initial drawing
    drawAfter(newCities, newPath, { start: -1, end: -1 });
    the current state
    else x = func(x); // Update the state by applying the function
  
    return {
      cities: newCities,
      bestPath: newPath,
      beforeDistance: initialDistance,
      afterDistance: initialDistance,
    };
  };

  // Solve TSP (Step-by-Step)
  const solveTSP = () => {
    const cities = m(dF3x); // Retrieve the current state
    const { bestPath, afterDistance } = m(calculateBestPath);

    const newDistance = pathDistance(bestPath, cities);
    //if (newDistance < afterDistance) {
    //m(() => cities); // Update the state (if needed)

      drawBefore(bestPath, { start: -1, end: -1 });
      drawAfter(cities, bestPath, { start: -1, end: -1 });
//  }

  /*
    return {
      cities,
      bestPath,
      beforeDistance: afterDistance,
      afterDistance: newDistance,
    }; */
  };

  // Calculate the best path using 2-opt optimization
  const calculateBestPath = (cities) => {
    const currentPath = Array.from({ length: cities.length }, (_, i) => i);
    const currentDistance = pathDistance(currentPath, cities);

    for (let i = 1; i < currentPath.length - 1; i++) {
      for (let j = i + 1; j < currentPath.length; j++) {
        const newPath = perform2OptSwap(currentPath, i, j);
        const newDistance = pathDistance(newPath, cities);
        if (newDistance < currentDistance) {
          return {
            bestPath: newPath,
            afterDistance: newDistance,
          };
        }
      }
    }

    return {
      bestPath: currentPath,
      afterDistance: currentDistance,
    };
  };

  // Perform a 2-opt swap
  const perform2OptSwap = (path, i, j) => {
    const newPath = [...path];
    const segment = newPath.slice(i, j + 1).reverse();
    newPath.splice(i, segment.length, ...segment);
    return newPath;
  };

  // Calculate the total distance of a path
  const pathDistance = (path, cities) => {
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
  };

  // Calculate the Euclidean distance between two citiesthe current state
          else x = func(x); // Update the state by applying the function
        
  const distance = (city1, city2) => {
    return Math.sqrt((city1.x - city2.x) ** 2 + (city1.y - city2.y) ** 2);
  };

  // Draw the "Before" canvas
  const drawBefore = (path, lastChange) => {
    const cities = m(dF3x); // Retrieve the current state
    if (!beforeCanvas || !cities) return;

    const ctx = beforeCanvas.getContext('2d');
    ctx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);the current state
    else x = func(x); // Update the state by applying the function
  

    // Draw cities
    ctx.fillStyle = 'blue';
    cities.forEach((city) => {
      ctx.beginPath();
      ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw the main path in red
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
    }
    ctx.stroke();

    // Highlight the segment that will disappear (if any)
    if (lastChange && lastChange.start >= 0 && lastChange.end >= 0) {
      const { start, end } = lastChange;

      ctx.strokeStyle = '#00FFFF'; // Bright cyan
      ctx.lineWidth = 6; // Thicker line for emphasis
      ctx.beginPath();
      ctx.moveTo(cities[path[start]].x, cities[path[start]].y);
      for (let i = start + 1; i <= end; i++) {
        ctx.lineTo(cities[path[i]].x, cities[path[i]].y);the current state
        else x = func(x); // Update the state by applying the function
      
      }
      ctx.stroke();
    }
  };
  

  // Draw the "After" canvas
  const drawAfter = (cities, path, lastChange) => {
    if (!afterCanvas) return;
    const ctx = afterCanvas.getContext('2d');
      // Define the M function
      const dF3x = Symbol('dF3x'); // A unique symbol to retrieve the current state
    
      function M(x) {
        return function go(func) {
          if (func === dF3x) return x; // Return the current state
          else x = func(x); // Update the state by applying the functionthe current state
          else x = func(x); // Update the state by applying the function
        
          return go;
        };
      }
    
      // Initialize m with an empty array of cities
      var m = M([]);
    /*
      // Canvas references
      let beforeCanvas;
      let afterCanvas;the current state
      else x = func(x); // Update the state by applying the function
    
          x: Math.random() * 800,
          y: Math.random() * 600,
        }));
    
        const newPath = Array.from({ length: newCities.length }, (_, i) => i);
        const initialDistance = pathDistance(newPath, newCities);
    
        m = m(() => newCities);
    
        drawBefore(newPath, { start: -1, end: -1 }); // Initial drawing
        drawAfter(newCities, newPath, { start: -1, end: -1 });
    
        return {
          cities: newCities,
          bestPath: newPath,
          beforeDistance: initialDistance,
          afterDistance: initialDistance,
        };the current state
        else x = func(x); // Update the state by applying the function
      
      };
    
      // Solve TSP (Step-by-Step)
      const solveTSP = () => {
        const cities = m(dF3x); // Retrieve the current state
        const { bestPath, afterDistance } = m(calculateBestPath);
    
        const newDistance = pathDistance(bestPath, cities);
        //if (newDistance < afterDistance) {
        //m(() => cities); // Update the state (if needed)
    
          drawBefore(bestPath, { start: -1, end: -1 });
          drawAfter(cities, bestPath, { start: -1, end: -1 });
    //  }
    
      /*
        return {
          cities,
          bestPath,
          beforeDistance: afterDistance,
          afterDistance: newDistance,
        }; */
      };
    
      // Calculate the best path using 2-opt optimization
      const calculateBestPath = (cities) => {
        const currentPath = Array.from({ length: cities.length }, (_, i) => i);
        const currentDistance = pathDistance(currentPath, cities);
    
        for (let i = 1; i < currentPath.length - 1; i++) {
          for (let j = i + 1; j < currentPath.length; j++) {
            const newPath = perform2OptSwap(currentPath, i, j);
            const newDistance = pathDistance(newPath, cities);
            if (newDistance < currentDistance) {
              return {
                bestPath: newPath,
                afterDistance: newDistance,
              };
            }
          }
        }
    
        return {
          bestPath: currentPath,
          afterDistance: currentDistance,
        };
      };
    
      // Perform a 2-opt swap
      const perform2OptSwap = (path, i, j) => {the current state
          else x = func(x); // Update the state by applying the function
        
        const newPath = [...path];
        const segment = newPath.slice(i, j + 1).reverse();
        newPath.splice(i, segment.length, ...segment);
        return newPath;
      };
    
      // Calculate the total distance of a path
      const pathDistance = (path, cities) => {
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
      };
    
      // Calculate the Euclidean distance between two cities
      const distance = (city1, city2) => {
        return Math.sqrt((city1.x - city2.x) ** 2 + (city1.y - city2.y) ** 2);
      };
    /*
      // Draw the "Before" canvas
      const drawBefore = (path, lastChange) => {
        const cities = m(dF3x); // Retrieve the current state
        if (!beforeCanvas || !cities) return;
    
        const ctx = beforeCanvas.getContext('2d');
        ctx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);
    
        // Draw cities
        ctx.fillStyle = 'blue';
        cities.forEach((city) => {
          ctx.beginPath();
          ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
    
        // Draw the main path in red
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
        }
        ctx.stroke();
    
        // Highlight the segment that will disappear (if any)
        if (lastChange && lastChange.start >= 0 && lastChange.end >= 0) {
          const { start, end } = lastChange;
    
          ctx.strokeStyle = '#00FFFF'; // Bright cyan
          ctx.lineWidth = 6; // Thicker line for emphasis
          ctx.beginPath();
          ctx.moveTo(cities[path[start]].x, cities[path[start]].y);
          for (let i = start + 1; i <= end; i++) {
            ctx.lineTo(cities[path[i]].x, cities[path[i]].y);
          }
          ctx.stroke();
        }
      };
      
    
      // Draw the "After" canvas
      const drawAfter = (cities, path, lastChange) => {
        if (!afterCanvas) return;
        const ctx = afterCanvas.getContext('2d');the current state
        else x = func(x); // Update the state by applying the function
      
        ctx.clearRect(0, 0, afterCanvas.width, afterCanvas.height);
    
        // Draw cities
        ctx.fillStyle = 'blue';
        cities.forEach((city) => {
          ctx.beginPath();
          ctx.arc(city.x, city.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
    
        // Draw the main path in red
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
        path.forEach((index) => {
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
      };

    xx-- HTML Section -->
    <h1>Traveling Salesman Problem</h1>
    <div style="display: flex; gap: 20px;">
      <div>
        <h2>Before</h2>
        <canvas bind:this={beforeCanvas} width="800" height="600"></canvas>
    
        <p>Total Distance: {pathDistance(m(dF3x)?.bestPath, m(dF3x))?.toFixed(2)}</p>
      </div>
      <div>
        <h2>After</h2>
        <canvas bind:this={afterCanvas} width="800" height="600"></canvas>
        <p>Total Distance: {pathDistance(m(dF3x)?.bestPath, m(dF3x))?.toFixed(2)}</p>
      </div>
    </div>
    
    <button on:click={generateCities}>Generate Cities</button>
    <button on:click={solveTSP}>Solve TSP (Step-by-Step)</button>
    <button on:click={generateCities}>Reset</button>
    
    <pre>{JSON.stringify(m(dF3x), null, 2)}</pre>

    // Draw the main path in red
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cities[path[0]].x, cities[path[0]].y);
    path.forEach((index) => {
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
  };
</script>

<!-- HTML Section -->
<h1>Traveling Salesman Problem</h1>
<div style="display: flex; gap: 20px;">
  <div>
    <h2>Before</h2>
    <canvas bind:this={beforeCanvas} width="800" height="600"></canvas>

    <p>Total Distance: {pathDistance(m(dF3x)?.bestPath, m(dF3x))?.toFixed(2)}</p>
  </div>
  <div>
    <h2>After</h2>
    <canvas bind:this={afterCanvas} width="800" height="600"></canvas>
    <p>Total Distance: {pathDistance(m(dF3x)?.bestPath, m(dF3x))?.toFixed(2)}</p>
  </div>
</div>

<button on:click={generateCities}>Generate Cities</button>
<button on:click={solveTSP}>Solve TSP (Step-by-Step)</button>
<button on:click={generateCities}>Reset</button>

<pre>{JSON.stringify(m(dF3x), null, 2)}</pre> */
