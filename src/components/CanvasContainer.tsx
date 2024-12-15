
import { Canvas } from '@react-three/fiber';
import { Jordan } from './Jordan';
import { Environment, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';

export const CanvasContainer = () => {
  return (
    <Canvas camera={{  position: [
        4.742922067308307, 2.2387122409413784, 1.2218255872664914
    ]}}>
     
      <Jordan />
      <OrbitControls />
      <Environment preset='city' />
    </Canvas> 
  );
};
