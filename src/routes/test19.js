
import { leftShift } from "mathjs";
import { std } from "mathjs";
var log = console.log;
var dF3x = () => {};

// Function M for continuation-passing style
function M(x) {
  return function go(func) {
    if (func === dF3x) return x;
    x = func(x);
    return go;
  };
}

let gain = 0;
let loss = 0;
let aa = 100;
let bb = 1;
let arr = [aa, bb, aa, 0]; // Initial state
var m = M([aa, 1, aa, 0]); // Initializing the M function

// Main function for each attempt
function f1(v) {
  let result = Math.floor(Math.random() * 2);
  if (result) {
    gain += v[1];
    v[0] += v[1];
    v[1] = 1; // Reset bet after win
    v[3] += 1; // Increment winnings count
    log("Win, m(dF3x) is", m(dF3x));
    if (v[3] < aa) m(f1); // Continue if goal not reached
    else {
      log("Goal reached, m(dF3x) is", m(dF3x));
      return v;
    }
  } else {
    v[0] = v[0] - v[1]; // Deduct the bet amount from stake
    loss += v[1];
    v[1] = leftShift(v[1], 1); // Double the bet
    log("Loss, m(dF3x) is", m(dF3x));
    if (v[1] > v[0]) {
      log("Bankrupt, m(dF3x) is", m(dF3x));
      return;
    } else m(f1); // Continue if not bankrupt
  }
  return v;
}

// Asynchronous gambling function to simulate multiple attempts
async function gamble() {
  let netOutcomes = []; // Array to store net outcomes for each game

  for (var k = 0; k < 10000; k += 1) {
    await m(f1);
    netOutcomes.push(gain - loss); // Store the net outcome of each game
    m(() => [aa, 1, aa, 0]); // Reset state after each game

    log("gain is", gain);
    log("loss is", loss);
  }

  // Calculate mean and standard deviation
  let mean = (gain - loss) / netOutcomes.length;
  let standardDeviation = std(netOutcomes);

  log("Mean net outcome:", mean);
  log("Standard deviation of net outcomes:", standardDeviation);
  log("Standard deviation ")
}

gamble();
