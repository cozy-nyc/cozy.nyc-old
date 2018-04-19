export default function Reducer(
  state = {
    fetching: false,
    fetched: false,
    boards: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'FETCH_BOARDS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_BOARDS_REJECTED': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_BOARDS_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        boards: action.payload,
      };
    }
  }
  return state;
}
