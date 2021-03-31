import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Form from "./Form";


const Profile = (props) => {
    return <div className={classes.box}>
            <div className={classes.imgBox}>
                <img className={classes.profileTheme} src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg'/>
                <div className={classes.profileTitle}>
                    <img className={classes.userImg} src='https://iqonic.design/themes/socialv/html/images/user/11.png'/>
                    <span>User Name</span>
                </div>
                <div className={classes.profileInfo}>
                    <span>что-то</span>
                    <span>что-то</span>
                    <span>что-то</span>
                </div>

            </div>

                <div className={classes.userInfo}>
                    <div>Имя...</div>
                    <div>Фамилия...</div>
                    <div>Дата рождения</div>
                    <div></div>
                </div>
            <div className={classes.myfeed}>
                <Form addPost={props.addPost}/>
                    <MyPosts postData={props.postData} />
            </div>
        </div>


}

export default Profile