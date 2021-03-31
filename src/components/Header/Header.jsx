import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.wrapper}>
        <div className={classes.logoBox}>
            <img className={classes.item} src='https://iqonic.design/themes/socialv/html/images/logo.png'/>
            <span className={`${classes.title} ${classes.item}`}>SocialC</span>
            <span className={`iconify ${classes.item} ${classes.menuIcon}`} data-icon="ant-design:menu-outlined" data-inline="false"/>
        </div>
        <div>
        <form className={classes.search}>
            <input placeholder='Search...' type='text'/>
            <button type='submit'><span className="iconify" data-icon="ant-design:search-outlined" data-inline="false"/></button>
        </form>
        </div>
        <div className={classes.userInfo}>
            <img src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
            <span className={classes.userName}>User Name</span>
            <span className={`iconify ${classes.userIcon}`} data-icon="mdi:message-reply-text-outline" data-inline="false"></span>
            <span className={`iconify ${classes.userIcon}`} data-icon="bi:bell" data-inline="false"></span>
            <span className={`iconify ${classes.userIcon}`} data-icon="fluent:settings-16-regular" data-inline="false"></span>
        </div>
        </div>
    </header>
}

export default Header