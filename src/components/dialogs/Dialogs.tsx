import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {Dialog} from "./dialog/Dialog";
import {ActionsTypes, InputNewMessageText, SendMessage} from "../../redux/actions";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogPage: DialogsPageType,
    dispatch: (action: ActionsTypes) => void,
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
        props.dispatch(SendMessage())
    }
    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        const newMessageText = event.currentTarget.value
        props.dispatch(InputNewMessageText(newMessageText))
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
                          value={props.dialogPage.newMessageText}
                          onKeyPress={onKeyPressEnter}
                />
                <br/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}




