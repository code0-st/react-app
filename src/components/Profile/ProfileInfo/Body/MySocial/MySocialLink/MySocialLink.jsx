import React from 'react';
import style from './../../Body.module.css';

const MySocialLink = (props) => {
    return (
        <a href={props.href} className={style.link}>
            <div className={style.amount}>{props.amount}</div>
            <div className={style.title}>{props.title}</div>
        </a>
    );
}

export default MySocialLink;