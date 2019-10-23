const initialState = {
  discoveries: {},
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_DISCOVERY':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_DISCOVERY_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_DISCOVERY_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        stream: action.result.streams
      };
    default:
      return state;
  }
}
