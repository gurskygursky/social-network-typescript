import React from "react";
import "./Profile.module.css"
import style from "./Profile.module.css"
import {Posts} from "./posts/Posts";
import avatar_image from "../../assets/image/avatar/img.png"

type InitialPropsType = {
    firstName: string,
    lastName: string,
}
type ProfilePropsType = {

}



const Initial = (props: InitialPropsType) => {
    const {firstName, lastName} = props;
    return (
        <div>
            <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
    </div>
    );
}

export const Profile = () => {

    return (
        <div className={style.content}>

            <div className={style.contentAbout}>
                <img alt={"avatar_image"} src={avatar_image}/>
                <Initial firstName={'Yegor'} lastName={'Gursky'}/>

            </div>
            <br/>
            <br/>
            <br/>
        <Posts/>
        </div>
    );
}

