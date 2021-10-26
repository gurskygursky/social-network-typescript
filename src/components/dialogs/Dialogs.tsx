import React from "react";
import style from "./Dialogs.module.css";
import {Message, MessageType} from "./messages/Message";
import {Dialog, DialogType} from "./dialog/Dialog";

type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export const Dialogs = (props: DialogsType) => {

    let dialog = props.dialogs.map(dialog =>
        <Dialog id={dialog.id}
                name={dialog.name}
        />
    );
    let message = props.messages.map(message =>
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




