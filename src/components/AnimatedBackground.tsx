import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Create a glowing radial gradient texture for soft particles
const createParticleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
  }
  return new THREE.CanvasTexture(canvas);
};

function StarLayer({ count, size, blinkSpeed, phaseOffset }: { count: number, size: number, blinkSpeed: number, phaseOffset: number }) {
  const ref = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const particleTexture = useMemo(() => createParticleTexture(), []);
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color('#ffffff');
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
      
      // Colorful vibrant stars
      const hue = Math.random(); // Full spectrum
      const saturation = Math.random() * 0.6 + 0.4;
      const lightness = Math.random() * 0.5 + 0.5;
      color.setHSL(hue, saturation, lightness);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z -= delta / 100;
    }
    if (materialRef.current) {
      materialRef.current.opacity = 0.3 + 0.7 * Math.abs(Math.sin(state.clock.elapsedTime * blinkSpeed + phaseOffset));
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors={true}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        map={particleTexture}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function BlinkingStars() {
  return (
    <group>
      <StarLayer count={1000} size={0.02} blinkSpeed={1.0} phaseOffset={0} />
      <StarLayer count={1000} size={0.025} blinkSpeed={1.5} phaseOffset={Math.PI / 3} />
      <StarLayer count={1000} size={0.015} blinkSpeed={0.5} phaseOffset={Math.PI / 1.5} />
    </group>
  );
}

function Comets() {
  const cometsRef = useRef<THREE.Group>(null);
  
  const cometsData = useMemo(() => {
    return Array.from({ length: 8 }).map(() => {
      // Velocity mostly moving in one general direction to look like a meteor shower
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 2 + 1, 
        (Math.random() - 0.5) * 2 - 1, 
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(4 + Math.random() * 6);
      
      const direction = velocity.clone().normalize();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
      
      return {
        initialPosition: new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 5),
        velocity,
        quaternion,
        length: 1 + Math.random() * 3,
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (cometsRef.current) {
      cometsRef.current.children.forEach((child, i) => {
        const data = cometsData[i];
        child.position.addScaledVector(data.velocity, delta);
        if (child.position.length() > 20) {
          // Reset position to a spawn point far away
          const spawnDir = data.velocity.clone().multiplyScalar(-1).normalize();
          child.position.copy(spawnDir.multiplyScalar(15).add(new THREE.Vector3((Math.random() - 0.5)*15, (Math.random() - 0.5)*15, (Math.random() - 0.5)*10)));
        }
      });
    }
  });

  return (
    <group ref={cometsRef}>
      {cometsData.map((c, i) => (
        <mesh key={i} position={c.initialPosition} quaternion={c.quaternion}>
          <cylinderGeometry args={[0.002, 0.015, c.length, 4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020205] overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/20 blur-[120px]"></div>
      
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <fog attach="fog" args={['#020205', 2, 10]} />
        <BlinkingStars />
        <Comets />
      </Canvas>
    </div>
  );
}
