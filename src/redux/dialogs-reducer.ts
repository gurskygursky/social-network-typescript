import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type DialogType = {
    id: number,
    name: string,
}
export type MessageType = {
    id: number,
    messageText: string,
}
export type InitialStateType = {
    // newMessageText: string,
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
}

const initialState: InitialStateType = {
    // newMessageText: '',
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ],
    messages: [
        {id: 1, messageText: 'Hi!'},
        {id: 1, messageText: 'Hi, hi!'},
        {id: 1, messageText: 'Yo!'},
        {id: 1, messageText: 'Yo, yo!'},
        {id: 1, messageText: 'Yo, yo, yo!'},
    ],
};

export const DialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                messageText: action.message,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
            // if (state.newMessageText !== '') {
            //     return {
            //         ...state,
            //         messages: [...state.messages, newMessage],
            //         newMessageText: '',
            //     }
            // }
            // return state;
        // case ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT:
        // return {
        //     ...state,
        //     newMessageText: action.inputMessageText,
        // }
        default: return state;
    }
}
