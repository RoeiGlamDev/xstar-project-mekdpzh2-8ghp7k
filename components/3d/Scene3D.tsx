import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} /> {/* Soft ambient light */}
      <pointLight position={[10, 10, 10]} /> {/* Point light for highlights */}
      <OrbitControls /> {/* Allows user to rotate the scene */}
      {/* Add 3D models or elements here */}
    </Canvas>
  );
};

export default Scene3D;