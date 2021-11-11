import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

const getUsersSelector = (state: RootStateType) => {
    return state.UsersReducer.users
}
export const getUsers = createSelector(getUsersSelector, (users: Array<UserType>) => {
    return users.filter(user => true)
})
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
