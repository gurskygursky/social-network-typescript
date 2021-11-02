import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";


export const Users = (props: UsersPropsType) => {
    useEffect(() => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')

                .then(responce => {
                    debugger
                    props.setUsers(responce.data.items)
                })
        }
    }, [])

return (
    <div className={style.container}>
        <div className={style.users}>{props.usersPage.users.map(user => <div key={user.id}>
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
);
}




