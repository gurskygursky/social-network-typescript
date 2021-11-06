import React from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/image/avatar/BiaKjqXbT.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto } alt={'userPhoto'}/>
                    </NavLink>
                    {user.name}
                    <div className={style.status}>{user.status}</div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8c4a0698-b08e-4693-b5a1-2d3805a6e1dc"
                                },
                            })
                                .then(responce => {
                                    if (responce.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                        }}>FOLLOW</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8c4a0698-b08e-4693-b5a1-2d3805a6e1dc"
                                },
                            })
                                .then(responce => {
                                    if (responce.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                })
                        }}>UNFOLLOW</button>
                    }
                </div>)
                }
            </div>
        </div>
    )
}




