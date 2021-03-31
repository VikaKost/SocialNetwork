import React from 'react';
import classes from './Form.module.css';


const Form = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return <div className={classes.createPost}>
        <div className={classes.title}><h4>Create Post</h4></div>
        <div className={classes.input}>
            <img src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
            <input placeholder={'Write something here...'} ref={newPostElement}/>
            <input type='submit' className={classes.submit} onClick={addPost}/>
        </div>

    </div>
}

export default Form;