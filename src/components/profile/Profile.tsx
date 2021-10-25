import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";





export const Profile = () => {
    return (
        <div className={style.content}>
<div>
    <img src={""}/>
</div>
            <div>
                ava + description
            </div>
            <br/>
            <br/>
            <br/>
        <Posts/>
        </div>
    );
}

