import api from 'utils/api';

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

export function fetchBoard() {
  return function (dispatch) {
    api.get('/board/1/')
      .then(response => {
        dispatch({ type: 'FETCH_THREADS_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_THREADS_ERROR', payload: err });
      });
  };
}


export function fetchPosts(id) {
   return function(dispatch) {
     api.get('/thread/'+id )
        .then((response) => {
           dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
           dispatch({type: "FETCH_POSTS_ERROR", payload: err})
        })
    }
}
