import React from 'react';
import Link from './Link/Link';
import style from './Navigation.module.css';

const Navigation = (props) => {
    const sidebarNavigationElements = props.sidebarNavigation.
        map(link => <Link href={link.href} title={link.title} />)
    return (
        <ul className={style.list}>
            {sidebarNavigationElements}
        </ul>
    );
}

export default Navigation;

