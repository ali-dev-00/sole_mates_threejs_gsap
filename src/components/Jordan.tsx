import { useGLTF } from '@react-three/drei';
import { JordanGLTF } from '../typing';
import gsap from 'gsap';
import { useThree } from '@react-three/fiber';
import { useLayoutEffect } from 'react';

//  const tl = gsap.timeline();
//  useLayoutEffect(()=>{

//  })

export const Jordan = () => {
  const { nodes, materials } = useGLTF('/air_jordan_1.glb') as JordanGLTF;
  const {camera} = useThree();
  console.log(camera)
  // const tl = gsap.timeline();
  return (
    <>
    <directionalLight castShadow position={[-2.38,1.32,0.74]}  />
      <group scale={10} position={[2,1,-1]} rotation-x={[-Math.PI * 0.5]}>
        <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} />
        <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace} />
      </group>
    </>
  );
};
