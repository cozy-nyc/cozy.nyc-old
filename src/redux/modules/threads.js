const initialState = {
  threads: [],
  loaded: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_THREADS':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_THREADS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_THREADS_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        threads: action.result
      };
    default:
      return state;
  }
}

export function getThreads() {
  return {
    types: ['FETCH_THREADS', 'FETCH_THREADS_FULFILLED', 'FETCH_THREADS_ERROR'],
    promise: async ({ client }) => {
      try {
        // TODO: change to /threads/
        const response = await client.get('/thread/');
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}
