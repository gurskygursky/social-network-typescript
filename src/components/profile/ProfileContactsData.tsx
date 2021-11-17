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
                <b>Contacts:</b>{Object.entries(props.userProfile.contacts).map((keyValues) => {
                    return <Contact key={keyValues[0]} contactTitle={keyValues[0]} contactValue={keyValues[1]} />
            })}
            </div>
        </div>
    );
}
type ContactType = {
    contactTitle: string,
    contactValue: string | null,
}
export const Contact = (props: ContactType) => {
    return (
        <div>
            <b>{props.contactTitle}: </b>{props.contactValue}
        </div>
    )
}