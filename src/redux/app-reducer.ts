import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type InitialStateType = {
    initialized: boolean,
}
const initialState: InitialStateType = {
    initialized: false,
};

export const AppReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.APP_INITIALIZING:
            return {
                ...state,
                // initialized: true,
                initialized: true,
            }
        default:
            return state;
    }
};
