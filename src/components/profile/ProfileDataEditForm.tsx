import React, {ChangeEvent} from "react";
import style from "./Profile.module.css";
import {StatusWithHooks} from "./status/StatusWithHooks";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloaders/Preloader";
import avatarImage from "../../assets/image/avatar/img.png";


type ProfileInfoType = {
    userProfile: UserProfileType,
    // status: string,
    // changeStatus: (status: string) => void,
    // isOwner: boolean,
    // uploadUserPhoto: (image: File) => void,
}

export const ProfileDataEditForm = (props: ProfileInfoType) => {
    return (
        <div className={style.content}>
            <div>
                    EDIT FORM
            </div>
        </div>
    );
}