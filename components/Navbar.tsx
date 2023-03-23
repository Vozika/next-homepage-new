import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const menu_data = [
  { text: "Home", url: "" },
  { text: "Обо мне", url: "about/" },
  { text: "Код", url: "code/" },
  { text: "Дизайн", url: "design/" },
  { text: "Картинки", url: "pictures/" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      {menu_data.map((data) => {
        return "/" + data.url !== router.asPath ? (
          <div key={data.text}>
            <Link href={"/" + data.url} className={styles.link}>
              {data.text}
            </Link>
          </div>
        ) : (
          <p className={styles.link_inactive} key={data.text}>
            {data.text}
          </p>
        );
      })}
    </div>
  );
};

export default Navbar;
