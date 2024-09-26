import {Button} from "@/app/components";

import styles from './Reports.module.scss'
import Image from "next/image";

const Reports: React.FC = () => {

    return (
        <section className={styles.reports}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        Подробные отчёты для вас и правообладателей
                    </h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            Выручка, CTR, показы и другие показатели в реальном времени.
                        </li>
                        <li className={styles.item}>
                            Инструменты контроля качества трафика.
                        </li>
                        <li className={styles.item}>
                            Ежемесячные автоматические отчёты для каждого правообладателя.
                        </li>
                    </ul>
                    <Button text="Заказать звонок" customClass={styles.button} />
                </div>

                <Image className={styles.image} src='/reportsbg.png' alt='stats' width={721} height={482} />

            </div>
        </section>
    )

}

export default Reports