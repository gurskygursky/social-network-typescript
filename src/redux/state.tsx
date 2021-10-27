export type PostType = {
    id: number,
    postText: string,
    likesCount: number,
}
export type PostsType = {
    posts: Array<PostType>
}

export type DialogType = {
    id: number,
    name: string,
}
export type MessageType = {
    id: number,
    message: string,
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

let state: RootStateType = {
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
            {id: 1, message: 'Hi!'},
            {id: 1, message: 'Hi, hi!'},
            {id: 1, message: 'Yo!'},
            {id: 1, message: 'Yo, yo!'},
            {id: 1, message: 'Yo, yo, yo!'},
        ],
    },
}

export default state;