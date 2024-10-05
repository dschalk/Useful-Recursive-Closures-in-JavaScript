
// Utility function for logging
var log = console.log;

// Special function used to retrieve the current value of x in the closure
var dF3x = () => { };

// Function M(x) that creates a closure over x
function M(x) {
    return function go(func) {
        if (func === dF3x) {
            // If func is dF3x, return the current value of x
            return x;
        } else {
            // **Critical Line**: Reassign x to the result of func(x)
            x = func(x);
            return go;
        }
    }
}

// Example function to be stored in the array
function add(a, b) { return a + b; }

// Create closures
const m = M([ [6], [7], [add] ]); // Original closure
const cl = m;                      // cl references the same closure as m
const m_clone = M(m(dF3x));        // m_clone is a new closure with its own x

// Initial State - All closures share the same x
log("Initial State:");
log("m(dF3x) is", m(dF3x));         // [ [6], [7], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x));       // [ [6], [7], [ [Function: add] ] ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [6], [7], [ [Function: add] ] ]
log("Object.is(m(dF3x), cl(dF3x)):", Object.is(m(dF3x), cl(dF3x))); // true
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// Mutating x via m_clone before any reassignment
m_clone(dF3x).push(1111);
log("\nAfter m_clone(dF3x).push(1111):");
log("m(dF3x) is", m(dF3x));           // Mutated array includes 1111
log("cl(dF3x) is", cl(dF3x));         // Also includes 1111
log("m_clone(dF3x) is", m_clone(dF3x));   // Includes 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// Reassigning x in m - This breaks the shared reference
m(v => v.concat(888)); // Reassign x in m to a new array
log("\nAfter m(v => v.concat(888)):");
log("m(dF3x) is", m(dF3x));           // New array with 888
log("cl(dF3x) is", cl(dF3x));         // Also updated (same closure as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // Remains unchanged with 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// Reassigning x in m_clone - Independent state
m_clone(v => v.concat(777)); // Reassign x in m_clone to a new array
log("\nAfter m_clone(v => v.concat(777)):");
log("m(dF3x) is", m(dF3x));           // Unchanged from previous step
log("cl(dF3x) is", cl(dF3x));         // Unchanged (same as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // New array with 1111 and 777
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// Mutating x in m_clone after reassignment
m_clone(dF3x).push(2222);
log("\nAfter m_clone(dF3x).push(2222):");
log("m(dF3x) is", m(dF3x));           // Unchanged
log("cl(dF3x) is", cl(dF3x));         // Unchanged
log("m_clone(dF3x) is", m_clone(dF3x));   // Now includes 1111, 777, 2222

// Mutating x in m
m(dF3x).push(3333);
log("\nAfter m(dF3x).push(3333):");
log("m(dF3x) is", m(dF3x));           // Includes 888, 3333
log("cl(dF3x) is", cl(dF3x));         // Also includes 888, 3333
log("m_clone(dF3x) is", m_clone(dF3x));   // Unchanged

// Mutating x via m_clone after any reassignment
m_clone(dF3x).push(444);
log("\nAfter m_clone(dF3x).push(444):");
log("m(dF3x) is", m(dF3x));           // Does not include 444
log("cl(dF3x) is", cl(dF3x));         // Also does not include 444
log("m_clone(dF3x) is", m_clone(dF3x));   // Only the clone has been updated
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // Now it's false`    
