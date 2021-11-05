import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css"
import {UserDataType} from "../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

type HeaderType = {
    userData: UserDataType,
    isAuth: boolean
}
export const Header = (props: HeaderType) => {
    return (
        <header className={classes.header}>
            {
                props.isAuth
                    ? props.userData.login
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </header>
    );
}

