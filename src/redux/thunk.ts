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
} from "./actions";
import {Login} from "../components/login/Login";

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

export const selectUserProfileThunk = (userID: number) => (dispatch: Dispatch) => {
    ProfileAPI.selectUserProfile(userID)
        .then(responce => {
            dispatch(SelectUserProfile(responce.data));
        })
}

export const getUserStatusThunk = (userID: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userID)
        .then(response => {
            console.log(response)
                dispatch(SetUserStatus(response.data))
        })
}
export const changeUserStatusThunk = (statusText: string) => (dispatch: Dispatch) => {
    ProfileAPI.changeStatus(statusText)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUserStatus(statusText))
            }
         })
}
export const loginThunk = (email: string, password: string, remember: boolean) => (dispatch: Dispatch) => {
    debugger
    HeaderAPI.login(email, password, remember)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(LoginUser(response.data))
            }
        })
}
// export const logoutThunk = (dispatch: Dispatch) => {
//     HeaderAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(LoginUser())
//             }
//         })
// }

