import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Messages} from "./components/dialogs/Messages";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route component={Profile} path={'/profile'}/>
                    <Route component={Messages} path={'/messages'} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;