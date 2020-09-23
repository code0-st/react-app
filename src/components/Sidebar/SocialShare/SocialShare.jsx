import React from 'react';
import SocialLink from './SocialLink/SocialLink';
import style from './Social.module.css';

const SocialShare = (props) => {
    const socialShareElements = props.socialShare.
        map(link => <SocialLink key={link.id} href={link.href} imgSrc={link.imgSrc} title={link.title} />)
    return (
        <div className="socialShare">
            <div className={style.row}>
                {socialShareElements}
            </div>
        </div>
    );
}

export default SocialShare;