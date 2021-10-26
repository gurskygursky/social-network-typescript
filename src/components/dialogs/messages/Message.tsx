import React from "react";
import style from "./Message.module.css";

export type MessageType = {
    id: number,
    message: string,
}

export const Message = (props: MessageType) => {

    return (
        <div className={style.message}>{props.message}</div>

    );
}




