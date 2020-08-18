import React from 'react';
import Name from './Name/Name';
import Activity from './Activity/Activity';
import style from './../Body.module.css';

const AboutMe = () => {
    return (
        <div className={style.info}>
            <Name />
            <Activity />
        </div>
    );
}

export default AboutMe;