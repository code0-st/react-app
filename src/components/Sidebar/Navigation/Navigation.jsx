import React from 'react';
import BlockLink from './BlockLink/BlockLink';
import style from './Navigation.module.css';

const Navigation = (props) => {
    const sidebarNavigationElements = props.sidebarNavigation.
        map(link => <BlockLink href={link.href} title={link.title} />)
    return (
        <div>
            <ul className={style.list}>
                {sidebarNavigationElements}
            </ul>
        </div>
    );
}

export default Navigation;

