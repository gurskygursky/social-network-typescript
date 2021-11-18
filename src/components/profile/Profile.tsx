import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css";
import {PostsContainer} from "./posts/PostsContainer";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
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
            <PostsContainer/>
        </div>
    );
}

