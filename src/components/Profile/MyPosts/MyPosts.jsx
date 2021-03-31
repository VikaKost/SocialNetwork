import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post";





const MyPosts = (props) => {

    let post = props.postData.map ((el) =>
        <Post text={el.text} key={el.id}/>);
    return <div className={classes.posts}>
        {post}
    </div>

};

export default MyPosts;