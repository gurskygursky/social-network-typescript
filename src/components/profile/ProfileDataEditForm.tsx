import React from "react";
import style from "./Profile.module.css";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
import {Field, Form} from "react-final-form";

type ProfileInfoType = {
    userProfile: UserProfileType,
    updateProfileDataThunk: (contacts: ContactsType, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string) => void,
    hideEditForm: () => void,
    setErrorMessage: string,
}

const required = (value: string) => (value ? undefined : "Required");

export const ProfileDataEditForm = (props: ProfileInfoType) => {
    const updateProfileDataHandler = (values: any) => {
        console.log(1)
        props.updateProfileDataThunk({
                facebook: values.facebook,
                twitter: values.twitter,
                github: values.github,
                vk: values.vk,
                website: values.website,
                instagram: values.instagram,
                youtube: values.youtube,
                mainLink: values.mainLink,
            },
            values.aboutMe,
            values.lookingForAJob,
            values.lookingForAJobDescription,
            values.fullName);
        props.hideEditForm();
    }
    console.log(props.setErrorMessage)
    return (
        <div className={style.content}>
            <Form
                onSubmit={updateProfileDataHandler}
                initialValues={props.userProfile}
                render={({handleSubmit, submitting, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="fullName" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>
                                        <b>FullName: </b>
                                    </label>
                                    <input {...input} type="text" placeholder="input text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="aboutMe" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>About Me:</label>
                                    <input {...input} type="text" placeholder="input text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="lookingForAJobDescription" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>LookingForAJobDescription:</label>
                                    <input {...input} type="text" placeholder="input text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name={"lookingForAJob"} type={"checkbox"} validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>
                                        LookingForAJob:
                                    </label>
                                    <input {...input} type={"checkbox"} defaultChecked={false}/>
                                </div>
                            )}
                        </Field>
                        <div>
                            <b>Contacts:</b>{Object.entries(props.userProfile.contacts).map((keyValues) => {
                            return <div key={keyValues[0]}>
                                <Field initialValue={keyValues[1]} name={`${keyValues[0]}`} validate={required}>
                                    {({input, meta}) => (
                                        <div>
                                            <label>
                                                <b>{keyValues[0]}: </b>
                                            </label>
                                            <input {...input} type="text" placeholder="input text ..."/>
                                            {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        })}
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                SetEdit
                            </button>
                        </div>
                    </form>
                )}
            />
            <div>
                {props.setErrorMessage}
            </div>
        </div>
    );
}