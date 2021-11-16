import React, {ChangeEvent} from "react";
import style from "./Profile.module.css";
import {StatusWithHooks} from "./status/StatusWithHooks";
import {ContactsType, UserProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../../common/preloaders/Preloader";
import avatarImage from "../../assets/image/avatar/img.png";
import {Field, Form} from "react-final-form";


type ProfileInfoType = {
    userProfile: UserProfileType,
    updateProfileDataThunk: (aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string) => void,
    // status: string,
    // changeStatus: (status: string) => void,
    // isOwner: boolean,
    // uploadUserPhoto: (image: File) => void,
}

// const onSubmitHandler = (values: any) => {
//     alert(JSON.stringify(values, undefined, 2))
//     console.log(values)
// }
const required = (value: string) => (value ? undefined : "Required");

export const ProfileDataEditForm = (props: ProfileInfoType) => {
    const updateProfileDataHandler = (values: any) => {
        props.updateProfileDataThunk(values.aboutMe, values.lookingForAJob, values.lookingForAJobDescription, values.fullName)
    }
    return (
        <div className={style.content}>
                <Form
                    onSubmit={updateProfileDataHandler}
                    render={({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="fullName" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>
                                            <b>FullName: </b>
                                        </label>
                                        <input {...input} type="text" placeholder="input text" />
                                        {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                    </div>
                                )}
                            </Field>
                            <Field name="aboutMe" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>About Me:</label>
                                        <input {...input} type="text" placeholder="input text" />
                                        {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                    </div>
                                )}
                            </Field>
                            <Field name="lookingForAJobDescription" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>LookingForAJobDescription:</label>
                                        <input {...input} type="text" placeholder="input text" />
                                        {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                    </div>
                                )}
                            </Field>
                            <Field name={"lookingForAJob"} type={"checkbox"} validate={required}>
                                {({ input, meta}) => (
                                    <div>
                                        <label>
                                            LookingForAJob:
                                        </label>
                                        <input {...input} type={"checkbox"}  defaultChecked={false}/>
                                    </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    SetEdit
                                </button>
                            </div>
                            {/*<pre>{JSON.stringify(values, undefined, 2)}</pre>*/}
                        </form>
                    )}
                />
        </div>
    );
}