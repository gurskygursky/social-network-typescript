import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type InitialStateType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
}
const initialState: InitialStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
};

export const AuthReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.LOGIN_USER:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
            }
        default:
            return state;
    }
};
