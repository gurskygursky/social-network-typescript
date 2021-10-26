import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./components/profile/posts/post/Post";
import {DialogType} from "./components/dialogs/dialog/Dialog";
import {MessageType} from "./components/dialogs/messages/Message";

export type AppType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}
                    />
                    <Route path={'/messages'} render={() => <Dialogs dialogs={props.dialogs}
                                                                     messages={props.messages}/>}
                    />
                </div>
            </div>
        </BrowserRouter>

    );
}