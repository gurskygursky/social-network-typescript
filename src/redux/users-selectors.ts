import {RootStateType} from "./redux-store";

export const getUsers = (state: RootStateType) => {
    return state.UsersReducer.users
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.UsersReducer.totalUsersCount
}
export const getPageSize = (state: RootStateType) => {
    return state.UsersReducer.pageSize
}
export const getCurrentPage = (state: RootStateType) => {
    return state.UsersReducer.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.UsersReducer.isFetching
}
export const getFollowingInProgress = (state: RootStateType) => {
    return state.UsersReducer.followingInProgress
}
