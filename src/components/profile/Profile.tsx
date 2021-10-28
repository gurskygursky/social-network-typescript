import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import {About} from "./about/About";
import {PostType} from "../../redux/state";


type ProfilePageType = {
    posts: Array<PostType>
    addPostCallback: (postText: string) => void,
    updateNewPostTextCallback: (newPostText: string) => void
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <Posts addPostCallback={props.addPostCallback}
                   posts={props.posts}
                   updateNewPostTextCallback={props.updateNewPostTextCallback}
            />
        </div>
    );
}

