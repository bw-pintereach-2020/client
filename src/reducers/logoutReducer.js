

// const initialState = {
//     inProgress: false,
//     error: ''
// }

// function logoutReducer(state = initialState, action) {
//     const { type } = action
//     switch(type) {
//         case LOGOUT_START:
//             return {...state, inProgress: true}
//         case LOGOUT_SUCCESS:
//             return {...state, inProgress: false}
//         case LOGOUT_FAILURE:
//             return {...state, inProgress: false, error: 'Logout Failed'}
//         default:
//             return state
//     }
// }

// export default logoutReducer