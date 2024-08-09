import { OrbitControls, useGLTF, Resize } from "@react-three/drei";
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
    cube: { geo: <boxGeometry />, scale: 0.5 },
    plane: { geo: <planeGeometry />, scale: 0.8 },
    suzanne: { geo: <Suzanne />, scale: 0.3 },
  };

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Resize width box3={new THREE.Box3(new THREE.Vector3(-.5,-.5,-.5),new THREE.Vector3(.5,.5,.5))}>
        <mesh scale={geos[meshName].scale}>
          {geos[meshName].geo}
          <MyMaterial />
        </mesh>
      </Resize>
    </>
  );
}
