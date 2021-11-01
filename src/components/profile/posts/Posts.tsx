import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {ActionsTypes, AddPost} from "../../../redux/actions";
import {PostType, ProfilePageType, StoreType} from "../../../redux/state";
import store from "../../../redux/redux-store";
import {PostsPropsType} from "./PostsContainer";

type PostsPageType = {
    // profilePage: ProfilePageType,
    posts: Array<PostType>,
    dispatch: (action: ActionsTypes) => void,
    newPostText: (newPostText: string) => void,
    onKeyPress: (event: KeyboardEvent<HTMLTextAreaElement>)  => void,
    addPost: () => void,
    value: any,
}
export const Posts = (props: PostsPropsType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                             postText={post.postText}
                                             likesCount={post.likesCount}
        />
    );

    const addPost = () => {
        props.addPost();
        // props.dispatch(AddPost())
    }
    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // console.log(event.currentTarget.value)
        const newPostText = event.currentTarget.value
        props.onChangePost(newPostText)

        // props.dispatch(InputNewPostText(newPostText))
    }
    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter")
            addPost()
    }

    return (
        <div>
            MyPost
            <div>
                <br/>
                <br/>
                <textarea
                    onChange={onChangePost}
                    value={props.newPostText}
                    onKeyPress={onKeyPressEnter}
                />
                <br/>
                <button onClick={props.addPost}>Add post</button>
            </div>
            <br/>
            <br/>
            <div className={style.posts}>
                {post}
            </div>
        </div>
    );
}
