import React, {ChangeEvent} from "react";
import style from "./Profile.module.css";
import {StatusWithHooks} from "./status/StatusWithHooks";
import {UserProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloaders/Preloader";
import avatarImage from "../../assets/image/avatar/img.png";
import {ProfileContactsData} from "./ProfileContactsData";


type ProfileInfoType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
    isOwner: boolean,
    uploadUserPhoto: (image: File) => void,
    onEditMode: () => void,
}

export const ProfileData = (props: ProfileInfoType) => {
    return (
        <div className={style.content}>
            <StatusWithHooks {...props}
                             statusText={props.status}
                             changeStatus={props.changeStatus}
            />
            <div>
                {props.isOwner && <button onClick={props.onEditMode}>Edit</button>}
            </div>

            <div>
                <b>FullName: </b>{props.userProfile.fullName}
            </div>
            <div>
                <b>AboutMe: </b>{props.userProfile.aboutMe}
            </div>
            <div>
                <b>LookingForAJob: </b>{props.userProfile.lookingForAJob}
            </div>
            <div>
                <b>My professional skills: </b>{props.userProfile.lookingForAJobDescription}
            </div>
            <div>
                <ProfileContactsData userProfile={props.userProfile}/>
            </div>

            {/*{*/}
            {/*    <img src={props.userProfile.photos.small} alt={"avatar_image"}/>*/}
            {/*    || <img src={avatarImage} alt={"avatar_image"}/>*/}
            {/*}*/}
            <br/>
            <br/>
            <br/>
        </div>
    );
}
