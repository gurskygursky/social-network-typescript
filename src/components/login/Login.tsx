import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import classes from "./Login.module.css";
import {LoginFormPropsType} from "./LoginContainer";
import {Field, Form} from "react-final-form";

export const Login = (props: LoginFormPropsType) => {

    const required = (value: string) => (value ? undefined : "Required");


    const log = (values: any) => {
        props.loginThunk(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>

            <NavLink to={'/login'}>
                <h3 className={classes.login}>
                    LOGIN
                </h3>
            </NavLink>

            <Form
                onSubmit={log}
                render={({handleSubmit, submitting, values}) => (
                    <form onSubmit={handleSubmit}>
                        <div>{props.setErrorMessage}</div>
                        <Field name="email" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="text" placeholder="Email"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name={"rememberMe"} type={"checkbox"} validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Remember Me</label>
                                    <input {...input} type={"checkbox"} defaultChecked={false}/>
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Login
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}