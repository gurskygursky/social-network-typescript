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

export const ProfileContactsData = (props: ProfileInfoType) => {
    return (
        <div className={style.content}>
            <div>
                <b>Contacts:</b>{Object.keys(props.userProfile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} />
            })}
            </div>
        </div>
    );
}
type ContactType = {
    contactTitle: string,
    // contactValue: string,
}
const Contact = (props: ContactType) => {
    return (
        <div><b>{props.contactTitle}:</b></div>
    )
}