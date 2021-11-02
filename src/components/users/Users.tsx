import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                debugger
                this.props.setUsers(responce.data.items)
            });
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.users}>
                    {this.props.usersPage.users.map(user => <div key={user.id}>
                        <img src={user.photoURL} alt={'user_photo'}/>
                        {user.name}
                        <div className={style.status}>{user.status}</div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>UNFOLLOW</button>
                        }
                    </div>)
                    }
                </div>
            </div>
        );
    }
}



