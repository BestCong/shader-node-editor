import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

function MyMaterial() {
  return <meshStandardMaterial color="mediumpurple" side={THREE.DoubleSide}/>;
}

function Suzanne() {
  const { nodes } = useGLTF("./suzanne.glb");

  return (
    <mesh geometry={nodes.Suzanne.geometry} scale={0.7}>
      <MyMaterial />
    </mesh>
  );
}

export default function Preview({ meshName }) {
  const geos = { cube: <boxGeometry />, plane: <planeGeometry /> };

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {meshName === "susanne" ? (
        <Suzanne />
      ) : (
        <mesh>
          {geos[meshName]}
          <MyMaterial />
        </mesh>
      )}
    </>
  );
}
