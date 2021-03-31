import React from "react";
import classes from "./Post.module.css";


const Post = (props) => {
    return <div className={classes.item}>

        <img className={classes.avatar} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
        <span>{props.text}</span>
    </div>
}

export default Post;