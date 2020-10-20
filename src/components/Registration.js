import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { registerSchema } from "./validation/registerSchema";
import * as yup from "yup";
import registerUser from '../actions/registerUser'
import { HidePwd, ShowPwd } from "./utils/appIcons.js";
//success returns login token
//routes user to dashboard

const initForm = {
  username: "",
  email: "",
  password: "",
  passwordmatch: "",
};

const initErr = {
  username: "",
  email: "",
  password: "",
  passwordmatch: "",
};

const Registration = (props) => {
  const [register, setRegister] = useState(initForm);
  const [pwdShowing, setPwdShowing] = useState(false);
  const [locked, setLocked] = useState(true);
  const [errs, setErrs] = useState(initErr);

  const { token } = props.state.registerReducer

  useEffect(() => {
    // lock form until valid
    registerSchema.isValid(register).then((valid) => {
        setLocked(!valid);
    });
  }, [register]);

  const validateInput = (name, value) => {
    yup
    .reach(registerSchema, name)
    .validate(value)
    .then(() => setErrs({ ...errs, [name]: "" }))
    .catch((err) => setErrs({ ...errs, [name]: err.errors[0] }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
    setRegister({ ...register, [name]: value });
  };

  const registerAccount = (e) => {
    e.preventDefault();

    const reqObj = {
      username: register.username,
      email: register.email,
      password: register.password,
    };

    props.registerUser(reqObj)
  
  };

  useEffect(() => {
    if(token){
      props.history.push('/dashboard')
    }
  }, [token, props.history])

  return (
    <div>
      <h2>Register Your Account</h2>
      <form onSubmit={registerAccount}>
        <fieldset>
          <div className="username">
            <label htmlFor="username">
              Pick a Unique Username
              <input
                type="text"
                name="username"
                value={register.username}
                placeholder="easy_reader_42"
                aria-describedby="username-error"
                onChange={handleInput}
              />
            </label>
            {errs.username.length > 0 && (
              <p className="err" id="username-error">
                {errs.username}
              </p>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">
              Add Your Email
              <input
                type="email"
                name="email"
                value={register.email}
                placeholder="ereader@yahoo.com"
                aria-describedby="email-error"
                onChange={handleInput}
              />
            </label>
            {errs.email.length > 0 && (
              <p className="error" id="email-error">
                {errs.email}
              </p>
            )}
          </div>
          <div className="pwd">
            <label htmlFor="password">
              Make a Super-Secret Password
              <input
                type={pwdShowing ? "text" : "password"}
                name="password"
                value={register.password}
                placeholder="NightHowler1234!!"
                aria-describedby="password-err"
                onChange={handleInput}
              />
              <div
                role="button"
                onClick={(e) => setPwdShowing(!pwdShowing)}
                aria-label={pwdShowing ? "Hide Password" : "Show Password"}
              >
                {pwdShowing ? <ShowPwd /> : <HidePwd />}
              </div>
            </label>
            {errs.password.length > 0 && (
              <p className="error" id="password-err">
                {errs.password}
              </p>
            )}
          </div>
          <div className="pwd-match">
            <label htmlFor="passwordmatch">
              Double-Check It
              <input
                type={pwdShowing ? "text" : "password"}
                name="passwordmatch"
                value={register.passwordmatch}
                placeholder="NightHowler1234!!"
                aria-describedby="matching-password-error"
                onChange={handleInput}
              />
              <div
                role="button"
                onClick={(e) => setPwdShowing(!pwdShowing)}
                aria-label={pwdShowing ? "Hide Password" : "Show Password"}
              >
                {pwdShowing ? <ShowPwd /> : <HidePwd />}
              </div>
            </label>
            {register.passwordmatch.length > 0 && register.passwordmatch !== register.password && (
              <p className="error" id="matching-password-error">
                {errs.passwordmatch}
              </p>
            )}
          </div>
        </fieldset>
        <button disabled={locked} type="submit">
          Join the Pintereach Network
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { registerUser })(Registration)