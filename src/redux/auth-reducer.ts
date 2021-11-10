import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type UserDataType = {
    id: number | null,
    email: string,
    login: string,
}
export type InitialStateType = {
    userData: UserDataType,
    isAuth: boolean,
    // email: string,
    // password: string,
    // rememberMe: boolean,
}
const initialState: InitialStateType = {
    userData: {
        id: null,
        email: '',
        login: '',
    },
    isAuth: false,
    // email: '',
    // password: '',
    // rememberMe: false,
};

export const AuthReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.LOGIN_USER:
            return {
                ...state,
                userData: action.userData,
                isAuth: true,
            }
        default:
            return state;
    }
};
