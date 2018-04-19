export default function Reducer(
  state = {
    activeitem: {
      fetching: false,
      fetched: false,
      id: -1,
      slug: 'n'
    },
    fetching: false,
    fetched: false,
    items: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    default: {
      break;
    }
    case 'FETCH_ITEMS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_ITEMS_REJECTED': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_ITEMS_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        items: action.payload,
      };
    }
  }
  return state;
}
