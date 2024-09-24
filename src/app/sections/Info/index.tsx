"use client"

import React, { useState } from 'react';
import styles from './Info.module.scss';

const Info: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'operators' | 'ott'>('operators');

    const handleTabClick = (tab: 'operators' | 'ott') => {
        setActiveTab(tab);
    };

    return (
        <section className={styles.info}>
            <div className="container">
                <div className={styles.left}>
                    <h2 className={styles.title}>
                        Дополнительные источники выручки для разных компаний
                    </h2>
                </div>
                <div className={styles.right}>
                    <div className={styles.buttonWrap}>
                        <button
                            className={`${styles.button} ${activeTab === 'operators' ? styles.buttonActive : ''}`}
                            onClick={() => handleTabClick('operators')}
                        >
                            Операторам
                        </button>
                        <button
                            className={`${styles.button} ${activeTab === 'ott' ? styles.buttonActive : ''}`}
                            onClick={() => handleTabClick('ott')}
                        >
                            ОТТ сервисам
                        </button>
                    </div>
                    <div>
                        {activeTab === 'operators' && (
                            <p className={styles.dsc}>
                                Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации для операторов.
                            </p>
                        )}
                        {activeTab === 'ott' && (
                            <p className={styles.dsc}>
                                Оптимизируйте ваши доходы и контент-сратегию с нашими решениями для ОТТ сервисов.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
