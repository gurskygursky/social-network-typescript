import style from "../Profile.module.css";
import avatar_image from "../../../assets/image/avatar/img.png";
import React from "react";
import {Status} from "../status/Status";

type InitialPropsType = {
    firstName: string,
    lastName: string,
    status: string,
    changeStatus: (statusText: string) => void,
}

export const About = (props: InitialPropsType) => {
    const {firstName, lastName} = props;
    return (
        <div className={style.contentAbout}>
            <img alt={"avatar_image"} src={avatar_image}/>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <Status {...props} status={props.status} changeStatus={props.changeStatus} />
            <br/>
        </div>
    );
}