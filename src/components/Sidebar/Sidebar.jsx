import React from 'react';
import Navigation from '../Sidebar/Navigation/Navigation';
import PopularAuthors from './Popular/Popular';
import SocialShare from './SocialShare/SocialShare';
import style from './Sidebar.module.css';


const Sidebar = (props) => {
    return (
        <div className={style.column + ' ' + 'sidebar'}>
            <Navigation sidebarNavigation={props.sidebarNavigation} />
            <PopularAuthors popularAuthors={props.popularAuthors} />
            <SocialShare socialShare={props.socialShare} />
        </div>
    );
}

export default Sidebar;
