import React from "react";
import Head from "next/head";
import PictureCard from "../../components/PictureCard";
import pictures_data from "../../data/pictures_data";
import styles from "../../styles/Pictures.module.css";
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

const Design = () => {
  let url = 0;

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
        {pictures_data.map((data) => {
          if (url > 15) {
            url = 0;
          }

          return (
            <motion.div variants={variants} key={data.id}>
              <PictureCard
                url={`/images/${data.type}/${(url = url + 1)}.svg`}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Design;
