import React from 'react';
import styles from './../header.module.css';

const Buttons = () => {
    return (
        <div className="btns">
            <button className={styles.btn + ' ' + styles.btnLogIn}>Войти</button>
            <button className={styles.btn + ' ' + styles.btnSignUp}>Регистрация</button>
        </div>
    );
}

export default Buttons;