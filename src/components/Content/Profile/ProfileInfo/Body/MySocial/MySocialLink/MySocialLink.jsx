import React from 'react';
import style from './../../Body.module.css';

const MySocialLink = () => {
    return (
        <a href='/followers' className={style.link}>
            <div className={style.amount}>3</div>
            <div className={style.title}>followers</div>
        </a>
    );
}

export default MySocialLink;