const initialState = {
  categories: null,
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
    default:
      return state;
  }
}

export function getCategories() {
  return {
    types: ['FETCH_CATEGORIES', 'FETCH_CATEGORIES_FULFILLED', 'FETCH_CATEGORIES_ERROR'],
    promise: async ({ client }) => {
      try {
        const response = await client.get('/board/');
        return response;
      } catch (error) {
        console.log(error);
        // return catchValidation(error);
      }
    }
  };
}
