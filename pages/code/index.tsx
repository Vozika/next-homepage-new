import React from "react";
import Head from "next/head";
import CodeCard from "../../components/CodeCard";
import code_data from "../../data/code_data";
import styles from "../../styles/Code.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Code = () => {
  return (
    <>
      <Head>
        <title>Сергей Возыка - веб-разработчик, дизайнер, иллюстратор</title>
        <meta
          name="description"
          content="Сайт-портфолио Сергея Возыки, веб-разработчика, дизайнера, иллюстратора. Здесь можно посмотреть его графические и прочие работы, а также ряд сайтов и приложений, которые он сделал."
        />
      </Head>
      <motion.div
        className={styles.main}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {code_data.map((data) => {
          return (
            <motion.div variants={variants} key={data.id}>
              <CodeCard
                title={data.title}
                text={data.text}
                github_url={data.github_url}
                tech={data.tech}
                url={data.url === "#" ? data.url : "../live/" + data.url}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Code;
