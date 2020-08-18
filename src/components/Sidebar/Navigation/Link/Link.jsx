import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Navigation.module.css'

const Link = (props) => {
    return (
        <li className={style.item}>
            <NavLink to={props.href}
                className={style.link}>{props.title}</NavLink>
        </li>
    );
}
export default Link;