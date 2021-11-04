import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {About} from "./about/About";
import {PostsContainer} from "./posts/PostsContainer";

type ProfileType = {
    userProfile: Object,
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
            {props.userProfile !== null ? props.userProfile : <About firstName={'sss'} lastName={'sss'}/>}
            {/*<About firstName={'Yegor'} lastName={'Gursky'}/>*/}
            <br/>
            <br/>
            <br/>
            <PostsContainer/>
        </div>
    );
}

