import React from "react";
import "./Navbar.module.css";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <a className={classes.link}>
                    Profile
                </a>
            </div>
            <div className={classes.item}>
                <a>
                    Messages
                </a>

            </div>
            <div className={classes.item}>
                <a>
                    News
                </a>

            </div>
            <div className={classes.item}>
                <a>
                    Music
                </a>

            </div>
            <div className={classes.item}>
                <a>
                    Settings
                </a>
            </div>
        </div>
    );
}
