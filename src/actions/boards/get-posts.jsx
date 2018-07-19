import api from 'utils/api';

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
