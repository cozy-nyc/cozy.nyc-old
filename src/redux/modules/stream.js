const initialState = {
  streamsList: {},
  currentStream: null,
  loaded: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_STREAMS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_STREAMS_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        stream: action.result.streams
      };
    case 'FETCH_USER_STREAM':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_USER_STREAM_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_USER_STREAM_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        currentStream: action.result
      };
    default:
      return state;
  }
}

export function getStreams() {
  return {
    types: ['FETCH_STREAMS', 'FETCH_STREAMS_FULFILLED', 'FETCH_STREAMS_ERROR'],
    promise: async ({ client }) => {
      try {
        const response = await client.get('/stream/list');
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}

export function getStreamByUser(username) {
  return {
    types: ['FETCH_USER_STREAM', 'FETCH_USER_STREAM_FULFILLED', 'FETCH_USER_STREAM_ERROR'],
    promise: async ({ client }) => {
      try {
        const response = await client.get(`/stream/${username}/`);
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}
