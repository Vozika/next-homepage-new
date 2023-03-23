import React from "react";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import Navbar from "./Navbar";


const Header = () => {
  return <div className={styles.main}>
    <Logo />
    <Navbar />
  </div>;
};

export default Header;
