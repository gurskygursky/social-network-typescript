import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../../common/paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    selectPage: (numberPage: number) => void,
    currentPage: number,
    users: Array<UserType>,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    followingInProgress: Array<number>,
}

export const Users = (props: UsersPropsType) => {
    return (
        <div className={style.container}>
            <div className={style.users}>
                <Paginator totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           selectPage={props.selectPage}
                           currentPage={props.currentPage}/>
                {props.users.map(user => <User user={user}
                                               key={user.id}
                                               follow={props.follow}
                                               unfollow={props.unfollow}
                                               followingInProgress={props.followingInProgress}
                />)}
            </div>
        </div>
    )
}




