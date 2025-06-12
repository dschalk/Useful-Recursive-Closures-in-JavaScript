

<style>
.rubiks-cube {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.rubiks-cube-face {
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
}

.rubiks-cube-face.front {
  transform: translateZ(-50px);
}

.rubiks-cube-face.back {
  transform: translateZ(50px) rotateY(180deg);
}

.rubiks-cube-face.left {
  transform: translateX(-50px) rotateY(-90deg);
}

.rubiks-cube-face.right {
  transform: translateX(50px) rotateY(90deg);
}

.rubiks-cube-face.top {
  transform: translateY(-50px) rotateX(90deg);
}

.rubiks-cube-face.bottom {
  transform: translateY(50px) rotateX(-90deg);
}
</style>

<script>
import { onMount } from 'svelte';
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

rotateCube();
    });
</script>
<div class="rubiks-cube">
    <div class="rubiks-cube-face front">Front</div>
    <div class="rubiks-cube-face back">Back</div>
    <div class="rubiks-cube-face left">Left</div>
    <div class="rubiks-cube-face right">Right</div>
    <div class="rubiks-cube-face top">Top</div>
    <div class="rubiks-cube-face bottom">Bottom</div>
  </div>

  