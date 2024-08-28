<p>Here's a screenshot of the test in Firefox <a href = 'https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html'>Firefox Developer Console</a>  </p>
  
<img alt = "Firefox3" src = {Firefox_1} 
width = 120%;
height = auto;
/>
  <p> functions that operate on functions that operate on values held in closures. These operations can mutate the value in the closure or replace it, preserving the previous value along-side its replacement. </p>
<p>Type safety, error handling, and other functionality can be added; but for now, we'll consider just the essence of JS-Monads by working with a stripped-down, bare-bones version. This version, returned by M(x) (shown below) where x can be any JavaScript value, works much like Haskell monads without types, encapsulating and sequestering the composition of functions. </p>
<p>As the "Cube" and "Score" pages of this website (linked above) suggest, these simple closures can handle complex functionality in elaborate applications. There's no need to modify the JS-Monad factory function "M", or the copy of "go" that it returns, and which subsequently returns itself each time it operates on a function. The functions operated on by JS-monads (m-M(x) closures) can handle any degree of complexity. Here are some definitions:</p>

<pre>{Mdisplay}</pre>
<p>NOTE: "var" is used in this development version where "const" would be used in production. The purpose is to facilitate error-free revisions on the fly.</p>

<p>"m-M(x)" closures encapsulate the state of a <a href='./cube3'>Rubik's cube simulator</a>, and the state of attempts to win a simulated dice game in the <a href='./score'>Solitaire Game of Score</a>. But before elaborating on these, lets first explore some basic functionality of the m-M(x) closures. </p>

<pre>{test_0}</pre>

<h1> WORK IN PROGRESS:</h1>
<img alt = "Firefox" src = {Firefox_1} 
width = 120%;
height = auto;
/>

<h3>Immutable State</h3>
<p>The value "x" in m = M(x) can be an anonymous array, named "x" only inside the closure. "m(func) can concatenate its return value to the array, preserving the previous value and making the updated value available as needed."</p>
<p>Here's some example code, followed by a test in Firefox.</p>
<pre>{test_1}</pre>
<img alt='Firefox2' src = {Firefox_2} 
width = 120%;
height = auto;
/>
<br><br>
<h3>More Elaborate Applications</h3>
<p>Here's how x in m = M(x) is defined in the <a href='./cube1'>Rubik's cube simulation</a></p>

<pre>b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = "blue"
g0 = g1 = g2 = g3 = g4 = g5 = g6 = g7 = g8 = "green"
r0 = r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = "red"
o0 = o1 = o2 = o3 = o4 = o5 = o6 = o7 = o8 = "orange"
y0 = y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = "yellow"
w0 = w1 = w2 = w3 = w4 = w5 = w6 = w7 = w8 = "white"

var bb = [b0,b1,b2,b3,b4,b5,b6,b7,b8];
var gg = [g0,g1,g2,g3,g4,g5,g6,g7,g8];
var rr = [r0,r1,r2,r3,r4,r5,r6,r7,r8];
var oo = [o0,o1,o2,o3,o4,o5,o6,o7,o8];
var yy = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
var ww = [w0,w1,w2,w3,w4,w5,w6,w7,w8];

var cube = [bb,gg,rr,oo,yy,ww]
var m = M(cube); // x is the solved Rubik's cube representation encapsulated in the m-M(x) closure.</pre>
<p>Instead of rearranging 24 little cubies for each move, as many other Rubik's cube simulators do, this version rearranges the colors with JavaScript and a lookup table of possible moves. Rotation of the cube, its middle sections, and its faces is accomplished only with JavaScript, never with the CSS transform property.</p>
<p> The keyboard controls are oblivious to the cube colors. They are not affected by rotations, making the cube much easier to solve than most (possibly all) other online Rubik's cube simulators. For example, clicking "R" always turns the right face clockwise. Other simulator keyboard controls follow the original cube orientation, so clicking "R" might turn the bottom, top, left, back, or front face, depending on previous cube rotations. </p>

  <pre>{Rf}</pre>
<p> which turns the face currently on the right side of the cube clockwise, pursuant to this table of transformations: 

<pre>{table}</pre>
<p>The <a href='./score'>Game of Score</a> closure is defined this way:</p>
<pre>{score}</pre>
<p>Functions for m-M(x) closures can be elaborate. For example, here are two functions used in the Game of Score:</p>

<pre>{fuDem}</pre>
<p>More details are at <a href='https://github.com/dschalk/JavaScript-Functions'>Javascript-Functions</a>. </p>
<br><br>
<h1>Function Composition Simplified</h1>
<pre>{ZbackDemo}</pre>

<br><br><br>


<p> In the neighboring <a href=./cube>Rubik's cube></a> page, the functions for rotating the entire cube are elaborate and intricate. Other simulators use libraries or CSS transforms to rotate cubes, but I've yet to see one keyboard controllable Rubik's cube simulator that remains sensible after rotations. If the original right side happens to be on the bottom, pressing the key that used to rotate the right side rotates the bottom instead. </p>
<p> Under the hood, the cube remains stationary while the stickers (colors) get rearranged to simulate rotations of the faces, centers, and entire cube. Pressing the "r" key, for example, always rotates the right face of the cube on this page, but nowhere else as far as I know. </p>
<p>Here are the functions that rotate the cube 90 degrees on the Z axis: </p>
<pre>{Zdemo}</pre>
<p>Writing the code for Zro was a meticulous and painstaking endeavor. Nine copies each of the strings "blue", "green", "red", "orange", "yellow", and "white" had to be rearranged precisely as they are when a real Rubik's cube is rotated. </p>
<p> Substituting a new arrangement of the stickers (colors) for the previous one doesn't require much of the browser engine's memory or processing capability, and making the substitution requires very little time; so, rather than write another elaborate recipe for the reverse rearrangement, I simply ran the 90 degree rotation three times. It was sure to work as well as running it once, so no testing or bug-hunting was necessary. Here's the code for rotating 90 degrees counterclockwise on the Z axis</p>


