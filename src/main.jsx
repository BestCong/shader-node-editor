import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Preview from './Preview.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
        camera={ {
            fov: 20,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 3 ]
        } }
    >
        <Preview />
    </Canvas>
  </React.StrictMode>,
)
