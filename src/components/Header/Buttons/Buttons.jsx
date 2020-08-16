import React from 'react';
import styles from './../header.module.css';

const Buttons = () => {
    return (
        <div className="btns">
            <button className={styles.btn + ' ' + styles.btnLogIn}>Log In</button>
            <button className={styles.btn + ' ' + styles.btnSignUp}>Sign Up</button>
        </div>
    );
}

export default Buttons;