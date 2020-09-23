import React from 'react';
import Link from './Link/Link';
import styles from './../header.module.css';

const Navigation = (props) => {

    const headerNavigationElements = props.headerNavigation.
        map(link => <Link key={link.id} href={link.href} title={link.title} />)

    return (
        <nav>
            <ul className={styles.navigation}>
                {headerNavigationElements}
            </ul>
        </nav>
    );
}

export default Navigation;