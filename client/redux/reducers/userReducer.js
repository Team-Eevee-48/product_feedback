import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  user_id: 0,
  first_name: '',
  last_name: '',
  email: '',
  failedAuthStatement: '',
  authStatus: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESSFUL_AUTH:
      const { username, user_id } = action.payload;
      // console.log('successfulAuth', action.payload)
      return {
        ...state,
        username,
        user_id: action.payload._id,
        authStatus: true,
      }
      
    case types.UNSUCCESSFUL_AUTH:
      return { 
        ...state,
        failedAuthStatement: 'Authentication failed. Please try again.'
      }
    case types.GET_USER: {
        const { username, user_id } = action.payload;
      // console.log('successful getUsers from reducer', action.payload)
      return {
        ...state,
        username,
        user_id: action.payload._id,
        authStatus: true,
      }
    }
    default:
      return state;
  }
}

export default usersReducer;
