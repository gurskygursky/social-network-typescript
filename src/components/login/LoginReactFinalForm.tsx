import React from "react";
import { Field, Form } from "react-final-form";



const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
    await sleep(1000);
    // window.alert(JSON.stringify(values, undefined, 2));
    console.log(JSON.stringify(values, undefined, 2));
};

const required = (value: string) => (value ? undefined : "Required");

export const LoginReactFinalForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
                <Field name="firstName" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>First Name</label>
                            <input {...input} type="text" placeholder="First Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="lastName" validate={required}>
                    {({ input, meta }) => (
                        <div>
                            <label>Last Name</label>
                            <input {...input} type="text" placeholder="Last Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <div className="buttons">
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                </div>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
        )}
    />
)