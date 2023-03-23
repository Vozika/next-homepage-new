import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: -1600 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.7,
    },
  },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const image_width = 350;

const About = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [closedThird, setClosedThird] = useState(false);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);

  useEffect(() => {
    if (!showSecond && !showThird) {
      setIsPhotoClicked(false);
    }
  });

  function openAndCloseFirst() {
    if (!isPhotoClicked) {
      if (showSecond && showThird) {
        setShowThird(false);
        setShowSecond(false);
      } else {
        setClosedThird(false);
        setShowSecond(true);
      }
      setIsPhotoClicked(true);
    }
  }

  function openAndCloseSecond() {
    setIsPhotoClicked(false);

    if (closedThird) {
      setShowSecond(false);
    } else if (showSecond && showThird) {
      setShowThird(false);
    } else {
      setShowThird(true);
    }
  }

  function closeThird() {
    setShowThird(false);
    setClosedThird(true);
  }

  return (
    <>
      <Head>
        <title>Сергей Возыка - веб-разработчик, дизайнер, иллюстратор</title>
        <meta
          name="description"
          content="Сайт-портфолио Сергея Возыки, веб-разработчика, дизайнера, иллюстратора. Здесь можно посмотреть его графические и прочие работы, а также ряд сайтов и приложений, которые он сделал."
        />
      </Head>
      <div>
        <motion.div
          className={styles.hero}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.div className={styles.square} variants={variants}>
            <div className={styles.image_container}>
              {/* <div className={styles.popup}></div> */}
              <Image
                onClick={() => openAndCloseFirst()}
                src="../images/about/budka_24.jpg"
                alt="Logo"
                // fill={true}
                width={image_width}
                height={image_width}
                className={styles.image}
                sizes="(max-width: 800px) 100vw,
              (max-width: 1200px) 25vw,
              33vw"
                priority
              />
            </div>
            <div className={styles.line}></div>
          </motion.div>

          <AnimatePresence>
            {showSecond && (
              <motion.div
                className={styles.square}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.image_container}>
                  <Image
                    onClick={() => openAndCloseSecond()}
                    src="../images/about/budka_6.jpg"
                    alt="Logo"
                    // fill={true}
                    width={image_width}
                    height={image_width}
                    className={styles.image}
                    //   sizes="(max-width: 800px) 100vw,
                    // (max-width: 1200px) 25vw,
                    // 33vw"
                    priority
                  />
                </div>
                <div className={styles.line}></div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showThird && (
              <motion.div
                onClick={() => closeThird()}
                className={styles.square}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.image_container}>
                  <Image
                    src="../images/about/budka_0.jpg"
                    alt="Logo"
                    // fill={true}
                    width={image_width}
                    height={image_width}
                    className={styles.image}
                    //   sizes="(max-width: 800px) 100vw,
                    // (max-width: 1200px) 25vw,
                    // 33vw"
                    priority
                  />
                </div>
                <div className={styles.line}></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <br />
        <br />

        <motion.div variants={textVariants} initial="initial" animate="animate">
          <h1>День добрый, дамы и господа. И другие</h1>
          <br />
          <p>
            Полагаю, что уже можно не представляться. Мои имя и фамилия написаны
            наверху страницы, так что их вы уже знаете. Позвольте к этой важной
            информации добавить ещё пару интересных фактов о себе.
            <br />
            <br />
          </p>
          <p>
            Я — веб-разработчик и графический дизайнер с достаточно большим
            опытом в обеих областях. Данный сайт является моим портфолио. В нём
            собраны мои лучшие и наиболее характерные работы, по которым можно
            составить представление о моём профессиональном уровне.
            <br />
            <br />
          </p>
          <motion.div className={styles.text_accent} variants={textVariants}>
            <h2>Технологии, которые я использую в веб-разработке</h2>
            <p>
              HTML, CSS, Javascript, SASS, Bootstrap, React, Redux Toolkit,
              Typescript, Next.js, Material UI, Framer Motion
            </p>
          </motion.div>
          <br />
          <p>
            Много и долго работал с Joomla, особенно в сфере создания
            интернет-магазинов. В меньшей степени знаком с другой популярной CMS
            — Wordpress. Но знаком.
          </p>
          <br />
          <motion.div className={styles.text_accent} variants={textVariants}>
            <h2>Графические редакторы, которыми я владею</h2>
            <p>
              Adobe Illustrator, Corel Draw, Adobe Photoshop, Adobe InDesign
            </p>
          </motion.div>
          <br />
          <p>
            В разные периоды своей жизни я также работал фотографом, продавцом,
            музыкальным редактором, менеджером по рекламе и маркетологом. К делу
            это особого отношения не имеет, зато есть, что вспомнить.
            Когда-нибудь я заведу на этом сайте блог и постараюсь описать все
            свои приключения.
          </p>
          <br />
          <p>
            При необходимости со мной можно связаться по почте:{" "}
            <a className={styles.mailto} href="mailto:metasoma@yandex.ru">
              metasoma@yandex.ru
            </a>
          </p>
          <br />
          <p>
            Я в социальных сетях и на различных сайтах:
            <br />
            <br />
          </p>
          <ul className={styles.list}>
            <li>
              <a href="https://vk.com/id95904579">Вконтакте</a>
            </li>
            <li>
              <a href="https://illustrators.ru/users/sergey-vozyka">
                Illustrators.Ru
              </a>
            </li>
            <li>
              <a href="http://www.free-lance.ru/users/vozika">Fl.ru</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default About;
