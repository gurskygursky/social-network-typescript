import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form} from "react-final-form";
import {Dialog} from "./dialog/Dialog";

export const Dialogs = (props: DialogsPropsType) => {

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
    const sendMessage = (values: any) => {
        props.sendMessage(values.message);
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
                <Form onSubmit={sendMessage} render={({handleSubmit, values}) =>
                    <form onSubmit={handleSubmit}>
                        <Field name="message">
                            {({input, meta}) => (
                                <div>
                                    <label>Text Area Message</label>
                                    <input {...input} type="text" placeholder="message ..."/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </form>
                }
                />
                <br/>
            </div>
        </div>
    );
}




