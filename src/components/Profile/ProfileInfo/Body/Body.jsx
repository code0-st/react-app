import React from 'react';
import style from './Body.module.css';
import AboutMe from './AboutMe/AboutMe';
import MySocial from './MySocial/MySocial';

const Body = (props) => {
    return (
        <div className={style.body}>
            <AboutMe profileInfo={props.profile} />
            <MySocial social={props.social} />
        </div>
    );
}

export default Body;