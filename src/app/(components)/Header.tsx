"use client";
import { useState } from "react";
import Link from "next/link";
import styles from './Header.module.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>Muhammad Awais</div>
        <nav className={`${styles.nav} ${styles.navDesktop}`}>
          <Link href="/">
            <button className={styles.navButton}>Home</button>
          </Link>
          <Link href="/projects">
            <button className={styles.navButton}>Projects</button>
          </Link>
          <Link href="/about">
            <button className={styles.navButton}>About</button>
          </Link>
          <Link href="/contact">
            <button className={styles.navButton}>Contact</button>
          </Link>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className={styles.navMobile}>
          <Link href="/">
            <p className={styles.navItem}>Home</p>
          </Link>
          <Link href="/projects">
            <p className={styles.navItem}>Projects</p>
          </Link>
          <Link href="/about">
            <p className={styles.navItem}>About</p>
          </Link>
          <Link href="/contact">
            <p className={styles.navItem}>Contact</p>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
