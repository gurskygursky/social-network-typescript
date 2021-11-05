import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {About} from "./about/About";
import {PostsContainer} from "./posts/PostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import avatarImage from "../../assets/image/avatar/img.png"

type ProfileType = {
    userProfile: UserProfileType,
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>

            <div>{props.userProfile.photos.small === null
                ?  <img src={avatarImage} alt={"avatar_image"}/>
                : <img src= {props.userProfile.photos.small} />}</div>
            <div>{props.userProfile.fullName}</div>
            <div>{props.userProfile.lookingForAJob}</div>
            <div>{props.userProfile.lookingForAJobDescription}</div>
            {/*<About firstName={'Yegor'} lastName={'Gursky'}/>*/}
            <br/>
            <br/>
            <br/>
            <PostsContainer/>
        </div>
    );
}

