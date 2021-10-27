import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import { About } from "./about/About";
import {addPost, ProfileType} from "../../redux/state";


export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
                <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <Posts addPost={addPost} posts={props.posts}/>
        </div>
    );
}

