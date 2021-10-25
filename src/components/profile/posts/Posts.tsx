import React from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";


export const Posts = () => {
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
                <Post postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Maecenas sollicitudin diam ac eros sollicitudin ultricies. ' +
                'Nulla elit velit, feugiat semper commodo et, egestas sit amet enim. '} likeCount={10}/>
                <br/>
                <Post postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Maecenas sollicitudin diam ac eros sollicitudin ultricies. ' +
                'Nulla elit velit, feugiat semper commodo et, egestas sit amet enim. '}likeCount={99}/>
                <br/>
                <Post postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Maecenas sollicitudin diam ac eros sollicitudin ultricies. ' +
                'Nulla elit velit, feugiat semper commodo et, egestas sit amet enim. '}likeCount={88}/>
                <br/>
                <Post postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Maecenas sollicitudin diam ac eros sollicitudin ultricies. ' +
                'Nulla elit velit, feugiat semper commodo et, egestas sit amet enim. '} likeCount={0}/>
            </div>
        </div>
    );
}
