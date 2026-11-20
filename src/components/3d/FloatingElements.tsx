import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingElementsProps {
  scrollProgress: React.MutableRefObject<number>;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const FloatingElements = ({ scrollProgress, mouse }: FloatingElementsProps) => {
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const icosahedronRef = useRef<THREE.Mesh>(null!);
  const octahedronRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const nodesRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    if (groupRef.current) {
      // Gentle parallax response to mouse
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mx * 0.4, 0.04);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -my * 0.3 - scroll * 2.5, 0.04);
    }

    // Gimbal / Gyro Rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.25;
      ring1Ref.current.rotation.y = time * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.2;
      ring2Ref.current.rotation.z = time * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -time * 0.18;
      ring3Ref.current.rotation.z = -time * 0.22;
    }

    // Holographic wireframes
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.35;
      icosahedronRef.current.rotation.y = time * 0.4;
      icosahedronRef.current.position.y = 1.8 + Math.sin(time * 0.8) * 0.2;
    }
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = -time * 0.3;
      octahedronRef.current.rotation.z = time * 0.35;
      octahedronRef.current.position.y = -1.2 + Math.cos(time * 0.9) * 0.25;
    }

    // Nodes cluster slow orbit
    if (nodesRef.current) {
      nodesRef.current.rotation.y = time * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Surrounding Gyro Rings */}
      <mesh ref={ring1Ref} position={[0, 0.4, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#FF172F"
          emissive="#FF172F"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0.4, 0]}>
        <torusGeometry args={[3.6, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#FF612E"
          emissive="#FF612E"
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.95}
        />
      </mesh>

      <mesh ref={ring3Ref} position={[0, 0.4, 0]}>
        <torusGeometry args={[4.2, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#26070D"
          emissive="#FF172F"
          emissiveIntensity={0.6}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Floating Holographic Icosahedron (Left Depth) */}
      <mesh ref={icosahedronRef} position={[-4.5, 1.8, -2]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          wireframe
          color="#FF172F"
          emissive="#FF172F"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>

      {/* Floating Holographic Octahedron (Right Depth) */}
      <mesh ref={octahedronRef} position={[4.6, -1.2, -1.5]}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          wireframe
          color="#FF612E"
          emissive="#FF612E"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Floating Tech Data Nodes */}
      <group ref={nodesRef} position={[0, 0.5, 0]}>
        {[
          [-3.2, 2.4, 1.2],
          [3.5, 1.9, -1.0],
          [-2.8, -2.1, 0.8],
          [2.9, -1.8, 1.5],
          [-4.0, 0.2, -2.2],
          [4.1, 0.5, -2.0],
        ].map((pos, idx) => (
          <group key={idx} position={pos as [number, number, number]}>
            <mesh>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#FF172F"
                emissiveIntensity={3.0}
              />
            </mesh>
            <mesh>
              <ringGeometry args={[0.12, 0.14, 16]} />
              <meshBasicMaterial
                color="#FF612E"
                side={THREE.DoubleSide}
                transparent
                opacity={0.7}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};
