import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";


const reducers = combineReducers({
    ProfileReducer,
    DialogsReducer,
})

const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store;

export default store;