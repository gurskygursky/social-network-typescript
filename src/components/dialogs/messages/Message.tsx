import React from "react";
import style from "./Message.module.css";
import {MessageType} from "../../../redux/dialogs-reducer";


export const Message = (props: MessageType) => {

    return (
        <div className={style.message}>{props.messageText}</div>

    );
}




