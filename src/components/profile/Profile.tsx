import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css";
import {PostsContainer} from "./posts/PostsContainer";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
import avatarImage from "../../assets/image/avatar/img.png"
import { Status } from "./status/Status";
import {StatusWithHooks} from "./status/StatusWithHooks";
import {ProfileInfo} from "./ProfileInfo";

type ProfileType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
    isOwner: boolean,
    uploadUserPhoto: any,
    onSubmitHandler: (contacts: ContactsType, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo userProfile={props.userProfile}
                         status={props.status}
                         changeStatus={props.changeStatus}
                         isOwner={props.isOwner}
                         uploadUserPhoto={props.uploadUserPhoto}
                         onSubmitHandler={props.onSubmitHandler}
            />
            {/*<StatusWithHooks {...props}*/}
            {/*                 statusText={props.status}*/}
            {/*                 changeStatus={props.changeStatus}*/}
            {/*/>*/}
            {/*<div>{props.userProfile.photos.small === null*/}
            {/*    // ? <input type={"file"}/>*/}
            {/*    ?  <img src={avatarImage} alt={"avatar_image"}/>*/}
            {/*    : <img src= {props.userProfile.photos.small} alt={'avatar_image'} />}</div>*/}
            {/*<div>{props.userProfile.fullName}</div>*/}
            {/*<div>{props.userProfile.lookingForAJob}</div>*/}
            {/*<div>{props.userProfile.lookingForAJobDescription}</div>*/}
            <br/>
            <br/>
            <br/>
            <PostsContainer/>
        </div>
    );
}

