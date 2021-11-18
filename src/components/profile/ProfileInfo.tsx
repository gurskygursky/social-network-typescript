import React, {ChangeEvent, useState} from "react";
import style from "./Profile.module.css";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloaders/Preloader";
import avatarImage from "../../assets/image/avatar/img.png";
import {ProfileData} from "./ProfileData";
import {ProfileDataEditForm} from "./ProfileDataEditForm";


type ProfileInfoType = {
    userProfile: UserProfileType,
    status: string,
    changeStatus: (status: string) => void,
    isOwner: boolean,
    uploadUserPhoto: (image: File) => void,
    onSubmitHandler: (contacts: ContactsType, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string) => void,
}

export const ProfileInfo = (props: ProfileInfoType) => {

    let [editMode, setEditMode] = useState<boolean>(false);

    if (!props.userProfile) {
        return <Preloader/>
    }

    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            props.uploadUserPhoto(event.target.files[0])
        }
    }
    const editModeHandler = () => {
        setEditMode(true)
    }
    const hideEditForm = () => {
        setEditMode(false)
    }
    return (
        <div className={style.content}>
            <div>{props.userProfile.photos.small === null
                ? <img src={avatarImage} alt={"avatar_image"}/>
                : <img src={props.userProfile.photos.small} alt={'avatar_image'}/>}
            </div>
            {!props.isOwner || <input type={"file"}
                                      onChange={onPhotoSelected}/>}

            {editMode
                ? <ProfileDataEditForm userProfile={props.userProfile}
                                       updateProfileDataThunk={props.onSubmitHandler} hideEditForm={hideEditForm}
                />
                : <ProfileData userProfile={props.userProfile}
                               status={props.status}
                               changeStatus={props.changeStatus}
                               isOwner={props.isOwner}
                               uploadUserPhoto={props.uploadUserPhoto}
                               onEditMode={editModeHandler}
                />}
        </div>
    );
}
