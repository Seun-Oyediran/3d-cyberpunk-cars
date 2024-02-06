import React, { Fragment, useEffect, useRef, useState } from "react";
import { Lights } from ".";
import {
  CameraControls,
  Environment,
  Grid,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { DEG2RAD } from "three/src/math/MathUtils.js";
import { carData } from "@/utils/static";

const SCENE_DISTANCE = 1;

interface IProps {
  activeIndex: number;
}

const Experience = (props: IProps) => {
  const { activeIndex } = props;
  const viewport = useThree((state) => state.viewport);
  const cameraRef = useRef<CameraControls | null>(null);

  const lastIndex = useRef(0);

  const scale = Math.max(0.5, Math.min(1.1, (window?.innerWidth || 1) / 1920));

  useEffect(() => {
    const cameraMove = async () => {
      await cameraRef?.current?.setLookAt(
        (viewport.width + SCENE_DISTANCE) * lastIndex.current,
        3,
        11,
        (viewport.width + SCENE_DISTANCE) * lastIndex.current,
        0,
        0,
        true
      );
      await cameraRef?.current?.setLookAt(
        (activeIndex + 1) * (viewport.width + SCENE_DISTANCE),
        1,
        11,
        activeIndex * (viewport.width + SCENE_DISTANCE),
        0,
        0,
        true
      );
      await cameraRef?.current?.setLookAt(
        (viewport.width + SCENE_DISTANCE) * activeIndex,
        0,
        5,
        (viewport.width + SCENE_DISTANCE) * activeIndex,
        0,
        0,
        true
      );
    };

    if (lastIndex.current !== activeIndex) {
      cameraMove();
      lastIndex.current = activeIndex;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      cameraRef.current?.setLookAt(
        (viewport.width + SCENE_DISTANCE) * activeIndex,
        0,
        5,
        (viewport.width + SCENE_DISTANCE) * activeIndex,
        0,
        0
      );
    }, 100);
    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport]);

  return (
    <Fragment>
      <CameraControls
        touches={{
          one: 0,
          three: 0,
          two: 0,
        }}
        mouseButtons={{
          left: 0,
          middle: 0,
          right: 0,
          wheel: 0,
        }}
        ref={cameraRef}
      />

      <Grid
        position-y={-viewport.height / 2}
        sectionSize={1}
        sectionColor={"#ffffff"}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />

      {carData.map((item) => (
        <mesh
          position={[item.id * (viewport.width + SCENE_DISTANCE), 0, 0]}
          key={item.id}
        >
          <planeGeometry args={[viewport.width / 1, viewport.height / 1]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <group dispose={null}>
                <PerspectiveCamera
                  makeDefault
                  position={[0, 1, 12]}
                  near={0.5}
                />
                <OrbitControls
                  autoRotate
                  enablePan={false}
                  maxPolarAngle={DEG2RAD * 75}
                  minDistance={10}
                  maxDistance={16}
                  autoRotateSpeed={0.5}
                />

                <mesh
                  scale={item?.scaleMultiply * scale}
                  position-y={item?.positionY}
                >
                  {item?.model({})}
                </mesh>

                <Environment preset="city" />
              </group>
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </Fragment>
  );
};

export default Experience;
