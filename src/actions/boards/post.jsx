import api from 'utils/api';

export function createPost() {
  return function (dispatch) {
    api.post('/post/create/',data)
      .then(response => {
        dispatch({ type: 'FETCH_THREADS_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_THREADS_ERROR', payload: err });
      });
  };
}
