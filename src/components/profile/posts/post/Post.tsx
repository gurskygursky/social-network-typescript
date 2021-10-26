import React from "react";
import style from "./Post.module.css";
import avatar_image from "../../../../assets/image/avatar/BiaKjqXbT.jpg"

export type PostType = {
    id: number,
    postText: string,
    likesCount: number,
}

export const Post = (props: PostType) => {

    return (
                <div className={style.post}>
                    <img alt={"avatar_image"} src={avatar_image}/>
                    <p>
                        {props.postText}
                    </p>
                    <span>{props.likesCount}</span>
                </div>
    );
}
