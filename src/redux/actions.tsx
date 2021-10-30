export enum ACTIONS_TYPE {
    ADD_POST = 'Posts/ADD_POST',
    INPUT_NEW_POST_TEXT = 'Posts/INPUT_NEW_POST_TEXT',
    SEND_MESSAGE = 'Dialogs/SEND_MESSAGE',
    INPUT_NEW_MESSAGE_TEXT = 'Dialogs/INPUT_NEW_MESSAGE_TEXT',
}

export type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST,
}
export type InputNewPostTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
    inputPostText: string,
}
export type SendMessageType = {
    type: ACTIONS_TYPE.SEND_MESSAGE,
}
export type InputNewMessageTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
    inputMessageText: string,
}
export const AddPost = (): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
    }
};
export const InputNewPostText = (newPostText: string): InputNewPostTextType => {
    return {
        type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
        inputPostText: newPostText,
    }
};
export const SendMessage = (): SendMessageType => {
    return {
        type: ACTIONS_TYPE.SEND_MESSAGE,
    }
};
export const InputNewMessageText = (newMessageText: string): InputNewMessageTextType => {
    return {
        type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
        inputMessageText: newMessageText,
    }
}
export type ActionsTypes =
    AddPostType |
    InputNewPostTextType |
    SendMessageType |
    InputNewMessageTextType;