import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import style from './Profile.module.css';
import Preloader from '../Common/Preloader';

const Profile = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.profile}>
            <ProfileInfo mySocialLinks={props.mySocialLinks} 
                        profile={props.profile} 
                        status={props.status} 
                        updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}/>
            <Posts />
        </div>

    );
}

export default Profile;