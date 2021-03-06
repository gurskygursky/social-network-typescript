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
    UploadUserPhoto,
    AppInitializing,
    SetErrorMessage, SetErrorMessageProfile,
} from "./actions";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";
import {ContactsType} from "./profile-reducer";

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

export const loginUserThunk = (): ThunkAction<Promise<void>, RootStateType, unknown, ActionsTypes> => (dispatch) => {
    return HeaderAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(LoginUser(id, email, login, true))
            }
        })
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
        await dispatch(loginUserThunk());
    } else {
        console.log(response.data.messages)
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(SetErrorMessage(message))
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    const response = await HeaderAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(LoginUser(null, '', '', false))
    }
}
export const uploadUserPhotoThunk = (image: File) => async (dispatch: Dispatch) => {
    const response = await ProfileAPI.uploadUserPhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(UploadUserPhoto(response.data.data.photos))
    }
}
export const appInitializingThunk = (initialized: boolean): ThunkAction<void, RootStateType, unknown, ActionsTypes> => (dispatch) => {
    const promise = dispatch(loginUserThunk());
    promise.then(() => {
        dispatch(AppInitializing(initialized))
        console.log(dispatch(AppInitializing(initialized)))
    })
}
export const updateProfileDataThunk = (contacts: ContactsType, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string): ThunkAction<void, RootStateType, unknown, ActionsTypes> => async (dispatch, getState) => {
    console.log(2)
    const id = Number(getState().ProfileReducer.userProfile.userId)
    const response = await ProfileAPI.updateProfileData(contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName)
    if (response.data.resultCode === 0) {
        await dispatch(selectUserProfileThunk(id));
        dispatch(SetErrorMessageProfile(""))
    } else {
        console.log(response.data.messages)
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(SetErrorMessageProfile(message))
    }
}
// export const getLogin = (email: string, password: string, rememberMe: boolean) =>
//     async (dispatch: ThunkDispatch<RootStateType, undefined, ActionsTypes>) => {
//          const response = await HeaderAPI.login(email, password, rememberMe)
//         if (response.data.resultCode === 0) {
//             dispatch(loginUserThunk())
//             dispatch(SetErrorMessage(""))
//         } else {
//             const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
//             dispatch(SetErrorMessage(message))
//         }
//     }