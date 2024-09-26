import {Button} from "@/app/components";

import styles from './Form.module.scss'

const Form: React.FC = () => {

    return (
        <section className={styles.formSection}>
            <div className="container">
                <h2 className={styles.title}>
                    Заполните форму
                </h2>
                <form className={styles.form}>
                    <textarea className={styles.messageInput} placeholder='Напишите свой вопрос' required />
                    <div>
                        <input className={styles.input} type="email" placeholder='Введите e-mail' required />
                        <div className={styles.checkboxWrap}>
                            <input className={styles.checkbox} id="requestCheck" type="checkbox"/>
                            <label className={styles.label} htmlFor="requestCheck">
                                Я ознакомлен(а) с <a href="">политикой конфиденциальности</a>  и согласен(на) на обработку <a
                                href="">персональных данных</a>.
                            </label>
                        </div>
                        <Button text="Отправить" customClass="black-button" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form