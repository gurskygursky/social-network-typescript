import {Dispatch} from "redux";
import {HeaderAPI, ProfileAPI, UsersAPI} from "../api/API";
import {
    FollowUser,
    LoginUser,
    SelectPage,
    SelectUserProfile,
    SetUsers,
    SetUsersTotalCount,
    ToggleFollowingInProgress,
    ToggleIsFetching,
    UnfollowUser,
} from "./actions";

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(ToggleIsFetching(true));
    UsersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(ToggleIsFetching(false));
            dispatch(SetUsers(data.items));
            dispatch(SetUsersTotalCount(data.totalCount));
        });
}

export const selectPageThunkCreator = (numberPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(SelectPage(numberPage));
    UsersAPI.getUsers(numberPage, pageSize)
        .then(data => {
            dispatch(ToggleIsFetching(false));
            dispatch(SetUsers(data.items));
        });
}
export const followUserThunk = (userID: number) => (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    UsersAPI.follow(userID)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(FollowUser(userID));
            }
            dispatch(ToggleFollowingInProgress(false, userID));
        })
}
export const unfollowUserThunk = (userID: number) => (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    UsersAPI.unfollow(userID)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(UnfollowUser(userID));
            }
            dispatch(ToggleFollowingInProgress(false, userID));
        });
}

export const loginUserThunk = () => (dispatch: Dispatch) => {
    HeaderAPI.authMe()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(LoginUser(responce.data.data));
            }
        });
}

export const selectUserProfileThink = (userID: string) => (dispatch: Dispatch) => {
    ProfileAPI.selectUserProfile(userID)
        .then(responce => {
            dispatch(SelectUserProfile(responce.data));
        })
}

