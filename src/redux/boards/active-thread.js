export default function Reducer(
  state = {
    id: -1,
    name: '',
    views: -1,
    replyCount: -1,
    imageCount: -1,
    fetching: false,
    fetched: false,
    posts: [],
    error: null
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'FETCH_POSTS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_POSTS_REJECTED': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_POSTS_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        id: action.payload.id,
        posts: action.payload.posts,
        views: action.payload.views,
        replyCount: action.payload.replyCount,
        imageCount: action.payload.imageCount
      };
    }
  }
  return state;
}
