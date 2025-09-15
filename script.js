import * as THREE from 'three';

// 1. Configuração da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cor de fundo escura
scene.background = new THREE.Color(0x1a2a1a);

// 2. Criação do "chão" (o chão da casa)
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x4a664a });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // Gira o plano para ficar horizontal
plane.position.y = -0.5;
scene.add(plane);

// 3. Criação de um "personagem" (uma caixa para representar o jogador)
const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
scene.add(player);

// Posição inicial da câmera para dar a visão em primeira pessoa
camera.position.set(0, 1, 0);

// 4. Criação de luz
const ambientLight = new THREE.AmbientLight(0x404040, 5); // Luz ambiente fraca
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 50, 100); // Luz como uma lanterna
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// 5. Lógica de movimento
const speed = 0.1;
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

function handleMovement() {
    if (keys['w'] || keys['W'] || keys['ArrowUp']) camera.position.z -= speed;
    if (keys['s'] || keys['S'] || keys['ArrowDown']) camera.position.z += speed;
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) camera.position.x -= speed;
    if (keys['d'] || keys['D'] || keys['ArrowRight']) camera.position.x += speed;

    // Movimentar a luz junto com a câmera para simular a lanterna
    pointLight.position.copy(camera.position);
}

// 6. Loop principal do jogo
function animate() {
    requestAnimationFrame(animate);
    handleMovement();
    renderer.render(scene, camera);
}

// Inicia o loop
animate();
