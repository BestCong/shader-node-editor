import React from "react";
import ReactDOM from "react-dom/client";
import PreviewPanel from "./PreviewPanel.jsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PanelGroup direction="horizontal">
      <Panel>
        <h1>Hello</h1>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={25} maxSize={50} minSize={10}>
        <PreviewPanel />
      </Panel>
    </PanelGroup>
  </React.StrictMode>
);
