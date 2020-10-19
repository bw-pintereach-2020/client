import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required('Username Is Required')
    .min(3, 'Must be at least more than 3 characters'),
    password: yup
    .string()
    .required("Password is Required")
    .min(3, 'Must be more than 3 characters')  
})