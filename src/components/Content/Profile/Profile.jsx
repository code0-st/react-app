import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <Posts />
        </div>

    );
}

export default Profile;