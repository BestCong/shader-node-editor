import { OrbitControls } from "@react-three/drei";

export default function Preview() {
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
      <ambientLight intensity={ 1.5 } />
      
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
}
