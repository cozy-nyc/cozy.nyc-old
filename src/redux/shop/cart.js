export default function Reducer(
  state = {
    fetching: false,
    fetched: false,
    items: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'FETCH_CART_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_CART_REJECTED': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_CART_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        items: action.payload,
      };
    }
  }
  return state;
}
