import {Users} from "./Users"
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {FollowUser, SetUsers, UnfollowUser} from "../../redux/actions";

type MapStateToPropsType = {
    usersPage: InitialStateType,
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void,

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        usersPage: state.UsersReducer,
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
    }

}
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)