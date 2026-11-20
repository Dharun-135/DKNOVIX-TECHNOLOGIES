import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AtmosphericProps {
  scrollProgress: React.MutableRefObject<number>;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const AtmosphericFogLight = ({ scrollProgress, mouse }: AtmosphericProps) => {
  const haloRef = useRef<THREE.Mesh>(null!);
  const secondaryHaloRef = useRef<THREE.Mesh>(null!);
  const gridRef = useRef<THREE.GridHelper>(null!);
  const raysGroupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    // Halo pulsing & breathing behind the robot
    if (haloRef.current) {
      const pulse = Math.sin(time * 1.5) * 0.08 + 1;
      const targetScale = (3.8 + scroll * 1.2) * pulse;
      haloRef.current.scale.set(targetScale, targetScale, 1);
      haloRef.current.position.x = THREE.MathUtils.lerp(haloRef.current.position.x, mx * 0.5, 0.05);
      haloRef.current.position.y = THREE.MathUtils.lerp(haloRef.current.position.y, 0.5 - my * 0.3 - scroll * 1.5, 0.05);
    }

    if (secondaryHaloRef.current) {
      const pulse2 = Math.cos(time * 2.0) * 0.05 + 1;
      secondaryHaloRef.current.scale.set(2.4 * pulse2, 2.4 * pulse2, 1);
      secondaryHaloRef.current.position.x = THREE.MathUtils.lerp(secondaryHaloRef.current.position.x, mx * 0.3, 0.05);
      secondaryHaloRef.current.position.y = THREE.MathUtils.lerp(secondaryHaloRef.current.position.y, 0.8 - my * 0.2 - scroll * 1.2, 0.05);
    }

    // Rays slow rotation
    if (raysGroupRef.current) {
      raysGroupRef.current.rotation.z = time * 0.03 + mx * 0.1;
    }

    // Grid scroll movement
    if (gridRef.current) {
      gridRef.current.position.z = (time * 0.5) % 2 - 2;
    }
  });

  return (
    <group>
      {/* Primary Red Halo Backdrop (Additive blending billboard) */}
      <mesh ref={haloRef} position={[0, 0.5, -3.2]}>
        <planeGeometry args={[7, 7]} />
        <meshBasicMaterial
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          color="#FF172F"
          map={createHaloTexture('#FF172F', '#FF612E', '#26070D')}
        />
      </mesh>

      {/* Secondary Intense Core Halo */}
      <mesh ref={secondaryHaloRef} position={[0, 0.8, -2.8]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          color="#FF612E"
          map={createHaloTexture('#FFFFFF', '#FF172F', '#000000')}
        />
      </mesh>

      {/* Light Rays passing through crimson fog */}
      <group ref={raysGroupRef} position={[0, 1.2, -4]}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <mesh
            key={i}
            rotation={[0, 0, (angle * Math.PI) / 180]}
            position={[0, 0, 0]}
          >
            <planeGeometry args={[0.3, 14]} />
            <meshBasicMaterial
              transparent
              opacity={0.06}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              color={i % 2 === 0 ? '#FF172F' : '#FF612E'}
            />
          </mesh>
        ))}
      </group>

      {/* Futuristic cyber ground grid */}
      <group position={[0, -4.5, 0]}>
        <gridHelper
          ref={gridRef}
          args={[60, 60, '#FF172F', '#26070D']}
          position={[0, 0, 0]}
        />
      </group>
    </group>
  );
};

function createHaloTexture(innerColor: string, midColor: string, outerColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const gradient = ctx.createRadialGradient(256, 256, 10, 256, 256, 256);
    gradient.addColorStop(0, innerColor);
    gradient.addColorStop(0.2, midColor);
    gradient.addColorStop(0.65, outerColor);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}
