import React from "react";
import './App.css';
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Navbar} from "./components/navbar/Navbar";
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType,
    addPostCallback: (postText: string) => void,
    sendMessageCallback: (messageText: string) => void,
    updateNewPostTextCallback: (newPostText: string) => void,
    updateNewMessageTextCallback: (newMessageText: string) => void,

}


export const App = (props: AppType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/profile'} component={() => <Profile posts={props.state.profilePage.posts}
                                                                   addPostCallback={props.addPostCallback}
                                                                   updateNewPostTextCallback={props.updateNewPostTextCallback}
                />}
                />
                <Route path={'/messages'} component={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}
                                                                    sendMessageCallback={props.sendMessageCallback}
                                                                    updateNewMessageTextCallback={props.updateNewMessageTextCallback}

                />}
                />
            </div>
        </div>
    );
}