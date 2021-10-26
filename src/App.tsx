import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
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
                    <Route component={Dialogs} path={'/messages'} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;