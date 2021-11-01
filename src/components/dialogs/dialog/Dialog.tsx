import React from "react";
import {NavLink} from "react-router-dom";
import { DialogType } from "../../../redux/dialogs-reducer";
import style from "./Dialog.module.css";

export const Dialog = (props: DialogType) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}




