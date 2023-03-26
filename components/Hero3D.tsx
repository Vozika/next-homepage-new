import React from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Hero3D.module.css";
import Content from "./Content";

interface Props {
  animateLetter: boolean;
}

const Hero3D = ({ animateLetter }: Props) => {
  return (
    <div className={styles.main}>
      <Canvas flat shadows camera={{ position: [0, 0, 100], fov: 100 }}>
        <pointLight intensity={0.5} />
        <ambientLight intensity={1.85} />
        <spotLight
          castShadow
          intensity={0.2}
          angle={Math.PI / 7}
          position={[150, 150, 250]}
          penumbra={1}
          shadow-mapSize={2048}
        />
        <Content animateLetter={animateLetter} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
