import api from 'utils/api';
import cookies from 'utils/cookie';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({ type: type, payload: 'You are not authorized to do this. Please login and try again.' });
    logout();
  } else {
    dispatch({ type: type, payload: errorMessage });
  }
}

export function login({ username, password }) {
  return function (dispatch) {
    api.post('/api-token-auth/', { username, password }).then(response => {
      cookies.set('token', response.data.token, { path: '/' });
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      window.location.href = '/';
    }).catch(error => {
      errorHandler(dispatch, error.response, 'LOGIN_FAIL');
    });
  };
}

export function register({
  username,
  email,
  password1,
  password2
}) {
  return function (dispatch) {
    api.post('/register', {
      username,
      email,
      password1,
    }).then(response => {
      cookies.set('token', response.data.token, { path: '/' });
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
      window.location.href = '/';
    }).catch(error => {
      errorHandler(dispatch, error.response, 'REGISTER_FAIL');
    });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    cookies.remove('token', { path: '/' });
    window.location.href = '/';
  }
}

export function verifyToken() {
  const token = { token: cookies.get('token') };
  console.log(token);
  return function (dispatch) {
    api.post('/api-token-verify/', token).then(response => {
      dispatch({ type: 'VERIFY_SUCCESS', payload: response.data });
    }).catch(error => {
      errorHandler(dispatch, error.response, 'VERIFY_FAIL');
    });
  };
}

export function protectedTest() {
  return function (dispatch) {
    api.get('/protected-test', {
      headers: {
        Authorization: cookies.get('token')
      }
    }).then(response => {
      dispatch({ type: 'PROTECTED_TEST', payload: response.data.content });
    }).catch(error => {
      errorHandler(dispatch, error.response, 'AUTH_ERROR');
    });
  };
}
