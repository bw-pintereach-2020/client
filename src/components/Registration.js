import React, { useState } from 'react'
//user registration form
//submit posts new user to back end
//success returns login token
//routes user to dashboard

const initForm = {
    username: '',
    email: '',
    password: ''
}

const initErr = {
    username: '',
    email: '',
    password: ''
}

const Registration = () => {
    const [register, setRegister] = useState(initForm)
    const [errState, setErrState] = useState(initErr)
    
    return (
        <div>
            
        </div>
    )
}

export default Registration
