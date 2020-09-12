import React from 'react';
import Link from './Link/Link';
import style from './Navigation.module.css';

const Navigation = (props) => {
    const sidebarNavigationElements = props.sidebarNavigation.
        map(link => <Link href={
            link.id === 0 ? `${link.href}/${props.myId}`
            : link.href
        } title={link.title} />)
    return (
        <ul className={style.list}>
            {sidebarNavigationElements}
        </ul>
    );
}

export default Navigation;

