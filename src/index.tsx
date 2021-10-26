import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Katya'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'},
];
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 1, message: 'Hi, hi!'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo, yo!'},
    {id: 1, message: 'Yo, yo, yo!'},
];
let posts = [
    {id: 1, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 10},
    {id: 2, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 7},
    {id: 3, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 99},
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
