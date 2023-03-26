import React, { useEffect } from "react";
import { useSprings, a } from "@react-spring/three";
import * as THREE from "three";

const length = 10;
const colors = ["#8fd3f4", "#f0f5f7"];

// const colors = [
//     "#A2CCB6",
//     "#FCEEB5",
//     "#EE786E",
//     "#e0feff",
//     "lightpink",
//     "lightblue",
//   ];

const data = Array.from({ length }, () => ({
  args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
}));

const random = (i: number) => {
  const r = Math.random();
  return {
    position: [200 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  };
};

interface Props {
  animateLetter: boolean;
}

const Content = ({ animateLetter }: Props) => {
  console.log(animateLetter);
  const [springs, set] = useSprings(length, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: animateLetter ? 2 : 2, tension: 150, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );

  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry args={d.args} />
      <a.meshStandardMaterial
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ));
};

export default Content;
