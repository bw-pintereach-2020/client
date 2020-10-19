//user log in form
//submit posted to back end
//success returns login token 
//routes to dashboard

import React, { useState , useEffect} from 'react';
import * as yup from 'yup';
import schema from '../validation/loginSchema';

const loginData = []

const initalFormValues = {
    username: '',
    password: '',
}

const initialErr = {
    username: '',
    password: '',
}
const initialDisabled = true;

export default function Login() {

    const [login, setLoginData] = useState(loginData);
    const [formValue, setFormValue] = useState(initalFormValues);
    const [formErrors, setFormErrors] = useState(initialErr);
    const [disabled, setDisabled] = useState(initialDisabled);
    const inputChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                })
            })
    };

    const submit = (evt) => {
        evt.preventDefault();
        let newLogin = {
            username: formValue.username,
            password: formValue.password,
        };
        setLoginData([...login, newLogin]);
        setFormValue(initalFormValues);
    };

    useEffect(() => {
        // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
        schema.isValid(formValue).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValue]);


    return (
        <form onSubmit={submit}>
            <label>
                Username:
                        <input type='text' name='username' onChange={inputChange} value={formValue.username} />
            </label>
            <label>
                Password:
                        <input type='text' name='password' onChange={inputChange} value={formValue.password} />
            </label>
            <button disabled={disabled}>Login</button>
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
        </form>
    )
}