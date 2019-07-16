const initialState = {
  categories: [],
  currentBoard: {
    threads: []
  },
  currentThread: {
    post: []
  },
  loaded: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_CATEGORIES_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_CATEGORIES_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        categories: action.result
      };
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

export function getCategories() {
  return {
    types: ['FETCH_CATEGORIES', 'FETCH_CATEGORIES_FULFILLED', 'FETCH_CATEGORIES_ERROR'],
    promise: async ({ client }) => {
      try {
        // TODO: change to /boards/
        const response = await client.get('/board/');
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
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
