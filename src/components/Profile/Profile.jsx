import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
    
    return (
        <div className={style.profile}>
            <ProfileInfo main={props.state.main} />
            <Posts />
        </div>

    );
}

export default Profile;