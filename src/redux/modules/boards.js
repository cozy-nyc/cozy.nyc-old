const initialState = {
  categories: [],
  currentBoard: {
    tag: null,
    name: null,
    threads: []
  },
  currentThread: {
    id: null,
    board: null,
    posts: [],
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
    case 'FETCH_BOARD':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_BOARD_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_BOARD_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        currentBoard: action.result
      };
    case 'FETCH_THREAD':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_THREAD_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    case 'FETCH_THREAD_FULFILLED':
      return {
        ...state,
        fetching: true,
        fetched: true,
        currentThread: action.result
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

export function getBoard(boardTag) {
  return {
    types: ['FETCH_BOARD', 'FETCH_BOARD_FULFILLED', 'FETCH_BOARD_ERROR'],
    promise: async ({ client }) => {
      try {
        const response = await client.get(`/board/${boardTag}/`);
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}

export function createThread(data) {
  return {
    // types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: async ({ client }) => {
      try {
        const response = await client.post('/thread/create', data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export function getThread(threadId) {
  return {
    types: ['FETCH_THREAD', 'FETCH_THREAD_FULFILLED', 'FETCH_THREAD_ERROR'],
    promise: async ({ client }) => {
      try {
        // TODO: change to /posts/
        const response = await client.get(`/thread/${threadId}/`);
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}
