import React from "react";
import "./Navbar.module.css";
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.link}>
                <a href={'/profile'}>
                    Profile
                </a>
            </div>
            <div className={style.link}>
                <a href={'/messages'}>
                    Messages
                </a>

            </div>
            <div className={style.link}>
                <a href={'/news'}>
                    News
                </a>

            </div>
            <div className={style.link}>
                <a href={'/music'}>
                    Music
                </a>

            </div>
            <div className={style.link}>
                <a href={'/settings'}>
                    Settings
                </a>
            </div>
        </div>
    );
}
