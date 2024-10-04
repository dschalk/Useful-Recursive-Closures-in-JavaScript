let x = [1, 2, 3];
let y = x; // y points to the same array as x
console.log(Object.is(x, y)); // true, they share the same reference
x.concat(4);
console.log(x); // [1, 2, 3]
console.log(y); // [1, 2, 3] - unchanged
console.log(Object.is(x, y)); // false, they now point to different arrays
