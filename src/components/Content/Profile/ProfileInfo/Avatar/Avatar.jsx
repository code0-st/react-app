import React from 'react';
import style from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={style.photoBlock}>
            <img className={style.photo} src="https://sun2-3.userapi.com/c854016/v854016369/22a679/yTmYKW0ijp8.jpg" alt="" />
        </div>
    );
}

export default Avatar;