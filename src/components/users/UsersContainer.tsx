import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloaders/Preloader";
import {
    followUserThunk,
    getUsersThunkCreator,
    selectPageThunkCreator,
    unfollowUserThunk,
} from "../../redux/thunk";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export class ClassUsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    selectPage = (numberPage: number) => {
        this.props.selectPageThunkCreator(numberPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    selectPage={this.selectPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.followUserThunk}
                    unfollow={this.props.unfollowUserThunk}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const MapStateToProps = (state: RootStateType) => {
    return {
        // users: state.UsersReducer.users,
        users: getUsers(state),
        // usersPage: state.UsersReducer,
        // totalUsersCount: state.UsersReducer.totalUsersCount,
        totalUsersCount: getTotalUsersCount(state),
        // pageSize: state.UsersReducer.pageSize,
        pageSize: getPageSize(state),
        // currentPage: state.UsersReducer.currentPage,
        currentPage: getCurrentPage(state),
        // isFetching: state.UsersReducer.isFetching,
        isFetching: getIsFetching(state),
        // followingInProgress: state.UsersReducer.followingInProgress,
        followingInProgress: getFollowingInProgress(state),
    }
}
// const WithAuthRedirectComponent = withAuthRedirect(ClassUsersContainer)
const ConnectComponent = connect(MapStateToProps, {
    getUsersThunkCreator,
    selectPageThunkCreator,
    followUserThunk,
    unfollowUserThunk,
})
export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const UserContainer = ConnectComponent(ClassUsersContainer)
