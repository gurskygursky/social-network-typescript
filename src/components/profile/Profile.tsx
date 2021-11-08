import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import avatarImage from "../../assets/image/avatar/img.png"
import {About} from "./about/About";

type ProfileType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
            <About firstName={'Yegor'} lastName={'Gursky'} status={props.status} changeStatus={props.changeStatus}/>
            <div>{props.userProfile.photos.small === null
                ?  <img src={avatarImage} alt={"avatar_image"}/>
                : <img src= {props.userProfile.photos.small} />}</div>
            <div>{props.userProfile.fullName}</div>
            <div>{props.userProfile.lookingForAJob}</div>
            <div>{props.userProfile.lookingForAJobDescription}</div>
            <br/>
            <br/>
            <br/>
            <PostsContainer/>
        </div>
    );
}

