import React from "react";
import { MessageType } from "../../../redux/state";
import style from "./Message.module.css";


export const Message = (props: MessageType) => {

    return (
        <div className={style.message}>{props.messageText}</div>

    );
}




