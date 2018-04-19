import api from '../../utils/api'
import {browserHistory} from 'react-router';
import Cookies from 'universal-cookie';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, PROTECTED_TEST} from './types';

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
    dispatch({type: type, payload: 'You are not authorized to do this. Please login and try again.'});
    logoutUser();
  } else {
    dispatch({type: type, payload: errorMessage});
  }
}

export function loginUser({username, password}) {
  return function(dispatch) {
    api.post(`http://dev.cozy.exchange/api-token-auth/`, {username, password}).then(response => {
      cookie.set('token', response.data.token, {path: '/'});
      dispatch({type: AUTH_USER});
      window.location.href = 'dev.cozy.exchange';
    }).catch((error) => {
      console.log(error)
      // errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function registerUser({username, firstName, lastName, password}) {
  return function(dispatch) {
    api.post(`${API_URL}/auth/register`, {username, firstName, lastName, password}).then(response => {
      cookie.set('token', response.data.token, {path: '/'});
      dispatch({type: AUTH_USER});
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    }).catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function logoutUser() {
  return function(dispatch) {
    dispatch({type: UNAUTH_USER});
    cookie.remove('token', {path: '/'});

    window.location.href = CLIENT_ROOT_URL + '/login';
  }
}

export function protectedTest() {
  return function(dispatch) {
    api.get(`${API_URL}/api-token-verify`, {
      headers: {
        'Authorization': cookie.get('token')
      }
    }).then(response => {
      dispatch({type: PROTECTED_TEST, payload: response.data.content});
    }).catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}
