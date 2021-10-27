import {renderThree} from "../index";

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
export type ProfileType = {
    posts: Array<PostType>,
}
export type DialogsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
}

export type RootStateType = {
    dialogsPage: DialogsType,
    profilePage: ProfileType,
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 10},
            {id: 2, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 7},
            {id: 3, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 99},
        ],
    },
    dialogsPage: {
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
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        postText: postText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    renderThree(state);
};

export const sendMessage = (messageText: string) => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        messageText: messageText,
    };
    state.dialogsPage.messages.push(newMessage);
    renderThree(state);
};

