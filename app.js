import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

var geometry = new THREE.PlaneGeometry(2000, 2000, 20, 20);
var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });

var plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);

    plane.rotation.x += 0.001;
    plane.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();