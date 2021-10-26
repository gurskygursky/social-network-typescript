import React from "react";
import style from "./Posts.module.css";
import {Post, PostType} from "./post/Post";



type PostsType = {
    posts: Array<PostType>
}

export const Posts = (props: PostsType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                       postText={post.postText}
                                       likesCount={post.likesCount}
        />
    );
    return (
        <div>
            MyPost
            <div>
                <br/>
                <br/>
                <textarea/>
                <br/>
                <button>Add post</button>
            </div>
            <br/>
            <br/>
            <div className={style.posts}>
                {post}
            </div>
        </div>
    );
}
