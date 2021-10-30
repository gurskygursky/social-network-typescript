import {ACTIONS_TYPE, ActionsTypes} from "./actions";
import {DialogsPageType, MessageType} from "./state";

const initialState: DialogsPageType = {
    newMessageText: '',
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

const DialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                messageText: state.newMessageText,
            };
            if (state.newMessageText !== '') {
                state.messages.push(newMessage);
            }
            state.newMessageText = '';
            return state;
        case ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT:
            state.newMessageText = action.inputMessageText;
            return state;
    }
}
export default DialogsReducer;