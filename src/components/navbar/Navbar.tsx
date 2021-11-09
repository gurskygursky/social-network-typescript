import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.link}>
                <NavLink to={'/profile'}>
                    Profile
                </NavLink>
            </div>
            <div className={style.link}>
                <NavLink to={'/messages'}>
                    Messages
                </NavLink>

            </div>
            <div className={style.link}>
                <NavLink to={'/news'}>
                    News
                </NavLink>

            </div>
            <div className={style.link}>
                <NavLink to={'/music'}>
                    Music
                </NavLink>

            </div>
            <div className={style.link}>
                <NavLink to={'/settings'}>
                    Settings
                </NavLink>
            </div>
            <div className={style.link}>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
        </div>
    );
}
