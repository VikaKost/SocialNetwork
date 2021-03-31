import React from 'react';
import classes from "./Message.module.css";

const Message = (props) =>{
    return (
    <div className={classes.item}>
        <span>{props.text}</span>
        <span>01:02</span>
    </div>
    )
}

export default Message;