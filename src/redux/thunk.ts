import {Dispatch} from "redux";
import {HeaderAPI, ProfileAPI, UsersAPI} from "../api/API";
import {
    FollowUser,
    SetUserStatus,
    LoginUser,
    SelectPage,
    SelectUserProfile,
    SetUsers,
    SetUsersTotalCount,
    ToggleFollowingInProgress,
    ToggleIsFetching,
    UnfollowUser,
    ActionsTypes,
} from "./actions";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";

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
export const followUserThunk = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    const response = await UsersAPI.follow(userID)
    if (response.data.resultCode === 0) {
        dispatch(FollowUser(userID));
    }
    dispatch(ToggleFollowingInProgress(false, userID));
}
export const unfollowUserThunk = (userID: number) => async (dispatch: Dispatch) => {
    dispatch(ToggleFollowingInProgress(true, userID));
    const response = await UsersAPI.unfollow(userID);
    if (response.data.resultCode === 0) {
        dispatch(UnfollowUser(userID));
    }
    dispatch(ToggleFollowingInProgress(false, userID));
}

export const loginUserThunk = () => async (dispatch: Dispatch) => {
    const response = await HeaderAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(LoginUser(id, email, login, true))
    }
}

export const selectUserProfileThunk = (userID: number) => async (dispatch: Dispatch) => {
    const response = await ProfileAPI.selectUserProfile(userID);
    dispatch(SelectUserProfile(response.data));
}

export const getUserStatusThunk = (userID: number) => async (dispatch: Dispatch) => {
    const response = await ProfileAPI.getStatus(userID);
    dispatch(SetUserStatus(response.data))
}
export const changeUserStatusThunk = (statusText: string) => async (dispatch: Dispatch) => {
    const response = await ProfileAPI.changeStatus(statusText);
    if (response.data.resultCode === 0) {
        dispatch(SetUserStatus(statusText))
    }
}
export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction<void, RootStateType, unknown, ActionsTypes> => async (dispatch) => {
    const response = await HeaderAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(loginUserThunk());
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    const response = await HeaderAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(LoginUser(null, '', '', false))
    }
}

