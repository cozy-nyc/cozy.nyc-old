import api from 'utils/api';

/*
  Fetch Profile Action

  Gets individual profile based on id
*/
export function getProfile(username) {
  return function (dispatch) {
    api.get('/profile/' + username)
      .then(response => {
        dispatch({ type: 'FETCH_PROFILE_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_PROFILE_ERROR', payload: err });
      });
  };
}
