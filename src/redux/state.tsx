export {};
/*
    import {ActionsTypes} from "./actions";
    import {ProfileReducer} from "./profile-reducer";
    import {DialogsReducer} from "./dialogs-reducer";

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
        _renderThree: (state: RootStateType) => void,
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
            ProfileReducer(this._state.profilePage, action);
            DialogsReducer(this._state.dialogsPage, action);
            this._renderThree(this._state)
        }
    };
    */