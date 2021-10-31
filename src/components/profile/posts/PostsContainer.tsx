import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {ActionsTypes, AddPost, InputNewPostText} from "../../../redux/actions";
import {PostType, ProfilePageType, StoreType} from "../../../redux/state";
import {Posts} from "./Posts";
import ProfileReducer from "../../../redux/profile-reducer";

type PostsPageType = {
    profilePage: ProfilePageType,
    posts: Array<PostType>,
    // newPostText: (newPostText: string) => void,
    dispatch: (action: ActionsTypes) => void,
}
export const PostsContainer = (props: PostsPageType) => {

    // let post = props.posts.map(post => <Post id={post.id}
    //                                          postText={post.postText}
    //                                          likesCount={post.likesCount}
    //     />
    // );

    const addPost = () => {
        props.dispatch(AddPost())
    }
    const onChangePost = (newPostText: string) => {
        // console.log(event.currentTarget.value)
        // const newPostText = event.currentTarget.value
        props.dispatch(InputNewPostText(newPostText))
    }
    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter")
            addPost()
    }

    return (
        <Posts dispatch={props.dispatch}
               posts={props.posts}
               newPostText={onChangePost}
               onKeyPress={onKeyPressEnter}
               addPost={addPost}
               value={props.profilePage.newPostText}
        />
    );
}
