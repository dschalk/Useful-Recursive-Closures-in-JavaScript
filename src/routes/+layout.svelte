<script>
import "./style.css"
/*	import { onMount } from 'svelte';

	onMount(async () => {
    const rubiksCube = document.querySelector('.rubiks-cube');
const faces = document.querySelectorAll('.rubiks-cube-face');

let angle = 0;

function rotateCube() {
  angle += 1;
  rubiksCube.style.transform = `rotateY(${angle}deg)`;

  for (const face of faces) {
    const faceAngle = angle * (Number(face.dataset.angle) / 90);
    face.style.transform = `rotateZ(${faceAngle}deg)`;
  }

  requestAnimationFrame(rotateCube);
}

function double (x) {return x + x};

	}) 
*/
</script>

<style>
  a {
    margin-right: 40px;
    font-size: 24px;
    font-weight: bold;
    color: rgb(135, 86, 135);
  }
</style>

<!--X-Content-Type-Options: nosniff -->

<nav>
        <a href="./">Home</a>
        
        <a href="./cube">Rubik's Cube</a>

        <a href="./async5">Async</a>
        
        <a href="./digitalannealing">2-opt</a>
                
        <a href="./clone">Clones</a>

        <a href="./Collatz">Collatz</a>
         
        <a href="./Martingale">Martingale</a>

        <a href="./Python">Python</a>
                
        <a href="./score">Game of Score</a>

  </nav>

  <div>"***********************************************************************************************"</div>
  <slot></slot>
