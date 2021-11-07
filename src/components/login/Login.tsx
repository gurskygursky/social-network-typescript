import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Login.module.css";

export const Login = () => {
    return (
        <NavLink to={'/login'}>
            <h3 className={classes.login}>
                LOGIN
            </h3>
        </NavLink>
    )
}