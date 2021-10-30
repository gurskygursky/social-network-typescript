export enum ACTIONS_TYPE {
    ADD_POST = 'Posts/ADD_POST',
    INPUT_NEW_POST_TEXT = 'Posts/INPUT_NEW_POST_TEXT',
    SEND_MESSAGE = 'Dialgos/SEND_MESSAGE',
    INPUT_NEW_MESSAGE_TEXT = 'Dialogs/INPUT_NEW_MESSAGE_TEXT',
}
type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST,
}
type InputNewPostTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
    inputPostText: string,
}
type SendMessageType = {
    type: ACTIONS_TYPE.SEND_MESSAGE,
}
type InputNewMessageTextType = {
    type: ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT,
    inputMessageText: string,
}
export type ActionsTypes =
    AddPostType |
    InputNewPostTextType |
    SendMessageType |
    InputNewMessageTextType;


export type PostType = {
    id: number,
    postText: string,
    likesCount: number,
}

export type DialogType = {
    id: number,
    name: string,
}
export type MessageType = {
    id: number,
    messageText: string,
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}

export type RootStateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType,
}

export type StoreType = {
    _state: RootStateType,
    _renderThree: (_state: RootStateType) => void,
    getState: () => RootStateType,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsTypes) => void,
}

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, postText: 'Lorem ipsum dolor sit amet.', likesCount: 10},
                {id: 2, postText: 'Lorem ipsum dolor sit amet.', likesCount: 7},
                {id: 3, postText: 'Lorem ipsum dolor sit amet.', likesCount: 99},
            ],
        },
        dialogsPage: {
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
        },
    },
    _renderThree() {
        console.log('no subscribers (observers)')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderThree = observer;
    },
    dispatch(action: ActionsTypes) {
        if (action.type === ACTIONS_TYPE.ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                postText: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            if (this._state.profilePage.newPostText !== '') {
                this._state.profilePage.posts.push(newPost);
            }
            this._state.profilePage.newPostText = '';
            this._renderThree(this._state);
        }
        if (action.type === ACTIONS_TYPE.INPUT_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.inputPostText;
            this._renderThree(this._state);
        }
        if (action.type === ACTIONS_TYPE.SEND_MESSAGE) {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                messageText: this._state.dialogsPage.newMessageText,
            };
            if (this._state.dialogsPage.newMessageText !== '') {
                this._state.dialogsPage.messages.push(newMessage);
            }
            this._state.dialogsPage.newMessageText = '';
            this._renderThree(this._state);
        }
        if (action.type === ACTIONS_TYPE.INPUT_NEW_MESSAGE_TEXT) {
                this._state.dialogsPage.newMessageText = action.inputMessageText;
                this._renderThree(this._state);
        }
    }
};

export const AddPost = (): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
    }
};
export const InputNewPostText = (newPostText: string):InputNewPostTextType => {
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
