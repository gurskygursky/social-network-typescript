import React from "react";
import style from "./Profile.module.css";
import {UserProfileType} from "../../redux/profile-reducer";


type ProfileInfoType = {
    userProfile: UserProfileType,
}

export const ProfileContactsData = (props: ProfileInfoType) => {
    return (
        <div className={style.content}>
            <div>
                <b>Contacts:</b>{Object.entries(props.userProfile.contacts).map((keyValues) => {
                return <Contact key={keyValues[0]} contactTitle={keyValues[0]} contactValue={keyValues[1]}/>
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