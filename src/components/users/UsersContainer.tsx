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
                    users={this.props.usersPage.users}
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
        usersPage: state.UsersReducer,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        pageSize: state.UsersReducer.pageSize,
        currentPage: state.UsersReducer.currentPage,
        isFetching: state.UsersReducer.isFetching,
        followingInProgress: state.UsersReducer.followingInProgress
    }
}

const ConnectComponent = connect(MapStateToProps, {
    getUsersThunkCreator,
    selectPageThunkCreator,
    followUserThunk,
    unfollowUserThunk,
})
export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const UserContainer = ConnectComponent(ClassUsersContainer)
