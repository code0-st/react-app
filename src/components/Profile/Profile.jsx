import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo me={props.state.me} />
            <Posts posts={props.state.posts} dispatch={props.dispatch} />
        </div>

    );
}

export default Profile;