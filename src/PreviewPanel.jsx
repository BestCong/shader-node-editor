import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Preview from "./Preview.jsx";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";

export default function PreviewPanel() {
  const [meshName, setMeshName] = useState("cube");

  return (
    <>
      <select value={meshName} onChange={(e) => setMeshName(e.target.value)}>
        <option value="plane">plane</option>
        <option value="cube">cube</option>
        <option value="suzanne">suzanne</option>
      </select>
      <Canvas
        camera={{
          fov: 20,
          near: 0.1,
          far: 200,
          position: [-4, 3, 3],
        }}
      >
        <Preview meshName={meshName} />
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>
    </>
  );
}
