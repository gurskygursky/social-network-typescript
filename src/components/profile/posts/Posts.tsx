import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {ACTIONS_TYPE, ActionsTypes, PostType, store} from "../../../redux/state";

type PostsPageType = {
    posts: Array<PostType>,
    dispatch: (action: ActionsTypes) => void,

    // addPost: (newPostText: string) => void,
    // updateNewPostText: (inputMessageText: string) => void,
}
export const Posts = (props: PostsPageType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                             postText={post.postText}
                                             likesCount={post.likesCount}
        />
    );

    // let textAreaPostText = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        // if (textAreaPostText.current) {
        // const text = textAreaPostText.current.value
        props.dispatch({type: ACTIONS_TYPE.ADD_POST})
        // props.addPost(textAreaPostText.current.value);
        // textAreaPostText.current.value = ''}
    }
    const onChangePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        const newPostText = event.currentTarget.value
        // props.updateNewPostText(event.currentTarget.value)
        props.dispatch({
            type: ACTIONS_TYPE.INPUT_NEW_POST_TEXT,
            inputPostText: newPostText,
        })
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
                    // ref={textAreaPostText}
                    onChange={onChangePost}
                    value={store._state.profilePage.newPostText}
                    // value={state.profilePage.newPostText}
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
