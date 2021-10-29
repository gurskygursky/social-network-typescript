
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
    addPost: () => void,
    updateNewPostText: (inputPostText: string) => void,
    sendMessage: () => void,
    updateNewMessageText: (inputMessageText: string) => void,
    _renderThree: (_state: RootStateType) => void,
    getState: () => RootStateType,
    subscribe: (observer: () => void) => void,
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
    addPost () {
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
    },
    updateNewPostText (inputPostText: string) {
        this._state.profilePage.newPostText = inputPostText;
        this._renderThree(this._state);
    },
    sendMessage () {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            messageText: this._state.dialogsPage.newMessageText,
        };
        if (this._state.dialogsPage.newMessageText !== '') {
            this._state.dialogsPage.messages.push(newMessage);
        }
        this._state.dialogsPage.newMessageText = '';
        this._renderThree(this._state);
    },
    updateNewMessageText (inputMessageText: string) {
        this._state.dialogsPage.newMessageText = inputMessageText;
        this._renderThree(this._state);
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
};
