import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {FollowUser, SelectPage, SetUsers, UnfollowUser, SetUsersTotalCount} from "../../redux/actions";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class ClassUsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
            });
    }
    selectPage = (numberPage: number) => {
        this.props.selectPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
            });
    }
    render() {
        return (
            <Users users={this.props.usersPage.users}
                             totalUsersCount={this.props.totalUsersCount}
                             currentPage={this.props.currentPage}
                             selectPage={this.selectPage}
                             pageSize={this.props.pageSize}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
            />
        );
    }
}

type MapStateToPropsType = {
    usersPage: InitialStateType,
    totalUsersCount : number,
    pageSize: number,
    currentPage: number,
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void,
    selectPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        usersPage: state.UsersReducer,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        pageSize: state.UsersReducer.pageSize,
        currentPage: state.UsersReducer.currentPage,
    }
}
const MapDispatchToProps = (dispach: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispach(FollowUser(userID))
        },
        unfollow: (userID: number) => {
            dispach(UnfollowUser(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispach(SetUsers(users))
        },
        selectPage: (currentPage: number) => {
            dispach(SelectPage(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispach(SetUsersTotalCount(totalCount))
        },
    }
}
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(ClassUsersContainer)