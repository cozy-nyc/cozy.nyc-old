const initialState = {
  loaded: false,
  activeProfile: null,
  profile: null
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
        error: action.payload
      };
    case 'FETCH_PROFILE_FULFILLED':
      return {
        ...state,
        fecthing: false,
        fetched: true,
        profile: action.result.profile
      };
    default:
      return state;
  }
}

export function getProfile(username) {
  return {
    types: ['FETCH_PROFILE', 'FETCH_PROFILE_FULFILLED', 'FETCH_PROFILE_ERROR'],
    promise: async ({ client }) => {
      const response = await client.get('/profile/', username);
      return response;
    }
  };
}
