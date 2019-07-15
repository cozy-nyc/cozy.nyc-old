const initialState = {
  posts: [],
  loaded: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_POSTS_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        posts: action.result
      };
    default:
      return state;
  }
}

export function getPosts() {
  return {
    types: ['FETCH_POSTS', 'FETCH_POSTS_FULFILLED', 'FETCH_POSTS_ERROR'],
    promise: async ({ client }) => {
      try {
        // TODO: change to /posts/
        const response = await client.get('/post/');
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}
