import React from "react";
import style from "./Dialogs.module.css";
import {Messages} from "./messages/Messages";
import {DialogsItems} from "./dialogsItems/DialogsItems";


export const Dialogs = () => {

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                <DialogsItems id={1} name={'Dimych'}/>
                <DialogsItems id={2} name={'Sveta'}/>
                <DialogsItems id={3} name={'Sasha'}/>
                <DialogsItems id={4} name={'Katya'}/>
                <DialogsItems id={5} name={'Valera'}/>
                <DialogsItems id={6} name={'Viktor'}/>
            </div>
            <div className={style.messages}>
                <Messages message={'Hi!'}/>
                <Messages message={'Hi, hi!'}/>
                <Messages message={'Yo!'}/>
                <Messages message={'Yo, yo!'}/>
                <Messages message={'Yo, yo, yo!'}/>
            </div>
        </div>
    );
}




