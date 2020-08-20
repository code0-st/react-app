import React from 'react';
import style from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={style.photoBlock}>
            <img className={style.photo} src={props.photo} alt="" />
        </div>
    );
}

export default Avatar;