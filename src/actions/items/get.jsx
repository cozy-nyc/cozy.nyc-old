import api from 'utils/api';

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

export function getItem(value) {
  return function (dispatch) {
    api.get('/item/' + value)
      .then(response => {
        dispatch({ type: 'FETCH_ITEM_FULFILLED', payload: response.data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ITEM_ERROR', payload: err });
      });
  };
}
