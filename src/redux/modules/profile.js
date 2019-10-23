const initialState = {
  loaded: false,
  active: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_PROFILE_ERROR':
      return {
        ...state,
        fecthing: false,
        fetched: false,
        error: action.payload
      };
    case 'FETCH_PROFILE_FULFILLED':
      return {
        ...state,
        fecthing: false,
        fetched: true,
        active: action.result
      };
    default:
      return state;
  }
}

export function getProfile(username) {
  return {
    types: ['FETCH_PROFILE', 'FETCH_PROFILE_FULFILLED', 'FETCH_PROFILE_ERROR'],
    promise: async ({ client }) => {
      try {
        const response = await client.get(`/profile/${username}/`);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  };
}
