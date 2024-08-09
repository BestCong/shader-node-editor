import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function MyMaterial() {
  return <meshStandardMaterial color="mediumpurple" side={THREE.DoubleSide} />;
}

function Suzanne() {
  const { nodes } = useGLTF("./suzanne.glb");
  return <primitive object={nodes.Suzanne.geometry} />;
}

export default function Preview({ meshName }) {
  const geos = {
    cube: { geo: <boxGeometry />, scale: 1.0 },
    plane: { geo: <planeGeometry />, scale: 1.0 },
    suzanne: { geo: <Suzanne />, scale: 0.6 },
  };

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh scale={geos[meshName].scale}>
        {geos[meshName].geo}
        <MyMaterial />
      </mesh>
    </>
  );
}
