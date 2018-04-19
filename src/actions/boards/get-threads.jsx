import api from '../../utils/api';

export function fetchBoard() {
   return function(dispatch) {
     api.get('/board/1/')
        .then((response) => {
           dispatch({type: "FETCH_THREADS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
           dispatch({type: "FETCH_THREADS_ERROR", payload: err})
        })
    }
}
