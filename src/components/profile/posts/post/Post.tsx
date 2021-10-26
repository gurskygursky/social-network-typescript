import React from "react";
import style from "./Post.module.css";
import avatar_image from "../../../../assets/image/avatar/BiaKjqXbT.jpg"

type propsPostType = {
    likesCount: number,
    postText: string,
}

export const Post = (props: propsPostType) => {

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
