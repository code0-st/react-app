import React from 'react';
import styles from './../../header.module.css';

const Link = (props) => {
    return (
        <li className={styles.item}>
            <a href={props.href} className={styles.link}>{props.title}</a>
        </li>
    );
}

export default Link;