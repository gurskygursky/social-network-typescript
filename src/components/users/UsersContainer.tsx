import {Users} from "./Users"
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {FollowUser, SelectPage, SetUsers, UnfollowUser, SetUsersTotalCount} from "../../redux/actions";

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
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)