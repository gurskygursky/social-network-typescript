import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {Dialog} from "./dialog/Dialog";
import {DialogsPageType, store} from "../../redux/state";

type DialogsPropsType = {
    dialogPage: DialogsPageType,
    sendMessage: (messageText: string) => void,
    updateNewMessageText: (inputMessageText: string) => void,
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialog = props.dialogPage.dialogs.map(dialog =>
        <Dialog id={dialog.id}
                name={dialog.name}
        />
    );
    let message = props.dialogPage.messages.map(message =>
        <Message id={message.id}
                 messageText={message.messageText}
        />
    );


    let textAreaMessageText = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        if (textAreaMessageText.current) {
            props.sendMessage(textAreaMessageText.current.value)
            textAreaMessageText.current.value = ''
        }
    }
    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        // let newMessageText = event.currentTarget.value
        props.updateNewMessageText(event.currentTarget.value)
    }
    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter")
            sendMessage()
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
                <textarea ref={textAreaMessageText}
                          onChange={onChangeMessage}
                          value={store._state.dialogsPage.newMessageText}
                          onKeyPress={onKeyPressEnter}
                />
                <br/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}




