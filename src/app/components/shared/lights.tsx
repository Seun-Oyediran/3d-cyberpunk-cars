import { useHelper, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import {
  LinearFilter,
  SRGBColorSpace,
  SpotLight,
  SpotLightHelper,
} from "three";

const Lights = () => {
  const spotLightRef = useRef<SpotLight | null>(null);
  // useHelper(spotLightRef, SpotLightHelper, "white");

  const spotLightRef2 = useRef<SpotLight | null>(null);
  // useHelper(spotLightRef2, SpotLightHelper, "white");

  return (
    <mesh>
      <ambientLight intensity={0.8} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        ref={spotLightRef}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        ref={spotLightRef2}
        // map={map}
      />
    </mesh>
  );
};

export default Lights;
