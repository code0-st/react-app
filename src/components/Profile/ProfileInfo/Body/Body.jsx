import React from 'react';
import style from './Body.module.css';
import AboutMe from './AboutMe/AboutMe';
import MySocial from './MySocial/MySocial';

const Body = (props) => {
    return (
        <div className={style.body}>
            <AboutMe profileInfo={props.profile} 
                    status={props.status} 
                    updateStatus={props.updateStatus}/> {/*TODO: fix bug with activity width */}
            <MySocial social={props.social} />
        </div>
    );
}

export default Body;