import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {UserContainer} from "../users/UsersContainer";
import {Redirect} from "react-router-dom";
import {Field, Form} from "react-final-form";

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

    // const sendMessage = () => {
    //     props.sendMessage();
    // }
    const sendMessageForm = (values: any) => {
        props.sendMessageForm(values.message);
    }
    // const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     const newMessageText = event.currentTarget.value
    //     props.onChangeMessage(newMessageText);
    // }
    // const onChangeMessageForm = (values: any) => {
    //     console.log(JSON.stringify(values.message, undefined, 2))
    //     // const newMessageText = event.currentTarget.value
    //     props.onChangeMessage(values.message);
    // }
    // const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (event.key === "Enter")
    //         sendMessage()
    // }

// const onSubmit = (values: string) => {
//         console.log(JSON.stringify(values, undefined, 2))
// }
    // const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // const onSubmit = async (values: any) => {
    //     await sleep(1000);
    //     // window.alert(JSON.stringify(values, undefined, 2));
    //     console.log(JSON.stringify(values, undefined, 2));
    // };

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                {/*<UserContainer/>*/}
                {/*{dialog}*/}
            </div>
            <div className={style.messages}>
                {message}
                <br/>
                <br/>
                <Form onSubmit={sendMessageForm}  render={({handleSubmit, values}) =>
                    <form onSubmit={handleSubmit}>
                        <Field name="message" >
                            {({ input, meta }) => (
                                <div>
                                    <label>Text Area Message</label>
                                    <input {...input} type="text" placeholder="message ..." />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}

                        </Field>
                    </form>
                }
                />
                {/*<textarea onChange={onChangeMessage}*/}
                {/*          value={props.newMessageText}*/}
                {/*          onKeyPress={onKeyPressEnter}*/}
                {/*/>*/}
                <br/>
                {/*<button onClick={sendMessage}>Send</button>*/}
            </div>
        </div>
    );
}




