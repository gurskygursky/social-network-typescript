import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {Dialog} from "./dialog/Dialog";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPageType = {
    sendMessage: (messageText: string) => void,
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
}

export const Dialogs = (props: DialogsPageType) => {

    let dialog = props.dialogs.map(dialog =>
        <Dialog id={dialog.id}
                name={dialog.name}
        />
    );
    let message = props.messages.map(message =>
        <Message id={message.id}
                 messageText={message.messageText}
        />
    );


    let textAreaMessageText = React.createRef<HTMLTextAreaElement>();
    const sendMessage = () => {
        if (textAreaMessageText.current) {
            props.sendMessage(textAreaMessageText.current.value)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                {dialog}
            </div>
            <div className={style.messages}>
                {message}
                <br/>
                <br/>
                <textarea ref={textAreaMessageText}/>
                <br/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}




