import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}