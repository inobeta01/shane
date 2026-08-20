"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Scene() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} color={0xffffff} />
      <pointLight position={[5, 5, 5]} color={0x00d2ff} intensity={1} />
      <group ref={groupRef}>
        {/* Outer Wireframe Icosahedron */}
        <mesh>
          <icosahedronGeometry args={[3, 1]} />
          <meshBasicMaterial color={0x00d2ff} wireframe transparent opacity={0.8} />
        </mesh>
        
        {/* Inner Solid Icosahedron */}
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhongMaterial 
            color={0xccff00} 
            emissive={0xccff00} 
            emissiveIntensity={0.5} 
            flatShading 
          />
        </mesh>
      </group>
    </>
  );
}

export default function ThreeJsAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-90 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true, antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
