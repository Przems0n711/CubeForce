import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.getElementById('container').appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

var rotationSpeed = 0.05;
var isRotating = true;

function animate() {
    requestAnimationFrame( animate );
    if (isRotating) {
        cube.rotation.x += rotationSpeed;
        cube.rotation.y += rotationSpeed;
    }
    renderer.render( scene, camera );
}

animate();

var speedInput = document.getElementById('speed');
speedInput.addEventListener('input', function(e) {
    rotationSpeed = parseFloat(e.target.value);
});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function() {
    isRotating = false;
});

var resumeButton = document.getElementById('resume');
resumeButton.addEventListener('click', function() {
    isRotating = true;
});