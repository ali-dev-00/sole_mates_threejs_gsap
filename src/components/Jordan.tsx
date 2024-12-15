import { useGLTF } from '@react-three/drei';
import { JordanGLTF } from '../typing';
import gsap from 'gsap';
import { useThree } from '@react-three/fiber';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Jordan = () => {
  const { nodes, materials } = useGLTF('/air_jordan_1.glb') as JordanGLTF;
  const { camera, scene } = useThree();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    // Ensure GSAP uses the correct scene and camera positions
    const ctx = gsap.context(() => {
      tl.to(camera.position, {
        x: 5,
        y: 4.0,
        z: 2.8,
        scrollTrigger: {
          trigger: '.second-section',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      }).to(scene.position, {
        x: 3.01,
        y: 0.76,
        z: 3.7,
        scrollTrigger: {
          trigger: '.second-section',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <directionalLight castShadow position={[-2.38, 1.32, 0.74]} />
      <group scale={10} position={[2, 1, -1]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} />
        <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace} />
      </group>
    </>
  );
};
