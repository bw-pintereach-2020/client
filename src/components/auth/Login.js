//user log in form
//submit posted to back end
//success returns login token 
//routes to dashboard
import React, { useState , useEffect} from 'react';
import * as yup from 'yup';
import { loginSchema } from '../validation/loginSchema';
import { connect } from 'react-redux'
import loginUser from '../../actions/loginUser';

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

    const { token } = props.state.loginReducer

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

const mapStateToProps = state => ({
    state
  })
  
  export default connect(mapStateToProps, { loginUser })(Login)