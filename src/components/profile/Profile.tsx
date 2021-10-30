import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import {About} from "./about/About";
import {ActionsTypes, ProfilePageType, store} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes) => void,

    // addPost: (postText: string) => void,
    // updateNewPostText: (newText: string) => void,
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <Posts dispatch={props.dispatch.bind(store)}
                   // addPost={props.addPost}
                   posts={props.profilePage.posts}
                   // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

