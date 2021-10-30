import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType, store} from "../../../redux/state";
import {ActionsTypes, AddPost, InputNewPostText} from "../../../redux/actions";

type PostsPageType = {
    posts: Array<PostType>,
    dispatch: (action: ActionsTypes) => void,
}
export const Posts = (props: PostsPageType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                             postText={post.postText}
                                             likesCount={post.likesCount}
        />
    );

    const addPost = () => {
        props.dispatch(AddPost())
    }
    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        const newPostText = event.currentTarget.value
        props.dispatch(InputNewPostText(newPostText))
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
                    value={store._state.profilePage.newPostText}
                    onKeyPress={onKeyPressEnter}
                />
                <br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <br/>
            <br/>
            <div className={style.posts}>
                {post}
            </div>
        </div>
    );
}
