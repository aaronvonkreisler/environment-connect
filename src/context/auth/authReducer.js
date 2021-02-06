import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from 'context/types';

// const initialState = {
//     user: null,
//      isAuthenticated: false
//     loading: true,
//     error: null
// }

function authReducer(state, action) {
   const { type, payload } = action;

   switch (type) {
      case LOGIN_SUCCESS:
         return {
            ...state,
            user: payload,
            loading: false,
            isAuthenticated: true,
         };
      case LOGIN_ERROR:
         return {
            ...state,
            user: null,
            isAuthenticated: false,
            loading: false,
            error: payload,
         };
      case LOGOUT:
         return {
            ...state,
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
         };
      default:
         return state;
   }
}

export default authReducer;
