import React from 'react';
import style from './../../Body.module.css';

const Name = (props) => {
    return (
        <div className={style.name}>{props.name}</div>
    );
}

export default Name;