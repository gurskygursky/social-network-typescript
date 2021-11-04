import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";


type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    selectPage: (numberPage: number) => void,
    currentPage: number,
    users: Array<UserType>,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
}

export const Users = (props: UsersPropsType) => {
    const buttonPageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= buttonPageCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.container}>
            <div className={style.users}>
                <span>
                            {pages.map(page => {
                                return (
                                    <span onClick={() => {

                                        props.selectPage(page)}}
                                          className={props.currentPage === page ? style.selected : ''}>{page}</span>
                                )
                            })}
            </span>
                {props.users.map(user => <div key={user.id}>
                    <img src={user.photoURL} alt={'user_photo'}/>
                    {user.name}
                    <div className={style.status}>{user.status}</div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>FOLLOW</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>UNFOLLOW</button>
                    }
                </div>)
                }
            </div>
        </div>
    )
}




