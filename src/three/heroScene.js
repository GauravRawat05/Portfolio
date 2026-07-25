import * as THREE from 'three';

export function initHeroScene(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0c16, 0.015);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Core 3D Mesh (Glowing Wireframe Icosahedron & Torus Knot)
  const group = new THREE.Group();
  scene.add(group);

  const icoGeo = new THREE.IcosahedronGeometry(9, 2);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  group.add(icoMesh);

  const innerGeo = new THREE.TorusKnotGeometry(5, 1.2, 120, 16);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x7b2cbf,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  group.add(innerMesh);

  // Particle Constellation Network
  const particleCount = 200;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleScales = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 80;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    particleScales[i] = Math.random() * 2 + 1;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.5,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // Mouse Interaction Variables
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  function onPointerMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
  }

  window.addEventListener('pointermove', onPointerMove);

  // Window Resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Rotate core meshes
    icoMesh.rotation.x = elapsedTime * 0.1;
    icoMesh.rotation.y = elapsedTime * 0.15;

    innerMesh.rotation.x = -elapsedTime * 0.2;
    innerMesh.rotation.z = elapsedTime * 0.25;

    particleSystem.rotation.y = elapsedTime * 0.03;

    // Smooth Lerp Mouse Parallax
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    group.rotation.y = targetX * 2;
    group.rotation.x = targetY * 2;
    camera.position.x += (targetX * 10 - camera.position.x) * 0.05;
    camera.position.y += (-targetY * 10 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}
