import { AddPost, DeletePost } from "./actions";
import {InitialStateType, ProfileReducer} from "./profile-reducer";

const state: InitialStateType = {
    newPostText: '',
    posts: [
        {id: 1, postText: 'Lorem ipsum dolor sit amet.', likesCount: 10},
        {id: 2, postText: 'Lorem ipsum dolor sit amet.', likesCount: 7},
        {id: 3, postText: 'Lorem ipsum dolor sit amet.', likesCount: 99},
    ],
    userProfile: {
        aboutMe: '',
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        photos: {
            small: '' ,
            large: '' ,
        }
    },
    status: "",
    setErrorMessage: '',
};

it ('length of posts should be incremented', () => {
    let action = AddPost("it-incubator");

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it ('message of new post should be correct', () => {
    let action = AddPost("it-incubator");

    let newState = ProfileReducer(state, action);

    expect(newState.posts[3].postText).toBe("it-incubator");
});

it ('after deleting length of messages should be decrement', () => {
    let action = DeletePost(1);

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it (`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = DeletePost(9);

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});



