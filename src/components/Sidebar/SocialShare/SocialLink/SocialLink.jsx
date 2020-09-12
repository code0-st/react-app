import React from 'react';
import style from './../Social.module.css';

const SocialLink = (props) => {
    return (
        <a href={props.href}> <img className={style.img} src={props.imgSrc} alt={props.title} /></a>
    );
}

export default SocialLink;