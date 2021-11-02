import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import photoUser from "../../assets/image/avatar/BiaKjqXbT.jpg";


export const Users = (props: UsersPropsType) => {
        useEffect(() => {
            if (props.usersPage.users.length === 0) {
                props.setUsers([
                        {
                            id: 1,
                            name: 'Dimych',
                            photoURL: `${photoUser}`,
                            followed: true,
                            status: 'Awesome',
                            location: {city: 'Minsk', country: 'Belarus'}
                        },
                        {
                            id: 2,
                            name: 'Katya',
                            photoURL: `${photoUser}`,
                            followed: true,
                            status: 'Awesome',
                            location: {city: 'Kiev', country: 'Ukraine'}
                        },
                        {
                            id: 3,
                            name: 'Valera',
                            photoURL: `${photoUser}`,
                            followed: false,
                            status: 'Awesome',
                            location: {city: 'Kiev', country: 'Ukraine'}
                        },
                        {
                            id: 4,
                            name: 'Viktor',
                            photoURL: `${photoUser}`,
                            followed: true,
                            status: 'Awesome',
                            location: {city: 'Warsaw', country: 'Poland'}
                        },
                    ]
                );
            }
        }, [])

    return (
        <div className={style.container}>
            <div className={style.users}>{props.usersPage.users.map(user => <div key={user.id}>
                <img src={user.photoURL} alt={'user_photo'}/>
                <div>{user.name}</div>
                <div className={style.status}>{user.status}</div>
                {user.followed
                    ? <button onClick={() => {
                        props.follow(user.id)
                    }}>FOLLOW</button>
                    : <button onClick={() => {
                        props.unfollow(user.id)
                    }}>UNFOLLOW</button>
                }
            </div>)
            }
            </div>
        </div>
    );
}




