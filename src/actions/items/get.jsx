import api from 'utils/api';

/*
  Fetch Items Action

  IF VAULE is NULL:
    Gets list of all items.
  ELSE:
    Gets list of items with relations to the value given.
*/
export function fetchItems(value) {
  return function (dispatch) {
    if (value === null || value === '') {
      api.get('/item/')
        .then(response => {
          dispatch({ type: 'FETCH_ITEMS_FULFILLED', payload: response.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_ITEMS_ERROR', payload: err });
        });
    } else {
      api.get('/item/')
        .then(response => {
          dispatch({ type: 'FETCH_ITEMS_FULFILLED', payload: response.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_ITEMS_ERROR', payload: err });
        });
    }
  };
}


/*
  Fetch Item Action

  Gets individual item based on id
*/
export function getItem(id) {
  return function (dispatch) {
    api.get('/item/' + id)
      .then(response => {
        dispatch({ type: 'FETCH_ITEM_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ITEM_ERROR', payload: err });
      });
  };
}
