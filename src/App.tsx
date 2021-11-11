import React from "react";
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import { ProfileContainer } from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";import {LoginContainer} from "./components/login/LoginContainer";
import {UserContainer} from "./components/users/UsersContainer";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer />
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                <Route exact path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                <Route exact path={'/messages'} render={() => <DialogsContainer/>}/>
                <Route exact path={'/users'} render={() => <UserContainer/>}/>
            </div>
        </div>
    );
}