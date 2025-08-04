// Import Three Lib
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Create Scene
const scene = new THREE.Scene()

// Create Cube
const geometryCube = new THREE.BoxGeometry(1, 1, 1)
const materialCube = new THREE.MeshBasicMaterial({color: 'rebeccapurple'})
const meshCube = new THREE.Mesh(geometryCube, materialCube)
scene.add(meshCube)

// Create Sphere
const geometrySphere = new THREE.SphereGeometry(1.5, 4, 4)
const materialSphere = new THREE.MeshBasicMaterial({color: 'goldenrod', wireframe:true})
const meshSphere = new THREE.Mesh(geometrySphere, materialSphere)
scene.add(meshSphere)

// Sizes
const sizes = {

    width: 800,
    height: 600

}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)