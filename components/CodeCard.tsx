import React from "react";
import styles from "../styles/CodeCard.module.css";
import { Tech } from "../data/code_data";
import { VscMultipleWindows } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFramer } from "react-icons/si";

interface Props {
  title: string;
  text: string;
  github_url: string;
  tech: Tech;
  url: string;
}

const url = "";
const github_prefix = "https://github.com/Vozika/";

const CodeCard = ({ title, text, github_url, tech, url }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <p>
          {text}
          <br />
          <br />
        </p>

        <div className={styles.tech_icons_container}>
          {tech.html ? <FaHtml5 color="silver" size={48} /> : ""}
          {tech.css ? <IoLogoCss3 color="silver" size={48} /> : ""}
          {tech.react ? <FaReact color="silver" size={48} /> : ""}
          {tech.redux ? <SiRedux color="silver" size={48} /> : ""}
          {tech.sass ? <FaSass color="silver" size={48} /> : ""}
          {tech.typescript ? <SiTypescript color="silver" size={48} /> : ""}
          {tech.next ? <TbBrandNextjs color="silver" size={48} /> : ""}
          {tech.mui ? <SiMaterialui color="silver" size={48} /> : ""}
          {tech.framer ? <SiFramer color="silver" size={48} /> : ""}
        </div>

        <br />

        <div className={styles.icons_container}>
          <div className={styles.icons_container_block}>
            <VscMultipleWindows size={32} color="rgb(var(--primary-rgb))" />
            <a href={url} target="_blank">Посмотреть вживую</a>
          </div>
          <div className={styles.icons_container_block}>
            <VscGithub size={32} color="rgb(var(--primary-rgb))" />
            <a href={github_prefix + github_url}>Код на Гитхабе</a>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default CodeCard;
