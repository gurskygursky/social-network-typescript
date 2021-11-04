import {UserType} from "./users-reducer"

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
    SELECT_USER_PROFILE = 'Profile/SELECT_USER_PROFILE',
}

export type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST,
}
export type InputNewPostTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
    inputPostText: string,
}
export type SendMessageType = {
    type: ACTIONS_TYPE.SEND_MESSAGE,
}
export type InputNewMessageTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
    inputMessageText: string,
}
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
    userProfile: Object,
}
export const AddPost = (): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
    }
};
export const InputNewPostText = (newPostText: string): InputNewPostTextType => {
    return {
        type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
        inputPostText: newPostText,
    }
};
export const SendMessage = (): SendMessageType => {
    return {
        type: ACTIONS_TYPE.SEND_MESSAGE,
    }
};
export const InputNewMessageText = (newMessageText: string): InputNewMessageTextType => {
    return {
        type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
        inputMessageText: newMessageText,
    }
}
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
export const SelectUserProfile = (userProfile: Object): SelectUserProfileType => {
    return {
        type: ACTIONS_TYPE.SELECT_USER_PROFILE,
        userProfile,
    }
}



export type ActionsTypes =
    AddPostType |
    InputNewPostTextType |
    SendMessageType |
    InputNewMessageTextType |
    FollowUserType |
    UnfollowUserType |
    SetUsersType |
    SelectPageType |
    SetUsersTotalCountType |
    SetPreloaderType |
    SelectUserProfileType;