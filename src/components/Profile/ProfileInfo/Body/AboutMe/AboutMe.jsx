import React from 'react';
import Name from './Name/Name';
import Activity from './Activity/Activity';
import style from './../Body.module.css';

const AboutMe = (props) => {
    return (
        <div className={style.info}>
            <Name name={props.main.name} />
            <Activity activity={props.main.activity} />
        </div>
    );
}

export default AboutMe;