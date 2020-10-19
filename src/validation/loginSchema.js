import * as yup from 'yup'; 

export default yup.object().shape({
    username: yup
    .required('Username Is Required')
    .min(3, 'Must be at least more than 3 characters'),
    password: yup
    .required("Password is Required")
    .min(3, 'Must be more than 3 characters')  
})