import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import { ProfileContainer } from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                {/*<Route path={'/profile'} render={() => <Profile/>}/>*/}
                <Route path={'/profile/:userID'} render={() => <ProfileContainer/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}