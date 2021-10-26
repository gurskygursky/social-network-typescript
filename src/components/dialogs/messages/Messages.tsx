import React from "react";
import style from "./Messages.module.css";

type MessagesType = {
    message: string,
}

export const Messages = (props: MessagesType) => {

    return (
        <div className={style.message}>{props.message}</div>

    );
}




