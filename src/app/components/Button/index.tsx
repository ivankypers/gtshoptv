import React from 'react';
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
    text: string;
    customClass?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, customClass, onClick }) => {
    return (
        <button className={clsx(styles.button, customClass)} onClick={onClick}>
            {text}
        </button>
    );
};
export default Button;