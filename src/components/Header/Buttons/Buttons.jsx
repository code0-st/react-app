import React from 'react';
import styles from './../header.module.css';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        <div className="btns">
            {
                props.isLogin ? <div className={styles.btnLogIn}>Здравствуйте, {props.login}</div>
                : <NavLink to='/login' className={styles.btn + ' ' + styles.btnLogIn}>Войти</NavLink>
            }
        </div>
    );
}

export default Buttons;