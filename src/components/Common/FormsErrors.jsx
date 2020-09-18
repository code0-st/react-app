import React from 'react';
import style from '../Login/Login.module.css';

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props}></input>
        {
            meta.touched && meta.error && <span className={style.error}>{meta.error}</span>
        }
        </div>
    );
}