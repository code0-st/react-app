import React from 'react';
import Name from './Name/Name';
import Activity from './Activity/Activity';
import style from './../Body.module.css';

const AboutMe = (props) => {
    return (
        <div className={style.info}>
            <Name name={props.profileInfo.fullName} />
            <Activity activity={props.profileInfo.aboutMe} />
        </div>
    );
}

export default AboutMe;