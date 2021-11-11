import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import avatarImage from "../../assets/image/avatar/img.png"
import { Status } from "./status/Status";

type ProfileType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
            <Status {...props} statusText={props.status} changeStatus={props.changeStatus} />
            <div>{props.userProfile.photos.small === null
                ?  <img src={avatarImage} alt={"avatar_image"}/>
                : <img src= {props.userProfile.photos.small} alt={'avatar_image'} />}</div>
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

