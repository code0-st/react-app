import React from 'react';
import style from './../../Body.module.css';

const Activity = (props) => {
    return (
        <div className={style.activity}>{props.activity}</div>
    );
}

export default Activity;