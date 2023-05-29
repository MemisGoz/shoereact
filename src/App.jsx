import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelViewer from './model/Models';
import './App.css';
const App = () => {
  const initialMeshColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
  const [meshColors, setMeshColors] = useState(initialMeshColors);
  const controlsRef = useRef();
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center pt-2">Shoe Picker</h1>
      <div className="content-page">
        <div id="shoecontainer" className="artboard artboard-horizontal phone-4">
          <Canvas camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 5] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ModelViewer meshColors={meshColors} />
            <OrbitControls ref={controlsRef} />
          </Canvas>
        </div>
        <div className="flex">
          <div id="colorPickerContainer">
            {meshColors.map((color, index) => (
              <div key={index}>
      
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    const updatedColors = [...meshColors];
                    updatedColors[index] = e.target.value;
                    setMeshColors(updatedColors);
                  }}
                />
              </div>
            ))}
          </div>
          <div id="colorPickerContainer">
            <p>Laces</p>
            <p>Body</p>
            <p>Caps</p>
            <p>Inside</p>
            <p>Sole</p>
            <p>Stripes</p>
            <p>Band</p>
            <p>Patch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
