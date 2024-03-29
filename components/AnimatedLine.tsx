import React, { Dispatch, SetStateAction } from "react";
import { CustomValueType, motion } from "framer-motion";
import Link from "next/link";

interface Props {
  line: string;
  animateLetter: boolean;
  setAnimateLetter: Dispatch<SetStateAction<boolean>>;
  css: string;
  foregroundColor: string | CustomValueType | undefined;
  primaryColor: string | CustomValueType | undefined;
  link: string
}

const variants = {
  initial: { opacity: 0, scale: 0, x: "100vw" },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.05,
    },
  },
};

const AnimatedLine = ({
  line,
  animateLetter,
  setAnimateLetter,
  css,
  foregroundColor,
  primaryColor,
  link
}: Props) => {
  function arrayFromLine(line: string) {
    return line.split("");
  }

  function arrayOfObjects(line: string) {
    return arrayFromLine(line).map((letter, index) => ({
      letter: letter,
      id: index + 1,
    }));
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      {arrayOfObjects(line).map((character) => {
        return (
          <motion.div className={css} variants={variants} key={character.id}>
            <Link href={link}>
              <motion.p
                initial={{
                  color: foregroundColor,
                  scale: 1,
                  x: 0,
                }}
                animate={{
                  scale:
                    animateLetter && character.id === getRandomInt(line.length)
                      ? 1.3
                      : 1,
                  x: 0,
                }}
                transition={{
                  scale: { type: "spring", stiffness: 300 },
                }}
                whileHover={{
                  scale: 0.8,
                  color: primaryColor,
                }}
                onHoverStart={(e) => {
                  setAnimateLetter(true);
                }}
                onHoverEnd={(e) => {
                  setAnimateLetter(false);
                }}
              >
                {character.letter}
              </motion.p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedLine;
