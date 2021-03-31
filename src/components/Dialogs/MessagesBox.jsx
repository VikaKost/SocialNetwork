import React from 'react';
import classes from "./MessagesBox.module.css";
import Message from "./Message";





const MessagesBox = (props) => {
    let messagesElements = props.messages.map ((el) =>
        <Message key={el.id} text={el.text} />
    );
    return(
        <div className={classes.messagesBox}>
            {messagesElements}
        </div>
    )
}

export default MessagesBox;
