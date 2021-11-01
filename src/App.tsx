import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {ActionsTypes} from "./redux/actions";
import store, {RootStateType} from "./redux/redux-store";

type AppType = {
    // state: RootStateType,
    // dispatch: (action: ActionsTypes) => void,
}


export const App = (props: AppType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/profile'} render={() => <Profile
                    // profilePage={props.state.ProfileReducer}
                    //                                             dispatch={store.dispatch}
                />}
                />
                {/*<Route path={'/messages'} render={() => <Dialogs dialogPage={props.state.DialogsReducer}*/}
                {/*                                                 dispatch={store.dispatch}*/}
                {/*/>}*/}
                {/*/>*/}
            </div>
        </div>
    );
}