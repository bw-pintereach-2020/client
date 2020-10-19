import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please add a username.")
      .matches(/^\S*$/, 'No empty spaces.')
      .min(2, "Username should be at least 2 chars."),
    email: yup
      .string()
      .email("Please include a valid email.")
      .required("Please include a valid email."),
    password: yup
      .string()
      .required("Please include a password.")
      .matches(/^\S*$/, 'No empty spaces.')
      .min(8, "Password should be at least 8 chars")
      .max(92, "Password can be no more than 92 chars")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Please include at least 1 uppercase char, 1 number, and 1 special character."
      )
  });