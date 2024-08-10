import {
  ReactFlow,
  Controls,
  Background
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';

export default function Editor() {
  return (
    <ReactFlow>
      <Background />
      <Controls />
    </ReactFlow>
  );
}
