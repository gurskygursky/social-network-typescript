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
    ToggleFollowingInProgress,
} from "../../redux/actions";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloaders/Preloader";
import {UsersAPI} from "../../api/API";
import {followUserThunk, getUsersThunkCreator, selectPageThunkCreator, unfollowUserThunk} from "../../redux/thunk";

export class ClassUsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        // this.props.ToggleIsFetching(true)
        // this.props.setToggle(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        //     withCredentials: true,
        // })
        //     UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //         .then(data => {
        //             this.props.ToggleIsFetching(false)
        //             this.props.setToggle(false)
        // this.props.SetUsers(data.items)
        // this.props.setUsers(responce.data.items)
        // this.props.SetUsersTotalCount(data.totalCount)
        // this.props.setTotalUsersCount(responce.data.totalCount)
        // });
    }

    selectPage = (numberPage: number) => {
        this.props.selectPageThunkCreator(numberPage, this.props.pageSize)
        // this.props.SelectPage(numberPage)
        // this.props.selectPage(numberPage);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`, {
        //     withCredentials: true,
        // })
        //     UsersAPI.getUsers(numberPage, this.props.pageSize)
        //     .then(data => {
        //             this.props.ToggleIsFetching(false)
        // this.props.setToggle(false)
        // this.props.SetUsers(data.items)
        // this.props.setUsers(responce.data.items)
        // });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.usersPage.users}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    selectPage={this.selectPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.followUserThunk}
                    // follow={this.props.follow}
                    unfollow={this.props.unfollowUserThunk}
                    // unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    // ToggleFollowingInProgress={this.props.ToggleFollowingInProgress}

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
        followingInProgress: state.UsersReducer.followingInProgress
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

const ConnectComponent = connect(MapStateToProps, {
    // FollowUser,
    // UnfollowUser,
    // SetUsers,
    // SelectPage,
    // SetUsersTotalCount,
    // ToggleIsFetching,
    // ToggleFollowingInProgress,
    getUsersThunkCreator,
    selectPageThunkCreator,
    followUserThunk,
    unfollowUserThunk,
})
export type UsersPropsType = ConnectedProps<typeof ConnectComponent>
export const UserContainer = ConnectComponent(ClassUsersContainer)

// export const UsersContainer = connect(MapStateToProps,
//     {
//         FollowUser,
//         UnfollowUser,
//         SetUsers,
//         SelectPage,
//         SetUsersTotalCount,
//         ToggleIsFetching,
//     })(ClassUsersContainer)