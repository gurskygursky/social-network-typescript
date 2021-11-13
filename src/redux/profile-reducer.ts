import {ACTIONS_TYPE, ActionsTypes} from "./actions";

export type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null,
}
export type PhotosType = {
    small: string ,
    large: string ,
}
export type UserProfileType = {
    aboutMe: string,
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}
export type PostType = {
    id: number,
    postText: string,
    likesCount: number,
}
export type InitialStateType = {
    newPostText: string,
    posts: Array<PostType>,
    userProfile: UserProfileType,
    status: string
}
const initialState: InitialStateType = {
    newPostText: '',
    posts: [
        {id: 1, postText: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, postText: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, postText: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
    userProfile: {
        aboutMe: '',
        userId: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null,
        },
        photos: {
            small: '' ,
            large: '' ,
        }
    },
    status: "",
};

export const ProfileReducer = (state= initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            console.log(action.post)
            const newPost: PostType = {
                id: new Date().getTime(),
                postText: action.post,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
            // if (state.newPostText !== '') {
            //     return {
            //         ...state,
            //         posts: [...state.posts, newPost],
            //         newPostText: '',
            //     }
            // }
            // return state;
        case ACTIONS_TYPE.DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.postID)}
        case ACTIONS_TYPE.INPUT_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.inputPostText,
            }
        case ACTIONS_TYPE.SELECT_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile,
            }
        case ACTIONS_TYPE.SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state;
    }
};
