export default function Reducer(
  state = {
    tag: '',
    fetching: false,
    fetched: false,
    threads: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'FETCH_THREADS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_THREADS_REJECTED': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_THREADS_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        tag: action.payload.tag,
        threads: action.payload.threads,
      };
    }
  }
  return state;
}
