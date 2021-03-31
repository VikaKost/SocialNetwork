import React from 'react';
import classes from "./DialogItems.module.css";
import {NavLink} from 'react-router-dom';






const DialogItems = (props) =>{
    let users = props.userData.map((el) =><NavLink className={classes.user} key={el.id} to='/dialogs/1'>{el.userName}</NavLink>);
    return(
        <div className={classes.dialogItems}>
            { users }
        </div>
    )
}

export default DialogItems;
