import style from "../Profile.module.css";
import avatar_image from "../../../assets/image/avatar/img.png";
import React from "react";

type InitialPropsType = {
    firstName: string,
    lastName: string,
}

export const About = (props: InitialPropsType) => {
    const {firstName, lastName} = props;
    return (
        <div className={style.contentAbout}>
            <img alt={"avatar_image"} src={avatar_image}/>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
        </div>
    );
}