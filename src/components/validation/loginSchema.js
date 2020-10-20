import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username Is Required')
    .matches(/^\S*$/, 'No empty spaces.')
    .min(3, 'Must be at least more than 3 characters'),
    password: yup
    .string()
    .required("Password is Required")
    .matches(/^\S*$/, 'No empty spaces.')
    .min(3, 'Must be more than 3 characters')  
});