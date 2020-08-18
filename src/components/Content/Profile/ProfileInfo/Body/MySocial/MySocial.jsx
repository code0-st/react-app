import React from 'react';
import MySocialLink from './MySocialLink/MySocialLink';
import style from './../Body.module.css';

const MySocial = () => {
    return (
        <div className={style.mySocial}>
            <MySocialLink />
            <MySocialLink />
            <MySocialLink />
        </div>
    );
}

export default MySocial;