"use client"

import React, {useState} from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleBurgerClick = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    Logo
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={styles.link} href="">Преимущества</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="">Как работаем</a>
                    </li>
                </ul>
                <button
                    className={clsx(styles.burger, {[styles.burgerActive]: menuOpen})}
                    onClick={handleBurgerClick}
                >
                    <span className={styles.burgerLine}></span>
                </button>
            </div>
            <div className={clsx(styles.menu, {[styles.menuOpen]: menuOpen})}>
                <ul>
                    <li className={styles.item}>
                        <a className={styles.link} href="">Преимущества</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="">Как работаем</a>
                    </li>
                </ul>
            </div>

        </header>
    );
};

export default Header;