import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Sphere = () => {

  const Box = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
        <meshLambertMaterial attach="material" color="hotpink"/>
      </mesh>
    );
  };

  return (
    <div style={{ height: 'calc(100vh - 48px)', backgroundColor: 'black' }}>
      <Canvas>
        <OrbitControls/>
        <Stars/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3}/>
        <Box/>
      </Canvas>
    </div>);
};

export default Sphere;
