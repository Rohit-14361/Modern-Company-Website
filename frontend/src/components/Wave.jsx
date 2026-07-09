import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WaveMesh() {
  const mesh = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(18, 18, 120, 120);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      const z =
        Math.sin(x * 0.8 + time * 2) * 0.35 +
        Math.cos(y * 1 + time * 1.5) * 0.25;

      position.setZ(i, z);
    }

    position.needsUpdate = true;

    geometry.computeVertexNormals();

    mesh.current.rotation.z = Math.sin(time * 0.2) * 0.08;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      rotation={[-1.2, 0, 0]}
    >
      <meshStandardMaterial
        color="#00ff99"
        emissive="#00ff66"
        emissiveIntensity={2}
        wireframe
      />
    </mesh>
  );
}

export default function Wave() {
  return (
    <Canvas camera={{ position: [0, 4, 8], fov: 45 }}>
      <color attach="background" args={["#050816"]} />

      <ambientLight intensity={0.5} />

      <directionalLight
        position={[4, 8, 4]}
        intensity={3}
        color="#00ff99"
      />

      <pointLight
        position={[-5, 2, 5]}
        intensity={2}
        color="#00ffff"
      />

      <WaveMesh />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}