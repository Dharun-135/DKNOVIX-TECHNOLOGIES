import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { RobotModel } from './RobotModel';
import { AtmosphericFogLight } from './AtmosphericFogLight';
import { FloatingElements } from './FloatingElements';
import { ParticlesEmbers } from './ParticlesEmbers';

interface SceneContentProps {
  scrollProgress: React.MutableRefObject<number>;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}

const CameraAndLightingController = ({ scrollProgress, mouse }: SceneContentProps) => {
  const backlightRef = useRef<THREE.PointLight>(null!);
  const rimlightRef = useRef<THREE.PointLight>(null!);
  const mouseLightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    // Smooth Camera Choreography across the sections
    // Hero: [0, 0.2, 7.5] looking at [0.3, 0.5, 0]
    // About: camera moves back and tracks slightly left
    // Services: camera lifts and tilts down
    // Projects: camera pans wider
    // Contact: deep cinematic low angle
    const targetCamX = THREE.MathUtils.lerp(mx * 0.45, -0.6 + mx * 0.3, scroll);
    const targetCamY = THREE.MathUtils.lerp(0.2 - my * 0.3, -1.2 + Math.sin(time * 0.5) * 0.1, scroll);
    const targetCamZ = THREE.MathUtils.lerp(7.6, 9.8 + scroll * 1.5, scroll);

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCamZ, 0.05);

    // Look at point lerp
    const lookTargetX = THREE.MathUtils.lerp(0.35 + mx * 0.2, 0, scroll);
    const lookTargetY = THREE.MathUtils.lerp(0.65 - my * 0.2, -0.5 - scroll * 1.2, scroll);
    state.camera.lookAt(lookTargetX, lookTargetY, 0);

    // Dynamic Backlighting shift
    if (backlightRef.current) {
      const pulse = Math.sin(time * 1.8) * 2 + 11;
      backlightRef.current.intensity = pulse;
      backlightRef.current.position.x = THREE.MathUtils.lerp(backlightRef.current.position.x, mx * 1.5, 0.05);
      backlightRef.current.position.y = THREE.MathUtils.lerp(backlightRef.current.position.y, 1.2 - my * 0.8, 0.05);
    }

    if (rimlightRef.current) {
      rimlightRef.current.position.x = -3.5 + Math.cos(time * 0.8) * 0.8;
      rimlightRef.current.position.y = 2.0 + Math.sin(time * 0.8) * 0.5;
    }

    // Mouse-following front interactive light
    if (mouseLightRef.current) {
      mouseLightRef.current.position.x = mx * 4;
      mouseLightRef.current.position.y = -my * 3 + 1;
      mouseLightRef.current.position.z = 4;
    }
  });

  return (
    <>
      {/* Deep Burgundy Ambient Light */}
      <ambientLight color="#26070D" intensity={0.9} />

      {/* Main Crimson Volumetric Halo Backlight */}
      <pointLight
        ref={backlightRef}
        color="#FF172F"
        intensity={12}
        distance={24}
        decay={1.8}
        position={[0, 1.2, -3.5]}
      />

      {/* Fiery Orange Secondary Rim Light */}
      <pointLight
        ref={rimlightRef}
        color="#FF612E"
        intensity={6.5}
        distance={18}
        decay={2}
        position={[-3.5, 2.0, -2.5]}
      />

      {/* Titanium White Cool Key Light */}
      <directionalLight
        color="#F5F5F5"
        intensity={0.8}
        position={[4, 5, 6]}
      />

      {/* Soft Blue-Grey Fill Light for subtle metallic depth */}
      <directionalLight
        color="#4A5568"
        intensity={0.4}
        position={[-5, -2, 4]}
      />

      {/* Interactive Cursor Spotlight */}
      <pointLight
        ref={mouseLightRef}
        color="#FF172F"
        intensity={2.2}
        distance={12}
        decay={2}
      />
    </>
  );
};

export const Scene3D: React.FC = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mouse & Touch move handlers with smooth damping
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    };

    // Scroll progress handler
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress.current = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Subtle radial darkness vignette around edges */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,transparent_20%,#050505_95%)] opacity-85" />
      
      {/* Ambient Cyber Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none cyber-lines opacity-20" />

      <Canvas
        camera={{ fov: 42, position: [0, 0.2, 7.6] }}
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        onCreated={({ scene }) => {
          // Atmospheric deep fog
          scene.fog = new THREE.FogExp2('#050505', 0.042);
        }}
      >
        <Suspense fallback={null}>
          <CameraAndLightingController
            scrollProgress={scrollProgress}
            mouse={mouse}
            isMobile={isMobile}
          />
          
          <AtmosphericFogLight
            scrollProgress={scrollProgress}
            mouse={mouse}
          />

          <RobotModel
            scrollProgress={scrollProgress}
            mouse={mouse}
          />

          <FloatingElements
            scrollProgress={scrollProgress}
            mouse={mouse}
          />

          <ParticlesEmbers
            count={isMobile ? 140 : 380}
            mouse={mouse}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

