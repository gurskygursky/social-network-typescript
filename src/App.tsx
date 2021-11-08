import React from "react";
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import { ProfileContainer } from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer />
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}