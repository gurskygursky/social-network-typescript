import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {UsersContainer} from "../users/UsersContainer";

export const Dialogs = (props: DialogsPropsType) => {

    // let dialog = props.dialogs.map(dialog =>
    //     <Dialog id={dialog.id}
    //             name={dialog.name}
    //     />
    // );
    let message = props.messages.map(message =>
        <Message id={message.id}
                 messageText={message.messageText}
        />
    );

    const sendMessage = () => {
        props.sendMessage();
    }
    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = event.currentTarget.value
        props.onChangeMessage(newMessageText);
    }
    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter")
            sendMessage()
    }
    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                <UsersContainer/>
                {/*{dialog}*/}
            </div>
            <div className={style.messages}>
                {message}
                <br/>
                <br/>
                <textarea onChange={onChangeMessage}
                          value={props.newMessageText}
                          onKeyPress={onKeyPressEnter}
                />
                <br/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}




