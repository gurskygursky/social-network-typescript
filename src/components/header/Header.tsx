import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css"
import {UserDataType} from "../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    userData: UserDataType,
    isAuth: boolean
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.login}>
                {props.isAuth ? props.userData.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

