export default function Reducer(
  state = {
    login: false,
    user: null
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: true,
        token: action.payload.token,
        user: action.payload.user
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        loginError: action.error
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registeringIn: false
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        registeringIn: false,
        registerError: action.error
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        login: false,
        token: null,
        user: null
      };
    case 'LOGOUT_FAIL':
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}
