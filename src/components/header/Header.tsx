import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {LoginHeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props: LoginHeaderContainerPropsType) => {

    const logoutHandler = () => {
        props.logoutThunk()
    }
    return (
        <header className={classes.header}>
            <div className={classes.login}>
                {props.isAuth
                    ? <button onClick={logoutHandler}>Logout</button>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

