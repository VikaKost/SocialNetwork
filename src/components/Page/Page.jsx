import React from 'react';
import Aside from "../Aside/Aside";
import Profile from "../Profile/Profile";
import classes from "./Page.module.css";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from 'react-router-dom';




const Page = (props) => {
    return <div className={classes.mainContent}>

        <Aside />
        <div className={classes.content}>
            <Route path='/dialogs' render= { () => <Dialogs messages={props.messages} userData={props.userData}/>}/>
            <Route path='/profile' render= { () => <Profile postData={props.postData} addPost={props.addPost}/>}/>

        </div>
    </div>
}

export default Page