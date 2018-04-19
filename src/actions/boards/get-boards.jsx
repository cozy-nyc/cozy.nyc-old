import api from '../../utils/api';

export function fetchBoards() {
   return function(dispatch) {
     api.get('/board/')
        .then((response) => {
           dispatch({type: "FETCH_BOARDS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
           dispatch({type: "FETCH_BOARDS_ERROR", payload: err})
        })
    }
}
