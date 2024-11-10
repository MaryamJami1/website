'use client'
import { useState } from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <h2 className={style.h2}>Landing</h2>


        <button className={style.hamburger} onClick={toggleMenu}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>

        <ul className={`${style.ul} ${isMenuOpen ? style.open : ''}`}>
          <Link href={'/'} className={style.link}><li className={style.li}>Home</li></Link>
          <Link href={'/about'} className={style.link}><li className={style.li}>About</li></Link>
          <Link href={'/contact'} className={style.link}><li className={style.li}>Contact</li></Link>
        </ul>

        <button className={style.btn}>Buy Now</button>
      </div>
    </nav>
  );
}
