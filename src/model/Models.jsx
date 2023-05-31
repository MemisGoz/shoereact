import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';


const ModelViewer = ({ meshColors }) => {

  const dracoLoader = useRef(new DRACOLoader());
  dracoLoader.current.setDecoderPath('./jsm/libs/draco/gltf/'); 

  const gltf = useLoader(GLTFLoader, './shoe.glb', loader => {
    loader.setDRACOLoader(dracoLoader.current);
  });

  

  useFrame(() => {
    gltf.scene.traverse(child => {
      if (child.isMesh && child.material) {
        const meshName = child.name;

        if (meshName === 'shoe') {
          // Handle first mesh 
          const meshIndex = 0;
         
          
          if (meshIndex < meshColors.length) {
            child.material.color.set(meshColors[meshIndex]);
            child.material.needsUpdate = true;
          }
        } else {
          // Handle other meshes 
          const meshIndex = parseInt(meshName.split('_')[1]);
         
          
          if (meshIndex >= 0 && meshIndex < meshColors.length) {
            child.material.color.set(meshColors[meshIndex]);
            child.material.needsUpdate = true;
          }
        }
      }
    });
  });

  

  return (
    <>
      <primitive object={gltf.scene} />
      
    </>
  );
};

export default ModelViewer;
