import React from 'react';
import Navigation from '../Sidebar/Navigation/Navigation';
import PopularAuthors from './Popular/Popular';
import SocialShare from './Social/Social';
import style from './Sidebar.module.css';


const Sidebar = (props) => {
    return (
        <div className={style.column + ' ' + 'sidebar'}>
            <Navigation sidebarNavigation={props.state.sidebarNavigation} />
            <PopularAuthors popularAuthors={props.state.popularAuthors} />
            <SocialShare socialShare={props.state.socialShare} />
        </div>
    );
}

export default Sidebar;
