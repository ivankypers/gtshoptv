import React from 'react';
import styles from './Main.module.scss'

import Button from '../../components/Button';

const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>Монетизируйте клиентскую базу, не снижая NPS</h1>
                <p className={styles.subtitle}>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной
                    монетизации</p>
               <Button text='Заказать звонок' customClass="orange-button" />
            </div>
        </main>
    );
};

export default Main;