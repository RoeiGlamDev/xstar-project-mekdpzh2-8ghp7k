import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene with a pink and white theme
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xffc0cb); // Set background color to pink
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to create a light source
export const createLight = () => {
    const light = new THREE.AmbientLight(0xffffff, 1); // Create ambient light
    return light;
};

// Function to create a pink material
export const createPinkMaterial = () => {
    return new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Create a pink material
};

// Function to create a white material
export const createWhiteMaterial = () => {
    return new THREE.MeshStandardMaterial({ color: 0xffffff }); // Create a white material
};

// Default export
export default {
    createScene,
    createCamera,
    createRenderer,
    createLight,
    createPinkMaterial,
    createWhiteMaterial,
};