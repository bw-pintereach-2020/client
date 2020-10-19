//user log in form
//submit posted to back end
//success returns login token 
//routes to dashboard

import React, { useState } from 'react';

const loginData = []

const initalFormValues = {
    username: '',
    password: '',
}

export default function Login() {

    const [ login, setLoginData ] = useState(loginData);
    const [ formValue, setFormValue ] = useState(initalFormValues);

    const inputChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({ 
            ...formValue, 
            [name]: value });
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

    return (
        <form onSubmit={submit}>
            <label>
                Username:
                        <input type='text' name='username' onChange={inputChange} value={formValue.username}/>
            </label>
            <label>
                Password:
                        <input type='text' name='password' onChange={inputChange} value={formValue.password}/>
            </label>
            <button>Login</button>
        </form>
    )
}