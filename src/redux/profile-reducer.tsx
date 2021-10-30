import {ACTIONS_TYPE, ActionsTypes} from "./actions";
import {PostType, ProfilePageType} from "./state";

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, postText: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, postText: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, postText: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
};

const ProfileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                postText: state.newPostText,
                likesCount: 0,
            };
            if (state.newPostText !== '') {
                state.posts.push(newPost);
            }
            state.newPostText = '';
            return state;
        case ACTIONS_TYPE.INPUT_NEW_POST_TEXT:
            state.newPostText = action.inputPostText;
            return state;
    }
};
export default ProfileReducer;