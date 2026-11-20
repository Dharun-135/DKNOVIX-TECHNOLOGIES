import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RobotModelProps {
  scrollProgress: React.MutableRefObject<number>;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export const RobotModel: React.FC<RobotModelProps> = ({ scrollProgress, mouse }) => {
  // Main structural refs
  const rootGroupRef = useRef<THREE.Group>(null!);
  const mainChassisRef = useRef<THREE.Group>(null!);
  const opticalSensorRef = useRef<THREE.Group>(null!);
  const scannerBeamRef = useRef<THREE.Mesh>(null!);
  const scannerApertureRef = useRef<THREE.Mesh>(null!);
  const energyCoreRef = useRef<THREE.Mesh>(null!);
  const energyCoreInnerRef = useRef<THREE.Mesh>(null!);
  const coreApertureRingRef = useRef<THREE.Group>(null!);
  const outerOrbitalRing1Ref = useRef<THREE.Group>(null!);
  const outerOrbitalRing2Ref = useRef<THREE.Group>(null!);
  const leftModuleRef = useRef<THREE.Group>(null!);
  const rightModuleRef = useRef<THREE.Group>(null!);
  const leftFinRef = useRef<THREE.Mesh>(null!);
  const rightFinRef = useRef<THREE.Mesh>(null!);
  const leftThrusterGlowRef = useRef<THREE.Mesh>(null!);
  const rightThrusterGlowRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Core PBR Materials
  const materials = useMemo(() => {
    // 1. Glossy Black Titanium Armor (Deep Carbon Black)
    const glossyTitanium = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0A0A0D'),
      metalness: 0.94,
      roughness: 0.16,
      envMapIntensity: 1.6,
    });

    // 2. Brushed Dark Carbon Structural Subframe
    const darkCarbon = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#060608'),
      metalness: 0.88,
      roughness: 0.38,
      envMapIntensity: 1.0,
    });

    // 3. Polished Metallic Chrome / Gunmetal Accents
    const gunmetal = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#222228'),
      metalness: 0.96,
      roughness: 0.12,
      envMapIntensity: 1.8,
    });

    // 4. Tinted Optical Sensor Glass
    const sensorGlass = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#040406'),
      metalness: 0.92,
      roughness: 0.08,
      transparent: true,
      opacity: 0.88,
    });

    // 5. High-Luminance Glowing Crimson (Sensor & Circuits)
    const glowingCrimson = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FF172F'),
      emissive: new THREE.Color('#FF172F'),
      emissiveIntensity: 3.2,
      roughness: 0.1,
      metalness: 0.3,
      toneMapped: false,
    });

    // 6. Brilliant White-Hot Laser Core
    const glowingWhiteCore = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#FFFFFF'),
      emissiveIntensity: 4.5,
      roughness: 0.05,
      metalness: 0.1,
      toneMapped: false,
    });

    // 7. Fiery Orange Secondary Energy Radiator
    const glowingOrange = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FF612E'),
      emissive: new THREE.Color('#FF612E'),
      emissiveIntensity: 2.8,
      roughness: 0.15,
      metalness: 0.2,
      toneMapped: false,
    });

    return {
      glossyTitanium,
      darkCarbon,
      gunmetal,
      sensorGlass,
      glowingCrimson,
      glowingWhiteCore,
      glowingOrange,
    };
  }, []);

  // Energy Core Spark Particles
  const { particlePositions, particleVelocities } = useMemo(() => {
    const count = 36;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const radius = 0.35 + Math.random() * 0.45;

      positions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      positions[i * 3 + 1] = -0.15 + radius * Math.sin(phi);
      positions[i * 3 + 2] = 0.85 + radius * Math.cos(phi) * Math.sin(theta);

      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;
    }

    return { particlePositions: positions, particleVelocities: velocities };
  }, []);

  // Frame animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    // 1. Overall Autonomous Hovering Physics & Scroll Translation
    if (rootGroupRef.current) {
      // Harmonic floating physics (dual sine waves for organic anti-gravity hovering)
      const hoverY = Math.sin(time * 1.35) * 0.07 + Math.cos(time * 2.1) * 0.025;
      const hoverX = Math.cos(time * 0.85) * 0.035;

      // Position: sits prominently on the right side of hero section
      const targetX = THREE.MathUtils.lerp(1.22 + mx * 0.25 + hoverX, 0.2 + mx * 0.15, Math.min(scroll * 2, 1));
      const targetY = THREE.MathUtils.lerp(0.12 + hoverY, -1.9 - scroll * 1.5, scroll);
      const targetZ = THREE.MathUtils.lerp(0.4, -2.4 - scroll * 2, scroll);

      rootGroupRef.current.position.x = THREE.MathUtils.lerp(rootGroupRef.current.position.x, targetX, 0.06);
      rootGroupRef.current.position.y = THREE.MathUtils.lerp(rootGroupRef.current.position.y, targetY, 0.06);
      rootGroupRef.current.position.z = THREE.MathUtils.lerp(rootGroupRef.current.position.z, targetZ, 0.06);

      // Smooth banking & interaction orientation
      // Yaw (rotates gently towards cursor)
      const targetRotY = mx * 0.35 + Math.sin(time * 0.65) * 0.04 - scroll * 0.2;
      // Pitch (tilts up/down to inspect interaction)
      const targetRotX = -my * 0.25 + Math.sin(time * 1.1) * 0.025 + scroll * 0.1;
      // Roll (subtle flight banking when turning)
      const targetRotZ = -mx * 0.12 + Math.cos(time * 0.95) * 0.02;

      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(rootGroupRef.current.rotation.y, targetRotY, 0.06);
      rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(rootGroupRef.current.rotation.x, targetRotX, 0.06);
      rootGroupRef.current.rotation.z = THREE.MathUtils.lerp(rootGroupRef.current.rotation.z, targetRotZ, 0.06);
    }

    // 2. Optical Sensor Tracking & Laser Scanner Beam
    if (scannerApertureRef.current) {
      // Moves horizontally along the visor slot tracking the mouse cursor
      const targetApertureX = THREE.MathUtils.clamp(mx * 0.38, -0.38, 0.38);
      scannerApertureRef.current.position.x = THREE.MathUtils.lerp(
        scannerApertureRef.current.position.x,
        targetApertureX,
        0.12
      );
    }

    if (scannerBeamRef.current) {
      // Laser beam sweep pulse
      const sweepPulse = Math.sin(time * 3.2) * 0.6 + 2.8;
      materials.glowingCrimson.emissiveIntensity = sweepPulse;
    }

    // 3. Central AI Energy Reactor Pulsing
    if (energyCoreRef.current && energyCoreInnerRef.current) {
      const coreSpeed = 2.2;
      const corePulse = Math.sin(time * coreSpeed) * 0.7 + 3.2;
      materials.glowingCrimson.emissiveIntensity = corePulse;
      materials.glowingWhiteCore.emissiveIntensity = corePulse * 1.35;

      // Micro breathing scale of the plasma reactor
      const coreScale = 1 + Math.sin(time * coreSpeed) * 0.05;
      energyCoreRef.current.scale.set(coreScale, coreScale, coreScale);
    }

    // 4. Rotating Mechanical Aperture Ring & Gimbal Components
    if (coreApertureRingRef.current) {
      coreApertureRingRef.current.rotation.z = time * 0.85;
    }

    // Outer Gyroscopic Orbital Sensor Rings
    if (outerOrbitalRing1Ref.current) {
      outerOrbitalRing1Ref.current.rotation.z = time * 0.45;
      outerOrbitalRing1Ref.current.rotation.y = time * 0.25;
    }
    if (outerOrbitalRing2Ref.current) {
      outerOrbitalRing2Ref.current.rotation.x = -time * 0.35;
      outerOrbitalRing2Ref.current.rotation.z = -time * 0.55;
    }

    // 5. Articulated Side Modules Dynamic Banking
    if (leftModuleRef.current && rightModuleRef.current) {
      const leftTilt = Math.sin(time * 1.2) * 0.03 + my * 0.12 - mx * 0.15;
      const rightTilt = Math.sin(time * 1.2 + Math.PI) * 0.03 + my * 0.12 + mx * 0.15;

      leftModuleRef.current.rotation.x = THREE.MathUtils.lerp(leftModuleRef.current.rotation.x, leftTilt, 0.08);
      rightModuleRef.current.rotation.x = THREE.MathUtils.lerp(rightModuleRef.current.rotation.x, rightTilt, 0.08);

      leftModuleRef.current.rotation.z = THREE.MathUtils.lerp(
        leftModuleRef.current.rotation.z,
        -0.08 - mx * 0.08,
        0.08
      );
      rightModuleRef.current.rotation.z = THREE.MathUtils.lerp(
        rightModuleRef.current.rotation.z,
        0.08 - mx * 0.08,
        0.08
      );
    }

    // Stabilizer ailerons micro-adjusting
    if (leftFinRef.current && rightFinRef.current) {
      leftFinRef.current.rotation.y = Math.sin(time * 2.4) * 0.08 + mx * 0.15;
      rightFinRef.current.rotation.y = -Math.sin(time * 2.4) * 0.08 + mx * 0.15;
    }

    // Rear Plasma Thruster Exhaust Pulse
    if (leftThrusterGlowRef.current && rightThrusterGlowRef.current) {
      const thrusterFlicker = 1 + Math.sin(time * 14.0) * 0.18 + Math.cos(time * 22.0) * 0.12;
      leftThrusterGlowRef.current.scale.set(thrusterFlicker, thrusterFlicker * 1.2, thrusterFlicker);
      rightThrusterGlowRef.current.scale.set(thrusterFlicker, thrusterFlicker * 1.2, thrusterFlicker);
    }

    // 6. Particle Energy Sparks Animation
    if (particlesRef.current) {
      const geom = particlesRef.current.geometry;
      const posAttr = geom.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3] += particleVelocities[i * 3];
        arr[i * 3 + 1] += particleVelocities[i * 3 + 1];
        arr[i * 3 + 2] += particleVelocities[i * 3 + 2];

        // Reset if particle moves too far
        const dist = Math.sqrt(
          arr[i * 3] * arr[i * 3] +
            (arr[i * 3 + 1] + 0.15) * (arr[i * 3 + 1] + 0.15) +
            (arr[i * 3 + 2] - 0.85) * (arr[i * 3 + 2] - 0.85)
        );

        if (dist > 1.4 || Math.random() < 0.01) {
          const theta = Math.random() * Math.PI * 2;
          const phi = (Math.random() - 0.5) * Math.PI;
          const radius = 0.32;
          arr[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
          arr[i * 3 + 1] = -0.15 + radius * Math.sin(phi);
          arr[i * 3 + 2] = 0.85 + radius * Math.cos(phi) * Math.sin(theta);
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={rootGroupRef} position={[1.22, 0.12, 0.4]} scale={[1.28, 1.28, 1.28]}>
      {/* ========================================================
          1. CENTRAL AUTONOMOUS AI ROBOTIC CHASSIS (POD BODY)
         ======================================================== */}
      <group ref={mainChassisRef}>
        {/* Main Aerodynamic Titanium Spherical Hull */}
        <mesh material={materials.glossyTitanium} scale={[1.08, 0.94, 1.02]}>
          <sphereGeometry args={[0.92, 48, 48]} />
        </mesh>

        {/* Top Armor Crest Plate (Hardened Protective Shell) */}
        <mesh
          material={materials.glossyTitanium}
          position={[0, 0.58, 0.08]}
          rotation={[-0.14, 0, 0]}
          scale={[0.82, 0.38, 0.88]}
        >
          <sphereGeometry args={[0.9, 32, 24]} />
        </mesh>

        {/* Top Aerodynamic Intake Fin / Ridge */}
        <mesh material={materials.gunmetal} position={[0, 0.88, -0.06]}>
          <boxGeometry args={[0.07, 0.18, 0.72]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0, 0.96, -0.04]}>
          <boxGeometry args={[0.018, 0.04, 0.62]} />
        </mesh>

        {/* Recessed Matte Carbon Underbelly & Armor Seams */}
        <mesh material={materials.darkCarbon} position={[0, -0.42, 0.08]} scale={[0.88, 0.52, 0.84]}>
          <sphereGeometry args={[0.85, 32, 24]} />
        </mesh>

        {/* Bottom Stabilizer Vent Array */}
        <mesh material={materials.gunmetal} position={[0, -0.84, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.26, 0.34, 0.14, 24]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0, -0.9, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.16, 0.22, 0.06, 24]} />
        </mesh>

        {/* ========================================================
            2. HORIZONTAL GLOWING CRIMSON OPTICAL SENSOR (VISOR)
           ======================================================== */}
        <group ref={opticalSensorRef} position={[0, 0.24, 0.76]}>
          {/* Beveled Sensor Visor Frame */}
          <mesh material={materials.gunmetal} position={[0, 0, -0.02]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[1.08, 0.22, 0.18]} />
          </mesh>

          {/* Curved Dark Titanium Visor Face */}
          <mesh material={materials.sensorGlass} position={[0, 0, 0.07]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[1.02, 0.15, 0.04]} />
          </mesh>

          {/* Continuous Glowing Crimson Laser Array Bar */}
          <mesh ref={scannerBeamRef} material={materials.glowingCrimson} position={[0, 0, 0.06]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.96, 0.038, 0.02]} />
          </mesh>

          {/* Active Interactive Scanner Aperture / Pupil (Tracks Mouse) */}
          <mesh
            ref={scannerApertureRef}
            material={materials.glowingWhiteCore}
            position={[0, 0, 0.08]}
            rotation={[0.08, 0, 0]}
          >
            <boxGeometry args={[0.16, 0.075, 0.025]} />
          </mesh>

          {/* Left & Right Optical Sensor Diodes */}
          <mesh material={materials.glowingCrimson} position={[-0.44, 0, 0.06]}>
            <sphereGeometry args={[0.028, 16, 16]} />
          </mesh>
          <mesh material={materials.glowingCrimson} position={[0.44, 0, 0.06]}>
            <sphereGeometry args={[0.028, 16, 16]} />
          </mesh>

          {/* Upper & Lower Visor Illumination Trim Lines */}
          <mesh material={materials.glowingCrimson} position={[0, 0.09, 0.06]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.85, 0.012, 0.01]} />
          </mesh>
          <mesh material={materials.glowingCrimson} position={[0, -0.09, 0.06]} rotation={[0.08, 0, 0]}>
            <boxGeometry args={[0.85, 0.012, 0.01]} />
          </mesh>
        </group>

        {/* ========================================================
            3. CIRCULAR AI ENERGY CORE (CENTRAL POWER REACTOR)
           ======================================================== */}
        <group position={[0, -0.22, 0.82]}>
          {/* Machined Heavy Titanium Housing Flange */}
          <mesh material={materials.gunmetal} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.38, 0.44, 0.14, 36]} />
          </mesh>

          {/* Dark Chamber Cavity */}
          <mesh material={materials.darkCarbon} position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.33, 0.33, 0.12, 32]} />
          </mesh>

          {/* Segmented Counter-Rotating Aperture Iris Ring */}
          <group ref={coreApertureRingRef} position={[0, 0, 0.06]}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <mesh
                  key={idx}
                  material={materials.gunmetal}
                  position={[Math.cos(rad) * 0.28, Math.sin(rad) * 0.28, 0]}
                  rotation={[0, 0, rad + Math.PI / 4]}
                >
                  <boxGeometry args={[0.07, 0.035, 0.02]} />
                </mesh>
              );
            })}
          </group>

          {/* Outer Glowing Energy Radiant Ring */}
          <mesh material={materials.glowingOrange} position={[0, 0, 0.065]}>
            <ringGeometry args={[0.26, 0.29, 36]} />
          </mesh>

          {/* Central Pulsing Crimson AI Plasma Sphere */}
          <mesh ref={energyCoreRef} material={materials.glowingCrimson} position={[0, 0, 0.07]}>
            <sphereGeometry args={[0.18, 32, 32]} />
          </mesh>

          {/* White-Hot Core Focus Point */}
          <mesh ref={energyCoreInnerRef} material={materials.glowingWhiteCore} position={[0, 0, 0.09]}>
            <sphereGeometry args={[0.08, 24, 24]} />
          </mesh>

          {/* Radial Circuit Glow Lines Emitter from Core */}
          {[30, 150, 210, 330].map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <mesh
                key={idx}
                material={materials.glowingCrimson}
                position={[Math.cos(rad) * 0.48, Math.sin(rad) * 0.48, -0.04]}
                rotation={[0, 0, rad]}
              >
                <boxGeometry args={[0.22, 0.015, 0.015]} />
              </mesh>
            );
          })}
        </group>

        {/* Symmetrical Panel Seam Circuits */}
        <mesh material={materials.glowingCrimson} position={[-0.45, 0.02, 0.65]} rotation={[0, 0.55, 0]}>
          <boxGeometry args={[0.015, 0.55, 0.015]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0.45, 0.02, 0.65]} rotation={[0, -0.55, 0]}>
          <boxGeometry args={[0.015, 0.55, 0.015]} />
        </mesh>
      </group>

      {/* ========================================================
          4. ARTICULATED TWIN MECHANICAL SIDE MODULES (SENSOR/THRUSTER PODS)
         ======================================================== */}
      {/* --- LEFT SIDE MODULE --- */}
      <group ref={leftModuleRef} position={[-1.24, 0.02, -0.05]}>
        {/* Hydraulic Gimbal Strut / Pylon to Main Hull */}
        <mesh material={materials.gunmetal} position={[0.28, 0, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.055, 0.055, 0.42, 16]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0.28, 0, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.44, 12]} />
        </mesh>

        {/* Aerodynamic Pod Housing */}
        <mesh material={materials.glossyTitanium} scale={[0.34, 0.68, 0.95]}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>

        {/* Top Heat Radiator Fin Slats */}
        <mesh material={materials.gunmetal} position={[0, 0.38, 0.05]}>
          <boxGeometry args={[0.22, 0.12, 0.65]} />
        </mesh>
        <mesh material={materials.glowingOrange} position={[0, 0.44, 0.05]}>
          <boxGeometry args={[0.04, 0.03, 0.52]} />
        </mesh>

        {/* Forward Sensor Cluster */}
        <mesh material={materials.sensorGlass} position={[0, 0.08, 0.52]}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0, 0.08, 0.56]}>
          <sphereGeometry args={[0.05, 16, 16]} />
        </mesh>

        {/* Dynamic Articulating Outer Stabilizer Wing */}
        <mesh ref={leftFinRef} material={materials.glossyTitanium} position={[-0.22, 0, -0.08]}>
          <boxGeometry args={[0.05, 0.58, 0.38]} />
        </mesh>

        {/* Rear Plasma Thruster Nozzle & Exhaust Glow */}
        <mesh material={materials.gunmetal} position={[0, 0, -0.52]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 0.18, 20]} />
        </mesh>
        <mesh
          ref={leftThrusterGlowRef}
          material={materials.glowingCrimson}
          position={[0, 0, -0.68]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneGeometry args={[0.12, 0.36, 16]} />
        </mesh>
      </group>

      {/* --- RIGHT SIDE MODULE --- */}
      <group ref={rightModuleRef} position={[1.24, 0.02, -0.05]}>
        {/* Hydraulic Gimbal Strut / Pylon to Main Hull */}
        <mesh material={materials.gunmetal} position={[-0.28, 0, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.055, 0.055, 0.42, 16]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[-0.28, 0, 0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.44, 12]} />
        </mesh>

        {/* Aerodynamic Pod Housing */}
        <mesh material={materials.glossyTitanium} scale={[0.34, 0.68, 0.95]}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>

        {/* Top Heat Radiator Fin Slats */}
        <mesh material={materials.gunmetal} position={[0, 0.38, 0.05]}>
          <boxGeometry args={[0.22, 0.12, 0.65]} />
        </mesh>
        <mesh material={materials.glowingOrange} position={[0, 0.44, 0.05]}>
          <boxGeometry args={[0.04, 0.03, 0.52]} />
        </mesh>

        {/* Forward Sensor Cluster */}
        <mesh material={materials.sensorGlass} position={[0, 0.08, 0.52]}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        <mesh material={materials.glowingCrimson} position={[0, 0.08, 0.56]}>
          <sphereGeometry args={[0.05, 16, 16]} />
        </mesh>

        {/* Dynamic Articulating Outer Stabilizer Wing */}
        <mesh ref={rightFinRef} material={materials.glossyTitanium} position={[0.22, 0, -0.08]}>
          <boxGeometry args={[0.05, 0.58, 0.38]} />
        </mesh>

        {/* Rear Plasma Thruster Nozzle & Exhaust Glow */}
        <mesh material={materials.gunmetal} position={[0, 0, -0.52]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 0.18, 20]} />
        </mesh>
        <mesh
          ref={rightThrusterGlowRef}
          material={materials.glowingCrimson}
          position={[0, 0, -0.68]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneGeometry args={[0.12, 0.36, 16]} />
        </mesh>
      </group>

      {/* ========================================================
          5. FUTURISTIC GYROSCOPIC ORBITAL SENSOR RINGS
         ======================================================== */}
      {/* Inner Tilted Orbital Ring */}
      <group ref={outerOrbitalRing1Ref} rotation={[0.35, 0.2, 0]}>
        <mesh material={materials.gunmetal}>
          <torusGeometry args={[1.72, 0.024, 16, 80]} />
        </mesh>
        {/* 4 Glowing Sensor Beacons on Inner Ring */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((ang, i) => (
          <mesh
            key={i}
            material={materials.glowingCrimson}
            position={[Math.cos(ang) * 1.72, Math.sin(ang) * 1.72, 0]}
          >
            <sphereGeometry args={[0.048, 16, 16]} />
          </mesh>
        ))}
      </group>

      {/* Outer Counter-Rotating Orbital Ring */}
      <group ref={outerOrbitalRing2Ref} rotation={[-0.45, -0.3, 0.2]}>
        <mesh material={materials.gunmetal}>
          <torusGeometry args={[2.05, 0.02, 16, 80]} />
        </mesh>
        {/* 6 Glowing Data Segment Nodes on Outer Ring */}
        {[0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3].map((ang, i) => (
          <mesh
            key={i}
            material={materials.glowingOrange}
            position={[Math.cos(ang) * 2.05, Math.sin(ang) * 2.05, 0]}
          >
            <boxGeometry args={[0.06, 0.06, 0.06]} />
          </mesh>
        ))}
      </group>

      {/* ========================================================
          6. FLOATING CORE ENERGY SPARKS & DATA PARTICLES
         ======================================================== */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.038}
          color="#FF172F"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
