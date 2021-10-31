import React, {KeyboardEvent} from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import {About} from "./about/About";
import {ActionsTypes} from "../../redux/actions";
import {ProfilePageType} from "../../redux/state";
import {PostsContainer} from "./posts/PostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes) => void,
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <PostsContainer dispatch={props.dispatch}
                            profilePage={props.profilePage}
                            posts={props.profilePage.posts}
            />
        </div>
    );
}

