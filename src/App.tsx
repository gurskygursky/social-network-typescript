import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {RootStateType, store} from "./redux/state";
import {ActionsTypes} from "./redux/actions";

type AppType = {
    state: RootStateType,
    dispatch: (action: ActionsTypes) => void,
}


export const App = (props: AppType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}
                                                                dispatch={store.dispatch.bind(store)}
                />}
                />
                <Route path={'/messages'} render={() => <Dialogs dialogPage={props.state.dialogsPage}
                                                                 dispatch={store.dispatch.bind(store)}
                />}
                />
            </div>
        </div>
    );
}