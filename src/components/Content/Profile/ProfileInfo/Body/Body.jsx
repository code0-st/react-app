import React from 'react';
import style from './Body.module.css';
import AboutMe from './AboutMe/AboutMe';
import MySocial from './MySocial/MySocial';

const Body = () => {
    return (
        <div className={style.body}>
            <AboutMe />
            <MySocial />
        </div>
    );
}

export default Body;