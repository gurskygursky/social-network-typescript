import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                debugger
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
            });
    }

    selectPage = (numberPage: number) => {
        this.props.selectPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(responce => {
                debugger
                this.props.setUsers(responce.data.items)
            });
    }

    render() {
        const pagesCountButton = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCountButton; i++) {
            pages.push(i)
        }

        return (

            <div className={style.container}>
                {pages.map(page => {
                    return (
                        <span onClick={() => {this.selectPage(page)}} className={this.props.currentPage === page ? style.selected : ''}>{page}</span>
                    )})}
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



