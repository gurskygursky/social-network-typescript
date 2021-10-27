import React from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type PostsPageType = {
    posts: Array<PostType>,
    addPost: (postText: string) => void,
}
export const Posts = (props: PostsPageType ) => {

    let post = props.posts.map(post => <Post id={post.id}
                                       postText={post.postText}
                                       likesCount={post.likesCount}
        />
    );

    let textAreaPostText = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (textAreaPostText.current) {
            props.addPost(textAreaPostText.current.value)
        }
    }

    return (
        <div>
            MyPost
            <div>
                <br/>
                <br/>
                <textarea ref={textAreaPostText}/>
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
