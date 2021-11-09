import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Login.module.css";
import {LoginReactFinalForm} from "./LoginReactFinalForm";

export const Login = () => {
    return (
        <div>

            <NavLink to={'/login'}>
                <h3 className={classes.login}>
                    LOGIN
                </h3>
            </NavLink>
            <LoginReactFinalForm />

        </div>

    )
}