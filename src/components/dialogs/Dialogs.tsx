import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {Dialog} from "./dialog/Dialog";


export const Dialogs = () => {

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

    let dialog = dialogs.map(dialog =>
        <Dialog id={dialog.id}
                name={dialog.name}
        />
    );
    let message = messages.map(message =>
        <Message id={message.id}
                 message={message.message}
        />
    );

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                {dialog}
            </div>
            <div className={style.messages}>
                {message}
            </div>
        </div>
    );
}




