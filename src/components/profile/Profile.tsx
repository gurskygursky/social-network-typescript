import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {About} from "./about/About";

import { PostsContainer } from "./posts/PostsContainer";



export const Profile = () => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <PostsContainer/>
        </div>
    );
}

