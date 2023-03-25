import React from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Hero3D.module.css";

interface Props {
  animateLetter: boolean;
}

const Hero3D = ({ animateLetter }: Props) => {
  return (
    <div className={styles.main}>
      <Canvas flat shadows camera={{ position: [0, 0, 7], fov: 70 }}>
        <mesh>
          <sphereGeometry args={[5, 128]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight
          color={animateLetter ? "gray" : "red"}
          position={[0, 0, 10]}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
