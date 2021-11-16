import React, {ChangeEvent} from "react";
import style from "./Profile.module.css";
import { StatusWithHooks } from "./status/StatusWithHooks";
import {UserProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloaders/Preloader";
import avatarImage from "../../assets/image/avatar/img.png";


type ProfileInfoType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
    isOwner: boolean,
    uploadUserPhoto: (image: File) => void,
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            props.uploadUserPhoto(event.target.files[0])
        }
    }
    return (
        <div className={style.content}>

            <div>{props.userProfile.fullName}</div>
            <div>{props.userProfile.photos.small === null
                // ? <input type={"file"}/>
                ?  <img src={avatarImage} alt={"avatar_image"}/>
                : <img src= {props.userProfile.photos.small} alt={'avatar_image'} />}</div>
            {/*{*/}
            {/*    <img src={props.userProfile.photos.small} alt={"avatar_image"}/>*/}
            {/*    || <img src={avatarImage} alt={"avatar_image"}/>*/}
            {/*}*/}
            {!props.isOwner || <input type={"file"}
                                     onChange={onPhotoSelected}/>}
            <StatusWithHooks {...props}
                             statusText={props.status}
                             changeStatus={props.changeStatus}
            />
            <div>{props.userProfile.lookingForAJob}</div>
            <div>{props.userProfile.lookingForAJobDescription}</div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
