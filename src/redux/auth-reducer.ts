import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type UserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,

}
export type InitialStateType = {
    userData: UserDataType,
    isAuth: boolean,

}
const initialState: InitialStateType = {
    userData: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
};

export const AuthReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.LOGIN_USER:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        default:
            return state;
    }
};
