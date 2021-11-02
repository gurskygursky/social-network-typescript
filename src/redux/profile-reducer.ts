import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type PostType = {
    id: number,
    postText: string,
    likesCount: number,
}
export type InitialStateType = {
    newPostText: string,
    posts: Array<PostType>,
}
const initialState: InitialStateType = {
    newPostText: '',
    posts: [
        {id: 1, postText: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, postText: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, postText: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
};

export const ProfileReducer = (state= initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                postText: state.newPostText,
                likesCount: 0,
            };
            if (state.newPostText !== '') {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: '',
                }
            }
            return state;
        case ACTIONS_TYPE.INPUT_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.inputPostText,
            }
        default: return state;
    }
};
