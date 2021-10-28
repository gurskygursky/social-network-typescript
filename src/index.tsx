import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {addPost, RootStateType, sendMessage, state, updateNewMessageText, updateNewPostText} from './redux/state';


export const renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPostCallback={addPost}
                     sendMessageCallback={sendMessage}
                     updateNewPostTextCallback={updateNewPostText}
                     updateNewMessageTextCallback={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderThree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
