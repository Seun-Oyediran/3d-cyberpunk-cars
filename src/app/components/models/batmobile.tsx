/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 batmobile.glb --transform -s -S -k 
Files: batmobile.glb [11.62MB] > /Users/stephen/Downloads/futuristic cars/batmobile-transformed.glb [594.05KB] (95%)
Author: Gravity Jack (https://sketchfab.com/gravityjack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/batmobile-the-dark-knight-tumbler-7ae346a9724a40faa467a3107dfb09e9
Title: Batmobile-The Dark Knight Tumbler
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props: any) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/batmobile-transformed.glb"
  ) as any;

  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.039}>
          <group
            name="frontrighttire"
            position={[-180.093, 93.272, 503.655]}
            rotation={[2.74, -Math.PI / 2, 0]}
            scale={[11.178, 11.178, 9.335]}
          >
            <group name="Object_5" position={[0, 0, -11.057]}>
              <mesh
                name="frontrighttire_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.frontrighttire_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
          <group
            name="Frontbody"
            position={[-0.681, 196.75, 144.077]}
            rotation={[1.571, -1.566, 1.571]}
            scale={12}
          >
            <group
              name="struts"
              position={[-34.24, 6.374, -0.129]}
              rotation={[-0.005, 0, 0]}
            >
              <mesh
                name="struts_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.struts_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
            <group
              name="jet"
              position={[-37.005, -0.85, -0.135]}
              rotation={[3.137, -1.571, 0]}
              scale={[1, 1.312, 1]}
            >
              <mesh
                name="jet_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.jet_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
            <group
              name="Spoiler1"
              position={[-22.433, 12.201, 13.858]}
              rotation={[-1.417, 0, 1.605]}
              scale={1.223}
            >
              <group
                name="Object_15"
                position={[-0.024, 0.709, 0.209]}
                rotation={[0, 0.011, 0]}
              >
                <mesh
                  name="Spoiler1_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler1_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="Spoiler3"
              position={[-26.546, 10.79, 14.099]}
              rotation={[-1.35, 0.002, 1.841]}
              scale={1.223}
            >
              <group
                name="Object_18"
                position={[-0.583, -3.202, 1.737]}
                rotation={[0, 0, -0.183]}
              >
                <mesh
                  name="Spoiler3_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler3_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="Spoiler5"
              position={[-29.588, 7.846, 13.607]}
              rotation={[-1.576, 0, Math.PI / 2]}
            >
              <group name="Object_21" position={[13.994, 52.996, -24.176]}>
                <mesh
                  name="Spoiler5_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler5_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="Spoiler2"
              position={[-22.148, 12.106, -14.085]}
              rotation={[-1.417, 0, 1.605]}
              scale={1.223}
            >
              <group
                name="Object_24"
                position={[-22.577, 1.712, 3.794]}
                rotation={[0, 0.011, 0]}
              >
                <mesh
                  name="Spoiler2_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler2_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="Spoiler4"
              position={[-26.901, 10.85, -14.318]}
              rotation={[-1.699, -0.001, 1.58]}
              scale={1.223}
            >
              <group
                name="Object_27"
                position={[-23.393, -3.33, -1.296]}
                rotation={[0, -Math.PI / 9, 0.079]}
              >
                <mesh
                  name="Spoiler4_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler4_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="Spoiler6"
              position={[-29.729, 7.72, -12.47]}
              rotation={[-1.576, 0, Math.PI / 2]}
            >
              <group name="Object_30" position={[-12.084, 52.855, -24.176]}>
                <mesh
                  name="Spoiler6_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Spoiler6_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="FrontStrut_left"
              position={[30.494, -9.08, -17.707]}
              rotation={[-0.002, 0, 0]}
            >
              <group name="Object_33" position={[-4.44, 1.873, 37.493]}>
                <mesh
                  name="FrontStrut_left_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontStrut_left_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="FrontStrutBar"
              position={[30.372, -9.32, 16.1]}
              rotation={[-0.005, 0, 0]}
            >
              <group name="Object_36" position={[-3.971, 2.274, 3.734]}>
                <mesh
                  name="FrontStrutBar_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontStrutBar_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="boostfanright"
              position={[-18.431, -1.663, 22.751]}
              rotation={[-0.81, 0.433, 0.057]}
            >
              <group
                name="Object_39"
                position={[45.615, -1.891, 5.96]}
                rotation={[0.715, -0.2, 0.171]}
              >
                <mesh
                  name="boostfanright_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.boostfanright_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="boostfanleft"
              position={[-18.565, -1.957, -22.584]}
              rotation={[-0.81, 0.433, 0.057]}
            >
              <group
                name="Object_42"
                position={[30.685, -33.724, 34.579]}
                rotation={[0.715, -0.2, 0.171]}
              >
                <mesh
                  name="boostfanleft_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.boostfanleft_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group
              name="FrontStrut_right"
              position={[29.947, -8.021, 17.635]}
              rotation={[0.086, 0, 0]}
            >
              <group name="Object_45" position={[-3.988, 0.689, 2.218]}>
                <mesh
                  name="FrontStrut_right_BatMobile_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontStrut_right_BatMobile_0.geometry}
                  material={materials.BatMobile}
                />
              </group>
            </group>
            <group name="Object_8" position={[27.172, -7.232, 19.765]}>
              <mesh
                name="Frontbody_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.Frontbody_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
          <group
            name="backtires"
            position={[0.087, 121.945, -288.441]}
            rotation={[-2.858, -Math.PI / 2, 0]}
            scale={12}
          >
            <group name="Object_48" position={[0, 0, 16.649]}>
              <mesh
                name="backtires_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.backtires_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
          <group
            name="Frontleftwheel"
            position={[180.325, 93.272, 503.655]}
            rotation={[2.74, -1.571, 0]}
            scale={[11.178, 11.178, 9.335]}
          >
            <group name="Object_51" position={[0, 0, 27.553]}>
              <mesh
                name="Frontleftwheel_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.Frontleftwheel_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
          <group
            name="Window"
            position={[-0.074, 250.826, 256.541]}
            rotation={[-1.571, 0, 0]}
            scale={12}
          >
            <group name="Object_54" position={[-0.813, -1.367, 3.05]}>
              <mesh
                name="Window_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.Window_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
          <group
            name="Hatch"
            position={[0.244, 247.445, 115.577]}
            rotation={[-1.571, 0, 0]}
            scale={12}
          >
            <group name="Object_57" position={[-12.586, 0.847, 4.917]}>
              <mesh
                name="Hatch_BatMobile_0"
                castShadow
                receiveShadow
                geometry={nodes.Hatch_BatMobile_0.geometry}
                material={materials.BatMobile}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/batmobile-transformed.glb");