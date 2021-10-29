import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import {About} from "./about/About";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    addPost: (postText: string) => void,
    updateNewPostText: (newText: string) => void,
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <Posts addPost={props.addPost}
                   posts={props.profilePage.posts}
                   updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

