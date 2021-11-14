import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/image/avatar/BiaKjqXbT.jpg"
import { NavLink } from "react-router-dom";

type UserPropsType = {
    user: UserType,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    followingInProgress: Array<number>,
}

export const User = (props: UserPropsType) => {
    return (
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto } alt={'userPhoto'}/>
                    </NavLink>
                    {props.user.name}
                    <div className={style.status}>{props.user.status}</div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)}}>
                            UNFOLLOW
                        </button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {props.follow(props.user.id)}}>
                            FOLLOW
                        </button>
                    }
                </div>)

}




