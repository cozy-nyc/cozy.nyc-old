import api from 'utils/api';

/*
  Create Thread Action

  Creates a thread on a board.

  TODO:
    Everything!
*/
export function createThread() {
  return function (dispatch) {
    console.log('Noot!')
  };
}

/*
  Create Post Action

  Creates a post on a thread.
*/
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
