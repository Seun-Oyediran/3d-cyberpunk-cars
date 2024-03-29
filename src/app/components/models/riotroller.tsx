/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 zil-e167_car.glb --transform -s -S -k 
Files: zil-e167_car.glb [26.25MB] > /Users/stephen/Downloads/futuristic cars/zil-e167_car-transformed.glb [1.88MB] (93%)
Author: NETRUNNER_pl (https://sketchfab.com/NETRUNNER_pl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zil-e167-free-model-03098e01af84414bb7da34089de8662c
Title: ZIL-E167 - free model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials } = useGLTF(
    "/models/zil-e167_car-transformed.glb"
  ) as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_5"
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["ZIL-E167"]}
        position={[0, 0.52, 0]}
      />
      <mesh
        name="Object_6"
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.glass}
        position={[0, 0.52, 0]}
      />
      <mesh
        name="Object_7"
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.black}
        position={[0, 0.52, 0]}
      />
      <mesh
        name="Object_9"
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.steel}
        position={[0.126, -0.644, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.582, 1, 1]}
      />
      <mesh
        name="Object_11"
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.grey}
        position={[1.608, 1.537, 0.586]}
      />
      <mesh
        name="Object_17"
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.black_lines}
        position={[-4.454, -0.125, 0]}
        scale={0.131}
      />
      <mesh
        name="Object_43"
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={materials.lights}
        position={[-4.346, 0.625, 0.755]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        name="Object_48"
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.white}
        position={[-2.87, -0.65, 1.27]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Object_54"
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.black_tire}
        position={[-2.87, -0.65, 1.27]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/* <mesh
        name="Object_58"
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.dirty_concrete}
        position={[-0.28, -1.515, -0.042]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-7.663, 7.663, 7.663]}
      /> */}
    </group>
  );
}

useGLTF.preload("/models/zil-e167_car-transformed.glb");
