import React from 'react';
import MySocialLink from './MySocialLink/MySocialLink';
import style from './../Body.module.css';

const MySocial = (props) => {
    const mySocialLinksElements = props.social.
        map(link => <MySocialLink key={link.id} href={link.href} amount={link.amount} title={link.title} />)

    return (
        <div className={style.mySocial}>
            {mySocialLinksElements}
        </div>
    );
}

export default MySocial;