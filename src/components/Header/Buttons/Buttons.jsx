import React from 'react';
import styles from './../header.module.css';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        <div className="btns">
            {
                props.isLogin ?
                    <div className={styles.userInfo}>
                        <div className={styles.user}>Здравствуйте, {props.login}</div>
                        <button onClick={props.logout} className={styles.btn + ' ' + styles.btnLogIn}>Выйти</button>
                    </div>
                : <NavLink to='/login' className={styles.btn + ' ' + styles.btnLogIn}>Войти</NavLink>
            }
        </div>
    );
}

export default Buttons;