import React from 'react';
import Name from './Name/Name';
import Activity from './Activity/Activity';
import style from './../Body.module.css';
import Status from './Status/Status';

const AboutMe = (props) => {
    return (
        <div className={style.info}>
            <Name name={props.profileInfo.fullName} />
            <Activity activity={props.profileInfo.aboutMe} />
            <Status status={props.status} setStatus={props.setStatus} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default AboutMe;