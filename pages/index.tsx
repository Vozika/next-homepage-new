import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedLine from "../components/AnimatedLine";

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

const variants4 = {
  initial: { y: -300, opacity: 0 },
  animate: {
    y: [100, 0, 0, 0],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 1,
      times: [0, 0.8, 0.9, 1],
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [animateLetterFirst, setAnimateLetterFirst] = useState(false);
  const [animateLetterSecond, setAnimateLetterSecond] = useState(false);
  const [animateLetterThird, setAnimateLetterThird] = useState(false);

  const firstLine: string = "Веб-разработчик";
  const secondLine: string = "Дизайнер";
  const thirdLine: string = "Иллюстратор";

  const foregroundColor = "rgb(var(--foreground-rgb))";
  const primaryColor = "rgb(var(--primary-rgb))";

  return (
    <>
      <Head>
        <title>Сергей Возыка - веб-разработчик, дизайнер, иллюстратор</title>
        <meta
          name="description"
          content="Сайт-портфолио Сергея Возыки, веб-разработчика, дизайнера, иллюстратора. Здесь можно посмотреть его графические и прочие работы, а также ряд сайтов и приложений, которые он сделал."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.vozika.ru/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <AnimatedLine
            line={firstLine}
            animateLetter={animateLetterFirst}
            setAnimateLetter={setAnimateLetterFirst}
            css={styles.first_line}
            foregroundColor={foregroundColor}
            primaryColor={primaryColor}
          />

          <br />

          <AnimatedLine
            line={secondLine}
            animateLetter={animateLetterSecond}
            setAnimateLetter={setAnimateLetterSecond}
            css={styles.second_line}
            foregroundColor={primaryColor}
            primaryColor={foregroundColor}
          />

          <br />

          <AnimatedLine
            line={thirdLine}
            animateLetter={animateLetterThird}
            setAnimateLetter={setAnimateLetterThird}
            css={styles.third_line}
            foregroundColor={foregroundColor}
            primaryColor={primaryColor}
          />

          <motion.div variants={variants4}>
            <motion.div
              transition={{ scale: { type: "spring", stiffness: 500 } }}
              className={styles.forth_line}
              initial={{
                backgroundColor: "rgb(var(--secondary-dark-rgb)",
                color: "rgb(var(--foreground-rgb))",
                scale: 1,
                x: 0,
              }}
              whileHover={{
                color: "rgb(var(--light-rgb))",
                backgroundColor: "rgb(var(--primary-rgb))",
                scale: 1.2,
                x: 10,
              }}
            >
              <Link href={"about"}>и другое</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className={styles.line}></div>
      </main>
    </>
  );
}
