"use client"

import React, {useState, useEffect} from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [highlightAdvantages, setHighlightAdvantages] = useState<boolean>(false);
    const [highlightHowWeWork, setHighlightHowWeWork] = useState<boolean>(false);

    const handleBurgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 430) return;

            const balanceSection = document.getElementById('balance');
            const reportsSection = document.getElementById('reports');
            const balanceRect = balanceSection?.getBoundingClientRect();
            const reportsRect = reportsSection?.getBoundingClientRect();
            const balanceInView = balanceRect && balanceRect.top < window.innerHeight && balanceRect.bottom >= 0;
            const reportsInView = reportsRect && reportsRect.top < window.innerHeight && reportsRect.bottom >= 0;

            if (balanceInView && reportsInView) {
                if (balanceRect.top < reportsRect.top) {
                    setHighlightAdvantages(true);
                    setHighlightHowWeWork(false);
                } else {
                    setHighlightAdvantages(false);
                    setHighlightHowWeWork(true);
                }
            } else {
                setHighlightAdvantages(!!balanceInView);
                setHighlightHowWeWork(!!reportsInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    Logo
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={clsx(styles.link, {[styles.highlight]: highlightAdvantages})} href="#balance" onClick={handleLinkClick}>Преимущества</a>
                    </li>
                    <li className={styles.item}>
                        <a className={clsx(styles.link, {[styles.highlight]: highlightHowWeWork})} href="#reports" onClick={handleLinkClick}>Как работаем</a>
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
                        <a className={clsx(styles.link, {[styles.highlight]: highlightAdvantages})} href="#balance" onClick={handleLinkClick}>Преимущества</a>
                    </li>
                    <li className={styles.item}>
                        <a className={clsx(styles.link, {[styles.highlight]: highlightHowWeWork})} href="#reports" onClick={handleLinkClick}>Как работаем</a>
                    </li>
                </ul>
            </div>

        </header>
    );
};

export default Header;