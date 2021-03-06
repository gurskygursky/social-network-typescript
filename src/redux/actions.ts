import {UserType} from "./users-reducer"
import {ContactsType, PhotosType, UserProfileType} from "./profile-reducer";

export enum ACTIONS_TYPE {
    ADD_POST = 'Posts/ADD_POST',
    DELETE_POST = 'Posts/DELETE_POST',
    INPUT_NEW_POST_TEXT = 'Posts/INPUT_NEW_POST_TEXT',
    SEND_MESSAGE = 'Dialogs/SEND_MESSAGE',
    // INPUT_NEW_MESSAGE_TEXT = 'Dialogs/INPUT_NEW_MESSAGE_TEXT',
    FOLLOW = 'Users/FOLLOW_USER',
    UNFOLLOW = 'Users/UNFOLLOW_USER',
    SET_USERS = 'Users/SET_USERS',
    SELECT_PAGE = 'Users/SELECT_PAGE',
    USERS_TOTAL_COUNT = 'Users/USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'Users/TOGGLE_IS_FETCHING',
    FOLLOWING_IN_PROGRESS = 'Users/FOLLOWING_IN_PROGRESS',
    SELECT_USER_PROFILE = 'Profile/SELECT_USER_PROFILE',
    SET_USER_STATUS = 'Profile/SET_USER_STATUS',
    CHANGE_USER_STATUS = 'Profile/CHANGE_USER_STATUS',
    UPLOAD_USER_PHOTO = 'Profile/UPLOAD_USER_PHOTO',
    LOGIN_USER = 'Header/LOGIN_USER',
    LOGIN_USER_FORM = 'Login/LOGIN_USER_FORM',
    APP_INITIALIZING = 'App/APP_INITIALIZING',
    SET_ERROR_MESSAGE = 'Login/SET_ERROR_MESSAGE',
    SET_ERROR_MESSAGE_PROFILE = 'Profile/SET_ERROR_MESSAGE_PROFILE',
}

export type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST,
    post: string,
}
export type DeletePostType = {
    type: ACTIONS_TYPE.DELETE_POST,
    postID: number,
}
export type InputNewPostTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
    inputPostText: string,
}
export type SendMessageType = {
    type: ACTIONS_TYPE.SEND_MESSAGE,
    message: string,
}
// export type InputNewMessageTextType = {
//     type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
//     inputMessageText: string,
// }
export type FollowUserType = {
    type: ACTIONS_TYPE.FOLLOW,
    userID: number,
}
export type UnfollowUserType = {
    type: ACTIONS_TYPE.UNFOLLOW,
    userID: number,
}
export type SetUsersType = {
    type: ACTIONS_TYPE.SET_USERS,
    users: Array<UserType>
}
export type SelectPageType = {
    type: ACTIONS_TYPE.SELECT_PAGE,
    page: number,
}
export type SetUsersTotalCountType = {
    type: ACTIONS_TYPE.USERS_TOTAL_COUNT,
    totalCount: number,
}
export type SetPreloaderType = {
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    isFetching: boolean,
}
export type SelectUserProfileType = {
    type: ACTIONS_TYPE.SELECT_USER_PROFILE,
    userProfile: UserProfileType,
}
export type LoginUserType = {
    type: ACTIONS_TYPE.LOGIN_USER,
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
}
export type FollowingUserProgressType = {
    type: ACTIONS_TYPE.FOLLOWING_IN_PROGRESS,
    isFetching: boolean,
    userID: number,
}
export type SetUserStatusType = {
    type: ACTIONS_TYPE.SET_USER_STATUS,
    status: string,
}
export type ChangeUserStatusType = {
    type: ACTIONS_TYPE.CHANGE_USER_STATUS,
    status: string,
}
export type LoginUserFormType = {
    type: ACTIONS_TYPE.LOGIN_USER_FORM,
    email: string,
    password: string,
    rememberMe: boolean,
}
export type UploadPhotoUserType = {
    type: ACTIONS_TYPE.UPLOAD_USER_PHOTO,
    photos: PhotosType,
}
export type AppInitializingType = {
    type: ACTIONS_TYPE.APP_INITIALIZING,
    initialized: boolean,
}
export type SetErrorMessageType = {
    type: ACTIONS_TYPE.SET_ERROR_MESSAGE,
    setErrorMessage: string,
}
export type SetErrorMessageProfileType = {
    type: ACTIONS_TYPE.SET_ERROR_MESSAGE_PROFILE,
    setErrorMessage: string,
}
export const AddPost = (post: string): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
        post,
    }
};
export const DeletePost = (postID: number): DeletePostType => {
    return {
        type: ACTIONS_TYPE.DELETE_POST,
        postID,
    }
}
export const InputNewPostText = (newPostText: string): InputNewPostTextType => {
    return {
        type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
        inputPostText: newPostText,
    }
};
export const SendMessage = (message: string): SendMessageType => {
    return {
        type: ACTIONS_TYPE.SEND_MESSAGE,
        message,
    }
};
// export const InputNewMessageText = (newMessageText: string): InputNewMessageTextType => {
//     return {
//         type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
//         inputMessageText: newMessageText,
//     }
// }
export const FollowUser = (userID: number): FollowUserType => {
    return {
        type: ACTIONS_TYPE.FOLLOW,
        userID,
    }
}
export const UnfollowUser = (userID: number): UnfollowUserType => {
    return {
        type: ACTIONS_TYPE.UNFOLLOW,
        userID,
    }
}
export const SetUsers = (users: Array<UserType>): SetUsersType => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        users,
    }
}
export const SelectPage = (page: number): SelectPageType => {
    return {
        type: ACTIONS_TYPE.SELECT_PAGE,
        page,
    }
}
export const SetUsersTotalCount = (totalCount: number): SetUsersTotalCountType => {
    return {
        type: ACTIONS_TYPE.USERS_TOTAL_COUNT,
        totalCount,
    }
}
export const ToggleIsFetching = (isFetching: boolean): SetPreloaderType => {
    return {
        type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
        isFetching,
    }
}
export const SelectUserProfile = (userProfile: UserProfileType): SelectUserProfileType => {
    return {
        type: ACTIONS_TYPE.SELECT_USER_PROFILE,
        userProfile,
    }
}
export const LoginUser = (id: number | null, email: string, login: string, isAuth: boolean): LoginUserType => {
    return {
        type: ACTIONS_TYPE.LOGIN_USER,
        id,
        email,
        login,
        isAuth,
    }
}
export const ToggleFollowingInProgress = (isFetching: boolean, userID: number): FollowingUserProgressType => {
    return {
        type: ACTIONS_TYPE.FOLLOWING_IN_PROGRESS,
        isFetching,
        userID,
    }
}
export const SetUserStatus = (status: string): SetUserStatusType => {
    return {
        type: ACTIONS_TYPE.SET_USER_STATUS,
        status,
    }
}
export const LoginUserForm = (email: string, password: string, rememberMe: boolean): LoginUserFormType => {
    debugger
    return {
        type: ACTIONS_TYPE.LOGIN_USER_FORM,
        email,
        password,
        rememberMe,
    }
}
export const UploadUserPhoto = (photos: PhotosType): UploadPhotoUserType => {
    return {
        type: ACTIONS_TYPE.UPLOAD_USER_PHOTO,
        photos,
    }
}
export const AppInitializing = (initialized: boolean): AppInitializingType => {
    return {
        type: ACTIONS_TYPE.APP_INITIALIZING,
        initialized,
    }
}
export const SetErrorMessage = (setErrorMessage: string): SetErrorMessageType => {
    return {
        type: ACTIONS_TYPE.SET_ERROR_MESSAGE,
        setErrorMessage,
    }
}
export const SetErrorMessageProfile = (setErrorMessage: string): SetErrorMessageProfileType => {
    return {
        type: ACTIONS_TYPE.SET_ERROR_MESSAGE_PROFILE,
        setErrorMessage,
    }
}

export type ActionsTypes =
    AddPostType |
    DeletePostType |
    InputNewPostTextType |
    SendMessageType |
    // InputNewMessageTextType |
    FollowUserType |
    UnfollowUserType |
    SetUsersType |
    SelectPageType |
    SetUsersTotalCountType |
    SetPreloaderType |
    SelectUserProfileType |
    LoginUserType |
    FollowingUserProgressType |
    SetUserStatusType |
    ChangeUserStatusType |
    LoginUserFormType |
    UploadPhotoUserType |
    AppInitializingType |
    SetErrorMessageType |
    SetErrorMessageProfileType;