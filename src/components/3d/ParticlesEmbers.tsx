import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const ParticlesEmbers = ({ count = 350, mouse }: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null!);

  // Generate particle attributes: position, speed, size, color variance
  const [positions, colors, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    const crimson = new THREE.Color('#FF172F');
    const fireOrange = new THREE.Color('#FF612E');
    const darkBurgundy = new THREE.Color('#780B18');

    for (let i = 0; i < count; i++) {
      // Spread across 3D scene
      pos[i * 3 + 0] = (Math.random() - 0.5) * 22; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18 - 2; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2; // Z

      // Rising speed + slight drift
      vel[i * 3 + 0] = (Math.random() - 0.5) * 0.015;
      vel[i * 3 + 1] = Math.random() * 0.025 + 0.008; // upward
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      // Color mix: mostly crimson, some fiery orange, few subtle dark burgundy
      const colorRatio = Math.random();
      const chosenColor = colorRatio > 0.35 
        ? crimson.clone().lerp(fireOrange, Math.random() * 0.6) 
        : darkBurgundy.clone().lerp(crimson, Math.random());

      col[i * 3 + 0] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col, vel];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const posArr = posAttr.array as Float32Array;

    const mouseX = mouse.current.x;
    const mouseY = mouse.current.y;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Upward drift
      posArr[idx + 1] += velocities[idx + 1] * (delta * 60);
      
      // Horizontal drift affected subtly by mouse
      posArr[idx + 0] += (velocities[idx + 0] + mouseX * 0.001) * (delta * 60);
      posArr[idx + 2] += (velocities[idx + 2] + mouseY * 0.001) * (delta * 60);

      // Loop when particle floats above ceiling
      if (posArr[idx + 1] > 8) {
        posArr[idx + 1] = -10;
        posArr[idx + 0] = (Math.random() - 0.5) * 20;
        posArr[idx + 2] = (Math.random() - 0.5) * 16 - 2;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
