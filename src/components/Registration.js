import React, { useEffect, useState } from "react";
import { registerSchema } from "./validation/registerSchema";
import * as yup from "yup";

import {HidePwd, ShowPwd} from './utils/appIcons.js'
//success returns login token
//routes user to dashboard

const initForm = {
  username: "",
  email: "",
  password: "",
  passwordMatch: "",
};

const initErr = {
  username: "",
  email: "",
  password: "",
  passwordMatch: "",
};

const Registration = () => {
  const [register, setRegister] = useState(initForm);
  const [pwdShowing, setPwdShowing] = useState(false)
  const [locked, setLocked] = useState(true);
  const [errs, setErrs] = useState(initErr);

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
    validateInput(name, value)
    setRegister({ ...register, [name]: value });
  };

  const registerAccount = (e) => {
    e.preventDefault();

    const reqObj = {
        username: register.username,
        email: register.email,
        password: register.password,
      };

    console.log('Request Sent:', reqObj);
  };

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
                onChange={handleInput}
              />
            </label>
            { errs.username.length > 0 && <p className="err">{errs.username}</p> }
          </div>
          <div className="email">
            <label htmlFor="email">
              Add Your Email
              <input
                type="email"
                name="email"
                value={register.email}
                placeholder="ereader@yahoo.com"
                aria-describedby='email-err'
                onChange={handleInput}
              />
            </label>
            { errs.email.length > 0 && <p className="error" id='email-err'>{errs.email}</p> }
          </div>
          <div className="pwd">
            <label htmlFor="password">
              Write a Super-Secret Password
              <input
                type={pwdShowing ? 'text':'password'}
                name="password"
                value={register.password}
                placeholder="NightHowler1234!!"
                onChange={handleInput}
              />
              <div
                role="button"
                onClick={(e) => setPwdShowing(!pwdShowing)}
                aria-label={pwdShowing ? "Hide Password" : "Show Password"}
              >
                {pwdShowing ? <HidePwd /> : <ShowPwd />}
              </div>
            </label>
            { errs.password.length > 0 && <p className="error">{errs.password}</p> }
          </div>
          <div className="pwd-match">
            <label htmlFor="passwordMatch">
              Double-Check It
              <input
                type={pwdShowing ? 'text':'password'}
                name="passwordMatch"
                value={register.passwordMatch}
                placeholder="NightHowler1234!!"
                onChange={handleInput}
              />
              <div
                role="button"
                onClick={(e) => setPwdShowing(!pwdShowing)}
                aria-label={pwdShowing ? "Hide Password" : "Show Password"}
              >
                {pwdShowing ? <HidePwd /> : <ShowPwd />}
              </div>
            </label>
            { errs.passwordMatch.length > 0 && <p className="error">{errs.passwordMatch}</p> }
          </div>
        </fieldset>
        <button disabled={locked} type="submit">
          Join the Pintereach Network
        </button>
      </form>
    </div>
  );
};

export default Registration;