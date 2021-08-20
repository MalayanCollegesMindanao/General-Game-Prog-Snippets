const SCENE = new THREE.Scene();
const CLOCK = new THREE.Clock();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 1000;
const RENDERER = new THREE.WebGLRenderer();
let deltaTime;

RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);

// camera
let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 300;
camera.lookAt(new THREE.Vector3(0, 0, 0));

// particles
let particles = new THREE.Geometry();
for (let i = 0; i < MAXPARTICLES; i++) {
  let particle = new THREE.Vector3(
    random(-400, 400),
    random(-200, 200),
    random(-300, 300)
  );
  particles.vertices.push(particle);
}
let particleMaterial = new THREE.ParticleBasicMaterial({
  color: 0xadd8e6,
  size: 4,
});
let particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
particleSystem.sortParticles = true;
SCENE.add(particleSystem);

// render loop
function render() {
  requestAnimationFrame(render);

  deltaTime = CLOCK.getDelta();
  particleSystem.position.x += 1;
  RENDERER.render(SCENE, camera);
}
render();

// random helper RNG
function random(min, max) {
  if (isNaN(max)) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

// resize
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);
