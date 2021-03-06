import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./StatusWithHooks.module.css";

type StatusPropsType = {
    statusText: string,
    changeStatus: (status: string) => void,
}

export const StatusWithHooks = (props: StatusPropsType) => {
    useEffect(() => {
        setStatus(props.statusText)
    }, [props.statusText])

    let [status, setStatus] = useState(props.statusText);
    let [editMode, setEditMode] = useState<boolean>(false);

    const activateEditTitle = () => {
        setEditMode(true);
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    const deactivateEditTitle = () => {
        setEditMode(false);
        props.changeStatus(status);
    }

    return (
        <div className={style.status}>
            {
                !editMode
                    ? <span onClick={activateEditTitle}>{props.statusText ? props.statusText : "status text"}</span>
                    : <input onChange={onStatusChange}
                             value={status}
                             autoFocus
                             onBlur={deactivateEditTitle}
                    />
            }
        </div>
    )
}
