import React from 'react'
import style from './footer.module.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';


export default function Footer() {
    return (

        <div className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerLeft}>
                    <p className={style.p}>© 2024 Company</p>
                    <h3>Landing</h3>
                    <button className={style.btnFooter}>Purchase Now</button>
                </div>
               
                <div className={style.footerRight}>
                    <ul className={style.footerNav}>
                        <Link href={'/'} className={style.link}> <li className={style.footerItem}>Home</li></Link>
                        <Link href={'#about'} className={style.link}> <li className={style.footerItem}>About</li></Link>
                        <Link href={'#contact'} className={style.link}> <li className={style.footerItem}>Contact</li></Link>
                    </ul>
                    <div className={style.footerSocial}>
                        <Link href={'/'} className={style.link}><FaFacebook className={style.socialIcon} /></Link>
                        <Link href={'/'} className={style.link}><FaLinkedin className={style.socialIcon} /></Link>
                        <Link href={'/'} className={style.link}><FaTwitter className={style.socialIcon} /></Link>
                        <Link href={'/'} className={style.link}><FaYoutube className={style.socialIcon} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

