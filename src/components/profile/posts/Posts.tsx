import React from "react";
import style from "./Posts.module.css";
import {Post} from "./post/Post";
import {PostsPropsType} from "./PostsContainer";
import {Field, Form} from "react-final-form";

export const Posts = (props: PostsPropsType) => {

    let post = props.posts.map(post => <Post id={post.id}
                                             postText={post.postText}
                                             likesCount={post.likesCount}
        />
    );

    const addPost = (values: any) => {
        props.addPost(values.post);
    }

    return (
        <div>
            MyPost
            <div>
                <br/>
                <br/>
                <Form onSubmit={addPost} render={({handleSubmit, values}) =>
                    <form onSubmit={handleSubmit}>
                        <Field name="post">
                            {({input, meta}) => (
                                <div>
                                    <label>Text Area Message</label>
                                    <input {...input} type={"text"} placeholder="message ..."/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}

                        </Field>
                    </form>
                }
                />
                <br/>
            </div>
            <br/>
            <br/>
            <div className={style.posts}>
                {post}
            </div>
        </div>
    );
}
