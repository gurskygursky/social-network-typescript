import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogsItems.module.css";

type DialogsItemsType = {
    name: string,
    id: number,
}

export const DialogsItems = (props: DialogsItemsType) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}




