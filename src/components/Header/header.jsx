import React from 'react';
import styles from './header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import ButtonsContainer from './Buttons/ButtonsContainer';

const Header = (props) => {
    return (
        <header className="header">
            <div className={styles.row}>
                <Logo />
                <Navigation headerNavigation={props.state.headerNavigation} />
                <ButtonsContainer />
            </div>
        </header>
    );
}
export default Header;