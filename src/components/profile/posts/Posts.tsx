import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostsPropsType} from "./PostsContainer";

export const Posts = (props: PostsPropsType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                             postText={post.postText}
                                             likesCount={post.likesCount}
        />
    );

    const addPost = () => {
        props.addPost();
    }
    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newPostText = event.currentTarget.value
        props.onChangePost(newPostText)
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
