import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {
    FollowUser,
    SelectPage,
    SetUsers,
    UnfollowUser,
    SetUsersTotalCount,
    ToggleIsFetching,
} from "../../redux/actions";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloaders/Preloader";

export class ClassUsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.ToggleIsFetching(true)
        // this.props.setToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.ToggleIsFetching(false)
                // this.props.setToggle(false)
                this.props.SetUsers(responce.data.items)
                // this.props.setUsers(responce.data.items)
                this.props.SetUsersTotalCount(responce.data.totalCount)
                // this.props.setTotalUsersCount(responce.data.totalCount)
            });
    }

    selectPage = (numberPage: number) => {
        this.props.SelectPage(numberPage)
        // this.props.selectPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.ToggleIsFetching(false)
                // this.props.setToggle(false)
                this.props.SetUsers(responce.data.items)
                // this.props.setUsers(responce.data.items)
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.usersPage.users}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       selectPage={this.selectPage}
                       pageSize={this.props.pageSize}
                       follow={this.props.FollowUser}
                    // follow={this.props.follow}
                       unfollow={this.props.UnfollowUser}
                    // unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

// type MapStateToPropsType = {
//     usersPage: InitialStateType,
//     totalUsersCount: number,
//     pageSize: number,
//     currentPage: number,
//     isFetching: boolean,
// }

// type mapDispatchToPropsType = {
//     follow: (userID: number) => void,
//     unfollow: (userID: number) => void,
//     setUsers: (users: Array<UserType>) => void,
//     selectPage: (currentPage: number) => void,
//     setTotalUsersCount: (totalCount: number) => void,
//     setToggle: (isFetching: boolean) => void,
// }

// export type UsersPropsType = MapStateToPropsType ;

const MapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.UsersReducer,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        pageSize: state.UsersReducer.pageSize,
        currentPage: state.UsersReducer.currentPage,
        isFetching: state.UsersReducer.isFetching,

    }
}
// const MapDispatchToProps = (dispach: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispach(FollowUser(userID))
//         },
//         unfollow: (userID: number) => {
//             dispach(UnfollowUser(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispach(SetUsers(users))
//         },
//         selectPage: (currentPage: number) => {
//             dispach(SelectPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispach(SetUsersTotalCount(totalCount))
//         },
//         setToggle: (isFetching: boolean) => {
//             dispach(ToggleIsFetching(isFetching))
//         },
//     }
// }

const ConnectComp = connect(MapStateToProps, {
    FollowUser,
    UnfollowUser,
    SetUsers,
    SelectPage,
    SetUsersTotalCount,
    ToggleIsFetching,
})
export type UsersPropsType = ConnectedProps<typeof ConnectComp>
export const UserContainer = ConnectComp(ClassUsersContainer)

// export const UsersContainer = connect(MapStateToProps,
//     {
//         FollowUser,
//         UnfollowUser,
//         SetUsers,
//         SelectPage,
//         SetUsersTotalCount,
//         ToggleIsFetching,
//     })(ClassUsersContainer)