import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>
                    Logo
                </div>
                <ul className={styles.list}>
                    <li>
                        <a className={styles.link} href="">Преимущества</a>
                    </li>
                    <li>
                        <a href="">Как работаем</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;