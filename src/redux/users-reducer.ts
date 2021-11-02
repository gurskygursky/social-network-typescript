import {ACTIONS_TYPE, ActionsTypes} from "./actions";
import photoUser from "../assets/image/avatar/BiaKjqXbT.jpg"

type UserLocationType = {
    city: string,
    country: string,
}
export type UserType = {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    photoURL: string,
    location: UserLocationType,
}
export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: [],
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
                users: state.users.map(user => user.id !== action.userID ? {...user, followed: false} : user)
            }
        case ACTIONS_TYPE.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default: return state;
    }
}
