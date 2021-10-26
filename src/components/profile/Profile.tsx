import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import { About } from "./about/About";


type ProfilePropsType = {

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
                <About firstName={'Yegor'} lastName={'Gursky'}/>
            <br/>
            <br/>
            <br/>
            <Posts/>
        </div>
    );
}

