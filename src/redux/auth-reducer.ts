import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type InitialStateType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
    setErrorMessage: string,
}
const initialState: InitialStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    setErrorMessage: '',
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
        case ACTIONS_TYPE.SET_ERROR_MESSAGE:
            return {
                ...state, setErrorMessage: action.setErrorMessage,
            }
        default:
            return state;
    }
};
