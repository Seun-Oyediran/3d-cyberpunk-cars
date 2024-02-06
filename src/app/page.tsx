"use client";
import { Canvas } from "@react-three/fiber";
import { Content, Experience } from "./components/shared";
import { useState } from "react";
import { carData } from "@/utils/static";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <Content
        index={activeIndex}
        handleNext={() => {
          setActiveIndex((prev) => (prev < carData.length - 1 ? prev + 1 : 0));
        }}
        handlePrev={() => {
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : carData.length - 1));
        }}
      />
      <div className="canvas__container">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          {/* <color attach="background" args={["#ececec"]} /> */}
          <color attach="background" args={["#191919"]} />
          <Experience activeIndex={activeIndex} />
        </Canvas>
      </div>
    </main>
  );
}
