import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogItems";
import MessagesBox from "./MessagesBox";




const Dialogs = (props) =>{
    return(
        <div className={classes.dialogs}>
            <DialogItems userData={props.userData}/>
            <MessagesBox messages={props.messages}/>
        </div>
    )
}

export default Dialogs;