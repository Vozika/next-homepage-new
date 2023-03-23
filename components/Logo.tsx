import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Logo.module.css";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <div className={styles.logo}>
      {router.asPath !== "/" ? (
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Logo"
            className={styles.image}
            fill={true}
            priority
          />
        </Link>
      ) : (
        <Image
          src="/logo.svg"
          alt="Logo"
          className={styles.image}
          fill={true}
          priority
        />
      )}
    </div>
  );
};

export default Logo;
