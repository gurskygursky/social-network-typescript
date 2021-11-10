import React from "react";
import { Field, Form } from "react-final-form";



// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// const onSubmit = async (values: any) => {
//     await sleep(1000);
//     // window.alert(JSON.stringify(values, undefined, 2));
//     console.log(JSON.stringify(values, undefined, 2));
// };
const log = (values: any) => {
    // debugger
    // alert(JSON.stringify(values, undefined, 2))
    console.log(values)
}

// const onSubmit = (values: any) => {
//         alert(JSON.stringify(values, undefined, 2))
// }

const required = (value: string) => (value ? undefined : "Required");

export const LoginReactFinalForm = () => (
    <Form
        onSubmit={log}
        render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
                <Field name="email" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>Email</label>
                            <input {...input} type="text" placeholder="Email" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="password" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>Password</label>
                            <input {...input} type="password" placeholder="Password" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name={"rememberMe"} validate={required}>
                    {({ input, meta}) => (
                    <div>
                        <label>Remember Me</label>
                        <input {...input} type={"checkbox"}  defaultChecked={false}/>
                    </div>
                        )}
                </Field>
                <div className="buttons">
                    <button type="submit" disabled={submitting}>
                        Login
                    </button>
                </div>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
        )}
    />
)