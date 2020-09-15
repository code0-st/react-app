import React from 'react';
import Avatar from './Avatar/Avatar';
import Body from './Body/Body';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>
            <Avatar photo={props.profile.photos.large}/>
            <Body social={props.mySocialLinks} profile={props.profile} status={props.status} setStatus={props.setStatus} updateStatus={props.updateStatus} />
        </div>
    )
}

export default ProfileInfo;