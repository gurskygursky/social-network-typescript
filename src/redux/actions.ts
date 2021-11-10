import { UserType} from "./users-reducer"
import {UserProfileType} from "./profile-reducer";
import {UserDataType} from "./auth-reducer";

export enum ACTIONS_TYPE {
    ADD_POST = 'Posts/ADD_POST',
    INPUT_NEW_POST_TEXT = 'Posts/INPUT_NEW_POST_TEXT',
    SEND_MESSAGE = 'Dialogs/SEND_MESSAGE',
    INPUT_NEW_MESSAGE_TEXT = 'Dialogs/INPUT_NEW_MESSAGE_TEXT',
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
    LOGIN_USER = 'Header/LOGIN_USER',
}

export type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST,
    post: string,
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
    currentPage: number,
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
    userData: UserDataType,
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
export const AddPost = (post: string): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
        post,
    }
};
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
export const SelectPage = (currentPage: number): SelectPageType => {
    return {
        type: ACTIONS_TYPE.SELECT_PAGE,
        currentPage,
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
export const LoginUser = (userData: UserDataType): LoginUserType => {
    return {
        type: ACTIONS_TYPE.LOGIN_USER,
        userData,
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

export type ActionsTypes =
    AddPostType |
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
    ChangeUserStatusType;