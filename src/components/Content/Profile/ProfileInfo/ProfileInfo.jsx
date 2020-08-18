import React from 'react';
import Avatar from './Avatar/Avatar';
import Body from './Body/Body';

import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <Avatar />
            <Body />
        </div>
    )
}

export default ProfileInfo;