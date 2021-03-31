import React from "react";
import classes from './Navbar.module.css';
import {NavLink }from 'react-router-dom';

const Navbar = () => {
    return <nav className={classes.nav}>
        <ul>
            <li className={classes.item}><NavLink to='/Profile' activeclassname={classes.active}><span className={`iconify ${classes.menuIcon}`} data-icon="ant-design:user-outlined" data-inline="false"></span><span>Profile</span></NavLink></li>
            <li className={classes.item}><NavLink to='/Dialogs' activeclassname={classes.active}><span className={`iconify ${classes.menuIcon}`} data-icon="bi:chat-left-dots" data-inline="false"></span><span>Messages</span></NavLink></li>
            <li className={classes.item}><a href='#' activeclassname={classes.active}><span className={`iconify ${classes.menuIcon}`} data-icon="la:newspaper-solid" data-inline="false"></span><span>Newsfeed</span></a></li>
        </ul>
    </nav>
}

export default Navbar
