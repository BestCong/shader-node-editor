import {
  OrbitControls,
  useGLTF,
  Resize,
  shaderMaterial,
} from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from 'react'

const MyMaterial = shaderMaterial(
  { color: new THREE.Color(0.2, 0.0, 0.1) },
  `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform vec3 color;
    void main() {
      gl_FragColor.rgba = vec4(color, 1.0);
    }
  `,
);

extend({ MyMaterial });

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

  const myMaterial = useRef()
  useEffect(()=>{
    myMaterial.current.color = new THREE.Color(1,0,0)
  },[])
  console.log(myMaterial)

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Resize
        width
        box3={
          new THREE.Box3(
            new THREE.Vector3(-0.5, -0.5, -0.5),
            new THREE.Vector3(0.5, 0.5, 0.5)
          )
        }
      >
        <mesh scale={geos[meshName].scale}>
          {geos[meshName].geo}
          <myMaterial ref={myMaterial} side={THREE.DoubleSide}/>
        </mesh>
      </Resize>
    </>
  );
}
