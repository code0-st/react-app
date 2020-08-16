import React from 'react';
import style from './../Popular.module.css';

const Author = (props) => {
    return (
        <li className={style.item}>
            <img className={style.img} src={props.imgSrc} alt="-" />
            <a className={style.link} href={props.imgSrc}>{props.name}</a>
        </li>
    );
}

export default Author;