export default function Reducer(
  state = {
    isLogin: false,
    user: {}
  },
  action
) {
  switch (action.type) {
    case 'VERIFY_SUCCESS':
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        user: action.payload.user
      };
    case 'VERIFY_FAIL':
      return {
        ...state,
        isLogin: false,
        error: action.error
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogin: true,
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
        token: action.payload.token,
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
        isLogin: false,
        token: null,
        user: {}
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
