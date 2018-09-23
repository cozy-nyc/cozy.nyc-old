import api from 'utils/api';

/*
  Fetch Boards Action

  Gets list of boards from the api.
*/
export function fetchBoards() {
  return function (dispatch) {
    api.get('/board/')
      .then(response => {
        dispatch({ type: 'FETCH_BOARDS_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_BOARDS_ERROR', payload: err });
      });
  };
}

/*
  Fetch Board/Threads

  Gets list of threads from a given board.
*/
export function fetchBoard(tag) {
  return function (dispatch) {
    api.get('/board/' + tag)
      .then(response => {
        dispatch({ type: 'FETCH_THREADS_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_THREADS_ERROR', payload: err });
      });
  };
}

/*
  Fecth THread/Posts Token Action

  GEts info and posts from a thread.

  NOTE: Should be renamed to fetchThread
*/
export function fetchPosts(id) {
  return function (dispatch) {
    api.get('/thread/' + id)
      .then(response => {
        dispatch({ type: 'FETCH_POSTS_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_POSTS_ERROR', payload: err });
      });
  };
}
