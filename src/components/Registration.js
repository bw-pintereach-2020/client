import React, { useState } from "react";
//user registration form
//submit posts new user to back end
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
  const [errState, setErrState] = useState(initErr);

  const handleInput = (e) => {
    const { value, name, type } = e.target;

    setRegister({ ...register, [name]: value });
  };

  const registerAccount = (e) => {
    e.preventDefault();

    console.log(register);
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
          </div>
          <div className="email">
            <label htmlFor="email">
              Add Your Email
              <input
                type="email"
                name="email"
                value={register.email}
                placeholder="ereader@yahoo.com"
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="pwd">
            <label htmlFor="password">
              Write a Super-Secret Password
              <input
                type="password"
                name="password"
                value={register.password}
                placeholder="NightHowler1234!!"
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="pwd-match">
            <label htmlFor="passwordMatch">
              Double-Check It
              <input
                type="password"
                name="passwordMatch"
                value={register.passwordMatch}
                placeholder="NightHowler1234!!"
                onChange={handleInput}
              />
            </label>
          </div>
        </fieldset>
        <button type="submit">Join the Pintereach Network</button>
      </form>
    </div>
  );
};

export default Registration;