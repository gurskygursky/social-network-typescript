import {ACTIONS_TYPE, ActionsTypes} from "./actions";

type UserLocationType = {
    city: string,
    country: string,
}
type PhotosType = {
    small: string,
    large: string,
}
export type UserType = {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    photos: PhotosType,
    location: UserLocationType,
}
export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

export const UsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>  user.id === action.userID ? {...user, followed: true} : user)
            }
        case ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case ACTIONS_TYPE.SET_USERS:
            return {
                ...state,
                users: [...action.users]
                // users: [...state.users, ...action.users]
            }
        case ACTIONS_TYPE.SELECT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case ACTIONS_TYPE.USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case ACTIONS_TYPE.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default: return state;
    }
}
