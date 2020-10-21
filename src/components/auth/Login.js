//user log in form
//submit posted to back end
//success returns login token 
/* routes to dashboard */

import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { loginSchema } from '../validation/loginSchema';
import styled from 'styled-components';
import { connect } from 'react-redux'
import loginUser from '../../actions/loginUser';

//STYLES FOR THE FORM

const Form = styled.div`
    border: 2px solid black;
    width: 20%;
    height: 50vh;
    margin: 7% auto;
    background-color: #ebebeb;
    padding: 0 3%;
    box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7);


    @media(max-width: 1500px){
        width: 30%;
    }

    @media(max-width: 800px){
        width: 50%;
    }

    @media(max-width: 500px){
        width: 80%;
    }

    @media(max-width: 400px){
        width: 80%;
    }
`;

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 30%;
`;

const Label = styled.label`
    font-size: 2rem;
    font-weight: bold; 
`;

const Input = styled.input`
    width: 100%;
    height: 5vh;
    font-size: 1.8rem; 
    margin-bottom: 5%;
    outline: none;
`;

const Button = styled.button`
    margin-top: 15%;
    height: 5vh;
    font-size: 2rem;
    background-color: #119DA4;
`;

const Errors = styled.div`
    color: red;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold; 
    margin-top: 2%;
`;

////////////////////////////////////////

//routes to dashboard


const initalFormValues = {
    username: '',
    password: '',
}

const initialErr = {
    username: '',
    password: '',
}
const initialDisabled = true;

function Login(props) {
    const [formValue, setFormValue] = useState(initalFormValues);
    const [formErrors, setFormErrors] = useState(initialErr);
    const [disabled, setDisabled] = useState(initialDisabled);

    const { token } = props.state.userAuthReducer

    const inputChange = (evt) => {
        const { name, value } = evt.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        yup.reach(loginSchema, name)
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
        props.loginUser(newLogin)
        setFormValue(initalFormValues);
    };

    useEffect(() => {
        if(token){
            props.history.push('/dashboard')
          }
    }, [token, props.history])

    useEffect(() => {
        loginSchema.isValid(formValue).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValue]);


    return (
        <Form className="formContainer">
            <InputForm >
                <Label>
                    Username:
                        <Input type='text' name='username' onChange={inputChange} value={formValue.username} />
                </Label>
                <Label>
                    Password:
                        <Input type='text' name='password' onChange={inputChange} value={formValue.password} />
                </Label>
            <Button disabled={disabled} onClick={submit}>Login</Button>
            </InputForm>
            <Errors>{formErrors.username}</Errors>
            <Errors>{formErrors.password}</Errors>
        </Form>
    )
}

const mapStateToProps = state => ({
    state
  })
  
  export default connect(mapStateToProps, { loginUser })(Login)