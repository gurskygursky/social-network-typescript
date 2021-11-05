import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import { UsersReducer } from "./users-reducer";
import {AuthReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    UsersReducer,
    AuthReducer,
})

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store;

